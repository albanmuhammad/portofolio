import React from 'react'

type ExperienceCardProps = {
    date: string
    title: string
    company: string
    description: string
    techStack: string[]
}


const ExperienceCard = ({ date, title, company, description, techStack }: ExperienceCardProps) => {
    return (
        <div className='flex flex-col md:flex-row w-full bg-white p-6 border-4 hover:border-b-8 hover:border-r-8 border-black shadow-black shadow-md '>
            <div className='md:basis-1/3 w-full flex justify-center items-start mb-4 md:mb-0 text-sm font-medium text-gray-700'>
                {date}
            </div>
            <div className='flex flex-col md:basis-2/3 w-full gap-2'>
                <div className='text-lg font-bold'>{title}</div>
                <div className='text-lg font-semibold'>{company}</div>
                <div className='text-gray-700 whitespace-pre-line'>
                    {description.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {techStack.map((tech, idx) => (
                        <div key={idx} className="bg-white shadow-md transition-shadow duration-300  p-2 text-center border-2 hover:border-b-4 hover:border-r-4 border-black shadow-black">
                            <p className="font-semibold text-gray-800">{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard