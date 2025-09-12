"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
const campaign = {
  name: "Help Fund Our New Community Library",
  goal: 25000,
  raised: 16167.52,
  donations: 145,
  donors: 145,
  revenue: [500, 1200, 800, 1500, 900, 1200, 1000, 1400, 1100, 1300],
};
const periods = ["Today", "Last 7 days", "Last 30 days", "Last 90 days", "All-time"];
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const revenueData = {
  labels: [
    "01 Jul", "04 Jul", "08 Jul", "12 Jul", "16 Jul", "20 Jul", "24 Jul", "28 Jul", "01 Aug", "05 Aug"
  ],
  datasets: [
    {
      label: "Revenue",
      data: campaign.revenue,
      fill: true,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "#3b82f6",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const revenueOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#64748b" },
    },
    y: {
      grid: { color: "#e5e7eb" },
      ticks: { color: "#64748b", callback: (v:any) => `$${v.toLocaleString()}.00` },
      beginAtZero: true,
      min: 0,
      max: 1500,
    },
  },
};

export default function OverviewPage() {
  const [period, setPeriod] = useState("All-time");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");
  const [customApplied, setCustomApplied] = useState(false);
  const [tab, setTab] = useState("overview");
  const percent = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <div className="min-h-screen bg-gray-50 p-0">
        <div className="mb-6">
            <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500">Campaigns &gt; </span>
                <span className="font-semibold ml-1">{campaign.name}</span>
                <span className="ml-2 px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Active</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex gap-2 mb-2">
                <Link href="./overview">
                  <Button className={"" + (true ? "bg-green-100 text-green-700" : "") + ""} variant="outline">Overview</Button>
                </Link>
              <Link href="./settings">
                  <Button variant="outline">Settings</Button>
              </Link>
                <Link href="./forms">
                  <Button variant="outline">Forms</Button>
                </Link>
              </div>
            </div>
        </div>
        <div>
            <div className="flex justify-end mb-6 border-b pb-2">
              <div className="flex gap-6 items-center">
                {periods.map((p) => (
                  <button
                    key={p}
                    className={`px-4 py-2 font-medium border-b-2 transition-colors ${period === p ? "border-green-600 text-green-700" : "border-transparent text-gray-600 hover:text-green-700"}`}
                    onClick={() => { setPeriod(p); setCustomApplied(false); }}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${period === "Custom Range" ? "border-green-600 text-green-700" : "border-transparent text-gray-600 hover:text-green-700"}`}
                  onClick={() => { setPeriod("Custom Range"); setCustomApplied(false); }}
                >
                  Custom Range
                </button>
                {period === "Custom Range" && (
                  <div className="flex items-center gap-2 ml-4">
                    <input
                      type="date"
                      value={customStart}
                      onChange={e => setCustomStart(e.target.value)}
                      className="border rounded px-2 py-1 text-sm"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="date"
                      value={customEnd}
                      onChange={e => setCustomEnd(e.target.value)}
                      className="border rounded px-2 py-1 text-sm"
                    />
                    <Button
                      variant="outline"
                      className="ml-2"
                      disabled={!customStart || !customEnd}
                      onClick={() => setCustomApplied(true)}
                    >
                      Apply
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl shadow-sm p-8 border border-green-100">
                <div className="text-sm text-gray-600 mb-1">Amount raised</div>
                <div className="text-3xl font-bold text-gray-900">${campaign.raised.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">total for all-time</div>
              </div>
              <div className="bg-green-50 rounded-xl shadow-sm p-8 border border-green-100">
                <div className="text-sm text-gray-600 mb-1">Number of donations</div>
                <div className="text-3xl font-bold text-gray-900">{campaign.donations}</div>
                <div className="text-xs text-gray-500 mt-1">total for all-time</div>
              </div>
              <div className="bg-green-50 rounded-xl shadow-sm p-8 border border-green-100">
                <div className="text-sm text-gray-600 mb-1">Number of donors</div>
                <div className="text-3xl font-bold text-gray-900">{campaign.donors}</div>
                <div className="text-xs text-gray-500 mt-1">total for all-time</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl shadow-sm p-8 border border-green-100">
                <div className="font-semibold mb-2 text-gray-900">Revenue</div>
                <div className="text-sm text-gray-600 mb-4">This graph shows revenue for the campaign over its lifetime.</div>
                <div className="bg-white rounded-lg p-4">
                  <Line data={revenueData} options={revenueOptions} height={320} />
                </div>
              </div>
              <div className="bg-green-50 rounded-xl shadow-sm p-8 border border-green-100 flex flex-col justify-between">
                <div>
                  <div className="font-semibold mb-2 text-gray-900">Goal progress</div>
                  <div className="text-sm text-gray-600 mb-4">This chart shows your campaign goal progress.</div>
                  <div className="flex items-center gap-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="54" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                        <circle cx="60" cy="60" r="54" stroke="#22c55e" strokeWidth="12" fill="none" strokeDasharray={2 * Math.PI * 54} strokeDashoffset={2 * Math.PI * 54 * (1 - percent / 100)} />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">{percent}%</span>
                        <span className="text-xs text-gray-600">${campaign.raised.toLocaleString()}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700">Goal</div>
                      <div className="text-2xl font-bold text-gray-900">${campaign.goal.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Amount raised</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl shadow-sm p-8 border border-green-100">
              <div className="font-semibold mb-2 text-gray-900">Default campaign form</div>
              <div className="text-sm text-gray-600">Your campaign page and blocks will collect donations through this form by default.</div>
            </div>
          </div>
     </div>
  );
}
