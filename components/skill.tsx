"use client";

import { skillsData } from "@/utils/data/skills";
import Marquee from "react-fast-marquee";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiAmazonaws,
  SiBootstrap,
  SiDocker,
  SiGo,
  SiFigma,
  SiFirebase,
  SiMui,
  SiNginx,
  SiStrapi,
  SiPython,
  SiNodedotjs,
} from "react-icons/si";

const skillIcons: { [key: string]: any } = {
  HTML: SiHtml5,
  CSS: SiCss3,
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  React: SiReact,
  "Next JS": SiNextdotjs,
  Tailwind: SiTailwindcss,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  AWS: SiAmazonaws,
  Bootstrap: SiBootstrap,
  Docker: SiDocker,
  Go: SiGo,
  Figma: SiFigma,
  Firebase: SiFirebase,
  MaterialUI: SiMui,
  Nginx: SiNginx,
  Strapi: SiStrapi,
  Python: SiPython,
  "Node JS": SiNodedotjs,
};

const skillColors: { [key: string]: string } = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  Javascript: "#F7DF1E",
  Typescript: "#3178C6",
  React: "#61DAFB",
  "Next JS": "#FFFFFF",
  Tailwind: "#06B6D4",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  PostgreSQL: "#4169E1",
  Git: "#F05032",
  AWS: "#FF9900",
  Bootstrap: "#7952B3",
  Docker: "#2496ED",
  Go: "#00ADD8",
  Figma: "#F24E1E",
  Firebase: "#FFCA28",
  MaterialUI: "#007FFF",
  Nginx: "#009639",
  Strapi: "#2F2E8B",
  Python: "#3776AB",
  "Node JS": "#339933",
};

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill: string, id: number) => {
            const IconComponent = skillIcons[skill];
            const iconColor = skillColors[skill] || "#8B5CF6";
            return (
              <div 
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
                      {IconComponent ? (
                        <IconComponent className="w-full h-full" style={{ color: iconColor }} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple text-white text-2xl sm:text-3xl font-bold">
                          {skill.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <p className="text-white text-sm sm:text-lg text-center">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;