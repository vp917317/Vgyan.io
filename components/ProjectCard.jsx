import React from 'react'
//import { Link } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';

function ProjectCard({item}) {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
             <div style={{flexDirection:'row'}}>
             <h6 className="font-bold text-2xl" style={{paddingLeft:30 , color:'green' , padding:20}}>{item.headline}</h6>
             <Image src={item.img} alt="" className='w-full'/>
             </div>
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
                {/* <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button style={{padding:10, background:'white' , color:'purple', borderRadius:20}}>{item.try}</button>
              </a> */}
              <Link href={item.link} style={{
        padding: 10, 
        background: 'white', 
        color: 'purple', 
        borderRadius: 20, 
        textDecoration: 'none', // to remove the default link underline
        display: 'inline-block' // to make the styles apply correctly
    }}>
    {item.try}
</Link>

              </div>
             </div>
    </>
  )
}

export default ProjectCard