import { Wallet } from "../Icons";


type ButtonProps = {
    onClick: Function
}
const Button = ({onClick}:ButtonProps)=>{
    return (<>
        <button onClick={()=>onClick()} className="rounded-[20px] flex items-center justify-center gap-[16px] p-[20px] pink-gradient w-[30rem] outline-none border-none">
            <Wallet color={'white'}/>
            <span className="title-4 text-white">Connect Wallet</span>
        </button>
    </>)
}

export default Button;