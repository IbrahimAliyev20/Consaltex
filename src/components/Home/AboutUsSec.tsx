import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAbout } from "@/lib/about";
import { getTranslations } from "next-intl/server";

export default async function AboutUsSec() {

    const t = await getTranslations()
    const about = await getAbout();
  
  
  return (
    <section className=" container mx-auto px-4  ">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="relative text-[22px] md:text-4xl font-bold text-gray-900 mb-2 w-fit pb-4">
             {about.title}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
            </h2>
      
          </div>
          <div className="text-[14px] md:text-base  space-y-4 text-gray-600 leading-relaxed">
            <p>
              {about.description}
            </p>
          </div>
          <Button className=" w-[161px] h-[44px] bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors">
            {t("Information.see_more")}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-col w-full h-[552px] gap-6">
          <div className=" w-full h-full flex gap-6">
            <div className=" w-[50%] h-full flex items-end justify-end">
              <Image  
              src={about.image[0].image}
              alt="hero"
              width={193}
              height={180}
              className="w-[193px] h-[180px] object-cover rounded-xl"
              />

            </div>
            <div className=" w-[50%] h-full">
                 <Image  
              src={about.image[1].image}
              alt="hero"
              width={193}
              height={264}
              className="w-[193px] h-full object-cover rounded-xl"
              />
            </div>

          </div>
          <div  className=" w-full h-full flex gap-6">
            <div className=" w-[33%] h-full flex items-start ">
              <Image  
              src={about.image[2].image}
              alt="hero"
              width={193}
              height={180}
              className="w-[193px] h-[180px] object-cover rounded-xl"
              />
            </div>
            <div className=" w-[33%] h-full flex items-end justify-end">
              <Image  
              src={about.image[3].image}
              alt="hero"
              width={193}
              height={180}
              className="w-full h-full object-cover rounded-xl"
              />

            </div>
            <div className=" w-[33%] h-full flex items-start ">
               <Image  
              src={about.image[4].image}
              alt="hero"
              width={193}
              height={180}
              className="w-[193px] h-[180px] object-cover rounded-xl"
              />
            </div>
          </div>
          
        
        </div>
      </div>
    </section>
  );
}