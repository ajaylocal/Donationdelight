"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
const campaign = {
  name: "Help Fund Our New Community Library",
  goal: 25000,
  raised: 16167.52,
  donations: 145,
  donors: 145,
  revenue: [500, 1200, 800, 1500, 900, 1200, 1000, 1400, 1100, 1300],
};
export default function SettingsPage() {
  return (
    <div className="min-h-screen p-0">
        <div className="mb-6">
          <div className="flex items-center mb-4">
              <span className="text-sm text-gray-500">Campaigns &gt; </span>
              <span className="font-semibold ml-1">{campaign.name}</span>
              <span className="ml-2 px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Active</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-2 mb-2">
              <Link href="./overview">
                <Button variant="outline">Overview</Button>
              </Link>
             <Link href="./settings">
                <Button className={"" + (true ? "bg-green-100 text-green-700" : "") + ""} variant="outline">Settings</Button>
            </Link>
              <Link href="./forms">
                <Button variant="outline">Forms</Button>
              </Link>
            </div>
          </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-green-700">Campaign Settings</h1>
        <p className="text-green-700">Update your campaign details, goal, and theme.</p>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <Card className="p-8 bg-green-50 rounded-xl shadow-sm border border-green-100">
          <h2 className="font-semibold mb-4 text-lg text-green-700">Campaign Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">What's the title of your campaign?</label>
              <Input defaultValue="Help Fund Our New Community Library" className="bg-white border-green-200" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">What's your campaign about?</label>
              <Textarea rows={3} placeholder="Let your donors know the story behind your campaign." className="bg-white border-green-200" />
              <div className="text-xs text-green-600 mt-1">This will be displayed in your campaign block and campaign grid.</div>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1 text-green-700">Add a cover image for your campaign</label>
            <div className="flex items-center gap-4">
              <img src="/placeholder.jpg" alt="cover" className="h-32 w-64 object-cover rounded border border-green-200" />
              <div className="flex flex-col gap-2">
                <Button variant="destructive">Remove cover</Button>
                <Button variant="outline" className="border-green-200 text-green-700">Change cover</Button>
              </div>
            </div>
            <div className="text-xs text-green-600 mt-1">This will be displayed in your campaign block and campaign grid.</div>
          </div>
        </Card>
        <Card className="p-8 bg-green-50 rounded-xl shadow-sm border border-green-100">
          <h2 className="font-semibold mb-4 text-lg text-green-700">Campaign Goal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">Set the details of your campaign goal here.</label>
              <select className="w-full border rounded px-3 py-2 text-sm border-green-200 bg-white text-green-700">
                <option>Amount raised</option>
              </select>
              <div className="text-xs text-green-600 mt-1">Your goal progress is measured by the total amount of funds raised e.g. $500.00 of $1,000.00 raised.</div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">How much do you want to raise?</label>
              <Input defaultValue="$25,000" className="bg-white border-green-200" />
              <div className="text-xs text-green-600 mt-1">Set the target amount for your campaign to raise.</div>
            </div>
          </div>
        </Card>
        <Card className="p-8 bg-green-50 rounded-xl shadow-sm border border-green-100">
          <h2 className="font-semibold mb-4 text-lg text-green-700">Campaign Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-green-700">Select your preferred primary color</label>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-6 h-6 rounded bg-green-500 border border-green-200" />
                <Button variant="outline" className="border-green-200 text-green-700">Edit</Button>
              </div>
              <label className="block text-sm font-medium mb-1 text-green-700">Select your preferred secondary color</label>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-6 rounded bg-orange-400 border border-green-200" />
                <Button variant="outline" className="border-green-200 text-green-700">Edit</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
