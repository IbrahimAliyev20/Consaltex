"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { GoArrowRight } from "react-icons/go";
import { ChevronDown, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheetui";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: "/", translationKey: "home" },
    { href: "/about", translationKey: "about" },
    { href: "/service", translationKey: "services" },
    { href: "/information", translationKey: "information" },
    { href: "/contact", translationKey: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-slate-200/60 h-[61px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menyunu aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] p-0 mt-[60px] z-10"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <div className="flex space-x-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={locale === lang.code ? "default" : "outline"}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-1/2 px-4 py-2 ${
                            locale === lang.code
                              ? "bg-blue-600 text-white hover:bg-blue-600/90"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {lang.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-col space-y-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.translationKey}
                          href={link.href}
                          className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                          {t(link.translationKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.translationKey}
              href={link.href}
              className="hover:text-blue-600 text-[#73767A] transition-colors font-normal text-[16px]"
            >
              {t(link.translationKey)}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center p-2 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <span className="font-medium text-gray-700">
                    {languages.find((lang) => lang.code === locale)?.label}
                  </span>
                  <ChevronDown className="ml-1 h-5 w-5 text-gray-600" />
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
          </div>

          <div className="hidden h-6 w-px bg-slate-300 md:block" />

          <Button className="bg-blue-600 text-white flex items-center space-x-2 hover:bg-blue-700 px-4 py-2 rounded-lg">
            <span>{t("contactButton")}</span>
            <GoArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
