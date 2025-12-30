import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Heart, Plus, Pencil, Trash2, LogOut, DollarSign, Users, TrendingUp } from "lucide-react";
import { causes, donations } from "@/data/mockData";

const Admin = () => {
  const [activeTab, setActiveTab] = useState<"causes" | "donations">("causes");

  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display text-lg font-bold">Admin Dashboard</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </Link>
        </div>
      </header>

      <main className="container py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Donations", value: `$${totalDonations.toLocaleString()}`, icon: DollarSign, color: "text-primary" },
            { label: "Active Causes", value: causes.length.toString(), icon: Heart, color: "text-charity-sage" },
            { label: "Total Donors", value: donations.length.toString(), icon: Users, color: "text-charity-gold" },
          ].map((stat) => (
            <Card key={stat.label} className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {["causes", "donations"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab as "causes" | "donations")} className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${activeTab === tab ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-display">{activeTab === "causes" ? "Manage Causes" : "Donation Records"}</CardTitle>
            {activeTab === "causes" && (
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" /> Add Cause
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {activeTab === "causes" ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Goal</TableHead>
                    <TableHead>Raised</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {causes.map((cause) => (
                    <TableRow key={cause.id}>
                      <TableCell className="font-medium">{cause.title}</TableCell>
                      <TableCell className="capitalize">{cause.category}</TableCell>
                      <TableCell>${cause.goal.toLocaleString()}</TableCell>
                      <TableCell>${cause.raised.toLocaleString()}</TableCell>
                      <TableCell>{Math.round((cause.raised / cause.goal) * 100)}%</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Cause</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.donorName}</TableCell>
                      <TableCell>{donation.email}</TableCell>
                      <TableCell>{donation.causeName}</TableCell>
                      <TableCell>${donation.amount}</TableCell>
                      <TableCell>{donation.date}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${donation.status === "completed" ? "bg-charity-sage-light text-charity-sage" : "bg-charity-gold/20 text-charity-gold"}`}>
                          {donation.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
