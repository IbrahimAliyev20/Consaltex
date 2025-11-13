
"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ContactType, Settings, SocialMediaType } from "@/types/alltype";

type ContactTypeProps = {
  contact: ContactType;
  socialLinks: SocialMediaType[];
  settings: Settings;
};
export function Navbar({ contact, socialLinks, settings }: ContactTypeProps) {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => {
        router.push(pathname, { locale: newLocale });
      }, 300);
    } else {
      router.push(pathname, { locale: newLocale });
    }
  };

  const navLinks = [
    { href: "/", translationKey: "home" },
    { href: "/about", translationKey: "about" },
    { href: "/products", translationKey: "services" },
    { href: "/information", translationKey: "information" },
    { href: "/contact", translationKey: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E0D0D] h-[81px] flex items-center">
      <div className="container mx-auto  flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={settings.logo || '/images/logo.svg'}
              alt="ConsultTex Logo"
              width={150}
              height={24}
              priority
              className="w-[150px] h-[50px]"
            />
          </Link>
        </div>

        <DesktopNav
          navLinks={navLinks}
          languages={languages}
          t={t}
          pathname={pathname}
          locale={locale}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          handleLanguageChange={handleLanguageChange}
          contact={contact}
          socialLinks={socialLinks}
        />

        <MobileNav
          navLinks={navLinks}
          languages={languages}
          t={t}
          pathname={pathname}
          locale={locale}
          handleLanguageChange={handleLanguageChange}
        />
      </div>
    </nav>
  );
}

export default Navbar;
