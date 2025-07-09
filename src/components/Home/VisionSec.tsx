import React from 'react';
import { Microscope, Lightbulb, Users } from 'lucide-react';

interface VisionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function VisionItem({ icon, title, description }: VisionItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mb-6 shadow-lg">
        <div className="text-white text-4xl">
          {icon}
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
      icon: <Microscope size={40} />,
      title: 'Elmi əsaslı Yanaşma',
      description: 'Bizim məsləhət xidmətlərimiz tibbi protokollar, beynəlxalq təcrübə və sübutlara əsaslanan metodlarla formalaşdırılır.',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Fərdi və Strateji Həllər',
      description: 'Hər klinika, xəstəxana və ya səhiyyə layihəsi üçün unikal strategiya hazırlayır, ehtiyaclara uyğun çevik və effektiv həllər təqdim edirik.',
    },
    {
      icon: <Users size={40} />,
      title: 'Təcrübəli Komanda',
      description: 'Səhiyyə menecmenti, klinik fəaliyyət, marketing və texnologiya sahələrində çoxillik təcrübəyə sahib komandamızla güclü dəstək veririk.',
    },
  ];

  return (
    <section className="py-16 bg-white">
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