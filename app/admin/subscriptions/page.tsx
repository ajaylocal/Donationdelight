import Link from "next/link";

const subscriptions = [
  {
    id: 34,
    amount: 40,
    donor: "Donald Anderson",
    form: "Fundraising Campaign",
    period: "Yearly",
    next: "22nd May 2029",
    status: "Active",
  },
  {
    id: 33,
    amount: 147,
    donor: "Susan Clark",
    form: "Fundraising Campaign",
    period: "Monthly",
    next: "7th September 2025",
    status: "Active",
  },
  {
    id: 32,
    amount: 250,
    donor: "Jessica Johnson",
    form: "Fundraising Campaign",
    period: "Monthly",
    next: "1st October 2025",
    status: "Active",
  },
  {
    id: 31,
    amount: 10,
    donor: "Jessica Martinez",
    form: "Fundraising Campaign",
    period: "Monthly",
    next: "8th September 2025",
    status: "Active",
  },
];

export default function SubscriptionsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-green-600">&#x21ba;</span> Subscriptions
        <span className="ml-2 bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">TEST</span>
      </h1>
      <div className="bg-white rounded shadow p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">ID</th>
              <th>Amount</th>
              <th>Donor name</th>
              <th>Donation form</th>
              <th>Billing period</th>
              <th>Next payment date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map(sub => (
              <tr key={sub.id} className="border-b hover:bg-gray-50">
                <td className="py-2 text-gray-500"># {sub.id}</td>
                <td className="text-green-600 font-bold">${sub.amount.toFixed(2)}</td>
                <td>{sub.donor}</td>
                <td>{sub.form}</td>
                <td>{sub.period}</td>
                <td>{sub.next}</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">{sub.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-sm text-gray-500">{subscriptions.length} subscriptions</div>
      </div>
    </div>
  );
}
