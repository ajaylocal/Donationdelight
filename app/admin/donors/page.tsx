import Link from "next/link";
const donors = [
  {
    name: "Amanda White",
    email: "amanda.white122@mail.com",
    total: 100,
    donations: 1,
    latest: "07/19/2025 at 12:53 am",
    type: "ONE-TIME DONOR",
    date: "08/04/2025 at 6:20 pm",
  },
  {
    name: "Matthew Lewis",
    email: "matthew.lewis345@demo.com",
    total: 4.90,
    donations: 1,
    latest: "07/16/2025 at 8:49 am",
    type: "ONE-TIME DONOR",
    date: "08/04/2025 at 6:20 pm",
  },
  {
    name: "Anthony Hernandez",
    email: "anthony.hernandez273@example.com",
    total: 10.00,
    donations: 1,
    latest: "07/13/2025 at 2:02 am",
    type: "ONE-TIME DONOR",
    date: "08/04/2025 at 6:20 pm",
  },
  {
    name: "Elizabeth Rodriguez",
    email: "elizabeth.rodriguez216@outlook.com",
    total: 200.00,
    donations: 1,
    latest: "07/24/2025 at 5:12 pm",
    type: "ONE-TIME DONOR",
    date: "08/04/2025 at 6:20 pm",
  },
  {
    name: "Amanda Brown",
    email: "amanda.brown391@mail.com",
    total: 100.00,
    donations: 1,
    latest: "07/21/2025 at 4:34 pm",
    type: "ONE-TIME DONOR",
    date: "08/04/2025 at 6:20 pm",
  },
];

export default function DonorsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-green-600">&#x1F91D;</span> Donors
      </h1>
      <div className="bg-white rounded shadow p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Donor Information</th>
              <th>Total Given</th>
              <th>Donations</th>
              <th>Latest Donation</th>
              <th>Donor Type</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2 flex items-center gap-3">
                  <span className="inline-block w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <Link
                      href={`/admin/donors/${encodeURIComponent(donor.name.toLowerCase().replace(/\s+/g, '-'))}`}
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      {donor.name}
                    </Link>
                    <div className="text-xs text-gray-500">{donor.email}</div>
                  </div>
                </td>
                <td className="text-green-600 font-bold">${donor.total.toFixed(2)}</td>
                <td className="text-blue-700 underline cursor-pointer">{donor.donations} donation</td>
                <td>{donor.latest}</td>
                <td>
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold mr-2">1x</span>
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">{donor.type}</span>
                </td>
                <td>{donor.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-sm text-gray-500">{donors.length} donors</div>
      </div>
    </div>
  );
}
