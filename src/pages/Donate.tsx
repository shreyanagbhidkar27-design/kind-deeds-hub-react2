import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CheckCircle, CreditCard, User, Mail, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { causes } from "@/data/mockData";
import { translations, Language } from "../translations";
const Donate = () => {
  const [searchParams] = useSearchParams();
  const initialCause = searchParams.get("cause") || "";
  const { toast } = useToast();


const [lang, setLang] = useState<Language>("en");
const t = translations[lang];




  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    customAmount: "",
    causeId: initialCause,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const donationAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.causeId) {
  toast({
    title: t.missingInfo,
    description: t.missingDesc,
    variant: "destructive",
  });
  return;
}


    const amount = formData.amount === "custom" ? formData.customAmount : formData.amount;
if (!amount || parseFloat(amount) <= 0) {
  toast({
    title: t.invalidAmount,
    description: t.invalidAmountDesc,
    variant: "destructive",
  });
  return;
}


    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Thank you for your donation!",
     description: `Your donation of ₹${amount} has been received.`,

    });
  };

  const selectedCause = causes.find((c) => c.id === formData.causeId);

  if (isSubmitted) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20 bg-gradient-to-b from-muted to-background">
        <div className="container max-w-lg">
          <Card className="shadow-medium text-center">
            <CardContent className="pt-12 pb-8 space-y-6">
              <div className="mx-auto w-20 h-20 rounded-full bg-charity-sage/20 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-charity-sage" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {t.thankYou}
                </h2>
                <p className="text-muted-foreground">
                  {t.confirmationEmail} {formData.email} <br />
                  {selectedCause && (
                    <>
                      {selectedCause.title} donation received.
                    </>
                  )}
                </p>
              </div>
              <Button onClick={() => setIsSubmitted(false)} className="gap-2">
                <Heart className="h-4 w-4" />
                {t.makeAnother}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 bg-gradient-to-b from-muted to-background">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" fill="currentColor" />
              Make a Donation
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Your Gift Makes a <span className="text-primary">Difference</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              100% of your donation goes directly to the cause you choose. 
              Thank you for your generosity and compassion.
            </p>
          </div>

{/* ✅ Add language switcher here, above the Card */}
    <div className="flex gap-3 mb-6 justify-end">
      <Button size="sm" onClick={() => setLang("en")}>English</Button>
      <Button size="sm" onClick={() => setLang("hi")}>हिंदी</Button>
      <Button size="sm" onClick={() => setLang("mr")}>मराठी</Button>
    </div>


          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="font-display text-xl">Donation Details</CardTitle>
              <CardDescription>
         {t.fillForm}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    {t.personalInfo}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.fullName} *</Label>
                      <Input
                        id="name"
                        placeholder={t.fullName}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.email}*</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder={t.emailplaceholder}
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cause Selection */}
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
               {t.email}*
                  </h3>
                  <Select
                    value={formData.causeId}
                    onValueChange={(value) => setFormData({ ...formData, causeId: value })}
                  >
                    <SelectTrigger>
 <SelectValue placeholder={t.chooseCause} />
                    </SelectTrigger>
                    <SelectContent>
                      {causes.map((cause) => (
                        <SelectItem key={cause.id} value={cause.id}>
                          <div className="flex items-center gap-2">
                            <span>{cause.title}</span>
                            <span className="text-xs text-muted-foreground capitalize">
                              ({cause.category})
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {selectedCause && (
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground">{selectedCause.description}</p>
                    </div>
                  )}
                </div>

                {/* Donation Amount */}
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
              {t.donationAmount}  *
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amount.toString(), customAmount: "" })}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          formData.amount === amount.toString()
                            ? "bg-primary text-primary-foreground shadow-soft"
                            : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                        }`}
                      >
                        ₹{amount}

                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: "custom" })}
                      className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                        formData.amount === "custom"
                          ? "bg-primary text-primary-foreground shadow-soft"
                          : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                      }`}
                    >
                      {t.custom}
                    </button>
                  </div>
                  
                  {formData.amount === "custom" && (
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        className="pl-10"
                        min="1"
                        value={formData.customAmount}
                        onChange={(e) => setFormData({ ...formData, customAmount: e.target.value })}
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
  type="submit" 
  size="lg" 
  className="w-full gap-2 shadow-soft hover:shadow-medium transition-all"
  disabled={isLoading}
>
  {isLoading ? (
    <>Processing...</>
  ) : (

    <>
      <CreditCard className="h-5 w-5" />
      {t.completeDonation}
    </>
  )}
</Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Your payment information is secure and encrypted. 
                    CharityHub is a registered 501(c)(3) nonprofit organization.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
