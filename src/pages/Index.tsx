import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowRight, GraduationCap, Stethoscope, TreePine, Droplets, Users, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { causes, stats } from "@/data/mockData";

const Index = () => {
  const featuredCauses = causes.filter((cause) => cause.featured).slice(0, 3);

  const categoryIcons: Record<string, React.ReactNode> = {
    education: <GraduationCap className="h-5 w-5" />,
    health: <Stethoscope className="h-5 w-5" />,
    environment: <TreePine className="h-5 w-5" />,
    food: <Droplets className="h-5 w-5" />,
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
    return `$${num}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-charity-sage/10 blur-3xl" />
          </div>
          
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Heart className="h-4 w-4" fill="currentColor" />
                  Making a Difference Together
                </div>
                
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Together We Can{" "}
                  <span className="text-primary">Change Lives</span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Join thousands of compassionate donors making a real difference. 
                  Your generosity can transform communities and create lasting change.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/donate">
                    <Button size="lg" className="gap-2 shadow-medium hover:shadow-glow transition-all">
                      <Heart className="h-5 w-5" />
                      Donate Now
                    </Button>
                  </Link>
                  <Link to="/causes">
                    <Button variant="outline" size="lg" className="gap-2">
                      Explore Causes
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-charity-sage/20 animate-pulse-soft" />
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=600&fit=crop"
                    alt="Children learning together"
                    className="relative rounded-3xl shadow-medium object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-medium p-4 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-charity-sage/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-charity-sage" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">5,000+</p>
                        <p className="text-sm text-muted-foreground">Active Volunteers</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-medium p-4 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">45+</p>
                        <p className="text-sm text-muted-foreground">Countries Reached</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Total Donations", value: formatNumber(stats.totalDonations), icon: Heart },
                { label: "Causes Supported", value: stats.causesSupported.toString(), icon: TreePine },
                { label: "Active Volunteers", value: stats.volunteersActive.toLocaleString(), icon: Users },
                { label: "Countries Reached", value: stats.countriesReached.toString(), icon: Globe },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <stat.icon className="h-8 w-8 mx-auto opacity-80" />
                  <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=500&fit=crop"
                  alt="Volunteers helping community"
                  className="rounded-2xl shadow-medium w-full"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                  About CharityHub
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Empowering Communities Through Compassion
                </h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  CharityHub is a global nonprofit organization dedicated to creating positive change 
                  in communities around the world. Since our founding, we've been committed to 
                  transparency, efficiency, and making every donation count.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "100% of donations go directly to causes",
                    "Transparent reporting and impact tracking",
                    "Vetted and verified partner organizations",
                    "Global reach with local impact",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/about">
                  <Button variant="outline" className="gap-2 mt-4">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Causes Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Featured Causes
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Support Our Active Campaigns
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully selected causes and make a difference today. 
                Every contribution, no matter how small, creates lasting impact.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCauses.map((cause, index) => (
                <Card 
                  key={cause.id} 
                  className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-medium text-foreground capitalize">
                        {categoryIcons[cause.category]}
                        {cause.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display text-xl font-semibold text-foreground line-clamp-2">
                      {cause.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {cause.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Raised</span>
                        <span className="font-semibold text-foreground">
                          ${cause.raised.toLocaleString()} / ${cause.goal.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(cause.raised / cause.goal) * 100} className="h-2" />
                      <p className="text-xs text-muted-foreground text-right">
                        {Math.round((cause.raised / cause.goal) * 100)}% funded
                      </p>
                    </div>
                    
                    <Link to={`/donate?cause=${cause.id}`}>
                      <Button className="w-full gap-2">
                        <Heart className="h-4 w-4" />
                        Donate Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/causes">
                <Button variant="outline" size="lg" className="gap-2">
                  View All Causes
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join our community of changemakers and help us create a better world. 
              Your support can transform lives and build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" variant="secondary" className="gap-2 shadow-medium">
                  <Heart className="h-5 w-5" />
                  Start Donating
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
