import Image from "next/image";

export const projects = [
  {
    title: "E-Commerce Website",
    brief: "An e-commerce platform for local MSMEs to sell their products online.",
    situation:
      "Local MSMEs have difficulty reaching a wider customer base because they only sell offline.",
    task: "Create an e-commerce website that is easy to use, responsive, and secure for transactions.",
    action:
      "I built the platform using Next.js for fast performance, Tailwind CSS for responsive design, and the Stripe API for payments. The main challenges were managing user authentication and payment integration.",
    result:
      "The website was successfully launched in 2 months. The MSME saw a 45% increase in sales in the first 3 months. The client was very satisfied because the platform was easy to manage.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe API", "MongoDB"],
    image: "/image/project1.png",
  },
  {
    title: "Admin Dashboard",
    brief: "Interactive dashboard for real-time monitoring of company data.",
    situation:
      "The company needed a system to visualize sales data and team performance.",
    task: "Develop dashboards with interactive charts and user management.",
    action:
      "I used React + Next.js for the frontend, Chart.js for data visualization, and JWT authentication. The biggest challenge was query optimization to keep the dashboard fast.",
    result:
      "The dashboard is used by over 50 internal staff. Access speed has increased by 30% compared to the legacy system.",
    technologies: ["Next.js", "React", "Chart.js", "Node.js", "Express"],
    image: "/image/project2.jpg",
  },
];

export default function Portfolio() {
    return(
              <div 
              id="Portfolio"
              className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-blue-500 to-sky-600">
                <div className="flex justify-center mb-5">
                  <p className="text-3xl font-bold text-emerald-300 mt-5">Portfolio</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-52 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
        
                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-2xl font-semibold text-emerald-300">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 mt-2">{project.brief}</p>
        
                        {/* STAR Method */}
                        <div className="mt-4 text-sm space-y-2">
                          <p>
                            <span className="font-semibold text-emerald-300">
                              Situation:
                            </span>{" "}
                            {project.situation}
                          </p>
                          <p>
                            <span className="font-semibold text-emerald-300">
                              Task:
                            </span>{" "}
                            {project.task}
                          </p>
                          <p>
                            <span className="font-semibold text-emerald-300">
                              Action:
                            </span>{" "}
                            {project.action}
                          </p>
                          <p>
                            <span className="font-semibold text-emerald-300">
                              Result:
                            </span>{" "}
                            {project.result}
                          </p>
                        </div>
        
                        {/* Technologies */}
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-emerald-300">
                            Technologies:
                          </h5>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
    )
}