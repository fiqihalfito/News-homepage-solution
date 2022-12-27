import Image from "next/image"
import close from "../public/assets/images/icon-menu-close.svg"

export default function Close() {
    return (
        <Image src={close} alt="close" className="relative" />
    )
}