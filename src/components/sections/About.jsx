import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const frontendSkills = [
        "Angular",
        "React",
        "Bootstrap",
        "TailwinCSS", 
        "JavaScript", 
        "TypeScript", 
        
    ];

    const backendSkills = [
        "Firebase",
        "Node.js",
        "ASP.NET",
        "MSSQL",
        "MYSQL",
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <img
                        className="object-cover border-4 border-blue-gray hover:-translate-y-1 transition-all w-60 h-60 rounded-full mx-auto mb-6 cursor-pointer"
                        src="https://firebasestorage.googleapis.com/v0/b/ebarangayconnect-cbd22.appspot.com/o/profile.jpg?alt=media&token=c1cc0c47-e526-44d8-ac81-83fc151570ec"
                        alt="Profile"
                        onClick={() => setIsModalOpen(true)}
                    />

                    {isModalOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <img
                                className="max-w-full max-h-full rounded-lg"
                                src="https://firebasestorage.googleapis.com/v0/b/ebarangayconnect-cbd22.appspot.com/o/profile2.jpg?alt=media&token=cb3c754a-773f-49ee-99bf-452a575f9e61"
                                alt="Profile Full"
                            />
                        </div>
                    )}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate about building innovative solutions.
                            I build full-stack projects that solve real
                            problems and make things better.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                        key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                        key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> My Journey</h3>
                            <p className="text-gray-300 mb-6">
                            I’m a graduating BSIT student from the University of Cebu with 4 years of 
                            experience in full-stack development. My journey has been fueled by a passion 
                            for web development, with hands-on experience in Node.js, Angular, Firebase, 
                            Sequelize, and ASP.NET MVC. I’ve built dynamic web applications and responsive 
                            systems, always striving to learn and grow with each project.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> What I Do</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    Full-Stack Web Development
                                </li>
                                <li>
                                    Back-End Development <br/> <span className="ml-5">(Node.js, ASP.NET MVC)</span>
                                </li>
                                <li>
                                    Front-End Development <br/> <span className="ml-5">(Angular, React)</span>
                                </li>
                                <li>
                                    Database Integration & Management <br/> <span className="ml-5">(Sequelize)</span>
                                </li>
                                <li>
                                    Building Scalable, Responsive Web <br/> <span className="ml-5">Applications</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
};