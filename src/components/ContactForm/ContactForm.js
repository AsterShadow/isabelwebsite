"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,

          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };
  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Isabel",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <div className="w-full max-w-[800px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full items-center justify-center"
      >
        <div className="w-full">
          <p>Nom</p>
          <input
            type="text"
            placeholder="Nom"
            {...register("name", { required: true })}
            className="rounded-md border-2 border-third bg-light p-2 w-full text-dark"
          />
        </div>
        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="rounded-md border-2 border-third p-2 w-full text-dark"
          />
        </div>
        <div className="w-full">
          <p>Message</p>
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="rounded-md border-2 border-third p-2 w-full text-dark"
          />
        </div>

        <input
          type="submit"
          value="Envoyer"
          className="cursor-pointer text-center text-light text-md drop-shadow-sm rounded-md p-3 w-48 bg-third transition-all hover:bg-info focus:translate-y-px"
        />
      </form>
      <ToastContainer />
    </div>
  );
}
