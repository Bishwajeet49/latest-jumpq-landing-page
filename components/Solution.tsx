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
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-4xl text-orange lg:text-4xl">Less Complexity, More Results.</h2>
                </div>
                <div className="flex-row-reverse mt-16 md:mt-20  justify-between  text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
                    <div className="relative ml-auto h-full md:w-1/2 ">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl lg:text-4xl text-primary" style={{ marginLeft: "20px" }}  >After JumpQ</h2>
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
                                    <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12C17.799 12 22.5 9.31371 22.5 6C22.5 2.68629 17.799 0 12 0C6.20101 0 1.5 2.68629 1.5 6C1.5 9.31371 6.20101 12 12 12Z" fill="url(#paint0_linear_668_56)" />
                                        <path d="M20.541 12.1962C18.243 13.5093 15.2185 14.25 12 14.25C8.7815 14.25 5.75705 13.5093 3.45906 12.1962C2.76366 11.7988 2.0934 11.321 1.5 10.7666V12C1.5 15.3136 6.20101 18 12 18C17.799 18 22.5 15.3136 22.5 12V10.7666C21.9066 11.321 21.2364 11.7988 20.541 12.1962Z" fill="url(#paint1_linear_668_56)" />
                                        <path d="M1.5 16.7666V18.0001C1.5 21.3137 6.20101 24.0001 12 24.0001C17.799 24.0001 22.5 21.3137 22.5 18.0001V16.7666C21.9066 17.3212 21.2364 17.7989 20.541 18.1963C18.243 19.5094 15.2185 20.2501 12 20.2501C8.7815 20.2501 5.75705 19.5094 3.45906 18.1963C2.76366 17.7989 2.0934 17.3212 1.5 16.7666Z" fill="url(#paint2_linear_668_56)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_668_56" x1="1.5" y1="6" x2="22.5" y2="6" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAEC13" />
                                                <stop offset="1" stop-color="#FE6129" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_668_56" x1="1.5" y1="14.3833" x2="22.5" y2="14.3833" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAEC13" />
                                                <stop offset="1" stop-color="#FE6129" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_668_56" x1="1.5" y1="20.3833" x2="22.5" y2="20.3833" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAEC13" />
                                                <stop offset="1" stop-color="#FE6129" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Multiple Databases Pics</h3>
                                    <p className="text-gray-500 dark:text-gray-400">CRM, Linkedin, GST, RTO, etc.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 md:items-center">
                                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                    <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_668_61)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C19.5977 3 20.9037 4.24892 20.9949 5.82373L21 6V20C21 20.3623 20.8041 20.6962 20.4878 20.873C20.211 21.0276 19.8801 21.0407 19.595 20.9144L19.4759 20.8517L16.75 19.1742L14.0241 20.8517C13.7384 21.0274 13.3864 21.047 13.0859 20.9103L12.9759 20.8517L10.25 19.1742L7.5241 20.8517C7.21556 21.0415 6.82845 21.0497 6.5122 20.873C6.23108 20.7158 6.04503 20.4346 6.00715 20.1195L6 20V14H4C3.48717 14 3.06449 13.614 3.00673 13.1166L3 13V5.5C3 4.17452 4.03154 3.08996 5.33562 3.00532L5.5 3H18ZM15 12H11C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12ZM5.5 5C5.22386 5 5 5.22386 5 5.5V12H6V5.5C6 5.22386 5.77614 5 5.5 5ZM16 8H11C10.4477 8 10 8.44772 10 9C10 9.51283 10.386 9.93551 10.8834 9.99327L11 10H16C16.5523 10 17 9.55228 17 9C17 8.48717 16.614 8.06449 16.1166 8.00673L16 8Z" fill="url(#paint0_linear_668_61)" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_668_61" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAEC13" />
                                                <stop offset="1" stop-color="#FE6129" />
                                            </linearGradient>
                                            <clipPath id="clip0_668_61">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="w-5/6">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Pre-Sales Complexity</h3>
                                    <p className="text-gray-500 dark:text-gray-400">10 - 12 pics.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 md:items-center">
                                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                                    <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.7812C6.04568 22.7812 1.21875 17.9543 1.21875 12C1.21875 6.04568 6.04568 1.21875 12 1.21875C17.9543 1.21875 22.7812 6.04568 22.7812 12C22.7812 17.9543 17.9543 22.7812 12 22.7812ZM10.0833 6.48958C10.0833 5.43106 10.9415 4.57292 12 4.57292C13.0585 4.57292 13.9167 5.43106 13.9167 6.48958C13.9167 7.54811 13.0585 8.40625 12 8.40625C10.9415 8.40625 10.0833 7.54811 10.0833 6.48958ZM13.3802 10.6171C13.3465 10.0719 12.9976 9.64806 12.4522 9.61639C12.3208 9.60877 12.1707 9.60417 12 9.60417H10.3229C10.0424 9.60417 9.80805 9.61111 9.61313 9.6219C9.04455 9.65347 8.66476 10.0728 8.65053 10.6421C8.64756 10.7606 8.64583 10.8933 8.64583 11.0417C8.64583 11.19 8.64756 11.3227 8.65053 11.4412C8.66476 12.0105 9.04455 12.4299 9.61313 12.4614C9.80805 12.4722 10.0424 12.4792 10.3229 12.4792C10.4075 12.4792 10.4879 12.4785 10.5643 12.4773C10.5631 12.6296 10.5625 12.7898 10.5625 12.9583V15.8469C9.95401 15.8595 9.50004 15.8793 9.16707 15.8996C8.64291 15.9317 8.2222 16.2543 8.18349 16.778C8.17309 16.9189 8.16667 17.0823 8.16667 17.2708C8.16667 17.4594 8.17309 17.6227 8.18349 17.7637C8.2222 18.2874 8.64291 18.61 9.16707 18.642C9.72266 18.676 10.6151 18.7083 12 18.7083C13.3849 18.7083 14.2773 18.676 14.8329 18.642C15.3571 18.61 15.7778 18.2874 15.8165 17.7637C15.8269 17.6227 15.8333 17.4594 15.8333 17.2708C15.8333 17.0823 15.8269 16.9189 15.8165 16.778C15.7778 16.2543 15.3571 15.9317 14.8329 15.8996C14.5 15.8793 14.046 15.8595 13.4375 15.8469V12.9583C13.4375 11.8549 13.4107 11.1087 13.3802 10.6171Z" fill="url(#paint0_linear_668_66)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_668_66" x1="1.21875" y1="12" x2="22.7812" y2="12" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAEC13" />
                                                <stop offset="1" stop-color="#FE6129" />
                                            </linearGradient>
                                        </defs>
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
                                    <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 15C0 15.7956 0.31607 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H6.75C6.98287 18 7.21254 18.0542 7.42082 18.1584C7.6291 18.2625 7.81028 18.4137 7.95 18.6L10.8 22.3995C10.9397 22.5858 11.1209 22.737 11.3292 22.8411C11.5375 22.9453 11.7671 22.9995 12 22.9995C12.2329 22.9995 12.4625 22.9453 12.6708 22.8411C12.8791 22.737 13.0603 22.5858 13.2 22.3995L16.05 18.6C16.1897 18.4137 16.3709 18.2625 16.5792 18.1584C16.7875 18.0542 17.0171 18 17.25 18H21C21.7956 18 22.5587 17.6839 23.1213 17.1213C23.6839 16.5587 24 15.7956 24 15V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.31607 21.7956 0 21 0L3 0ZM12 5.9895C14.496 3.423 20.7375 7.914 12 13.6875C3.2625 7.9125 9.504 3.423 12 5.9895Z" fill="url(#paint0_linear_668_70)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_668_70" x1="0" y1="11.4997" x2="24" y2="11.4997" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAEC13" />
                                                <stop offset="1" stop-color="#FE6129" />
                                            </linearGradient>
                                        </defs>
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
                                    <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41406 0.240234H9.64606V8.47223H6.90686C7.39116 9.84253 8.69796 10.8242 10.2341 10.8242H14.3501V7.88423H22.5821V16.1162H14.3501V13.1762H10.2341C8.91036 13.1762 7.68876 12.7389 6.70606 12.0007V15.5282H9.64606V23.7602H1.41406V15.5282H4.35406V8.47223H1.41406V0.240234Z" fill="url(#paint0_linear_668_73)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_668_73" x1="1.41406" y1="12.0002" x2="22.5821" y2="12.0002" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAEC13" />
                                                <stop offset="1" stop-color="#FE6129" />
                                            </linearGradient>
                                        </defs>
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