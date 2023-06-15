import NFTCard from "~/components/NFTCard";

const Trending = () => {
    return (<>
        <div className="container">
            <div className="flex flex-col gap-16">
                <div className="flex justify-between">
                    <span className="header-big">Trending Art 🔥</span>
                    <button className="headline">Discover more</button>
                </div>
                <div className="flex flex-1 gap-8">
                    <NFTCard nftName="ExBoot #1" currentBid={3.421} nft="0" user="Perperzon" userAvatar="0"/>
                    <NFTCard nftName="ExBoot #2" currentBid={3.421} nft="1" user="Richard " userAvatar="1"/>
                    <NFTCard nftName="Future of Polygon X" currentBid={3.421} nft="2" user="Perperzon" userAvatar="0"/>
                    <NFTCard nftName="Blue Wave #2" currentBid={3.421} nft="3" user="Richard " userAvatar="1"/>

                </div>
            </div>
        </div>

    </>)
}

export default Trending;