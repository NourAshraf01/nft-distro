import Link from "next/link";

type HeaderLinkProps = {
    text: string;
    href: string;
    activeRef: string;
    onClick: Function;
}

const HeaderLink = ({ text, href, activeRef,onClick }: HeaderLinkProps) => {
    console.log(activeRef)
    return (<>
        <a onClick={()=>onClick(href)} href={href} className={`${href === activeRef ? 'text-black dark:text-white' : 'text-grey_milk_weight-light dark:text-grey_milk_weight-dark'}`}>{text}</a>

    </>)
}

export default HeaderLink;