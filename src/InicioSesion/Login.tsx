import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const login = async (email: string, password: string) => {
        const response = await fetch('https://tu-backend.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Error al iniciar sesión');
        }

        const data = await response.json();
        return data;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;