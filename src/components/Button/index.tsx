import { Wallet } from "../Icons";


type ButtonProps = {
    onClick: Function,
    text: string,
    className?: string
}
const Button = ({onClick,text,className}:ButtonProps)=>{
    return (<>
        <button onClick={()=>onClick()} className="rounded-[20px] flex items-center justify-center gap-[16px] p-[20px] pink-gradient max-w-[30rem] outline-none border-none w-full">
            <Wallet color={'white'}/>
            <span className={`title-4 text-white ${className ? className:''}`}>{text}</span>
        </button>
    </>)
}

export default Button;