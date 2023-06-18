import { NextPage } from "next"
import Head from "next/head";
import Accordion from "~/components/Accordion";
import Button from "~/components/Button";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Search from "~/components/Icons/Search";

const FAQ: NextPage = () => {
    return (<>
        <Head>
            <title>NFT Distro</title>
            <meta name="description" content="NFT marketplace" />
            <link rel="icon" href="/distro_logo.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
        </Head>

        <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.509,0.96 C0.28,0.887,0.103,0.858,0,0.853 V-0.004 H1 V0.942 C0.902,0.978,0.668,1,0.509,0.96"></path></clipPath>
        </svg>

        <main className="w-full overflow-y-auto scroll-smooth relative bg-white dark:bg-black flex flex-col overflow-x-hidden gap-[10rem]">
            <div className="bg-light_black_grey-light dark:bg-light_black_grey-dark clip-path absolute top-0 left-0 w-full h-[90vh] z-10"></div>
            <section className="w-full min-h-[100vh] z-20 relative h-[1px]">
                <div className="container w-full h-full" style={{ paddingTop: '20px' }}>
                    <Header />
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <div className="flex flex-col items-center justify-center w-fit h-full gap-[50px]">
                            <div className="w-full flex flex-col justify-center items-center gap-[20px]">
                                <span className="header-alt text-center dark:text-grey_milk_weight-dark text-grey_milk_weight-light">FAQ</span>
                                <span className="clash-display-2">Frequently asked questions</span>
                                <span className="title-3 text-center w-[75%]">Here, you'll find answers to the most commonly asked questions about our products, services, and policies.</span>
                            </div>

                            <div className="fill-[#B7B7B7] dark:fill-[#B7B7B7] w-[70%] bg-[#F3F3F3] dark:bg-black rounded-[20px] flex px-[19px] py-[13px] gap-[16px] items-center title-3">
                                <Search />
                                <input value={''} placeholder="Search your ask" className="bg-transparent outline-none border-none w-fit title-3 placeholder:text-[#B7B7B7] text-[#B7B7B7] dark:text-[#B7B7B7] placeholder:dark:text-[#B7B7B7]" />
                            </div>

                            <div className="w-[70%] flex items-center gap-[5rem]">
                                <div className="flex-1 h-[4.7rem]">
                                    <Button onClick={() => { }} text="General" icon={false} />
                                </div>
                                <div className="flex-1 h-[4.7rem]">
                                    <Button onClick={() => { }} text="NFT Product" icon={false} active={false} />
                                </div>
                                <div className="flex-1 h-[4.7rem]">
                                    <Button onClick={() => { }} text="Payment" icon={false} active={false}/>
                                </div>
                            </div>

                            <div className="flex flex-col w-fit gap-[3rem]">
                                <Accordion title="What is an NFT marketplace?" content="An NFT marketplace is a platform that allows users to buy, sell, and trade non-fungible tokens (NFTs). NFTs are unique digital assets that can represent anything from artwork and collectibles to in-game items and virtual real estate."/>
                                <Accordion title="How does buying an NFT work?" content="An NFT marketplace is a platform that allows users to buy, sell, and trade non-fungible tokens (NFTs). NFTs are unique digital assets that can represent anything from artwork and collectibles to in-game items and virtual real estate."/>
                                <Accordion title="What are the benefits of owning an NFT?" content="An NFT marketplace is a platform that allows users to buy, sell, and trade non-fungible tokens (NFTs). NFTs are unique digital assets that can represent anything from artwork and collectibles to in-game items and virtual real estate."/>
                                <Accordion title="Are there any risks associated with buying NFTs?" content="An NFT marketplace is a platform that allows users to buy, sell, and trade non-fungible tokens (NFTs). NFTs are unique digital assets that can represent anything from artwork and collectibles to in-game items and virtual real estate."/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    </>
    )
}

export default FAQ;