export interface HeroSliderType {
    title: string
    description: string
    image: string
}
export interface AdvantageType {
    title: string
    description: string
    image: string
}

export interface ContactType {
    map: string
    email: string
    phone: string
    address: string
}
export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  note: string;
}

export interface ContactFormResponse {
  status: boolean;
  message: string;
  lang: string;
  data: {
    name: string;
    phone: string;
    email: string;
    note: string;
  };
}
export interface AboutAttributeType{
    title: string
    description: string
    image: string

}

export interface SocialMediaType{
    name: string
    link: string
    image: string
}
export interface AboutType{
    title: string
    description: string
    image: {image: string}[]

}