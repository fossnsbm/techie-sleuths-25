import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">

          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center gap-4">
              <Image src="/Foss.png" width={50} height={50} alt={"foss"} />
              <Image src="/Wif.png" width={75} height={75} alt={"foss"} />
            </Link>
          </div>

         
         
         
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; Developed by
            <Link
              target="_blank"
              href="https://fossnsbm.org/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              NSBM FOSS Community
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
