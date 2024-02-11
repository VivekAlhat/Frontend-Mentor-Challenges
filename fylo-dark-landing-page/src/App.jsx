import Header from "./components/Header";
import Curve from "./components/Curve";
import CTA from "./components/CTA";
import Feature from "./components/Feature";
import FooterLink from "./components/FooterLink";

import { features, testimonials } from "./utils/data";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="text-white">
      <Header />
      <section className="bg-dark-blue-intro-signup flex flex-col items-center justify-center gap-8 relative">
        <Hero />
        <Curve />
      </section>
      <section className="bg-dark-blue-main pt-6 px-6 md:pt-12 md:px-12 lg:pt-24 lg:px-24 space-y-20 lg:space-y-40 relative pb-64">
        <Features />
        <HowItWorks />
        <Testimonial />
        <EmailSignUp />
      </section>
      <Footer />
    </main>
  );
}

const Hero = () => (
  <div className="z-10 max-w-xl px-6 md:px-8 lg:px-12 pt-12 pb-28 md:mb-12">
    <img
      src="/illustration-intro.png"
      alt="Illustration Intro"
      className="h-fit w-[600px] mb-12"
    />
    <div className="font-opensans text-center space-y-8">
      <h1 className="text-2xl font-bold leading-[2rem] lg:leading-[3rem] md:text-3xl">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-lg text-white/80 leading-[1.5rem]">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <div className="w-[300px] mx-auto">
        <CTA text="Get Started" />
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
    {features.map((f) => (
      <Feature
        key={f.id}
        icon={f.icon}
        alt={f.alt}
        feature={f.feature}
        description={f.description}
      />
    ))}
  </div>
);

const HowItWorks = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
    <motion.img
      src="/illustration-stay-productive.png"
      alt="stay productive"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        ease: "circInOut",
      }}
      viewport={{ once: true }}
    />
    <motion.div
      className="space-y-8 max-w-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <h1 className="text-xl lg:text-5xl">Stay productive, wherever you are</h1>
      <div className="space-y-6 text-white/80">
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-cyang border-b border-b-cyang"
        >
          See how Fylo works
          <span>
            <img src="/icon-arrow.svg" alt="arrow icon" />
          </span>
        </a>
      </div>
    </motion.div>
  </div>
);

const Testimonial = () => (
  <div className="relative">
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {testimonials.map((t) => (
        <div key={t.id} className="z-10 bg-dark-blue-testimonial p-8 space-y-4">
          <p className="text-white/80">{t.testimonial}</p>
          <div className="flex items-center gap-4">
            <img src={t.profile} alt={t.name} className="w-8 rounded-full" />
            <div className="text-sm space-y-1">
              <p>{t.name}</p>
              <p className="text-white/80 text-xs">{t.from}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <img
      src="/bg-quotes.png"
      alt="quotes"
      className="absolute -top-8 -left-3 w-12"
    />
  </div>
);

const EmailSignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const regex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/g;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    error && setError(false);
  };

  const onEmailSubmit = () => {
    if (!regex.test(email)) {
      setError(true);
    } else {
      setEmail("");
    }
  };

  return (
    <div className="bg-dark-blue-intro-signup p-8 md:p-12 max-w-5xl m-6 text-center rounded-md shadow-lg space-y-8 absolute -bottom-64 md:-bottom-40 left-0 lg:left-1/2 lg:-translate-x-1/2">
      <h1 className="text-3xl">Get early access today</h1>
      <p className="max-w-3xl mx-auto text-white/80">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full space-y-2">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@example.com"
            className="w-full p-3 rounded-full outline-none text-black"
            value={email}
            onChange={handleEmailChange}
          />
          {error && (
            <p className="text-sm text-left text-light-red">
              Please enter a valid email address
            </p>
          )}
        </div>
        <div className="w-full md:w-[350px]" onClick={onEmailSubmit}>
          <CTA text={"Get Started For Free"} />
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-dark-blue-footer grid lg:place-content-center px-8 lg:px-24 pt-80 md:pt-64 pb-32 space-y-12">
    <img src="/logo.svg" alt="fylo logo" />
    <section className="flex flex-col lg:flex-row items-start gap-20 lg:gap-36">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
        <div className="space-y-8 max-w-sm">
          <div className="flex items-center gap-8">
            <img src="/icon-location.svg" alt="location" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-8">
            <img src="/icon-phone.svg" alt="phone" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex items-center gap-8">
            <img src="/icon-email.svg" alt="email" />
            <p>example@fylo.com</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ul className="space-y-4">
          <FooterLink linkText="About Us" />
          <FooterLink linkText="Jobs" />
          <FooterLink linkText="Press" />
          <FooterLink linkText="Blog" />
        </ul>
        <ul className="space-y-4">
          <FooterLink linkText="Contact Us" />
          <FooterLink linkText="Terms" />
          <FooterLink linkText="Privacy" />
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="border border-white rounded-full p-2 hover:text-cyang cursor-pointer">
          <Facebook />
        </div>
        <div className="border border-white rounded-full p-2 hover:text-cyang cursor-pointer">
          <Twitter />
        </div>
        <div className="border border-white rounded-full p-2 hover:text-cyang cursor-pointer">
          <Instagram />
        </div>
      </div>
    </section>
  </footer>
);

export default App;
