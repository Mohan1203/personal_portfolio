import React from 'react'
import Image from 'next/image'
import ChatAppLogo from '@/assets/meetme.png'
import { ABeeZee, Roboto } from 'next/font/google'
import { Badge } from '@/components/ui/badge'
import SocialMediaAppLogo from '@/assets/instagram(2).png'
import PortfolioWebsiteLogo from '@/assets/boy.png'
import { PiSuitcaseBold } from "react-icons/pi";

const mea = ABeeZee({
    weight: '400',
    subsets: ['latin']
})

const noto = Roboto({
    weight: '900',
    subsets: ['latin']
})

const Chat_App = [
    'NodeJS', 'ReactJS', 'SocketIO', 'ExpressJS', 'MongoDB', 'JWT', 'BcryptJS', 'ChakraUI'
]

const social_media_app = [
    'NodeJS', 'ReactJS', 'Axios', 'ExpressJS', 'Multer', 'MongoDB', 'React-Redux',
]

const portfolio_website = [
    'NextJS', 'ReactJS', 'Tailwind CSS', 'Shadcn UI', 'Typescript'
]

function WorkProfile() {
    return (
        <>
            <div className=' flex flex-col mt-5 w-full' id='Work'>

                <h1 className='font-bold text-xl text-left text-gray-500 dark:text-gray-300'>Work</h1>
                <div className='flex flex-col w-full  '>
                    <div className='border-2  bg-gray-50 dark:bg-gray-800 rounded-md'>
                        <h1 className='font-bold text-xl text-left text-gray-500 m-1 flex items-center dark:text-gray-300'><PiSuitcaseBold className='mx-1' /> Projects</h1>
                        <a href='https://github.com/Mohan1203/Whisper'><h1 className={`${noto.className} text-2xl text-left m-2  font-bold`}>Chat App</h1></a>
                        <div className='flex flex-col lg:flex-row m-2  items-center justify-between '>
                            <p className={`${mea.className} w-10/12 indent-5  text-left`}>I built a one-on-one chat app using Nodejs, React, SocketIO, and MongoDB in which users can live chat with friends. I built this functionality using SocketIO it's fun to build this web app.</p>
                            <Image src={ChatAppLogo} alt='Chat App logo' height={80} width={80} className='m-5 lg:mx-5' />
                        </div>
                        <div className='flex m-2 flex-wrap'>
                            {
                                Chat_App.map((item) => {
                                    return (

                                        <Badge variant='default' className='p-1 m-1 '>{item}</Badge>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='flex flex-col w-full mt-1 border-2 dark:bg-gray-800 bg-gray-50 rounded-md'>
                        <h1 className={`${noto.className} text-2xl font-bold text-left m-2`}>CRUD App</h1>
                        <div className='flex flex-col lg:flex-row justify-between m-2 items-center'> <p className={`${mea.className} w-10/12 indent-5`}>I built a web app that does CRUD operations. It is a simple social media app in which users can upload a photo and also follow his/her friends and like photos of people they are following.</p>
                            <Image src={SocialMediaAppLogo} alt='Social media app logo' height={80} width={80} className='lg:mx-5 m-5 ' />
                        </div>
                        <div className='flex m-2 flex-wrap'>
                            {social_media_app.map((item) => {
                                return (
                                    <Badge variant='default' className='p-1 m-1'>{item}</Badge>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col w-full mt-1 border-2 dark:bg-gray-800 rounded-xl bg-gray-50'>
                        <h1 className={`${noto.className} text-2xl font-bold text-left m-2`}>Portfolio Website</h1>
                        <div className='flex justify-between m-2 items-center flex-col lg:flex-row'> <p className={`${mea.className} w-10/12 indent-5`}>Using NextJs I built a portfolio website in which I also use Typescript, Tailwind CSS and shadcn UI. It has a unique design and a different look from other portfolios.
                        </p>
                            <Image src={PortfolioWebsiteLogo} alt='Portfolio website' height={80} width={80} className='lg:mx-5 m-5' />
                        </div>
                        <div className='flex m-2 flex-wrap'>
                            {portfolio_website.map((item) => {
                                return (
                                    <Badge variant='default' className='p-1 m-1' >{item}</Badge>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default WorkProfile