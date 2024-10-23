import CommonForm from '@/components/common/form';
import { loginFormcontrols } from '@/config';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AuthLogin = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState);

  const onSubmit = () => {

  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center '>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Login</h1>
        <p className='mt-2'>Don't have an account 
          <Link className='font-medium text-primary hover:underline ml-2' to='/auth/register'>
            Register
          </Link>
        </p>
      </div>
      <CommonForm 
        formControls={loginFormcontrols}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthLogin