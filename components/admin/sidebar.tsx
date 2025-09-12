"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  Users,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Eye,
  MoreHorizontal,
  Bell,
  Settings,
  FormInput,
  Type,
  Mail,
  Phone,
  MapPin,
  CheckSquare,
  Radiation as RadioButton,
  List,
  ImageIcon,
  RefreshCw,
  Wrench,
  Package,
  Cog,
  Database,
  CheckIcon as Checkbox,
  LogOut,
  BarChart,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import Image from "next/image"

export default function AdminSidebar() {
  const [activeTab, setActiveTab] = useState("overview")
  const [open, setOpen] = useState(true)

  return (
    <>
      {/* Sidebar */}
      {/* Updated sidebar navigation to match GiveWP interface */}
      {/* <aside className={`transition-all duration-300 ${open ? "w-64" : "w-16"} border-r bg-sidebar min-h-[calc(100vh-4rem)] relative`}> */}
      <aside
        className={`transition-all duration-300 ${
          open ? "w-64" : "w-16"
        } border-r bg-sidebar sticky top-0 h-screen`}
      >
      <div className="flex items-center gap-3 px-6 py-6 border-b">
          <Image src="/placeholder-logo.png" alt="Logo" width={40} height={40} />
          {open && <span className="font-bold text-xl text-green-700">Donation Delight</span>}
        </div>
        <button
          className="absolute left-2 top-4 z-20 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-100 transition flex items-center justify-center p-0"
          style={{ width: 44, height: 44 }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close sidebar" : "Open sidebar"}
        >
          {open ? (
            <ChevronLeft className="w-8 h-8 text-gray-700" />
          ) : (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 mx-auto"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          )}
        </button>
        <nav className={`flex-1 py-6 space-y-2 flex flex-col items-stretch ${open ? "px-4" : "px-0"}`}>
            <Link
              href="/admin"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "overview" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("overview")}
            >
              <TrendingUp className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Dashboard"}
            </Link>
            <Link
              href="/admin/campaigns"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "campaigns" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("campaigns")}
            >
              <Heart className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Campaigns"}
            </Link>
            <Link
              href="/admin/pages"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "pages" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("pages")}
            >
              <List className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Pages"}
            </Link>
            <Link
              href="/admin/donors"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "donors" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("donors")}
            >
              <Users className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Donors"}
            </Link>
            <Link
              href="/admin/donations"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "donations" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("donations")}
            >
              <DollarSign className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Donations"}
            </Link>
            <Link
              href="/admin/subscriptions"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "subscriptions" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("subscriptions")}
            >
              <BarChart className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Subscriptions"}
            </Link>
            <Link
              href="/admin/reports"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "reports" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("reports")}
            >
              <BarChart className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Reports"}
            </Link>
            <Link
              href="/admin/settings"
              className={`flex items-center ${open ? "gap-3 px-3" : "justify-center"} py-2 rounded hover:bg-green-50 font-medium ${activeTab === "settings" ? "bg-green-100 text-green-700" : "text-gray-700"}`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings className={open ? "h-5 w-5" : "h-8 w-8"} />
              {open && "Settings"}
            </Link>
          </nav>
          <div className={`px-6 py-4 border-t ${open ? "" : "px-1"}`}>
            <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 font-medium">
              <LogOut className="h-5 w-5" /> {open && "Logout"}
            </button>
          </div>
        </aside>
      </>
  )
}