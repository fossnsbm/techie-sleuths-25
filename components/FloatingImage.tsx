""use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface FloatingImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export default function FloatingImage({
	src,
	alt,
	width = 1200,
	height = 12000,
}: FloatingImageProps) {
	const imgRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (imgRef.current) {
			gsap.to(imgRef.current, {
				y: 20,
				repeat: -1,
				yoyo: true,
				duration: 2,
				ease: "power1.inOut",
			});
		}
	}, []);

	return (
		<div
			ref={imgRef}
			className="w-full mx-auto relative rounded-lg leading-none flex items-center"
		>
			<div className="relative w-[1200px]  max-w-[85vw] aspect-video ">
				<Image src={src} alt={alt} layout="fill" />
			</div>
		</div>
	);
}
