"use client"

import Image from "next/image"
import logo from "../public/assets/images/logo.svg"
import Menu from "./menu"
import { page } from "../constants"
import Link from "next/link"

function Header({ handleMenu }) {
    return (
        <div className="py-8 flex justify-between items-center">
            <Image src={logo} alt="logo" />

            <div onClick={() => handleMenu(true)} className="md:hidden">
                <Menu />
            </div>

            <div className="hidden md:flex gap-x-8 text-custom-neutral-darkBlue">
                {page.map((item, i) => (
                    <Link href={`#`} key={i} className="hover:text-custom-primary-orange cursor-pointer">{item}</Link>
                ))}
            </div>

        </div>
    )
}

export default Header