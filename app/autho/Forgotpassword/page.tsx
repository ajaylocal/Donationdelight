import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

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
          <Image src="/abstract-geometric-shapes.png" alt="Forgot Password Illustration" width={320} height={240} />
        </div>
        {/* Right Forgot Password Form */}
        <div className="flex-1 flex flex-col justify-center p-10">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 font-bold">Forgot Password?</CardTitle>
              <CardDescription className="text-green-700">Enter your email address and we'll send you a link to reset your password.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="relative">
                  <Label htmlFor="email" className="text-green-700">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required className="mt-1 pl-10 focus:border-green-500" />
                  <Mail className="absolute left-3 top-9 h-5 w-5 text-green-400" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">Send Reset Link</Button>
              </form>
              <div className="mt-6 text-center text-sm">
                <a href="/autho/login" className="text-green-600 font-semibold hover:underline">Back to Login</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
