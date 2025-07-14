"use client"; 

import React from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { ContactType, SocialMediaType } from "@/types/alltype";


const navLinkData = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/information", key: "information" },
  { href: "/contact", key: "contact" },
];

type ContactTypeProps = {
  contact: ContactType;
  socialLinks: SocialMediaType[]
};

export function FooterMain({contact, socialLinks}: ContactTypeProps) {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
          <div className="flex flex-col items-start space-y-6">
            <div className="text-3xl font-bold text-foreground">
              <Image
                src="/images/logo.svg"
                alt="Consaltex Logo"
                width={175}
                height={88}
              />    
            </div>
            <p className="text-white text-sm">Follow us on</p>
            <div className="flex items-center space-x-4">
              {" "}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  aria-label={link.name}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.image}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          <div></div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Navigation
            </h3>
            <nav>
              <ul className="space-y-4">
                {" "}
                {navLinkData.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.key}>
                      <Link
                        href={link.href}
                        className={`
                          ${isActive ? "text-white" : "text-muted-foreground"}
                          hover:text-white transition-colors text-sm
                        `}
                      >
                        {t(link.key)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact
            </h3>
            <div className="flex flex-col space-y-4 text-muted-foreground text-sm">
              <a href="#" >{contact.address}</a>
              <a href="tel:+994777777777">{contact.phone}</a>
              <a href="mailto:info.consaltex@gmail.com" >{contact.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copyright"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.5 9a3.5 3.5 0 1 0 0 6h1" />
          </svg>
          <p className="text-white">{t("copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
}
