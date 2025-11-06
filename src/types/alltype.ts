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

export interface ServiceAttribute {
  title: string;
  description: string;
}

export interface ServiceImage {
  image: string;
}



export interface OurServicesType {
  title: string;
  slug: string;
  description: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  image: string;
  attributes: ServiceAttribute[];
  images: ServiceImage[];
}



export interface PaginatedServicesResponse {
  data: OurServicesType[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface SingleServiceResponse {
  timestamp: string;
  status: boolean;
  message: string;
  lang: string;
  data: OurServicesType;
} 



export interface InformationPost {
  title: string;
  description: string;
  slug: string;
  image: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  reading_time: string;
  created_at: string;
}

export interface InformationTag {
  title: string;
  slug: string;
  informations: InformationPost[];
}

export interface AllInformationsResponse {
  data: InformationTag[];
}

export interface SingleInformationResponse {
  timestamp: string;
  status: boolean;
  message: string;
  lang: string;
  data: InformationPost;
}
export interface MetaTagsType {
  title: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

export interface Products {
  name: string
  description: string
  image: string
  thumb_image: string
  attributes: {
    title: string
    description: string 
  }[],
  detail_images:{
    image:string
    thumb_image:string
  }[],
}
export interface PaginatedProductsResponse {
  data: Products[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface SingleProductResponse {
  timestamp: string;
  status: boolean;
  message: string;
  lang: string;
  data: Products;
}

export interface LatestProductsResponse {
  data: Products[];
}