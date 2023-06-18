import Link from "next/link";
import Search from "../Icons/Search";
import Logo from "../Logo";
import HeaderLink from "../HeaderLink";
import { useState } from "react";

const Header = () => {
    return (<>
        <div className="flex items-center w-full gap-24">
            <Logo />
            <Nav />
        </div>
    </>)
}

export default Header;

const Nav = () => {
    const [selectedNav, setSelectedNav] = useState('#home');
    return (<>
        <div className="flex items-center w-full place-content-between">
            <div className="fill-[#B7B7B7] dark:fill-grey_milk_weight-dark w-fit bg-[#F3F3F3] dark:bg-black rounded-[20px] flex px-[19px] py-[13px] gap-[16px] items-center title-3">
                <Search />
                <input value={''}  placeholder="Search"  className="bg-transparent outline-none border-none w-fit title-3 placeholder:text-[#B7B7B7] text-[#B7B7B7] dark:text-grey_milk_weight-dark placeholder:dark:text-grey_milk_weight-dark"/>
            </div>
            <div className="flex gap-[25px] title-4">
                <HeaderLink onClick={setSelectedNav} text={'Explore'} activeRef={selectedNav} href="/#home"/>
                <HeaderLink onClick={setSelectedNav} text={'Trending🔥'} activeRef={selectedNav} href="/#trending"/>
                <HeaderLink onClick={setSelectedNav} text={'FAQ'} activeRef={selectedNav} href="/faq"/>

            </div>
        </div>
    </>)
}