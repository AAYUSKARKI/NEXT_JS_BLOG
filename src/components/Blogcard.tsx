'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Image from "next/image";
function Blogcard() {


    const[loading,Setloading] = useState(false)
    const handleDelete = async (e: any) => {
        e.preventDefault();
        Setloading(true)
        setTimeout(()=>{
            alert('YOU ARE GOING TO DELETE THIS!ARE YOU OK?')
        },4000)
        Setloading(false)
    }

    const handleUpdate = (e: any) => {
        e.preventDefault();
        window.location.href=('/createblog')
    }
    return (
        <>
            <div className='bg-slate-700 flex p-5 gap-3 border-green-800'>
                <div className='px-2 py-4'>
                    <Image
                        className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/next.svg"
                        alt="Vercel Logo"
                        width={1000}
                        height={500}
                        priority
                    />
                </div>
                <div>
                    <div className='text-3xl text-white flex justify-center py-4'>
                        How to Ride your favourite Bike in foreign country?
                    </div>
                    <div className='text-2xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, perferendis odit iure distinctio dolor itaque rem. Nihil, cupiditate? Minima eveniet vitae id laboriosam omnis quas assumenda voluptatum repudiandae voluptatibus possimus.
                        Nisi praesentium, illum nam laudantium eos nulla maxime consequatur dolorum fuga natus unde fugit aut? Consectetur maiores quae mollitia. Ab repellat vero cupiditate ipsum non assumenda ex earum porro nesciunt.</div>
                </div>
              
            </div>
        </>
    )
}

export default Blogcard