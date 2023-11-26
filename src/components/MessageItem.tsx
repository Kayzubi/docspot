import React from 'react'
import useGetDeviceMode from '../hooks/useGetDeviceMode'
import { MdOutlineContentCopy } from 'react-icons/md'
import { HiOutlineHandThumbUp, HiOutlineHandThumbDown } from 'react-icons/hi2'

interface Props {
  question: string
  response: string
}

const MessageItem = ({ question, response }: Props) => {
  const isDarkMode = useGetDeviceMode()

  return (
    <div className=' my-4'>
      <div className=' flex items-center gap-3 mb-4'>
        <span className=' w-[45px] h-[45px] rounded-full bg-las-palmas-600 overflow-hidden'>
          <img src='' alt='' className=' w-full h-full object-cover' />
        </span>
        <p>{question}</p>
      </div>
      <div
        className={`${
          isDarkMode ? 'bg-shark-950' : 'bg-white-100'
        } rounded-lg mt-2 pt-6 px-6 pb-2`}>
        <p>{response}</p>
        <div className=' mt-4 flex gap-4 items-center py-3 justify-end'>
          <button type='button'>
            <MdOutlineContentCopy />
          </button>
          <button type='button'>
            <HiOutlineHandThumbUp />
          </button>
          <button type='button'>
            <HiOutlineHandThumbDown />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageItem
