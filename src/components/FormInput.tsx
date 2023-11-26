// eslint-disable-next-line import/named
import { useState } from 'react'
import { clsx } from '../helpers'
import useGetDeviceMode from '../hooks/useGetDeviceMode'
import { IoEye, IoEyeOff } from 'react-icons/io5'

type FormInputProps = {
  formMethods: any
  inputName: string
  type: string
  label: string
  placeHolder?: string
}

const FormInput = ({
  formMethods,
  inputName,
  type,
  label,
  placeHolder,
}: FormInputProps) => {
  const [changeType, setTypeChange] = useState(type)

  const isDarkMode = useGetDeviceMode()
  return (
    <div className=' my-4'>
      <label htmlFor={inputName} className=' font-thin text-sm mb-2 flex'>
        {label}:
      </label>
      <div
        className={` flex border ${
          formMethods.formState.errors[inputName]
            ? 'border-error-700'
            : isDarkMode
            ? 'border-white-100'
            : 'border-shark-950'
        } h-[50px] rounded-lg px-2`}>
        <input
          {...formMethods.register(inputName)}
          id={inputName}
          type={changeType}
          placeholder={placeHolder}
          className=' bg-transparent w-full outline-none'
        />

        {type === 'password' && (
          <button
            type='button'
            onClick={() =>
              setTypeChange(changeType === 'password' ? 'text' : 'password')
            }>
            {changeType !== 'password' ? <IoEye /> : <IoEyeOff />}
          </button>
        )}
      </div>
      {!!formMethods.formState.errors && (
        <p className=' text-xs text-right text-error-700'>
          {formMethods.formState.errors[inputName]?.message}
        </p>
      )}
    </div>
  )
}

export default FormInput
