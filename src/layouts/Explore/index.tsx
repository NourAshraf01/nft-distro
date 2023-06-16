import NFTCard from "~/components/NFTCard";
import Select from "~/components/Select"

const Explore = ()=>{

    return (<>
    
        <section className="w-full my-[5rem]">
            <div className="container flex flex-col gap-16">
                <div className="flex place-content-between">
                    <span className="header-big text-black dark:text-white">Explore</span>
                    <Select/>
                </div>
                <div className="grid gap-12 w-full grid-equal-width">
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />

                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />
                     <NFTCard currentBid={3.421} nft="0" nftName="ExBoot #1" user="Perperzon" userAvatar="0" />

                </div>
            </div>
        </section>
    </>)
}

export default Explore;