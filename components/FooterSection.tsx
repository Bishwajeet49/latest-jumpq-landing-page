import Container from "./Container";
import Image from "next/image";
import Faqs from "./Faqs";
// import logo from "../public/images/logo.png"


import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";

export default function Footer() {
    const links = [
        {
            to: "#features",
            label: "Home",
        },
        {
            to: "#solution",
            label: "Product",
        },
        {
            to: "#reviews",
            label: "Why JumpQ",
        },
        {
            to: "#company",
            label: "Company",
        },
    ];

    return (
        <footer id="footer" className="bg-gradient-to-b from-transparent to-gray-500 mt-20 md:mt-32 py-12 dark:to-gray-900">
            <Container>
                <div className="flex gap-6 md:flex-row md:w-full lg:gap-12 flex-col">
                    <div className="pr-20 md:w-1/2">
                        <a
                            href="/"
                            aria-label="logo"
                            className="flex items-center space-x-2"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent the default link behavior
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth', // Smooth scrolling
                                });
                            }}
                        >
                            <div aria-hidden="true" className="flex flex-col space-y-0.5">
                                <Image
                                    width={36}
                                    height={36}
                                    src="/images/logo.png"
                                    alt="logo"
                                />
                            </div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">JumpQ</span>
                        </a>


                        {/* Contact Section */}
                        <div className="mt-8 flex flex-wrap flex-col justify-center gap-3 space-x-8 text-gray-600 dark:text-gray-400">
                            <div className="w-266px text-f12w700 uppercase leading-none tracking-tight text-textNormal">Contact us</div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <span className="font-medium flex items-center gap-3"><FaPhoneAlt /> Phone</span>
                                    <p className="pl-6">
                                        <a href="tel:+1234567890" className="text-blue-500 underline hover:underline">
                                            +1 234 567 890
                                        </a>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-05">
                                    <span className="font-medium flex items-center gap-3"><IoMdMail /> Email</span>
                                    <p className="pl-6">
                                        <a href="mailto:contact@jumpq.com" className="text-blue-500 underline hover:underline">
                                            contact@jumpq.com
                                        </a>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-05">
                                    <span className="font-medium flex items-center gap-3"><ImLocation2 /> Address</span>
                                    <span className="text-wrap pl-6">Mumbai, India</span>
                                </div>
                            </div>

                        </div>
                        {/* <ul role="list" className="mt-4 flex flex-wrap items-center justify-start gap-4 py-4 text-gray-600 dark:text-gray-400 sm:gap-8">
                            {
                                links.map((link, index) => (
                                    <li role="listitem" key={index}>
                                        <a href={link.to} className="duration-300 hover:text-primary dark:hover:text-white">
                                            {link.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul> */}
                        <div className="mt-12 flex w-max items-center justify-between space-x-4 text-gray-500">
                            <Link href="https://www.linkedin.com/company/jumpq-club/" legacyBehavior>
                                <a
                                    className="duration-300 hover:text-gray-600 dark:hover:text-white"
                                    title="Twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                >
                                    <Image 
                                        width={36}
                                        height={36}
                                        className="m-auto h-6 w-6"
                                        src="/images/X.png" 
                                        alt="Twitter logo" 
                                    />
                                </a>
                            </Link>
                            {/* <a className="duration-300 hover:text-gray-600 dark:hover:text-white" href="components#" title="facebook" target="blank" aria-label="facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-auto w-5" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                        </svg>
                    </a> */}
                            <Link href="https://www.linkedin.com/company/jumpq-club/" passHref legacyBehavior>
                                <a
                                    className="duration-300 hover:text-gray-600 dark:hover:text-white"
                                    title="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Image 
                                        width={36}
                                        height={36}
                                        className="m-auto w-6 h-6"
                                        src="/images/Linkedin-Logo--Streamline-Logos-Block.png" 
                                        alt="LinkedIn logo" 
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Faqs />
                </div>

                <div className="mt-12 text-center">
                    <span className="text-sm tracking-wide text-gray-500">Copyright © tailus 2021 - Present | All rights reserved</span>
                </div>
            </Container>
        </footer>
    )
}