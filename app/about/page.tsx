
import SkillCard from "../../components/SkillCard";

const skills = [
    {
        title: "Web Development",
        description:
            "HTML, CSS, JavaScript, React, Next.js and TypeScript for building responsive web applications.",
    },
    {
        title: "Programming",
        description:
            "Python, Java, C++ and problem-solving through programming.",
    },
    {
        title: "Databases",
        description:
            "Working with SQL, MySQL, PostgreSQL, MongoDB and Firebase.",
    },
    {
        title: "Development Tools",
        description:
            "Git, GitHub, Visual Studio Code, Docker and Node.js.",
    },
];

export default function About() {
    return (
        <main className="flex-1 bg-slate-50">
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="max-w-3xl">
                    <p className="text-blue-600 font-semibold mb-3">
                        GET TO KNOW ME
                    </p>

                    <h1 className="text-4xl font-bold text-slate-900 mb-6">
                        About Me
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        My name is Danson Nganga. I am a software development
                        student with an interest in web development, software
                        engineering and technology. I enjoy learning how
                        applications work and using programming to solve
                        real-world problems.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        Education
                    </h2>

                    <p className="text-slate-600 leading-relaxed mb-8">
                        I am pursuing a Bachelor of Science in Software
                        Development through BYU-Pathway Worldwide. I am also
                        studying Mathematics and Computer Science at Meru
                        University.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                    My Technical Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.title}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
