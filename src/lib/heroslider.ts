import { HeroSliderType } from '@/types/alltype';
import {cookies} from 'next/headers'


export async function getHeroSlider(): Promise<HeroSliderType[]> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/slider`, {
    headers: {
      "Accept-Language": localeFromCookie, 
    },
    cache: 'no-store' 
  });

  const json = await res.json();
  return json.data; 
}