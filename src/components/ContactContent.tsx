import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../styles/ContactContent.module.scss";
const writeMail = <>{<a href="mailto:contact@popdesign.com" className={styles.mail}>contact@popdesign.com</a>}</>
const contactText = <>{"Drop us a line about your project at"} {writeMail} {"or via the contact form below, and we will contact you soon."}</>;
const title = "Contact Us";

export default function ContactContent() {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{contactText}</p>
      <ContactForm buttonText={"Submit"} />
    </section>
  );
} 

type FormValues = {
  email: string;
  name: string;
  message: string;
};
function ContactForm({ buttonText }: { buttonText: string }) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const intialValues = { 
    email: "Email",
    name: "Name",
    message: "Message",
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <fieldset className={styles.formItems}>
        <input
          defaultValue={intialValues.name}
          placeholder="Name" 
          type="text" autoComplete="off"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name",  { 
            required: true, 
            maxLength: {
              value: 20, 
              message: "The Name should have at most 20 characters",
            },
            pattern: {
              value: /^[A-Za-z ]+$/i,
              message: "The Name must contain only letters",
            } 
          })}
        />
        <input 
          defaultValue={intialValues.email}
          placeholder="contact@popdesign.com"
          type="email" autoComplete="off"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) => v.length <= 30 || "The Email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
            },
          })}
        />
      </fieldset>
      <textarea
        defaultValue={intialValues.message}
        placeholder="Your Message"
        aria-invalid={errors.message ? "true" : "false"}
        {...register("message", {
          pattern: /[A-Za-z]/,
        })}
      />
    
      {errors.email?.message && (
        <p role="alert" className={styles.error}>{errors.email.message}</p>
      )}
      {errors.name && errors.name.type === "required" && (
        <p role="alert" className={styles.error}>Name is required</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p role="alert" className={styles.error}>{errors.name.message}</p>
      )}
      {errors.name && errors.name.type === "pattern" && (
        <p role="alert" className={styles.error}>{errors.name.message}</p>
      )}
      <button type="submit" className={styles.formButton}>{buttonText}</button>
    </form>
  );
}