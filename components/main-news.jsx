import Image from "next/image"
import Link from "next/link"
import { mainNews as data } from "../constants"

function MainNews() {
    return (
        <div className="col-span-2 md:grid grid-cols-2 ">
            <div className="mb-4 col-span-2">
                <Image src={`/assets/images/${data.imageMobile}`} alt="image" width={300} height={300} className="w-full md:hidden" />
                <Image src={`/assets/images/${data.imageDesktop}`} alt="image" width={300} height={300} className="w-full hidden md:block" />
            </div>
            <h1 className="text-5xl md:text-6xl leading-none mb-4 font-extrabold text-custom-neutral-veryDarkBlue">{data.title}</h1>
            <div className="md:flex flex-col justify-between items-start">
                <p className="text-custom-neutral-darkBlue mb-8 md:mb-0">{data.subtitle}</p>
                <Link href={`#`} className="py-4 px-8 bg-custom-primary-red text-custom-neutral-offWhite font-bold tracking-[.25rem] hover:bg-custom-neutral-veryDarkBlue">READ MORE</Link>
            </div>
        </div>
    )
}

export default MainNews