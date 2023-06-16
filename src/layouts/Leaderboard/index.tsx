import { Etheruem } from "~/components/Icons";
import UserAvatar from "~/components/UserAvatar"

const Leaderboard = () => {
    return (<>

        <section className="bg-[#191919] w-full mt-[20rem]">
            <div className="container">
                <div className="flex flex-col items-center py-[12rem] gap-[10rem] w-full">
                    <span className="header-big text-white">Leaderboard of the Week</span>
                    <div className="flex flex-1 w-full gap-32 flex-wrap">
                        <div className="flex flex-col justify-center items-center flex-1 gap-5">
                            <div className="w-full">
                                <UserAvatar userAvatar="0" rank={1} />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-white title-2">Perperzon</span>
                                <div className="flex items-center gap-3">
                                    <Etheruem fill="white" color="white" />
                                    <span className="text-white title-4">9.421</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1">
                            <div className="w-full">
                                <UserAvatar userAvatar="1" rank={2} />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-white title-2">Richard</span>
                                <div className="flex items-center gap-3">
                                    <Etheruem fill="white" color="white" />
                                    <span className="text-white title-4">8.421</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1">
                            <div className="w-full">
                                <UserAvatar userAvatar="2" rank={3} />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-white title-2">Anderson</span>
                                <div className="flex items-center gap-3">
                                    <Etheruem fill="white" color="white" />
                                    <span className="text-white title-4">7.421</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center flex-1">
                            <div className="w-full">
                                <UserAvatar userAvatar="3" rank={4} />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-white title-2">Michael</span>
                                <div className="flex items-center gap-3">
                                    <Etheruem fill="white" color="white" />
                                    <span className="text-white title-4">5.421</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center flex-1">
                            <div className="w-full">
                                <UserAvatar userAvatar="4" rank={5} />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-white title-2">Antonson</span>
                                <div className="flex items-center gap-3">
                                    <Etheruem fill="white" color="white" />
                                    <span className="text-white title-4">3.421</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>)
}

export default Leaderboard;