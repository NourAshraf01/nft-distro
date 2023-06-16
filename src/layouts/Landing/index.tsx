import { signIn } from "next-auth/react";
import { useAccount, useConnect } from "wagmi";
import Button from "~/components/Button";
import Header from "~/components/Header";
import { MainNft, Svg3DBall, Svg3DBallSmall } from "~/components/Icons";
import { InjectedConnector } from 'wagmi/connectors/injected'
import mainnft from '../../assets/main_nft.svg';
import svg3dball from '../../assets/3d_ball.svg';
import svg3dballsamll from '../../assets/3d_ball_small.svg';


const Landing = () => {
    const connection = useConnect({
        connector: new InjectedConnector(),
      });
    const acc = useAccount()

    const handleLogin = async () => {
        try {
            const callbackUrl = '/protected'
            if (acc?.address) {
                signIn('credentials', { address: acc.address, callbackUrl })
                return
            }
            console.log('here')
            const { connector } = await connection.connectAsync({});
            if (connector) {
                const { account } = await connector.connect();
                // if (error) {
                //     throw error
                // }
                signIn('credentials', { address: account, callbackUrl })
            }
        } catch (error) {
            window.alert(error)
        }
    }
    return (<>
        <section id="home" className="min-h-[90vh] flex flex-col p-[20px] z-20 relative">
            <div className="container flex flex-col gap-52">
                <Header />
                <div className="flex justify-between flex-wrap">
                    <div className="flex flex-col w-[50%] gap-8">
                        <span className="web3-text dark:text-grey_milk_weight-dark">WEB 3 NON-FUNGIBLE TOKENS</span>
                        <span className="clash-display dark:text-white leading-[85px]">
                            Unlock Unique Digital Ownership with NFTs
                        </span>
                        <span className="text-[2.4rem] text-grey_milk_weight-light dark:text-grey_milk_weight-dark">Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</span>
                        <Button text="Connect Wallet" onClick={handleLogin} />
                    </div>
                    <div className="flex flex-col" id="main-nft">
                        <div className="relative w-full">
                            <div className="absolute bottom-[0px] left-[-100px] ball-shadow z-9999">
                                <img width={'100%'} src={svg3dball.src} alt="" />

                            </div>
                            <div className="absolute top-[-40px] right-[-60px] ball-shadow z-9999">
                                <img width={'100%'} src={svg3dballsamll.src} alt="" />

                            </div>
                            <img width={'100%'} src={mainnft.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>)
}

export default Landing;