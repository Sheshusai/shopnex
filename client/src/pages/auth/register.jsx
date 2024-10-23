import CommonForm from '@/components/common/form';
import { registerFormControls } from '@/config';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AuthRegister = () => {
  const initialState = {
    userName: '',
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState);

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/auth/register', formData, {
        withCredentials: true
    }).then((data) => console.log(data));
  }

  console.log(formData)

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center '>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new Account </h1>
        <p className='mt-2'>Already have an account 
          <Link className='font-medium text-primary hover:underline ml-2' to='/auth/login'>
            Login
          </Link>
        </p>
      </div>
      <CommonForm 
        formControls={registerFormControls}
        buttonText={'Sign up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthRegister