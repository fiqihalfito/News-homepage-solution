import { page } from "../constants";
import Close from "./close";

export default function SidebarMenu({ handleMenu }) {
    return (
        <div className="fixed right-0 h-screen w-[70%] bg-custom-neutral-offWhite px-8">
            <div className="py-8 flex justify-end items-center mb-20" onClick={() => handleMenu(false)}>
                <Close />
            </div>
            {page.map((item, i) => (
                <div key={i} className="mb-8 text-xl">{item}</div>
            ))}
        </div>
    )
}
