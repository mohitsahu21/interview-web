import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col pt-5'>
        <div>
    <h1 className='text-5xl'>Welcome to Interview Adda</h1>
    </div>
    <div className='mt-6'>
         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We provide interview questions for Javascript',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We provide interview questions for React.js',
        1000,
        'We provide interview questions for Node.js',
        1000,
        'We provide interview questions for HTML',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>

    </div>
   
    </>
  )
}

export default Home