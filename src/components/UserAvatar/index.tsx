import user0 from '../../assets/user_0.svg';
import user1 from '../../assets/user_1.svg';
import SvgVerified from '../Icons/Verified';



type UserAvatarProps ={
    userAvatar: string;
    verified?: boolean;
}

const UserAvatar = ({userAvatar,verified}:UserAvatarProps) =>{
    return (<>
        
        <div className='rounded-full relative'>
            {userAvatar === "0"?
            <img src={user0.src} alt="" />:
            <img src={user1.src} alt="" />
            }
            {verified?
            <div className='absolute top-0 right-[0px] bg-white rounded-full p-[1px]'>
                <SvgVerified/>
            </div>:<></>
            }

        </div>
    </>)
}

export default UserAvatar;