import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { H1, H2, Lead, P, Muted } from "../ui/typography";
import ThresholdMotionDiv from "../motion/threshold-motion-div";
import { Mail, MapPin } from "lucide-react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";

export default function Contact() {
  return (
    <section id="contact" className="py-40 min-h-screen">
      <ThresholdMotionDiv className="mb-12">
        <H1>Get in Touch</H1>
        <Lead>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </Lead>
      </ThresholdMotionDiv>

      <div className="grid gap-12 md:grid-cols-2">
        <ThresholdMotionDiv className="flex flex-col gap-6">
          <div>
            <H2>Let's Connect</H2>
            <P>
              Whether you have a project in mind or just want to chat, I'd love
              to hear from you.
            </P>
          </div>

          <div className="space-y-4">
            <div>
              <Link
                to="mailto:simanzler@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:border-primary transition-colors group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    simanzler@gmail.com
                  </p>
                </div>
              </Link>
            </div>

            <div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Cincinnati, OH
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <Link
                    to="https://github.com/smanzler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon="line-md:github"
                      style={{ width: "16px", height: "16px" }}
                    />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <Link
                    to="https://linkedin.com/in/simonmanzler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="line-md:linkedin" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ThresholdMotionDiv>

        <ThresholdMotionDiv className="flex flex-col gap-6">
          <div>
            <H2>Send a Message</H2>
            <Muted>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </Muted>
          </div>

          <form className="space-y-6">
            <div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Your email" />
              </div>
            </div>

            <div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </ThresholdMotionDiv>
      </div>
    </section>
  );
}
