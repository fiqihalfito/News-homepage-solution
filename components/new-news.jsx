import Link from "next/link"
import { newNews } from "../constants"

function NewNews() {
    return (
        <div className="bg-custom-neutral-veryDarkBlue px-6 pt-6 my-16 md:m-0">
            <h1 className="text-custom-primary-orange text-3xl md:text-4xl font-bold">New</h1>
            {newNews.map((item, i) => (
                <Link href={`#`} key={i}>
                    <div className={`py-8 group cursor-pointer ${(i < (newNews.length - 1) ? 'border-b' : '')}`}>
                        <h4 className="font-bold text-custom-neutral-offWhite mb-2 text-xl group-hover:text-custom-primary-orange">{item.title}</h4>
                        <p className="text-custom-neutral-blue leading-loose">{item.subtitle}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default NewNews