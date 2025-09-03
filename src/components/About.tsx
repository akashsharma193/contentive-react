import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Contentive Tech Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contentive Tech Solutions is a one-stop digital solutions company offering services in website development, mobile app development, social media marketing, digital marketing, bulk SMS & email campaigns, logo & graphic designing, and online shopping platform ads & listing. We help businesses grow with innovative technology and result-driven strategies. Our team is committed to delivering high-quality solutions tailored to your needs—whether you are a startup or an established enterprise. At Contentive Tech Solutions, we combine creativity and technology to give your brand a competitive edge in the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in creating lasting partnerships with our clients by delivering exceptional value through our expertise and commitment to excellence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading IT partner for businesses seeking digital transformation, known for our innovative solutions, technical expertise, and unwavering commitment to client success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="tech-card text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">10+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>

            <Card className="tech-card text-center">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">30+</h4>
                <p className="text-muted-foreground">Projects Delivered</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Core Values</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Digital Innovation", "Technical Excellence", "Data Security", "Agile Delivery", "Client Partnership", "Scalable Solutions", "Quality Product Delivery"].map((value, index) => (
              <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;