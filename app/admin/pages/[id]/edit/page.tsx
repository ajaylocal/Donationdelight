"use client";
import React, { useState } from "react";

const EditAdminPage = () => {
  // Example initial data (replace with real fetch logic)
  const [title, setTitle] = useState("Sample Page Title");
  const [description, setDescription] = useState("Sample page description goes here.");
  const [image, setImage] = useState<string | null>(null);
  const [selectedCampaigns, setSelectedCampaigns] = useState<number[]>([1]);
  const [selectedForms, setSelectedForms] = useState<number[]>([2]);

  const campaigns = [
    { id: 1, name: "Help Fund Our New Community Library" },
    { id: 2, name: "Holiday Food Drive" },
    { id: 3, name: "Anniversary" },
  ];
  const forms = [
    { id: 1, name: "Contact Us Form" },
    { id: 2, name: "Donation Form" },
  ];

  const handleCampaignCheck = (id: number) => {
    setSelectedCampaigns((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };
  const handleFormCheck = (id: number) => {
    setSelectedForms((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Page updated!\nTitle: ${title}\nDescription: ${description}\nCampaigns: ${selectedCampaigns.join(", ")}\nForms: ${selectedForms.join(", ")}`);
  };

  return (
    <div className="w-full min-h-screen bg-green-50 py-10 px-0">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Main Editor Section */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow mb-10">
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full text-3xl font-bold border-0 border-b border-gray-200 mb-6 focus:ring-0 focus:border-green-400 bg-transparent"
              placeholder="Edit title"
              required
            />
            <div className="flex gap-2 mb-4">
              <button type="button" className="px-2 py-1 border rounded text-gray-600">B</button>
              <button type="button" className="px-2 py-1 border rounded text-gray-600">I</button>
              <button type="button" className="px-2 py-1 border rounded text-gray-600">Link</button>
              <button type="button" className="px-2 py-1 border rounded text-gray-600">List</button>
            </div>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border border-green-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
              placeholder="Edit page content..."
              rows={8}
            />
            <div className="mb-6">
              <label className="block font-semibold mb-2">Change Media</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2" />
              {image && <img src={image} alt="Page" className="w-full h-40 object-cover rounded" />}
            </div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-3 text-green-700">Edit Campaigns</h3>
                <ul className="bg-green-50 rounded-lg p-4">
                  {campaigns.map(c => (
                    <li key={c.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        checked={selectedCampaigns.includes(c.id)}
                        onChange={() => handleCampaignCheck(c.id)}
                        className="mr-2"
                      />
                      <span className="font-medium">{c.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-green-700">Edit Forms</h3>
                <ul className="bg-green-50 rounded-lg p-4">
                  {forms.map(f => (
                    <li key={f.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        checked={selectedForms.includes(f.id)}
                        onChange={() => handleFormCheck(f.id)}
                        className="mr-2"
                      />
                      <span className="font-medium">{f.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded shadow transition">Update Page</button>
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
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Update</button>
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

export default EditAdminPage;
