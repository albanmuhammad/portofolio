import React from 'react'

const TechStackCard = ({tech} : {tech: string}) => {
  return (
    <div className="bg-white shadow-md transition-shadow duration-300  p-2 text-center border-2 hover:border-b-4 hover:border-r-4 border-black shadow-black">
        <p className="font-semibold text-gray-800">{tech}</p>
    </div>
  )
}

export default TechStackCard