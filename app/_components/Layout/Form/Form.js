"use client";

import { useState } from "react";
import FormField from "./FormField/FormField";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import Button from "../../UI/Button/Button";
import styles from "./Form.module.css";

export default function Form() {
  const [status, setStatus] = useState("idle");

  async function submitForm(e) {
    e.preventDefault();

    setStatus("loading");

    const formData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      botcheck: e.target.botcheck.value,
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
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.contact}>
      {/* LEFT COLUMN */}

      <div className={styles.contactCol}>
        <h3>Como podemos ajudar-te a aprender?</h3>

        <p>
          Se tiver algo questão, por favor não hesite em contactar-nos.
          Envie-nos uma mensagem e entraremos em contacto consigo.
        </p>
      </div>

      {/* FORM */}

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

        <FormField label="Your name" htmlFor="name">
          <Input id="name" name="name" placeholder="Enter your name" required />
        </FormField>

        <FormField label="E-mail" htmlFor="email">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            required
          />
        </FormField>

        <FormField label="Message" htmlFor="message">
          <Textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message"
            required
          />
        </FormField>

        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "A Enviar Mensagem..." : "Enviar"}
        </Button>

        <div aria-live="polite">
          {status === "success" && (
            <p className={styles.success}>
              A Mensagem foi enviada com sucesso!
            </p>
          )}

          {status === "error" && (
            <p className={styles.error}>
              Algo nao correu bem. Por favor, tente novamente.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
