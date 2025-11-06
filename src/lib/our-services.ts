// import { OurServicesType, PaginatedServicesResponse, SingleServiceResponse } from '@/types/alltype';
// import { cookies } from 'next/headers'

// export async function getOurServices(): Promise<PaginatedServicesResponse> {
//     const cookieStore = await cookies()
//     const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

//     const url = `${process.env.NEXT_PUBLIC_BASE_URL}/our-services`;

//     const res = await fetch(url, {
//         headers: {
//             "Accept-Language": localeFromCookie,
//         },
//         cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch services');
//     }

//     const jsonResponse: PaginatedServicesResponse = await res.json();
//     return jsonResponse;
// }


// export async function getOurServiceSlug(slug: string): Promise<OurServicesType> {
//     const cookieStore = await cookies();
//     const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';
 
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/our-service/${slug}`, {
//       headers: {
//         "Accept-Language": localeFromCookie,
//       },
//         cache: 'no-store' 
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch service with slug: ${slug}`);
//     }

//     const jsonResponse: SingleServiceResponse = await res.json();

//     return jsonResponse.data; 
// }