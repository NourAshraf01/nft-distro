import { useState } from "react";
import { ArrowRight } from "../Icons";

type AccordionProps = {
    title: string;
    content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (<>
        <div className="w-full relative flex flex-col max-w-[81rem] gap-[2rem]">
            <div className="w-full rounded-[16px] card-shadow dark:shadow-none bg-white dark:bg-[#333333] title-4 flex items-center place-content-between p-[20px] cursor-pointer" onClick={() => { setIsOpen(open => !open) }}>
                <span className="text-black dark:text-white">{title}</span>
                <div className={`fill-black dark:fill-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90' : ''}`}>
                    <ArrowRight />
                </div>
            </div>
            <div className={`bg-transparent max-w-full w-full title-3 transition-all duration-300 ease-in-out overflow-hidden px-[5rem] ${isOpen ? 'max-h-[130px]' : 'max-h-0'}`}>
                <p>{content}
                </p>
            </div>
        </div>
    </>)
}

export default Accordion;