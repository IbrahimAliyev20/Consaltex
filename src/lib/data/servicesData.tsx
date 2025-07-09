import React from 'react';
import { 
  BrainCircuit, 
  FileText, 
  Combine, 
  Wind,
  Navigation,
  Cpu,
  Shield,
  Fuel,
  Users,
  Wrench,
  Globe,
  Anchor,
  Satellite,
  Handshake,
  Drill
} from 'lucide-react';

export interface Service {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    icon: <BrainCircuit size={28} />,
    title: "İntellektual idarəetmə sistemləri",
    description: "Gəmilərin əməliyyat səmərəliliyini maksimuma çatdırmaq üçün hazırladığımız intellektual idarəetmə platformaları. Bu sistemlər, gəmilərin hərəkətini, yanacaq sərfiyyatını və texniki vəziyyətini real vaxt rejimində izləyir. Marşrut optimallaşdırılması, proqnozlaşdırıcı texniki baxış modulları və avtomatlaşdırılmış hesabatlar vasitəsilə qərar qəbuletmə proseslərini sürətləndirir. Məqsədimiz, əməliyyat xərclərini azaltmaq və təhlükəsizliyi ən yüksək səviyyəyə qaldırmaqdır."
  },
  {
    icon: <FileText size={28} />,
    title: "Layihə üzrə konsaltinq",
    description: "Dəniz sənayesində irimiqyaslı layihələrinizin hər mərhələsində peşəkar dəstək göstəririk. İlkin texniki-iqtisadi əsaslandırmadan başlayaraq, mühəndis-dizayn sənədlərinin hazırlanması, risklərin qiymətləndirilməsi və satınalma proseslərinin idarə edilməsinə qədər tam konsaltinq xidməti təklif edirik. Dekarbonizasiya və beynəlxalq ekoloji normaları (IMO, MARPOL) əsas tutaraq layihələrinizin dayanıqlı və gələcəyə uyğun olmasını təmin edirik."
  },
  {
    icon: <Combine size={28} />,
    title: "Konsultasiya və dizayn",
    description: "Xəzər Dənizinin unikal şəraitinə uyğunlaşdırılmış gəmi və yaxtaların konseptual və detallı dizaynını həyata keçiririk. Mütəxəssislərimiz, ən son CAD/CAM proqram təminatlarından istifadə edərək hidrodinamik səmərəlilik, dayanıqlılıq və təhlükəsizlik kimi kritik amilləri nəzərə alırlar. Liman operatorları və xidmət gəmiləri üçün mövcud donanmanın modernləşdirilməsi və spesifik ehtiyaclara cavab verən yeni sistemlərin inteqrasiyası üzrə məsləhətlər veririk."
  },
  {
    icon: <Wind size={28} />,
    title: "WindWings® inteqrasiya",
    description: "Gəmiçilikdə inqilabi bir addım olan WindWings® külək-qanad sistemlərinin inteqrasiyası ilə donanmanızın yanacaq sərini əhəmiyyətli dərəcədə azaldın. Bu sərt yelkənlər, külək enerjisindən istifadə edərək mühərriklərin yükünü yüngülləşdirir və CO₂ emissiyalarını minimuma endirir. Mühəndis komandamız, gəminizin struktur analizini apararaq sistemin optimal quraşdırılmasını və mövcud naviqasiya sistemləri ilə tam sinxronizasiyasını təmin edir."
  },
  {
    icon: <Navigation size={28} />,
    title: "Elektron Naviqasiya Sistemləri",
    description: "Beynəlxalq Dəniz Təşkilatının (IMO) standartlarına tam cavab verən müasir elektron naviqasiya körpüsü avadanlıqları ilə təchizatı həyata keçiririk. ECDIS, ARPA radarları, DGPS və AIS kimi qabaqcıl sistemlərin tədarükü, quraşdırılması və heyətin təlimatlandırılmasını təmin edirik. Bu sistemlər, naviqasiya təhlükəsizliyini artırır, insan səhvi riskini azaldır və gəmilərin SOLAS konvensiyasının tələblərinə tam uyğunluğunu təmin edir."
  },
  {
    icon: <Cpu size={28} />,
    title: "Gəmi Proseslərinin Avtomatlaşdırılması",
    description: "Gəmi üzərindəki rutin və mürəkkəb əməliyyatları avtomatlaşdıraraq insan resurslarından daha səmərəli istifadəni təmin edirik. Yük əməliyyatları, ballast suyunun idarə olunması və maşın şöbəsindəki proseslərin avtomatlaşdırılması, əməliyyat dəqiqliyini artırır və potensial təhlükələri azaldır. Təklif etdiyimiz həllər, gəminizin mövcud infrastrukturuna asanlıqla inteqrasiya oluna bilir və etibarlı işləməyə zəmanət verir."
  },
  {
    icon: <Shield size={28} />,
    title: "Dəniz Kibertəhlükəsizliyi",
    description: "Rəqəmsallaşan dənizçilikdə kiberhücumlar ciddi təhdidə çevrilmişdir. Naviqasiya, rabitə və idarəetmə sistemlərinizin təhlükəsizliyini təmin etmək üçün çoxqatmanlı müdafiə strategiyaları təklif edirik. Mütəxəssislərimiz, zəifliklərin aşkarlanması (penetration testing), risk analizi, heyətin təlimatlandırılması və 24/7 monitorinq xidmətləri ilə gəminizin rəqəmsal toxunulmazlığını təmin edir."
  },
  {
    icon: <Fuel size={28} />,
    title: "Yanacaq Səmərəliliyi Həlləri",
    description: "Yanacaq, gəmiçilikdə ən böyük əməliyyat xərcidir. Biz, yanacaq sərfiyyatını real zamanlı izləyən sensorlar və analiz proqramları vasitəsilə səmərəliliyi artırmağa kömək edirik. Gəminin sürəti, trim və hava şəraiti kimi faktorları analiz edərək optimal hərəkət rejimlərini tövsiyə edirik. Bu yanaşma, təkcə xərcləri azaltmır, həm də karbon ayaq izinizi kiçildərək ekoloji öhdəliklərinizi yerinə yetirməyə kömək edir."
  },
  {
    icon: <Users size={28} />,
    title: "Heyət üçün Təlim və Simulyatorlar",
    description: "Yüksək ixtisaslı heyət, təhlükəsiz və səmərəli əməliyyatların təməlidir. Ən müasir körpü və maşın şöbəsi simulyatorlarımız vasitəsilə heyət üzvlərinə real şəraitə yaxın təlimlər keçirik. Fövqəladə hallar, mürəkkəb manevrlər və yeni avadanlıqların mənimsənilməsi üzrə təşkil edilən proqramlarımız, heyətin peşəkarlığını və özünəinamını artırır. Təlimlər həm bizim mərkəzimizdə, həm də sifarişçinin məkanında təşkil edilə bilər."
  },
  {
    icon: <Wrench size={28} />,
    title: "Proqnozlaşdırıcı Texniki Baxış",
    description: "Avadanlıqlarda yaranan nasazlıqlar bahalı təmirə və planlaşdırılmamış dayanmalara səbəb olur. Bizim proqnozlaşdırıcı texniki baxış (predictive maintenance) sistemlərimiz, mühərrik və digər vacib mexanizmlərin işini daimi analiz edir. Vibrasiya, temperatur və digər göstəricilərdəki kiçik dəyişiklikləri belə aşkarlayaraq potensial nasazlıqları əvvəlcədən xəbər verir. Bu, təmir işlərini öncədən planlaşdırmağa və böyük xərclərdən yayınmağa imkan tanıyır."
  },
  {
    icon: <Globe size={28} />,
    title: "Ekoloji Standartlara Uyğunluq",
    description: "Dənizçilikdə ekoloji tələblər getdikcə sərtləşir. Komandamız, gəmilərinizin IMO 2020 kükürd limiti, Ballast Suyu İdarəetmə Konvensiyası (BWM) və Karbon İntensivliyi Göstəricisi (CII) kimi ən son beynəlxalq standartlara tam uyğunluğunu təmin etmək üçün hərtərəfli məsləhət xidmətləri göstərir. Emissiyaların azaldılması texnologiyaları və sənədləşmə proseslərində tam dəstək veririk."
  },
  {
    icon: <Anchor size={28} />,
    title: "Liman Əməliyyatlarının Optimallaşdırılması",
    description: "Limanlarda səmərəlilik, bütün təchizat zənciri üçün həlledici rol oynayır. Gəmilərin yanaşması, yük əməliyyatları və sənədləşmə proseslərini rəqəmsallaşdıran və optimallaşdıran proqram təminatları təklif edirik. Terminal idarəetmə sistemlərimiz (TOS), limanlarda gözləmə müddətini azaldır, resurslardan istifadəni yaxşılaşdırır və limanın ümumi məhsuldarlığını əhəmiyyətli dərəcədə artırır."
  },
  {
    icon: <Satellite size={28} />,
    title: "Peyk Rabitə Sistemləri",
    description: "Müasir gəmiçilik fasiləsiz rabitə tələb edir. Biz, dünyanın istənilən nöqtəsində yüksək sürətli və etibarlı internet bağlantısı təmin edən VSAT (Very Small Aperture Terminal) peyk rabitə sistemlərinin quraşdırılması və texniki dəstəyini təmin edirik. Bu, həm heyətin rifahı, həm də gəminin əməliyyat məlumatlarını sahilə ötürməsi üçün kritik əhəmiyyət daşıyır. Fərqli ehtiyaclara uyğun çevik tarif planları təklif edirik."
  },
  {
    icon: <Handshake size={28} />,
    title: "Gəmi Brokeraj Xidmətləri",
    description: "Gəmi alqı-satqısı mürəkkəb və çoxmərhələli bir prosesdir. Təcrübəli broker komandamız, sizin üçün ən uyğun gəminin tapılmasından qiymət danışıqlarına, texniki yoxlamanın təşkilindən hüquqi sənədləşmənin tamamlanmasına qədər bütün prosesi idarə edir. Həm yeni tikilən, həm də ikinci əl gəmi bazarında geniş əlaqə şəbəkəmizlə sizə ən sərfəli şərtləri təmin etməyə çalışırıq."
  },
  {
    icon: <Drill size={28} />,
    title: "Dəniz Platformalarına Dəstək",
    description: "Offşor neft-qaz sənayesi yüksək ixtisaslaşma və xüsusi yanaşma tələb edir. Dəniz platformalarının və qazma qurğularının fasiləsiz işini təmin etmək üçün hərtərəfli təchizat və logistika xidmətləri göstəririk. Ehtiyat hissələrinin tədarükü, ixtisaslaşmış personalın daşınması, sualtı təmir işlərinin təşkili və təcili ləvazimatların çatdırılması kimi kritik əməliyyatları yüksək təhlükəsizlik standartları ilə həyata keçiririk."
  },
];