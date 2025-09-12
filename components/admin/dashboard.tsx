
"use client"
export default AdminDashboard;
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
Dialog,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import {
Heart,
Users,
DollarSign,
TrendingUp,
Search,
Filter,
Download,
Plus,
Edit,
Eye,
MoreHorizontal,
Bell,
Settings,
FormInput,
Type,
Mail,
Phone,
MapPin,
CheckSquare,
Radiation as RadioButton,
List,
ImageIcon,
RefreshCw,
Wrench,
Package,
Cog,
Database,
CheckIcon as Checkbox,
} from "lucide-react"


type Campaign = {
id: number;
name: string;
description: string;
goal: number;
raised: number;
donors: number;
status: string;
visibility: string;
endDate: string;
category: string;
targetAudience: string;
createdDate: string;
};

import { CampaignLandingPage } from "../campaign-landing-page"

const campaigns = [
{
  id: 1,
  name: "Clean Water Initiative",
  description: "Providing clean water access to rural communities worldwide",
  goal: 50000,
  raised: 35750,
  donors: 142,
  status: "active",
  visibility: "public",
  endDate: "2024-03-15",
  category: "Environment",
  targetAudience: "Global donors interested in water access",
  createdDate: "2024-01-01",
},
{
  id: 2,
  name: "Education for All",
  description: "Supporting educational programs in underserved communities",
  goal: 25000,
  raised: 18200,
  donors: 89,
  status: "active",
  visibility: "public",
  endDate: "2024-02-28",
  category: "Education",
  targetAudience: "Education advocates and parents",
  createdDate: "2024-01-15",
},
{
  id: 3,
  name: "Emergency Food Relief",
  description: "Providing emergency food assistance to families in crisis",
  goal: 15000,
  raised: 15000,
  donors: 203,
  status: "completed",
  visibility: "public",
  endDate: "2024-01-31",
  category: "Emergency Relief",
  targetAudience: "Community members and local businesses",
  createdDate: "2023-12-01",
},
{
  id: 4,
  name: "Medical Equipment Fund",
  description: "Purchasing essential medical equipment for local hospitals",
  goal: 40000,
  raised: 12500,
  donors: 67,
  status: "draft",
  visibility: "private",
  endDate: "2024-04-20",
  category: "Healthcare",
  targetAudience: "Healthcare professionals and medical supporters",
  createdDate: "2024-01-20",
},
]

const p2pCampaigns = [
{
  id: 1,
  name: "Run for Clean Water",
  parentCampaign: "Clean Water Initiative",
  description: "Join our marathon team to raise funds for clean water access",
  goal: 10000,
  raised: 7500,
  fundraisers: 12,
  teams: 3,
  status: "active",
  type: "team",
  endDate: "2024-03-15",
  createdDate: "2024-01-10",
  topFundraiser: "Sarah Johnson",
  topFundraiserAmount: 1250,
},
{
  id: 2,
  name: "Birthday Fundraiser for Education",
  parentCampaign: "Education for All",
  description: "Celebrating my birthday by raising funds for education",
  goal: 2500,
  raised: 1800,
  fundraisers: 1,
  teams: 0,
  status: "active",
  type: "individual",
  endDate: "2024-02-20",
  createdDate: "2024-01-20",
  topFundraiser: "Michael Chen",
  topFundraiserAmount: 1800,
},
{
  id: 3,
  name: "Corporate Challenge - Healthcare",
  parentCampaign: "Medical Equipment Fund",
  description: "Company-wide fundraising challenge for medical equipment",
  goal: 15000,
  raised: 8200,
  fundraisers: 25,
  teams: 5,
  status: "active",
  type: "corporate",
  endDate: "2024-04-15",
  createdDate: "2024-01-25",
  topFundraiser: "TechCorp Team Alpha",
  topFundraiserAmount: 2100,
},
{
  id: 4,
  name: "Memorial Fundraiser",
  parentCampaign: "Emergency Food Relief",
  description: "In memory of John Doe - supporting families in need",
  goal: 5000,
  raised: 5000,
  fundraisers: 8,
  teams: 1,
  status: "completed",
  type: "memorial",
  endDate: "2024-01-31",
  createdDate: "2023-12-15",
  topFundraiser: "Memorial Team",
  topFundraiserAmount: 2500,
},
]

