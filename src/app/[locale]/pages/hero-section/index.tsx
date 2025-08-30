import Image from "next/image";
import { TechBadge } from "../../../../components/tech-badge";
import { Button } from "../../../../components/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";
import { useTranslations } from 'next-intl'
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const contacts = [
    {
        url: "https://github.com/EckertEduardo",
        icon: <TbBrandGithub />
    },
    {
        url: "https://www.linkedin.com/in/eduardo-eckert-sperfeld/",
        icon: <TbBrandLinkedin />
    },
    {
        url: "mailto:eduardo_sperfeld@hotmail.com",
        icon: <TbBrandGmail />
    },
    {
        url: "https://wa.me/5547996526459",
        icon: <TbBrandWhatsapp />
    },
]

export default function HeroSection() {

    const t = useTranslations("Hero");

    return (
        <div>
            <section className="bg-white dark:bg-black w-full h-auto sm:h-[82vh] flex flex-col justify-center items-center pb-6 sm:pb:0 pt-20 sm:pt-0">
                <div className="container flex items-center justify-between flex-col-reverse lg:flex-row mx-auto px-4">
                    <div className="w-full lg:max-w-[530px] text-center lg:text-left">
                        <p className="font-mono text-purple-600 dark:text-purple-400">{t("p")}</p>
                        <h2 className="text-4xl font-medium mt-2">{t("h2")}</h2>
                        <p className="text-gray-800 dark:text-gray-400 my-6 text-sm sm:text-base">
                            {t("text")}
                        </p>

                        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] justify-center lg:justify-start">
                            <TechBadge name="C#" />
                        </div>

                        <div className="mt-6 lg:mt-10 flex items-center sm:gap-5 flex-col sm:flex-row justify-center lg:justify-start">
                            <a href="#contact-section">
                                <Button className="w-max shadow-button flex items-center gap-2">
                                    {t("button")}
                                    <HiArrowNarrowRight size={18} />
                                </Button>
                            </a>

                            <div className="text-2xl flex items-center gap-3 mt-4 sm:mt-0">
                                {contacts.map((contact, index) => (
                                    <a
                                        href={contact.url}
                                        target="_blank"
                                        key={`contact-${index}`}
                                        className="text-gray-800 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-800 transition-colors"
                                    >
                                        {contact.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Image
                        width={420}
                        height={404}
                        src="/images/EduardoEckertSperfeld.png"
                        alt="Foto de perfil Eduardo Eckert Sperfeld"
                        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-full shadow-2xl object-cover mt-6 sm:mt-0"
                    />
                </div>
            </section>
            <div className="h-auto sm:h-[10vh] pb-6 sm:pb-0 bg-white dark:bg-black w-full sm:text-2xl flex justify-center items-center gap-3 font-bold text-gray-800 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-800 transition-colors">
                <a className="flex gap-x-2" href="#skills-section">
                    <FaRegArrowAltCircleDown className="animate-bounce" />
                </a>
            </div>
        </div>
    )
}
