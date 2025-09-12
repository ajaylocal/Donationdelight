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
import Link from "next/link";

const presetAmounts = [10, 25, 50, 100, 250, 500]

const DonationForm = () => {
  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState(25)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"once" | "monthly">("once")
  const [privateMessage, setPrivateMessage] = useState("")
  const [isDedicated, setIsDedicated] = useState(false)
  const [dedicationMessage, setDedicationMessage] = useState("")
  const [donorType, setDonorType] = useState<"personal" | "corporate">("personal")
  const [donor, setDonor] = useState({
    first: "",
    last: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    country: "Canada",
    province: "",
    postalCode: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [status, setStatus] = useState("")

  // Step 1: Amount
  const handleAmountSelect = (amt: number) => {
    setAmount(amt)
    setCustomAmount("")
  }
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount(Number(e.target.value))
  }

  // Step 2: Donor Info
  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonor({ ...donor, [e.target.name]: e.target.value })
  }

  // Step 3: Payment
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("success")
    setStep(4)
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Your donation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex rounded-lg overflow-hidden border">
              <Button
                type="button"
                variant={donationType === "once" ? "default" : "secondary"}
                className="flex-1 rounded-none bg-amber-800 hover:bg-amber-700 text-white"
                onClick={() => setDonationType("once")}
              >
                Donate once
              </Button>
              <Button
                type="button"
                variant={donationType === "monthly" ? "default" : "secondary"}
                className="flex-1 rounded-none"
                onClick={() => setDonationType("monthly")}
              >
                Donate monthly
              </Button>
            </div>

            <div>
              <Label className="text-sm font-medium">Donation amount</Label>
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {presetAmounts.map((amt) => (
                  <Button
                    type="button"
                    key={amt}
                    variant={amount === amt ? "default" : "outline"}
                    className={`px-6 py-3 ${amount === amt ? "bg-amber-800 hover:bg-amber-700" : ""}`}
                    onClick={() => handleAmountSelect(amt)}
                  >
                    ${amt.toFixed(2)}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <Input
                  type="number"
                  min={1}
                  step={0.01}
                  value={customAmount}
                  onChange={handleCustomAmount}
                  placeholder="Enter amount"
                  className="pl-8"
                />
              </div>
            </div>

            <div>
              <Label className="text-sm text-blue-600 underline cursor-pointer">
                Write a private message to us (optional)
              </Label>
              <Textarea
                value={privateMessage}
                onChange={(e) => setPrivateMessage(e.target.value)}
                placeholder="Your message..."
                className="mt-2"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <Label className="font-medium">Want to dedicate your gift to someone special?</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dedication"
                  checked={isDedicated}
                  onCheckedChange={(checked) => setIsDedicated(checked as boolean)}
                />
                <Label htmlFor="dedication" className="text-sm">
                  Yes, I want to dedicate my donation
                </Label>
              </div>
              {isDedicated && (
                <Textarea
                  value={dedicationMessage}
                  onChange={(e) => setDedicationMessage(e.target.value)}
                  placeholder="Enter dedication message..."
                  className="mt-3"
                />
              )}
            </div>

            <Button onClick={() => setStep(2)} className="w-full bg-amber-800 hover:bg-amber-700">
              Continue →
            </Button>
            <div className="flex items-center justify-center text-xs text-gray-500">
              <span className="mr-1">🔒</span> 100% Secure Donation
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <Button variant="ghost" onClick={() => setStep(1)} className="mb-2 p-0 h-auto text-amber-700">
              ← Back
            </Button>
            <CardTitle className="text-center">Your details</CardTitle>
            <p className="text-center text-gray-600 text-sm">
              Tell us a bit about yourself so we can send your tax receipt.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={donorType} onValueChange={(value) => setDonorType(value as "personal" | "corporate")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4 mt-6">
                <div>
                  <Label>Email Address *</Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📧</span>
                    <Input
                      type="email"
                      name="email"
                      value={donor.email}
                      onChange={handleDonorChange}
                      placeholder="Enter your email address"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>First Name *</Label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
                      <Input
                        type="text"
                        name="first"
                        value={donor.first}
                        onChange={handleDonorChange}
                        placeholder="Enter your first name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Last Name *</Label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
                      <Input
                        type="text"
                        name="last"
                        value={donor.last}
                        onChange={handleDonorChange}
                        placeholder="Enter your last name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="corporate" className="space-y-4 mt-6">
                <div>
                  <Label>Company Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={donor.email}
                    onChange={handleDonorChange}
                    placeholder="Enter company email"
                    required
                  />
                </div>
                <div>
                  <Label>Company Name *</Label>
                  <Input
                    type="text"
                    name="first"
                    value={donor.first}
                    onChange={handleDonorChange}
                    placeholder="Enter company name"
                    required
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-4">
              <h3 className="font-medium">Address</h3>
              <div>
                <Label>Address line 1 *</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📍</span>
                  <Input
                    type="text"
                    name="address1"
                    value={donor.address1}
                    onChange={handleDonorChange}
                    placeholder="Enter your address"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Address line 2 (optional)</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📍</span>
                  <Input
                    type="text"
                    name="address2"
                    value={donor.address2}
                    onChange={handleDonorChange}
                    placeholder="Apartment, suite, etc."
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>City *</Label>
                  <Input
                    type="text"
                    name="city"
                    value={donor.city}
                    onChange={handleDonorChange}
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div>
                  <Label>Country *</Label>
                  <Select value={donor.country} onValueChange={(value) => setDonor({ ...donor, country: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Province *</Label>
                  <Select value={donor.province} onValueChange={(value) => setDonor({ ...donor, province: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AB">Alberta</SelectItem>
                      <SelectItem value="BC">British Columbia</SelectItem>
                      <SelectItem value="MB">Manitoba</SelectItem>
                      <SelectItem value="NB">New Brunswick</SelectItem>
                      <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                      <SelectItem value="NS">Nova Scotia</SelectItem>
                      <SelectItem value="ON">Ontario</SelectItem>
                      <SelectItem value="PE">Prince Edward Island</SelectItem>
                      <SelectItem value="QC">Quebec</SelectItem>
                      <SelectItem value="SK">Saskatchewan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Postal code *</Label>
                  <Input
                    type="text"
                    name="postalCode"
                    value={donor.postalCode}
                    onChange={handleDonorChange}
                    placeholder="Enter your postal code"
                    required
                  />
                </div>
              </div>
            </div>

            <Button onClick={() => setStep(3)} className="w-full bg-amber-800 hover:bg-amber-700">
              Continue →
            </Button>
            <div className="flex items-center justify-center text-xs text-gray-500">
              <span className="mr-1">🔒</span> 100% Secure Donation
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <Button variant="ghost" onClick={() => setStep(2)} className="mb-2 p-0 h-auto text-amber-700">
              ← Back
            </Button>
            <CardTitle className="text-center">Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Your donation</span>
                <span className="font-bold">${amount.toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600">Your gift to St. Catherine of Siena Parish</div>
              {isDedicated && (
                <div className="text-sm text-gray-600 border-t pt-2">
                  <strong>Dedication:</strong> {dedicationMessage}
                </div>
              )}
              <div className="flex justify-between items-center text-sm border-t pt-2">
                <span>Donation to CanadaHelps</span>
                <span>$3</span>
              </div>
              <div className="text-xs text-gray-500">
                Add a one-time small donation to CanadaHelps. Your support helps them continue providing affordable
                fundraising tools to charities like ours.
              </div>
              <div className="flex justify-between items-center font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>${(amount + 3).toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-green-600">🔒</span>
                <span className="font-medium">Your payment information</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Donate with any of these secure payment methods.</p>

              <div className="grid grid-cols-4 gap-2 mb-4">
                <Button
                  type="button"
                  variant={paymentMethod === "card" ? "default" : "outline"}
                  className="p-3 h-12"
                  onClick={() => setPaymentMethod("card")}
                >
                  💳
                </Button>
                <Button
                  type="button"
                  variant={paymentMethod === "paypal" ? "default" : "outline"}
                  className="p-3 h-12"
                  onClick={() => setPaymentMethod("paypal")}
                >
                  PayPal
                </Button>
                <Button
                  type="button"
                  variant={paymentMethod === "google" ? "default" : "outline"}
                  className="p-3 h-12"
                  onClick={() => setPaymentMethod("google")}
                >
                  G Pay
                </Button>
                <Button
                  type="button"
                  variant={paymentMethod === "bank" ? "default" : "outline"}
                  className="p-3 h-12"
                  onClick={() => setPaymentMethod("bank")}
                >
                  🏦
                </Button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <Label>Credit Card *</Label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">💳</span>
                      <Input type="text" placeholder="1234 1234 1234 1234" className="pl-10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Expiration *</Label>
                      <Input type="text" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label>CVV *</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔒</span>
                        <Input type="text" placeholder="123" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>Name on card *</Label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
                      <Input type="text" placeholder="Enter the name on the credit card" className="pl-10" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button onClick={handleDonate} className="w-full bg-amber-800 hover:bg-amber-700 text-lg py-6">
              Donate
            </Button>
            <div className="flex items-center justify-center text-xs text-gray-500">
              <span className="mr-1">🔒</span> 100% Secure Donation
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && status === "success" && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">✓</span>
            </div>
            <div>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold">Success!</span>
            </div>
            <h2 className="text-2xl font-bold text-green-800">Hey {donor.first}, thanks for your donation!</h2>
            <p className="text-gray-700">
              {donor.first}, your contribution means a lot and will be put to good use in making a difference. We've
              sent your donation receipt to {donor.email}.
            </p>

            <div className="bg-white rounded-lg p-6 text-left space-y-4">
              <h3 className="font-bold">Donor Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Donor Name</span>
                  <span>
                    {donor.first} {donor.last}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Email Address</span>
                  <span>{donor.email}</span>
                </div>
              </div>

              <h3 className="font-bold pt-4">Donation Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Payment Status</span>
                  <span className="text-green-600 font-bold">● Completed</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Method</span>
                  <span>{paymentMethod === "card" ? "Credit Card" : paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span>Donation Amount</span>
                  <span>${amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Donation Total</span>
                  <span>${(amount + 3).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button variant="outline" className="text-green-700 border-green-300 bg-transparent">
              <Link href="/campaign-grid" className="block w-full h-full">
                Go to my Donor Dashboard
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
export default DonationForm
