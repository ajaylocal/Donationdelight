"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockDonations = [
  {
    id: 11725,
    amount: 100.0,
    paymentType: "One Time",
    createdAt: "07/12/2025 @ 12:53 am",
    donorName: "Amanda White",
    campaign: "Mother's Day",
    fee: 0.0,
    tribute: "N/A",
    status: "Completed",
  },
  {
    id: 11724,
    amount: 10.0,
    paymentType: "One Time",
    createdAt: "07/12/2025 @ 8:40 am",
    donorName: "Matthew Lewis",
    campaign: "Mother's Day",
    fee: 0.0,
    tribute: "N/A",
    status: "Completed",
  },
  // ...more mock data
];

const statusColor = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

export default function DonationsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredDonations = mockDonations.filter(
    (d) =>
      d.donorName.toLowerCase().includes(search.toLowerCase()) ||
      d.campaign.toLowerCase().includes(search.toLowerCase()) ||
      d.id.toString().includes(search)
  );

  const paginatedDonations = filteredDonations.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Donations</h1>
  <Button variant="default">New Donation</Button>
      </div>
      <div className="flex flex-wrap gap-2 items-center mb-4">
        <Select>
          <SelectTrigger className="w-40">Bulk Actions</SelectTrigger>
          <SelectContent>
            <SelectItem value="export">Export</SelectItem>
            <SelectItem value="delete">Delete</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">Apply</Button>
        <Input
          className="ml-auto w-64"
          placeholder="Name, email, or Donation ID"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input type="checkbox" />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Type</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Donor Name</TableHead>
              <TableHead>Campaign</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>Tribute</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedDonations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="inline-block bg-gray-100 text-gray-700 rounded px-2 py-0.5 text-xs font-semibold w-fit mb-1">#{donation.id}</span>
                    <div className="flex gap-2 text-xs">
                      <Link href={`/admin/donations/${donation.id}`} className="text-blue-600 hover:underline">Edit</Link>
                      <button className="text-red-500 hover:underline" onClick={() => alert('Delete action for #' + donation.id)}>Trash</button>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-green-600">
                  ${donation.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">1x</Badge> <Badge>{donation.paymentType}</Badge>
                </TableCell>
                <TableCell>{donation.createdAt}</TableCell>
                <TableCell className="text-blue-700 hover:underline cursor-pointer">{donation.donorName}</TableCell>
                <TableCell className="text-blue-700 hover:underline cursor-pointer">{donation.campaign}</TableCell>
                <TableCell>${donation.fee.toFixed(2)}</TableCell>
                <TableCell>{donation.tribute}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[donation.status as keyof typeof statusColor] || ''}`}>{donation.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600">
          {filteredDonations.length} donations
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>
          <span className="px-2 text-sm">Page {page}</span>
          <Button
            variant="outline"
            size="sm"
            disabled={page * pageSize >= filteredDonations.length}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
