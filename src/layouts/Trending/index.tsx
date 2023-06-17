import NFTBidCard from "~/components/NFTBidCard";
import NFTCard from "~/components/NFTCard";

const Trending = () => {
    return (<>
        <div className="container flex flex-col gap-80">
            <div className="flex flex-col gap-16">
                <div className="flex justify-between">
                    <span className="header-big">Trending Art 🔥</span>
                    <button className="headline">Discover more</button>
                </div>
                <div className="flex flex-1 gap-8 flex-wrap">
                    <NFTCard nftName="ExBoot #1" currentBid={3.421} nft="0" user="Perperzon" userAvatar="0" />
                    <NFTCard nftName="ExBoot #2" currentBid={3.421} nft="1" user="Richard " userAvatar="1" />
                    <NFTCard nftName="Future of Polygon X" currentBid={3.421} nft="2" user="Perperzon" userAvatar="0" />
                    <NFTCard nftName="Blue Wave #2" currentBid={3.421} nft="3" user="Richard " userAvatar="1" />

                </div>
            </div>
            <div className="flex flex-col gap-16 justify-center items-center">
                <span className="header-big">Featured Collections</span>
                <div className="flex flex-1 gap-28 justify-center w-full flex-wrap">

                    <NFTBidCard position={0} description="We would like to present you The Exboot 3D - Watching you~" nftName="ExBoot #1" currentBid={3.421} nft="0" user="Perperzon" userAvatar="0" />
                    <NFTBidCard description="We would like to present you The Exboot 3D - Watching you~" nftName="ExBoot #2" currentBid={3.421} nft="1" user="Richard " userAvatar="1" />

                </div>
            </div>
        </div>

    </>)
}

export default Trending;