import Link from "next/link";
import { useRouter } from "next/router";

type HeaderLinkProps = {
    text: string;
    href: string;
    activeRef: string;
    onClick: Function;
}

const HeaderLink = ({ text, href, activeRef,onClick }: HeaderLinkProps) => {
    const router = useRouter();

    return (<>
        <Link scroll={false} onClick={()=>onClick(href)} href={href} className={`${href === router.asPath ? 'text-black dark:text-white title-4' : 'text-[#6B6B6B] dark:text-grey_milk_weight-dark title-3'}`}>{text}</Link>

    </>)
}

export default HeaderLink;