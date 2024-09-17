'use client'

import Link from "next/link"
import Image from "next/image"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const SideBar = ({user}:SiderbarProps) => {

    const pathname = usePathname();

  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Horizon Logo"
                    className="size-[24px] max-xl:size-14"
                />
                <h1 className="sidebar-logo">Horizon</h1>
            </Link>

            {sidebarLinks.map((item) => {
                /**
                Need to figure out what page the user is currently
                on, using pathname, so we can change the 
                stlying using CN library. It does this by checking
                if the specific item route equals the path, OR the
                start of the path equals item route, because there 
                are sub pages
                */
                const isActive = 
                pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                    <Link 
                        href={item.route} 
                        key={item.label}
                        className={cn
                            ('sidebar-link', {
                            'bg-bank-gradient': isActive
                        })}
                        /* 
                        Dont need to know how CN works 
                        But input is cn("when false styling", {"when true styling": variable})
                        And this variable is a boolean that determines
                        the true and false toggle
                        */
                    >
                        <div className="relative size-6">
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={cn({'brightness-[3] invert-0':isActive})}
                            />
                        </div>
                        <p className={cn("sidebar-label", {"!text-white": isActive})}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
            User
        </nav>
        Footer
    </section>
  )
}

export default SideBar