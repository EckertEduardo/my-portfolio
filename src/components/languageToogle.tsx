"use client"

import * as React from "react"
import ReactCountryFlag from "react-country-flag"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Link, usePathname } from "@/navigation"
import { useLocale } from "next-intl"

export function LanguageToggle() {
    const pathname = usePathname()
    const locale = useLocale()

    const getFlagCode = (locale: string) => {
        switch (locale) {
            case "pt":
                return "BR"
            case "en":
                return "US"
            default:
                return "US"
        }
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lIcon" className="p-0 pointer transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800">
                    <ReactCountryFlag
                        countryCode={getFlagCode(locale)}
                        svg
                        style={{ width: "1.6rem", height: "1.6rem" }}
                    />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:bg-gray-200 rounded-md">
                    <Link href={pathname} locale="pt" className="flex items-center gap-2 w-full  px-1.5 py-1.5 transition-transform duration-300 hover:scale-105 ">
                        <ReactCountryFlag countryCode="BR" svg style={{ width: "1.2em", height: "1.2em" }} />
                        Português
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:bg-gray-200 rounded-md">
                    <Link href={pathname} locale="en" className="flex items-center gap-2 w-full  px-1.5 py-1.5 transition-transform duration-300 hover:scale-105">
                        <ReactCountryFlag countryCode="US" svg style={{ width: "1.2em", height: "1.2em" }} />
                        English
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
