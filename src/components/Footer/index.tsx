import Logo from "../Logo"

const Footer = () => {
    return (<>

        <div className="flex">
            <div className="flex flex-col">
                <Logo />
                <span className="clash-display clash-display-small">NFT Distro</span>
                <span className="body text-grey_milk_weight-light dark:text-grey_milk_weight-dark "></span>
            </div>
        </div>
    </>)
}