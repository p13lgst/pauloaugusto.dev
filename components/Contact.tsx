import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import contactSchema from "schemas/contact";
import styles from "../styles/Contact.module.sass";
import Button from "./Button";

const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setValues((values) => ({
      ...values,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const parseResult = contactSchema.safeParse(values);

    if (!parseResult.success) {
      toast(parseResult.error.issues[0].message, {
        type: "error",
      });

      return setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }

    const fetchPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parseResult.data),
    }).then((res) => {
      if (!res.ok) throw new Error("Something went wrong");
    });

    toast.promise(fetchPromise, {
      success: "Message sent!",
      error: "Something went wrong",
      pending: "Sending message...",
    });
  };

  return (
    <div id={styles.contact}>
      <h1 id="contact" className={styles.heading}>
        Contact
      </h1>
      <p className={styles.text}>
        If you have any questions, or need to get in touch, please fill out the
        form below and I will get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            value={values.firstName}
            placeholder="First Name"
            autoComplete="given-name"
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            value={values.lastName}
            placeholder="Last Name"
            autoComplete="family-name"
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            value={values.phone}
            placeholder="Phone"
            autoComplete="tel"
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={values.email}
            placeholder="Email"
            autoComplete="email"
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={values.message}
            placeholder="Message"
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
