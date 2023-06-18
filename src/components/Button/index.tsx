import { Wallet } from "../Icons";


type ButtonProps = {
    onClick: Function,
    text: string,
    className?: string
    icon?: boolean
    active?: boolean
}
const Button = ({ onClick, text, className, icon = true,active = true }: ButtonProps) => {
    return (<>
        <button onClick={() => onClick()} className={`rounded-[20px] flex items-center justify-center gap-[16px] h-full max-w-[30rem] outline-none border-none w-full min-h-max ${active? 'pink-gradient':'bg-transparent'}`}>
            {icon?<Wallet color={'white'} />:<></>}
            <span className={`title-4 ${className ? className : ''} ${active?'text-white':'text-[#8B8B8B]'}`}>{text}</span>
        </button>
    </>)
}

export default Button;