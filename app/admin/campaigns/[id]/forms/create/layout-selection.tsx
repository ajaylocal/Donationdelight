import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const layouts = [
  {
    key: "classic",
    title: "Classic",
    img: "/form1.png",
    desc: "This displays all form fields on one page. Donors fill out the form as they scroll down the page."
  },
  {
    key: "multi-step",
    title: "Multi-step",
    img: "/form2.png",
    desc: "This walks the donor through a number of steps to the donation process. The sections are broken into steps in the form."
  },
  {
    key: "two-panel",
    title: "Two Panel",
    img: "/form3.png",
    desc: "This has a side-by-side layout which breaks the sections of the donation process into steps."
  }
];

export default function LayoutSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  // Get campaign id from current path
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  const match = currentPath.match(/\/admin\/campaigns\/(\d+)/);
  const campaignId = match ? match[1] : "";

  function handleProceed() {
    if (selected && campaignId) {
      router.push(`/admin/campaigns/${campaignId}/forms/create/editor?layout=${selected}`);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-2 text-center">Choose your form layout</h2>
        <p className="text-gray-600 mb-8 text-center">Select one that suits your taste and requirements for your cause.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {layouts.map(layout => (
            <div
              key={layout.key}
              className={`border rounded-xl p-4 cursor-pointer transition-all ${selected === layout.key ? "border-green-600 shadow-lg" : "border-gray-200"}`}
              onClick={() => setSelected(layout.key)}
            >
              <img src={layout.img} alt={layout.title} className="w-full h-40 object-contain mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 text-center">{layout.title}</h3>
              <p className="text-gray-700 text-sm text-center">{layout.desc}</p>
            </div>
          ))}
        </div>
        <Button className="w-full" disabled={!selected} onClick={handleProceed}>Proceed</Button>
      </div>
    </div>
  );
}
