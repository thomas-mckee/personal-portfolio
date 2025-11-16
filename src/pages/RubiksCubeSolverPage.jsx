import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const RubiksCubeSolverPage = () => {
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
											Rubik's Cube Solver
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
							<div className="bg-gray-700/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 text-amber-50/80 leading-relaxed text-base sm:text-lg font-tech overflow-x-hidden">
								<div data-section="motivation" id="motivation" className="mb-12 pt-6 scroll-mt-8">
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
											<span className="font-bold text-yellow-200/90">King of the Mountain (KOM)</span> for that given segment. (For female cyclists,{' '}
											<span className="font-bold text-yellow-200/90">Queen of the Mountain (QOM)</span> is used)
										</p>
										<p>
											Of course, a tailwind alone doesn't guarantee the fastest time. A combination of wind speed and direction is necessary to create favourable conditions for a segment. This becomes apparent when looking at the leaderboards for a segment, as majority of the fastest times were achieved with these conditions.
										</p>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

								<div data-section="windscore" id="windscore" className="mb-12 scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-bold text-white">
										Wind Score
									</h2>
									<div className="prose prose-lg max-w-none">
										<div data-section="calculations" id="calculations" className="mt-8 scroll-mt-8">
											<h3 className="text-2xl font-bold pb-2 text-white">Calculations</h3>
											<p className="mb-6">
												Strava segments returned through Strava’s API include the latitude and longitude of the start and end points. These coordinates are currently used to calculate the bearing of each segment. However, this approach is inaccurate for segments that do not follow a straight path. In the future, I plan to improve this by using the segment’s polyline encoding, which captures the full geometry of the route, to calculate a more accurate wind score for segments with curves and turns.
											</p>
											<div className="bg-blue-500/10 border-l-4 border-blue-400/40 px-4 py-3 mb-6 rounded-r-lg">
												<p className="text-sm text-blue-200/80 italic">
													<span className="font-semibold text-blue-300">NOTE:</span> The methodology for the bearing calculation can be found {' '}
														<a 
															href="https://www.movable-type.co.uk/scripts/latlong.html" 
															target="_blank"
															rel="noopener noreferrer"
															className="text-lcd-blue font-semibold"
														>
															here
														</a>.
												</p>
											</div>
											<pre className="!text-xs border border-gray-500/30 overflow-x-auto max-w-full !mb-6">
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
}`}
												</code>
											</pre>
											<p className="mb-6">
												The cosine of the angle difference between a segment's bearing and the direction of the wind is calculated. This value is the alignment factor and will be 1 for perfect tailwinds, 0 for crosswinds, and -1 for perfect headwinds.
											</p>
											<pre className="!text-xs border border-gray-500/30 overflow-x-auto max-w-full">
												<code className="language-javascript line-numbers whitespace-pre break-all">
													{`const calculateAlignmentFactor = (angleDifference) => {
	return -1 * Math.cos(angleDifference * Math.PI / 180);
}`}
												</code>
											</pre>
										</div>
										
										<div data-section="scoring" id="scoring" className="mt-8 scroll-mt-8">
											<h3 className="text-2xl font-bold pb-2 text-white">Scoring</h3>
											<p>
												The power of the wind is scaled using an exponential function to ensure that strong winds are scored much higher. Wind scores start at a base score based on alignment factor and increase with how fast and aligned the wind is.
											</p>
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

								<div data-section="data" id="data" className="mb-12 scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-bold text-white">
										Data
									</h2>
									<div className="prose prose-lg max-w-none">

										<div data-section="stravaapi" id="stravaapi" className="mt-8 scroll-mt-8">
											<h3 className="text-2xl font-bold pb-6 text-white">Strava API</h3>
											<p className="mb-6">
												The Strava API provides access to a user's starred segments using OAuth 2.0 authentication. TailwindKOM prompts the user to connect their Strava account, and the application requests read permissions for their profile and activities. Strava's authentication flow exchanges an authorization code for an access token, which is stored and used for future API calls. The authentication system implements automatic token refreshing so that when an access token expires, the refresh token is used to obtain a new access token without requiring the user to log in again. 																			 
											</p>
											<p className="mb-6">
												Once authenticated, the app fetches all of the starred segments using Strava's <span className="font-bold text-lcd-blue">`/segments/starred`</span> endpoint. Segment data returned by the API contains start and end coordinates, distance, elevation gain, etc. This data is used to calculate the wind score for each segment as well as to display information about each segment.
											</p>

										</div>

										<div data-section="openweathermapapi" id="openweathermapapi" className="mt-8 scroll-mt-8">
											<h3 className="text-2xl font-mono font-bold pb-6 text-amber-50">OpenWeatherMap API</h3>
											<p>
												The OpenWeatherMap API provides real-time weather data for each segment's location. Using the start coordinates from each Strava segment, the application makes requests to the <span className="font-bold text-lcd-blue">`/weather`</span> endpoint to retrieve current wind conditions, including wind speed (in meters per second) and wind direction (in degrees). Additionally, the browsers geolocation is used to fetch weather conditions for the user's current location. This information is displayed at the top of the page to help users understand their current conditions at a glance.
											</p>
										</div>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

								<div data-section="frontend" id="frontend" className="mb-12 scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Frontend
									</h2>
									<div className="prose prose-lg max-w-none">
										<p>
											The frotend of TailwindKOM is built with React and styled using TailwindCSS <span className="italic">(I obviously had to use Tailwind!)</span>. The application uses a component-based architechture which enables the use of segment cards, weather displays, and a section for inspirational quotes that I like. The user is provided visual feedback on the condition of a segment given the current weather conditions. Wind score is colour-coded ranging from <span className="text-red-500">red</span> (poor conditions) to <span className="text-green-500">green</span> (excelent conditions). The segments are sorted and displayed with the best wind scores first and the worst wind scores last.
										</p>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>

								<div data-section="conclusion" id="conclusion" className="scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Conclusion
									</h2>
									<div className="prose prose-lg max-w-none">									
										<p className="mb-6">
											TailwindKOM is a project I built using the web development skills I learned over the Summer of 2025. While working on it, I got better at React, learned how to use TailwindCSS, and figured out how to work with different APIs to pull in useful data. It all started as an idea to solve a problem I kept running into on my bike rides so I turned that idea into a real tool. Now I use it on every windy ride to know exactly where big efforts are worth it.
										</p>
										<p className="mb-6">
											TailwindKOM demonstrates how combining multiples APIs can create a practical tool for cyclists looking to optimizing their rides. By analyizing real-time wind conditions and matching them against segment bearings, TailwindKOM helps riders identify the best opportunity to chase personal records or claim KOMs on Strava segmenets.   

										</p>
										<p>In the future, I would like to have a more intelligent algorithm to calculate wind scores that accounts for segments with bearing changes. I would also like to add forecasting so that you can plan your rides a few hours in advance.</p>
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