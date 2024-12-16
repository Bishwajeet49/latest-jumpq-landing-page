import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import Head from "next/head";
import React from "react";

export default function Login() {
    return (
        <>
            <Head>
                <title>Astrolus Premium | Sign in</title>
            </Head>
            <main className="flex min-h-screen flex-col justify-center">
                <div className="w-full py-6">
                    <Container>
                        <div className="mx-auto sm:w-2/3 md:w-1/2 lg:w-1/3">
                            <div className="mb-16">
                                <a href="/" aria-label="logo" className="flex items-center space-x-2">
                                    <div aria-hidden="true" className="flex space-x-1">
                                        <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                                        <div className="h-6 w-2 bg-primary"></div>
                                    </div>
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Astrolus</span>
                                </a>
                            </div>

                            <Card>
                                <form action="" className="space-y-8">
                                    <div>
                                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Signin to your
                                            account</h1>
                                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
                                            Don't have an account?
                                            <a className="text-blue-600 dark:text-blue-400" href="/register"> Sign Up </a>
                                            for a free.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="mb-2 block text-gray-600 dark:text-gray-300">Email
                                                address</label>
                                            <input type="email" name="email" id="email" autoComplete="user"
                                                   className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700 dark:text-gray-300"/>
                                            <span
                                                className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                                        </div>
                                        <div>
                                            <label htmlFor="password"
                                                   className="mb-2 block text-gray-600 dark:text-gray-300">Password</label>
                                            <input type="password" name="password" id="password" autoComplete="password"
                                                   className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700 dark:text-gray-300"/>
                                            <span
                                                className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                                        </div>
                                    </div>
                                    <Button Element="button" label="Signin" emphasis="primary" type="submit" ui="full"/>
                                </form>
                            </Card>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    );
}