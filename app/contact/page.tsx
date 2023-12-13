import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { FaHeadphones } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea";
import { FaLink } from "react-icons/fa";
import GithubIcon from "@/assets/github.png"
import IntagramIcon from "@/assets/instagram.png"
import RedditIcon from "@/assets/reddit.png"
import LinkedInIcon from "@/assets/linkedin.png"
import Image from "next/image";

const ContactMe = () => {
    return (
        <MaxWidthWrapper>
            <div className="max-w-3xl mx-auto flex flex-col mt-5">
                <h1 className="flex text-left text-xl m-1 font-bold text-gray-500 items-center dark:text-gray-300"> <FaHeadphones className="mx-1" />Contact Me</h1>
                <div className="flex flex-col bg-gray-50 border-2 rounded-lg dark:bg-gray-800">
                    <form className="flex flex-col items-center mt-5" action='mailto:ahirmohan101@gmail.com'>
                        <Input placeholder="Name" type="text" className="w-10/12 m-2 p-5 border-2 dark:border-white" />
                        <Input placeholder="Email" type="email" className="w-10/12 m-2 p-5 border-2 dark:border-white" />
                        <Input placeholder="Company" type="text" className="w-10/12 m-2 p-5 border-2 dark:border-white" />
                        <Textarea placeholder="Message" className="w-10/12 m-2 border-2 dark:border-white" />
                        <Button className="m-2" type="submit">Submit</Button>
                    </form>
                </div>
                <div className="flex bg-gray-50 dark:bg-gray-800 border-2 mt-2 rounded-lg flex-col">
                    <h1 className="flex m-2 items-center font-bold text-gray-500 dark:text-gray-300"><FaLink className='mx-1' />Links</h1>
                    <div className=" lg:flex mx-2 grid grid-cols-2 justify-items-center">
                        <a href="https://github.com/Mohan1203"><Image src={GithubIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image></a>
                        <a href="https://instagram.com/mr_ahir_101"><Image src={IntagramIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image></a>
                        <a href="https://reddit.com/u/mr_ahir101"><Image src={RedditIcon} alt="Github Icon" height={80} width={80} className=" m-2"></Image> </a>
                        <a href="https://in.linkedin.com/in/mohan-dhila-b6571022b">
                            <Image src={LinkedInIcon} alt="Github Icon" height={80} width={80} className="m-2"></Image></a>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default ContactMe;