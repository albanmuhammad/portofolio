
import About from '@/components/about'
import Contact from '@/components/Contact'
import Project from '@/components/Project'
import RoleCycle from '@/components/RoleCycle'
import React from 'react'

const Page = () => {
    return (
        <>
            <section id='main' className='w-full min-h-[100vh] flex justify-center items-center flex-col py-10 px-6 pattern'>
                <div>
                    <span className='text-4xl font-bold'>
                        HI!
                    </span>
                    <span className='text-4xl font-bold text-gray-600'>
                        &nbsp;I&apos;M ALBAN MUHAMMAD
                    </span>
                </div>
                <RoleCycle />
                <div className='mt-6 text-xl'>Transforming ideas into seamless experiences across web and mobile platforms.</div>
            </section>
            <About />
            <Project/>
            <Contact/>
        </>
    )
}

export default Page