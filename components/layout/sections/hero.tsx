"use client";
import FloatingImage from "@/components/FloatingImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";


export const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-12">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-lg py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Event is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-[2.342rem] md:text-[4.645rem] font-extrabold">
            <h1>
              Experience the
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
               Mystery 
              </span>
              Puzzle Hunt
            </h1>
            
          </div>

          <p className="max-w-screen-sm mx-auto text-[1.334rem] md:text-[1.734rem]  text-muted-foreground ">
            {`Unravel the clues, chase the mystery, and discover the treasure that awaits. Adventure begins here!`}
          </p>

          <Countdown />

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/2 font-bold group/arrow md:h-14 text-2xl" onClick={() => window.location.href = "#register"}>
              Register Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

           
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <FloatingImage src="/sss.png" alt="Floating Image" />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
