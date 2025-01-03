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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="m-auto h-5 w-5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                    </svg>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="m-auto w-5"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                    </svg>
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