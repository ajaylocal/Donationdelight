import { ChevronDown, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/placeholder-logo.png" alt="Donation Delight Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-8 text-gray-700 font-medium">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-green-700">Features <ChevronDown className="h-4 w-4" /></button>
            {/* Dropdown can be added here */}
          </div>
          <Link href="#" className="hover:text-green-700">Pricing</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-green-700">Add-ons <ChevronDown className="h-4 w-4" /></button>
            {/* Dropdown can be added here */}
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-green-700">Resources <ChevronDown className="h-4 w-4" /></button>
            {/* Dropdown can be added here */}
          </div>
          <Link href="#" className="hover:text-green-700">Demo</Link>
        </nav>
        {/* Sign In */}
        <Link href="/autho/login" className="flex items-center gap-2 text-gray-700 hover:text-green-700 font-semibold">
          Sign In <LogIn className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Social */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
          <Image src="/placeholder-logo.png" alt="Donation Delight Logo" width={120} height={40} className="mb-2" />
          <div className="flex gap-3 mb-2">
            {/* Social icons (replace with your own) */}
            <Link href="#" aria-label="X"><span className="text-xl">X</span></Link>
            <Link href="#" aria-label="Facebook"><span className="text-xl">F</span></Link>
            <Link href="#" aria-label="YouTube"><span className="text-xl">Y</span></Link>
            <Link href="#" aria-label="WordPress"><span className="text-xl">W</span></Link>
            <Link href="#" aria-label="GitHub"><span className="text-xl">G</span></Link>
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <span>stripe <span className="ml-1">✔</span> VERIFIED PARTNER</span>
            <span className="flex items-center gap-2"><Image src="/cloudflare.png" alt="Cloudflare" width={24} height={24} /> CLOUD FLARE</span>
          </div>
        </div>
        {/* Newsletter */}
        <div className="md:col-span-1 flex flex-col gap-3">
          <h4 className="font-bold mb-1">JOIN OUR NEWSLETTER</h4>
          <p className="text-sm mb-2">Get fundraising insights directly in your inbox. Plus a 15% discount off all plans.</p>
          <form className="flex flex-col gap-2">
            <input type="text" placeholder="FIRST NAME" className="bg-gray-800 text-gray-100 px-3 py-2 rounded" />
            <input type="email" placeholder="EMAIL ADDRESS" className="bg-gray-800 text-gray-100 px-3 py-2 rounded" />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mt-2">SUBSCRIBE</button>
          </form>
        </div>
        {/* Policies */}
        <div className="md:col-span-1">
          <h4 className="font-bold mb-2">POLICIES</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Refund Policy</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Your Account</Link></li>
            <li><Link href="#">Our Stance Against Hate Speech</Link></li>
          </ul>
        </div>
        {/* Resources */}
        <div className="md:col-span-1">
          <h4 className="font-bold mb-2">RESOURCES</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#">Live Demo</Link></li>
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">News and Blog</Link></li>
            <li><Link href="#">Free Download</Link></li>
            <li><Link href="#">Press Kit</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>
        {/* About Us */}
        <div className="md:col-span-1">
          <h4 className="font-bold mb-2">ABOUT US</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="#">About Donation Delight</Link></li>
            <li><Link href="#">Become an Affiliate</Link></li>
            <li><Link href="#">LearnDash</Link></li>
            <li><Link href="#">MemberDash</Link></li>
            <li><Link href="#">SolidWP</Link></li>
            <li><Link href="#">The Events Calendar</Link></li>
            <li><Link href="#">KadenceWP</Link></li>
            <li><Link href="#">IconicWP</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-400">
        COPYRIGHT © 2025 DONATION DELIGHT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}

function DemoSection() {
  const cards = [
    {
      number: 1,
      title: "Create A Campaign",
      desc: (
        <>
          Explore the flexible Campaign and Form builder under <b>Donation Delight &rarr; Campaigns &rarr; Add New</b>.<br />
          To create a new Campaign Form look for “Forms” in your Campaign Dashboard.
        </>
      ),
      button: "SEE A CAMPAIGN",
      href: "#"
    },
    {
      number: 2,
      title: "Test The Donation Experience",
      desc: "Submit a test donation on the front end of this website to experience what your donors will see and how easy it is to give.",
      button: "TEST A DONATION",
      href: "#"
    },
    {
      number: 3,
      title: "Explore Form Designs",
      desc: "Choose between Two Panel, Multi-Step, and Classic form designs to craft your campaign form for your cause.",
      button: "SEE FORM DESIGNS",
      href: "#"
    },
    {
      number: 4,
      title: "View Donation Activity",
      desc: "Head to Donation Delight &rarr; Donations to see donation records and donor data in real time.",
      button: "SEE DONATIONS",
      href: "#"
    },
    {
      number: 5,
      title: "Explore Add-Ons",
      desc: "Explore features like Recurring Donations, Tributes, Currency Switcher, PDF Receipts, and more.",
      button: "EXPLORE ADD-ONS",
      href: "#"
    },
    {
      number: 6,
      title: "See Fundraising Reports",
      desc: "Dive into donation analytics under Donation Delight &rarr; Reports to understand giving trends and performance.",
      button: "SEE REPORTS",
      href: "#"
    },
  ];

  return (
    <section className="bg-[#f7f7f2] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore the Donation Delight Online Demo</h2>
        <p className="text-gray-700 mb-10 max-w-2xl">This is your gateway to exploring the powerful donation tools built specifically for nonprofits. Whether you're new to fundraising or a seasoned professional, our demo gives you a hands-on look at how Donation Delight can help you raise more and manage donations with ease.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(card => (
            <div key={card.number} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-lg mb-4">{card.number}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{card.title}</h3>
                <div className="text-gray-700 text-sm mb-6">{card.desc}</div>
              </div>
              <a href={card.href} className="mt-auto inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-full px-6 py-3 text-sm text-center">{card.button}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left: Improved Placeholder Images Layout */}
      <div className="md:w-1/2 flex items-center justify-center relative min-h-[340px] min-w-[320px]">
        <div className="relative w-full max-w-xl flex items-center justify-center">
          {/* Main image */}
          <Image
            src="/placeholder.jpg"
            alt="Dashboard Placeholder"
            width={600}
            height={320}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            style={{ zIndex: 0 }}
          />
          {/* Mobile image, slightly overlapping */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[180px] h-[340px] rounded-2xl shadow-xl border border-gray-200 z-10 bg-white overflow-hidden">
            <Image
              src="/placeholder-user.jpg"
              alt="Mobile Placeholder"
              width={180}
              height={340}
              className="object-cover w-full h-full"
            />
          </div> 
        </div>
      </div>
      {/* Right: Headline and CTA */}
      <div className="md:w-1/2 flex flex-col items-start justify-center mt-10 md:mt-0">
        <h3 className="text-green-700 font-semibold text-lg mb-2 tracking-wide">THE BEST WORDPRESS DONATION PLUGIN</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Elevate Your Fundraising,<br />Amplify Your Mission</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md">The ultimate platform for creating, managing, and optimizing your fundraising campaigns.</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow">START FOR FREE</Button>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <DemoSection />
      <Footer />
    </>
  );
}