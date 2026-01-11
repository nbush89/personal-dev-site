"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { PageTransition } from "@/components/motion/page-transition";
import { siteMetadata } from "@/data/portfolio";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with prefilled data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${siteMetadata.social.email}?subject=${subject}&body=${body}`;

    // Open mailto (fallback since we don't have backend)
    window.location.href = mailtoLink;

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        <FadeIn>
          <div className="mb-12 max-w-3xl">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-text-muted">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <FadeIn delay={0.1}>
            <Card>
              <h2 className="mb-6 text-2xl font-semibold text-text">Contact Info</h2>
              <div className="space-y-4">
                {siteMetadata.social.email && (
                  <div>
                    <p className="mb-1 text-sm font-medium text-text">Email</p>
                    <a
                      href={`mailto:${siteMetadata.social.email}`}
                      className="text-text-muted hover:text-primary-hover transition-colors"
                    >
                      {siteMetadata.social.email}
                    </a>
                  </div>
                )}
                {siteMetadata.social.github && (
                  <div>
                    <p className="mb-1 text-sm font-medium text-text">GitHub</p>
                    <a
                      href={siteMetadata.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary-hover transition-colors"
                    >
                      {siteMetadata.social.github.replace("https://", "")}
                    </a>
                  </div>
                )}
                {siteMetadata.social.linkedin && (
                  <div>
                    <p className="mb-1 text-sm font-medium text-text">LinkedIn</p>
                    <a
                      href={siteMetadata.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary-hover transition-colors"
                    >
                      {siteMetadata.social.linkedin.replace("https://", "")}
                    </a>
                  </div>
                )}
              </div>
            </Card>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <Card>
              <h2 className="mb-6 text-2xl font-semibold text-text">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:border-transparent"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:border-transparent"
                    placeholder="your.email@example.com"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:border-transparent resize-none"
                    placeholder="Your message..."
                    aria-required="true"
                  />
                </div>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-text-muted">
                  This form will open your email client with a prefilled message.
                </p>
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </PageTransition>
  );
}

