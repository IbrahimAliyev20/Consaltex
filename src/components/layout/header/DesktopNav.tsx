"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ChevronDown, ChevronUp, Phone, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ContactType, SocialMediaType } from "@/types/alltype";
import Image from "next/image";

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
  contact: ContactType;
  socialLinks: SocialMediaType[];
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
  contact,
  socialLinks,
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

      <div className="hidden md:flex items-center space-x-4">
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

        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={link.image} alt={link.name} width={24} height={24} />
            </Link>
          ))}
        </div>

        <div className="h-6 w-px bg-slate-600" />

        <div className="flex flex-col text-xs text-white">
          {contact && (
            <>
              <Link
                href={`tel:${contact.phone}`} 
                className="flex items-center space-x-2 transition-colors hover:text-blue-400"
              >
                <Phone className="h-4 w-4" />
                <span>{contact.phone}</span>
              </Link>
              <Link
                href={`mailto:${contact.email}`} 
                className="flex items-center space-x-2 transition-colors hover:text-blue-400"
              >
                <Mail className="h-4 w-4" />
                <span>{contact.email}</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
