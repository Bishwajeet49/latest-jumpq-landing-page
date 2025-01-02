import { useEffect, useRef } from "react";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image.js";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative overflow-hidden dark:bg-darker lg:overflow-auto" id="home">
      <div className="absolute inset-x-0 top-32 lg:hidden">
        <div aria-hidden="true" className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl">
          <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"></div>
          <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
        </div>
      </div>
      <Container>
        <div className="relative ml-auto pt-40 xl:pt-36">
          <div className="gap-12 md:flex md:items-center">
            <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-[50%]">
              <h1 className="text-5xl font-black dark:text-white md:text-5xl xl:text-5xl">
                Helping Sales Team <br />
                & Agents <span></span> <span className="text-primary">Excel at Scale </span>
              </h1>
              <div>
                <p className="mt-8 text-lg text-gray-700 dark:text-gray-100">
                  Odio incidunt nam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
                <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                  <Button
                    Element="a"
                    emphasis="primary"
                    label="Learn More"
                    to="#solution"
                    ui="max"
                  />
                </div>
              </div>
            </div>
            <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
              <div className="ml-0 md:-mr-72 lg:mr-0">
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  src="../videos/vid.mp4"
                ></video>

                <Image
                  className="hidden h-full object-cover object-left dark:block"
                  src="/images/hero-dark.webp"
                  alt="app screenshot"
                  width="1628"
                  height="1233"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
