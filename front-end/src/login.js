import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginValidation from './loginValidation'

import { useTranslation } from 'react-i18next';

function Login()
{
    const { t, i18n } = useTranslation();
    
    const [values, setValues] = useState({
        email : '',
        password : ''
    })
    const [errors, setErrors]=useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(loginValidation(values));
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-75'>
                { i18n.language == "en" && <button onClick={() => {
                        i18n.changeLanguage("ar");
                    }} >AR</button>
                }
                { i18n.language == "ar" && <button onClick={() => {
                        i18n.changeLanguage('en');
                    }} >EN</button>
                }
                <h1>{t('sign_in')} </h1>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>{t('email')} </label>
                        <input type='email' placeholder={t('email_text')} className='form-control rounded-0' name='email' onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>{t('password')} </label>
                        <input type='password' placeholder={t('password_text')} className='form-control rounded-0' name='password' onChange={handleInput} />
                        {errors.password && <span className='text-danger'>{errors.password} </span>}

                    </div>
                    <button type='submit' className='btn btn-success w-100' ><strong>{t('log_in')} </strong></button>
                    <p></p>
                    <Link to='/signup' className='btn btn-default border w-100'>{t('create_account')} </Link>
                </form>
            </div>
        </div>
    )
}


export default Login