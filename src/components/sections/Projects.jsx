export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div 
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-2"> eBarangayConnect (Capstone Project)</h3>
                        <p className="text-gray-400 mb-4">A web-based system for Barangay management with dynamic forms, location tracking, 
                            image uploads, certificates, and email blasts—improving communication and service delivery.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Angular", "Node.js", "MySQL", "Firebase", "Bootstrap"].map((tech, key) => (
                                <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Lloydie17/ebarangayconnects" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                View Projects →
                            </a>
                        </div>
                    </div>

                    <div 
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-2"> HelpDesk (Alliance Jumpstart Project)</h3>
                        <p className="text-gray-400 mb-4">A web-based platform for efficient support ticket management, built with Razor and C#, 
                            enabling streamlined tracking, assignment, and resolution of issues.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["ASP.NET", "JavaScript", "MSSQL", "Bootstrap"].map((tech, key) => (
                                <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Lloydie17/HelpDesk" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                View Projects →
                            </a>
                        </div>
                    </div>

                    <div 
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-2"> Coffeeing (Database Systems 2 Project)</h3>
                        <p className="text-gray-400 mb-4">an online coffee shop platform for browsing and purchasing coffee products, 
                            featuring easy order placement, secure payments, and backend inventory management.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["ASP.NET", "JavaScript", "MSSQL", "Bootstrap"].map((tech, key) => (
                                <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Lloydie17/coffeeing_db2proj" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                View Projects →
                            </a>
                        </div>
                    </div>

                    <div 
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-2"> PET-ADOPTION (Paid Work)</h3>
                        <p className="text-gray-400 mb-4">Developed a web platform for browsing pets available for adoption, 
                            with user-friendly pet listings and an efficient adoption process for both pet owners and shelters.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Angular", "Node.js", "MySQL", "Firebase", "Bootstrap"].map((tech, key) => (
                                <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Lloydie17/PET-ADOPTION" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                View Projects →
                            </a>
                        </div>
                    </div>

                    <div 
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-2"> MINI-LMS (Paid Work)</h3>
                        <p className="text-gray-400 mb-4">Developed a web-based Learning Management System that manages courses, 
                            student registrations, assessments, and calendar events, offering an intuitive interface for both 
                            instructors and learners.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Angular", "Node.js", "MySQL", "Firebase", "Bootstrap"].map((tech, key) => (
                                <span 
                                key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Lloydie17/MINI-LMS" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                View Projects →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};