"use client";

import { useState } from "react";
import FormField from "./FormField/FormField";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import Button from "../../UI/Button/Button";
import styles from "./Form.module.css";
import DividerSection from "../../DividerSection/DividerSection";

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
    <>
      <DividerSection
        title="Contactos"
        subtitle="Tentaremos ser o mais breves possivel"
      />
      <div className={styles.contact}>
        {/* LEFT COLUMN */}

        <div className={styles.contactCol}>
          <h3>Contacte-nos e abarque a língua portuguesa hoje!</h3>

          <p>
            Se tiver dúvidas ou precisar de mais informações, estamos à sua
            disposição. Entre em contacto connosco e descubra como a nossa
            equipa pode ajudá-lo a abarcar a língua portuguesa de forma
            completa, valorizando o seu percurso de aprendizagem e experiências
            com o português.
          </p>
          <Button href="/contactos">Saber +</Button>
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
            <Input
              id="name"
              name="name"
              placeholder="Digite o seu nome"
              required
            />
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

          <FormField label="Message" htmlFor="message">
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
    </>
  );
}
