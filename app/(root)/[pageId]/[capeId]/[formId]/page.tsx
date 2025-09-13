"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Lock, CreditCard, X, Calendar } from "lucide-react"

const DonationForm = () => {
  const [donationTab, setDonationTab] = useState<"general" | "tribute">("tribute")
  const [tributeType, setTributeType] = useState("celebration")
  const [honoreeName, setHonoreeName] = useState("")
  const [supporterType, setSupporterType] = useState("Corporate")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isFromOrganization, setIsFromOrganization] = useState(false)
  const [employerMatch, setEmployerMatch] = useState("")
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState(25) // Changed default amount to $25 to match reference
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"once" | "monthly">("monthly") // Changed default to recurring
  const [recurringFrequency, setRecurringFrequency] = useState("Weekly")
  const [nextPaymentDate, setNextPaymentDate] = useState("09/20/2025")
  const [donor, setDonor] = useState({
    first: "",
    last: "",
    email: "",
    address: "",
    city: "",
    country: "United States",
    state: "",
    zipCode: "",
  })

  const presetAmounts = [25, 50, 100, 250] // Updated preset amounts to match reference

  const handleAmountSelect = (amt: number) => {
    setAmount(amt)
    setCustomAmount("")
  }

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount(Number(e.target.value))
  }

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonor({ ...donor, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPaymentModal(true)
  }
  const institutionName = "Donattion Delight"

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 bg-green-50 min-h-screen">
      <Card className="border-0 shadow-lg bg-white">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>
            <div>
              <CardTitle className="text-3xl font-bold text-blue-900 mb-2">Make a Donation</CardTitle>
              <p className="text-blue-600 text-sm underline cursor-pointer">
                Click here to view the  {institutionName} donor privacy policy.
              </p>
            </div>
          </div>

          <Tabs
            value={donationTab}
            onValueChange={(value) => setDonationTab(value as "general" | "tribute")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto">
              <TabsTrigger
                value="general"
                className="data-[state=active]:bg-transparent data-[state=active]:text-orange-600 data-[state=active]:border-b-2 data-[state=active]:border-orange-600 rounded-none pb-3 font-medium"
              >
                General Donation
              </TabsTrigger>
              <TabsTrigger
                value="tribute"
                className="data-[state=active]:bg-transparent data-[state=active]:text-orange-600 data-[state=active]:border-b-2 data-[state=active]:border-orange-600 rounded-none pb-3 font-medium"
              >
                Give in Tribute
              </TabsTrigger>
            </TabsList>
            <div className="border-b border-yellow-400 w-full mt-0 mb-6"></div>

            <TabsContent value="tribute" className="mt-0">
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Donate in Tribute</h3>
                <div>
                  <Select value={tributeType} onValueChange={setTributeType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Type of dedication" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="memory">In Memory Of</SelectItem>
                      <SelectItem value="honor">In Honor Of</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    type="text"
                    value={honoreeName}
                    onChange={(e) => setHonoreeName(e.target.value)}
                    placeholder="Honoree name"
                    className="w-full"
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">0/50</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Amount</h3>

              <div className="flex rounded-lg overflow-hidden border mb-4">
                <Button
                  type="button"
                  variant={donationType === "once" ? "default" : "secondary"}
                  className={`flex-1 rounded-none ${
                    donationType === "once"
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setDonationType("once")}
                >
                  One-time donation
                </Button>
                <Button
                  type="button"
                  variant={donationType === "monthly" ? "default" : "secondary"}
                  className={`flex-1 rounded-none ${
                    donationType === "monthly"
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setDonationType("monthly")}
                >
                  Recurring donation
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {presetAmounts.map((amt) => (
                  <Button
                    type="button"
                    key={amt}
                    variant={amount === amt ? "default" : "outline"}
                    className={`py-6 text-lg font-semibold ${
                      amount === amt
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => handleAmountSelect(amt)}
                  >
                    ${amt}
                  </Button>
                ))}
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full py-6 text-lg border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                onClick={() => setCustomAmount("1")}
              >
                Other amount
              </Button>

              {customAmount && (
                <div className="mt-4">
                  <Input
                    type="number"
                    min={1}
                    step={0.01}
                    value={customAmount}
                    onChange={handleCustomAmount}
                    placeholder="Enter amount"
                    className="text-lg py-3"
                  />
                </div>
              )}

              {donationType === "monthly" && (
                <div className="mt-4 space-y-4 p-4 bg-green-50 rounded-lg">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Process my Donation</Label>
                    <Select value={recurringFrequency} onValueChange={setRecurringFrequency}>
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Weekly">Weekly</SelectItem>
                        <SelectItem value="Monthly">Monthly</SelectItem>
                        <SelectItem value="Quarterly">Quarterly</SelectItem>
                        <SelectItem value="Annually">Annually</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Next payment on</Label>
                    <div className="relative mt-1">
                      <Input
                        type="text"
                        value={nextPaymentDate}
                        onChange={(e) => setNextPaymentDate(e.target.value)}
                        placeholder="MM/DD/YYYY"
                        className="pr-10"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Use the format MM/DD/YYYY.</p>
                  </div>

                  <p className="text-sm text-gray-700">
                    Your first Donationprocesses today. The next Donationprocesses on {nextPaymentDate}.
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <Label htmlFor="anonymous" className="text-sm text-gray-700">
                I would like the Donation to remain anonymous
              </Label>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                Your Donationwill go to our annual Fund to Support the area of greatest need for the organization.
              </p>
              <div className="mt-3">
                <Label className="text-sm font-medium text-gray-700">Supporter Type</Label>
                <Select value={supporterType} onValueChange={setSupporterType}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Individual Unrestricted">Individual Unrestricted</SelectItem>
                    <SelectItem value="Alumni Unrestricted">Alumni Unrestricted</SelectItem>
                    <SelectItem value="Corporate">Corporate</SelectItem>
                    <SelectItem value="Foundation">Foundation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your information</h3>

              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  id="organization"
                  checked={isFromOrganization}
                  onCheckedChange={(checked) => setIsFromOrganization(checked as boolean)}
                  className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                />
                <Label htmlFor="organization" className="text-sm text-gray-700">
                  {donationTab === "tribute"
                    ? "I would like to give on behalf of an organization"
                    : "This Donationis from an organization"}
                </Label>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">First name</Label>
                  <Input type="text" name="first" value={donor.first} onChange={handleDonorChange} className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Last name</Label>
                  <Input type="text" name="last" value={donor.last} onChange={handleDonorChange} className="mt-1" />
                </div>
              </div>

              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700">Email</Label>
                <Input type="email" name="email" value={donor.email} onChange={handleDonorChange} className="mt-1" />
              </div>

              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700">Country</Label>
                <Select value={donor.country} onValueChange={(value) => setDonor({ ...donor, country: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700">Address</Label>
                <Textarea name="address" value={donor.address} onChange={handleDonorChange} className="mt-1" rows={3} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">City</Label>
                  <Input type="text" name="city" value={donor.city} onChange={handleDonorChange} className="mt-1" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">ZIP code</Label>
                  <Input
                    type="text"
                    name="zipCode"
                    value={donor.zipCode}
                    onChange={handleDonorChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700">State</Label>
                <Select value={donor.state} onValueChange={(value) => setDonor({ ...donor, state: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    {/* Add more states as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              Give securely
            </Button>

            <div className="text-center text-sm text-gray-600">
              To learn how we collect and use your information, please read our{" "}
              <span className="text-green-600 underline cursor-pointer">privacy policy</span>.
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute right-0 top-0 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex flex-col items-center space-y-4 pt-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-yellow-600" />
              </div>
              <DialogTitle className="text-xl font-semibold text-center">Payment method</DialogTitle>
              <p className="text-sm text-gray-600 text-center">
                Our strict PCI-compliance standards keep your data safe.
              </p>
            </div>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <Button
              variant="outline"
              className="w-full h-14 flex items-center justify-center gap-3 border-2 hover:bg-gray-50 bg-transparent"
              onClick={() => {
                // Handle credit card payment
                console.log("Credit card payment selected")
              }}
            >
              <CreditCard className="w-5 h-5 text-gray-600" />
              <span className="text-base">Credit or debit card</span>
            </Button>

            <div className="text-center text-sm text-gray-500">or</div>

            <Button
              variant="outline"
              className="w-full h-14 flex items-center justify-center gap-3 border-2 hover:bg-gray-50 bg-transparent"
              onClick={() => {
                // Handle PayPal payment
                console.log("PayPal payment selected")
              }}
            >
              <div className="text-blue-600 font-bold text-lg">PayPal</div>
            </Button>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total amount</span>
              <span>${customAmount || amount}.00</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DonationForm
