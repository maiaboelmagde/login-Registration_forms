import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import signupValidation from './signupValidation'

import { useTranslation } from 'react-i18next'

function Signup()
{
    const { t, i18n } = useTranslation();

    const [values, setValues] = useState({
        name : "",
        email : "",
        password : "",
        password_confirm : ""
    })
    const [errors, setErrors]=useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(signupValidation(values));
        setValues();
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
                <h1>{t('sign_up')} </h1>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>{t('email')} </label>
                        <input type='email' placeholder={t('email_text')} className='form-control rounded-0' name='email' onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label>{t('name')} </label>
                        <input type='text' placeholder={t('name_text')} className='form-control rounded-0' name='name' onChange={handleInput}/>
                        {errors.name && <span className='text-danger'>{errors.name} </span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'>{t('password')} </label>
                        <input type='password' placeholder={t('password_text')} className='form-control rounded-0' name='password' onChange={handleInput}/>
                        {errors.password && <span className='text-danger'>{errors.password} </span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password_confirm'>{t('password_confirmation')} </label>
                        <input type='password' placeholder={t('password_confirmation_text')} className='form-control rounded-0' name='password_confirm' onChange={handleInput}/>
                        {errors.password_confirm && <span className='text-danger'>{errors.password_confirm} </span>}
                    </div>

                    <button className='btn btn-success w-100' type='submit'><strong>{t('sign_up')} </strong></button>
                    <p></p>
                    <Link to='/' className='btn btn-default border w-100'>{t('back_to_login')} </Link>

                </form>
            </div>
        </div>
    )
}


export default Signup