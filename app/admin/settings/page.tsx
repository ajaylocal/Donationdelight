"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const settingsTabs = [
  { key: "general", label: "General" },
  { key: "payment", label: "Payment Gateways" },
  { key: "default", label: "Default Options" },
  { key: "emails", label: "Emails" },
  { key: "advanced", label: "Advanced" },
  { key: "security", label: "Security" },
  { key: "fee", label: "Fee Recovery" },
  { key: "tributes", label: "Tributes" },
  { key: "currency", label: "Currency Switcher" },
];

const generalMenuTabs = [
  { key: "general", label: "General" },
  { key: "currency", label: "Currency" },
  { key: "access", label: "Access Control" },
  { key: "sequential", label: "Sequential Ordering" },
  { key: "beta", label: "Beta Features" },
];

export default function SettingsPage() {
  const [tab, setTab] = useState("general");
  const [menuTab, setMenuTab] = useState("general");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings &gt; General</h1>
      <div className="flex gap-2 border-b mb-6 overflow-x-auto">
        {settingsTabs.map((t) => (
          <button
            key={t.key}
            className={`py-2 px-4 border-b-2 transition-all whitespace-nowrap ${tab === t.key ? "border-blue-600 text-blue-700 font-semibold" : "border-transparent text-gray-500"}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === "general" && (
        <div>
          <div className="flex gap-2 border-b mb-6 overflow-x-auto">
            {generalMenuTabs.map((t) => (
              <button
                key={t.key}
                className={`py-2 px-4 border-b-2 transition-all whitespace-nowrap ${menuTab === t.key ? "border-blue-600 text-blue-700 font-semibold" : "border-transparent text-gray-500"}`}
                onClick={() => setMenuTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          {menuTab === "general" && (
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl">
              {/* ...existing General tab content... */}
              <div className="mb-6">
                <label className="block font-medium mb-1">Success Page</label>
                <select className="input border rounded px-3 py-2 w-full">
                  <option>Donation Confirmation</option>
                </select>
                <div className="text-xs text-gray-500 mt-1">The page donors are sent to after completing their donations. The <code className="bg-gray-100 px-1 rounded">[give_receipt]</code> shortcode should be on this page.</div>
              </div>
              <div className="mb-6">
                <label className="block font-medium mb-1">Failed Donation Page</label>
                <select className="input border rounded px-3 py-2 w-full">
                  <option>Donation Failed</option>
                </select>
                <div className="text-xs text-gray-500 mt-1">The page donors are sent to if their donation is cancelled or fails.</div>
              </div>
              <div className="mb-6">
                <label className="block font-medium mb-1">Donor Dashboard Page</label>
                <select className="input border rounded px-3 py-2 w-full">
                  <option>Donor Dashboard</option>
                </select>
                <div className="text-xs text-gray-500 mt-1">This is the page where donors can manage their information, review history and more -- all in one place. The Donor Dashboard block or <code className="bg-gray-100 px-1 rounded">[give_donor_dashboard]</code> shortcode should be on this page.</div>
              </div>
              <div className="mb-6">
                <label className="block font-medium mb-1">Base Country</label>
                <select className="input border rounded px-3 py-2 w-full">
                  <option>United States</option>
                </select>
                <div className="text-xs text-gray-500 mt-1">The country your site operates from.</div>
              </div>
              <div className="mb-6">
                <label className="block font-medium mb-1">Base State/Province</label>
                <select className="input border rounded px-3 py-2 w-full">
                  <option>Rhode Island</option>
                </select>
                <div className="text-xs text-gray-500 mt-1">The state/province your site operates from.</div>
              </div>
              <Button className="mt-4">Save changes</Button>
            </div>
          )}
          {menuTab === "currency" && (
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-lg">
              <div className="mb-6">
                <label className="block font-medium mb-1">Currency</label>
                <select className="input border rounded px-3 py-2 w-full">
                  <option>US Dollars ($)</option>
                  <option>Euros (€)</option>
                  <option>Pounds Sterling (£)</option>
                  <option>Australian Dollars ($)</option>
                  <option>Brazilian Real (R$)</option>
                  <option>Canadian Dollars ($)</option>
                  <option>Czech Koruna (Kč)</option>
                  <option>Danish Krone ( kr. )</option>
                  <option>Hong Kong Dollar ($)</option>
                  <option>Hungarian Forint (Ft)</option>
                  <option>Indian Rupee (₹)</option>
                  <option>Japanese Yen (¥)</option>
                  <option>Malaysian Ringgit (RM)</option>
                  <option>Mexican Peso ($)</option>
                  <option>New Zealand Dollar ($)</option>
                  <option>Norwegian Krone (kr)</option>
                  <option>Philippine Peso (₱)</option>
                  <option>Polish Zloty (zł)</option>
                  <option>Singapore Dollar ($)</option>
                  <option>South African Rand (R)</option>
                  <option>Swedish Krona (kr)</option>
                  <option>Swiss Franc (CHF)</option>
                  <option>Turkish Lira (₺)</option>
                </select>
              </div>
              <Button>Save changes</Button>
            </div>
          )}
          {menuTab === "access" && (
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-lg">
              <div className="mb-6">
                <label className="block font-medium mb-1">Email Access</label>
                <div className="flex gap-6 mb-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="email-access" defaultChecked /> Enabled
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="email-access" /> Disabled
                  </label>
                </div>
                <div className="text-xs text-gray-500">If enabled, donors can access their donation history by verifying access to the email address used to donate. When they visit the donation history page, they input their email address and can access the site from a link in the resulting email.</div>
              </div>
              <div className="mb-6">
                <label className="block font-medium mb-1">Enable reCAPTCHA</label>
                <div className="flex gap-6 mb-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="recaptcha" /> Enabled
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="recaptcha" defaultChecked /> Disabled
                  </label>
                </div>
                <div className="text-xs text-gray-500">If enabled, this option adds a reCAPTCHA field to the email access form. Note: this does not add reCAPTCHA to donation forms.</div>
              </div>
              <Button>Save changes</Button>
            </div>
          )}
          {/* Add more menuTab content here as needed */}
        </div>
      )}
      {tab === "emails" && (
        <div>
          <div className="flex gap-2 border-b mb-6 overflow-x-auto">
            {[
              { key: "donor", label: "Donor Emails" },
              { key: "admin", label: "Admin Emails" },
              { key: "p2p", label: "P2P Fundraiser Emails" },
              { key: "p2padmin", label: "P2P Admin Emails" },
              { key: "settings", label: "Email Settings" },
              { key: "contact", label: "Contact Information" },
            ].map((t) => (
              <button
                key={t.key}
                className={`py-2 px-4 border-b-2 transition-all whitespace-nowrap ${t.key === "donor" ? "border-blue-600 text-blue-700 font-semibold" : "border-transparent text-gray-500"}`}
                // Only Donor Emails is active for now
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="mb-4 text-gray-600 text-sm">Email notifications sent from GiveWP for donor are listed below. Click on an email to configure it.</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left font-semibold">Email</th>
                    <th className="px-4 py-2 text-left font-semibold">Content Type</th>
                    <th className="px-4 py-2 text-left font-semibold">Recipient(s)</th>
                    <th className="px-4 py-2 text-left font-semibold">Edit Email</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Donation Receipt", type: "HTML", recipient: "Donor", active: true },
                    { name: "Donation Processing Receipt", type: "HTML", recipient: "Donor", active: true },
                    { name: "Offline Donation Instructions", type: "HTML", recipient: "Donor", active: false, lock: true },
                    { name: "User Registration Information", type: "HTML", recipient: "Donor", active: true },
                    { name: "Donation Note", type: "HTML", recipient: "Donor", active: true },
                    { name: "Email access", type: "HTML", recipient: "Donor", active: false, lock: true },
                    { name: "Renewal Receipt Email", type: "HTML", recipient: "Donor", active: false },
                    { name: "Subscription Cancelled Email", type: "HTML", recipient: "Donor", active: false },
                    { name: "Subscription Completed Email", type: "HTML", recipient: "Donor", active: false },
                    { name: "Subscription Reminder Email", type: "HTML", recipient: "Donor", active: false },
                    { name: "Subscriptions Email Access", type: "HTML", recipient: "Donor", active: true, lock: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="px-4 py-2 flex items-center gap-2">
                        {row.active ? (
                          <span className="inline-block text-green-600">&#10003;</span>
                        ) : row.lock ? (
                          <span className="inline-block text-gray-400">&#128274;</span>
                        ) : (
                          <span className="inline-block text-gray-400">&#10007;</span>
                        )}
                        <span className="font-medium text-blue-700 cursor-pointer hover:underline">{row.name}</span>
                        {row.name === "Donation Receipt" && (
                          <span className="ml-2 text-xs text-gray-500">Edit | Preview | Send test email</span>
                        )}
                      </td>
                      <td className="px-4 py-2">{row.type}</td>
                      <td className="px-4 py-2">{row.recipient}</td>
                      <td className="px-4 py-2">
                        <button className="bg-gray-100 border rounded p-2 hover:bg-gray-200" title="Edit Email">
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#F3F4F6"/><path d="M16.862 6.438a1.5 1.5 0 0 1 2.122 2.122l-8.25 8.25-2.829.707.707-2.829 8.25-8.25Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
