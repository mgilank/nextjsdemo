import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Zap, Shield, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
              Building{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                exceptional
              </span>{" "}
              digital experiences
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
              We craft beautiful, intuitive, and modern websites that help
              businesses stand out in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose Horizon
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge technology with stunning design to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <Zap className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our websites are optimized for speed, ensuring your visitors
                  have a seamless browsing experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <Shield className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement the latest security measures to keep your website
                  and data protected at all times.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <Globe className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Fully Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our designs adapt perfectly to all devices, from smartphones to
                  desktop computers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Trusted by Innovators
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary-foreground border-2 border-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Sarah Thompson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Thompson</h4>
                    <p className="text-sm text-muted-foreground">
                      CEO, Innovate Inc.
                    </p>
                  </div>
                </div>
                <p className="italic">
                  "Working with Horizon completely transformed our online
                  presence. Their attention to detail and creative approach
                  resulted in a website that perfectly captures our brand."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground border-2 border-primary/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="David Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Chen</h4>
                    <p className="text-sm text-muted-foreground">
                      Founder, TechStart
                    </p>
                  </div>
                </div>
                <p className="italic">
                  "The team at Horizon exceeded our expectations at every turn.
                  Our new website has significantly increased user engagement and
                  conversion rates."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Let's create something amazing together. Get in touch with our team
              today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}