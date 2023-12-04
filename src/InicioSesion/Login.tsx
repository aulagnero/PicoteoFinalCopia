import LOGO from '../Home/Logo-viña-picoteo.svg';
import { useDispatch, useSelector } from 'react-redux';


import { useState } from "react";
import { loginSuccess } from '../redux/action/Autentificacion';

interface User {
    email: string;
    password: string;
    // Agrega aquí cualquier otro campo que los usuarios puedan tener
}

interface AppState {
    auth: {
        isAuthenticated: boolean;
        user: User | null;
    };
    // Agrega aquí cualquier otro slice de estado que tu aplicación pueda tener
}


const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

    const login = async (email: string, password: string) => {
        const response = await fetch('http://localhost:3004/usuarios');
    
        if (!response.ok) {
            throw new Error('Error al obtener usuarios');
        }
    
        const users: User[] = await response.json();
        const user = users.find(user => user.email === email && user.password === password);
    
        if (!user) {
            throw new Error('Usuario o contraseña incorrectos');
        }
    
        dispatch(loginSuccess(user)); // despacha la acción loginSuccess con el usuario
        return user;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        try {
            await login(email, password);
        } catch (error) {
            console.error(error);
            // Aquí puedes manejar el error como prefieras
        }
    };

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4 mx-auto mt-5">
            <div className="card">
                <div className="card-body">
                <h3 className="text-center mb-4">Iniciar Sesión</h3>
                {isAuthenticated ? <p>Bienvenido de nuevo!</p> : null}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    </div>
                    <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                    Iniciar Sesión
                    </button>
                    <img src={LOGO} alt="" />
                </form>
                </div>
            </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        </div>
    );
};

export default Login;