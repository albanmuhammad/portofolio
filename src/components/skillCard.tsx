import React from 'react'


const SkillCard = ({ name }: { name: string }) => {
    return (
        <div className="bg-white shadow-md  transition-shadow duration-300  px-6 py-4 max-w-[160px] text-center border-2 hover:border-b-4 hover:border-r-4  border-black shadow-black">
            <p className="text-lg font-semibold text-gray-800">{name}</p>
        </div>
    )
}

export default SkillCard