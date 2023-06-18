import { useState } from "react";
import SvgArrowDown from "../Icons/ArrowDown"

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Recently Added', 'Price: High to low', 'Price: Low to high'];
    return (<>
        <div className="border-black dark:border-white rounded-[20px] w-[20rem] flex p-[2.2rem] items-center place-content-between border h-[45px] relative z-50 cursor-pointer" onClick={() => setIsOpen(open => !open)}>
            <span className="headline text-black dark:text-white">Recently Added</span>
            <div className={`transition-all duration-300 ease-in-out fill-black dark:fill-white ${isOpen ? 'rotate-180' : ''}`}>
                <SvgArrowDown fill="inherit"/>
            </div>
            {isOpen?
            <div className="absolute top-full bg-white dark:bg-black w-full py-[1rem] left-0 card-shadow-2 rounded-[20px] mt-[5px] overflow-hidden">
                {
                    options.map((option) =>
                        <div className="w-full headline text-black dark:text-white py-[1.2rem] px-[2.2rem] hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer">
                            {option}
                        </div>
                    )
                }
            </div>:
            <></>
            }
        </div>

    </>)
}

export default Select;