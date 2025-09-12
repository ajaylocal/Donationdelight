"use client"
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const TABS = ["Build", "Design", "Settings"];
  // Type guard for donationAmount field
  function isDonationAmountField(field: any): field is { id: number; label: string; type: string; required: boolean; donationType: string; options: number[]; customAmount: boolean; descriptionEnabled: boolean } {
    return field.type === "donationAmount" && typeof field.donationType === "string" && Array.isArray(field.options);
  }
export default function FormEditor() {
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout") || "classic";

  // Sections state: each section has a name and fields
  const [sections, setSections] = useState([
    {
      id: 1,
      name: "Section 1",
      fields: [
        { id: 1, label: "First Name", type: "text", required: true },
        { id: 2, label: "Email Address", type: "email", required: true },
      ],
    },
    {
      id: 2,
      name: "Section 23",
      fields: [
        {
          id: 3,
          label: "Donation Amount",
          type: "donationAmount",
          required: true,
          donationType: "multi", // "multi" or "fixed"
          options: [10, 25, 50, 100, 250, 500],
          customAmount: true,
          descriptionEnabled: false,
        },
      ],
    },
  ]);
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const [selectedField, setSelectedField] = useState<{sectionId: number, fieldId: number} | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Build");
  const [activeSection, setActiveSection] = useState("General");

  // Field types for sidebar, grouped by category
  const fieldGroups = [
    {
      title: "Input Fields",
      fields: [
        { icon: "🏢", label: "Company", type: "company" },
        { icon: "👤", label: "Donor Name", type: "donorName" },
        { icon: "✉️", label: "Email", type: "email" },
        { icon: "�", label: "Donor Phone", type: "donorPhone" },
        { icon: "💳", label: "Payment Gateways", type: "paymentGateways" },
        { icon: "📊", label: "Donation Summary", type: "donationSummary" },
        { icon: "�", label: "Donation Amount and Levels", type: "donationAmountLevels" },
        { icon: "🔑", label: "User Login", type: "userLogin" },
        { icon: "�", label: "Billing Address", type: "billingAddress" },
        { icon: "📄", label: "Terms and conditions", type: "terms" },
        { icon: "�", label: "Donor Comments", type: "donorComments" },
        { icon: "🕵️", label: "Anonymous Donation", type: "anonymousDonation" },
      ],
    },
    {
      title: "Content & Media",
      fields: [
        { icon: "¶", label: "Paragraph", type: "paragraph" },
      ],
    },
    {
      title: "Layout",
      fields: [
        { icon: "📦", label: "Section", type: "section" },
      ],
    },
    {
      title: "Custom Fields",
      fields: [
        { icon: "🔲", label: "Text Field", type: "text" },
        { icon: "☑️", label: "Checkbox", type: "checkbox" },
        { icon: "🔒", label: "Consent", type: "consent" },
        { icon: "📅", label: "Date", type: "date" },
        { icon: "⬇️", label: "Dropdown", type: "dropdown" },
        { icon: "✉️", label: "Email", type: "email" },
        { icon: "📤", label: "File Upload", type: "fileUpload" },
        { icon: "🙈", label: "Hidden", type: "hidden" },
        { icon: "<>", label: "HTML", type: "html" },
        { icon: "🔢", label: "Multi Select", type: "multiSelect" },
        { icon: "📞", label: "Phone", type: "phone" },
        { icon: "🔘", label: "Radio", type: "radio" },
        { icon: "📝", label: "Textarea", type: "textarea" },
        { icon: "🔗", label: "URL", type: "url" },
        { icon: "💸", label: "Fee Recovery", type: "feeRecovery" },
        { icon: "🎖️", label: "Tributes", type: "tributes" },
      ],
    },
  ];

  // Add a new section
  function addSection() {
    const newId = Date.now();
    setSections([...sections, { id: newId, name: `Section ${sections.length + 1}`, fields: [] }]);
    setSelectedSection(newId);
  }

  // Remove a section
  function removeSection(id: number) {
    const filtered = sections.filter(s => s.id !== id);
    setSections(filtered);
    if (selectedSection === id && filtered.length > 0) setSelectedSection(filtered[0].id);
  }

  // Add field to selected section
  function addFieldType(type: string, label: string) {
    setSections(sections.map(s =>
      s.id === selectedSection
        ? {
            ...s,
            fields: [
              ...s.fields,
              type === "donationAmount"
                ? {
                    id: Date.now(),
                    label,
                    type,
                    required: true,
                    donationType: "multi",
                    options: [10, 25, 50, 100, 250, 500],
                    customAmount: true,
                    descriptionEnabled: false,
                  }
                : { id: Date.now(), label, type, required: false },
            ],
          }
        : s
    ));
  }

  // Select field for editing
  function selectField(sectionId: number, fieldId: number) {
    setSelectedField({ sectionId, fieldId });
  }

  // Update field in section
  function updateField(sectionId: number, fieldId: number, key: string, value: any) {
    setSections(sections.map(s =>
      s.id === sectionId
        ? { ...s, fields: s.fields.map(f => f.id === fieldId ? { ...f, [key]: value } : f) }
        : s
    ));
  }

  // Remove field from section
  function removeField(sectionId: number, fieldId: number) {
    setSections(sections.map(s =>
      s.id === sectionId
        ? { ...s, fields: s.fields.filter(f => f.id !== fieldId) }
        : s
    ));
    if (selectedField?.sectionId === sectionId && selectedField?.fieldId === fieldId) setSelectedField(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Tabs Navigation */}
      <nav className="bg-white border-b flex items-center px-8 pt-6">
        <div className="flex gap-8 flex-1">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`pb-2 text-lg font-medium ${activeTab === tab ? "text-blue-700" : "text-gray-700"}`}
              style={{ borderBottom: activeTab === tab ? "3px solid #1976d2" : "3px solid transparent" }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button className="ml-auto bg-green-600 text-white font-semibold px-6 py-2">Save & Publish</Button>
      </nav>
      {/* Tab Content */}
      {activeTab === "Build" && (
        <div className="flex flex-1">
          {/* Sidebar: Field Types, grouped */}
          <aside className="w-64 bg-white border-r p-6 flex flex-col gap-4 overflow-y-auto">
            {fieldGroups.map((group, gIdx) => (
              <div key={gIdx} className="mb-6">
                <h3 className="font-bold text-sm mb-2 uppercase text-gray-600">{group.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.fields.map((ft, idx) => (
                    <button key={ft.type} className="flex flex-col items-center gap-1 p-2 border rounded hover:bg-green-50" onClick={() => addFieldType(ft.type, ft.label)}>
                      <span className="text-2xl">{ft.icon}</span>
                      <span className="text-xs font-medium">{ft.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <hr className="my-4" />
            <Button onClick={addSection} className="w-full bg-blue-600 text-white">+ Add Section</Button>
            <div className="mt-4">
              <span className="font-semibold">Sections:</span>
              <ul className="mt-2">
                {sections.map(s => (
                  <li key={s.id} className="flex items-center gap-2 mb-2">
                    <button className={`px-2 py-1 rounded ${selectedSection === s.id ? "bg-blue-100" : "bg-gray-100"}`} onClick={() => setSelectedSection(s.id)}>{s.name}</button>
                    <button className="text-xs text-red-500" onClick={() => removeSection(s.id)}>Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* Main: Form Preview with Sections */}
          <main className="flex-1 flex flex-col items-center justify-start py-10">
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl flex flex-col gap-8">
              {sections.map(section => (
                <section key={section.id} className="border rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold">{section.name}</h2>
                    <button className="text-xs text-red-500" onClick={() => removeSection(section.id)}>Remove Section</button>
                  </div>
                  <div className="flex flex-col gap-3">
                    {section.fields.length === 0 && <div className="text-gray-400">No fields yet. Add fields from the left.</div>}
                    {section.fields.map((field, idx) => (
                      <div
                        key={field.id}
                        className={`p-3 border rounded cursor-pointer ${selectedField?.sectionId === section.id && selectedField?.fieldId === field.id ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                        onClick={() => selectField(section.id, field.id)}
                        draggable
                        onDragStart={e => {
                          e.dataTransfer.setData("text/plain", JSON.stringify({ sectionId: section.id, fieldIdx: idx }));
                        }}
                        onDragOver={e => e.preventDefault()}
                        onDrop={e => {
                          e.preventDefault();
                          const data = e.dataTransfer.getData("text/plain");
                          if (!data) return;
                          const { sectionId: fromSectionId, fieldIdx: fromIdx } = JSON.parse(data);
                          if (fromSectionId !== section.id) return; // Only allow within same section for now
                          if (fromIdx === idx) return;
                          // Reorder fields
                          setSections(sections => sections.map(s => {
                            if (s.id !== section.id) return s;
                            const newFields = [...s.fields];
                            const [moved] = newFields.splice(fromIdx, 1);
                            newFields.splice(idx, 0, moved);
                            return { ...s, fields: newFields };
                          }));
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <label className="block font-medium">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          <button className="text-xs text-red-500 ml-2" onClick={e => { e.stopPropagation(); removeField(section.id, field.id); }}>Remove</button>
                        </div>
                        {/* Donation Amount field preview */}
                        {isDonationAmountField(field) ? (
                          <div className="mt-4 border rounded p-4">
                            <div className="flex gap-2 mb-2">
                              <button className={`px-4 py-2 rounded-tl rounded-bl border bg-gray-200 text-gray-700`}>One Time</button>
                              <button className={`px-4 py-2 rounded-tr rounded-br border bg-gray-400 text-white`}>Monthly</button>
                            </div>
                            <div className="mb-2 font-semibold">Donation Amount</div>
                            {field.donationType === "multi" ? (
                              <div className="grid grid-cols-3 gap-4 mb-4">
                                {field.options.map((amt: number, i: number) => (
                                  <button key={i} className="bg-gray-400 hover:bg-gray-500 text-white text-lg font-semibold rounded py-3">${amt}</button>
                                ))}
                              </div>
                            ) : (
                              <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Select Amount</label>
                                <input type="range" min={field.options[0] || 0} max={field.options[1] || 100} className="w-full" />
                                <div className="flex justify-between text-xs mt-1">
                                  <span>${field.options[0] || 0}</span>
                                  <span>${field.options[1] || 100}</span>
                                </div>
                              </div>
                            )}
                            {field.customAmount && (
                              <input type="text" className="border rounded px-4 py-2 w-full mb-2" placeholder="Enter custom amount" />
                            )}
                          </div>
                        ) : (
                          <div className="text-xs text-gray-500">{field.type}</div>
                        )}
                        <div className="text-xs text-gray-400">Drag to reorder</div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
              {/* ...existing code... (button moved to nav) */}
            </div>
          </main>
          {/* Right Sidebar: Field Settings */}
          <aside className="w-80 bg-white border-l p-6 flex flex-col gap-4 overflow-y-auto">
            <h3 className="font-bold text-lg mb-2">Field Settings</h3>
            {selectedField ? (() => {
              const section = sections.find(s => s.id === selectedField.sectionId);
              if (!section) return <div className="text-gray-500">Select a field to edit its settings.</div>;
              const field = section.fields.find(f => f.id === selectedField.fieldId);
              if (!field) return <div className="text-gray-500">Select a field to edit its settings.</div>;
              // Multi-level donation settings
              if (isDonationAmountField(field)) {
                return (
                  <div>
                    <label className="block text-sm font-medium mb-1">LABEL</label>
                    <input type="text" className="border rounded px-2 py-1 w-full mb-2" value={field.label} onChange={e => updateField(section.id, field.id, "label", e.target.value)} />
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Donation Options</label>
                      <div className="flex gap-2 mb-2">
                        <button type="button" className={`px-4 py-1 rounded-l border ${field.donationType === "multi" ? "bg-gray-800 text-white" : "bg-gray-200"}`} onClick={() => updateField(section.id, field.id, "donationType", "multi")}>Multi-level</button>
                        <button type="button" className={`px-4 py-1 rounded-r border ${field.donationType === "fixed" ? "bg-gray-800 text-white" : "bg-gray-200"}`} onClick={() => updateField(section.id, field.id, "donationType", "fixed")}>Fixed</button>
                      </div>
                      <span className="text-xs text-gray-500">Set multiple price donations for this form.</span>
                    </div>
                    <div className="mb-4">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" checked={field.descriptionEnabled} onChange={e => updateField(section.id, field.id, "descriptionEnabled", e.target.checked)} />
                        <span className="text-sm">Enable amount description</span>
                      </label>
                    </div>
                    {field.donationType === "multi" && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">OPTIONS</label>
                        {field.options.map((opt: number, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 mb-2"
                            draggable
                            onDragStart={e => {
                              e.dataTransfer.setData("donation-option-idx", String(idx));
                            }}
                            onDragOver={e => e.preventDefault()}
                            onDrop={e => {
                              e.preventDefault();
                              const fromIdx = Number(e.dataTransfer.getData("donation-option-idx"));
                              if (fromIdx === idx) return;
                              const newOpts = [...field.options];
                              const [moved] = newOpts.splice(fromIdx, 1);
                              newOpts.splice(idx, 0, moved);
                              updateField(section.id, field.id, "options", newOpts);
                            }}
                          >
                            <span className="cursor-move text-gray-400">≡</span>
                            <input type="radio" name="donationOption" checked={idx === 0} readOnly />
                            <input type="number" className="border rounded px-2 py-1 w-24" value={opt} onChange={e => {
                              const newOpts = [...field.options];
                              newOpts[idx] = Number(e.target.value);
                              updateField(section.id, field.id, "options", newOpts);
                            }} />
                            <button type="button" className="text-red-500" onClick={() => {
                              const newOpts = field.options.filter((_: any, i: number) => i !== idx);
                              updateField(section.id, field.id, "options", newOpts);
                            }}>–</button>
                          </div>
                        ))}
                        <button type="button" className="text-blue-600 text-sm" onClick={() => updateField(section.id, field.id, "options", [...field.options, 0])}>+ Add Option</button>
                        <div className="text-xs text-gray-400 mt-1">Drag ≡ to reorder options</div>
                      </div>
                    )}
                    {field.donationType === "fixed" && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Amount Range</label>
                        <div className="flex gap-2">
                          <input type="number" className="border rounded px-2 py-1 w-24" value={field.options[0] || 0} onChange={e => {
                            const newOpts = [...field.options];
                            newOpts[0] = Number(e.target.value);
                            updateField(section.id, field.id, "options", newOpts);
                          }} placeholder="$X" />
                          <span>to</span>
                          <input type="number" className="border rounded px-2 py-1 w-24" value={field.options[1] || 100} onChange={e => {
                            const newOpts = [...field.options];
                            newOpts[1] = Number(e.target.value);
                            updateField(section.id, field.id, "options", newOpts);
                          }} placeholder="$Y" />
                        </div>
                        <span className="text-xs text-gray-500">Set min and max donation amount for slider.</span>
                      </div>
                    )}
                    <div className="mb-4">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" checked={field.customAmount} onChange={e => updateField(section.id, field.id, "customAmount", e.target.checked)} />
                        <span className="text-sm">Allow custom amount</span>
                      </label>
                    </div>
                  </div>
                );
              }
              // ...existing code for other field types...
              return (
                <div>
                  <label className="block text-sm font-medium mb-1">Label</label>
                  <input type="text" className="border rounded px-2 py-1 w-full mb-2" value={field.label} onChange={e => updateField(section.id, field.id, "label", e.target.value)} />
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select className="border rounded px-2 py-1 w-full mb-2" value={field.type} onChange={e => updateField(section.id, field.id, "type", e.target.value)}>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                    <option value="tel">Phone</option>
                    <option value="textarea">Textarea</option>
                    <option value="checkbox">Checkbox</option>
                  </select>
                  <label className="block text-sm font-medium mb-1">Required</label>
                  <input type="checkbox" checked={field.required} onChange={e => updateField(section.id, field.id, "required", e.target.checked)} />
                </div>
              );
            })() : (
              <div className="text-gray-500">Select a field to edit its settings.</div>
            )}
          </aside>
        </div>
      )}
      {activeTab === "Design" && (
        <div className="flex flex-1 bg-gray-50">
          {/* Main: Form Design Preview */}
          <main className="flex-1 flex flex-col items-center justify-start py-10">
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl flex flex-col gap-8">
              {/* Header Section */}
              <section className="bg-green-700 text-white rounded-xl p-8 mb-6">
                <h1 className="text-3xl font-bold mb-2">Support Our Cause</h1>
                <p className="mb-4">Help our organization by donating today! Donations go to making a difference for our cause.</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">100% Secure Donation</span>
                </div>
                <div className="bg-white rounded-lg p-4 text-gray-900 flex gap-8 justify-between items-center">
                  <div className="text-center">
                    <div className="font-bold text-xl">$16,167.52</div>
                    <div className="text-xs">Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl">145</div>
                    <div className="text-xs">Donations</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl">$25,000.00</div>
                    <div className="text-xs">Goal</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="bg-gray-200 rounded-full h-4 w-full">
                    <div className="bg-orange-400 h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>$16,167.52 amount</span>
                    <span>$25,000.00 amount</span>
                  </div>
                </div>
              </section>
              {/* Donation Amount Section */}
              <section className="mb-4">
                <h2 className="text-xl font-bold mb-2">How much would you like to donate today?</h2>
                <p className="text-gray-600 mb-4">All donations directly impact our organization and help us further our mission.</p>
                <div className="mb-2 font-semibold">Choose your donation frequency</div>
                <div className="flex gap-2 mb-4">
                  <button className="px-4 py-2 rounded-tl rounded-bl border bg-white">One Time</button>
                  <button className="px-4 py-2 rounded-tr rounded-br border bg-green-700 text-white">Monthly</button>
                </div>
                <div className="mb-2 font-semibold">Donation Amount *</div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[10,25,50,100,250,500].map((amt) => (
                    <button key={amt} className="bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded py-3">${amt}.00</button>
                  ))}
                </div>
                <input type="text" className="border rounded px-4 py-2 w-full mb-2" placeholder="Enter custom amount" />
              </section>
              {/* Donor Info Section */}
              <section className="mb-4">
                <h2 className="text-xl font-bold mb-2">Who's Giving Today?</h2>
                <p className="text-gray-600 mb-4">We'll never share this information with anyone.</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First name <span className="text-red-500">*</span></label>
                    <input type="text" className="border rounded px-4 py-2 w-full" placeholder="Demo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last name</label>
                    <input type="text" className="border rounded px-4 py-2 w-full" placeholder="GiveWP" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" className="border rounded px-4 py-2 w-full" placeholder="gonzi@gmail.com" />
                </div>
              </section>
              {/* Payment Details Section */}
              <section className="mb-4">
                <h2 className="text-xl font-bold mb-2">Payment Details</h2>
                <p className="text-gray-600 mb-4">How would you like to pay for your donation?</p>
                <div className="bg-gray-50 rounded p-4 mb-4">
                  <div className="font-semibold mb-2">Donation Summary</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between"><span>Payment Amount</span><span>$10.00</span></div>
                    <div className="flex justify-between"><span>Giving Frequency</span><span>Monthly</span></div>
                    <div className="flex justify-between font-bold"><span>Donation Total</span><span>$10.00</span></div>
                  </div>
                  <div className="mt-4 bg-yellow-50 border border-yellow-300 rounded p-2 text-yellow-800 text-xs flex items-center gap-2">
                    <span>Test mode is <b>enabled</b>. While in test mode no live donations are processed.</span>
                  </div>
                </div>
                <div className="bg-white border rounded p-4 mb-4">
                  <div className="mb-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="payment" defaultChecked />
                      <span>Donate with Test Donation</span>
                    </label>
                  </div>
                  <div className="border rounded p-4 flex flex-col items-center justify-center text-gray-600 mb-2">
                    <div className="text-3xl mb-2">⚙️</div>
                    <div className="font-semibold mb-1">Test GiveWP with the Test Donation Gateway</div>
                    <div className="text-xs">How it works: There are no fields for this gateway and you will not be charged. This payment option is only for you to test the donation experience.</div>
                  </div>
                  <div className="mb-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="payment" />
                      <span>Donate with Offline Donation</span>
                    </label>
                  </div>
                </div>
                <button className="w-full bg-green-700 text-white font-semibold py-3 rounded mt-4">Donate now</button>
              </section>
            </div>
          </main>
          {/* Right Sidebar: Design Settings */}
          <aside className="w-80 bg-white border-l p-6 flex flex-col gap-4 overflow-y-auto">
            <h3 className="font-bold text-lg mb-4">General</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Donation Form Layout</label>
              <select className="border rounded px-2 py-1 w-full">
                <option value="classic">Classic</option>
                <option value="modern">Modern</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Change the appearance of your donation form as you like. Each option is a different layout.</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Header</label>
              <input type="text" className="border rounded px-2 py-1 w-full" placeholder="Support Our Cause" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Donation Goal</label>
              <input type="number" className="border rounded px-2 py-1 w-full" placeholder="$25,000.00" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Donate Button Caption</label>
              <input type="text" className="border rounded px-2 py-1 w-full" placeholder="Donate now" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Styles</label>
              <select className="border rounded px-2 py-1 w-full">
                <option value="default">Default</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </aside>
        </div>
      )}
      {activeTab === "Settings" && (
        <div className="flex flex-1 bg-white">
          <aside className="w-64 border-r bg-white p-6 flex flex-col gap-2">
            <button className={`text-left px-4 py-2 rounded font-semibold mb-2 ${activeSection === "General" ? "bg-gray-100" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveSection("General")}>General</button>
            <button className={`text-left px-4 py-2 rounded mb-2 ${activeSection === "Donation Confirmation" ? "bg-gray-100" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveSection("Donation Confirmation")}>Donation Confirmation</button>
            <button className={`text-left px-4 py-2 rounded mb-2 ${activeSection === "Email Settings" ? "bg-gray-100" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveSection("Email Settings")}>Email Settings</button>
            <button className={`text-left px-4 py-2 rounded ${activeSection === "Currency Switcher" ? "bg-gray-100" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setActiveSection("Currency Switcher")}>Currency Switcher</button>
          </aside>
          <main className="flex-1 p-10">
            {activeSection === "General" && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold mb-6">General</h2>
                {/* ...existing General section code... */}
                <div className="mb-6 flex gap-4 items-center">
                  <label className="font-semibold">Title</label>
                  <input type="text" className="border rounded px-4 py-2 flex-1" defaultValue="Donation Form" />
                </div>
                <div className="mb-6 flex gap-4 items-center">
                  <label className="font-semibold">URL</label>
                  <input type="text" className="border rounded px-4 py-2 flex-1" defaultValue="givewp-donation-form" />
                </div>
                <div className="mb-6 flex gap-4 items-center">
                  <label className="font-semibold">Visibility</label>
                  <select className="border rounded px-4 py-2 flex-1">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="font-semibold">Excerpt</label>
                  <textarea className="border rounded px-4 py-2 w-full" rows={3} placeholder="Summary or description of this donation form" />
                  <p className="text-xs text-gray-500 mt-1">The excerpt is an optional summary or description of a donation form; in short, a summary as to why the user should give.</p>
                </div>
                <hr className="my-8" />
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="font-semibold mb-1">User Registration</div>
                    <div className="text-sm text-gray-600">Notify donors that they have an account they can use to manage their donations</div>
                  </div>
                  <label className="flex items-center gap-2">
                    <span className="text-sm">Send new account notifications</span>
                    <input type="checkbox" className="form-checkbox" />
                  </label>
                </div>
                <hr className="my-8" />
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="font-semibold mb-1">Form Grid</div>
                    <div className="text-sm text-gray-600">The GiveWP Form Grid provides a way to add a grid layout of multiple forms into posts and pages using either a block or shortcode. <a href="#" className="text-blue-600 underline">Learn more about the Form Grid</a></div>
                  </div>
                  <label className="flex items-center gap-2">
                    <span className="text-sm">Customize form grid</span>
                    <input type="checkbox" className="form-checkbox" />
                  </label>
                </div>
              </div>
            )}
            {activeSection === "Donation Confirmation" && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold mb-6">Donation Confirmation</h2>
                <div className="mb-6">
                  <label className="font-semibold">Confirmation Message</label>
                  <textarea className="border rounded px-4 py-2 w-full" rows={3} placeholder="Thank you for your donation!" />
                </div>
              </div>
            )}
            {activeSection === "Email Settings" && (
              <div className="max-w-2xl">
                <div className="flex items-center mb-6">
                  <button className="mr-4 text-gray-600 text-sm" onClick={() => setActiveSection("General")}>{"< Back to main menu"}</button>
                  <span className="font-bold text-lg">Email notifications</span>
                  <label className="ml-auto flex items-center gap-2">
                    <span className="text-sm">Customize email options</span>
                    <input type="checkbox" className="form-checkbox" />
                  </label>
                </div>
                <div className="text-gray-600 text-sm mb-4">GiveWP sends emails to both donors and specified site admins for various purposes.</div>
                <div className="text-xs text-gray-500">Uses global settings when disabled.</div>
              </div>
            )}
            {activeSection === "Currency Switcher" && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold mb-6">Currency Switcher</h2>
                <div className="text-gray-600 mb-4">This allows you to customize the Currency Switcher settings for just this donation form.</div>
                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currencySwitcher" defaultChecked />
                    <span>Global Options</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currencySwitcher" />
                    <span>Customize</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currencySwitcher" />
                    <span>Disabled</span>
                  </label>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
