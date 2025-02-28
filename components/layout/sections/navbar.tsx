'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: 'Registration', href: '#register' },
        { name: 'Achievements', href: '#benefits' },
        { name: 'Past Events', href: '#events' },
        { name: 'FAQ', href: '#faq' },
    ];

    // Smooth Scroll Function
    const handleNavigation = (href: string) => {
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = href; // Fallback in case the section is not found
        }
        setOpen(false); // Close menu after clicking
    };

    return (
        <section className="container w-full">
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row justify-center gap-5 py-5">
                {navItems.map((item) => (
                    <div key={item.name} className="flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger onClick={() => handleNavigation(item.href)}>
                                        {item.name}
                                    </NavigationMenuTrigger>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                ))}
            </div>

            {/* Mobile Navigation - Hamburger Menu */}
            <div className="md:hidden flex justify-between items-center p-5">
                <Sheet open={open} onOpenChange={(isOpen) => {
                    console.log('Sheet open state:', isOpen);
                    setOpen(isOpen);
                }}>
                    <SheetTrigger asChild>
                        <button className="p-2" onClick={() => setOpen(!open)}>
                            <Menu className="size-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="flex flex-col space-y-4 p-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    className="text-lg font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
                                    onClick={() => handleNavigation(item.href)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </section>
    );
}