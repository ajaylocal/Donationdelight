"use client";
import { useState } from "react";

export default function SubscriptionDetailsPage() {
  // Example data (replace with real data as needed)
  const subscription = {
    amount: 147,
    interval: "month",
    status: "Active",
    test: true,
    totalContribution: 588,
    paymentsCompleted: 4,
    paymentsTotal: "∞",
    campaign: "Bright Futures",
    nextPayment: "7th September 2025, 7:52 pm",
    unlimited: true,
    donor: {
      name: "Susan Clark",
      email: "susan.clark198@mail.com",
    },
    gateway: "Test Donation",
    projectedAnnualRevenue: 1176,
    projectedPercent: 50,
    startDate: "7th May, 2025",
    endDate: "Ongoing",
    donationForm: "Donation Form",
    renewal: 147,
    notes: [],
  };

  const [tab, setTab] = useState("Overview");

  // Example donations data
  const donations = [
    { id: 480, type: "Renewal", campaign: "Bright Futures", date: "08/07/2025 at 7:52 pm", status: "Completed", amount: 147 },
    { id: 479, type: "Renewal", campaign: "Bright Futures", date: "07/07/2025 at 7:52 pm", status: "Completed", amount: 147 },
    { id: 478, type: "Renewal", campaign: "Bright Futures", date: "06/07/2025 at 7:52 pm", status: "Completed", amount: 147 },
    { id: 477, type: "Initial donation", campaign: "Bright Futures", date: "05/07/2025 at 7:52 pm", status: "Completed", amount: 147 },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-6 flex items-center gap-4">
        <span className="text-3xl font-bold">${subscription.amount.toFixed(2)}</span>
        <span className="text-lg text-gray-600">every {subscription.interval}</span>
        <span className={`px-3 py-1 rounded text-xs font-semibold ${subscription.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}>{subscription.status}</span>
        {subscription.test && <span className="px-3 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700">Test Subscription</span>}
        <button className="ml-auto px-4 py-2 border rounded bg-white">Sync subscription</button>
        <button className="px-4 py-2 border rounded bg-white">Save changes</button>
      </div>
      <div className="flex gap-8 border-b mb-8">
        {["Overview", "Donations", "Records"].map((t) => (
          <button
            key={t}
            className={`px-6 py-3 -mb-px font-medium border-b-2 ${tab === t ? "border-green-500 text-green-700 bg-white" : "border-transparent text-gray-700 bg-gray-100"}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "Overview" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded shadow p-6 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total contribution so far</div>
                  <div className="text-2xl font-bold">${subscription.totalContribution.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Payments completed</div>
                  <div className="text-2xl font-bold">{subscription.paymentsCompleted} / {subscription.paymentsTotal}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">Campaign name</div>
                  <div className="font-semibold">{subscription.campaign}</div>
                </div>
                <div className="bg-gray-50 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">Next payment</div>
                  <div className="font-semibold">{subscription.nextPayment}</div>
                  {subscription.unlimited && <span className="mt-2 inline-block px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">Unlimited</span>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">Associated donor</div>
                  <div className="font-semibold text-blue-700">{subscription.donor.name}</div>
                  <div className="text-xs text-gray-500">{subscription.donor.email}</div>
                </div>
                <div className="bg-gray-50 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">Gateway</div>
                  <div className="font-semibold">{subscription.gateway}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded shadow p-6 flex flex-col gap-6">
              <div className="font-semibold mb-2">Projected Annual Revenue</div>
              <div className="flex items-center gap-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                    <circle cx="50" cy="50" r="45" stroke="#22c55e" strokeWidth="10" fill="none" strokeDasharray="282.74" strokeDashoffset="141.37" />
                  </svg>
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{subscription.projectedPercent}%</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Estimated contribution</div>
                  <div className="text-green-600 font-bold text-xl">${subscription.projectedAnnualRevenue.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded shadow p-6">
              <div className="font-semibold mb-2">Private Note</div>
              <div className="text-xs text-gray-500 mb-4">This note will be seen by only admins</div>
              <div className="min-h-[60px] flex items-center justify-center text-gray-400">
                No notes yet
              </div>
              <button className="mt-4 px-4 py-2 border rounded bg-gray-50">Add note</button>
            </div>
            <div className="bg-white rounded shadow p-6 col-span-2">
              <div className="font-semibold mb-2">Summary</div>
              <div className="text-xs text-gray-500 mb-4">Information about the initial recurring donation</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between"><span>Start date</span><span>{subscription.startDate}</span></div>
                  <div className="flex justify-between"><span>End date</span><span>{subscription.endDate}</span></div>
                  <div className="flex justify-between"><span>Donation form</span><span className="text-blue-700 underline cursor-pointer">{subscription.donationForm}</span></div>
                  <div className="flex justify-between"><span>Renewal</span><span className="text-green-600 font-bold">${subscription.renewal.toFixed(2)}</span></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {tab === "Donations" && (
        <div className="bg-white rounded shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-lg">Donations</div>
            <button className="border px-4 py-2 rounded">Add renewal</button>
          </div>
          <div className="text-xs text-gray-500 mb-4">Show all recurring donations under this subscription.</div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Campaign</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d.id}>
                  <td><span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">#{d.id}</span></td>
                  <td><span className="border px-3 py-1 rounded-full text-xs">{d.type}</span></td>
                  <td className="text-blue-700 underline cursor-pointer">{d.campaign}</td>
                  <td>{d.date}</td>
                  <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">{d.status}</span></td>
                  <td className="font-bold">${d.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-xs text-gray-500">{donations.length} RESULTS</div>
        </div>
      )}
      {tab === "Records" && (
        <div className="bg-white rounded shadow p-6 flex flex-col items-center justify-center min-h-[200px]">
          <div className="text-4xl text-gray-400 mb-2">&#128196;</div>
          <div className="text-gray-500">No records found</div>
        </div>
      )}
      <div className="text-xs text-gray-500 mt-8">If you like GiveWP please leave us a ★★★★★ rating. It takes a minute and helps a lot. Thanks in advance!</div>
    </div>
  );
}
