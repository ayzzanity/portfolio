import React from "react";
import LayoutController from "../Controllers/LayoutController";

import { FaBriefcase, FaCode, FaCodeBranch } from "react-icons/fa6";
import { FaHome, FaMailBulk } from "react-icons/fa";

const FloatingNav = ({
    main,
    skills,
    work,
    projects,
    contact,
    currentSection,
}) => {
    const { scrollToSection, getButtonClass } = LayoutController({
        currentSection,
    });

    return (
        <div className="md:block md:fixed md:top-1/2 md:left-16 md:transform md:-translate-y-1/2 md:bg-slate-100 md:dark:bg-gray-700 text-gray-400 font-medium md:border md:border-slate-200 md:dark:border-gray-600 md:p-2 md:rounded-lg md:text-center md:z-10 md:shadow-lg md:gap-2 flex gap-6 p-4">
            <div>
                <button onClick={() => scrollToSection(main)}>
                    <FaHome className={getButtonClass(main)} />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(skills)}>
                    <FaCode className={getButtonClass(skills)} />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(work)}>
                    <FaBriefcase className={getButtonClass(work)} />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(projects)}>
                    <FaCodeBranch className={getButtonClass(projects)} />
                </button>
            </div>
            <div>
                <button onClick={() => scrollToSection(contact)}>
                    <FaMailBulk className={getButtonClass(contact)} />
                </button>
            </div>
        </div>
    );
};

export default FloatingNav;
