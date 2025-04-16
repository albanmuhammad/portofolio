'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillCard from './skillCard'
import ExperienceCard from './experienceCard'

const About = () => {
    const skillRef = useRef(null)
    const experienceRef = useRef(null)
    const isSkillInView = useInView(skillRef, { once: true, margin: '-100px' })
    const isExpInView = useInView(experienceRef, { once: true, margin: '-100px' })

    return (
        <section id='about' className='w-full min-h-[100vh] flex flex-col justify-center items-center mt-8'>

            {/* Skills Section */}
            <motion.div
                ref={skillRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="container grid h-full items-center justify-center md:grid-cols-2 gap-6 mt-12 py-16"
            >
                <div className='text-xl px-8 md:px-0 text-center md:text-left'>
                    Hello stranger! 👋, my name is Alban Muhammad and I am a front-end developer and mobile application developer, passionate
                    about digital products that help people experience everyday life, not endure it.
                </div>
                <div className="flex h-full flex-col justify-center gap-12 md:ml-8">
                    <h1 className="text-center text-4xl font-bold md:text-left">
                        My Skills
                    </h1>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        <SkillCard name='Flutter' />
                        <SkillCard name='JavaScript' />
                        <SkillCard name='TypeScript' />
                        <SkillCard name='React JS' />
                        <SkillCard name='Next JS' />
                        <SkillCard name='Laravel' />
                        <SkillCard name='PHP' />
                        <SkillCard name='HTML' />
                        <SkillCard name='Tailwind CSS' />
                        <SkillCard name='Git' />
                    </div>
                </div>
            </motion.div>

            {/* Experiences Section */}
            <motion.div
                ref={experienceRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isExpInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='w-full bg-gray-50 flex justify-center'
            >
                <div className="container grid h-full items-center justify-center md:grid-cols-3 gap-6 my-8 py-12">
                    <div className='hidden md:block h-full'>
                        <div className=' flex flex-col col-span-1 justify-between h-full text-xl px-8 md:px-0 text-center md:text-left'>
                            <div className='font-semibold'>
                                Still passionate developer 👨‍💻 on a continuous journey of growth and discovery.
                            </div>
                            <div className='font-semibold'>
                                I believe, each experience have their own challanges and difficulties, helping me to grow technically and creatively 💡.
                            </div>
                            <div className='font-semibold'>
                                I started as a curious IT student 👨‍🎓 with nothing but ambition — now I’m building real solutions that make a difference.
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full flex-col col-span-2 justify-center gap-12 md:ml-8">
                        <h1 className="text-center text-4xl font-bold md:text-left">
                            My Experiences
                        </h1>
                        <div className='flex flex-wrap gap-4 justify-center px-4 md:px-0'>
                            <ExperienceCard
                                date="oct- 2024 - Present"
                                title="Analyst – Application Development"
                                company='IDS MEDICAL SYSTEMS INDONESIA'
                                description="Built and maintained web apps using React, Next.js, and Tailwind CSS. Collaborated closely with designers and backend developers."
                                techStack={['React', 'Next.js', 'Tailwind CSS', 'TypeScript']}
                            />
                            <ExperienceCard
                                date="Sep 2023 - Oct 2024"
                                title="IT Intern"
                                company='IDS MEDICAL SYSTEMS INDONESIA'
                                description={`
                                • Design, develop, and maintain high-quality, cross-platform mobile applications using the Flutter framework on schedule.\n
                                • Managed to resolves and identify more than 20 bugs within flutter application to ensure application functionality. \n
                                • Assist and support senior specialist to translate requirements of the business process to technical solutions and implementations.`}
                                techStack={['Flutter', 'Git']}
                            />
                            <ExperienceCard
                                date="Jun 2023 - Jul 2023"
                                title="CONTRACT WEB DEVELOPER"
                                company='UPTD PUSKESMAS KERTASMAYA'
                                description="Successfully build, style, and ship high quality web portal for UPTD PUSKESMAS KERTASMAYA using the Next.js framework, completed within the targeted timeline"
                                techStack={['React', 'Next JS', 'Tailwind CSS', 'TypeScript', 'HTML']}
                            />
                            <ExperienceCard
                                date="Nov 2022 - Dec 2022"
                                title="CONTRACT WEB DEVELOPER "
                                company='PT. RESTU INTI NUSA ABADI'
                                description=" Successfully designed, developed, and maintained a high-quality company profile landing page using React.js, delivering the
                                    project within the expected timeline."
                                techStack={['React JS', 'Tailwind CSS', 'JavaScript', 'HTML']}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
