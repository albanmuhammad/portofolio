'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Contact = () => {

    const contactRef = useRef(null)
    const isContactInView = useInView(contactRef, { once: true, margin: '-100px' })

  return (
    <section id='contact' className='w-full min-h-[100vh] flex justify-center mt-8'>
        <motion.div
                ref={contactRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="container grid h-full items-center justify-center grid-cols gap-6"
            >
                <div className="flex justify-center items-center w-full">
                    <Image
                    src={'/omoriLamp.png'}
                    alt={'dekorasi'}
                    height={300}
                    width={300}
                    className="object-contain"
                    />
                </div>
                <div className='flex flex-col justify center items-center mt-4'>
                    <div className='text-4xl font-bold text-center'>
                        Get in Touch With Me!
                    </div>
                    <div className='flex flex-col gap-4 mt-8'>
                        <a 
                            href='mailto:albanmuhammad07@gmail.com' 
                            className='flex items-center gap-6'
                        >
                            <FaEnvelope className='text-3xl text-gray-700' />
                            <span className='font-semibold'>albanmuhammad07@gmail.com</span>
                        </a>
                        <div className='flex items-center gap-6'>
                            <a 
                                href='https://www.linkedin.com/in/alban-muhammad-907452191/' 
                                target='_blank' 
                                rel='noopener noreferrer' 
                                className='flex items-center gap-6'
                            >
                                <FaLinkedin className='text-3xl text-gray-700' />
                                <span className='font-semibold'>linkedin.com/in/alban-muhammad</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
    </section>
  )
}

export default Contact