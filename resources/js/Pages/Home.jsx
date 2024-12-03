import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { repositories } from '@/data/repositories';
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
        });
    };

    return (
        <MainLayout>
            <Head title="Ayzal Abdulwahid - Full-stack Web Developer" />
            <div>
                <div className="bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            <div className="md:mr-8 mb-8 md:mb-0">
                                <img className="h-48 w-48 rounded-full" src="https://avatars.githubusercontent.com/u/25843527?v=4" alt="Ayzal Abdulwahid" />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                    <span className="block">Hi, I'm Ayzal</span>
                                    <span className="block text-primary-600">Full-stack Web Developer</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Passionate about creating elegant solutions to complex problems. Specializing in web development with modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="skills" className="bg-gray-100 dark:bg-gray-800 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                                Skills & Technologies
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                Proficient in a wide range of technologies and tools.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                            {[
                                { name: 'React', icon: 'devicon-react-original colored' },
                                { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
                                { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
                                { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
                                { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
                                { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
                                { name: 'Docker', icon: 'devicon-docker-plain colored' },
                                { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored' },
                            ].map((skill) => (
                                <div key={skill.name} className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-gray-700 rounded-lg shadow">
                                    <div className="text-center">
                                        <i className={`${skill.icon} text-4xl mb-4`}></i>
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                                GitHub Contributions
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                My coding activity over the past year
                            </p>
                        </div>
                        <div className="mt-10 flex justify-center">
                            {typeof window !== 'undefined' && (
                                <GitHubCalendar 
                                    username="ayzzanity" 
                                    fontSize={12}
                                    blockSize={12}
                                    blockMargin={5}
                                    transformData={selectLastHalfYear}
                                    hideColorLegend
                                    hideMonthLabels={false}
                                    labels={{
                                        totalCount: '{{count}} contributions in the last 6 months'
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                                Work Experience
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                Professional journey and achievements
                            </p>
                        </div>

                        <div className="mt-12 max-w-lg mx-auto lg:max-w-4xl">
                            <div className="relative pl-8 pb-12 border-l-4 border-primary-600">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 mb-8 transition-transform transform hover:scale-105">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Computer Programmer III (Full-stack Web Developer)</h3>
                                            <p className="text-primary-600 dark:text-primary-400">Department of Social Welfare and Development</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Philippines</p>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2023 - Present</p>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities</h4>
                                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                                <li>Design and develop full-stack web applications using Vue.js and Laravel</li>
                                                <li>Create and maintain RESTful APIs for government information systems</li>
                                                <li>Implement secure authentication and authorization systems</li>
                                                <li>Optimize database queries and application performance</li>
                                                <li>Collaborate with cross-functional teams to deliver government digital services</li>
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Projects</h4>
                                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                                <li>Developed and maintained social welfare information management systems</li>
                                                <li>Implemented data visualization dashboards for program monitoring</li>
                                                <li>Built automated reporting systems for government programs</li>
                                                <li>Integrated various government services for streamlined operations</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {[
                                                    'Vue.js',
                                                    'Laravel',
                                                    'PHP',
                                                    'MySQL',
                                                    'JavaScript',
                                                    'REST APIs',
                                                    'Git',
                                                    'Bootstrap',
                                                    'jQuery'
                                                ].map((tech) => (
                                                    <span key={tech} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative pl-8 pb-12 border-l-4 border-primary-600">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 mb-8 transition-transform transform hover:scale-105">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full-Stack Web Developer</h3>
                                            <p className="text-primary-600 dark:text-primary-400">Company 1</p>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">July 2021 - September 2023</p>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities</h4>
                                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                                <li>Developed and maintained full-stack web applications using React.js and Node.js</li>
                                                <li>Implemented responsive and interactive user interfaces with modern React practices</li>
                                                <li>Built RESTful APIs and microservices using Node.js and Express</li>
                                                <li>Managed DevOps workflows using GitLab CI/CD pipelines</li>
                                                <li>Handled server deployment and maintenance on Linode infrastructure</li>
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                                <li>Reduced deployment time by 60% through CI/CD pipeline optimization</li>
                                                <li>Improved application performance by implementing server-side caching</li>
                                                <li>Automated server maintenance tasks, reducing manual operations by 40%</li>
                                                <li>Led the migration of legacy systems to modern React-based architecture</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {[
                                                    'React.js',
                                                    'Node.js',
                                                    'Express',
                                                    'MongoDB',
                                                    'GitLab CI/CD',
                                                    'Linode',
                                                    'Docker',
                                                    'Redis',
                                                    'Nginx'
                                                ].map((tech) => (
                                                    <span key={tech} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="portfolio" className="bg-white dark:bg-gray-900 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                                Featured Projects
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                Here are some of my recent works
                            </p>
                        </div>

                        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: 'E-commerce Platform',
                                    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment integration.',
                                    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                                    image: '/images/project1.jpg',
                                    demoLink: '#',
                                    githubLink: '#'
                                },
                                {
                                    title: 'Task Management System',
                                    description: 'A collaborative task management system with real-time updates using WebSocket. Features include task assignment, progress tracking, and team chat.',
                                    tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'WebSocket'],
                                    image: '/images/project2.jpg',
                                    demoLink: '#',
                                    githubLink: '#'
                                },
                                {
                                    title: 'AI Content Generator',
                                    description: 'An AI-powered content generation tool that creates unique articles and social media posts using GPT-3 API integration.',
                                    tech: ['Next.js', 'Python', 'OpenAI API', 'TailwindCSS'],
                                    image: '/images/project3.jpg',
                                    demoLink: '#',
                                    githubLink: '#'
                                }
                            ].map((project) => (
                                <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                                    <div className="flex-shrink-0">
                                        <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {project.title}
                                            </h3>
                                            <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                                                {project.description}
                                            </p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <span key={tech} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-6 flex items-center gap-4">
                                            <a href={project.demoLink} className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                                                Live Demo
                                            </a>
                                            <a href={project.githubLink} className="text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="contact" className="bg-gray-100 dark:bg-gray-800 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                                Get in Touch
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                I'm always open to new opportunities and interesting projects
                            </p>
                        </div>

                        <div className="mt-12 max-w-lg mx-auto">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-center justify-center space-x-6">
                                    <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                        <span className="sr-only">Email</span>
                                        <i className="fas fa-envelope text-2xl"></i>
                                    </a>
                                    <a href="https://github.com/yourusername" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                        <span className="sr-only">GitHub</span>
                                        <i className="fab fa-github text-2xl"></i>
                                    </a>
                                    <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <i className="fab fa-linkedin text-2xl"></i>
                                    </a>
                                    <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                        <span className="sr-only">Twitter</span>
                                        <i className="fab fa-twitter text-2xl"></i>
                                    </a>
                                </div>
                                <div className="flex justify-center mt-6">
                                    <div className="text-center">
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">OR</p>
                                        <p className="text-gray-600 dark:text-gray-300 mb-2">Scan QR to download CV</p>
                                        <img src="https://via.placeholder.com/150" alt="Scan to download CV" className="h-32 w-32" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="bg-gray-100 dark:bg-gray-800 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            This portfolio was created using React.js, Laravel, Tailwind CSS, and Windsurf's Cascade.
                        </p>
                    </div>
                </footer>
            </div>
        </MainLayout>
    );
}
