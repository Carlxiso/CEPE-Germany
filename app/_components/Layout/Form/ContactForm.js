"use client";

import { useState } from "react";
import FormField from "./FormField/FormField";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import Button from "@/app/_components/UI/Button/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function submitForm(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;

    const data = Object.fromEntries(new FormData(form));

    const formData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: "Nova mensagem de contacto — CEPE Alemanha",
      from_name: "CEPE Alemanha",
      ...data,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={submitForm}
      className={styles.formContainer}
      aria-busy={status === "loading"}
    >
      <input
        type="text"
        name="botcheck"
        className={styles.hidden}
        tabIndex="-1"
        autoComplete="off"
      />

      <FormField label="Nome" htmlFor="name">
        <Input id="name" name="name" placeholder="Digite o seu nome" required />
      </FormField>

      <FormField label="E-mail" htmlFor="email">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          required
        />
      </FormField>

      <FormField label="Mensagem" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Digite a sua mensagem"
          required
        />
      </FormField>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "A Enviar Mensagem..." : "Enviar"}
      </Button>

      <div aria-live="polite">
        {status === "success" && (
          <p className={styles.success}>A Mensagem foi enviada com sucesso!</p>
        )}
        {status === "error" && (
          <p className={styles.error}>
            Algo não correu bem. Por favor, tente novamente.
          </p>
        )}
      </div>
    </form>
  );
}
