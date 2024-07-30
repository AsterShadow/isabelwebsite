"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nom" {...register("Nom", {required: true})} />
      <input type="email" placeholder="Email" {...register("Email", {required: true})} />
      <textarea {...register("Message", {required: true})} />

      <input type="submit" />
    </form>
  );
}