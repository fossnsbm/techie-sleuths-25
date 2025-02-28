import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
	icon: string;
	title: string;
	description: string;
}

const benefitList: BenefitsProps[] = [
	{
		icon: "Blocks",
		title: "Work As a Team",
		description:
			"Alone, we can accomplish small tasks, but together as a team, we can overcome challenges, innovate, and achieve greatness beyond what we ever imagined.",
	},
	{
		icon: "LineChart",
		title: "Collaborate effectively",
		description:
			"Effective collaboration thrives on trust, communication, and shared goals—when we work together, we achieve more than we ever could alone.",
	},
	{
		icon: "Clock",
		title: "Manage Your Time",
		description:
			"Manage your time wisely—prioritize what matters, stay focused, and turn every moment into a step toward success.",
	},
	{
		icon: "Trophy",
		title: "Achieve Goals Together",
		description:
			"Success is not just about individual effort; it's about supporting, inspiring, and pushing each other forward to achieve our goals together.",
	},
];

export const AchievementSection = () => {
	return (
		<section id="benefits" className="container py-12 md:py-32">
			<div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
				<div>
					<h2 className="text-3xl text-primary mb-2 tracking-wider">
						Achievement
					</h2>

					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Your Shortcut to Success
					</h2>
					<p className="text-xl md:text-2xl  text-muted-foreground mb-8">
						Where creativity fuels teamwork, inspiring the future of open-source
						trailblazers!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-4 w-full">
					{benefitList.map(({ icon, title, description }, index) => (
						<Card
							key={title}
							className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
						>
							<CardHeader>
								<div className="flex justify-between">
									<Icon
										name={icon as keyof typeof icons}
										size={32}
										color="hsl(var(--primary))"
										className="mb-6 text-primary"
									/>
									<span className="text-5xl text-muted-foreground/60 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/100">
										0{index + 1}
									</span>
								</div>

								<CardTitle>{title}</CardTitle>
							</CardHeader>

							<CardContent className="text-muted-foreground text-xl">
								{description}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
