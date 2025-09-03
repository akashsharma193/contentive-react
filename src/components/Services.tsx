import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Share2, Mail, Palette, Monitor } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Professional, responsive websites that drive business growth with modern design and optimal performance.",
    icon: Globe,
    features: ["Responsive Design", "E-commerce Solutions", "HRMS, ERP and CRM Software", "SEO Optimization"]
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    icon: Smartphone,
    features: ["iOS & Android Apps", "Cross-platform Solutions", "React Native", "Flutter Development"]
  },
  {
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that boost brand visibility and drive meaningful engagement with your audience.",
    icon: Share2,
    features: ["Content Strategy", "Campaign Management", "Analytics & Reporting", "Brand Building"]
  },
  {
    title: "Bulk SMS/Email",
    description: "Powerful communication solutions for reaching your customers with targeted messaging and promotional campaigns.",
    icon: Mail,
    features: ["Mass Communication", "Automated Campaigns", "Delivery Analytics", "Template Design"]
  },
  {
    title: "Logo Designing",
    description: "Creative and memorable brand identities that capture your company's essence and make lasting impressions.",
    icon: Palette,
    features: ["Brand Identity", "Logo Creation", "Visual Guidelines", "Brand Collateral"]
  },
  {
    title: "UI/UX Designing",
    description: "User-centered design solutions that create intuitive interfaces and exceptional digital experiences.",
    icon: Monitor,
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  }
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and accelerate growth in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card group">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;