const fundraisers = [
{
  id: 1,
  name: "Sarah Johnson",
  email: "sarah@email.com",
  p2pCampaign: "Run for Clean Water",
  goal: 2000,
  raised: 1250,
  donors: 15,
  status: "active",
  joinDate: "2024-01-12",
  lastActivity: "2024-01-20",
  team: "Water Warriors",
},
{
  id: 2,
  name: "Michael Chen",
  email: "michael@email.com",
  p2pCampaign: "Birthday Fundraiser for Education",
  goal: 2500,
  raised: 1800,
  donors: 12,
  status: "active",
  joinDate: "2024-01-20",
  lastActivity: "2024-01-22",
  team: null,
},
{
  id: 3,
  name: "Emily Davis",
  email: "emily@email.com",
  p2pCampaign: "Run for Clean Water",
  goal: 1500,
  raised: 980,
  donors: 8,
  status: "active",
  joinDate: "2024-01-15",
  lastActivity: "2024-01-21",
  team: "Water Warriors",
},
{
  id: 4,
  name: "David Wilson",
  email: "david@email.com",
  p2pCampaign: "Corporate Challenge - Healthcare",
  goal: 3000,
  raised: 2100,
  donors: 18,
  status: "active",
  joinDate: "2024-01-25",
  lastActivity: "2024-01-23",
  team: "TechCorp Team Alpha",
},
]

const donationData = [
{ month: "Jan", amount: 12500, donors: 89, campaigns: 8 },
{ month: "Feb", amount: 15800, donors: 112, campaigns: 9 },
{ month: "Mar", amount: 18200, donors: 134, campaigns: 10 },
{ month: "Apr", amount: 22100, donors: 156, campaigns: 11 },
{ month: "May", amount: 19500, donors: 143, campaigns: 12 },
{ month: "Jun", amount: 25300, donors: 178, campaigns: 12 },
]

const campaignPerformanceData = [
{ name: "Clean Water Initiative", raised: 35750, goal: 50000, donors: 142, conversionRate: 12.5, avgDonation: 252 },
{ name: "Education for All", raised: 18200, goal: 25000, donors: 89, conversionRate: 8.9, avgDonation: 204 },
{ name: "Emergency Food Relief", raised: 15000, goal: 15000, donors: 203, conversionRate: 15.2, avgDonation: 74 },
{ name: "Medical Equipment Fund", raised: 12500, goal: 40000, donors: 67, conversionRate: 6.7, avgDonation: 187 },
]

const donorEngagementData = [
{ period: "Week 1", newDonors: 23, returningDonors: 45, totalEngagement: 68 },
{ period: "Week 2", newDonors: 31, returningDonors: 52, totalEngagement: 83 },
{ period: "Week 3", newDonors: 28, returningDonors: 48, totalEngagement: 76 },
{ period: "Week 4", newDonors: 35, returningDonors: 61, totalEngagement: 96 },
]

