import SvgArrowDown from "../Icons/ArrowDown"

const Select = () => {
    return (<>
        <div className="border-black dark:border-white rounded-[20px] w-[20rem] flex p-[2.2rem] items-center place-content-between border h-[45px]">
            <span className="headline text-black dark:text-white">Recently Added</span>
            <SvgArrowDown/>
        </div>

    </>)
}

export default Select;