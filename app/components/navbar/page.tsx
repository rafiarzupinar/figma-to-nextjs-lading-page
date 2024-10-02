"use client"; // Bu satırı ekleyin

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { IoCloseSharp } from 'react-icons/io5'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion,AnimatePresence } from 'framer-motion';
import { stringify } from 'querystring';

const navContainer={
   visible:{
    x:0,
    opacity:1,
    transition:{
      x:{velocity:200},
      duration:.3
    }
   },
   hidden:{
    x:-250,
    opacity:0,
    transition:{
      x:{velocity:100},
      duration:.3
    }
   }
}

const navList={
  visible:{
    opacity:1,
    transition:{
      delayChildren:0.2,
      staggerChildren:0.07,
    }
  },
  hidden:{
    opacity:0,
    transition:{
     staggerChildren:0.05,
     staggerDirection:-1
    }
  }
}


const links=[
  {
    name:'Features',
    link:'#'

  },
  {
    name:'Pricing',
    link:'#'

  },
  {
    name:'Enterprise',
    link:'#'

  },
  {
    name:'Careers',
    link:'#'

  }
]

const Page = () => {
  const navItem={
    visible:{
      opacity:1,
      y:0,
      transition:{
       y:{stiffness:1000, velocity:-100}
      }
    },
    hidden:{
      y:50,
      opacity:0,
      transition:{
        y:{stiffness:1000, velocity:-100}
       }
    }
  }

  const [open,setOpen]=useState(false)
  return (
 
     <section className="w-full flex justify-center">
        <div className='lg:mx-20 mx-5 max-w-[1536px] w-full my-6 flex'>
           <div>          
          <Image
          alt='logo'
          src={'/Images/navbar/Logo.svg'}
          width={0}
          height={0}
          className='lg:w-[35px] lg:h-[35px] w-[45px] h-[45px]'
           />
           </div>
          
           <div className="flex lg:justify-between w-full  justify-end  ">          
            <div className="my-auto ml-16  block xs:hidden">
              <ul className='flex gap-14'>
                
               {
                    links.map((link,index)=>(
                     <li key={index}>
                     <Link className='font-medium text-[#36485c] text-[16px] hidden lg:block' href={link.link}>{link.name}</Link>
                    </li>
                          ))
               }

              </ul>
              </div>
              <div className="my-auto flex">
                <span className='mr-14 lg:block hidden '>
                  <Link href="#" className='font-medium text-[#36485c] text-[16px] '>Open An Account</Link>
                </span>
                <span className='cursor-pointer flex'>
                  <Image src={'/Images/navbar/User.svg'} alt='user' width={0} height={0} className='h-[32px] w-[32px] lg:w-[36px] lg:h-[36px] mr-3'/>
                  <span className='font-medium text-[#36485c] lg:block hidden'>Sing in</span>
                </span>
                <span className='lg:hidden block pt-1 mr-6' onClick={() => setOpen(!open)}>
                {open ? <IoCloseSharp className='w-[26px] h-[26px]'/> : <AiOutlineMenu className='w-[26px] h-[26px]' />}
                </span>
              </div>
           </div>
        <div className='absolute'>
        <AnimatePresence>
          
            {open &&(
              <motion.div  className='navbar' initial='hidden' animate={open ? "visible":"hidden"} variants={navContainer}>
                 <span className='pt-1 float-end mr-6' onClick={()=>setOpen(!open)}>
                 {open ? <IoCloseSharp className='w-[26px] h-[26px]'/> :""}
                 </span>
                 <motion.ul className='navList' initial="hidden" animate="visible" exit="hidden" variants={navList  }>
                   {
                    links.map((link,index)=>(
                      <motion.li key={index} className='nav-items' variants={navItem}>
                        <Link href={link.link}>{link.name}</Link>
                      </motion.li>
                    ))
                   }
                 </motion.ul>
              </motion.div>
            )}
           
        </AnimatePresence>
        </div>
        </div>
    
      </section>
  )
}

export default Page