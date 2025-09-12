"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Bell, Settings, Heart } from "lucide-react"

export default function AdminTopbar() {
    return(<>
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-primary">DonationDelight</h1>
                </div>
                <Badge variant="secondary" className="text-xs">
                Admin Panel
                </Badge>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
                </Button>
                <Avatar>
                <AvatarImage src="/admin-user-avatar.png" />
                <AvatarFallback>AD</AvatarFallback>
                </Avatar>
            </div>
            </div>
        </header>
        </>
    );
}