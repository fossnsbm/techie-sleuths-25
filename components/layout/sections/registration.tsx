import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

export const RegistrationSection = () => {
  return (
    <section id="register" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Registration</h2>
        <div className="flex flex-col w-full p-4 mx-[20%] gap-4">
            <input className="p-4 outline-none" type="text" placeholder="Team name" />
            <input className="p-4 outline-none" type="text" placeholder="Leader's name" />
            <input className="p-4 outline-none" type="tel" placeholder="Leader's Contact No." />
            <input className="p-4 outline-none" type="number" placeholder="Leader's SID" />
            <input className="p-4 outline-none" type="email" placeholder="Leader's Email" />
            <h4 className="text-2xl">Member Information</h4>
            <div className="grid lg:grid-cols-4 gap-4">
                <div className="flex flex-col gap-4">
                    <input className="p-4 outline-none" type="text" placeholder="Name (Member 1)" />
                    <input className="p-4 outline-none" type="number" placeholder="Student ID (Member 1)" />
                </div>
                <div className="flex flex-col gap-4">
                    <input className="p-4 outline-none" type="text" placeholder="Name (Member 2)" />
                    <input className="p-4 outline-none" type="number" placeholder="Student ID (Member 2)" />
                </div>
                <div className="flex flex-col gap-4">
                    <input className="p-4 outline-none" type="text" placeholder="Name (Member 3)" />
                    <input className="p-4 outline-none" type="number" placeholder="Student ID (Member 3)" />
                </div>
                <div className="flex flex-col gap-4">
                    <input className="p-4 outline-none" type="text" placeholder="Name (Member 4)" />
                    <input className="p-4 outline-none" type="number" placeholder="Student ID (Member 4)" />
                </div>
            </div>
        </div>
        <Button className="w-5/6 md:w-1/3 font-bold group/arrow md:h-14 text-2xl self-center mt-4">
            Submit
        </Button>
      </div>
    </section>
  );
};
