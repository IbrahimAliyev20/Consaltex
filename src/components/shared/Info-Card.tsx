import React from "react";
import { Clock, CalendarDays, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface InfoCardProps {
  imageSrc: string;
  readingTime: string;
  date: string;
  title: string;
  description: string;
  slug: string;
}

export default async function InfoCard({imageSrc,readingTime,date,title,description,slug,}: InfoCardProps) {
  const t = await getTranslations("Information");

  return (
    <Link
      href={`/information/${slug}`}
      className="group bg-card overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={225}
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="py-4 flex flex-col flex-grow">
        <div className="flex items-center text-muted-foreground text-sm mb-2">
          <Clock className="w-4 h-4 mr-1" />
          <span>{readingTime} {t("reading_time")}</span>
          <CalendarDays className="w-4 h-4 ml-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p
          className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />
        <div className="inline-flex items-center text-[#1F45EC] text-sm font-medium">
          {t("see_more")}
          <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
