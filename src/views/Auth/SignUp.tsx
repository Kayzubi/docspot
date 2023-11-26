import React from 'react'
import Navbar from '../../components/Navbar'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useGetDeviceMode from '../../hooks/useGetDeviceMode'
import FormInput from '../../components/FormInput'
import { Link } from 'react-router-dom'

export interface LoginInfo {
  email: string
  password: string
}

interface SignUpInfo extends LoginInfo {
  confirm_password: string
  full_name: string
}

const signUpSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Email is required'),
  full_name: yup.string().required('Fullname is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short'),
  confirm_password: yup
    .string()
    .trim()
    .required('Passwords must match')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

const SignUp = () => {
  const isDarkMode = useGetDeviceMode()

  const formMethods = useForm<SignUpInfo>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  })

  const handleSignupFormSubmit: SubmitHandler<SignUpInfo> = (data) => {
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
          <h1 className=' text-3xl mb-2'>Sign Up!</h1>
          <p className=' text-lg'>It's introduction time</p>
          <br />
          <hr />
          <form onSubmit={formMethods.handleSubmit(handleSignupFormSubmit)}>
            <FormInput
              formMethods={formMethods}
              inputName='full_name'
              type='text'
              label='Fullname'
              placeHolder='John Doe'
            />
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
            <FormInput
              formMethods={formMethods}
              inputName='confirm_password'
              type='password'
              label='Confirm Password'
              placeHolder='********'
            />
            <button
              type='submit'
              className=' w-full mt-4 h-[50px] flex items-center justify-center bg-las-palmas-400 text-shark-950 rounded-md'>
              Create Account
            </button>
            <p className=' mt-4 text-center'>
              Already have an account?{' '}
              <Link
                to='/auth/login'
                className=' font-semibold text-las-palmas-400'>
                Log in here
              </Link>
            </p>
          </form>
        </div>
        <div className=' h-full sm:hidden bg-australian-mint-100 rounded-br-[20%] flex items-center justify-center'>
          <h1 className=' text-center text-6xl leading-normal font-light text-shark-950 '>
            Begin your <br />
            <span className=' text-7xl font-bold'>Journey</span> <br /> With Us!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SignUp
