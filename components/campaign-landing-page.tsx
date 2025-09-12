"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Users,
  Calendar,
  Target,
  CheckCircle,
  ArrowLeft,
} from "lucide-react"

interface CampaignLandingPageProps {
  campaign: {
    id: number
    name: string
    description: string
    goal: number
    raised: number
    donors: number
    status: string
    endDate: string
    category: string
  }
  onBack?: () => void
}

const recentDonors = [
  { name: "Sarah Johnson", amount: 250, time: "2 hours ago", message: "Happy to support this cause!" },
  { name: "Michael Chen", amount: 500, time: "5 hours ago", message: "Keep up the great work!" },
  { name: "Emily Davis", amount: 100, time: "1 day ago", message: "" },
  { name: "David Wilson", amount: 750, time: "2 days ago", message: "This is so important for our community." },
  { name: "Lisa Anderson", amount: 300, time: "3 days ago", message: "" },
]

const impactStats = [
  { label: "Families Helped", value: "142", icon: Users },
  { label: "Days Remaining", value: "23", icon: Calendar },
  { label: "Goal Progress", value: "72%", icon: Target },
]

export function CampaignLandingPage({ campaign, onBack }: CampaignLandingPageProps) {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [showShareMenu, setShowShareMenu] = useState(false)

  const progressPercentage = (campaign.raised / campaign.goal) * 100
  const remainingAmount = campaign.goal - campaign.raised

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000]

  const handleDonate = () => {
    const amount = customAmount ? Number.parseFloat(customAmount) : selectedAmount
    console.log("[v0] Processing donation:", { amount, donorInfo, campaignId: campaign.id })
    // In a real app, this would process the donation
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Support ${campaign.name} - Help us reach our goal!`

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
        break
      case "copy":
        navigator.clipboard.writeText(url)
        break
    }
    setShowShareMenu(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {onBack && (
                <Button variant="ghost" size="sm" onClick={onBack}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Admin
                </Button>
              )}
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">DonationDelight</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => setShowShareMenu(!showShareMenu)} className="relative">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              {showShareMenu && (
                <div className="absolute right-0 top-12 bg-background border rounded-lg shadow-lg p-2 z-10">
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" size="sm" onClick={() => handleShare("facebook")}>
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleShare("twitter")}>
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleShare("linkedin")}>
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleShare("copy")}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={`/abstract-geometric-shapes.png?height=400&width=800&query=${campaign.name} campaign hero image`}
                  alt={campaign.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{campaign.category}</Badge>
                  <Badge variant={campaign.status === "active" ? "default" : "secondary"}>{campaign.status}</Badge>
                </div>

                <h1 className="text-4xl font-bold tracking-tight">{campaign.name}</h1>
                <p className="text-xl text-muted-foreground">{campaign.description}</p>
              </div>
            </div>

            {/* Progress Section */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold">${campaign.raised.toLocaleString()}</p>
                      <p className="text-muted-foreground">raised of ${campaign.goal.toLocaleString()} goal</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{campaign.donors}</p>
                      <p className="text-muted-foreground">donors</p>
                    </div>
                  </div>

                  <Progress value={progressPercentage} className="h-3" />

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{Math.round(progressPercentage)}% funded</span>
                    <span>${remainingAmount.toLocaleString()} to go</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4">
              {impactStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Campaign Story */}
            <Card>
              <CardHeader>
                <CardTitle>Our Story</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  This campaign represents more than just fundraising—it's about creating lasting change in our
                  community. Every donation, no matter the size, contributes to a larger vision of hope and progress.
                </p>
                <p>
                  Our dedicated team has been working tirelessly to identify the most impactful ways to use these funds.
                  We believe in transparency and will provide regular updates on how your contributions are making a
                  difference.
                </p>
                <p>
                  Join us in this important mission. Together, we can achieve something truly meaningful and create
                  positive change that will benefit generations to come.
                </p>
              </CardContent>
            </Card>

            {/* Recent Donors */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Supporters</CardTitle>
                <CardDescription>Thank you to our amazing donors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonors.slice(0, 5).map((donor, index) => (
                    <div key={index} className="flex items-start space-x-3">
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
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{donor.name}</p>
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-primary">${donor.amount}</span>
                            <span className="text-sm text-muted-foreground">{donor.time}</span>
                          </div>
                        </div>
                        {donor.message && <p className="text-sm text-muted-foreground italic">"{donor.message}"</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Form Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
                <CardDescription>Support this important cause</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Select Amount</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className="h-12"
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount("")
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                  />
                </div>

                <Separator />

                {/* Donor Information */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Donor Information</Label>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="firstName" className="text-xs">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={donorInfo.firstName}
                        onChange={(e) => setDonorInfo({ ...donorInfo, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-xs">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={donorInfo.lastName}
                        onChange={(e) => setDonorInfo({ ...donorInfo, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-xs">
                      Message (Optional)
                    </Label>
                    <Input
                      id="message"
                      placeholder="Leave a message of support"
                      value={donorInfo.message}
                      onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                    />
                  </div>
                </div>

                {/* Donation Summary */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Donation Amount:</span>
                    <span className="font-bold">
                      ${(customAmount ? Number.parseFloat(customAmount) || 0 : selectedAmount).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Processing Fee:</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>
                      ${(customAmount ? Number.parseFloat(customAmount) || 0 : selectedAmount).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Donate Button */}
                <Button
                  className="w-full h-12 text-lg"
                  size="lg"
                  onClick={handleDonate}
                  disabled={(!customAmount && !selectedAmount) || !donorInfo.firstName || !donorInfo.email}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Button>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Secure & encrypted donation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Campaign */}
            <Card>
              <CardHeader>
                <CardTitle>Share This Campaign</CardTitle>
                <CardDescription>Help us reach more supporters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleShare("facebook")}>
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare("twitter")}>
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")}>
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare("copy")}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
