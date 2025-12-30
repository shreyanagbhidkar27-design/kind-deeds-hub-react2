// Mock data for the charity website

export interface Cause {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "education" | "health" | "environment" | "food" | "disaster";
  goal: number;
  raised: number;
  image: string;
  featured: boolean;
}

export interface Donation {
  id: string;
  donorName: string;
  email: string;
  amount: number;
  causeId: string;
  causeName: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

export const causes: Cause[] = [
  {
    id: "1",
    title: "Education for All Children",
    description: "Provide quality education to underprivileged children in rural areas.",
    longDescription: "Our Education for All initiative focuses on building schools, providing learning materials, and training teachers in underserved communities. Every child deserves the opportunity to learn and grow.",
    category: "education",
    goal: 50000,
    raised: 32500,
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Healthcare Access Initiative",
    description: "Bring essential healthcare services to remote communities worldwide.",
    longDescription: "We work with local healthcare providers to establish mobile clinics, provide medical supplies, and train community health workers to ensure everyone has access to basic healthcare.",
    category: "health",
    goal: 75000,
    raised: 48000,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "Plant a Million Trees",
    description: "Combat climate change by restoring forests and natural habitats.",
    longDescription: "Our reforestation program works with local communities to plant native trees, restore ecosystems, and create sustainable livelihoods. Join us in fighting climate change one tree at a time.",
    category: "environment",
    goal: 100000,
    raised: 67000,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "4",
    title: "Clean Water for Villages",
    description: "Build wells and water purification systems in water-scarce regions.",
    longDescription: "Access to clean water is a fundamental human right. We build sustainable water infrastructure including wells, rainwater harvesting systems, and purification plants.",
    category: "food",
    goal: 60000,
    raised: 41000,
    image: "https://images.unsplash.com/photo-1541544741670-e3f13bd388b4?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "5",
    title: "Disaster Relief Fund",
    description: "Provide immediate aid to communities affected by natural disasters.",
    longDescription: "When disaster strikes, we respond quickly with emergency supplies, temporary shelter, medical aid, and long-term recovery support to help communities rebuild.",
    category: "disaster",
    goal: 150000,
    raised: 89000,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "6",
    title: "School Lunch Program",
    description: "Ensure no child goes hungry while learning at school.",
    longDescription: "Our school lunch program provides nutritious meals to students, improving attendance, concentration, and academic performance while reducing hunger in communities.",
    category: "food",
    goal: 40000,
    raised: 28000,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    featured: false,
  },
];

export const donations: Donation[] = [
  {
    id: "d1",
    donorName: "John Smith",
    email: "john.smith@email.com",
    amount: 100,
    causeId: "1",
    causeName: "Education for All Children",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "d2",
    donorName: "Sarah Johnson",
    email: "sarah.j@email.com",
    amount: 250,
    causeId: "2",
    causeName: "Healthcare Access Initiative",
    date: "2024-01-14",
    status: "completed",
  },
  {
    id: "d3",
    donorName: "Michael Brown",
    email: "m.brown@email.com",
    amount: 50,
    causeId: "3",
    causeName: "Plant a Million Trees",
    date: "2024-01-13",
    status: "completed",
  },
  {
    id: "d4",
    donorName: "Emily Davis",
    email: "emily.d@email.com",
    amount: 500,
    causeId: "1",
    causeName: "Education for All Children",
    date: "2024-01-12",
    status: "pending",
  },
  {
    id: "d5",
    donorName: "Robert Wilson",
    email: "r.wilson@email.com",
    amount: 75,
    causeId: "4",
    causeName: "Clean Water for Villages",
    date: "2024-01-11",
    status: "completed",
  },
];

export const stats = {
  totalDonations: 2500000,
  causesSupported: 150,
  volunteersActive: 5000,
  countriesReached: 45,
};
