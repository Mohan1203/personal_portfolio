'use client'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import Link from "next/link"
import { navItems } from "@/lib/nav-items"


export default function Nav() {
    const pathname = usePathname();
    const { setTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gray-50 rounded-full dark:bg-gray-800 border-2 mx-2">
            <nav className="mx-auto flex  items-center justify-between py-1 lg:px-3" aria-label="Global">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 mx-2" aria-hidden="true" />
                    </button>
                </div>



                <div className='hidden lg:flex'>
                    {navItems.map((item) => {
                        return (
                            <>
                                <div className="ml-3">
                                    <Link href={item.link} legacyBehavior passHref>
                                        <div className={` cursor-pointer font-medium hover:text-gray-400 ${pathname === item.link ? 'text-blue-500' : "text-gray-700 dark:text-gray-50"}`}>{item.name}</div>
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>

                <div className=" flex  justify-end">
                    <div className="mx-3">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto dark:bg-gray-800 bg-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between ">

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 "
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                {navItems.map((item) => {
                                    return (
                                        <>
                                            <div className="ml-3">
                                                <Link href={item.link} legacyBehavior passHref>
                                                    <div className={` cursor-pointer font-medium hover:text-gray-400 ${pathname === item.link ? 'text-blue-500' : "text-gray-700 dark:text-gray-50"}`}>{item.name}</div>
                                                </Link>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    )
}
