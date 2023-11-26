import React, { FormEvent, useRef, useState } from 'react'
import useGetDeviceMode from '../hooks/useGetDeviceMode'
import {
  IoIosArrowRoundForward,
  IoMdAdd,
  IoMdCloseCircleOutline,
} from 'react-icons/io'
import { PiChatCenteredTextThin } from 'react-icons/pi'
import MessageItem from '../components/MessageItem'
import { Link, useParams } from 'react-router-dom'
import { greeting } from '../helpers'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import useOnClickOut from '../hooks/useOnClickOut'

const Chat = () => {
  const isDarkMode = useGetDeviceMode()
  const inputRef = useRef<HTMLInputElement>(null)
  const [navOpen, setNavOpen] = useState(false)

  const { id } = useParams()

  const sidebarRef = useOnClickOut(() => setNavOpen(false))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    /// get message from ref and send
    if (!inputRef.current?.value) return

    console.log(inputRef.current.value)
  }

  return (
    <div
      className={`fixed inset-0 w-full h-full ${
        isDarkMode ? ' bg-shark-950' : 'bg-white-100'
      }`}>
      <div className=' h-[70px] flex items-center justify-between px-5'>
        <h2 className=' font-semibold text-2xl'>
          Doc<span className=' text-las-palmas-400 font-black'>Spot</span>
        </h2>
        <div className=' flex items-center gap-3 sm:hidden'>
          <p>John Doe</p>
          <span className=' rounded-full h-[30px] w-[30px] bg-shark-950'>
            <img src='' alt='' />
          </span>
        </div>
        <button
          className=' hidden md:block'
          onClick={() => setNavOpen(!navOpen)}>
          <HiOutlineMenuAlt3 />
        </button>
      </div>
      <div
        className={`${
          isDarkMode ? 'bg-shark-900' : 'bg-shark-50'
        } chat-area flex pt-1`}>
        <div
          className={` h-full w-[200px] ${
            isDarkMode ? 'bg-shark-950' : 'bg-white-100'
          } rounded-r-md sm:hidden py-20 px-2`}>
          <Link
            to='/app'
            className=' flex items-center justify-between text-sm'
            onClick={() => setNavOpen(false)}>
            New Chat <IoMdAdd />
          </Link>

          <div className=' mt-5'>
            <p className=' text-sm font-semibold text-shark-700'>Recent</p>
            <div className=' py-4 flex flex-col gap-5'>
              <Link
                to='/app/1'
                className=' flex items-center gap-2 text-sm'
                onClick={() => setNavOpen(false)}>
                <PiChatCenteredTextThin /> Backpain diagnosis
              </Link>
              <Link
                to='/app/2'
                className=' flex items-center gap-2 text-sm'
                onClick={() => setNavOpen(false)}>
                <PiChatCenteredTextThin /> Backpain diagnosis
              </Link>
              <Link
                to='/app/3'
                className=' flex items-center gap-2 text-sm'
                onClick={() => setNavOpen(false)}>
                <PiChatCenteredTextThin /> Backpain diagnosis
              </Link>
            </div>
          </div>
        </div>

        {navOpen && (
          <div
            className={` ${
              isDarkMode ? 'bg-shark-950' : 'bg-white-100'
            } fixed inset-0 w-full h-full backdrop-blur-sm bg-opacity-5`}>
            <div
              ref={sidebarRef}
              className={` h-full w-[50%] absolute ${
                navOpen ? 'animate__slideInLeft' : 'animate__slideOutLeft'
              }  animate__animated inset-0 ${
                isDarkMode ? 'bg-shark-950' : 'bg-white-100'
              } rounded-r-md px-2`}>
              <div className=' h-[50px] flex justify-end mb-10'>
                <button onClick={() => setNavOpen(false)}>
                  <IoMdCloseCircleOutline />
                </button>
              </div>
              <Link
                to='/app'
                className=' flex items-center justify-between text-sm'>
                New Chat <IoMdAdd />
              </Link>

              <div className=' mt-5'>
                <p className=' text-sm font-semibold text-shark-700'>Recent</p>
                <div className=' py-4 flex flex-col gap-5'>
                  <Link
                    to='/app/1'
                    className=' flex items-center gap-2 text-sm'>
                    <PiChatCenteredTextThin /> Backpain diagnosis
                  </Link>
                  <Link
                    to='/app/2'
                    className=' flex items-center gap-2 text-sm'>
                    <PiChatCenteredTextThin /> Backpain diagnosis
                  </Link>
                  <Link
                    to='/app/3'
                    className=' flex items-center gap-2 text-sm'>
                    <PiChatCenteredTextThin /> Backpain diagnosis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className=' w-full flex gap-5 flex-col justify-between p-6'>
          <div className=' flex-auto w-[80%] sm:w-full overflow-auto mx-auto'>
            {id ? (
              <>
                {' '}
                <MessageItem
                  question='How to get money?'
                  response=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro,
        perspiciatis temporibus aut vitae quo! Voluptas, aliquam doloribus. Id
        neque officia eius blanditiis amet, velit pariatur praesentium. Ipsa,
        incidunt. Unde.'
                />
                <MessageItem
                  question='How to get money?'
                  response=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro,
        perspiciatis temporibus aut vitae quo! Voluptas, aliquam doloribus. Id
        neque officia eius blanditiis amet, velit pariatur praesentium. Ipsa,
        incidunt. Unde.'
                />
                <MessageItem
                  question='How to get money?'
                  response=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore porro,
        perspiciatis temporibus aut vitae quo! Voluptas, aliquam doloribus. Id
        neque officia eius blanditiis amet, velit pariatur praesentium. Ipsa,
        incidunt. Unde.'
                />
                <MessageItem
                  question='How to get money?'
                  response=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, accusantium. Quibusdam assumenda quae corporis! Repellendus eius hic quas commodi, quisquam sed non, alias voluptatem aut tempora obcaecati dolorum earum facilis distinctio ex consequuntur suscipit autem culpa quaerat. Culpa corporis necessitatibus molestias error, suscipit repellendus ratione.'
                />
              </>
            ) : (
              <div className=' h-full flex items-center justify-center flex-col'>
                <h1 className=' text-5xl sm:text-4xl font-semibold mt-5 w-full'>
                  {greeting('John')}
                </h1>
                <h5 className=' text-2xl sm:text-lg w-full'>
                  How may I be of assistance today?
                </h5>
              </div>
            )}
          </div>
          <form
            onSubmit={onSubmit}
            className=' flex items-center justify-between bg-australian-mint-100 w-[80%] sm:w-full mx-auto py-3 px-2 rounded-md'>
            <input
              type='text'
              className=' text-shark-600 sm:text-xs bg-transparent flex-auto outline-none px-1'
              placeholder='Describe your symptoms...'
              ref={inputRef}
            />
            <button
              type='submit'
              className='bg-las-palmas-400 rounded-md px-2 py-2 text-shark-950 flex gap-2 items-center sm:text-sm'>
              Ask me <IoIosArrowRoundForward />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat
