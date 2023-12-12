import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper"
import { FaCode } from "react-icons/fa";
import { ABeeZee } from "next/font/google";
import ShreeSoftechLogo from '@/assets/shreesoftech2.jpeg'
import Image from "next/image";
import { PiSuitcaseBold } from "react-icons/pi";
import { Badge } from '@/components/ui/badge'
import { Roboto } from "next/font/google";
import ChatAppLogo from '@/assets/meetme.png'
import SocialMediaAppLogo from '@/assets/instagram(2).png'
import PortfolioWebsiteLogo from '@/assets/boy.png'
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa6"

const abeeZee = ABeeZee({
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

const Work = () => {
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col max-w-3xl mx-auto">
                {/* For expreience */}
                <div className="flex flex-col border-2 dark:bg-gray-800 bg-gray-50 rounded-lg w-full mt-10 py-2">
                    <div className="flex flex-col ">
                        <h1 className="flex mx-2 font-bold items-center text-gray-500 dark:text-gray-300"> <FaCode className='mx-1' />Experience</h1>
                        <div className="flex flex-col mx-2 text-center lg:text-left">
                            <a href="https://www.shreesoftech.com/"><h1 className="text-xl m-2 font-bold text-gray-600 dark:text-gray-300">Intern At Shree Softech(2023-2024)</h1></a>
                            <div className="flex flex-col lg:flex-row md:items-start items-center">
                                <p className={` ${abeeZee.className} indent-5 m-2 text-justify`}>I did my internship at Shree Softtech Bhuj, which is a service-based company developing Android apps and web apps. I built an accounting web app for a Bhuj-based engineering company. To manage their invoices and track all their expenses. I worked there for a year on the company's various projects. I was working with MERN technology to build their application. It was fun to work for them.</p>
                                <Image src={ShreeSoftechLogo} alt="Shree Softech Logo" height='75' width='75' className="m-2 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* For Projects */}
                <div className="flex flex-col mt-5 border-2 dark:bg-gray-800 bg-gray-50 rounded-lg w-full ">
                    <h1 className=" flex m-2 font-bold text-gray-500 items-center dark:text-gray-300="><PiSuitcaseBold className='mx-1' />Project's</h1>
                    <div className="flex   relative pb-10">
                        <div className="">
                            <div className="border-b-2 flex flex-col ">
                                <a href='https://github.com/Mohan1203/Whisper'><h1 className={`${noto.className} text-2xl text-center lg:text-left m-2  font-bold dark:text-gray-300 text-gray-600`}>Chat App</h1></a>
                                <div className='flex  m-2 items-center justify-between flex-col lg:flex-row '>
                                    <p className={`${abeeZee.className} w-10/12 indent-5  text-justify  `}>I built a one-on-one chat app using Nodejs, React, SocketIO, and MongoDB in which users can live chat with friends. I built this functionality using SocketIO it's fun to build this web app.</p>
                                    <Image src={ChatAppLogo} alt='Chat App logo' height={80} width={80} className='lg:mx-5 m-5' />
                                </div>
                                <div className='flex m-2 flex-wrap'>
                                    {
                                        Chat_App.map((item, index) => {
                                            return (
                                                <Badge variant='default' key={index} className='p-1 m-1  '>{item}</Badge>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className='flex flex-col w-full mt-1 border-b-2 dark:bg-gray-800 bg-gray-50 rounded-md'>
                                <h1 className={`${noto.className} text-2xl font-bold lg:text-left m-2 text-center `}>CRUD App</h1>
                                <div className='flex justify-between m-2 items-center flex-col lg:flex-row'> <p className={`${abeeZee.className} w-10/12 indent-5`}>I built a web app that does CRUD operations. It is a simple social media app in which users can upload a photo and also follow his/her friends and like photos of people they are following.</p>
                                    <Image src={SocialMediaAppLogo} alt='Social media app logo' height={80} width={80} className='lg:mx-5 m-5' />
                                </div>
                                <div className='flex m-2 flex-wrap'>
                                    {social_media_app.map((item, index) => {
                                        return (
                                            <Badge variant='default' key={index} className='p-1 m-1'>{item}</Badge>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='flex flex-col w-full mt-1 dark:bg-gray-800 bg-gray-50'>
                                <h1 className={`${noto.className} text-2xl font-bold text-center lg:text-left m-2`}>Portfolio Website</h1>
                                <div className='flex justify-between m-2 items-center flex-col lg:flex-row'> <p className={`${abeeZee.className} w-10/12 indent-5`}>Using NextJs I built a portfolio website in which I also use Typescript, Tailwind CSS and shadcn UI. It has a unique design and a different look from other portfolios.
                                </p>
                                    <Image src={PortfolioWebsiteLogo} alt='Portfolio website' height={80} width={80} className='lg:mx-5 m-5' />
                                </div>
                                <div className='flex m-2 flex-wrap'>
                                    {portfolio_website.map((item, index) => {
                                        return (
                                            <Badge variant='default' key={index} className='p-1 m-1' >{item}</Badge>
                                        )
                                    })}
                                </div>
                            </div>
                            <a href="https://github.com/Mohan1203"><Button className="m-2 rounded-3xl  flex item-center absolute right-0 bottom-0">View More <FaChevronRight className='mx-2' /></Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default Work;