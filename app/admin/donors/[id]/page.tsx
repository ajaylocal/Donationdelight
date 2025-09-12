"use client";
import { useState } from "react";
import { Line } from "../../reports/ChartLoader";

const donor = {
  name: "Amanda White",
  email: "amanda.white122@mail.com",
  total: 100,
  highest: 100,
  average: 100,
  donations: 1,
  since: "Aug 4, 2025",
  last: "about 1 month ago",
  firstAmount: 100,
  firstDate: "Jul 18, 2025",
  type: "One-time",
  method: "Test Donation",
  transactions: [
    { date: "Jul 19, 2025", amount: 100 },
  ],
  contributions: [
    { date: "Jul 16, 2025", amount: 0 },
    { date: "Jul 17, 2025", amount: 0 },
    { date: "Jul 18, 2025", amount: 0 },
    { date: "Jul 19, 2025", amount: 100 },
    { date: "Jul 20, 2025", amount: 0 },
    { date: "Jul 21, 2025", amount: 0 },
  ],
};

const TABS = ["Overview", "Profile"];

export default function DonorSinglePage() {
  const [tab, setTab] = useState("Overview");
  const chartData = {
    labels: donor.contributions.map(c => c.date),
    datasets: [
      {
        label: "Contributions",
        data: donor.contributions.map(c => c.amount),
        fill: true,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.1)",
        tension: 0.4,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="p-8">
      <div className="mb-6 text-sm text-gray-500">
        Donors <span className="mx-2">›</span> <span className="text-gray-900 font-semibold">{donor.name}</span>
      </div>
      <h1 className="text-2xl font-bold mb-6">{donor.name}</h1>
      <div className="flex gap-8 border-b mb-8">
        {TABS.map(t => (
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded shadow p-6 flex flex-col items-center">
              <div className="text-gray-500 text-xs mb-1">Lifetime donations</div>
              <div className="text-2xl font-bold">${donor.total.toFixed(2)}</div>
            </div>
            <div className="bg-white rounded shadow p-6 flex flex-col items-center">
              <div className="text-gray-500 text-xs mb-1">Highest donation</div>
              <div className="text-2xl font-bold">${donor.highest.toFixed(2)}</div>
            </div>
            <div className="bg-white rounded shadow p-6 flex flex-col items-center">
              <div className="text-gray-500 text-xs mb-1">Average donation</div>
              <div className="text-2xl font-bold">${donor.average.toFixed(2)}</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded shadow p-6">
              <div className="font-semibold mb-2">Contributions</div>
              <div className="text-xs text-gray-500 mb-4">Shows the donor's contribution over time</div>
              <Line data={chartData} options={chartOptions} height={120} />
            </div>
            <div className="bg-white rounded shadow p-6">
              <div className="font-semibold mb-2">Summary</div>
              <div className="text-xs text-gray-500 mb-4">Additional information about the donor</div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between"><span>Donor Since</span><span>{donor.since}</span></div>
                <div className="flex justify-between"><span>Last Contributed</span><span>{donor.last}</span></div>
                <div className="flex justify-between"><span>First Contribution</span><span className="text-green-600 font-bold">${donor.firstAmount.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Date</span><span>{donor.firstDate}</span></div>
                <div className="flex justify-between"><span>Donor Type</span><span className="bg-gray-100 px-2 py-1 rounded text-xs">{donor.type}</span></div>
                <div className="flex justify-between"><span>Total Donations</span><span>{donor.donations}</span></div>
                <div className="flex justify-between"><span>Preferred Method</span><span>{donor.method}</span></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded shadow p-6 mt-8">
            <div className="font-semibold mb-2">Recent Transactions</div>
            <div className="text-xs text-gray-500 mb-4">Shows the five recent transactions</div>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {donor.transactions.map((tx, i) => (
                  <tr key={i}>
                    <td>{tx.date}</td>
                    <td className="text-green-600 font-bold">${tx.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 border px-4 py-2 rounded bg-gray-50">View All Transactions</button>
          </div>
        </>
      )}
      {tab === "Profile" && (
        <div className="bg-white rounded shadow p-6">
          <div className="font-semibold mb-4">Personal Details</div>
          <div className="flex items-center gap-6 mb-6">
            <span className="inline-block w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-4xl">&#128100;</span>
            <button className="border px-3 py-1 rounded">Upload photo</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Name</label>
              <div className="flex gap-2">
                <input type="text" className="border rounded px-2 py-1 w-full" value="Amanda" readOnly />
                <input type="text" className="border rounded px-2 py-1 w-full" value="White" readOnly />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Phone</label>
              <input type="text" className="border rounded px-2 py-1 w-full" value="(381) 882-8787" readOnly />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Company name</label>
              <input type="text" className="border rounded px-2 py-1 w-full" value="" readOnly />
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Address</div>
            <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">This donor does not have any address saved.</div>
            <button className="border px-3 py-1 rounded">Add address</button>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Email Address</div>
            <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">{donor.email}</div>
            <button className="border px-3 py-1 rounded">Add email</button>
          </div>
          <div>
            <div className="font-semibold mb-2">Custom Fields</div>
            <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">No custom fields added yet</div>
          </div>
        </div>
      )}
    </div>
  );
}
