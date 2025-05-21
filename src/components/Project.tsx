'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TechStackCard from './TechStackCard';
import { FaGithub, FaGlobe, } from 'react-icons/fa';

const Page = () => {
    const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('web');

    const projects = [
        {
            companyName: 'Puskesmas Kertasmaya',
            mobile: false,
            shortDescription: 'Web Portal for UPTD Kertasmaya Indramyu',
            description: 'Full-featured patient tracking and report system...',
            link: 'https://restuinvestama.com/',
            github: '-',
            techStack: ['React', 'HTML', 'Tailwind CSS', 'Next JS', 'TypeScript'],
            foto: '/uptdkertasmaya.png',
        },
        {
            companyName: 'Restu Investama',
            mobile: false,
            shortDescription: 'Company Profile for PT. Restu Inti Nusa Abadi',
            description: 'Custom built ERP for logistics and inventory...',
            link: 'https://puskesmaskertasemaya.indramayukab.go.id/',
            github: '-',
            techStack: ['React', 'HTML', 'CSS'],
            foto: '/restuinvestama.png',
        },
        {
            companyName: 'Rombis Lajon',
            mobile: true,
            shortDescription: 'Mobile Travel Booking Application',
            description: 'Lightweight mobile PWA for field health agents...',
            link: '-',
            github: 'https://github.com/albanmuhammad/rombis_lajon',
            techStack: ['Flutter'],
            foto: '/rombisLajon.jpeg',
        },
    ];

    const filteredProjects = projects.filter((p) => p.mobile === (activeTab === 'mobile'));

    return (
        <section id="project" className="w-full min-h-[100vh] flex flex-col justify-center items-center mt-24 py-10 px-8">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>

            {/* Tabs */}
            <div className="flex gap-4 my-6">
                <button
                    onClick={() => setActiveTab('web')}
                    className={`px-4 py-2 rounded-full border transition ${activeTab === 'web' ? 'bg-black text-white' : 'bg-white text-black'
                        }`}
                >
                    Web
                </button>
                <button
                    onClick={() => setActiveTab('mobile')}
                    className={`px-4 py-2 rounded-full border transition ${activeTab === 'mobile' ? 'bg-black text-white' : 'bg-white text-black'
                        }`}
                >
                    Mobile
                </button>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 py-2 gap-6 w-full max-w-5xl">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col w-full bg-white p-6 border-4 hover:border-b-8 hover:border-r-8 border-black shadow-black shadow-md"
                    >
                        <div className="w-full h-72 relative bg-white flex items-center justify-cente">
                            <Image
                                src={project.foto}
                                alt={project.companyName}
                                layout="fill"
                                objectFit="contain"
                            // className='scale-90'
                            />
                        </div>
                        <div className="mb-2 flex flex-col">
                            <h3 className="text-lg font-bold text-black">{project.companyName}</h3>
                            <p className="text-lg font-semibold text-black mt-2">{project.shortDescription}</p>
                            <div className='flex mt-2 gap-3'>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-6'
                                >
                                    <FaGlobe className='text-3xl text-gray-700' />
                                </a>
                                <a
                                    href={project.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-6'
                                >
                                    <FaGithub className='text-3xl text-gray-700' />
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {project.techStack.map((tech, idx) => (
                                <TechStackCard key={idx} tech={tech} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Page;
