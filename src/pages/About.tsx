import { Heart, Users, Globe, Award, Target, HandHeart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Programs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      name: "David Kim",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every challenge with empathy and understanding, putting people first.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "100% of donations go directly to causes. We believe in complete openness.",
    },
    {
      icon: HandHeart,
      title: "Impact",
      description: "Every action we take is measured by the positive change it creates.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of people coming together to create change.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-muted to-background overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-charity-sage/10 blur-3xl" />
          </div>
          
          <div className="container relative">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" fill="currentColor" />
                About CharityHub
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Our Mission is to <span className="text-primary">Transform Lives</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Since 2010, CharityHub has been connecting generous donors with meaningful causes, 
                ensuring that every contribution makes a real difference in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&h=500&fit=crop"
                  alt="Team working together"
                  className="rounded-2xl shadow-medium w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl shadow-medium p-6 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">14+ Years</p>
                      <p className="text-sm text-muted-foreground">of Impact</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    CharityHub was founded with a simple yet powerful vision: to create a world 
                    where giving is easy, transparent, and impactful. What started as a small 
                    initiative in 2010 has grown into a global movement of compassion.
                  </p>
                  <p>
                    We believe that everyone has the power to make a difference. Our platform 
                    connects donors directly with vetted, high-impact causes, ensuring that 
                    100% of every donation reaches those who need it most.
                  </p>
                  <p>
                    Today, we partner with over 150 organizations across 45 countries, 
                    touching millions of lives through education, healthcare, environmental 
                    conservation, and disaster relief initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at CharityHub
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$2.5M+", label: "Raised to Date" },
                { value: "150+", label: "Partner Organizations" },
                { value: "45", label: "Countries Reached" },
                { value: "5,000+", label: "Active Volunteers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm opacity-80 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals committed to making a difference
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-110 transition-transform duration-300" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full object-cover mx-auto shadow-soft"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Globe className="h-4 w-4" />
                  Global Impact
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Making a Difference Worldwide
                </h2>
                <p className="text-muted-foreground">
                  Our reach extends across continents, bringing hope and resources to 
                  communities in need. From building schools in rural Africa to providing 
                  disaster relief in Asia, we're committed to creating lasting change.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">1M+</p>
                    <p className="text-sm text-muted-foreground">Lives Impacted</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1526958097901-5e6d742d3371?w=600&h=500&fit=crop"
                  alt="Global outreach"
                  className="rounded-2xl shadow-medium w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
