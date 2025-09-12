"use client"
import React from "react";
import Link from "next/link";
import { sl } from "date-fns/locale";
// Example campaign data (replace with real data source)
const campaigns = [
  {
    id: 1,
    title: "Help Fund Our New Community Library",
    image: "/placeholder-logo.png",
    raised: 16167.52,
    goal: 25000,
    description: "",
    slug: "help-fund-our-new-community-library",
  },
  {
    id: 2,
    title: "Holiday Food Drive",
    slug: "help-fund-our-new-community-library",
    image: "/placeholder-logo.png",
    raised: 1434.85,
    goal: 5000,
    description: "",
  },
  {
    id: 3,
    title: "Anniversary",
    slug: "anniversary",
    image: "/placeholder-logo.png",
    donors: 28,
    goal: 100,
    description: "Make your donation in honor of a loved one's birthday!",
  },
  {
    id: 4,
    title: "Father's Day",
    slug: "fathers-day",
    image: "/placeholder-logo.png",
    raised: 1792.39,
    goal: 2500,
    description: "Make your donation in honor of a loved one's birthday!",
  },
  {
    id: 5,
    title: "Birthday",
    slug: "birthday",
    image: "/placeholder-logo.png",
    raised: 1506.63,
    goal: 7000,
    description: "Make your donation in honor of a loved one's birthday!",
  },
  {
    id: 6,
    title: "Mother's Day",
    slug: "mothers-day",
    image: "/placeholder-logo.png",
    raised: 994.77,
    goal: 5000,
    description: "Make your donation in honor of a loved one's birthday!",
  },
];
const campaignspage= {
    slug:"capaign-grid"
  }
const CampaignGrid = () => {
  const baseUrl = process.env.BASE_URL || '';
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Why Use the Campaign Grid?</h2>
      <p className="mb-4">
        The Campaign Grid organizes multiple fundraisers in one easy-to-browse layout. It’s perfect for:
      </p>
      <ul className="mb-6 list-disc pl-6">
        <li>Nonprofits running <strong>multiple initiatives at once</strong></li>
        <li>Donors looking to <strong>choose how they give</strong></li>
        <li>Showcasing <strong>goal progress</strong> visually on your site</li>
      </ul>
      <p className="mb-6">Scroll below to see example campaigns in action and try donating to one! <span role="img" aria-label="down">👇</span></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {campaigns.map((c) => (
          <Link
            key={c.id}
            href={`${baseUrl}/${campaignspage.slug}/${c.slug || c.id}`}
            className="bg-white rounded-lg shadow p-4 flex flex-col hover:bg-green-50 transition"
          >
            <img src={c.image || "/placeholder.jpg"} alt={c.title} className="h-32 w-full object-cover rounded mb-2" onError={(e) => { e.currentTarget.src = "/placeholder.jpg"; }} />
            <h3 className="font-bold text-lg mb-1">{c.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{c.description}</p>
            {c.raised !== undefined && (
              <>
                <div className="mb-1 text-xs font-semibold">AMOUNT RAISED</div>
                <div className="w-full h-2 bg-gray-200 rounded mb-1">
                  <div
                    className="h-2 bg-yellow-500 rounded"
                    style={{ width: `${(c.raised / c.goal) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mb-2">
                  <span>${c.raised.toLocaleString()}</span>
                  <span>OUR GOAL<br />${c.goal.toLocaleString()}</span>
                </div>
              </>
            )}
            {c.donors !== undefined && (
              <div className="flex justify-between text-xs mb-2">
                <span>NUMBER OF DONORS<br />{c.donors}</span>
                <span>OUR GOAL<br />{c.goal}</span>
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <button className="bg-green-600 text-white px-3 py-1 rounded">1</button>
        <button className="bg-green-600 text-white px-3 py-1 rounded">2</button>
        <button className="bg-green-600 text-white px-3 py-1 rounded">3</button>
      </div>
    </div>
  );
};

export default CampaignGrid;
