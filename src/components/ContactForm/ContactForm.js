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
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full items-center justify-center">
        <input
          type="text"
          placeholder="Nom"
          {...register("Nom", { required: true })}
          className=""
        />
        <input
          type="email"
          placeholder="Email"
          {...register("Email", { required: true })}
        />
        <textarea {...register("Message", { required: true })} />

        <input type="submit" />
      </form>
    </div>
  );
}
