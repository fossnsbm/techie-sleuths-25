import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
	return (
		<footer id="footer" className="container py-7 ">
			<div className="p-10 bg-card border border-secondary rounded-2xl">
				<div className="flex flex-col md:flex-row justify-between gap-8">
					<div className="flex flex-col items-center md:items-start">
						<div className="flex">
							<Image
								src="/logo.png"
								width={150}
								height={150}
								alt="Foss Community"
							/>
						</div>
						<div className="flex items-start gap-4">
							<p className="text-xl text-muted-foreground text-center">
								Where creativity fuels teamwork, inspiring the future of
								open-source trailblazers!
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-4  items-center">
						<div className="flex text-4xl">Organized by</div>
						<div className="flex col-span-full xl:col-span-2">
							<Link href="#" className="flex font-bold items-center gap-10">
								<Image src="/Foss.png" width={50} height={50} alt={"foss"} />
								<Image src="/Wif.png" width={75} height={75} alt={"foss"} />
							</Link>
						</div>
					</div>
				</div>

				<Separator className="my-6" />
				<section className="flex justify-end">
					{/* <h3 className="">
            &copy; Developed by
            <Link
              target="_blank"
              href="https://fossnsbm.org/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              NSBM FOSS Community
            </Link>
          </h3> */}

					<div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-0">
						{" "}
						<a
							href="https://icons8.com/icons/set/github"
							className="flex items-center gap-2"
						>
							{" "}
							<img
								src="https://img.icons8.com/?size=100&amp;id=111056&amp;format=png&amp;color=ffffff"
								width="25"
								alt="X"
							/>
						</a>{" "}
						<a
							href="https://icons8.com/icons/set/github"
							className="flex items-center gap-2"
						>
							{" "}
							<img
								src="https://img.icons8.com/?size=100&amp;id=98960&amp;format=png&amp;color=ffffff"
								width="25"
								alt="LinkedIn"
							/>
						</a>{" "}
						<a
							href="https://icons8.com/icons/set/github"
							className="flex items-center gap-2"
						>
							{" "}
							<img
								src="https://img.icons8.com/?size=100&amp;id=37325&amp;format=png&amp;color=ffffff"
								width="25"
								alt="Youtube"
							/>
						</a>{" "}
						<a
							href="https://icons8.com/icons/set/github"
							className="flex items-center gap-2"
						>
							{" "}
							<img
								src="https://img.icons8.com/?size=100&amp;id=118467&amp;format=png&amp;color=ffffff"
								width="25"
								alt="Facebook"
							/>
						</a>{" "}
						<a
							href="https://icons8.com/icons/set/github"
							className="flex items-center gap-2"
						>
							{" "}
							<img
								src="https://img.icons8.com/?size=100&amp;id=XVNvUWCvvlD9&amp;format=png&amp;color=ffffff"
								width="25"
								alt="Medium"
							/>
						</a>{" "}
						<a
							href="https://icons8.com/icons/set/github"
							className="flex items-center gap-2"
						>
							{" "}
							<img
								src="https://img.icons8.com/?size=100&amp;id=32309&amp;format=png&amp;color=ffffff"
								width="25"
								alt="Instagram"
							/>
						</a>{" "}
					</div>
				</section>
			</div>
		</footer>
	);
};
