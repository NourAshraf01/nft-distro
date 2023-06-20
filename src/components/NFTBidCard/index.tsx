import { useEffect, useState } from 'react';
import img0 from '../../assets/0.png';
import img1 from '../../assets/1.png';
import { Etheruem } from '../Icons';
import UserAvatar from '../UserAvatar';
import Button from '../Button';

type NFTBidCardProps = {
    user: string;
    userAvatar: string;
    nftName: string;
    nft: string;
    currentBid: number;
    description: string;
    position?: number;
}

const NFTBidCard = ({ user, userAvatar, nftName, nft, currentBid, description,position }: NFTBidCardProps) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const getTime = (deadline: number) => {
        const time = deadline - Date.now();
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const deadline = Date.now() + (74.5 * 60 * 1000);
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);

    }, [])
    return (<>
        <div className="flex bg-white dark:bg-light_black_grey-dark rounded-[9px] p-[2.1rem] card-shadow-2 gap-[10px] flex-1 relative max-w-fit">
            <div className="rounded-[15px] h-full">
                {
                    nft === "0" ?
                        <img  src={img0.src} height={'100%'} style={{height:'100%',maxWidth:'revert'}} alt="" /> :
                        <img  src={img1.src} alt="" height={'100%'} style={{height:'100%',maxWidth:'revert'}} />


                }
            </div>
            <div className='flex flex-col gap-[2rem] p-[1.5rem] max-w-fit max-h-full min-w-min min-h-0'>
                <div className='flex items-center gap-[5px]'>
                    <UserAvatar userAvatar={userAvatar} verified={true} />
                    <span className='headline text-black dark:text-white'>{user}</span>
                </div>
                <div className='flex'>
                    <span className='large-title text-black dark:text-white'>{nftName}</span>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <span className='caption-2 text-grey_milk_weight-light'>Description</span>
                    <span className='caption-2 text-black dark:text-grey_milk_weight-dark'>{description}</span>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span className='caption-2 text-grey_milk_weight-light'>Current Bid</span>
                        <div className='flex items-center gap-[10px]'>
                            <Etheruem fill="black" />
                            <span className='caption-1'>{currentBid}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='caption-2 text-grey_milk_weight-light'>Ends in</span>
                        <span className='caption-1'>{hours}h {minutes}m {seconds}s</span>
                    </div>
                </div>
                <div className='w-full h-[5rem]'>
                    <Button onClick={() => { }} className='headline'  text='Place Bid'/>
                </div>
            </div>
            <div className={`absolute w-[70%] h-[105%] radial-gradient-effect top-0 z-[-1] ${position === 0?'right-1/2' :'left-1/2'}`}>

            </div>
        </div>
    </>)
}

export default NFTBidCard;