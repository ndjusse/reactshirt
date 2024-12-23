import { Link, useNavigate } from 'react-router-dom';
import validation from '../LoginValidation';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); 
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
         
        console.log('Données envoyées :', values);  

        if (!validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:3001/Login', values)
                .then(res => {
                    // Vérifie si l'authentification a réussi
                    if (res.data.token) { 
                        navigate('/'); // Redirection après connexion réussie
                    } else {
                        alert("Aucun enregistrement trouvé");
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert(err.response?.data?.message || "Erreur lors de la connexion");
                });
        }
    };

    const handleGoogleLogin = () => {
        window.open('http://localhost:3001/auth/google', '_self'); // Redirige vers la route d'authentification Google
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="border rounded p-4 shadow" style={{ width: '300px' }}>
                <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal text-center">Veuillez vous connecter</h1>

                <div className="form-floating mb-3">
                    <input type="email"
                        name='email'
                        className="form-control"
                        id="floatingInput"
                        placeholder="nom@exemple.com"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="floatingInput">Adresse email</label>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className="form-floating mb-3">
                    <input type="password"
                        name='password'
                        className="form-control"
                        id="password"
                        placeholder="Mot de passe"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="floatingPassword">Mot de passe</label>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Souviens-toi de moi
                    </label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">Se connecter</button>
                <p></p>
                <Link to="/Registre" className="btn btn-default border w-100 bg-light">s'inscrire</Link> <br /><br />

                <p><button onClick={handleGoogleLogin} className="btn btn-defauld border w-100 py-2 " >se connecter avec google</button></p>
                <p className="mt-5 mb-3 text-body-secondary text-center">© 2023–2024</p>
            </form>
        </div>
    );
}

export default Login;
