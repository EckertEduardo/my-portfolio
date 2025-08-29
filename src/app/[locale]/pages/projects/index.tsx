"use client"

import { useTranslations } from "next-intl";
import { ProjectList } from "../../../../components/projects-list";

export const ProjectsSection = () => {

    const t = useTranslations("Projects");

    return (
        <div className="bg-gray-100 dark:bg-[#141414] h-auto pb-10 sm:pb-0 justify-center bg-center text-center pt-10">
            <h1 className="sm:text-3xl text-2xl pt-10 font-bold">{t("title")}</h1>
            <p className="pt-6">{t("description")}</p>
            <ProjectList/>
        </div>
    );
}