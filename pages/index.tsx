import Head from "next/head";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Solution from "../components/Solution";
import Reviews from "../components/Reviews";
import Princing from "../components/Princing";
import Footer from "../components/FooterSection";
import Team from "../components/Team";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>JUMPQ</title>
                <meta name="description" content="Helping Sales Team
/ Agents Excel at Scale" />
                <link rel="icon" type="image/svg+xml" href="images/logo.png" />
            </Head>
            <HeaderSection />
            <main className="mb-40">
                <HeroSection/>
                <Features />
                <Solution />
                <Reviews />
                <Team />
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
