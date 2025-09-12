"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateCampaignPage() {
  const [goalType, setGoalType] = useState("amount");

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 bg-white rounded-xl shadow-sm border border-green-100">
          <h1 className="text-2xl font-bold mb-6 text-green-700">Create a New Campaign</h1>
          <form className="space-y-8">
            {/* Campaign Title & Description */}
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">What's the title of your campaign? <span className="text-red-500">*</span></label>
              <Input required placeholder="Give your campaign a title that tells donors what it's about." className="bg-white border-green-200 mb-4" />
              <label className="block text-sm font-medium mb-1 text-green-700">What's your campaign about?</label>
              <Textarea rows={3} placeholder="Let your donors know the story behind your campaign." className="bg-white border-green-200" />
            </div>
            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">Add a cover image for your campaign</label>
              <div className="flex items-center gap-4">
                <img src="/placeholder.jpg" alt="cover" className="h-32 w-64 object-cover rounded border border-green-200" />
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="border-green-200 text-green-700">Upload image</Button>
                  <Button variant="destructive">Remove image</Button>
                </div>
              </div>
            </div>
            {/* Campaign Goal */}
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">Set up your campaign goal</label>
              <select value={goalType} onChange={e => setGoalType(e.target.value)} className="w-full border rounded px-3 py-2 text-sm border-green-200 bg-white text-green-700 mb-4">
                <option value="amount">Amount raised</option>
                <option value="donations">Number of donations</option>
                <option value="donors">Number of donors</option>
                <option value="recurring-amount">Recurring amount raised</option>
                <option value="recurring-donations">Number of recurring donations</option>
                <option value="recurring-donors">Number of recurring donors</option>
              </select>
              {goalType === "amount" && (
                <div className="mb-2 text-xs text-green-600">Your goal progress is measured by the total amount of funds raised eg. $500.00 of $1,000.00 raised.</div>
              )}
              {goalType === "donations" && (
                <div className="mb-2 text-xs text-green-600">Your goal progress is measured by the number of donations.</div>
              )}
              {goalType === "donors" && (
                <div className="mb-2 text-xs text-green-600">Your goal progress is measured by the number of donors. eg. 10 of 50 donors have given.</div>
              )}
              {goalType === "recurring-amount" && (
                <div className="mb-2 text-xs text-green-600">Only the first donation amount of a recurring donation is counted toward the goal.</div>
              )}
              {goalType === "recurring-donations" && (
                <div className="mb-2 text-xs text-green-600">Only the first donation of a recurring donation is counted toward the goal.</div>
              )}
              {goalType === "recurring-donors" && (
                <div className="mb-2 text-xs text-green-600">Only the donors that subscribed to a recurring donation are counted toward the goal.</div>
              )}
              {/* Goal Value Input */}
              <label className="block text-sm font-medium mb-1 text-green-700">How many {goalType.replace(/-/g, ' ')}? <span className="text-red-500">*</span></label>
              <Input required placeholder={`Set the target number for your campaign (${goalType.replace(/-/g, ' ')}).`} className="bg-white border-green-200" />
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">Create Campaign</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}