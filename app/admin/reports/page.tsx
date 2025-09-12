"use client"
import { useState } from "react";
import { Bar } from "./ChartLoader";

const mockData = [
  { date: "Aug 02", revenue: 900, donations: 3 },
  { date: "Aug 04", revenue: 400, donations: 1 },
  { date: "Aug 06", revenue: 0, donations: 0 },
  { date: "Aug 08", revenue: 200, donations: 2 },
  { date: "Aug 10", revenue: 0, donations: 0 },
  { date: "Aug 12", revenue: 0, donations: 0 },
  { date: "Aug 14", revenue: 0, donations: 0 },
  { date: "Aug 16", revenue: 0, donations: 0 },
  { date: "Aug 18", revenue: 0, donations: 0 },
  { date: "Aug 20", revenue: 0, donations: 0 },
  { date: "Aug 22", revenue: 0, donations: 0 },
  { date: "Aug 24", revenue: 0, donations: 0 },
  { date: "Aug 26", revenue: 0, donations: 0 },
  { date: "Aug 28", revenue: 0, donations: 0 },
  { date: "Aug 30", revenue: 0, donations: 0 },
];

const REPORT_TABS = [
  "Revenue",
  "Forms",
  "Donation Methods",
  "Fees",
  "Tributes",
  "Renewal Donations",
  "New Reports Dashboard",
];

export default function ReportsPage() {
  const [filter, setFilter] = useState("Today");
  const [activeTab, setActiveTab] = useState("Revenue");
  const totalRevenue = mockData.reduce((sum, d) => sum + d.revenue, 0);
  const totalDonations = mockData.reduce((sum, d) => sum + d.donations, 0);

  // Chart data for Revenue tab
  const chartData = {
    labels: mockData.map(d => d.date),
    datasets: [
      {
        label: "Revenue",
        data: mockData.map(d => d.revenue),
        backgroundColor: "#22c55e",
        borderRadius: 4,
        barPercentage: 0.7,
      },
      {
        label: "Donations",
        data: mockData.map(d => d.donations * 200), // scale for visual
        backgroundColor: "#64748b",
        borderRadius: 4,
        barPercentage: 0.7,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' as const },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-green-600">&#x1F4C8;</span> Reports <span className="ml-2 text-gray-400">›</span> <span className="text-green-700">{activeTab}</span>
      </h1>
      {/* Tabs */}
      <div className="flex items-center border-b border-gray-200 mb-6">
        {REPORT_TABS.map(tab => (
          <button
            key={tab}
            className={`px-6 py-3 -mb-px font-medium border-b-2 ${activeTab === tab ? "border-green-500 text-green-700 bg-white" : "border-transparent text-gray-700 bg-gray-100"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded shadow p-6">
        {activeTab === "Revenue" && (
          <>
            <div className="flex items-center gap-4 mb-4">
              <select value={filter} onChange={e => setFilter(e.target.value)} className="border rounded px-2 py-1">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
              <button className="border px-3 py-1 rounded bg-gray-50">Filter</button>
            </div>
            {/* Chart */}
            <div className="mb-8">
              <Bar data={chartData} options={chartOptions} height={120} />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left mb-6">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Revenue</th>
                    <th>Donations</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, i) => (
                    <tr key={i}>
                      <td>{row.date}</td>
                      <td className="text-green-600 font-bold">${row.revenue.toLocaleString()}</td>
                      <td>{row.donations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-8 mt-4">
              <div>Total revenue for period: <span className="font-bold">${totalRevenue.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span></div>
              <div>Total donations for period: <span className="font-bold">{totalDonations}</span></div>
            </div>
            <button className="mt-6 border px-4 py-2 rounded bg-gray-50">Refresh Report Data</button>
          </>
        )}
        {activeTab !== "Revenue" && (
          <div className="text-gray-500 text-center py-16 text-lg">No data for this report type yet.</div>
        )}
      </div>
    </div>
  );
}
