"use client";
import FormField from "./FormField/FormField";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import Button from "../../UI/Button/Button";
import styles from "./Form.module.css";
import { useState } from "react";

export default function Form() {
  const [status, setStatus] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      botcheck: e.target.botcheck.value,
    };

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
      setStatus("Mensagem enviada com sucesso!");
      e.target.reset();
    } else {
      setStatus("Erro ao enviar mensagem.");
    }
  }

  return (
    <form onSubmit={submitForm} className={styles.formContainer}>
      <input
        type="text"
        name="botcheck"
        className={styles.hidden}
        tabIndex="-1"
        autoComplete="off"
      />
      <FormField label="Your name" htmlFor="name">
        <Input id="name" name="name" placeholders="Enter your name" required />
      </FormField>
      <FormField label="E-mail" htmlFor="email">
        <Input
          id="phone"
          type="email"
          name="email"
          placeholders="Enter your e-mail"
          required
        />
      </FormField>
      <FormField label="Message" htmlFor="Message">
        <Textarea
          id="Message"
          name="message"
          rows="6"
          placeholders="Write your message"
          required
        />
      </FormField>

      <Button disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Submit"}
      </Button>

      {status === "success" && <p>Menssagem foi enviada com sucesso!</p>}
      {status === "error" && (
        <p>Alguma coisa não correu bem. Por favor, tente novamente.</p>
      )}
    </form>
  );
}
