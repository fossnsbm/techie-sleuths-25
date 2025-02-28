"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function UpperHero() {
  return (
    <section className="container w-full">
      <div className="flex flex-col justify-between py-10 md:flex-row md:py-36 gap-10 ">
      <div className="flex flex-row ">
          <div className="flex flex-col justify-center gap-10"> 
            <div className="flex">
              <Image
                src="/logo.png"
                alt="Register for the Competition"
                width={600}
                height={600}
                className="rounded-lg shadow-lg opacity-80 hover:opacity-90"
              />
            </div>

            <div className="text-xl md:text-5xl  text-muted-foreground mb-2 text-center flex">
              Where creativity fuels teamwork, inspiring the future of
              open-source trailblazers!
            </div>

            <div className="flex justify-center items-center">
              <Button
                className="w-5/6 md:w-1/2 font-bold group/arrow md:h-14 text-2xl"
                onClick={() => (window.location.href = "#register")}
              >
                Register Now
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>


        <div className="flex flex-row ">
          <Image
            src="/moon9.png"
            alt="Register for the Competition"
            width={1500}
            height={1500}
            className="rounded-lg shadow-lg opacity-80 hover:opacity-90"
          />
        </div>

        
      </div>
    </section>
  );
}