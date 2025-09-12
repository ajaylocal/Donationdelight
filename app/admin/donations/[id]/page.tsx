"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const donation = {
  id: 1176,
  amount: 100.0,
  status: "Completed",
  test: true,
  createdAt: "19th July 2025, 12:53 am",
  donor: {
    name: "Amanda White",
    email: "amanda.white122@mail.com",
    address: "9466 Main St, San Jose, NC 56605, US",
  },
  campaign: "Mother's Day",
  paymentType: "One-time",
  gateway: "Test Donation",
  fee: 0.0,
  notes: [],
};

export default function DonationSinglePage() {
  const [tab, setTab] = useState("overview");
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-lg font-semibold mb-2">
        <span>Donations</span>
        <span className="text-gray-400">&gt;</span>
        <span className="text-blue-700">#{donation.id}</span>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-3xl font-bold">${donation.amount.toFixed(2)}</span>
        <Badge variant="secondary">{donation.status}</Badge>
        {donation.test && (
          <Badge className="bg-orange-100 text-orange-700 border-none">Test Donation</Badge>
        )}
      </div>
      <div className="border-b flex gap-8 mb-6">
        <button
          className={`py-2 px-4 border-b-2 transition-all ${tab === "overview" ? "border-blue-600 text-blue-700 font-semibold" : "border-transparent text-gray-500"}`}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 border-b-2 transition-all ${tab === "records" ? "border-blue-600 text-blue-700 font-semibold" : "border-transparent text-gray-500"}`}
          onClick={() => setTab("records")}
        >
          Records
        </button>
      </div>
      {tab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-2">
                <span className="text-gray-500 font-medium">Donation amount</span>
                <span className="text-3xl font-bold">${donation.amount.toFixed(2)}</span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-2">
                <span className="text-gray-500 font-medium">Fees recovered</span>
                <span className="text-3xl font-bold">${donation.fee.toFixed(2)}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Campaign name</span>
                  <div className="text-blue-700 font-semibold text-lg">{donation.campaign}</div>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Associated donor</span>
                  <div className="font-semibold text-blue-700">{donation.donor.name}</div>
                  <div className="text-gray-500 text-sm">{donation.donor.email}</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Donation info</span>
                  <div className="font-semibold text-lg">{donation.createdAt}</div>
                  <Badge variant="outline" className="mt-2">{donation.paymentType}</Badge>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Gateway</span>
                  <div className="font-semibold">{donation.gateway}</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-4">
              <span className="font-semibold">Private Note</span>
              <span className="text-gray-500 text-sm">This note will be seen by only admins</span>
              <div className="flex flex-col items-center justify-center py-8">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#F3F4F6"/><path d="M8 9h8M8 13h6m-7 6h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-gray-400 mt-2">No notes yet</span>
              </div>
              <div className="flex justify-end">
                <Button variant="outline">Add note</Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <div className="bg-gray-700 text-white rounded-lg p-6 shadow-sm">
              <div className="font-semibold text-lg mb-1">{donation.campaign}</div>
              <div className="text-xs mb-4">Below is a detailed breakdown of this donation.</div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between"><span>Donation amount</span><span>${donation.amount.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Fee Recovered</span><span>${donation.fee.toFixed(2)}</span></div>
                <div className="border-t border-gray-500 my-2"></div>
                <div className="flex justify-between font-bold text-base"><span>Total</span><span>${donation.amount.toFixed(2)}</span></div>
              </div>
              <div className="mt-4 text-xs">
                <div className="font-semibold mb-1">Billing information</div>
                <div>{donation.donor.name} ({donation.donor.email})</div>
                <div>{donation.donor.address}</div>
              </div>
            </div>
            <Button className="w-full mt-2">Resend receipt</Button>
          </div>
        </div>
      )}
      {tab === "records" && (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="mb-8">
            <div className="text-lg font-semibold mb-2">Donation details</div>
            <div className="text-gray-500 text-sm mb-4">This includes the donation information</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label className="font-medium">Amount</label>
                <input className="input border rounded px-3 py-2" type="number" value={donation.amount} readOnly />
                <label className="font-medium">Donation date and time</label>
                <input className="input border rounded px-3 py-2" type="text" value="19-07-2025 00:53" readOnly />
                <label className="font-medium">Campaign</label>
                <input className="input border rounded px-3 py-2" type="text" value={donation.campaign} readOnly />
                <label className="font-medium">Donor comment</label>
                <input className="input border rounded px-3 py-2" type="text" placeholder="Add a comment" />
                <label className="font-medium">Company</label>
                <input className="input border rounded px-3 py-2" type="text" placeholder="Enter company" />
                <label className="font-medium">Phone</label>
                <input className="input border rounded px-3 py-2" type="tel" placeholder="+1 (555) 882-8787" />
                <label className="font-medium">Anonymous donation</label>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center gap-1"><input type="radio" name="anon" /> Yes</label>
                  <label className="flex items-center gap-1"><input type="radio" name="anon" defaultChecked /> No</label>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium">Status</label>
                <select className="input border rounded px-3 py-2">
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </select>
                <label className="font-medium">Form</label>
                <input className="input border rounded px-3 py-2" type="text" value={donation.campaign} readOnly />
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">Billing details</div>
            <div className="text-gray-500 text-sm mb-4">This includes the billing name, email and address</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label className="font-medium">First name</label>
                <input className="input border rounded px-3 py-2" type="text" value="Amanda" readOnly />
                <label className="font-medium">Email</label>
                <input className="input border rounded px-3 py-2" type="email" value="amanda.white122@mail.com" readOnly />
                <label className="font-medium">Country</label>
                <input className="input border rounded px-3 py-2" type="text" value="United States" readOnly />
                <label className="font-medium">Address 1</label>
                <input className="input border rounded px-3 py-2" type="text" value="9466 Main St" readOnly />
                <label className="font-medium">City</label>
                <input className="input border rounded px-3 py-2" type="text" value="San Jose" readOnly />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-medium">Last name</label>
                <input className="input border rounded px-3 py-2" type="text" value="White" readOnly />
                <label className="font-medium">Address 2</label>
                <input className="input border rounded px-3 py-2" type="text" value="" readOnly />
                <label className="font-medium">State</label>
                <input className="input border rounded px-3 py-2" type="text" value="North Carolina" readOnly />
                <label className="font-medium">Zip/Postal code</label>
                <input className="input border rounded px-3 py-2" type="text" value="56605" readOnly />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
