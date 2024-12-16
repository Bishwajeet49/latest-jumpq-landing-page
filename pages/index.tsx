import Head from "next/head";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Solution from "../components/Solution";
import Reviews from "../components/Reviews";
import Princing from "../components/Princing";
import Footer from "../components/FooterSection";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Astrolus premium</title>
                <meta name="description" content="Template built with tailwindcss using Tailus blocks v2" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <HeaderSection />
            <main className="mb-40">
                <HeroSection/>
                <Features />
                <Solution />
                <Reviews />
                <Princing />

                {/* <div style={{ display: 'flex', border: '1px solid #8B0000' }}>
                    <div style={{ width: '50%', border: '1px solid black' }}>kdkd</div>
                    <div style={{ width: '50%' }}>kdkdk</div>
                </div> */}

            </main>
            <Footer />
        </>
    )
}
