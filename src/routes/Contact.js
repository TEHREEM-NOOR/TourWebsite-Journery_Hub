import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Hero
        title="Contact"
        showButton={false}
        image="https://plus.unsplash.com/premium_photo-1661400100934-1ba03c96cc14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8MHwwfHx8MA%3D%3D"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;