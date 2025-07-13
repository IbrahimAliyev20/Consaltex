import React from 'react';
import Image from 'next/image';

interface VisionItemProps {
  icon: string;
  title: string;
  description: string;
}

function VisionItem({ icon, title, description }: VisionItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br to-[#4DA5E3] from-[#1F45EC]  mb-6 shadow-lg">
        <div className="text-white text-4xl">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}          
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

export function VisionSection() {
  const visionData = [
    {
      icon: "/icons/visionicon1.png",
      title: 'Elmi əsaslı Yanaşma',
      description: 'Bizim məsləhət xidmətlərimiz tibbi protokollar, beynəlxalq təcrübə və sübutlara əsaslanan metodlarla formalaşdırılır.',
    },
    {
      icon: "/icons/visionicon2.png",
      title: 'Fərdi və Strateji Həllər',
      description: 'Hər klinika, xəstəxana və ya səhiyyə layihəsi üçün unikal strategiya hazırlayır, ehtiyaclara uyğun çevik və effektiv həllər təqdim edirik.',
    },
    {
      icon: "/icons/visionicon3.png",
      title: 'Təcrübəli Komanda',
      description: 'Səhiyyə menecmenti, klinik fəaliyyət, marketing və texnologiya sahələrində çoxillik təcrübəyə sahib komandamızla güclü dəstək veririk.',
    },
  ];

  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionData.map((item, index) => (
            <VisionItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}