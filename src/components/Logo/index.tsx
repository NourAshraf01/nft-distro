import Circle from "../Icons/Circle";
import Hexagon from "../Icons/Hexagon";
import Triangle from "../Icons/Triangle";

const Logo = () =>{
    return (<>
        <div className="flex items-center gap-[5px]">
            <div className="fill-[#111111] dark:fill-white"> <Hexagon/> </div>
            <div className="fill-[#111111] dark:fill-white"><Circle/></div>
            <div className="fill-pink-light"><Triangle/> </div>

        </div>
    </>)
}

export default Logo;