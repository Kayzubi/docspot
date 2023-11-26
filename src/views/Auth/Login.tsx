import React from 'react'
import Navbar from '../../components/Navbar'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useGetDeviceMode from '../../hooks/useGetDeviceMode'
import FormInput from '../../components/FormInput'
import { LoginInfo } from './SignUp'
import { Link } from 'react-router-dom'

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short'),
})

const Login = () => {
  const isDarkMode = useGetDeviceMode()

  const formMethods = useForm<LoginInfo>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleLoginFormSubmit: SubmitHandler<LoginInfo> = (data) => {
    // Send user info to backend
    console.log(data)
  }

  return (
    <div
      className={`fixed inset-0 w-full h-full ${
        isDarkMode ? ' bg-shark-950' : 'bg-white-100'
      } pt-36`}>
      <Navbar />
      <div className=' max-w-7xl mx-auto min-h-[75%] grid sm:block grid-cols-2'>
        <div className=' p-4 h-full'>
          <h1 className=' text-3xl mb-2'>Log in!</h1>
          <p className=' text-lg'>
            Enter your details to log in to your accounnt
          </p>
          <br />
          <hr />
          <form onSubmit={formMethods.handleSubmit(handleLoginFormSubmit)}>
            <FormInput
              formMethods={formMethods}
              inputName='email'
              type='text'
              label='Email'
              placeHolder='johndoe@example.com'
            />
            <FormInput
              formMethods={formMethods}
              inputName='password'
              type='password'
              label='Password'
              placeHolder='********'
            />

            <button
              type='submit'
              className=' w-full mt-4 h-[50px] flex items-center justify-center bg-las-palmas-400 text-shark-950 rounded-md'>
              Log in
            </button>
            <p className=' mt-4 text-center'>
              Don't have an account?{' '}
              <Link
                to='/auth/signup'
                className=' font-semibold text-las-palmas-400'>
                Sign up here
              </Link>
            </p>
          </form>
        </div>
        <div className=' h-full sm:hidden bg-australian-mint-100 rounded-br-[20%] flex items-center justify-center'>
          <h1 className=' text-center text-6xl leading-normal font-light  text-shark-950  '>
            Resume your <br />
            <span className=' text-7xl font-bold'>Journey</span> <br /> With Us!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Login
