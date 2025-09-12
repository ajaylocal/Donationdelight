import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
          <Image src="/abstract-geometric-shapes.png" alt="Login Illustration" width={320} height={240} />
        </div>
        {/* Right Login Form */}
        <div className="flex-1 flex flex-col justify-center p-10">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 font-bold">Hello,</CardTitle>
              <CardTitle className="text-2xl font-bold text-green-900">Welcome Back!</CardTitle>
              <CardDescription className="text-green-700">Please Login To Your Account To Continue.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-green-700">Email</Label>
                  <Input id="email" type="email" placeholder="admin@bookwriter.com" required className="mt-1 focus:border-green-500" />
                </div>
                <div>
                  <Label htmlFor="password" className="text-green-700">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required className="mt-1 focus:border-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember" className="border-green-500" />
                    <Label htmlFor="remember" className="ml-2 text-sm text-green-700">Remember Me</Label>
                  </div>
                  <Link href="/autho/Forgotpassword" className="text-sm text-green-600 hover:underline">Forgot Your Password?</Link>
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">Login now</Button>
              </form>
              <div className="mt-6 text-center text-sm">
                Don't Have An Account? <Link href="/autho/singup" className="text-green-600 font-semibold hover:underline">Register Here</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}