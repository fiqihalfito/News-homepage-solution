import Image from "next/image"
import Link from "next/link"
import { otherNews } from "../constants"

function OtherNews() {
    return (
        <div className="col-span-3 grid grid-flow-row md:grid-flow-col gap-y-8 mb-20">
            {otherNews.map((item, i) => (
                <Link href={`#`} key={item.image}>
                    <div className="grid grid-flow-col gap-x-6 group cursor-pointer">
                        <div>
                            <Image src={"/assets/images/" + item.image} alt="img" width={100} height={200} className="w-autox" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-custom-neutral-blue">0{i + 1}</h1>
                            <h1 className="font-extrabold my-2 text-custom-neutral-veryDarkBlue group-hover:text-custom-primary-red">{item.title}</h1>
                            <p className="text-custom-neutral-darkBlue">{item.subtitle}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default OtherNews