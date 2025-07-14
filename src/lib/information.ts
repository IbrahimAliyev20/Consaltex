import {
  AllInformationsResponse,
  InformationPost,
  InformationTag,
  SingleInformationResponse,
} from "@/types/alltype";
import { cookies } from "next/headers";

export async function getInformations(): Promise<InformationTag[]> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/informations`;

  const res = await fetch(url, {
    headers: {
      "Accept-Language": localeFromCookie,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch informations");
  }

  const jsonResponse: AllInformationsResponse = await res.json();
  return jsonResponse.data;
}

export async function getInformationBySlug(
  slug: string
): Promise<InformationPost> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/information/${slug}`,
    {
      headers: {
        "Accept-Language": localeFromCookie,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch information with slug: ${slug}`);
  }

  const jsonResponse: SingleInformationResponse = await res.json();
  return jsonResponse.data;
}

export async function getInformationsForStaticParams(): Promise<
  InformationTag[]
> {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/informations`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch informations for static params");
  }

  const jsonResponse: AllInformationsResponse = await res.json();
  return jsonResponse.data;
}
