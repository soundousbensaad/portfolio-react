import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";

function Contact(props) {
  console.log("Props reçues dans Contact:", props);
  console.log("darkMode:", props.darkMode);
  console.log("language:", props.language);
  
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Utilise les props avec des valeurs par défaut
  const darkMode = props.darkMode || false;
  const language = props.language || "en";

  const text = {
    en: {
      heading: "Contact Me",
      info: "Fill the form below or reach me directly at ",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      backButton: "← Back to Home",
      anotherMessage: "Send Another Message",
      thankYou: "Thank you for your message! I'll get back to you soon."
    },
    fr: {
      heading: "Me Contacter",
      info: "Remplissez le formulaire ci-dessous ou contactez-moi directement à ",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre Email",
      messagePlaceholder: "Votre Message",
      sendButton: "Envoyer le Message",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès!",
      backButton: "← Retour à l'Accueil",
      anotherMessage: "Envoyer un autre message",
      thankYou: "Merci pour votre message! Je vous répondrai bientôt."
    }
  };

  // Utilise la langue actuelle
  const currentText = text[language] || text.en;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert(language === "en" 
          ? "Failed to send message. Please try again." 
          : "Échec de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      alert(language === "en" 
        ? "Error sending message. Please check your connection." 
        : "Erreur d'envoi du message. Veuillez vérifier votre connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${styles.contact} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.backContainer}>
        <button 
          className={styles.backBtn}
          onClick={() => navigate("/")}
          aria-label={currentText.backButton}
        >
          {currentText.backButton}
        </button>
      </div>

      <h2 className={styles.heading}>{currentText.heading}</h2>
      
      <p className={styles.info}>
        {currentText.info}
        <a href="mailto:soundousbensaad@gmail.com">soundousbensaad@gmail.com</a>
      </p>

      {isSubmitted ? (
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.successText}>{currentText.success}</h3>
          <p className={styles.successSubtext}>{currentText.thankYou}</p>
          <button 
            className={styles.successBtn}
            onClick={() => setIsSubmitted(false)}
          >
            {currentText.anotherMessage}
          </button>
        </div>
      ) : (
        <form 
          className={styles.form} 
          action="https://formspree.io/f/yourFormID"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="name" 
            placeholder={currentText.namePlaceholder} 
            required 
            disabled={isLoading}
          />
          <input 
            type="email" 
            name="email" 
            placeholder={currentText.emailPlaceholder} 
            required 
            disabled={isLoading}
          />
          <textarea 
            name="message" 
            rows="5" 
            placeholder={currentText.messagePlaceholder} 
            required 
            disabled={isLoading}
          ></textarea>
          <button 
            type="submit" 
            disabled={isLoading}
            className={isLoading ? styles.loading : ""}
          >
            {isLoading ? currentText.sending : currentText.sendButton}
          </button>
        </form>
      )}
    </section>
    
  );
}

export default Contact;