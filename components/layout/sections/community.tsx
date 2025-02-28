import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      {/* <hr className="border-secondary" /> */}
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
               
                <div>
                  Ready to join with
                  
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#3db74d] to-primary bg-clip-text">
                    Foss Community?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl md:text-2xl text-muted-foreground">
              Join our vibrant Foss community! Connect, share, and grow with
              like-minded enthusiasts. Click to dive in! 🚀
            </CardContent>

            <CardFooter>
              <Button asChild className="text-2xl">
              <a
               href="https://chat.whatsapp.com/CwI2q3ZsSx31YXoyu5Pgn2" 
             target="_blank"
              rel="noopener noreferrer"
                 className="text-center "
                       >
                  Join WhatsApp
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* <hr className="border-secondary" /> */}
    </section>
  );
};
