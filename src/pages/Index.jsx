import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Package2, CheckCircle, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS App</h1>
        <p className="text-xl mb-8">The best solution for your business needs</p>
        <Button size="lg" className="mb-8">Get Started</Button>
        <img src="/images/hero-image.png" alt="Hero" className="mx-auto w-1/2" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<Package2 className="h-12 w-12 text-primary" />}
            title="Feature One"
            description="Description for feature one."
          />
          <Feature
            icon={<Package2 className="h-12 w-12 text-primary" />}
            title="Feature Two"
            description="Description for feature two."
          />
          <Feature
            icon={<Package2 className="h-12 w-12 text-primary" />}
            title="Feature Three"
            description="Description for feature three."
          />
          <Feature
            icon={<Package2 className="h-12 w-12 text-primary" />}
            title="Feature Four"
            description="Description for feature four."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            name="John Doe"
            feedback="This app is amazing! It has helped my business grow exponentially."
            avatar="/images/avatar1.png"
          />
          <Testimonial
            name="Jane Smith"
            feedback="I love using this app. It's user-friendly and very efficient."
            avatar="/images/avatar2.png"
          />
          <Testimonial
            name="Sam Wilson"
            feedback="A must-have tool for any business. Highly recommended!"
            avatar="/images/avatar3.png"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            title="Basic"
            price="$10/month"
            features={["Feature A", "Feature B", "Feature C"]}
          />
          <PricingTier
            title="Standard"
            price="$20/month"
            features={["Feature A", "Feature B", "Feature C", "Feature D"]}
          />
          <PricingTier
            title="Premium"
            price="$30/month"
            features={["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
        </div>
        <p className="text-muted-foreground">© 2023 SaaS App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <Card className="text-center p-4">
    <CardHeader className="flex justify-center">{icon}</CardHeader>
    <CardContent>
      <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const Testimonial = ({ name, feedback, avatar }) => (
  <Card className="text-center p-4">
    <CardHeader className="flex justify-center">
      <Avatar className="h-16 w-16">
        <img src={avatar} alt={name} />
      </Avatar>
    </CardHeader>
    <CardContent>
      <CardTitle className="text-xl font-semibold mb-2">{name}</CardTitle>
      <p>"{feedback}"</p>
    </CardContent>
  </Card>
);

const PricingTier = ({ title, price, features }) => (
  <Card className="text-center p-4">
    <CardHeader>
      <CardTitle className="text-2xl font-semibold mb-2">{title}</CardTitle>
      <p className="text-xl font-bold mb-4">{price}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center space-x-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button size="lg">Choose Plan</Button>
    </CardContent>
  </Card>
);

export default Index;