import { useRef } from "react";

const LayoutController = () => {
    const main = useRef(null);
    const skills = useRef(null);
    const work = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (sectionRef) => {
        console.log(sectionRef);
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return {
        main,
        skills,
        work,
        projects,
        contact,
        scrollToSection,
    };
};

export default LayoutController;
