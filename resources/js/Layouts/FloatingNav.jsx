import React from "react";
import LayoutController from "../Controllers/LayoutController";
import { BiBriefcase, BiChip, BiHome, BiSitemap, BiUser } from "react-icons/bi";

const FloatingNav = () => {
    const { main, skills, work, projects, contact, scrollToSection } =
        LayoutController();

    return (
        <div className="fixed top-1/2 left-16 transform -translate-y-1/2 hidden md:block gap-2 bg-slate-100 dark:bg-gray-700 text-gray-400 font-medium border border-slate-200 dark:border-gray-600 p-2 rounded-lg text-center z-10 shadow-lg">
            <div>
                <button onClick={() => scrollToSection(main)}>
                    <BiHome className="text-4xl hover:text-primary-500 hover:dark:text-teal-500" />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(skills)}>
                    <BiChip className="text-4xl hover:text-primary-500 hover:dark:text-teal-500" />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(work)}>
                    <BiBriefcase className="text-4xl hover:text-primary-500 hover:dark:text-teal-500" />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(projects)}>
                    <BiSitemap className="text-4xl hover:text-primary-500 hover:dark:text-teal-500" />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(contact)}>
                    <BiUser className="text-4xl hover:text-primary-500 hover:dark:text-teal-500" />
                </button>
            </div>
        </div>
    );
};

export default FloatingNav;
