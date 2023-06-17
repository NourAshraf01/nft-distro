import { useEffect, useState } from "react"
import { Moon, Sun } from "../Icons"
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
            <div className="flex py-[5rem]">
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
                <div className="flex flex-col">
                    <span className="title-4 text-black dark:text-white">Company</span>
                    <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark">Explore</span>
                    <span>About</span>
                </div>
                <div className="flex flex-col">
                    <span className="title-4 text-black dark:text-white">Creator</span>
                    <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark">FAQ</span>
                    <span>Become Artist</span>
                </div>
                <div className="flex flex-col">
                    <span className="title-4 text-black dark:text-white">Join our community</span>
                    <div className="flex border border-black dark:border-white rounded-[35px] items-center p-[22px] gap-[6px]">
                        <input type="text" placeholder="Enter your email address" name="" id="" />
                        <button className="rounded-full bg-black dark:bg-white grid place-items-center p-[22px]">
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;