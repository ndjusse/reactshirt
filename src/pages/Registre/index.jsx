import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../RegistreValidation';
import axios from 'axios'


const Register = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        tel: ''
    })
     const navigate = useNavigate(); 
    const [errors, setErrors] = useState({})


    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);

        if (!validationErrors.name && !validationErrors.email && !validationErrors.password && !validationErrors.tel) {
            axios.post('http://localhost:3001/Register', values)
                .then(res =>{
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };


        
    const handleGoogleLogin = () => {
        window.open('http://localhost:3001/auth/google', '_self'); // Redirige vers la route d'authentification Google
    };





    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form action='' onSubmit={handleSubmit} className="border rounded p-4 shadow" style={{ width: '400px' }}>
                <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal text-center">Créer un compte</h1>

                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="floatingName"
                        name='name'
                        onChange={handleInput}
                        placeholder="Nom complet"
                        required
                    />
                    <label htmlFor="floatingName">Nom complet</label>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>

                <div className="form-floating mb-3">
                    <input type="email"
                        className="form-control"
                        id="floatingEmail"
                        name='email'
                        onChange={handleInput}
                        placeholder="nom@exemple.com"
                        required
                    />
                    <label htmlFor="floatingEmail">Adresse email</label>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className="form-floating mb-3">
                    <input type="password"
                        name='password'
                        className="form-control"
                        id="floatingPassword"
                        onChange={handleInput}
                        placeholder="Mot de passe"
                        required
                    />
                    <label htmlFor="floatingPassword">Mot de passe</label>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>

                {/* <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirmer le mot de passe" required />
                    <label htmlFor="floatingConfirmPassword">Confirmer le mot de passe</label>
                </div> */}

                <div className="form-floating mb-3">
                    <input type="tel"
                        name='tel'
                        onChange={handleInput}
                        className="form-control"
                        id="floatingPhone"
                        placeholder="Numéro de téléphone (facultatif)" />
                    <label htmlFor="floatingPhone">Numéro de téléphone (facultatif)</label>
              
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckAgree" required />
                    <label className="form-check-label" htmlFor="flexCheckAgree">
                        J'accepte les termes et conditions
                    </label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">S'inscrire</button>
             
                <p>j'ai  deja un compte</p>
                <Link to='/Login' className="btn btn-defauld border w-100 py-2" >se connecter</Link><br /><br />

                <p><button onClick={handleGoogleLogin} className="btn btn-defauld border w-100 py-2 " >se connecter avec google</button></p>
                <p className="mt-5 mb-3 text-body-secondary text-center">© 2023–2024</p>
            </form>
        </div>
    );
}

export default Register;