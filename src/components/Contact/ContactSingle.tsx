"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface IFormData {
  name: string;
  email: string;
  phone: string; // Added phone field
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "", 
      message: "",
    },
  });

  function onSubmit(values: IFormData) {
    console.log("Form məlumatları:", values);

    reset();

    alert("Mesajınız uğurla göndərildi!");
  }

  return (
    <div>
      <div className=" bg-[#f5fbfd] px-1 md:px-[36px] py-[40px] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground">
              <Phone className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Əlaqə telefon</p>
              <a
                href="tel:+994707007070"
                className="text-[16px] md:text-lg font-semibold text-foreground"
              >
                +994 70 700 70 70
              </a>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a
                href="mailto:greencaspian@gmail.com"
                className="text-[16px] md:text-lg font-semibold text-foreground"
              >
                greencaspian@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground">
              <MapPin className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ünvan</p>
              <a
                href="#"
                className="text-[16px] md:text-lg font-semibold text-foreground"
              >
                Lorem ipsum dolor sit amet
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-lg">
          <h2 className="text-[20px] md:text-[32px] font-medium text-foreground mb-8">
            Bizimlə Əlaqə Saxlayın
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Ad, soyad
                </label>
                <Input
                  id="name"
                  placeholder="Ad və soyadınızı daxil edin"
                  {...register("name", {
                    required: "Ad və soyad mütləqdir.",
                    minLength: {
                      value: 2,
                      message: "Ad ən azı 2 hərfdən ibarət olmalıdır.",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email adresinizi daxil edin"
                  {...register("email", {
                    required: "Email ünvanı mütləqdir.",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message:
                        "Zəhmət olmasa, düzgün email ünvanı daxil edin.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Telefon nömrəsi
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Telefon nömrənizi daxil edin"
                  {...register("phone", {
                    required: "Telefon nömrəsi mütləqdir.",
                    pattern: {
                        value: /^\+?[0-9]{10,}$/, 
                        message: "Zəhmət olmasa, düzgün telefon nömrəsi daxil edin.",
                    }
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>


              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Mesajınız
                </label>
                <Textarea
                  id="message"
                  placeholder="Mesajınızı daxil edin"
                  rows={5}
                  className="resize-none h-30"
                  {...register("message", {
                    required: "Mesaj sahəsi boş buraxıla bilməz.",
                    minLength: {
                      value: 10,
                      message:
                        "Mesajınız ən azı 10 simvoldan ibarət olmalıdır.",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                variant="default"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3674B5] text-white "
              >
                {isSubmitting ? "Göndərilir..." : "Mesajınızı göndərin"}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="relative w-full h-64 lg:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24311.02791725569!2d49.96615792107135!3d40.38938559448785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2saz!4v1751883620153!5m2!1str!2saz"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}