import { LegacyRef } from "react";
import Container from "./Container";
import React from "react";
import Image from "next/image";
// import logo from "../public/images/logo.png"

export default function HeaderSection() {
  const inputReference: LegacyRef<HTMLInputElement> | undefined = React.createRef();
  const ulReference: LegacyRef<HTMLUListElement> | undefined = React.createRef();

  const links: { to: string, label: string}[] = [
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
    {
      to: "/login",
      label: "Contact Us",
    },
  ];

  const handleClickLink = () => {
    const toggleNav: HTMLInputElement | null = inputReference.current;
    // @ts-ignore
    const navItems: Element[] = [...ulReference.current.children];

    navItems.map((navItem: Element) => {
      const link: Element = navItem.children[0];
      link.addEventListener("click",() => {
        if (toggleNav?.checked === true) {
          toggleNav.checked = false;
        }
      });
    });
  }

  return (
    <header>
      <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="peer hidden"
              ref={ inputReference }
            />
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <a
                href="components#home"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <div aria-hidden="true" className="flex space-x-1 border">
                  <Image 
                  width={36}
                  height={36}
                  src="/images/logo.png" 
                  alt="logo" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  JumpQ
                </span>
              </a>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative -mr-6 p-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 dark:bg-gray-900/70 lg:hidden"
            ></div>
            <div className="invisible absolute top-full left-0 z-20 w-full origin-top translate-y-1 scale-95 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0">
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm" ref={ ulReference }>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.to}
                        className="block transition hover:text-primary dark:hover:text-white md:px-4"
                        onClick={ handleClickLink }
                      >
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="/register"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">
                    {" "}
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
      
    
    </header>
  );
}
