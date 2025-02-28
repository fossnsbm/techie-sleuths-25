import { AchievementSection } from "@/components/layout/sections/achievement";
import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { RegistrationSection } from "@/components/layout/sections/registration";
import UpperHero from "@/components/layout/sections/upperhero";

export const metadata = {
	title: "Techie Sleuths",
	description: "Techie Sleuths event on 5th of March - FOSS NSBM",
	openGraph: {
		type: "website",
		url: "https://github.com/fossnsbm/techie-sleuths-25.git",
		title: "Techie Sleuths",
		description: "Techie Sleuths event on 5th of March - FOSS NSBM",
		images: [
			{
				url: "https://ts25.fossnsbm.org/sss.png",
				width: 4200,
				height: 2500,
				alt: "Techie Sleuths - FOSS NSBM",
			},
		],
	},
};

export default function Home() {
	return (
		<div className="space-y-20">
			<UpperHero />
			<HeroSection />
			<AchievementSection />
			<RegistrationSection />
			<CommunitySection />
			<FAQSection />
			<FooterSection />
		</div>
	);
}