const goalProgressData = campaigns.map((campaign: Campaign) => ({
name: campaign.name,
progress: (campaign.raised / campaign.goal) * 100,
daysRemaining: Math.ceil((new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
velocity:
  campaign.raised /
  Math.max(1, Math.ceil((new Date().getTime() - new Date(campaign.createdDate).getTime()) / (1000 * 60 * 60 * 24))),
projected:
  campaign.raised +
  (campaign.raised /
    Math.max(
      1,
      Math.ceil((new Date().getTime() - new Date(campaign.createdDate).getTime()) / (1000 * 60 * 60 * 24)),
    )) *
    Math.ceil((new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
}))

const campaignData = [
{ category: "Education Fund", value: 35, fill: "hsl(var(--chart-1))" },
{ category: "Healthcare", value: 28, fill: "hsl(var(--chart-2))" },
{ category: "Environment", value: 22, fill: "hsl(var(--chart-3))" },
{ category: "Emergency Relief", value: 15, fill: "hsl(var(--chart-4))" },
]

const recentDonors = [
{ id: 1, name: "Sarah Johnson", email: "sarah@email.com", amount: 250, date: "2024-01-15", status: "completed" },
{ id: 2, name: "Michael Chen", email: "michael@email.com", amount: 500, date: "2024-01-14", status: "completed" },
{ id: 3, name: "Emily Davis", email: "emily@email.com", amount: 100, date: "2024-01-14", status: "pending" },
{ id: 4, name: "David Wilson", email: "david@email.com", amount: 750, date: "2024-01-13", status: "completed" },
{ id: 5, name: "Lisa Anderson", email: "lisa@email.com", amount: 300, date: "2024-01-13", status: "completed" },
]

const formElementsList = [
{ id: "heading", name: "Heading", icon: Type, category: "content" },
{ id: "paragraph", name: "Paragraph", icon: Type, category: "content" },
{ id: "image", name: "Image", icon: ImageIcon, category: "content" },
{ id: "donation-amounts", name: "Donation Amounts", icon: DollarSign, category: "donation" },
{ id: "custom-amount", name: "Custom Amount", icon: FormInput, category: "donation" },
{ id: "donor-info", name: "Donor Information", icon: Users, category: "form" },
{ id: "email", name: "Email", icon: Mail, category: "form" },
{ id: "phone", name: "Phone", icon: Phone, category: "form" },
{ id: "address", name: "Address", icon: MapPin, category: "form" },
{ id: "checkbox", name: "Checkbox", icon: CheckSquare, category: "form" },
{ id: "radio", name: "Radio Button", icon: RadioButton, category: "form" },
{ id: "dropdown", name: "Dropdown", icon: List, category: "form" },
]

const defaultFormElements = [
{ id: "1", type: "heading", content: "Support Our Cause", settings: { size: "h2", alignment: "center" } },
{
  id: "2",
  type: "paragraph",
  content: "Your donation makes a difference in our community.",
  settings: { alignment: "center" },
},
{ id: "3", type: "donation-amounts", content: "", settings: { amounts: [25, 50, 100, 250, 500], currency: "USD" } },
{ id: "4", type: "custom-amount", content: "", settings: { placeholder: "Enter custom amount", required: true } },
{ id: "5", type: "donor-info", content: "", settings: { fields: ["firstName", "lastName"], required: true } },
{ id: "6", type: "email", content: "", settings: { placeholder: "Enter your email", required: true } },
]

const donationsData = [
{
  id: "DON-001",
  donor: "Sarah Johnson",
  email: "sarah@example.com",
  amount: 250,
  campaign: "Clean Water Initiative",
  date: "2024-01-15",
  status: "completed",
  paymentMethod: "Credit Card",
  recurring: false,
  receiptSent: true,
},
{
  id: "DON-002",
  donor: "Michael Chen",
  email: "michael@example.com",
  amount: 500,
  campaign: "Education for All",
  date: "2024-01-14",
  status: "completed",
  paymentMethod: "PayPal",
  recurring: true,
  receiptSent: true,
},
{
  id: "DON-003",
  donor: "Emily Rodriguez",
  email: "emily@example.com",
  amount: 100,
  campaign: "Emergency Food Relief",
  date: "2024-01-13",
  status: "pending",
  paymentMethod: "Bank Transfer",
  recurring: false,
  receiptSent: false,
},
{
  id: "DON-004",
  donor: "David Wilson",
  email: "david@example.com",
  amount: 750,
  campaign: "Medical Equipment Fund",
  date: "2024-01-12",
  status: "completed",
  paymentMethod: "Credit Card",
  recurring: true,
  receiptSent: true,
},
{
  id: "DON-005",
  donor: "Lisa Thompson",
  email: "lisa@example.com",
  amount: 300,
  campaign: "Clean Water Initiative",
  date: "2024-01-11",
  status: "failed",
  paymentMethod: "Credit Card",
  recurring: false,
  receiptSent: false,
},
{
  id: "DON-006",
  donor: "James Brown",
  email: "james@example.com",
  amount: 150,
  campaign: "Education for All",
  date: "2024-01-10",
  status: "completed",
  paymentMethod: "PayPal",
  recurring: false,
  receiptSent: true,
},
]

const donorsData = [
{
  id: 1,
  name: "Sarah Johnson",
  email: "sarah@email.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, New York, NY 10001",
  totalDonated: 1250,
  donationCount: 5,
  firstDonation: "2023-08-15",
  lastDonation: "2024-01-15",
  status: "active",
  segment: "major-donor",
  preferredCampaigns: ["Clean Water Initiative", "Education for All"],
  communicationPrefs: ["email", "phone"],
  notes: "Regular monthly donor, interested in education causes",
  tags: ["monthly-donor", "education-advocate"],
  averageDonation: 250,
  donationHistory: [
    { date: "2024-01-15", amount: 250, campaign: "Clean Water Initiative" },
    { date: "2023-12-15", amount: 300, campaign: "Education for All" },
    { date: "2023-11-15", amount: 200, campaign: "Clean Water Initiative" },
    { date: "2023-10-15", amount: 250, campaign: "Emergency Food Relief" },
    { date: "2023-08-15", amount: 250, campaign: "Education for All" },
  ],
},
{
  id: 2,
  name: "Michael Chen",
  email: "michael@email.com",
  phone: "+1 (555) 234-5678",
  address: "456 Oak Ave, San Francisco, CA 94102",
  totalDonated: 2100,
  donationCount: 7,
  firstDonation: "2023-06-10",
  lastDonation: "2024-01-14",
  status: "active",
  segment: "major-donor",
  preferredCampaigns: ["Medical Equipment Fund", "Emergency Food Relief"],
  communicationPrefs: ["email"],
  notes: "Corporate donor, prefers healthcare and emergency causes",
  tags: ["corporate", "healthcare-supporter"],
  averageDonation: 300,
  donationHistory: [
    { date: "2024-01-14", amount: 500, campaign: "Medical Equipment Fund" },
    { date: "2023-12-10", amount: 400, campaign: "Emergency Food Relief" },
    { date: "2023-11-10", amount: 300, campaign: "Medical Equipment Fund" },
    { date: "2023-10-10", amount: 250, campaign: "Clean Water Initiative" },
    { date: "2023-09-10", amount: 300, campaign: "Emergency Food Relief" },
    { date: "2023-07-10", amount: 200, campaign: "Medical Equipment Fund" },
    { date: "2023-06-10", amount: 150, campaign: "Emergency Food Relief" },
  ],
},
{
  id: 3,
  name: "Emily Rodriguez",
  email: "emily@email.com",
  phone: "+1 (555) 345-6789",
  address: "789 Pine St, Austin, TX 78701",
  totalDonated: 450,
  donationCount: 3,
  firstDonation: "2023-11-20",
  lastDonation: "2024-01-13",
  status: "active",
  segment: "regular-donor",
  preferredCampaigns: ["Environment", "Clean Water Initiative"],
  communicationPrefs: ["email", "sms"],
  notes: "Young professional, environmentally conscious",
  tags: ["environmental", "young-professional"],
  averageDonation: 150,
  donationHistory: [
    { date: "2024-01-13", amount: 200, campaign: "Clean Water Initiative" },
    { date: "2023-12-20", amount: 150, campaign: "Environment" },
    { date: "2023-11-20", amount: 100, campaign: "Clean Water Initiative" },
  ],
},
{
  id: 4,
  name: "David Wilson",
  email: "david@email.com",
  phone: "+1 (555) 456-7890",
  address: "321 Elm Dr, Chicago, IL 60601",
  totalDonated: 3200,
  donationCount: 8,
  firstDonation: "2023-05-01",
  lastDonation: "2024-01-12",
  status: "active",
  segment: "major-donor",
  preferredCampaigns: ["Education for All", "Medical Equipment Fund"],
  communicationPrefs: ["email", "phone", "mail"],
  notes: "Retired educator, passionate about education and healthcare",
  tags: ["retired", "education-advocate", "healthcare-supporter"],
  averageDonation: 400,
  donationHistory: [
    { date: "2024-01-12", amount: 750, campaign: "Medical Equipment Fund" },
    { date: "2023-12-01", amount: 500, campaign: "Education for All" },
    { date: "2023-11-01", amount: 400, campaign: "Medical Equipment Fund" },
    { date: "2023-10-01", amount: 350, campaign: "Education for All" },
    { date: "2023-09-01", amount: 300, campaign: "Clean Water Initiative" },
    { date: "2023-08-01", amount: 400, campaign: "Education for All" },
    { date: "2023-06-01", amount: 250, campaign: "Medical Equipment Fund" },
    { date: "2023-05-01", amount: 250, campaign: "Education for All" },
  ],
},
{
  id: 5,
  name: "Lisa Thompson",
  email: "lisa@email.com",
  phone: "+1 (555) 567-8901",
  address: "654 Maple Ln, Denver, CO 80202",
  totalDonated: 800,
  donationCount: 4,
  firstDonation: "2023-09-15",
  lastDonation: "2024-01-11",
  status: "active",
  segment: "regular-donor",
  preferredCampaigns: ["Emergency Food Relief", "Clean Water Initiative"],
  communicationPrefs: ["email"],
  notes: "Community volunteer, focuses on local impact",
  tags: ["volunteer", "community-focused"],
  averageDonation: 200,
  donationHistory: [
    { date: "2024-01-11", amount: 300, campaign: "Emergency Food Relief" },
    { date: "2023-12-15", amount: 200, campaign: "Clean Water Initiative" },
    { date: "2023-11-15", amount: 150, campaign: "Emergency Food Relief" },
    { date: "2023-09-15", amount: 150, campaign: "Clean Water Initiative" },
  ],
},
{
  id: 6,
  name: "James Brown",
  email: "james@email.com",
  phone: "+1 (555) 678-9012",
  address: "987 Cedar St, Miami, FL 33101",
  totalDonated: 150,
  donationCount: 1,
  firstDonation: "2024-01-10",
  lastDonation: "2024-01-10",
  status: "new",
  segment: "first-time-donor",
  preferredCampaigns: ["Education for All"],
  communicationPrefs: ["email"],
  notes: "New donor, first-time contribution",
  tags: ["new-donor"],
  averageDonation: 150,
  donationHistory: [{ date: "2024-01-10", amount: 150, campaign: "Education for All" }],
},
]

export function AdminDashboard() {
const [donorFilter, setDonorFilter] = useState("all")
const [donorSegmentFilter, setDonorSegmentFilter] = useState("all")
const [donorSearchQuery, setDonorSearchQuery] = useState("")
const [selectedDonor, setSelectedDonor] = useState<any>(null)
const [isDonorDetailsOpen, setIsDonorDetailsOpen] = useState(false)
const [isAddDonorOpen, setIsAddDonorOpen] = useState(false)
const [newDonor, setNewDonor] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
  tags: [],
  communicationPrefs: [],
})

const [donationFilter, setDonationFilter] = useState("all")
const [paymentMethodFilter, setPaymentMethodFilter] = useState("all")
const [donationStatusFilter, setDonationStatusFilter] = useState("all")
const [selectedDonation, setSelectedDonation] = useState<any>(null)
const [isDonationDetailsOpen, setIsDonationDetailsOpen] = useState(false)
const [activeTab, setActiveTab] = useState("overview")
const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false)
const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)
const [campaignFilter, setCampaignFilter] = useState("all")
const [visibilityFilter, setVisibilityFilter] = useState("all")
const [isCreateP2PCampaignOpen, setIsCreateP2PCampaignOpen] = useState(false)
const [p2pFilter, setP2pFilter] = useState("all")
const [fundraiserFilter, setFundraiserFilter] = useState("all")
const [newP2PCampaign, setNewP2PCampaign] = useState({
  name: "",
  description: "",
  parentCampaign: "",
  goal: "",
  type: "individual",
  endDate: null,
  allowTeams: false,
  requireApproval: true,
})

const updateCampaignVisibility = (campaign: Campaign, newVisibility: string) => {
  console.log("[v0] Updating campaign visibility:", campaign.name, "to", newVisibility)
  // In a real app, this would make an API call to update the campaign
}

const toggleCampaignVisibility = (campaign: Campaign) => {
  const newVisibility = campaign.visibility === "public" ? "private" : "public"
  updateCampaignVisibility(campaign, newVisibility)
}

const [isFormBuilderOpen, setIsFormBuilderOpen] = useState(false)
  // ...existing code...
const [formElements, setFormElements] = useState(defaultFormElements)
const [selectedElement, setSelectedElement] = useState<any>(null)
const [previewDevice, setPreviewDevice] = useState("desktop")
const [showLandingPage, setShowLandingPage] = useState(false)
  // ...existing code...
const [newCampaign, setNewCampaign] = useState({
  name: "",
  description: "",
  goal: "",
  endDate: null,
  category: "",
  targetAudience: "",
  visibility: "public",
  status: "draft",
})

const handleCreateCampaign = () => {
  // In a real app, this would make an API call
  console.log("[v0] Creating campaign:", newCampaign)
  setIsCreateCampaignOpen(false)
  setNewCampaign({
    name: "",
    description: "",
    goal: "",
    endDate: null,
    category: "",
    targetAudience: "",
    visibility: "public",
    status: "draft",
  })
}

const filteredCampaigns = campaigns.filter((campaign: Campaign) => {
  const statusMatch = campaignFilter === "all" || campaign.status === campaignFilter
  const visibilityMatch = visibilityFilter === "all" || campaign.visibility === visibilityFilter
  return statusMatch && visibilityMatch
})

const duplicateCampaign = (campaign: Campaign) => {
  console.log("[v0] Duplicating campaign:", campaign.name)
}

const archiveCampaign = (campaign: Campaign) => {
  console.log("[v0] Archiving campaign:", campaign.name)
}


const [selectedFormCampaign, setSelectedFormCampaign] = useState<Campaign | null>(null);
const [selectedLandingCampaign, setSelectedLandingCampaign] = useState<Campaign | null>(null);

const openFormBuilder = (campaign: Campaign) => {
  setSelectedFormCampaign(campaign);
  setIsFormBuilderOpen(true);
}

const openLandingPage = (campaign: Campaign) => {
  setSelectedLandingCampaign(campaign);
  setShowLandingPage(true);
}

const addFormElement = (elementType: string) => {
  let settings: any = {};
  switch (elementType) {
    case "heading":
      settings = { size: "h2", alignment: "center" };
      break;
    case "paragraph":
      settings = { alignment: "center" };
      break;
    case "donation-amounts":
      settings = { amounts: [25, 50, 100, 250, 500], currency: "USD" };
      break;
    case "custom-amount":
      settings = { placeholder: "Enter custom amount", required: true };
      break;
    case "donor-info":
      settings = { fields: ["firstName", "lastName"], required: true };
      break;
    case "email":
      settings = { placeholder: "Enter your email", required: true };
      break;
    default:
      settings = {};
  }
  const newElement = {
    id: Date.now().toString(),
    type: elementType,
    content: "",
    settings,
  };
  setFormElements([...formElements, newElement]);
}

const removeFormElement = (elementId: string) => {
  setFormElements(formElements.filter((el) => el.id !== elementId))
}

const updateFormElement = (elementId: string, updates: Record<string, any>) => {
  setFormElements(formElements.map((el) => (el.id === elementId ? { ...el, ...updates } : el)))
}

const renderFormElement = (element: any, isPreview: boolean = false) => {
  const baseClasses = isPreview ? "mb-4" : "mb-4 p-3 border rounded-lg hover:border-primary cursor-pointer"

  switch (element.type) {
    case "heading":
      return (
        <div key={element.id} className={baseClasses}>
          <h2 className="text-2xl font-bold text-center">{element.content || "Heading Text"}</h2>
        </div>
      )
    case "paragraph":
      return (
        <div key={element.id} className={baseClasses}>
          <p className="text-center text-muted-foreground">{element.content || "Paragraph text goes here."}</p>
        </div>
      )
    case "donation-amounts":
      return (
        <div key={element.id} className={baseClasses}>
          <Label className="text-sm font-medium mb-2 block">Select Amount</Label>
          <div className="grid grid-cols-3 gap-2">
            {(element.settings?.amounts || [25, 50, 100, 250, 500]).slice(0, 6).map((amount: number) => (
              <Button key={amount} variant="outline" className="h-12 bg-transparent">
                ${amount}
              </Button>
            ))}
          </div>
        </div>
      )
    case "custom-amount":
      return (
        <div key={element.id} className={baseClasses}>
          <Label className="text-sm font-medium mb-2 block">Custom Amount</Label>
          <Input placeholder="Enter amount" type="number" />
        </div>
      )
    case "donor-info":
      return (
        <div key={element.id} className={baseClasses}>
          <Label className="text-sm font-medium mb-2 block">Donor Information</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
        </div>
      )
    case "email":
      return (
        <div key={element.id} className={baseClasses}>
          <Label className="text-sm font-medium mb-2 block">Email Address</Label>
          <Input placeholder="Enter your email" type="email" />
        </div>
      )
    default:
      return (
        <div key={element.id} className={baseClasses}>
          <p>Unknown element type: {element.type}</p>
        </div>
      )
  }
}

if (showLandingPage && selectedLandingCampaign) {
  return <CampaignLandingPage campaign={selectedLandingCampaign} onBack={() => setShowLandingPage(false)} />
}

const handleCreateP2PCampaign = () => {
  console.log("[v0] Creating P2P campaign:", newP2PCampaign)
  setIsCreateP2PCampaignOpen(false)
  setNewP2PCampaign({
    name: "",
    description: "",
    parentCampaign: "",
    goal: "",
    type: "individual",
    endDate: null,
    allowTeams: false,
    requireApproval: true,
  })
}

const filteredP2PCampaigns = p2pCampaigns.filter((campaign: any) => {
  return p2pFilter === "all" || campaign.status === p2pFilter
})

const filteredFundraisers = fundraisers.filter((fundraiser: any) => {
  return fundraiserFilter === "all" || fundraiser.status === fundraiserFilter
})

const approveFundraiser = (fundraiser: any) => {
  console.log("[v0] Approving fundraiser:", fundraiser.name)
}

const suspendFundraiser = (fundraiser: any) => {
  console.log("[v0] Suspending fundraiser:", fundraiser.name)
}

const filteredDonors = donorsData.filter((donor: any) => {
  const statusMatch = donorFilter === "all" || donor.status === donorFilter
  const segmentMatch = donorSegmentFilter === "all" || donor.segment === donorSegmentFilter
  const searchMatch =
    donorSearchQuery === "" ||
    donor.name.toLowerCase().includes(donorSearchQuery.toLowerCase()) ||
    donor.email.toLowerCase().includes(donorSearchQuery.toLowerCase())
  return statusMatch && segmentMatch && searchMatch
})

const handleAddDonor = () => {
  console.log("[v0] Adding new donor:", newDonor)
  setIsAddDonorOpen(false)
  setNewDonor({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    tags: [],
    communicationPrefs: [],
  })
}
return(
      <>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
            <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
            <div className="flex items-center space-x-2">
              <Select defaultValue="30days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
            {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$113,400</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary">+12.5%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary">+8.2%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-secondary">+2</span> new this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Donation</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$398</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary">+5.1%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>
          {/* Charts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Monthly Donations</CardTitle>
                <CardDescription>Donation trends over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    amount: {
                      label: "Donation Amount",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={donationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="amount" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Campaign Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "Donation Amount",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={campaignData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                        {campaignData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            formatter={(value, name, props) => [`${value}%`, props.payload?.category || "Campaign"]}
                          />
                        }
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
                <CardDescription>Latest donation activity</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Donor</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentDonors.slice(0, 5).map((donor) => (
                      <TableRow key={donor.id}>
                        <TableCell className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={`/abstract-geometric-shapes.png?height=32&width=32&query=${donor.name} avatar`}
                            />
                            <AvatarFallback>
                              {donor.name
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{donor.name}</div>
                            <div className="text-sm text-muted-foreground">{donor.email}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">${donor.amount}</TableCell>
                        <TableCell>{donor.date}</TableCell>
                        <TableCell>
                          <Badge variant={donor.status === "completed" ? "default" : "secondary"}>
                            {donor.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
        </TabsContent>
        {/* Donors Tab */}
          <TabsContent value="donors" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Donor Database</h2>
                <p className="text-muted-foreground">Comprehensive donor relationship management</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Dialog open={isAddDonorOpen} onOpenChange={setIsAddDonorOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Donor
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Add New Donor</DialogTitle>
                      <DialogDescription>
                        Create a new donor profile with contact information and preferences.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="donor-name" className="text-right">
                          Full Name
                        </Label>
                        <Input
                          id="donor-name"
                          value={newDonor.name}
                          onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
                          className="col-span-3"
                          placeholder="Enter donor's full name"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="donor-email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="donor-email"
                          type="email"
                          value={newDonor.email}
                          onChange={(e) => setNewDonor({ ...newDonor, email: e.target.value })}
                          className="col-span-3"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="donor-phone" className="text-right">
                          Phone
                        </Label>
                        <Input
                          id="donor-phone"
                          value={newDonor.phone}
                          onChange={(e) => setNewDonor({ ...newDonor, phone: e.target.value })}
                          className="col-span-3"
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="donor-address" className="text-right pt-2">
                          Address
                        </Label>
                        <Textarea
                          id="donor-address"
                          value={newDonor.address}
                          onChange={(e) => setNewDonor({ ...newDonor, address: e.target.value })}
                          className="col-span-3"
                          placeholder="Enter full address"
                          rows={2}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="donor-notes" className="text-right pt-2">
                          Notes
                        </Label>
                        <Textarea
                          id="donor-notes"
                          value={newDonor.notes}
                          onChange={(e) => setNewDonor({ ...newDonor, notes: e.target.value })}
                          className="col-span-3"
                          placeholder="Add any relevant notes about the donor"
                          rows={3}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddDonorOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddDonor}>Add Donor</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{donorsData.length}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">+{donorsData.filter((d) => d.status === "new").length}</span> new
                    this month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Major Donors</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {donorsData.filter((d) => d.segment === "major-donor").length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">
                      {Math.round(
                        (donorsData.filter((d) => d.segment === "major-donor").length / donorsData.length) * 100,
                      )}
                      %
                    </span>{" "}
                    of total donors
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Lifetime Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${Math.round(donorsData.reduce((sum, d) => sum + d.totalDonated, 0) / donorsData.length)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">+12.3%</span> from last quarter
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
                  <RefreshCw className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.round((donorsData.filter((d) => d.donationCount > 1).length / donorsData.length) * 100)}%
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">+5.2%</span> from last year
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search donors..."
                  className="pl-8"
                  value={donorSearchQuery}
                  onChange={(e) => setDonorSearchQuery(e.target.value)}
                />
              </div>
              <Select value={donorFilter} onValueChange={setDonorFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={donorSegmentFilter} onValueChange={setDonorSegmentFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Segments</SelectItem>
                  <SelectItem value="major-donor">Major Donors</SelectItem>
                  <SelectItem value="regular-donor">Regular Donors</SelectItem>
                  <SelectItem value="first-time-donor">First-time Donors</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Advanced
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Checkbox />
                      </TableHead>
                      <TableHead>Donor</TableHead>
                      <TableHead>Segment</TableHead>
                      <TableHead>Total Donated</TableHead>
                      <TableHead>Donations</TableHead>
                      <TableHead>Last Donation</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDonors.map((donor) => (
                      <TableRow key={donor.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage
                              src={`/abstract-geometric-shapes.png?height=40&width=40&query=${donor.name} avatar`}
                            />
                            <AvatarFallback>
                              {donor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{donor.name}</div>
                            <div className="text-sm text-muted-foreground">{donor.email}</div>
                            <div className="flex items-center space-x-1 mt-1">
                              {donor.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={
                              donor.segment === "major-donor"
                                ? "bg-purple-100 text-purple-800"
                                : donor.segment === "regular-donor"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                            }
                          >
                            {donor.segment.replace("-", " ")}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-bold">${donor.totalDonated.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="text-center">
                            <div className="font-medium">{donor.donationCount}</div>
                            <div className="text-xs text-muted-foreground">Avg: ${donor.averageDonation}</div>
                          </div>
                        </TableCell>
                        <TableCell>{donor.lastDonation}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              donor.status === "active" ? "default" : donor.status === "new" ? "secondary" : "outline"
                            }
                            className={
                              donor.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : donor.status === "new"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : ""
                            }
                          >
                            {donor.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                setSelectedDonor(donor)
                                setIsDonorDetailsOpen(true)
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Donor Segments</CardTitle>
                    <CardDescription>Distribution of donors by giving level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          segment: "Major Donors",
                          count: donorsData.filter((d) => d.segment === "major-donor").length,
                          color: "bg-purple-500",
                        },
                        {
                          segment: "Regular Donors",
                          count: donorsData.filter((d) => d.segment === "regular-donor").length,
                          color: "bg-blue-500",
                        },
                        {
                          segment: "First-time Donors",
                          count: donorsData.filter((d) => d.segment === "first-time-donor").length,
                          color: "bg-green-500",
                        },
                      ].map((item) => (
                        <div key={item.segment} className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${item.color}`} />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span className="font-medium">{item.segment}</span>
                              <span className="text-sm text-muted-foreground">{item.count} donors</span>
                            </div>
                            <Progress value={(item.count / donorsData.length) * 100} className="h-2 mt-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Top Donors</CardTitle>
                    <CardDescription>Highest lifetime value donors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {donorsData
                        .sort((a, b) => b.totalDonated - a.totalDonated)
                        .slice(0, 5)
                        .map((donor, index) => (
                          <div key={donor.id} className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <Badge
                                variant="outline"
                                className="w-8 h-8 rounded-full flex items-center justify-center"
                              >
                                {index + 1}
                              </Badge>
                            </div>
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={`/abstract-geometric-shapes.png?height=40&width=40&query=${donor.name} avatar`}
                              />
                              <AvatarFallback>
                                {donor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{donor.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {donor.donationCount} donations • Avg: ${donor.averageDonation}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">${donor.totalDonated.toLocaleString()}</div>
                              <div className="text-sm text-muted-foreground">lifetime</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
       </>
    );
}
