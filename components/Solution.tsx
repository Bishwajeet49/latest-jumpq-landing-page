import Container from "./Container"
import Products from "./Products"
import SolutionContent from "./SolutionContent"
import Image from "next/image.js"
import Timeline from "./Timeline"
import Reviews from "./Reviews"

export default function Solution() {
    return (
        <div className="my-20 md:my-32" >
            <Container>
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl text-orange lg:text-4xl">Less Complexity, More Results.</h2>
                </div>
                <div className="flex-row-reverse mt-16 md:mt-20  justify-between  text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
                    <div className="relative ml-auto h-full md:w-1/2 ">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl lg:text-4xl text-primary" style={{marginLeft:"20px"}}  >After JumpQ</h2>
                        <Timeline />
                        {/* <Image className="dark:hidden" src="/images/milestone.webp" alt="app milestone" width="1174" height="1134" />
                        <Image className="hidden dark:block" src="/images/milestone-dark.webp" alt="app milestone" width="1174" height="1134" /> */}
                    </div>

                    <div className="md:w-1/2 lg:w-[47%]">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">Before JumpQ</h2>
                        <p className="my-12 text-gray-600 dark:text-gray-300">
                        </p>
                        <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
                            <div className="flex gap-4 md:items-center">
                                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                    </svg>
                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Multiple Databases Pics</h3>
                                    <p className="text-gray-500 dark:text-gray-400">CRM, Linkedin, GST, RTO, etc.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 md:items-center">
                                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                    </svg>
                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Pre-Sales Complexity</h3>
                                    <p className="text-gray-500 dark:text-gray-400">10 - 12 pics.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 md:items-center">
                                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                    </svg>
                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Product Information</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Brochure, Location Maps, Floor Diagram, etc
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 md:items-center">
                                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                    </svg>
                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Engagement</h3>
                                    <p className="text-gray-500 dark:text-gray-400"> Remarks from CRM, content creation, follow up
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 md:items-center">
                                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                                    </svg>
                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Integrations </h3>
                                    <p className="text-gray-500 dark:text-gray-400">WA, Email, etc
                                    </p>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <Products />
                <Reviews />
                <SolutionContent />
            </Container>
        </div>
    )
}