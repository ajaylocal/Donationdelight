"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useSearchParams } from "next/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
const donationform = [
	{
		id: 1,
		name: "Help Fund Our New Community Library",
		goal: 25000,
		raised: 16167.52,
		donations: 145,
		revenue: 16167.52,
		status: "Active",
	},
	{
		id: 2,
		name: "Holiday Food Drive",
		goal: 5000,
		raised: 1434.85,
		donations: 10,
		revenue: 1434.85,
		status: "Active",
	},
];

const PAGE_SIZE = 5;
export default function DonationFormlist() {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const layout = searchParams.get("layout") || "classic";
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(donationform.length / PAGE_SIZE);
    const paginatedDonationform = donationform.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  return (
     <>
      <div className="min-h-screen bg-gray-50 p-0">
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-bold flex items-center gap-2">
					<span className="inline-block bg-green-100 rounded-full p-2">
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
							<circle cx="14" cy="14" r="14" fill="#22C55E" />
						</svg>
					</span>
					Donation Form
				</h1>
				<Link href={`/admin/campaigns/${id}/forms/create`}>
				<Button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded">
					Create Form
				</Button>
				</Link>
			</div>
			<Card className="mb-6 p-6">
				<div className="flex flex-wrap gap-4 items-center mb-4">
					<select className="border rounded px-3 py-2 text-gray-700">
						<option>Bulk Actions</option>
						<option>Edit</option>
						<option>Duplicate</option>
					</select>
					<Button variant="outline">Apply</Button>
					<select className="border rounded px-3 py-2 text-gray-700">
						<option>All Status</option>
						<option>Active</option>
						<option>Draft</option>
					</select>
					<Input placeholder="Search by name or ID" className="w-64" />
					<Button variant="outline">Search</Button>
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-10">
								<input type="checkbox" />
							</TableHead>
							<TableHead className="w-16 flex items-center gap-1">
								ID{" "}
								<ChevronDown className="h-4 w-4 inline" />
							</TableHead>
							<TableHead>
								Name{" "}
								<ChevronDown className="h-4 w-4 inline" />
							</TableHead>
							<TableHead>Goal</TableHead>
							<TableHead>Donations</TableHead>
							<TableHead>Revenue</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedDonationform.map((c) => (
							<TableRow key={c.id} className="align-middle">
								<TableCell>
									<input type="checkbox" />
								</TableCell>
								<TableCell>
									<span className="bg-gray-100 rounded px-2 py-1 text-xs font-semibold">
										#{c.id}
									</span>
								</TableCell>
								<TableCell>
									<Link
										href={`/admin/campaigns/${id}/forms/${c.id}/edit`}
										className="text-blue-700 font-semibold hover:underline cursor-pointer"
									>
										{c.name}
									</Link>
									{c.id === 21 && (
										<div className="text-xs text-gray-500 mt-1 flex gap-2">
											<span className="hover:underline cursor-pointer">Edit</span> |
											<span className="hover:underline cursor-pointer">Duplicate</span>
										</div>
									)}
								</TableCell>
								<TableCell>
									<div className="flex flex-col gap-1">
										<span className="font-medium">
											${c.raised.toLocaleString()} of ${c.goal.toLocaleString()}
										</span>
										<Progress
											value={Math.min(100, (c.raised / c.goal) * 100)}
											className="h-2"
										/>
									</div>
								</TableCell>
								<TableCell>
									{c.donations > 0
										? `${c.donations} donations`
										: "No donations"}
								</TableCell>
								<TableCell className="font-semibold text-blue-700">
									${c.revenue.toLocaleString()}
								</TableCell>
								<TableCell>
									<Badge
										variant={
											c.status === "Active" ? "default" : "secondary"
										}
										className={
											c.status === "Draft"
												? "bg-yellow-200 text-yellow-800"
												: "bg-green-100 text-green-800"
										}
									>
										{c.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{/* Pagination Controls */}
				<div className="flex justify-end items-center gap-2 mt-4">
					<button
						className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
						onClick={() => setPage(page - 1)}
						disabled={page === 1}
					>
						Previous
					</button>
					<span className="font-medium text-gray-700">
						Page {page} of {totalPages}
					</span>
					<button
						className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
						onClick={() => setPage(page + 1)}
						disabled={page === totalPages}
					>
						Next
					</button>
				</div>
			</Card>
		</div>
    </>
  );
}
