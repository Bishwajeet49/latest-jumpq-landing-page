import Container from "../components/Container";
import Image from "next/image.js";
import React, {Fragment} from "react";
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/FooterSection";
import Head from "next/head";

export default function NotFoundPage() {
    return (
        <Fragment>
            <Head>
                <title>Astrolus Premium | 404</title>
            </Head>
            <HeaderSection />
            <Container>
                <main className="flex min-h-screen flex-col justify-center">
                    <div className="w-full py-6 text-center">
                        <div className="mx-auto w-max">
                    <span className="sr-only">
                        <a href="https://www.flaticon.com/free-icons/empty" title="empty icons">Empty icons created by Ghozi Muhtarom - Flaticon</a>
                    </span>
                            <Image className="-ml-6 w-36" src="/images/page.png" alt="page icon illustration" width="512" height="512" />
                        </div>
                        <div className="mt-8">
                            <h1 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">Page Not found !</h1>
                            <p className="mb-6 mt-3 text-gray-600 dark:text-gray-300">We can't find the page you're looking for.</p>
                            <a href="/" className="rounded-full px-3 py-1.5 text-primary transition duration-300 hover:bg-gray-50 dark:text-blue-300 dark:hover:bg-gray-800/60">Take me home</a>
                        </div>
                    </div>
                </main>
            </Container>
            <Footer />
        </Fragment>
    );
}