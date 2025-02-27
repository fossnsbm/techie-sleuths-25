import { AchievementSection } from "@/components/layout/sections/achievement";
import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { RegistrationSection } from "@/components/layout/sections/registration";

export const metadata = {
  title: "Techie Sleuths",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "landing page",
      },
    ],
  } 
};

export default function Home() {
  return (
    <>
      <HeroSection /> 
      <AchievementSection />
      <RegistrationSection />
      <CommunitySection />
      <FAQSection />
     
    </>
  );
}
