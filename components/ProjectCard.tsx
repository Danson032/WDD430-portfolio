
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
                {title}
            </h3>

            <p className="text-slate-600 mb-4 leading-relaxed">
                {description}
            </p>

            <p className="text-sm text-slate-600 mb-4">
                <strong className="text-slate-900">Technologies:</strong>{" "}
                {technologies.join(", ")}
            </p>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-semibold hover:underline"
                >
                    View Project →
                </a>
            )}
        </article>
    );
}
