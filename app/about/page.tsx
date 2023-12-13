import React from 'react'
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper'
import HiMemoji from '@/assets/hiimemoji.jpeg'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { PiNotepadBold } from "react-icons/pi";
import GithubIcon from "@/assets/github.png"
import IntagramIcon from "@/assets/instagram.png"
import RedditIcon from "@/assets/reddit.png"
import LinkedInIcon from "@/assets/linkedin.png"
import { FaLink } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge"
import { clsx } from 'clsx'


const roboto1 = Roboto({
    weight: '900',
    subsets: ['latin']
})

const roboto2 = Roboto({
    weight: '400',
    subsets: ['latin']
})

const skills = [
    'ReactJS', 'NodeJS', 'TailwindCSS', 'ExpressJS', 'MongoDB', 'NextJS', 'Typescript', 'Javascript', 'HTML', 'CSS', 'Python', 'Github', 'Git', 'C', 'Java', 'Visual Studio', 'Firebase', 'Shadcn', 'ChakraUI', 'Bootstrap'
]

function page() {
    return (
        <MaxWidthWrapper>
            <div className='flex flex-col max-w-3xl mx-auto '>
                <div className='flex flex-col dark:bg-gray-800 bg-gray-50 w-full border-2 mt-10 rounded-lg items-center  '>
                    <div className='flex items-center flex-col text-center'>
                        <Image src={HiMemoji} alt='Memoji' height={100} width={100} className='rounded-full m-10' />
                        <h1 className='font-bold text-xl text-gray-600 dark:text-gray-50'>Hi I'm Mohan 👋</h1>
                        <h1 className={` ${roboto1.className}  font-extrabold m-2 text-4xl text-gray-700 dark:text-gray-300`}>Passionate About building <u>Apps</u>.</h1>
                        <h3 className={`m-2 text-xl text-gray-700 dark:text-gray-300`}>a <b className='font-bold'>Software developer</b> based in Gujarat.</h3>
                        <p className={`${roboto2.className} w-[80%] text-gray-700 my-6 mx-2 dark:text-gray-300`}>
                            Currently interested in developing quality applications to solve problems. Rather than developing casual applications.
                        </p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col w-full gap-4 mt-4 '>
                    <div className='lg:w-[75%] w-full bg-gray-50 dark:bg-gray-800 border-2 flex flex-col rounded-lg'>
                        <span className='px-2 flex items-center font-bold text-gray-500 dark:text-gray-200'><PiNotepadBold className='mx-1' /> Skills</span>
                        <div className='m-2 flex-wrap '>
                            {skills.map((skill, index) => {
                                return (
                                    <Badge className='m-1 p-2' key={index}>{skill}</Badge>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex w-full lg:w-[25%] border-2 rounded-lg bg-gray-50 flex-col dark:bg-gray-800 ">
                        <span className="px-2 font-bold flex text-gray-500  items-center dark:text-gray-200"><FaLink className='mx-1' />Links</span>

                        <div className="grid grid-cols-2  justify-items-center">
                            <a href="https://github.com/Mohan1203"><Image src={GithubIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image></a>
                            <a href="https://instagram.com/mr_ahir_101"><Image src={IntagramIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image></a>
                            <a href="https://reddit.com/u/mr_ahir101"><Image src={RedditIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image> </a>
                            <a href="https://in.linkedin.com/in/mohan-dhila-b6571022b">
                                <Image src={LinkedInIcon} alt="Github Icon" height={80} width={80} className="m-2"></Image></a>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default page