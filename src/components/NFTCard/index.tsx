import img0 from '../../assets/0.png';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import { Etheruem } from '../Icons';
import UserAvatar from '../UserAvatar';

type NFTCardProps = {
    user: string;
    userAvatar: string;
    nftName: string;
    nft: string;
    currentBid: number;
}

const NFTCard = ({ user, userAvatar, nftName, nft, currentBid }: NFTCardProps) => {
    return (<>
        <div className="flex flex-col bg-white dark:bg-light_black_grey-dark rounded-[12px] p-[10px] card-shadow gap-[10px] hover-zoom flex-1 relative">

            <div className="rounded-[5px]">
                {
                    nft === "0" ?
                        <img width={'100%'} src={img0.src} alt="" /> :
                        nft === "1" ?
                            <img width={'100%'} src={img1.src} alt="" /> :
                            nft === "2" ?
                                <img width={'100%'} src={img2.src} alt="" /> :
                                <img width={'100%'} src={img3.src} alt="" />


                }
            </div>
            <div className='flex flex-col gap-[10px] p-[5px]'>
                <div className='flex flex-1'>
                    <span className='title-4'>{nftName}</span>
                </div>

                <div className="flex justify-between">
                    <div className='flex items-center gap-[5px]'>
                        <UserAvatar userAvatar={userAvatar} verified={true} />
                        <span className='headline'>{user}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='caption-2 text-grey_milk_weight-light'>Current Bid</span>
                        <div className='flex items-center gap-[10px] fill-black dark:fill-white'>
                            <Etheruem  fill="inherit"/>
                            <span className='headline'>{currentBid}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default NFTCard;