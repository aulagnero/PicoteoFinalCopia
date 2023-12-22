import { useState } from "react";
import { useDispatch } from "react-redux";
import { Md5 } from 'ts-md5';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LOGO from  "../Home/imagenes/logo-naciones.png"
import { RootState } from "../Redux/store";
import { login, logout } from "../Redux/userSlice";
import { jwtDecode } from 'jwt-decode';
import "./login.css"
import { Link } from "../Home/Card2";

interface LoginResponse {
    status: number;
    success: boolean;
    message: string;
    access_token: string;
}

interface TokenClaims {
    username: string;
    email: string;
    role: string[],
    iat: number;
    exp: number;
}

export const LoginJWT = () => {

    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch();


    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const passwordEncriptado = Md5.hashStr(form.password);

        fetch( `${Link}/auth/login`, { 
            method: 'POST',
            body: JSON.stringify({
                "email": form.username,
                "password": passwordEncriptado
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json() as Promise<LoginResponse>;
            }
            throw new Error('Error en la llamada http, no fue ok');
        }).then(json => {

            localStorage.setItem('token', json.access_token);
            const decodedToken = jwtDecode<TokenClaims>(json.access_token);

            dispatch(login({
                username: decodedToken.username,
                email: decodedToken.email,
                isAuth: true,
                role: decodedToken.role,
            }))
            //que navegue a la ruta que se intento navegar pero estaba protegida
            navigate("/mantenedor");

        }).catch(error => {
            console.log(error);
            dispatch(logout());
            localStorage.removeItem('token');
        });
    }
    function loginWithRedirect(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="container">
            {!user?.isAuth &&
                <div className="container col-5">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className="text-center mb-2">
                                <img src={LOGO} alt="Logo" className="mb-3 logoooo" />
                                <h2 className="card-title">Iniciar sesion</h2>
                            </div>
                            <form onSubmit={handleSubmit} className="mt-4">
                                <div className="form-group">
                                    <label>
                                        <p>Username</p>
                                        <input type="text" name="username" value={form.username} onChange={handleChange} className="form-control" />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <p>Password</p>
                                        <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control" />
                                    </label>
                                </div>
                                <br />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                     <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="card-title">Autenticar con auth0</h3>
                            <button type="button" onClick={() => loginWithRedirect()} className="btn btn-primary">Autenticar</button>
                        </div>
                    </div>  
                    <br />
                    <br />
                    <br />
                    
                </div>
                
            }
            {user?.isAuth && <button type="button" onClick={() => dispatch(logout())} className="btn btn-primary">Cerrar sesion</button>}
        </div>
    )
}



export default LoginJWT;