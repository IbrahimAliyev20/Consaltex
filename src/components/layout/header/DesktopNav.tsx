"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Props üçün tipləri təyin edirik
interface NavLink {
  href: string;
  translationKey: string;
}

interface Language {
  code: string;
  label: string;
}

interface DesktopNavProps {
  navLinks: NavLink[];
  languages: Language[];
  t: (key: string) => string;
  pathname: string;
  locale: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  handleLanguageChange: (newLocale: string) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  navLinks,
  languages,
  t,
  pathname,
  locale,
  isDropdownOpen,
  setIsDropdownOpen,
  handleLanguageChange,
}) => {
  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors font-medium text-base ${
              pathname === link.href
                ? "text-blue-500"
                : "text-white hover:text-blue-400"
            }`}
          >
            {t(link.translationKey)}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-3">
        <DropdownMenu onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center p-2 text-white hover:bg-transparent hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <span className="font-medium">
                {languages.find((lang) => lang.code === locale)?.label}
              </span>
              {isDropdownOpen ? (
                <ChevronUp className="ml-1 h-5 w-5" />
              ) : (
                <ChevronDown className="ml-1 h-5 w-5" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="cursor-pointer"
              >
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-6 w-px bg-slate-600" />

        <Link href="/contact">
          <Button className="bg-[#1F45EC] hover:bg-[#4C6AF0] text-white flex items-center space-x-2 px-4 py-2.5 rounded-lg cursor-pointer">
            <span>{t("contactButton")}</span>
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </>
  );
};
