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
                    <div className='hidden md:block h-full relative'>
                        {/* Vertical line */}
                        <div className="absolute left-4 top-0 bottom-0 w-1 bg-black mx-auto rounded-full"></div>

                        <div className='flex flex-col col-span-1 justify-between h-full text-xl px-8 md:px-12 text-center md:text-left space-y-16 relative'>
                            {/* Dot 1 */}
                            <div className="relative">
                                <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-md"></span>
                                <div className='font-semibold'>
                                    Still passionate developer 👨‍💻 on a continuous journey of growth and discovery.
                                </div>
                            </div>

                            {/* Dot 2 */}
                            <div className="relative">
                                <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-md"></span>
                                <div className='font-semibold'>
                                    I believe, each experience have their own challenges and difficulties, helping me to grow technically and creatively 💡.
                                </div>
                            </div>

                            {/* Dot 3 */}
                            <div className="relative">
                                <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-md"></span>
                                <div className='font-semibold'>
                                    I started as a curious IT student 👨‍🎓 with nothing but ambition — now I’m building real solutions that make a difference.
                                </div>
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
                                description={`
                                    • Developed and maintained company CRM frontend application with Flutter to ensure application functionality, user experience, along with investigating and resolving bugs. \n
                                    • Developed and maintained the mobile version of company CRM application, handling frontend development with Flutter, HTML, CSS, JavaScript and jQuery to ensure it mirrors the functionality of the main application while enhancing the user experience by investigating and resolving bugs. \n
                                    • Maintained the company’s claim management system application with Laravel to support seamless data flow and functionality, along with identifying and fixing issues. \n
                                    • Provided technical solutions and supported the application architect by developing change requests (CRs) in response to end-user requirements, with the goal of introducing new features, enhancing system functionality, and optimizing user experience \n
                                    • Managed Gitlab repositories, created branches, and reviewed merge requests along with deployed and built flutter applications. \n
                                    • Collaborated with the team to upgrade the Flutter and Java codebase for existing application. \n
                                    • Successfully collaborated with the team to reduce loading time by up to 60% within the application. \n
                                    `}
                                techStack={['Flutter', 'Laravel', 'GIT', 'JavaSCript', 'SQL']}
                            />
                            <ExperienceCard
                                date="Sep 2023 - Oct 2024"
                                title="IT Intern"
                                company='IDS MEDICAL SYSTEMS INDONESIA'
                                description={`
                                • Design, develop, and maintain high-quality, cross-platform mobile applications using the Flutter framework on schedule.\n
                                • Managed to resolves and identify more than 20 bugs within flutter application to ensure application functionality. \n
                                • Assist and support senior specialist to translate requirements of the business process to technical solutions and implementations.`}
                                techStack={['Flutter', 'GIT']}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
