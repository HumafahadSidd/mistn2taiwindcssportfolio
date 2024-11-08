import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='h-screen'>
        
      <section id="home" className="text-center flex justify-center text-black mt-2">
        
        <div className='mt-6 '>
         <Image src="/images/img1.jpeg" width="300" height="300" alt='pic'  />
        </div>
           <p className='mt-20 ml-2'>
            I am a passionate frontend developer <br /> with experience in building
            responsive web applications using <br />modern tools like React and
            Next.js.
           
          </p>
              
        </section>

    </div>
  )
}

export default Hero