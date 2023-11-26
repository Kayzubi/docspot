import React from 'react'
import Navbar from '../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import bgbottom from '../assets/bg-bottom.png'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
const Home = () => {
  return (
    <div className=' h-[100vh] p-4'>
      <Navbar />
      <section className=' fixed inset-0 h-full w-full z-0 flex pt-60 sm:pt-40 px-10 justify-center'>
        <div>
          <h3 className=' text-center text-7xl md:text-5xl sm:text-2xl animate__animated animate__fadeInDown font-bold leading-normal tracking-widest '>
            Personalized Guide <br />{' '}
            <span className=' relative px-3'>
              {' '}
              at your fingertips{' '}
              <span className=' absolute w-[30px] h-[30px] sm:h-[15px] sm:w-[15px] bg-las-palmas-400 rounded-full -right-5 sm:-right-2 bottom-1/2 translate-y-1/2'></span>
            </span>
          </h3>
          <TypeAnimation
            sequence={[
              'Get tailored advice. Take control of your health journey effortlessly.',
            ]}
            wrapper='div'
            speed={50}
            style={{
              fontSize: '1rem',
              display: 'block',
              marginTop: '10px',
              width: '100%',
              textAlign: 'center',
            }}
          />
          <div className=' flex items-center justify-between mt-10 bg-australian-mint-100 w-[80%] sm:w-full mx-auto py-3 px-2 rounded-md'>
            <p className=' text-shark-600 sm:text-xs'>
              Describe your symptoms...
            </p>
            <Link
              to='/app'
              className=' bg-las-palmas-400 rounded-md px-2 py-2 text-shark-950 flex gap-2 items-center sm:text-sm'>
              Ask me <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
      </section>
      <img
        src={bgbottom}
        alt='background'
        className=' fixed bottom-0 w-full left-0'
      />
    </div>
  )
}

export default Home
