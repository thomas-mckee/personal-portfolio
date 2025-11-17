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
		{ id: 'thistlethwaite', title: "Thistlethwaite's Alg.", subsections: [
			{ id: 'g0tog1', title: 'G0 → G1' },
			{ id: 'g1tog2', title: 'G1 → G2' },
			{ id: 'g2tog3', title: 'G2 → G3' },
			{ id: 'g3tog4', title: 'G3 → G4' }
		]},
		{ id: 'solvingalgorithm', title: 'Solving Algorithm', subsections: [
			{ id: 'search', title: 'Search' },
			{ id: 'pruningtables', title: 'Pruning Tables' }
		]},
		{ id: 'results', title: 'Results' },
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
										<h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-mono font-extrabold text-amber-50 mb-2">
											Rubik's Cube Solver
										</h1>
										<div className="h-1 bg-lcd-blue shadow-lcd-glow rounded-lg"></div>
									</div>
									<div className="flex flex-wrap gap-2 mb-2 flex-shrink-0">
										<span className="px-3 sm:px-4 py-2 bg-blue-500/20 border border-lcd-blue rounded-xl text-blue-300 text-sm sm:text-base font-mono">
											Python
										</span>
										<span className="px-3 sm:px-4 py-2 bg-blue-500/20 border border-lcd-blue rounded-xl text-blue-300 text-sm sm:text-base font-mono">
											Embedded
										</span>
									</div>
								</div>
							</div>

							{/* Video Container */}
							<div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-800 border border-gray-700/30">
								<iframe
									src="https://www.youtube.com/embed/KjqldU64SO4?autoplay=1&mute=1&loop=1&playlist=KjqldU64SO4&controls=0&showinfo=0&rel=0&modestbranding=1"
									title="Rubik' Cube Solver"
									className="w-full h-full"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>

							{/* Mobile Buttons */}
							<div className="lg:hidden mb-4">
								<div className="flex gap-3 justify-end">
									<a
										href="https://github.com/thomas-mckee/RubiksCubeSolver"
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-2 bg-gray-600 text-amber-50 text-sm font-mono rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
									>
										View on GitHub
									</a>
								</div>
							</div>

							{/* Project Sections */}
							<div className="bg-gray-700/40 border border-gray-700/30 rounded-2xl py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 text-amber-50/80 leading-relaxed text-base sm:text-lg font-tech overflow-x-hidden">

								{/* Motivation */}
								<div data-section="motivation" id="motivation" className="mb-12 pt-6 scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Motivation
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											When I was young, I loved playing with Rubik's Cubes. I was always trying to solve them faster, but my best time stayed around 30 seconds. When I got to university, I decided that instead of memorizing faster algorithms, I would use my new programming skills to solve the cube faster than I ever could by hand. 
											
											
										</p>
										<p className="mb-4">
											I found a fantastic tutorial on creating a Rubik's Cube solver in this <a 
															href="https://observablehq.com/@onionhoney/how-to-model-a-rubiks-cube" 
															target="_blank"
															rel="noopener noreferrer"
															className="text-lcd-blue font-semibold"
														>article</a>, which guided me through the key concepts. 
															
														 which provided a great tutorial on creating your own solver. Many thanks to the author as it was incredibly helpful in implementing Thistlethwaite's solving algorithm. 
										</p>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Thistlethwaite's Algorithm */}
								<div data-section="thistlethwaite" id="thistlethwaite" className="mb-12 scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Thistlethwaite's Algorithm
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											Thistlethwaite's algorithm breaks solving a Rubik's cube up into distinct stages, each with a restriction on the moveset that you can use. By reducing the problem space at each stage, the algorithm guarantees a solution while keeping computation manageable. The algorithm begins at group G0, which is the set of all cube states, and end at group G4 which is the solved state. Each stage of the algorithm reduces the cube from one group to the next by applying the availbe moveset.
										</p>
										
									</div>

									{/* G0 → G1 */}
									<div data-section="g0tog1" id="g0tog1" className="mt-8 scroll-mt-8">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G0 → G1</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Orient all edges correctly (Edge Orientation)
											</p>
											<p className="mb-4">
												<strong>Available moves</strong>: <code className="bg-gray-600 px-2 py-1 rounded">U, D, F, B, L, R</code>
											</p>
											<p className="mb-4">
												In this stage, the solver can use any move that it wants to restrict the cube to G1. G1 is the set of cube states where all of the edges are oriented. Once in G1, the edges will remain oriented because the allowed move set excludes F and B turns, which are the only moves that can change edge orientation.
											</p>
										</div>
									</div>

									{/* G1 → G2 */}
									<div data-section="g1tog2" id="g1tog2" className="mt-8 scroll-mt-8">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G1 → G2</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Orient all corners and position middle layer edges
											</p>
											<p className="mb-4">
												Available moves: <code className="bg-gray-600 px-2 py-1 rounded">U, D, F2, B2, L, R</code>
											</p>
											<p className="mb-4">
												This stage ensures all corners are correctly oriented (can be solved without rotating them) and that the
												four middle-layer edges (E-slice) are in their correct layer, though not necessarily in the right positions.
												By restricting F, B, L, and R to only 180° turns, we maintain the edge orientation from G1 while further
												constraining the cube state.
											</p>
										</div>
									</div>

									{/* G2 → G3 */}
									<div data-section="g2tog3" id="g2tog3" className="mt-8 scroll-mt-8">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G2 → G3</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Position edges and corners into their correct slices
											</p>
											<p className="mb-4">
												Available moves: <code className="bg-gray-600 px-2 py-1 rounded">U2, D2, F2, B2, L2, R2</code>
											</p>
											<p className="mb-4">
												Now restricted to only 180° turns, this stage ensures that all pieces are in their correct "slice"
												(corners are in the top or bottom layer they belong to, edges are in their correct orbital position).
												The cube may not be solved yet, but each piece is at most a 180° turn away from its solved position.
											</p>
											<p className="mb-4">
												This is the most complex stage computationally, as there are many symmetrically equivalent states
												that need to be recognized and reduced.
											</p>
										</div>
									</div>

									{/* G3 → G4 */}
									<div data-section="g3tog4" id="g3tog4" className="mt-8 scroll-mt-8">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G3 → G4</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Solve the cube completely
											</p>
											<p className="mb-4">
												Available moves: <code className="bg-gray-600 px-2 py-1 rounded">U2, D2, F2, B2, L2, R2</code>
											</p>
											<p className="mb-4">
												The final stage uses the same move set as G2 → G3, but now we're searching for the completely
												solved state. Since all pieces are already in their correct slices from the previous stage,
												this stage typically requires fewer moves (often 8-15 moves) to position everything perfectly.
											</p>
											<p className="mb-4">
												Once this stage completes, the cube is fully solved! 
											</p>
										</div>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Solving Algorithm */}
								<div data-section="solvingalgorithm" id="solvingalgorithm" className="mb-12 scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Solving Algorithm
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											At each stage of Thistlethwaite's algorithm, we need to search for a sequence of moves that
											transitions the cube from one group to the next. Two key techniques make this search tractable:
											Iterative Deepening Depth-First Search (IDDFS) and Pruning Tables.
										</p>
									</div>

									{/* Search */}
									<div data-section="search" id="search" className="mt-8 scroll-mt-8">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">Search</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Iterative Deepening Depth-First Search (IDDFS)</strong> combines the space efficiency of
												depth-first search with the optimality guarantees of breadth-first search. The algorithm repeatedly
												performs depth-limited DFS with increasing depth limits (1, 2, 3, ...) until a solution is found.
											</p>
											<p className="mb-4">
												For each stage, we start with a depth limit of 1 and incrementally increase it until we find a
												solution that reaches the next group. This ensures we find a reasonably short solution without
												storing all intermediate states in memory.
											</p>
											<div className="bg-gray-800 rounded-lg p-4 mt-4">
												<pre className="language-python line-numbers"><code>{`def solve_iidfs_pruning(solver, cube, depth_limit):
    for depth in range(1, depth_limit + 1):
        solution = []
        result = solve_dfs_with_pruning(
            solver, cube.copy(), solution, depth
        )
        if result is not None:
            return result
    return None`}</code></pre>
											</div>
										</div>
									</div>

									{/* Pruning Tables */}
									<div data-section="pruningtables" id="pruningtables" className="mt-8 scroll-mt-8">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">Pruning Tables</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												Pruning tables dramatically accelerate the search by precomputing the minimum number of moves
												needed to reach the goal state from various cube configurations. During the search, if the
												pruning table indicates that the current position requires more moves than we have remaining
												in our depth limit, we can immediately backtrack without exploring that branch further.
											</p>
											<p className="mb-4">
												For each stage, I generate a pruning table by working backwards from the solved state (or set of
												equivalent solved states) using BFS, recording the minimum distance for millions of configurations.
												The tables are generated once at startup and used throughout all subsequent solves.
											</p>
											<div className="bg-gray-800 rounded-lg p-4 mt-4">
												<pre className="language-python line-numbers"><code>{`def solve_dfs_with_pruning(solver, cube, solution, depth_remaining):
    if solver.is_solved(cube):
        return " ".join(solution)
    if depth_remaining == 0:
        return None

    # Pruning: check minimum moves needed
    lower_bound = solver.pruning_table.get(
        "".join(cube.state),
        solver.pruning_depth + 1
    )
    if lower_bound > depth_remaining:
        return None  # Prune this branch

    # Continue search...`}</code></pre>
											</div>
											<p className="mb-4 mt-4">
												The pruning tables for this implementation store between 10,000 to several million states depending
												on the stage, with depths ranging from 9-10 moves. This reduces solve time from minutes to under a second
												for most scrambles.
											</p>
										</div>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Results */}
								<div data-section="results" id="results" className="mb-12 scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Results
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											The solver successfully solves scrambled Rubik's Cubes with strong performance:
										</p>
										<ul className="list-disc list-inside mb-4 space-y-2">
											<li><strong>Average solve time:</strong> 0.5-2 seconds per cube</li>
											<li><strong>Average move count:</strong> 35-45 moves (well under the 52-move theoretical maximum)</li>
											<li><strong>Success rate:</strong> ~95-98% within depth limits</li>
											<li><strong>Pruning table generation:</strong> ~2-5 seconds at startup</li>
										</ul>
										<p className="mb-4">
											The implementation demonstrates the power of combining good algorithm design (Thistlethwaite's staged approach)
											with practical optimization techniques (IDDFS + pruning tables). While not as fast as specialized solvers
											like Kociemba's algorithm, it provides an excellent balance of simplicity, educational value, and performance.
										</p>
										<p className="mb-4">
											Sample solve output showing the four stages:
										</p>
										<div className="bg-gray-800 rounded-lg p-4 mt-4">
											<pre className="text-sm"><code>{`Scramble: R U F2 B D' L2 R' F2 U2 B2 L2 R2

G0 → G1: F2 U' R2 D F2 U2 L2 [7 moves]
G1 → G2: R2 D2 L2 U2 F2 [5 moves]
G2 → G3: U2 R2 D2 F2 L2 D2 [6 moves]
G3 → G4: U2 F2 R2 B2 L2 D2 [6 moves]

Total: 24 moves in 1.2s`}</code></pre>
										</div>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Conclusion */}
								<div data-section="conclusion" id="conclusion" className="scroll-mt-8">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Conclusion
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											This project deepened my understanding of both algorithmic problem-solving and practical optimization.
											Thistlethwaite's algorithm elegantly demonstrates how dividing a complex problem into manageable stages
											can make the seemingly impossible tractable.
										</p>
										<p className="mb-4">
											<strong>Key Takeaways:</strong>
										</p>
										<ul className="list-disc list-inside mb-4 space-y-2">
											<li>Group theory provides powerful abstractions for solving combinatorial puzzles</li>
											<li>Pruning tables can reduce search times by orders of magnitude</li>
											<li>IDDFS offers an excellent space-time tradeoff for depth-bounded search problems</li>
											<li>Pattern databases and state-space reduction are critical for real-world constraint satisfaction</li>
										</ul>
										<p className="mb-4">
											<strong>Future Improvements:</strong>
										</p>
										<ul className="list-disc list-inside mb-4 space-y-2">
											<li>Implement Kociemba's two-phase algorithm for faster solves</li>
											<li>Add pattern database compression techniques to reduce memory footprint</li>
											<li>Optimize with C++ extensions for performance-critical sections</li>
											<li>Build a web interface for interactive solving and visualization</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Right Navigation */}
						<div className="hidden lg:block">
							<div className="fixed top-48 w-48">
								<nav className="space-y-4">
									{/* Links */}
									<div>
										<a
											href="https://github.com/thomas-mckee/RubiksCubeSolver"
											target="_blank"
											rel="noopener noreferrer"
											className="block px-4 py-2 bg-gray-600 text-amber-50 text-sm font-mono  rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-lg text-center cursor-pointer"
										>
											View on GitHub
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