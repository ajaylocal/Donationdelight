import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock } from "lucide-react";
import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 relative">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Add your floating shapes here if needed */}
      </div>
      <div className="bg-white rounded-3xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 w-1/2 p-10">
          <Image src="/placeholder-logo.png" alt="Logo" width={80} height={80} className="mb-6" />
          <Image src="/abstract-geometric-shapes.png" alt="Register Illustration" width={320} height={240} />
        </div>
        {/* Right Register Form */}
        <div className="flex-1 flex flex-col justify-center p-10">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 font-bold">Hello,</CardTitle>
              <CardTitle className="text-2xl font-bold text-green-900">Welcome Back!</CardTitle>
              <CardDescription className="text-green-700">Please Login To Your Account To Continue.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="relative">
                  <Input id="name" type="text" placeholder="Enter your name" required className="pl-10 focus:border-green-500" />
                  <User className="absolute left-3 top-3 h-5 w-5 text-green-400" />
                </div>
                <div className="relative">
                  <Input id="email" type="email" placeholder="Enter your email" required className="pl-10 focus:border-green-500" />
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-green-400" />
                </div>
                <div className="relative">
                  <Input id="password" type="password" placeholder="Enter your password" required className="pl-10 focus:border-green-500" />
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-green-400" />
                </div>
                <div className="relative">
                  <Input id="confirm-password" type="password" placeholder="Confirm password" required className="pl-10 focus:border-green-500" />
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-green-400" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">Register</Button>
              </form>
              <div className="mt-6 text-center text-sm">
                <Link href="/autho/login"><span className="text-green-600 font-semibold hover:underline cursor-pointer">Already Registered?</span></Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}