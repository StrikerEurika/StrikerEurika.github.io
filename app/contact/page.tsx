import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Facebook, Send } from "lucide-react";
import Link from "next/link";
import { Telegram } from "@/components/custom-icons";
import Contact from "@/components/contact";
import { faqs } from "@/data/data";

export const metadata = {
  title: "Contact - Ngen Tina | Data Science Portfolio",
  description:
    "Get in touch for data science opportunities, collaborations, or questions about my work.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ngentina12345@gmail.com",
      href: "mailto:ngentina12345@email.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+855 (0) 6197 6842",
      href: "tel:+85561976842",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Phnom Penh, Cambodia",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      username: "NgenTina",
      href: "https://github.com/NgenTina/",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      username: "Ngen Tina",
      href: "https://www.facebook.com/Ngen.Tina.14/",
    },
    {
      icon: <Telegram className="h-5 w-5" />,
      label: "Telegram",
      username: "Tina Ngen",
      href: "https://t.me/NgenTina",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Gmail",
      username: "Tina Ngen",
      href: "mailto:ngentina1234@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing data science opportunities,
            research collaborations, or just chatting about the latest
            developments in machine learning and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Contact />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <Link
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-muted-foreground text-sm">
                        {social.username}
                      </p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">
                      Available for opportunities
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    I'm currently seeking internship and full-time opportunities
                    in data science, machine learning, and analytics. But I am
                    also open to internships in other related fields such as
                    software engineering or research.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Preferred roles:</strong> Data Scientist, ML
                      Engineer, Research Assistant
                    </p>
                    <p>
                      <strong>Location:</strong> Phnom Penh, Cambodia (open to
                      remote)
                    </p>
                    <p>
                      <strong>Timeline:</strong> Available immediately for
                      internships
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
