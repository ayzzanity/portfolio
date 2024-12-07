const LayoutController = ({ currentSection = null }) => {
    const scrollToSection = (sectionRef) => {
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    const getButtonClass = (section) => {
        return `text-4xl ${
            currentSection === section.current
                ? "text-primary-500 dark:text-teal-500"
                : "hover:text-primary-500 hover:dark:text-teal-500"
        }`;
    };

    return {
        scrollToSection,
        getButtonClass,
    };
};

export default LayoutController;
