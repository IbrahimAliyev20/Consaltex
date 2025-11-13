import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import TopLoader from "@/components/shared/TopLoader";
import { Navbar } from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { MetaTagsType } from "@/types/alltype";
import { getMetaTags } from "@/lib/mera-tags";
import { getContact } from "@/lib/contact";
import { getSocialMeida } from "@/lib/social-media";
import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const settings = await getSettings();

  const defaultMeta = metaData.find(
    (meta) => meta.title.toLowerCase() === "home"
  ) || {
    meta_title: "Home title",
    meta_description: "Home description",
    meta_keywords: "Home keywords",
  };

  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,

    icons: {
      icon: settings?.favicon || "/favicon.ico",
    },

    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: "website",
    },
  };
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  const messages = (await getMessages()) as Record<string, string>;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const contact = await getContact();
  const socialLinks = await getSocialMeida();
  const settings = await getSettings();

  return (
    <html lang={locale}>
      <body>
        <TopLoader />
        <NextIntlClientProvider messages={messages}>
          <Navbar
            contact={contact}
            socialLinks={socialLinks}
            settings={settings}
          />
          <main className="min-h-screen py-16 ">{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
