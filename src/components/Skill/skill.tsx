import {
  FaJs,
  FaPython,
  FaPhp,
  FaReact,
  FaAngular,
  FaLaravel,
  FaFigma,
  FaBootstrap,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "Javascript", icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: "Typescript", icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
  { name: "PHP", icon: <FaPhp size={40} color="#777BB4" /> },
  { name: "Next Js", icon: <SiNextdotjs size={40} color="#FFFFFF" /> },
  { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "React Native", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Angular", icon: <FaAngular size={40} color="#DD0031" /> },
  { name: "Laravel", icon: <FaLaravel size={40} color="#FF2D20" /> },
  { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" /> },
  { name: "Wordpress", icon: <FaWordpress size={40} color="#21759B" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
];

export default function Skill() {
  return (
    <div 
    id="Skill"
    className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-blue-500 to-sky-600">
      <div className="flex justify-center mb-5">
        <p className="text-3xl font-bold text-emerald-300">
          My Professional Skill
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-8 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition"
          >
            {skill.icon}
            <p className="mt-3 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
