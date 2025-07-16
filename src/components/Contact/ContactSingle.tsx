"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactType } from "@/types/alltype";
import { submitContactForm } from "@/lib/contact-form";
import { useTranslations } from "next-intl";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type ContactTypeProps = {
  contact: ContactType;
};

export default function ContactPage({ contact }: ContactTypeProps) {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({ message: "", type: "" });
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    control,
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

  async function onSubmit(values: IFormData) {
    setFormStatus({ message: "", type: "" });

    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        note: values.message,
      };

      const response = await submitContactForm(payload);

      if (response.status) {
        setFormStatus({
          message: t("success_message"),
          type: "success",
        });
        reset();
      } else {
        setFormStatus({
          message: response.message || t("error_message"),
          type: "error",
        });
      }
    } catch (error) {
      let errorMessage = t("unknown_error");
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setFormStatus({ message: errorMessage, type: "error" });
    }
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
              <p className="text-sm text-muted-foreground">{t("Phone")}</p>
              <a href={`tel:${contact.phone}`} className="text-[16px] md:text-lg font-semibold text-foreground">
                {contact.phone}
              </a>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground">
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t("Email")}</p>
              <a href={`mailto:${contact.email}`} className="text-[16px] md:text-lg font-semibold text-foreground">
                {contact.email}
              </a>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 rounded-full text-muted-foreground">
              <MapPin className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t("Address")}</p>
              <a href="#" className="text-[16px] md:text-lg font-semibold text-foreground">
                {contact.address}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-lg">
          <h2 className="text-[20px] md:text-[32px] font-medium text-foreground mb-8">
            {t("Contactus")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("name_surname")}
                </label>
                <Input
                  id="name"
                  placeholder={t("name_surname_placeholder")}
                  {...register("name", {
                    required: t("required_name"),
                    minLength: { value: 2, message: t("minlength_name") },
                  })}
                />
                {errors.name && (<p className="text-sm text-red-500 mt-1">{errors.name.message}</p>)}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("Email-placeholder")}
                  {...register("email", {
                    required: t("required_email"),
                    pattern: { value: /^\S+@\S+\.\S+$/, message: t("invalid_email") },
                  })}
                />
                {errors.email && (<p className="text-sm text-red-500 mt-1">{errors.email.message}</p>)}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("phone_number")}
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: t("required_phone"),
                    minLength: {
                      value: 10,
                      message: t("invalid_phone"),
                    },
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"az"}
                      placeholder={t("phone_number_placeholder")}
                      inputClass="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 !pl-12"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("message-placeholder")}
                  rows={5}
                  className="resize-none h-30"
                  {...register("message", {
                    required: t("required_message"),
                    minLength: { value: 10, message: t("minlength_message") },
                  })}
                />
                {errors.message && (<p className="text-sm text-red-500 mt-1">{errors.message.message}</p>)}
              </div>

              <Button variant="default" type="submit" disabled={isSubmitting} className="w-full bg-[#3674B5] text-white">
                {isSubmitting ? t("sending") : t("send_message")}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

              {formStatus.message && (
                <p className={`mt-4 text-sm font-medium ${formStatus.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {formStatus.message}
                </p>
              )}
            </form>

            <div className="relative w-full h-64 lg:h-auto rounded-lg overflow-hidden">
              <iframe
                src={contact.map}
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