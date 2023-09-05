"use client"
import { usePathname } from 'next/navigation'
import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const MobileNavbar = () => {
    const [mobileNav, setMobileNav] = useState(false)

    const navbarItems = [
        {name:'Product',url:'product',},
        { name: 'Earn smart', url: 'earn-smart' },
        { name: 'How it works', url: 'how-it-works' },
        {name:'Talk to us',url:'Talk to us',},
    ]

    const pathname = usePathname()

    return (
        <div className="relative xl:hidden my-0.5 w-11/12 lg:w-11/12 xl:w-full mx-auto">
            <div className="bg-white flex items-center justify-between w-full py-3.5 px-5">
                <div className="">
                    <Link href='/'>
                        <Image
                        alt="logo"
                        src='/assets/img/logo-main.svg'
                        objectFit="contain"
                        width={140}
                        height={60}
                        priority
                        />
                    </Link>
                </div>
                <button onClick={() => setMobileNav(true)}>
                    <Icon icon="eva:menu-2-fill" className="text-3xl" />
                </button>
            </div>
            {   mobileNav && (
                <div className="fixed inset-0 mobile-nav bg-white z-10">
                    <div className="flex items-center justify-between w-full py-3.5 px-5">
                        <div className="">
                            <Link href='/'>
                                <Image
                                    alt="logo"
                                    src='/assets/img/logo-main.svg'
                                    objectFit="contain"
                                    width={140}
                                    height={60}
                                    priority
                                />
                            </Link>
                        </div>
                        <button onClick={() => setMobileNav(false)}>
                            <Icon icon="ant-design:menu-unfold-outlined" className="text-3xl" />
                        </button>
                    </div>
                    <ul className='flex flex-col items-center gap-10 mt-5'>
                        {
                            navbarItems.map(({url,name},index) => {
                                const active = pathname === url
                                return (
                                <li key={index}>
                                    <Link
                                        className={`${active && 'text-primary-500 bg-transparent'} capitalize
                                        font-medium text-black transition-all hover:font-medium
                                        hover:text-primary hover:bg-transparent hover:border-b-primary hover:border-b-4 hover:rounded-none
                                        active:font-medium active:text-white active:bg-transparent active:border-b-primary active:border-b-4 active:rounded-none
                                        focus:font-medium focus:text-primary focus:bg-transparent focus:border-b-primary focus:border-b-4 focus:rounded-none`}
                                        onClick={()=>setMobileNav(false)}
                                        href={`#${url}`}
                                    >
                                        {name}
                                    </Link>
                                </li>
                                )
                            }
                            )
                        }
                        <Link href='/'>
                            <li className='px-7 cursor-pointer py-3 border-transparent transition-all border-2 font-medium text-primary bg-transparent capitalize
                            hover:text-primary hover:font-semibold active:bg-transparent focus:border-primary focus:bg-transparent'
                            >
                                log in
                            </li>
                        </Link>
                        <Link href='/'>
                            <li className='cursor-pointer text-center border-2 border-primary py-1.5 px-5  bg-white text-sm transition-all  font-semibold text-primary capitalize rounded-[6px] '
                            >
                                Get Ad Space
                            </li>
                        </Link>
                    </ul>
                </div>
            )  }
        </div>
    )
}

export default MobileNavbar