export default function ManualDonationPage() {

    return (
      <div className="max-w-full mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6">New Donation</h1>
        <form className="space-y-8">
          {/* Donation Form Section */}
          <div className="border rounded p-4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Donation Form</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Donation Form</label>
                <select className="w-full border rounded px-2 py-1">
                  <option>All Forms</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Donation Level</label>
                <input className="w-full border rounded px-2 py-1" placeholder="n/a" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Donation Amount ($)</label>
                <input type="number" className="w-full border rounded px-2 py-1" placeholder="0.00" />
              </div>
            </div>
          </div>

          {/* Donor Section */}
          <div className="border rounded p-4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Donor</h2>
            <div className="flex gap-4 items-center">
              <select className="border rounded px-2 py-1">
                <option>No donor attached</option>
              </select>
              <button type="button" className="px-4 py-1 bg-blue-600 text-white rounded">New Donor</button>
            </div>
          </div>

          {/* Peer-to-Peer Section */}
          <div className="border rounded p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Peer-to-Peer Campaign</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Unassigned</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Peer-to-Peer Team</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Unassigned</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Peer-to-Peer Fundraiser</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Unassigned</option>
              </select>
            </div>
          </div>

          {/* Status, Payment, Date Section */}
          <div className="border rounded p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Donation Status</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Complete</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Payment Method</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Manual Donation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Donation Date</label>
              <input type="datetime-local" className="w-full border rounded px-2 py-1" />
            </div>
          </div>

          {/* Billing Address Section */}
          <div className="border rounded p-4 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select className="w-full border rounded px-2 py-1 mb-2">
                <option>United States</option>
              </select>
              <label className="block text-sm font-medium mb-1">Address 2</label>
              <input className="w-full border rounded px-2 py-1 mb-2" placeholder="Address line 2" />
              <label className="block text-sm font-medium mb-1">State</label>
              <select className="w-full border rounded px-2 py-1">
                <option>Rhode Island</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address 1</label>
              <input className="w-full border rounded px-2 py-1 mb-2" placeholder="Address line 1" />
              <label className="block text-sm font-medium mb-1">City</label>
              <input className="w-full border rounded px-2 py-1 mb-2" placeholder="City" />
              <label className="block text-sm font-medium mb-1">Zip / Postal Code</label>
              <input className="w-full border rounded px-2 py-1" placeholder="Zip / Postal Code" />
            </div>
          </div>

          {/* Receipt & Notification Section */}
          <div className="border rounded p-4 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="send-receipt" className="border rounded" />
              <label htmlFor="send-receipt" className="text-sm">Send donor receipt</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="send-admin" className="border rounded" />
              <label htmlFor="send-admin" className="text-sm">Send admin notification</label>
            </div>
          </div>

          {/* Note Section */}
          <div className="border rounded p-4 mb-6">
            <label className="block text-sm font-medium mb-1">Note</label>
            <textarea className="w-full border rounded px-2 py-1 min-h-[80px]" placeholder="Add an optional note to this donation." />
          </div>

          <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded font-semibold">Create Donation</button>
        </form>
      </div>
    )
}