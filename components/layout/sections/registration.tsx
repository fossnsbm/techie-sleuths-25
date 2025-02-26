import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const RegistrationSection = () => {
  
  return (
    <section id="register" className="container py-2 md:py-32 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center relative">
          <Image
            src="/ha.png"
            alt="Register for the Competition"
            width={500}
            height={500}
            className="rounded-lg shadow-lg opacity-80 hover:opacity-90"
          />
          <div className="absolute bottom-2 lg:top-96 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-32 bg-primary/50 rounded-full blur-3xl"></div>
        </div>
        <Card className="w-full bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-[2.230rem] text-center">
            Register
          </CardHeader>
          <CardContent>
          <form className="grid w-full gap-4 text-xl">
  <div className="flex flex-col gap-4">
    <Input 
      type="text" 
      placeholder="Team name" 
      className="text-lg" 
    />
    <Input 
      type="text" 
      placeholder="Leader's name" 
      className="text-lg" 
    />
    <Input 
      type="tel" 
      placeholder="Leader's Contact No." 
      className="text-lg" 
    />
    <Input 
      type="number" 
      placeholder="Leader's SID" 
      className="text-lg" 
    />
    <Input 
      type="email" 
      placeholder="Leader's Email" 
      className="text-lg" 
    />
  </div>
  <h4 className="text-2xl mt-4">Member Information</h4>
  <div className="grid lg:grid-cols-3 gap-4">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex flex-col gap-4">
        <Input 
          type="text" 
          placeholder={`Name (Member ${i + 1})`} 
          className="text-lg" 
        />
        <Input 
          type="number" 
          placeholder={`Student ID (Member ${i + 1})`} 
          className="text-lg" 
        />
      </div>
    ))}
  </div>
  <Button className="w-full font-bold text-2xl mt-4">Register</Button>
</form>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};