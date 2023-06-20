import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useLayoutEffect, useRef } from "react";
import Landing from "~/layouts/Landing";
import Trending from "~/layouts/Trending";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Leaderboard from "~/layouts/Leaderboard";
import Explore from "~/layouts/Explore";
import Footer from "~/components/Footer";
gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const session = useSession();
  const main = useRef(null);

  useLayoutEffect(()=>{
    const ctx = gsap.context((self) => {
      gsap.from('#main-nft',{
        rotate: -45,
        scrollTrigger: {
          trigger: "#main-nft",
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      })
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  },[])
  return (
    <>
      <Head>
        <title>NFT Distro</title>
        <meta name="description" content="NFT marketplace" />
        <link rel="icon" href="/distro_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
      </Head>

      <svg className="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.509,0.96 C0.28,0.887,0.103,0.858,0,0.853 V-0.004 H1 V0.942 C0.902,0.978,0.668,1,0.509,0.96"></path></clipPath>
      </svg>

      <main ref={main} className="w-full overflow-y-auto scroll-smooth relative bg-white dark:bg-black flex flex-col overflow-x-hidden">
        <div className="bg-light_black_grey-light dark:bg-light_black_grey-dark clip-path absolute top-0 left-0 w-full h-[90vh] z-10"></div>
        <Landing />
        <section id="trending" className="w-full min-h-[100vh] z-20 relative">
          <Trending />
        </section>
        <Leaderboard/>
        <Explore/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;

