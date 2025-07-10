import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUsSec() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-gray-900 mb-2 w-fit pb-4">
              About us
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
            </h2>
      
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis non facilisi
              fringilla faucibus nibh. Enim lacus pulvinar non magna sit nibh
              fames pretium. Faucibus ullamcorper felis eu nisl magna amet
              imperdiet tristique. Tortor pulvinar dignissim lacus venenatis
              mattis eget Lorem ipsum dolor sit amet consectetur. Turpis non
              facilisi fringilla faucibus nibh. Enim lacus pulvinar non magna
              sit nibh fames pretium. Faucibus ullamcorper felis eu nisl magna
              amet imperdiet tristique. Tortor pulvinar dignissim lacus
              venenatis mattis eget Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors">
            See more
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-col w-full h-[552px] gap-6">
          <div className=" w-full h-full flex gap-6">
            <div className=" w-[50%] h-full flex items-end justify-end">
              <Image  
              src="/images/aboutus2.png"
              alt="hero"
              width={193}
              height={180}
              className="w-[193px] h-[180px] object-cover rounded-xl"
              />

            </div>
            <div className=" w-[50%] h-full">
                 <Image  
              src="/images/aboutus1.jpg"
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
              src="/images/aboutus3.jpg"
              alt="hero"
              width={193}
              height={180}
              className="w-[193px] h-[180px] object-cover rounded-xl"
              />
            </div>
            <div className=" w-[33%] h-full flex items-end justify-end">
              <Image  
              src="/images/aboutus4.jpg"
              alt="hero"
              width={193}
              height={180}
              className="w-full h-full object-cover rounded-xl"
              />

            </div>
            <div className=" w-[33%] h-full flex items-start ">
               <Image  
              src="/images/aboutus5.png"
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