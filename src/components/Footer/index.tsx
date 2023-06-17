import { useEffect, useState } from "react"
import { ArrowRight, Moon, Sun } from "../Icons"
import Logo from "../Logo"
import Switch from "../Switch"

const Footer = () => {
    const [theme, setTheme] = useState('light');

    function toggleDarkMode() {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        console.log(theme)
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.style.colorScheme = 'light'
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.style.colorScheme = 'dark'
        }
    }, [theme])
    return (<>
        <div className="container">
            <div className="flex py-[5rem] w-full gap-12">
                <div className="flex flex-col gap-5">
                    <Logo />
                    <span className="clash-display clash-display-small">NFT Distro</span>
                    <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark ">Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</span>
                    <div className="flex fill-black dark:fill-white items-center gap-2">
                        <Sun />
                        <Switch enabled={theme === 'dark'} trigger={toggleDarkMode} />
                        <Moon />
                    </div>
                    <span className="caption-2 text-grey_milk_weight-light dark:text-grey_milk_weight-dark"> © Copyright NFT Distro 2023</span>
                </div>
                <div className="flex place-content-between flex-1">
                    <div className="flex flex-col flex-1">
                        <span className="title-4 text-black dark:text-white">Company</span>
                        <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark">Explore</span>
                        <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark">About</span>
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="title-4 text-black dark:text-white">Creator</span>
                        <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark">FAQ</span>
                        <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark">Become Artist</span>
                    </div>
                    <div className="flex flex-col flex-[2]">
                        <span className="title-4 text-black dark:text-white w-fit">Join our community</span>
                        <div className="flex border border-black dark:border-white rounded-[45px] items-center p-[5px] gap-[6px] w-full max-w-[30rem]">
                            <input className="body text-[#A6A6A6] px-[10px] w-full border-none outline-none bg-none bg-transparent" type="text" placeholder="Enter your email address" name="" id="" />
                            <button className="rounded-full bg-black dark:bg-white grid place-items-center p-[22px] fill-white dark:fill-black">
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;