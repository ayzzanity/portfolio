import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import FloatingNav from "./FloatingNav";

export default function MainLayout({ children }) {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </Head>
            <nav className="bg-slate-200 dark:bg-gray-900 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link
                                    href="/"
                                    className="text-xl rounded-md hover:cursor-pointer hover:text-primary-700 hover:dark:text-teal-500 font-bold text-primary-600 dark:text-teal-600"
                                >
                                    IcedSanity
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FloatingNav />
                            <button
                                className="rounded-md p-2 hover:cursor-pointer hover:bg-slate-300 hover:dark:bg-gray-800"
                                onClick={toggleDarkMode}
                            >
                                {darkMode ? (
                                    <BsSunFill className="text-yellow-400" />
                                ) : (
                                    <BsMoonStarsFill className="text-yellow-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            <a
                                href="https://github.com/ayzzanity"
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-8 text-base text-gray-400 dark:text-gray-300 md:mt-0 md:order-1">
                            {new Date().getFullYear()} Ayzal Abdulwahid. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
