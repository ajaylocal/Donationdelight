"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const settingsTabs = [
  { key: "general", label: "General" },
  { key: "payment", label: "Payment Gateways" },
  // { key: "default", label: "Default Options" },
  { key: "emails", label: "Emails" },
  // { key: "advanced", label: "Advanced" },
  // { key: "security", label: "Security" },
  { key: "fee", label: "Fee Recovery" },
  // { key: "tributes", label: "Tributes" },
  // { key: "currency", label: "Currency Switcher" },
]

const generalMenuTabs = [
  { key: "general", label: "General" },
  { key: "currency", label: "Currency" },
  // { key: "access", label: "Access Control" },
  // { key: "sequential", label: "Sequential Ordering" },
  // { key: "beta", label: "Beta Features" },
]

export default function SettingsPage() {
  // Fee Recovery state (for demo, not hooked up to backend)
  const [feeRecoveryEnabled, setFeeRecoveryEnabled] = useState(true)
  const [feeGatewaySupport, setFeeGatewaySupport] = useState("all")
  const [feeOptIn, setFeeOptIn] = useState("donor")
  const [feeOptInMsg, setFeeOptInMsg] = useState("I'd like to help cover the transaction fees of {fee_amount}")
  const [feeCheckboxLoc, setFeeCheckboxLoc] = useState("below")
  const [feeBreakdownEnabled, setFeeBreakdownEnabled] = useState(true)
  const [feePercent, setFeePercent] = useState("2.90")
  const [feeAdditional, setFeeAdditional] = useState("0.30")
  const [feeMax, setFeeMax] = useState("0.00")
  const [tab, setTab] = useState("general")
  const [menuTab, setMenuTab] = useState("general")

  const [testMode, setTestMode] = useState(true)
  const [paymentGatewayTab, setPaymentGatewayTab] = useState("gateways")

  const [gateways, setGateways] = useState([
    { id: "test", name: "Test Donation", label: "Test Donation", isDefault: true, enabled: true },
     { id: "payarc", name: "PayArc", label: "PayArc Payment", isDefault: false, enabled: false },
    { id: "nuvei", name: "Nuvei", label: "Nuvei Payment", isDefault: false, enabled: false },
    { id: "offline", name: "Offline Donation", label: "Offline Donation", isDefault: false, enabled: true },
    {
      id: "stripe",
      name: "Stripe - Payment Element",
      label: "Stripe Payment Element",
      isDefault: false,
      enabled: false,
    },
    { id: "paypal", name: "PayPal Donations", label: "Credit Card", isDefault: false, enabled: false },

  ])

  const handleGatewayChange = (id: string, field: string, value: any) => {
    setGateways((prev) => prev.map((gateway) => (gateway.id === id ? { ...gateway, [field]: value } : gateway)))
  }

  const handleDefaultChange = (id: string) => {
    setGateways((prev) =>
      prev.map((gateway) => ({
        ...gateway,
        isDefault: gateway.id === id,
      })),
    )
  }

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
                  <option>Select State</option>
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
        </div>
      )}

      {tab === "payment" && (
        <div>
          <div className="flex gap-2 border-b mb-6 overflow-x-auto">
            {[
              { key: "gateways", label: "Gateways" },
              // { key: "stripe", label: "Stripe" },
              // { key: "paypal", label: "PayPal" },
              { key: "payarc", label: "PayArc" },
              { key: "nuvei", label: "Nuvei" },
              { key: "offline", label: "Offline Donations" },
            ].map((t) => (
              <button
                key={t.key}
                className={`py-2 px-4 border-b-2 transition-all whitespace-nowrap ${paymentGatewayTab === t.key ? "border-blue-600 text-blue-700 font-semibold" : "border-transparent text-gray-500"}`}
                onClick={() => setPaymentGatewayTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {paymentGatewayTab === "gateways" && (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
                <label className="block font-medium mb-3">Test Mode</label>
                <div className="flex gap-6 mb-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="test-mode" checked={testMode} onChange={() => setTestMode(true)} />
                    Enabled
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="test-mode" checked={!testMode} onChange={() => setTestMode(false)} />
                    Disabled
                  </label>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  If enabled, donations are processed through the sandbox/test accounts configured in each gateway's
                  settings. This prevents having to use real money for tests. See the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    payment gateway documentation
                  </a>{" "}
                  for instructions on configuring sandbox accounts.
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-4">Enabled Gateways</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-sm">Gateway</th>
                        <th className="px-4 py-3 text-left font-semibold text-sm">Label</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Default</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Enabled</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gateways.map((gateway) => (
                        <tr key={gateway.id} className="border-b">
                          <td className="px-4 py-3 flex items-center gap-2">
                            <div className="w-6 h-4 bg-gray-200 rounded flex items-center justify-center">
                              <div className="w-3 h-2 bg-gray-400 rounded"></div>
                            </div>
                            <span className="font-medium">{gateway.name}</span>
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="text"
                              className="border rounded px-3 py-1 w-full max-w-xs"
                              value={gateway.label}
                              onChange={(e) => handleGatewayChange(gateway.id, "label", e.target.value)}
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="radio"
                              name="default-gateway"
                              checked={gateway.isDefault}
                              onChange={() => handleDefaultChange(gateway.id)}
                            />
                          </td>
                          <td className="px-4 py-3 text-center">
                            <input
                              type="checkbox"
                              checked={gateway.enabled}
                              onChange={(e) => handleGatewayChange(gateway.id, "enabled", e.target.checked)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save changes</Button>
              </div>

              <div className="mt-6 text-right">
                <div className="text-xs text-gray-500">
                  Need Help? See docs on: "Gateway Settings"
                  <button className="ml-1 text-gray-400 hover:text-gray-600">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {paymentGatewayTab === "payarc" && (
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl">
              <h3 className="text-lg font-semibold mb-4">PayArc Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">API Key</label>
                  <input
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter your PayArc API Key"
                  />
                  <div className="text-xs text-gray-500 mt-1">Your PayArc API key for processing payments.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Merchant ID</label>
                  <input
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter your PayArc Merchant ID"
                  />
                  <div className="text-xs text-gray-500 mt-1">Your unique PayArc merchant identifier.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Secret Key</label>
                  <input
                    type="password"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter your PayArc Secret Key"
                  />
                  <div className="text-xs text-gray-500 mt-1">Your PayArc secret key for secure authentication.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Webhook URL</label>
                  <input
                    type="url"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="https://yoursite.com/webhook/payarc"
                    readOnly
                  />
                  <div className="text-xs text-gray-500 mt-1">Copy this URL to your PayArc webhook settings.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Environment</label>
                  <select className="border rounded px-3 py-2 w-full">
                    <option value="sandbox">Sandbox (Test)</option>
                    <option value="production">Production (Live)</option>
                  </select>
                  <div className="text-xs text-gray-500 mt-1">
                    Select the PayArc environment for processing payments.
                  </div>
                </div>
              </div>

              <Button className="mt-6">Save PayArc Settings</Button>
            </div>
          )}

          {paymentGatewayTab === "nuvei" && (
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl">
              <h3 className="text-lg font-semibold mb-4">Nuvei Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">Merchant ID</label>
                  <input
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter your Nuvei Merchant ID"
                  />
                  <div className="text-xs text-gray-500 mt-1">Your unique Nuvei merchant identifier.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Site ID</label>
                  <input
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter your Nuvei Site ID"
                  />
                  <div className="text-xs text-gray-500 mt-1">Your Nuvei site identifier for this integration.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Secret Key</label>
                  <input
                    type="password"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Enter your Nuvei Secret Key"
                  />
                  <div className="text-xs text-gray-500 mt-1">Your Nuvei secret key for secure authentication.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Server Host</label>
                  <select className="border rounded px-3 py-2 w-full">
                    <option value="ppp-test.nuvei.com">Test Server (ppp-test.nuvei.com)</option>
                    <option value="secure.safecharge.com">Production Server (secure.safecharge.com)</option>
                  </select>
                  <div className="text-xs text-gray-500 mt-1">Select the Nuvei server environment.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Hash Algorithm</label>
                  <select className="border rounded px-3 py-2 w-full">
                    <option value="sha256">SHA256</option>
                    <option value="md5">MD5</option>
                  </select>
                  <div className="text-xs text-gray-500 mt-1">Hash algorithm used for request authentication.</div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Notification URL</label>
                  <input
                    type="url"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="https://yoursite.com/webhook/nuvei"
                    readOnly
                  />
                  <div className="text-xs text-gray-500 mt-1">Copy this URL to your Nuvei notification settings.</div>
                </div>
              </div>

              <Button className="mt-6">Save Nuvei Settings</Button>
            </div>
          )}
        </div>
      )}

      {tab === "fee" && (
        <div className="bg-white rounded-lg p-6 shadow-sm max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Fee Recovery</h2>
          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Fee Recovery</label>
              <div className="flex gap-6 mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-recovery"
                    checked={feeRecoveryEnabled}
                    onChange={() => setFeeRecoveryEnabled(true)}
                  />{" "}
                  Enabled
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-recovery"
                    checked={!feeRecoveryEnabled}
                    onChange={() => setFeeRecoveryEnabled(false)}
                  />{" "}
                  Disabled
                </label>
              </div>
              <div className="text-xs text-gray-500">
                Determines whether new forms have Fee Recovery added by default (v2 forms are globally enabled or
                disabled).
              </div>
            </div>

            <div>
              {/* <label className="block font-medium mb-1">Gateway Fee Support</label>
              <div className="flex gap-6 mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-gateway"
                    checked={feeGatewaySupport === "all"}
                    onChange={() => setFeeGatewaySupport("all")}
                  />{" "}
                  All Gateways
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-gateway"
                    checked={feeGatewaySupport === "per"}
                    onChange={() => setFeeGatewaySupport("per")}
                  />{" "}
                  Set Per Gateway
                </label>
              </div> 
              <div className="text-xs text-gray-500">
                Set the fee recovery amount to be the same for all gateways or configure the fees per gateway.
              </div>
              */}
            </div>

            <div>
              <label className="block font-medium mb-1">Fee Opt-In</label>
              <div className="flex gap-6 mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-optin"
                    checked={feeOptIn === "donor"}
                    onChange={() => setFeeOptIn("donor")}
                  />{" "}
                  Donor Opt-in
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-optin"
                    checked={feeOptIn === "forced"}
                    onChange={() => setFeeOptIn("forced")}
                  />{" "}
                  Forced Opt-in
                </label>
              </div>
              <div className="text-xs text-gray-500">
                You can allow donors to opt-in to cover the fees, or force the opt-in.
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Opt-in Message</label>
              <input
                type="text"
                className="input border rounded px-3 py-2 w-full"
                value={feeOptInMsg}
                onChange={(e) => setFeeOptInMsg(e.target.value)}
              />
              <div className="text-xs text-gray-500">
                This is the message the donor sees next to a checkbox indicating that they choose to donate the credit
                card fees.
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Checkbox location</label>
              <select
                className="input border rounded px-3 py-2 w-full"
                value={feeCheckboxLoc}
                onChange={(e) => setFeeCheckboxLoc(e.target.value)}
              >
                <option value="below">Below the donation level fields</option>
                <option value="above">Above the donation level fields</option>
              </select>
              <div className="text-xs text-gray-500">
                Location of the Fee Recovery checkbox, only applicable to v2 forms.
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Include Fee Breakdown</label>
              <div className="flex gap-6 mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-breakdown"
                    checked={feeBreakdownEnabled}
                    onChange={() => setFeeBreakdownEnabled(true)}
                  />{" "}
                  Enabled
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fee-breakdown"
                    checked={!feeBreakdownEnabled}
                    onChange={() => setFeeBreakdownEnabled(false)}
                  />{" "}
                  Disabled
                </label>
              </div>
              <div className="text-xs text-gray-500">
                If enabled a text breakdown of the donation total and fee will show below the final total amount on the
                donation form.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block font-medium mb-1">Fee Percentage</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="input border rounded px-3 py-2 w-24"
                    value={feePercent}
                    onChange={(e) => setFeePercent(e.target.value)}
                  />
                  <span>%</span>
                </div>
                <div className="text-xs text-gray-500">
                  Enter the fee percentage. This is typically between 1.5-3.5% depending on the gateway.
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Additional Fee Amount</label>
                <div className="flex items-center gap-2">
                  <span>$</span>
                  <input
                    type="number"
                    className="input border rounded px-3 py-2 w-24"
                    value={feeAdditional}
                    onChange={(e) => setFeeAdditional(e.target.value)}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  This is an additional amount added to the percentage fee. For example, 2.9% + 30 cents.
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Maximum Fee Amount</label>
                <div className="flex items-center gap-2">
                  <span>$</span>
                  <input
                    type="number"
                    className="input border rounded px-3 py-2 w-24"
                    value={feeMax}
                    onChange={(e) => setFeeMax(e.target.value)}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  This option allows you to limit the fee amount for the donors for more than a specific fee amount. For
                  example, 2.9% + 30 cents but not more than $12.50. To remove the Maximum Fee Amount set the limit to
                  zero.
                </div>
              </div>
            </div>
            <Button className="mt-4">Save changes</Button>
          </form>
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
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="mb-4 text-gray-600 text-sm">
              Email notifications sent from GiveWP for donor are listed below. Click on an email to configure it.
            </div>
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
                    {
                      name: "Offline Donation Instructions",
                      type: "HTML",
                      recipient: "Donor",
                      active: false,
                      lock: true,
                    },
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
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <rect width="24" height="24" rx="4" fill="#F3F4F6" />
                            <path
                              d="M16.862 6.438a1.5 1.5 0 0 1 2.122 2.122l-8.25 8.25-2.829.707.707-2.829 8.25-8.25Z"
                              stroke="#64748B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
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
  )
}