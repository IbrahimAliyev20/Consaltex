import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheetui";

interface NavLink {
  href: string;
  translationKey: string;
}

interface Language {
  code: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  languages: Language[];
  t: (key: string) => string;
  pathname: string;
  locale: string;
  handleLanguageChange: (newLocale: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  navLinks,
  languages,
  t,
  pathname,
  locale,
  handleLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-2 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:bg-gray-200 rounded-md"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menyunu aç</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[70%] bg-white text-gray-500 p-0 border-r border-gray-300 mt-[71px] h-[calc(fit-content-71px)]"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 p-6 pt-12 overflow-y-auto">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.translationKey}>
                    <Link
                      href={link.href}
                      className={`text-2xl font-light transition-colors ${
                        pathname === link.href
                          ? "text-blue-500"
                          : "text-gray-500 hover:text-blue-400"
                      }`}
                    >
                      {t(link.translationKey)}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-300">
              <div className="flex items-center justify-center space-x-3">
                {languages.map((lang) => (
                  <SheetClose asChild key={lang.code}>
                    <Button
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`rounded-2xl px-6 py-2 transition-colors ${
                        locale === lang.code
                          ? "bg-blue-600 text-white"
                          : "bg-white text-black hover:bg-white"
                      }`}
                    >
                      {lang.label}
                    </Button>
                  </SheetClose>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
