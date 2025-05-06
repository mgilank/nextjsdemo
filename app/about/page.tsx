import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Alex has over 15 years of experience in digital design and development.",
    },
    {
      name: "Sophia Chen",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sophia leads our design team with her innovative approach and eye for detail.",
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Marcus brings technical expertise and a passion for clean, efficient code.",
    },
    {
      name: "Olivia Rodriguez",
      role: "Marketing Strategist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Olivia helps our clients reach their target audience and achieve their goals.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Horizon
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're a team of passionate designers, developers, and thinkers
              dedicated to crafting exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Horizon team working together"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Horizon was founded in 2023 with a simple mission: to help
                businesses succeed in the digital world through exceptional
                design and development.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a small team with big dreams has grown into a
                full-service digital agency trusted by clients across various
                industries. We combine technical expertise with creative thinking
                to deliver solutions that not only look beautiful but also
                perform exceptionally well.
              </p>
              <p className="text-lg text-muted-foreground">
                Our approach is collaborative and client-focused. We believe in
                building lasting relationships based on trust, transparency, and
                outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering the highest quality in everything
                  we do. We constantly challenge ourselves to improve and exceed
                  expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and ideas, always looking for
                  creative solutions to complex problems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe great work happens when clients and creators work
                  together. Your input is vital to our process.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty and transparency, building trust
                  through ethical practices and reliable service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              The talented people behind Horizon's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Let's turn your vision into reality. Reach out to our team today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}