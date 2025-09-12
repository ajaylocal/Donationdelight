"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Calendar, Heart, MapPin, DollarSign, Plus, X } from "lucide-react"

export default function EditFormPage() {
  const [formData, setFormData] = useState({
    organization: "charity-foundation",
    FormName: "",
    description: "",
    FormLocation: "",
    FormAddress: "",
    FormCountry: "",
    FormRegion: "",
    donationType: "fixed",
    fixedAmount: "",
    customAmount: "",
    minDonationAmount: "3",
    maxDonationAmount: "50000",
    maxRangeAmount: "500",
    disableDonationNotes: true,
    feeRecovery: true,
    directBankTransferFixed: "0.03",
    directBankTransferVariable: "4",
    creditCardFixed: "0",
    creditCardVariable: "0",
    payarcFixed: "0",
    payarcVariable: "0",
    fundraisingGoal: "0",
    endDate: "",
    amountLayout: "radio-button",
    amountSuggestions: ["5", "15", "20", "750", "1000", "1500"],
    frequencyLayout: "default",
    designateLayout: "default",
    additionalInfoLayout: "default",
    recurringType: "one-time",
    recurringInterval: "monthly",
    taxDeductible: true,
    receiptEmail: true,
    anonymousDonation: false,
    customImage: null as File | null,
    terms: "",
    showDonorName: "show",
    visibility: "public",
    availableFrom: "",
    availableUntil: "",
    goalAmount: "",
    maxDonationLimit: "1000",
  })

  const [newAmount, setNewAmount] = useState("")

  const handleInputChange = (field: string, value: string | File | null | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    handleInputChange("customImage", file)
  }

  const addAmountSuggestion = () => {
    if (newAmount && !formData.amountSuggestions.includes(newAmount)) {
      setFormData((prev) => ({
        ...prev,
        amountSuggestions: [...prev.amountSuggestions, newAmount],
      }))
      setNewAmount("")
    }
  }

  const removeAmountSuggestion = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      amountSuggestions: prev.amountSuggestions.filter((_, index) => index !== indexToRemove),
    }))
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Create Donation Form</h1>
          </div>
        </div>

        <form className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Choose Your Organization *</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="charity-foundation"
                  checked={formData.organization === "charity-foundation"}
                  onCheckedChange={(checked) => handleInputChange("organization", checked ? "charity-foundation" : "")}
                />
                <Label htmlFor="charity-foundation" className="text-sm font-medium">
                  Charity Foundation
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Form Details</CardTitle>
              <p className="text-sm text-muted-foreground">Describe your donation Form and its purpose:</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="Form-name" className="text-sm font-medium">
                  Form name
                </Label>
                <Input
                  id="Form-name"
                  placeholder="e.g. Help Build Clean Water Wells, Education Fund, etc..."
                  value={formData.FormName}
                  onChange={(e) => handleInputChange("FormName", e.target.value)}
                  className="bg-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="Form-description" className="text-sm font-medium">
                  Form description
                </Label>
                <Textarea
                  id="Form-description"
                  placeholder="Describe the purpose and impact of this donation Form..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="min-h-[100px] bg-input"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg text-primary">Form Place</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Specify where this Form will have its impact:</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="Form-location" className="text-sm font-medium">
                    Location/City
                  </Label>
                  <Input
                    id="Form-location"
                    placeholder="e.g. New York, Mumbai, Lagos..."
                    value={formData.FormLocation}
                    onChange={(e) => handleInputChange("FormLocation", e.target.value)}
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="Form-country" className="text-sm font-medium">
                    Country
                  </Label>
                  <Input
                    id="Form-country"
                    placeholder="e.g. United States, India, Nigeria..."
                    value={formData.FormCountry}
                    onChange={(e) => handleInputChange("FormCountry", e.target.value)}
                    className="bg-input"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="Form-address" className="text-sm font-medium">
                  Specific Address (Optional)
                </Label>
                <Input
                  id="Form-address"
                  placeholder="Street address, building, or specific location details..."
                  value={formData.FormAddress}
                  onChange={(e) => handleInputChange("FormAddress", e.target.value)}
                  className="bg-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="Form-region" className="text-sm font-medium">
                  Region/State (Optional)
                </Label>
                <Input
                  id="Form-region"
                  placeholder="e.g. California, Maharashtra, Lagos State..."
                  value={formData.FormRegion}
                  onChange={(e) => handleInputChange("FormRegion", e.target.value)}
                  className="bg-input"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg text-primary">Donation Configuration</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">Configure donation amounts, fees, and layout options:</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Donation Amount Limits */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Donation Amount Limits</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-donation" className="text-sm font-medium">
                      Minimum Donation amount
                    </Label>
                    <Input
                      id="min-donation"
                      value={formData.minDonationAmount}
                      onChange={(e) => handleInputChange("minDonationAmount", e.target.value)}
                      className="bg-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-donation" className="text-sm font-medium">
                      Maximum Donation amount
                    </Label>
                    <Input
                      id="max-donation"
                      value={formData.maxDonationAmount}
                      onChange={(e) => handleInputChange("maxDonationAmount", e.target.value)}
                      className="bg-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-range" className="text-sm font-medium">
                      Maximum Amount for range input
                    </Label>
                    <Input
                      id="max-range"
                      value={formData.maxRangeAmount}
                      onChange={(e) => handleInputChange("maxRangeAmount", e.target.value)}
                      className="bg-input"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Donation Options */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Donation Options</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="disable-notes"
                      checked={formData.disableDonationNotes}
                      onCheckedChange={(checked) => handleInputChange("disableDonationNotes", checked)}
                    />
                    <Label htmlFor="disable-notes" className="text-sm font-medium">
                      Enable to disable notes on checkout
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fee-recovery"
                      checked={formData.feeRecovery}
                      onCheckedChange={(checked) => handleInputChange("feeRecovery", checked)}
                    />
                    <Label htmlFor="fee-recovery" className="text-sm font-medium">
                      Ask donors to cover transaction fees
                    </Label>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Transaction Fees */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Transaction Costs</h4>
                <p className="text-xs text-muted-foreground">
                  Enter the fixed transaction costs in the left field and the percentage transaction costs in the right
                  field.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Label className="text-sm w-40">Direct bank transfer</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">$</span>
                      <Input
                        value={formData.directBankTransferFixed}
                        onChange={(e) => handleInputChange("directBankTransferFixed", e.target.value)}
                        className="w-20 bg-input"
                      />
                      <span className="text-xs text-muted-foreground">(fixed)</span>
                      <Input
                        value={formData.directBankTransferVariable}
                        onChange={(e) => handleInputChange("directBankTransferVariable", e.target.value)}
                        className="w-20 bg-input"
                      />
                      <span className="text-xs text-muted-foreground">% (variable)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Label className="text-sm w-40">Credit Card</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">$</span>
                      <Input
                        value={formData.creditCardFixed}
                        onChange={(e) => handleInputChange("creditCardFixed", e.target.value)}
                        className="w-20 bg-input"
                      />
                      <span className="text-xs text-muted-foreground">(fixed)</span>
                      <Input
                        value={formData.creditCardVariable}
                        onChange={(e) => handleInputChange("creditCardVariable", e.target.value)}
                        className="w-20 bg-input"
                      />
                      <span className="text-xs text-muted-foreground">% (variable)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Label className="text-sm w-40">Payarc Hosted Checkout</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">$</span>
                      <Input
                        value={formData.payarcFixed}
                        onChange={(e) => handleInputChange("payarcFixed", e.target.value)}
                        className="w-20 bg-input"
                      />
                      <span className="text-xs text-muted-foreground">(fixed)</span>
                      <Input
                        value={formData.payarcVariable}
                        onChange={(e) => handleInputChange("payarcVariable", e.target.value)}
                        className="w-20 bg-input"
                      />
                      <span className="text-xs text-muted-foreground">% (variable)</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Form Goals and Timeline */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Form Goals & Timeline</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fundraising-goal" className="text-sm font-medium">
                      Fundraising Goal
                    </Label>
                    <Input
                      id="fundraising-goal"
                      value={formData.fundraisingGoal}
                      onChange={(e) => handleInputChange("fundraisingGoal", e.target.value)}
                      className="bg-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date" className="text-sm font-medium">
                      End Date
                    </Label>
                    <Input
                      id="end-date"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange("endDate", e.target.value)}
                      className="bg-input"
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Please note: You can still donate to the project after reaching the fundraising goal or end date.
                </p>
              </div>

              <Separator />

              {/* Layout Configuration */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Layout Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Layout of Amount suggestions</Label>
                    <Select
                      value={formData.amountLayout}
                      onValueChange={(value) => handleInputChange("amountLayout", value)}
                    >
                      <SelectTrigger className="bg-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="radio-button">Radio/button selection</SelectItem>
                        <SelectItem value="dropdown">Dropdown selection</SelectItem>
                        <SelectItem value="grid">Grid layout</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Layout of donation-frequency</Label>
                    <Select
                      value={formData.frequencyLayout}
                      onValueChange={(value) => handleInputChange("frequencyLayout", value)}
                    >
                      <SelectTrigger className="bg-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default layout</SelectItem>
                        <SelectItem value="inline">Inline layout</SelectItem>
                        <SelectItem value="stacked">Stacked layout</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Layout of Designate to</Label>
                    <Select
                      value={formData.designateLayout}
                      onValueChange={(value) => handleInputChange("designateLayout", value)}
                    >
                      <SelectTrigger className="bg-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default layout</SelectItem>
                        <SelectItem value="card">Card layout</SelectItem>
                        <SelectItem value="list">List layout</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Layout of Additional Information</Label>
                    <Select
                      value={formData.additionalInfoLayout}
                      onValueChange={(value) => handleInputChange("additionalInfoLayout", value)}
                    >
                      <SelectTrigger className="bg-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default layout</SelectItem>
                        <SelectItem value="accordion">Accordion layout</SelectItem>
                        <SelectItem value="tabs">Tabs layout</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Amount Suggestions */}
              <div className="space-y-4">
                <Label className="text-sm font-medium">Amount Suggestions</Label>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {formData.amountSuggestions.map((amount, index) => (
                      <div key={index} className="flex items-center gap-1 bg-muted px-3 py-2 rounded-lg">
                        <span className="text-sm font-medium">${amount}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeAmountSuggestion(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter amount (e.g., 25)"
                      value={newAmount}
                      onChange={(e) => setNewAmount(e.target.value)}
                      className="bg-input flex-1"
                      type="number"
                      min="1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addAmountSuggestion}
                      className="flex items-center gap-1 bg-transparent"
                    >
                      <Plus className="h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Donation range: Min: ${formData.minDonationAmount}.00, Max: ${formData.maxDonationAmount}.00
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Donation Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={formData.donationType}
                onValueChange={(value) => handleInputChange("donationType", value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed" id="fixed-amount" />
                  <Label htmlFor="fixed-amount" className="text-sm font-medium">
                    Fixed donation amount
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="custom-amount" />
                  <Label htmlFor="custom-amount" className="text-sm font-medium">
                    Allow custom donation amounts
                  </Label>
                </div>
              </RadioGroup>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Suggested amount ($)</Label>
                  <Input
                    placeholder="25.00"
                    value={formData.fixedAmount}
                    onChange={(e) => handleInputChange("fixedAmount", e.target.value)}
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Goal amount ($)</Label>
                  <Input
                    placeholder="10000.00"
                    value={formData.goalAmount}
                    onChange={(e) => handleInputChange("goalAmount", e.target.value)}
                    className="bg-input"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-medium">Donation frequency:</Label>
                <RadioGroup
                  value={formData.recurringType}
                  onValueChange={(value) => handleInputChange("recurringType", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time" className="text-sm">
                      One-time donation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recurring" id="recurring" />
                    <Label htmlFor="recurring" className="text-sm">
                      Recurring donation
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Donation Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="tax-deductible"
                    checked={formData.taxDeductible}
                    onCheckedChange={(checked) => handleInputChange("taxDeductible", checked)}
                  />
                  <Label htmlFor="tax-deductible" className="text-sm font-medium">
                    Tax deductible donation
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="receipt-email"
                    checked={formData.receiptEmail}
                    onCheckedChange={(checked) => handleInputChange("receiptEmail", checked)}
                  />
                  <Label htmlFor="receipt-email" className="text-sm font-medium">
                    Send email receipt automatically
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="anonymous-donation"
                    checked={formData.anonymousDonation}
                    onCheckedChange={(checked) => handleInputChange("anonymousDonation", checked)}
                  />
                  <Label htmlFor="anonymous-donation" className="text-sm font-medium">
                    Allow anonymous donations
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Form Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <img
                    src="/colorful-food-dish-with-vegetables.jpg"
                    alt="Sample Form image"
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload a compelling image that represents your donation Form and its impact.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <span className="text-sm text-accent hover:text-accent/80">Choose file</span>
                      <span className="text-sm text-muted-foreground"> No file chosen</span>
                    </Label>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      (must be a PNG/JPG/GIF, recommended 1200px x 630px)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Terms & conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Additional terms when customers donate to this Form..."
                value={formData.terms}
                onChange={(e) => handleInputChange("terms", e.target.value)}
                className="min-h-[100px] bg-input"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Donor Privacy Settings</CardTitle>
              <p className="text-sm text-muted-foreground">
                Configure how donor information is displayed on your Form page.
              </p>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.showDonorName}
                onValueChange={(value) => handleInputChange("showDonorName", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="show" id="show-donor" />
                  <Label htmlFor="show-donor" className="text-sm">
                    Show donor names publicly
                  </Label>
                  <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">Default</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="initials" id="show-initials" />
                  <Label htmlFor="show-initials" className="text-sm">
                    Show initials only
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="anonymous" id="hide-donor" />
                  <Label htmlFor="hide-donor" className="text-sm">
                    Keep all donations anonymous
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-primary">Form Visibility & Limits</CardTitle>
              <p className="text-sm text-muted-foreground">
                Configure when your donation Form is active and set donation limits.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={formData.visibility} onValueChange={(value) => handleInputChange("visibility", value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public-Form" />
                  <Label htmlFor="public-Form" className="text-sm font-medium">
                    Public: visible on your donation page
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="private-Form" />
                  <Label htmlFor="private-Form" className="text-sm font-medium">
                    Private: accessible only via direct link
                  </Label>
                </div>
              </RadioGroup>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Form start date</Label>
                  <div className="relative">
                    <Input
                      type="date"
                      value={formData.availableFrom}
                      onChange={(e) => handleInputChange("availableFrom", e.target.value)}
                      className="bg-input"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Form end date</Label>
                  <div className="relative">
                    <Input
                      type="date"
                      value={formData.availableUntil}
                      onChange={(e) => handleInputChange("availableUntil", e.target.value)}
                      className="bg-input"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Goal amount ($)</Label>
                  <Input
                    placeholder="No limit"
                    value={formData.goalAmount}
                    onChange={(e) => handleInputChange("goalAmount", e.target.value)}
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Maximum donation per person ($)</Label>
                  <Input
                    value={formData.maxDonationLimit}
                    onChange={(e) => handleInputChange("maxDonationLimit", e.target.value)}
                    className="bg-input"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button type="button" variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-500 hover:bg-green-600 text-white">
              Create Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}