import Feature from "./Feature";
import Container from "./Container";
import Image from "next/image.js";

export default function Features() {
    return (
        <div className="relative my-20 md:my-32" id="features">
            <Container>
                <div>
                    <h2 id="solution" className="text-2xl font-bold text-gray-900 dark:text-white md:text-4xl text-orange lg:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    {/* <p className="mt-4 text-center text-gray-600 dark:text-gray-300"></p> */}
                    {/* <h3 className="mt-4 text-center text-gray-600 dark:text-gray-300">Less Complexity, More Results.</h3> */}

                </div>

                <div className="mt-16 md:mt-10">
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

                        <div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 w-large " >

                            <Feature title="Intelligent Buyer Targeting and re-targeting" description="Track and engage with buyers inon real-time , Enjoy next-level customer profiling, combined with buyer preferences and insights .">
                                <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_668_44)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98041 4.98091C3.46512 6.4962 2.57143 8.80819 2.57143 11.9999C2.57143 15.1917 3.46512 17.5036 4.98041 19.0189C6.49571 20.5343 8.80771 21.428 11.9994 21.428C15.1912 21.428 17.5032 20.5343 19.0185 19.0189C20.5337 17.5036 21.4276 15.1917 21.4276 11.9999C21.4276 11.2898 22.0032 10.7142 22.7133 10.7142C23.4233 10.7142 23.999 11.2898 23.999 11.9999C23.999 15.665 22.9642 18.7098 20.8368 20.8372C18.7094 22.9646 15.6645 23.9994 11.9994 23.9994C8.33438 23.9994 5.28952 22.9646 3.16214 20.8372C1.03477 18.7098 0 15.665 0 11.9999C0 8.33488 1.03477 5.29 3.16214 3.16264C5.28952 1.03526 8.33438 0.000488281 11.9994 0.000488281C12.7095 0.000488281 13.2852 0.576123 13.2852 1.2862C13.2852 1.99629 12.7095 2.57191 11.9994 2.57191C8.80771 2.57191 6.49571 3.46562 4.98041 4.98091ZM11.5392 6.3226C11.6963 7.01508 11.2624 7.70383 10.5699 7.861C9.59099 8.08317 8.91496 8.53855 8.46818 9.16029C8.01091 9.79661 7.71412 10.7198 7.71412 11.9992C7.71412 13.5453 8.14499 14.5716 8.78604 15.2127C9.4271 15.8537 10.4534 16.2846 11.9995 16.2846C13.3416 16.2846 14.2914 15.9584 14.9315 15.461C15.5585 14.9737 16.0131 14.226 16.1971 13.1267C16.3143 12.4263 16.9771 11.9536 17.6774 12.0709C18.3778 12.1881 18.8505 12.8509 18.7332 13.5512C18.4613 15.176 17.7285 16.544 16.5094 17.4913C15.3034 18.4286 13.7485 18.856 11.9995 18.856C9.98013 18.856 8.22089 18.2841 6.96777 17.0309C5.71464 15.7778 5.14269 14.0186 5.14269 11.9992C5.14269 10.3322 5.53063 8.84167 6.37997 7.65972C7.23981 6.46317 8.49225 5.6957 10.0008 5.35334C10.6933 5.19617 11.382 5.63013 11.5392 6.3226ZM16.3883 9.42712L12.9087 12.9067C12.4066 13.4088 11.5926 13.4088 11.0905 12.9067C10.5884 12.4046 10.5884 11.5905 11.0905 11.0884L14.5717 7.60716C14.1883 6.08796 14.6288 4.47105 15.7447 3.3551L18.4644 0.635384C18.6859 0.413837 19.0073 0.324493 19.3114 0.399918C19.6156 0.475342 19.858 0.704516 19.9502 1.00391L20.6681 3.33178L22.996 4.04968C23.2954 4.14201 23.5245 4.38439 23.5999 4.68849C23.6753 4.99257 23.586 5.31394 23.3645 5.5355L20.645 8.25515C19.528 9.37223 17.909 9.81254 16.3883 9.42712Z" fill="url(#paint0_linear_668_44)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_668_44" x1="-0.75" y1="11.7505" x2="24.75" y2="11.7505" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FAEC13" />
                                            <stop offset="1" stop-color="#FE6129" />
                                        </linearGradient>
                                        <clipPath id="clip0_668_44">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </Feature>



                            <Feature title="Eliminate blindspots and rekindle opportunities" description="Gain real-time visibility of your entire pipeline, Integrate leads, track as they are being qualified & nurtured, and get involved when the time is right.">
                                <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_668_48)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 0.75C8.00735 0.75 7 1.75736 7 3C7 4.24264 8.00735 5.25 9.25 5.25C10.4927 5.25 11.5 4.24264 11.5 3C11.5 1.75736 10.4927 0.75 9.25 0.75ZM0.75 8C0.75 6.75735 1.75736 5.75 3 5.75C4.24264 5.75 5.25 6.75735 5.25 8C5.25 9.24265 4.24264 10.25 3 10.25C1.75736 10.25 0.75 9.24265 0.75 8ZM8.4595 6.81215C8.7184 6.77535 8.99955 6.75 9.284 6.75C9.5665 6.75 9.8464 6.775 10.1046 6.8114C11.0331 6.9422 11.629 7.75415 11.6946 8.6387C11.7873 9.8885 11.9148 11.7425 11.9347 12.745C11.9684 12.7464 12.0051 12.748 12.0449 12.75C12.2701 12.7613 12.5921 12.7839 12.9823 12.8289C13.7617 12.9188 14.8175 13.0988 15.9188 13.4599C17.1145 13.852 17.9208 14.9298 17.9828 16.1828C18.0566 17.6745 17.9307 19.9072 16.9352 22.1941C16.6431 22.865 16.0006 23.2929 15.2839 23.3524C14.448 23.4218 13.1134 23.5 11.3448 23.5C9.2315 23.5 8.0215 23.3883 7.4435 23.3126C7.1271 23.2711 6.8336 23.143 6.5862 22.9475C4.33496 21.1684 2.45344 18.1973 1.79219 17.0842C1.59262 16.7482 1.50876 16.3382 1.6197 15.9401C1.81592 15.2359 2.14081 14.7076 2.46753 14.3242C3.09257 13.5907 4.11509 13.6648 4.85076 14.1165C5.5134 14.5233 6.0606 14.8958 6.44255 15.1669C6.5149 15.2182 6.58135 15.266 6.6415 15.3096C6.65645 12.5499 6.7915 10.0655 6.88735 8.62805C6.94605 7.7477 7.5383 6.9432 8.4595 6.81215ZM21 5.75C22.2427 5.75 23.25 6.75735 23.25 8C23.25 9.24265 22.2427 10.25 21 10.25C19.7573 10.25 18.75 9.24265 18.75 8C18.75 6.75735 19.7573 5.75 21 5.75ZM13.25 8C13.25 6.75735 14.2573 5.75 15.5 5.75C16.7427 5.75 17.75 6.75735 17.75 8C17.75 9.24265 16.7427 10.25 15.5 10.25C14.2573 10.25 13.25 9.24265 13.25 8ZM23.25 3C23.25 1.75736 22.2427 0.75 21 0.75C19.7573 0.75 18.75 1.75736 18.75 3C18.75 4.24264 19.7573 5.25 21 5.25C22.2427 5.25 23.25 4.24264 23.25 3Z" fill="url(#paint0_linear_668_48)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_668_48" x1="0.75" y1="12.125" x2="23.25" y2="12.125" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FAEC13" />
                                            <stop offset="1" stop-color="#FE6129" />
                                        </linearGradient>
                                        <clipPath id="clip0_668_48">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </Feature>

                            <Feature title="Smooth integration" description="Simply upload your leads to JumpQ, activate and we’ll notify you only when your attention is required.">
                                <svg className="m-auto h-6 w-6 text-gray-700 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4337 6.00972L19.1025 3.34092L17.4565 1.69482L14.7876 4.36362L14.6878 4.26382C13.7787 3.35472 12.3047 3.35472 11.3957 4.26382L8.14488 7.51452L7.80398 7.85552V13.0932L5.81698 15.0801L4.99388 15.9033L5.81698 16.7263L6.44888 17.3582L4.17088 19.6362C3.95258 19.8544 3.65658 19.9771 3.34788 19.9771H0.238281V22.305H3.34788C4.27398 22.305 5.16208 21.9371 5.81698 21.2822L8.09488 19.0043L8.72678 19.6362L9.54988 20.4592L10.3729 19.6362L12.3599 17.6492H17.5976L17.9386 17.3083L21.1894 14.0575C22.0985 13.1483 22.0984 11.6744 21.1894 10.7653L21.0895 10.6655L23.7583 7.99672L22.1122 6.35062L19.4434 9.01942L16.4337 6.00972Z" fill="url(#paint0_linear_668_52)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_668_52" x1="0.238281" y1="11.9999" x2="23.7583" y2="11.9999" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FAEC13" />
                                            <stop offset="1" stop-color="#FE6129" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </Feature>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}