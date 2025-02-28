'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function UpperHero() {
	return (
		<section className="container w-full">
			<div className="flex flex-col justify-between md:flex-row  mb-5   ">
				<div className="flex flex-row ">
					<div className="flex flex-col justify-center md:ml-14  gap-10">
						<div className="flex ">
							<Image
								src="/logo.png"
								alt="Register for the Competition"
								width={600}
								height={600}
								className="rounded-lg opacity-80 hover:opacity-90 "
							/>
						</div>

						<div className="text-xl md:text-2xl text-muted-foreground text-center flex">
							Where creativity fuels teamwork, inspiring the future of open-source trailblazers!
						</div>

						<div className="flex justify-center items-center ">
							{/* <Button
                className="w-5/6 md:w-1/2 font-bold group/arrow md:h-14 text-2xl"
                onClick={() => (window.location.href = "#register")}
              >
                Register Now
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-4 transition-transform" />
                </Button> */}
							<div className="flex items-center">
								{/* Left Triangle */}
								<div
									className="w-0 h-0 border-t-transparent border-b-transparent border-r-primary/80 group-hover:border-r-primary/90"
									style={{
										borderTopWidth: '25px',
										borderBottomWidth: '25px',
										borderRightWidth: '25px'
									}}
								/>

								{/* Button */}
								<Button
									className="bg-primary/80 group/arrow py-6 px-6 h-10 text-2xl rounded-none"
									onClick={() => (window.location.href = '#register')}
								>
									Click Me
									<ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-4 transition-transform" />
								</Button>

								{/* Right Triangle */}
								<div
									className="w-0 h-0 border-t-transparent border-b-transparent border-l-primary/80 group-hover:border-l-primary/90"
									style={{
										borderTopWidth: '25px',
										borderBottomWidth: '25px',
										borderLeftWidth: '25px'
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-row ">
					<Image
						src="/moon9.png"
						alt="Register for the Competition"
						width={1300}
						height={1300}
						className="rounded-lg opacity-80 hover:opacity-90"
					/>
				</div>
			</div>
		</section>
		// onClick={() => (window.location.href = "#register")}

		//   <section className=" w-full px-10 mx-auto">
		//   <div className="flex flex-col justify-between gap-10 py-10 md:flex-row md:py-14 mb-5">

		//     {/* Left Section: Logo, Text, Button */}
		//     <div className="flex flex-col items-center md:items-start md:flex-row md:w-1/2">
		//       <div className="flex flex-col justify-center items-center md:items-start mb-6 md:mb-0">

		//         {/* Logo Image */}
		//         <div className="flex justify-center mb-6">
		//           <Image
		//             src="/logo.png"
		//             alt="Register for the Competition"
		//             width={500}
		//             height={500}
		//             className="rounded-lg shadow-lg opacity-80 hover:opacity-90"
		//           />
		//         </div>

		//         {/* Description Text */}
		//         <div className="text-xl md:text-2xl justify-center items-center text-muted-foreground mb-7 text-center md:text-left">
		//           Where creativity fuels teamwork, inspiring the future of open-source trailblazers!
		//         </div>

		//         {/* Register Button */}
		//         <div className="flex justify-center md:justify-start w-full">
		//           <Button
		//             className="w-5/6 md:w-1/2 font-bold group/arrow md:h-14 text-2xl"
		//             onClick={() => (window.location.href = "#register")}
		//           >
		//             Register Now
		//             <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
		//           </Button>
		//         </div>
		//       </div>
		//     </div>

		//     {/* Right Section: Moon Image */}
		//     <div className="flex justify-center md:justify-end md:w-1/2">
		//       <Image
		//         src="/moon9.png"
		//         alt="Register for the Competition"
		//         width={1500}
		//         height={1500}
		//         className="rounded-lg shadow-lg opacity-80 hover:opacity-90 max-w-full"
		//       />
		//     </div>

		//   </div>
		// </section>
	);
}
