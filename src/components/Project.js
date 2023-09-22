import React from 'react'
import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";


const Project = ({ title, description, gitlink, vercel }) => {
    return (
        <div className='hover:scale-[101%] relative hover:bg-[#181d5f] ml-40  
        flex flex-col sm:flex-row text-white sm:ml-8 my-6 items-center justify-around 
        bg-[#1e1e6e] rounded-2xl w-[400px] h-[210px] sm:w-[1150px] sm:h-[190px]' style={{transition: 'all .2s'}}>
            <h1 className='font-semibold text-xl sm:text-xl' style={{scale: '1.5'}}>{title}</h1>
            <p className='text-center overflow-auto flex flex-row items-center'>{description}</p>
            <div className='flex flex-row w-[200px] mb-2 justify-around'>
                <a href={gitlink} rel="noopener noreferrer" target="_blank">
                    <FiGithub className='hover:scale-125 ' size={33} />
                </a>
                {vercel &&
                    <a href={vercel} rel="noopener noreferrer" target="blank">
                        <BsBoxArrowUpRight className='hover:scale-125' size={33} />
                    </a>
                }
            </div>
        </div>
    )
}

export default Project