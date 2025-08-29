"use client"

import SkillCard from "./skill-card"
import { FaJs, FaReact, FaDocker } from "react-icons/fa"
import {
    SiTypescript,
    SiTailwindcss,
    SiDotnet,
    SiOracle,
    SiDatadog,
    SiJsonwebtokens,
    SiApachekafka,
    SiRabbitmq 
} from "react-icons/si"

import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";

const frontEndSkills = [
    { name: "JAVASCRIPT", Icon: FaJs, bgColor: "bg-yellow-400" },
    { name: "TYPESCRIPT", Icon: SiTypescript, bgColor: "bg-blue-500" },
    { name: "REACT.JS", Icon: FaReact, bgColor: "bg-cyan-400" },
    { name: "TAILWIND CSS", Icon: SiTailwindcss, bgColor: "bg-cyan-500" },
]

const backEndSkills = [
    { name: "C#", Icon: TbBrandCSharp, bgColor: "bg-green-500" },
    { name: ".NET", Icon: SiDotnet, bgColor: "bg-green-500" },
    { name: "MICROSOFT SQL SERVER", Icon: DiMsqlServer, bgColor: "bg-green-500" },
    { name: "ORACLE", Icon: SiOracle, bgColor: "bg-green-500" },
    { name: "AZURE", Icon: VscAzureDevops, bgColor: "bg-green-500" },
    { name: "DATADOG", Icon: SiDatadog, bgColor: "bg-orange-500" },
    { name: "JWT", Icon: SiJsonwebtokens, bgColor: "bg-green-400" },
    { name: "KAFKA", Icon: SiApachekafka, bgColor: "bg-blue-600" },
    { name: "RABBITMQ", Icon: SiRabbitmq, bgColor: "bg-blue-600" },
    { name: "DOCKER", Icon: FaDocker, bgColor: "bg-blue-500" },
]

export default function SkillsSection() {
    return (
        <div className="bg-gray-100 dark:bg-[#141414] pt-10 pb-20">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold ">Skills</h2>
                </div>

                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center">Backend</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {backEndSkills.map((skill) => (
                                <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} bgColor={skill.bgColor} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center">Frontend</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {frontEndSkills.map((skill) => (
                                <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} bgColor={skill.bgColor} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
