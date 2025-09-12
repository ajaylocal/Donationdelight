"use client";
import React from "react";
import Link from "next/link";
import { sl } from "date-fns/locale";
const campaignspage= {
    slug:"capaign-grid"
  }
const campaign = {
  title: "Help Fund Our New Community Library",
  image: "/placeholder-logo.png", // Replace with your actual image path
  raised: 16167.52,
  goal: 25000,
  topDonation: 500,
  avgDonation: 111.5,
  description:
    "We're raising $25,000 to help fund a new community library: a welcoming space for every generation to learn, connect, and grow. From children discovering books for the first time to seniors accessing vital resources, our library will be the beating heart of the neighborhood.",
  supports: [
    { icon: "📚", text: "Books, materials, and digital resources" },
    { icon: "🛋️", text: "Comfortable reading spaces and community rooms" },
    { icon: "💻", text: "Public access computers and free Wi-Fi" },
    { icon: "🟡", text: "Youth literacy programs and workshops" },
  ],
  donations: [
    { name: "Anthony", amount: 242.5, ago: "2 months ago" },
    { name: "Amanda", amount: 195, ago: "2 months ago" },
    { name: "Thomas", amount: 20, ago: "2 months ago" },
    { name: "Patricia", amount: 150, ago: "2 months ago" },
    { name: "Susan", amount: 4.9, ago: "1 month ago" },
  ],
  slug: "help-fund-our-new-community-library",
  formdata:{
    id:1,
    title: "Help Fund Our New Community Library",
    description: "We're raising $25,000 to help fund a new community library: a welcoming space for every generation to learn, connect, and grow. From children discovering books for the first time to seniors accessing vital resources, our library will be the beating heart of the neighborhood.", 
    slug: "help-form 1",
  }
};

const CampaignDetail = () => {
  const baseUrl = process.env.BASE_URL || '';
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <img src={campaign.image} alt={campaign.title} className="rounded-lg w-full h-64 object-cover" />
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between mb-2">
              <div className="text-xs font-semibold text-gray-700">AMOUNT RAISED</div>
              <div className="text-xs font-semibold text-gray-700">OUR GOAL</div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold text-green-700">${campaign.raised.toLocaleString()}</span>
              <span className="text-xl font-bold text-gray-900">${campaign.goal.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded mb-4">
              <div
                className="h-2 bg-yellow-500 rounded"
                style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mb-2">
              <div>
                <div className="text-xs text-gray-500">TOP DONATION</div>
                <div className="font-bold text-green-700">${campaign.topDonation.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">AVERAGE DONATION</div>
                <div className="font-bold text-green-700">${campaign.avgDonation.toLocaleString()}</div>
              </div>
            </div>
          </div>
          <Link href={`${baseUrl}/${campaignspage.slug}/${campaign.slug}/${campaign.formdata.slug}`} className="bg-green-600 text-white font-semibold py-3 rounded shadow mt-6 block text-center">DONATE</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4 text-gray-800">
            {campaign.description}
          </p>
          <h3 className="font-bold mb-2">What Your Donation Supports:</h3>
          <ul className="mb-6">
            {campaign.supports.map((s, i) => (
              <li key={i} className="flex items-center mb-2 text-gray-700">
                <span className="mr-2 text-xl">{s.icon}</span> {s.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold">Recent Donations</h3>
            <button className="bg-green-600 text-white px-4 py-1 rounded text-xs font-semibold">DONATE</button>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            {campaign.donations.map((d, i) => (
              <div key={i} className="flex items-center border-b last:border-b-0 py-3">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-gray-500 text-xl">👤</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{d.name}</span> donated <span className="font-bold text-green-700">${d.amount.toLocaleString()}</span>
                  <div className="text-xs text-gray-500">{d.ago}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
