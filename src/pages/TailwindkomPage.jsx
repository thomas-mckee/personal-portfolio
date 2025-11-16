import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const TailwindKOMPage = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	const sections = [
		{ id: 'motivation', title: 'Motivation' },
		{ id: 'windscore', title: 'Wind Score', subsections: [
			{ id: 'calculations', title: 'Calculations' },
			{ id: 'scoring', title: 'Scoring' }
		]},
		{ id: 'data', title: 'Data', subsections: [
			{ id: 'stravaapi', title: 'Strava API' },
			{ id: 'openweathermapapi', title: 'OpenWeatherMap API' }
		]},
		{ id: 'frontend', title: 'Frontend' },
		{ id: 'conclusion', title: 'Conclusion' }
	];

	const scrollToSection = (sectionId) => {
		const element = document.querySelector(`[data-section="${sectionId}"]`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<div className="min-h-screen bg-gray-800 relative overflow-x-hidden">
			<Header />

			{/* Background decoration */}
			{/* <div className="absolute inset-0 opacity-10">
				<div className="absolute top-1/8 right-1/12 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/8 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/5 right-1/3 w-64 h-64 bg-slate-300 rounded-full blur-3xl"></div>
				<div className="absolute top-3/4 left-2/3 w-52 h-52 bg-blue-400 rounded-full blur-2xl"></div>
				<div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-yellow-300 rounded-full blur-xl"></div>
			</div> */}

			<div className="py-24 sm:py-32 md:py-40 relative z-10">
				<div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_192px] gap-8 overflow-x-hidden">
						{/* Main Content */}
						<div className="min-w-0 overflow-x-hidden mt-4">

							{/* Title and Tags */}
							<div className="mb-8">
								<div className="flex flex-row items-end justify-between gap-4 sm:gap-8 mb-4">
									<div className="inline-flex flex-col">
										<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-extrabold text-amber-50 mb-2">
											TailwindKOM
										</h1>
										<div className="h-1 bg-lcd-blue shadow-lcd-glow rounded-lg"></div>
									</div>
									<div className="flex flex-wrap gap-2 mb-2 flex-shrink-0">
										<span className="px-3 sm:px-4 py-2 bg-blue-500/20 border border-lcd-blue rounded-xl text-blue-300 text-sm sm:text-base font-mono">
											Full Stack
										</span>
										<span className="px-3 sm:px-4 py-2 bg-blue-500/20 border border-lcd-blue rounded-xl text-blue-300 text-sm sm:text-base font-mono">
											API
										</span>
									</div>
								</div>
							</div>

							{/* Video Container */}
							<div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-800 border border-gray-700/30">
								<iframe
									src="https://www.youtube.com/embed/_FtWEi3yTPI?autoplay=1&mute=1&loop=1&playlist=_FtWEi3yTPI&controls=0&showinfo=0&rel=0&modestbranding=1"
									title="TailwindKOM"
									className="w-full h-full"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>

							{/* Mobile Buttons */}
							<div className="xl:hidden mb-4">
								<div className="flex gap-3 justify-end">
									<a
										href="https://github.com/thomas-mckee/TailwindKOM"
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-2 bg-gray-600 text-amber-50 text-sm font-mono rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
									>
										View on GitHub
									</a>
									<a
										href="https://tailwindkom.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-2 bg-lcd-blue text-amber-50 text-sm font-mono  rounded-lg hover:bg-lcd-blue/60 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
									>
										Live Demo
									</a>
								</div>
							</div>

							{/* Project Sections */}
							<div className="bg-gray-700/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 text-gray-300 leading-relaxed text-base sm:text-lg font-tech overflow-x-hidden">
								<div data-section="motivation" id="motivation" className="mb-12 pt-6 scroll-mt-24">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Motivation
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-6">
											Any cyclist who has ridden into 30 km/h headwinds knows, you wish it was a tailwind. This is the exact idea that sparked{' '}
											<span className="font-bold">TailwindKOM</span>. I wanted to create a tool that would help cyclists plan their routes based on real-time weather conditions combined with Strava segments.
										</p>
										<p className="mb-6">
											A segment on Strava is a user-created portion of roads or trails where users can compete for the fastest time to complete the segment, and in doing so claim to be the{' '}
											<span className="font-medium text-yellow-200/90">King of the Mountain (KOM)</span> for that given segment. (For female cyclists,{' '}
											<span className="font-medium text-yellow-200/90">Queen of the Mountain (QOM)</span> is used)
										</p>
										<p>
											Of course, a tailwind alone doesn't guarantee the fastest time. A combination of wind speed and direction is necessary to create favourable conditions for a segment. This becomes apparent when looking at the leaderboards for a segment, as majority of the fastest times were achieved with these conditions.
										</p>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

								<div data-section="windscore" id="windscore" className="mb-12 scroll-mt-24">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Wind Score
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-6">
											The wind score for each segment is calculated based on the bearing of the segment, as well as the direction and speed of the wind. 
											Longitude and latitude are provided in the JSON object of each segment and are used to calculate the segment bearing based on the calculations found  {' '}
											<a 
												href="https://www.movable-type.co.uk/scripts/latlong.html" 
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-400 font-semibold"
											>
												 here
											</a>.
										</p>

										
										<div data-section="calculations" id="calculations" className="mt-8 scroll-mt-24">
											<h3 className="text-2xl font-mono font-bold pb-6 text-amber-50">Calculations</h3>
											<pre className="!text-xs border border-gray-500/30 overflow-x-auto max-w-full">
												<code className="language-javascript line-numbers whitespace-pre break-all">
													{`export const calculateSegmentBearing = (startLatLng, endLatLng) => {
	const [lat1, lng1] = startLatLng;
	const [lat2, lng2] = endLatLng;

	const dLng = (lng2 - lng1) * Math.PI / 180;
	const lat1Rad = lat1 * Math.PI / 180;
	const lat2Rad = lat2 * Math.PI / 180;

	const y = Math.sin(dLng) * Math.cos(lat2Rad);
	const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);

	let bearing = Math.atan2(y, x) * 180 / Math.PI;
	return (bearing + 360) % 360;
};`}
												</code>
											</pre>
										</div>
										
										<div data-section="scoring" id="scoring" className="mt-8 scroll-mt-24">
											<h3 className="text-2xl font-mono font-bold pb-6 text-amber-50">Scoring</h3>
											<pre className="!text-xs border border-gray-500/30 overflow-x-auto max-w-full">
												<code className="language-javascript line-numbers whitespace-pre break-all">
												{`const calculateScore = (alignmentFactor, windSpeed) => {
const maxWindSpeed = 12;
const windSpeedFactor = Math.min(windSpeed, maxWindSpeed) / maxWindSpeed;

const windPower = Math.pow(windSpeedFactor, 1.4);

let score;
if (alignmentFactor > 0.6) {
		score = 70 + (30 * windPower * (alignmentFactor - 0.5) / 0.3);
} else if (alignmentFactor > 0) {
		score = 50 + (20 * windPower * alignmentFactor / 0.7);
} else if (alignmentFactor > -0.6) {
		score = 30 + (30 * windPower * alignmentFactor / 0.7);
} else {
		score = 0 + (20 * windPower * (alignmentFactor + 0.5) / 0.3);
}

return Math.max(0, Math.min(100, Math.round(score)));
}`}
												</code>
											</pre>
										</div>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

								<div data-section="data" id="data" className="mb-12 scroll-mt-24">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Data
									</h2>
									<div className="prose prose-lg max-w-none">

										<div data-section="stravaapi" id="stravaapi" className="mt-8 scroll-mt-24">
											<h3 className="text-2xl font-mono font-bold pb-6 text-amber-50">Strava API</h3>
										</div>

										<div data-section="openweathermapapi" id="openweathermapapi" className="mt-8 scroll-mt-24">
											<h3 className="text-2xl font-mono font-bold pb-6 text-amber-50">OpenWeatherMap API</h3>
										</div>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

								<div data-section="frontend" id="frontend" className="mb-12 scroll-mt-24">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Frontend
									</h2>
									<div className="prose prose-lg max-w-none">
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

								<div data-section="conclusion" id="conclusion" className="mb-12 scroll-mt-24">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Conclusion
									</h2>
									<div className="prose prose-lg max-w-none">
									</div>
								</div>
							</div>
						</div>

						{/* Right Navigation */}
						<div className="hidden lg:block">
							<div className="fixed top-48 w-48">
								<nav className="space-y-8">
									{/* Links */}
									<div className="space-y-3">
										<a
											href="https://github.com/thomas-mckee/TailwindKOM"
											target="_blank"
											rel="noopener noreferrer"
											className="block px-4 py-2 bg-gray-600 text-amber-50 text-sm font-mono  rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-lg text-center cursor-pointer"
										>
											View on GitHub
										</a>
										<a
											href="https://tailwindkom.vercel.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="block px-4 py-2 bg-lcd-blue text-white text-sm font-mono  rounded-lg hover:bg-lcd-blue/60 transition-all duration-200 hover:scale-105 hover:shadow-lg text-center cursor-pointer"
										>
											Live Demo
										</a>
									</div>
									
									{/* Navigation */}
									<ul className="space-y-1 font-mono">
										{sections.map((section) => (
											<li key={section.id}>
												<button
													onClick={() => scrollToSection(section.id)}
													className="block text-base text-gray-400 hover:text-white transition-colors cursor-pointer"
												>
													{section.title}
												</button>
												{section.subsections && (
													<ul className="space-y-1 mt-1 ml-4">
														{section.subsections.map((subsection) => (
															<li key={subsection.id}>
																<button
																	onClick={() => scrollToSection(subsection.id)}
																	className="block text-base text-gray-400 hover:text-white transition-colors cursor-pointer"
																>
																	{subsection.title}
																</button>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</nav>
							</div>
						</div>

					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};