import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/contentive_tech_solutions?utm_source=qr&igsh=MWlhMWZ0M203eXc4Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/contentive-tech-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61580012274379"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Like us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <p className="text-muted-foreground text-center">
              © 2025 Contentive Tech Solutions. All rights reserved. | Transforming businesses through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;