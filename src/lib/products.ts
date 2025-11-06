 "use server"
 
 import {
  LatestProductsResponse,
  PaginatedProductsResponse,
  Products,
  SingleProductResponse,
} from "@/types/alltype";
import { cookies } from "next/headers";

export async function getProducts(
  page: number = 1
): Promise<PaginatedProductsResponse> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get("NEXT_LOCALE")?.value || "az";
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products?page=${page}`;
  const res = await fetch(url, {
    headers: {
      "Accept-Language": localeFromCookie,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const jsonResponse: PaginatedProductsResponse = await res.json();
  return jsonResponse;
}


export async function getProductBySlug(slug: string): Promise<Products> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/${slug}`,
    {
      headers: {
        "Accept-Language": localeFromCookie,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch product with slug: ${slug}`);
  }

  const jsonResponse: SingleProductResponse = await res.json();

  return jsonResponse.data;
}
export async function getLatestProducts(): Promise<Products[]> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/latest-products`;

  const res = await fetch(url, {
    headers: {
      "Accept-Language": localeFromCookie,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch latest products");
  }

  const jsonResponse: LatestProductsResponse = await res.json();
  return jsonResponse.data;
}