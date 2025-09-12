"use client";
import React, { useState } from "react";
import Link from "next/link";
const initialPages = [
	{
		id: 1,
		title: "Library Campaigns",
		description: "A grid of campaigns for our library initiatives.",
		slug: "library-campaigns",
	},
	{
		id: 2,
		title: "Holiday Drives",
		description: "Seasonal fundraising campaigns.",
		slug: "holiday-drives",
	},
];

const AdminPages = () => {
	const [pages, setPages] = useState(initialPages);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleCreate = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title) return;
		const slug = title.toLowerCase().replace(/\s+/g, "-");
		setPages([
			...pages,
			{
				id: pages.length + 1,
				title,
				description,
				slug,
			},
		]);
		setTitle("");
		setDescription("");
	};

		// Pagination logic
		const itemsPerPage = 5;
		const [currentPage, setCurrentPage] = useState(1);
		const totalPages = Math.ceil(pages.length / itemsPerPage);
		const paginatedPages = pages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

		return (
			<div className="w-full py-8 px-0">
				<div className="flex items-center justify-between px-8 mb-6">
					<h2 className="text-2xl font-bold">Pages</h2>
					<Link href="/admin/pages/create" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded shadow transition">Create Page</Link>
				</div>
				<div className="bg-green-50 rounded-lg shadow mx-8">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b bg-green-100">
								<th className="py-4 px-6 font-semibold text-green-700">Title</th>
								<th className="py-4 px-6 font-semibold text-green-700">Slug</th>
								<th className="py-4 px-6 font-semibold text-green-700">Description</th>
								<th className="py-4 px-6 font-semibold text-green-700">Actions</th>
							</tr>
						</thead>
						<tbody>
							{paginatedPages.map(page => (
								<tr key={page.id} className="border-b hover:bg-green-200">
									<td className="py-3 px-6 font-semibold text-gray-900">{page.title}</td>
									<td className="py-3 px-6 font-mono text-xs text-green-700">{page.slug}</td>
									<td className="py-3 px-6 text-sm text-gray-700">{page.description}</td>
									<td className="py-3 px-6">
										<a href={`/${page.slug}`} className="text-green-700 underline text-xs mr-3">View</a>
										<Link href={`/admin/pages/${page.id}/edit`} className="text-blue-600 underline text-xs mr-3">Edit</Link>
										<button className="text-red-600 underline text-xs" disabled>Delete</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{/* Pagination Controls */}
					<div className="flex justify-center items-center gap-2 py-4">
						<button
							className="px-3 py-1 rounded bg-green-100 text-green-700 disabled:opacity-50"
							onClick={() => setCurrentPage(currentPage - 1)}
							disabled={currentPage === 1}
						>
							Previous
						</button>
						<span className="px-2 text-green-700 font-semibold">Page {currentPage} of {totalPages}</span>
						<button
							className="px-3 py-1 rounded bg-green-100 text-green-700 disabled:opacity-50"
							onClick={() => setCurrentPage(currentPage + 1)}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		);
};

export default AdminPages;
