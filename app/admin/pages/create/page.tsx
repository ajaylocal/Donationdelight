"use client";
import React, { useState } from "react";

const CreateAdminPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle saving the new page (API or state)
    alert(`Page created!\nTitle: ${title}\nDescription: ${description}`);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-full min-h-screen bg-green-50 py-10 px-0">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Main Editor Section */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow mb-10">
            {/* Title input, large and prominent */}
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full text-3xl font-bold border-0 border-b border-gray-200 mb-6 focus:ring-0 focus:border-green-400 bg-transparent"
              placeholder="Add title"
              required
            />
            {/* Toolbar */}
            <div className="flex gap-2 mb-4">
              <button type="button" className="px-2 py-1 border rounded text-gray-600">B</button>
              <button type="button" className="px-2 py-1 border rounded text-gray-600">I</button>
              <button type="button" className="px-2 py-1 border rounded text-gray-600">Link</button>
              <button type="button" className="px-2 py-1 border rounded text-gray-600">List</button>
            </div>
            {/* Description textarea */}
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border border-green-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
              placeholder="Start writing your page..."
              rows={8}
            />
            {/* Media upload */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Add Media</label>
              <input type="file" accept="image/*" className="mb-2" />
            </div>
            {/* Campaigns and Forms selection */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-3 text-green-700">Select Campaigns</h3>
                <ul className="bg-green-50 rounded-lg p-4">
                  <li className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-medium">Help Fund Our New Community Library</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-medium">Holiday Food Drive</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-medium">Anniversary</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-green-700">Select Forms</h3>
                <ul className="bg-green-50 rounded-lg p-4">
                  <li className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-medium">Contact Us Form</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-medium">Donation Form</span>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        {/* Sidebar Section */}
        <aside className="w-80">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h4 className="font-bold mb-4">Publish</h4>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full mb-2">Save Draft</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full mb-2">Preview</button>
            <div className="text-xs text-gray-500 mb-2">Status: Draft</div>
            <div className="text-xs text-gray-500 mb-2">Visibility: Public</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Publish</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h4 className="font-bold mb-4">Categories</h4>
            <input type="text" className="w-full border px-2 py-1 rounded mb-2" placeholder="Add New Category" />
            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Uncategorized</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-bold mb-4">Tags</h4>
            <input type="text" className="w-full border px-2 py-1 rounded mb-2" placeholder="Add tag" />
            <div className="flex gap-2 flex-wrap">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Industry</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Web</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CreateAdminPage;
