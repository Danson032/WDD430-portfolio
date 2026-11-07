
import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Books REST API",
    description:
      "A backend development project that connects a Node.js application to MongoDB Atlas and provides API routes for managing a collection of books.",
    technologies: ["Node.js", "JavaScript", "MongoDB", "REST API"],
    link: "https://github.com/Danson032/cse341-books",
  },
  {
    title: "CSE270 Django Project",
    description:
      "A Python and Django coursework project developed with Docker as part of my software development studies.",
    technologies: ["Python", "Django", "Docker"],
    link: "https://github.com/Danson032/CSE270",
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-400 font-semibold mb-4">
            SOFTWARE DEVELOPER & WEB DESIGNER
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, I&apos;m Danson Nganga.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I enjoy building useful software, creating websites,
            solving problems, and learning new technologies.
            Welcome to my portfolio.
          </p>

          <a
            href="https://github.com/Danson032"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Visit My GitHub
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            My Projects
          </h2>

          <p className="text-slate-600">
            Here are some of the software development projects
            I have worked on.
          </p>
        </div>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
