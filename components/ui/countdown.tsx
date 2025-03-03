import { useEffect, useRef } from "react";

const target = new Date("2025-03-05T00:00:00");

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Countdown = () => {
	const daysRef = useRef<HTMLSpanElement>(null);
	const hoursRef = useRef<HTMLSpanElement>(null);
	const minutesRef = useRef<HTMLSpanElement>(null);
	const secondsRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const tick = () => {
			let diff = target.getTime() - Date.now();
			if (diff < 0) diff = 0;

			const days = (diff / DAY) >> 0;
			const hours = ((diff % DAY) / HOUR) >> 0;
			const minutes = ((diff % HOUR) / MINUTE) >> 0;
			const seconds = ((diff % MINUTE) / SECOND) >> 0;

			daysRef.current!.textContent = days.toString().padStart(2, "0");
			hoursRef.current!.textContent = hours.toString().padStart(2, "0");
			minutesRef.current!.textContent = minutes.toString().padStart(2, "0");
			secondsRef.current!.textContent = seconds.toString().padStart(2, "0");
		};

		return clearInterval.bind(null, setInterval(tick, 1000));
	}, []);

	return (
		<div className="grid grid-cols-4 grid-rows-2 lg:text-4xl text-2xl lg:w-2/3 w-full lg:mx-auto">
			<span ref={daysRef}>00</span>
			<span ref={hoursRef}>00</span>
			<span ref={minutesRef}>00</span>
			<span ref={secondsRef}>00</span>
			<span className="text-lg">Days</span>
			<span className="text-lg">Hours</span>
			<span className="text-lg">Minutes</span>
			<span className="text-lg">Seconds</span>
		</div>
	);
};
