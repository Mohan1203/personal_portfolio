import Image from "next/image";
import hiiMemoji from "@/assets/hiimemoji.jpeg"
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa6"
import GithubIcon from "@/assets/github.png"
import IntagramIcon from "@/assets/instagram.png"
import RedditIcon from "@/assets/reddit.png"
import LinkedInIcon from "@/assets/linkedin.png"
import { FaLink } from "react-icons/fa6";

const About = () => {
    return (
        <>
            <div className="flex gap-1 mt-10 flex-col">
                <h1 className="font-bold text-left text-xl text-gray-500 dark:text-gray-300">About</h1>
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="flex w-full lg:w-[75%]  border-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div className="flex flex-col lg:items-start items-center ">
                            <h1 className="text-3xl p-2 font-semibold my-5 lg:my-0">I'm Mohan</h1>
                            <div className="flex flex-col items-center lg:flex-row">
                                <p className="lg:text-left px-2  indent-5 text-center my-2 lg:m-0">
                                    Hi, I'm Mohan dhila a web developer using Mern stack technology and also know Nextjs as well. I can build full-stack web applications using React, Nodejs, Expressjs, MongoDB, and Nextjs and also deploy them successfully.</p>
                                <Image src={hiiMemoji} alt="Profile Image" className="rounded-[100%] lg:m-2 m-5" height={150} width={100} ></Image>
                            </div>
                            <Button className="w-32 rounded-full m-2 "><a href="/about" className="flex items-center">Learn More<FaChevronRight className='ml-2 ' /></a></Button>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-[25%] border-2 rounded-lg bg-gray-50 dark:bg-gray-800 flex-col ">
                        <h1 className="px-2 font-bold flex text-gray-500  items-center dark:text-gray-300"><FaLink className='mx-1' />Links</h1>

                        <div className="grid grid-cols-2 justify-items-center ">
                            <a href="https://github.com/Mohan1203"><Image src={GithubIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image></a>
                            <a href="https://instagram.com"><Image src={IntagramIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image></a>
                            <a href="https://reddit.com"><Image src={RedditIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image> </a>
                            <a href="https://linkedin.com">
                                <Image src={LinkedInIcon} alt="Github Icon" height={80} width={80} className="m-2"></Image></a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About;