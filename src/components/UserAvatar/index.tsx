import user0 from '../../assets/user_0.svg';
import user1 from '../../assets/user_1.svg';
import user2 from '../../assets/user_2.svg';
import user3 from '../../assets/user_3.svg';
import user4 from '../../assets/user_4.svg';

import SvgVerified from '../Icons/Verified';



type UserAvatarProps = {
    userAvatar: string;
    verified?: boolean;
    rank?:number;
}

const UserAvatar = ({ userAvatar, verified,rank }: UserAvatarProps) => {
    return (<>

        <div className='rounded-full relative'>
            {userAvatar === "0" ?
                <img width={'100%'} src={user0.src} alt="" /> :
                userAvatar === "1" ? <img width={'100%'} src={user1.src} alt="" /> :
                    userAvatar === "2" ? <img width={'100%'} src={user2.src} alt="" /> :
                        userAvatar === "3" ? <img width={'100%'} src={user3.src} alt="" /> :
                            <img width={'100%'} src={user4.src} alt="" />
            }
            {verified ?
                <div className='absolute top-0 right-[0px] bg-white rounded-full p-[1px]'>
                    <SvgVerified />
                </div> : <></>
            }
            {rank?
                <div className='absolute top-[-10px] left-1/2 -translate-x-1/2 rounded-full w-[35px] h-[35px] grid place-items-center bg-white'>
                    <span className='headline text-[#191919]'>#{rank}</span>
                </div>
                :<></>
            }

        </div>
    </>)
}

export default UserAvatar;