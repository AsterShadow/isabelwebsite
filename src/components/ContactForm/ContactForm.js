"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
            {...register("Nom", { required: true })}
            className="rounded-md border-2 border-third bg-light p-2 w-full text-dark"
          />
        </div>
        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            {...register("Email", { required: true })}
            className="rounded-md border-2 border-third p-2 w-full text-dark"
          />
        </div>
        <div className="w-full">
          <p>Message</p>
          <textarea
            {...register("Message", { required: true })}
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
    </div>
  );
}
