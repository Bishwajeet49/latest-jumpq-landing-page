import Feature from "./Feature";
import Container from "./Container";
import Image from "next/image.js";

export default function Features() {
    return (
        <div className="relative pt-32 md:pt-44" id="features">
            <Container>
                <div className="mx-auto md:w-3/5">
                    <h2 id="solution" className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    {/* <p className="mt-4 text-center text-gray-600 dark:text-gray-300"></p> */}
                    {/* <h3 className="mt-4 text-center text-gray-600 dark:text-gray-300">Less Complexity, More Results.</h3> */}

                </div>

                <div className="mt-16 md:mt-20">
                    <div className="relative md:flex rounded-3xl border border-gray-200 p-1 dark:border-gray-800  " >
                        {/* <div className="absolute inset-0 hidden h-max dark:block lg:my-auto">
                            <div aria-hidden="true" className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl">
                                <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"></div>
                                <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
                            </div>
                        </div> */}
                        <div className="w-small ">
                            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
                                <Image className="w-16" src="/images/xp.webp" alt="xp icon illustration" width="512" height="512" loading="lazy" />
                                <div className="mx-auto text-center sm:w-2/5">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Uscentreder </h2>
                                    <p className="mt-3 text-gray-600 dark:text-gray-400">Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta.</p>
                                </div>
                            </div>
                        </div>

                        <div   className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 w-large " >
                        
                            <Feature title="Intelligent Buyer Targeting and re-targeting" description="Track and engage with buyers inon real-time , Enjoy next-level customer profiling, combined with buyer preferences and insights .">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                                </svg>
                            </Feature>

                      

                            <Feature title="Eliminate blindspots and rekindle opportunities" description="Gain real-time visibility of your entire pipeline, Integrate leads, track as they are being qualified & nurtured, and get involved when the time is right.">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                                </svg>
                            </Feature>

                            <Feature title="Smooth integration" description="Simply upload your leads to JumpQ, activate and we’ll notify you only when your attention is required.">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                </svg>
                            </Feature>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}