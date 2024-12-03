import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Portfolio() {
    return (
        <MainLayout>
            <Head title="Portfolio - Ayzal Abdulwahid" />
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Portfolio
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Explore the projects and technologies I've worked with.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="flex justify-center mb-8">
                            <img className="h-32 w-32 rounded-full" src="https://avatars.githubusercontent.com/u/25843527?v=4" alt="Ayzal Abdulwahid" />
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-4 pb-8">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Library-Management-System</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            For Elective 1 - DBMS.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-4 pb-8">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">mvc-demo-project</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            WMSU-CPE ASP.Net MVC Training Output.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-4 pb-8">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">PGCZ</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            Silph-inspired Pokemon Go Club Zamboanga Web.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-4 pb-8">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">reactjs-tictactoe</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            A simple Tic Tac Toe game built with ReactJS.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
