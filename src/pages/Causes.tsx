import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, GraduationCap, Stethoscope, TreePine, Droplets, AlertTriangle, Filter } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { causes } from "@/data/mockData";

const Causes = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Causes", icon: Heart },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "health", label: "Healthcare", icon: Stethoscope },
    { id: "environment", label: "Environment", icon: TreePine },
    { id: "food", label: "Food & Water", icon: Droplets },
    { id: "disaster", label: "Disaster Relief", icon: AlertTriangle },
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    education: <GraduationCap className="h-5 w-5" />,
    health: <Stethoscope className="h-5 w-5" />,
    environment: <TreePine className="h-5 w-5" />,
    food: <Droplets className="h-5 w-5" />,
    disaster: <AlertTriangle className="h-5 w-5" />,
  };

  const filteredCauses = activeFilter === "all" 
    ? causes 
    : causes.filter((cause) => cause.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-b from-muted to-background">
          <div className="container">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" fill="currentColor" />
                Our Causes
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Support a Cause That <span className="text-primary">Matters</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our active campaigns and find a cause that resonates with your heart. 
                Every donation creates lasting change.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
          <div className="container">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 md:justify-center">
              <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeFilter === category.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Causes Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            {filteredCauses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No causes found in this category.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCauses.map((cause, index) => (
                  <Card 
                    key={cause.id} 
                    className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={cause.image}
                        alt={cause.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-medium text-foreground capitalize">
                          {categoryIcons[cause.category]}
                          {cause.category}
                        </span>
                      </div>
                      {cause.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-display text-xl font-semibold text-foreground line-clamp-2">
                        {cause.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {cause.longDescription}
                      </p>
                      
                      <div className="space-y-3 pt-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold text-primary">
                            {Math.round((cause.raised / cause.goal) * 100)}%
                          </span>
                        </div>
                        <Progress value={(cause.raised / cause.goal) * 100} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground font-medium">
                            ${cause.raised.toLocaleString()} raised
                          </span>
                          <span className="text-muted-foreground">
                            of ${cause.goal.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <Link to={`/donate?cause=${cause.id}`}>
                        <Button className="w-full gap-2 mt-2">
                          <Heart className="h-4 w-4" />
                          Donate to This Cause
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Contact us to learn about other ways you can contribute or suggest a cause 
              that you're passionate about.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Causes;
