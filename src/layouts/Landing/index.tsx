import { signIn } from "next-auth/react";
import { useAccount, useConnect } from "wagmi";
import Button from "~/components/Button";
import Header from "~/components/Header";
import { MainNft, Svg3DBall, Svg3DBallSmall } from "~/components/Icons";
import { InjectedConnector } from 'wagmi/connectors/injected'


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
        <section id="home" className="h-[90vh] flex flex-col p-[20px] z-20 relative">
            <div className="container flex flex-col gap-52">
                <Header />
                <div className="flex justify-between flex-wrap">
                    <div className="flex flex-col w-[50%] gap-8">
                        <span className="web3-text dark:text-grey_milk_weight-dark">WEB 3 NON-FUNGIBLE TOKENS</span>
                        <span className="clash-display dark:text-white leading-[85px]">
                            Unlock Unique Digital Ownership with NFTs
                        </span>
                        <span className="text-[2.4rem] text-grey_milk_weight-light dark:text-grey_milk_weight-dark">Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</span>
                        <Button onClick={handleLogin} />
                    </div>
                    <div className="flex flex-col" id="main-nft">
                        <div className="relative">
                            <div className="absolute bottom-[0px] left-[-100px] ball-shadow z-9999">
                                <Svg3DBall />
                            </div>
                            <div className="absolute top-[-40px] right-[-60px] ball-shadow z-9999">
                                <Svg3DBallSmall />
                            </div>
                            <MainNft />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>)
}

export default Landing;