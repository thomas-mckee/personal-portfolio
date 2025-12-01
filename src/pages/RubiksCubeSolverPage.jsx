import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
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
			{ id: 'masking', title: 'Cube Masking' },
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
							<div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-800 border-2 border-gray-500/50">
								<iframe
									src="https://www.youtube.com/embed/KjqldU64SO4?autoplay=1&mute=1&loop=1&playlist=KjqldU64SO4&controls=0&showinfo=0&rel=0&modestbranding=1"
									title="Rubik's Cube Solver"
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
							<div className="bg-gray-700/40 border-2 border-gray-500/50 rounded-2xl py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 text-amber-50/80 leading-relaxed text-base sm:text-lg font-tech overflow-x-hidden">

								{/* Motivation */}
								<div data-section="motivation" id="motivation" className="mb-12 pt-6 scroll-mt-16">
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
														>article</a>, which guided me through the key concepts. Many thanks to the author for putting together such a great tutorial.
										</p>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Thistlethwaite's Algorithm */}
								<div data-section="thistlethwaite" id="thistlethwaite" className="mb-12 scroll-mt-16">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Thistlethwaite's Algorithm
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											Thistlethwaite's algorithm breaks solving a Rubik's cube up into distinct stages, each with a restriction on the moveset that you can use. By reducing the problem space at each stage, the algorithm guarantees a solution while keeping computation manageable. The algorithm begins at group G0, which is the set of all cube states, and end at group G4 which is the solved state. Each stage of the algorithm reduces the cube from one group to the next by applying the availbe moveset.
										</p>
										<div className="bg-blue-500/10 border-l-4 border-blue-400/40 px-4 py-3 mb-4 rounded-r-lg">
											<p className="text-sm text-blue-200/80 italic">
												<span className="font-semibold text-blue-300">NOTE:</span> More information on Thistlethwaite's Algorithm can be found {' '}
													<a 
														href="https://www.jaapsch.net/puzzles/thistle.htm" 
														target="_blank"
														rel="noopener noreferrer"
														className="text-lcd-blue font-semibold"
													>
														here
													</a>.
											</p>
										</div>
										
									</div>

									{/* G0 → G1 */}
									<div data-section="g0tog1" id="g0tog1" className="mt-8 scroll-mt-16">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G0 → G1</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Orient all edges correctly (Edge Orientation)
											</p>
											<p className="mb-4">
												<strong>Available moves</strong>: <code className="bg-gray-600 px-2 py-1 rounded">U, D, F, B, L, R</code>
											</p>
											<p className="mb-4">
												In this stage, the solver can use any move that it wants to restrict the cube to G1. G1 is the set of cube states where all of the edges are oriented. 
											</p>
											{/* Cube Images */}
											<div className="flex justify-center my-6">
												<div className="overflow-x-auto">
													<div className="flex items-center gap-4 px-4">
														<div className="flex flex-col items-center">
															<div className="bg-gray-800 p-4 rounded-lg inline-block">
																<img src="/images/rubiks/g0.png" />
															</div>
															<p className="text-md text-amber-50/70 mt-2 font-mono">G0</p>
														</div>
														<div className="bg-gray-800 px-4 py-2 rounded-lg">
															<span className="text-2xl text-amber-50/70">→</span>
														</div>
														<div className="flex flex-col items-center">
															<div className="bg-gray-800 p-4 rounded-lg inline-block">
																<img src="/images/rubiks/g1.png" />
															</div>
															<p className="text-md text-amber-50/70 mt-2 font-mono">G1</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* G1 → G2 */}
									<div data-section="g1tog2" id="g1tog2" className="mt-8 scroll-mt-16">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G1 → G2</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Orient all corners and position middle layer edges
											</p>
											<p className="mb-4">
												<strong>Available moves</strong>: <code className="bg-gray-600 px-2 py-1 rounded">U, D, F2, B2, L, R</code>
											</p>
											<p className="mb-4">
												This stage ensures all corners are correctly oriented (can be solved without rotating them) and that the
												four middle-layer edges (E-slice) are in their correct layer, though not necessarily in the right positions. By position the E-slice edges in their correct layer, the U/D edges will also be in their correct layer.
												
											</p>
											{/* Cube Images */}
											<div className="flex justify-center items-center gap-4 my-6">
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g1.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">G1</p>
												</div>
												<div className="bg-gray-800 px-4 py-2 rounded-lg">
													<span className="text-2xl text-amber-50/70">→</span>
												</div>
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g2.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">G2</p>
												</div>
											</div>
										</div>
									</div>

									{/* G2 → G3 */}
									<div data-section="g2tog3" id="g2tog3" className="mt-8 scroll-mt-16">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G2 → G3</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Position edges and corners into their correct slices
											</p>
											<p className="mb-4">
												<strong>Available moves</strong>: <code className="bg-gray-600 px-2 py-1 rounded">U, D, F2, B2, L2, R2</code>
											</p>
											<p className="mb-4">
												This is the most complex stage of the algorithm, and it will contributes to the largest reduction in cube states. Ultimately, this stage ensures that colours are either on their correct face or on the opposite face, thus making the cube solveable using only half turns. For more information on this step I would encourage you read the two resources I provided earlier.
											</p>
											{/* Cube Images */}
											<div className="flex justify-center items-center gap-4 my-6">
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g2.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">G2</p>
												</div>
												<div className="bg-gray-800 px-4 py-2 rounded-lg">
													<span className="text-2xl text-amber-50/70">→</span>
												</div>
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g3.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">G3</p>
												</div>
											</div>
										</div>
									</div>

									{/* G3 → G4 */}
									<div data-section="g3tog4" id="g3tog4" className="mt-8 scroll-mt-16">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">G3 → G4</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												<strong>Goal:</strong> Solve the cube completely
											</p>
											<p className="mb-4">
												<strong>Available moves</strong>: <code className="bg-gray-600 px-2 py-1 rounded">U2, D2, F2, B2, L2, R2</code>
											</p>
											<p className="mb-4">
												Once the cube reaches G3, the remaining solve become much easier due the strong constraints imposed on the cube's state by the earlier stages. This step requires no cube masking (discussed in the next section), since the computations are simple relative to the other state transitions.
											</p>
											<p className="mb-4">
												From a starting point buried somewhere among more than 43 quintillion possible cube states, we have constrained the cube until only one configuration remained. Finally, the cube is solved.
											</p>
											{/* Cube Images */}
											<div className="flex justify-center items-center gap-4 my-6">
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g3.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">G3</p>
												</div>
												<div className="bg-gray-800 px-4 py-2 rounded-lg">
													<span className="text-2xl text-amber-50/70">→</span>
												</div>
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g4.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">G4</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Solving Algorithm */}
								<div data-section="solvingalgorithm" id="solvingalgorithm" className="mb-12 scroll-mt-16">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Solving Algorithm
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											At each stage of Thistlethwaite's algorithm, we need to search for a sequence of moves that
											transitions the cube from one group to the next. Three key techniques make this search possible:
											Cube Masking, Iterative Deepening Depth-First Search (IDDFS), and Pruning Tables.
										</p>
									</div>

									{/* Cube Masking */}
									<div data-section="masking" id="masking" className="mt-8 scroll-mt-16">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">Cube Masking</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												The state of a cube is represented as a list of 54 characters in a facelet format. A solved cube is represented by the facelet:
											</p>
											<div className="overflow-x-auto my-4">
											<div className="w-full flex md:justify-center">
												<code className="whitespace-nowrap bg-gray-600 px-4 py-2 rounded">
												'UUUUUUUUULLLLLLLLLFFFFFFFFFRRRRRRRRRBBBBBBBBBDDDDDDDDD'
												</code>
											</div>
											</div>

    										<p className="mb-4">
												When traversing through the groups in Thistlethwaite's algorithm, we are not always concerned with every sticker on the cube. Instead, we care only about the stickers that correspond to the restriction we are trying to impose on the cube (i.e., position middle slice edges). To accomplish this, we "mask" the cube by replacing the irrelevant stickers with a placeholder and keeping the few stickers that define the subgroup constraints. Masking lets us collapse many physical cube states to the same masked state. In doing so, the size of the pruning tables is greatly reduced, as is the search time.
											</p>

											<p className="mb-4">
												For example, this is the mask of a cube in group G1, which has its edges oriented:
											</p>
											<div className="overflow-x-auto my-4">
											<div className="w-full flex md:justify-center">
												<code className="whitespace-nowrap bg-gray-600 px-4 py-2 rounded">
												'XoXoXoXoXXXXXXXXXXXXXoXoXXXXXXXXXXXXXXXoXoXXXXoXoXoXoX'
												</code>
											</div>
											</div>
											<p className="mb-4">
												We only care about the stickers marked with 'o' on the cube, as they correspond to oriented edges, while the 'X' stickers can be anything. A cube in G0 is masked using the positions marked with 'o', and the goal is to find a set of moves that transitions the G0 cube mask to the G1 cube mask. Using the same scramble from the Thistlethwaite's Algorithm section above, this transition can be seen below:
											</p>
											{/* Cube Images */}
											<div className="flex justify-center items-center gap-4 my-6">
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g0mask_unsolved.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">Masked G0 Cube</p>
												</div>
												<div className="bg-gray-800 px-4 py-2 rounded-lg">
													<span className="text-2xl text-amber-50/70">→</span>
												</div>
												<div className="flex flex-col items-center">
													<div className="bg-gray-800 p-4 rounded-lg inline-block">
														<img src="/images/rubiks/g0mask_solved.png" />
													</div>
													<p className="text-md text-amber-50/70 mt-2 font-mono">Masked G1 Cube</p>
												</div>
											</div>
											<p className="mb-4">
												This masking process is repeated for G1 to G2 and G2 to G3 however, the masking becomes more complicated with edges and corners being indicated differently. Hopefully this demonstrates why masking a cube greatly reduces the number of cube states that we visit in our search while trying to reduce the cube to each group.
											</p>
										</div>
									</div>

									{/* Search */}
									<div data-section="search" id="search" className="mt-8 scroll-mt-16">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">Search</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												IDDFS combines the space efficiency of
												depth-first search with the optimality guarantees of breadth-first search. The algorithm repeatedly
												performs depth-limited DFS with increasing depth limits (1, 2, 3, ...) until a solution is found.
											</p>
											<p className="mb-4">
												For each stage, we start with a depth limit of 1 and incrementally increase it until we find a
												solution that reaches the next group. This ensures we find a reasonably short solution without
												storing all intermediate states in memory.
											</p>
											<pre className="!text-xs border border-gray-500/30 overflow-x-auto max-w-full !mb-4">
												<code className="language-python line-numbers whitespace-pre break-all">{`def solve_iidfs_pruning(solver, cube, depth_limit):
    for depth in range(1, depth_limit + 1):
        solution = []
        result = solve_dfs_with_pruning(
            solver, cube.copy(), solution, depth
        )
        if result is not None:
            return result
    return None`}</code>
											</pre>
										</div>
									</div>

									{/* Pruning Tables */}
									<div data-section="pruningtables" id="pruningtables" className="mt-8 scroll-mt-16">
										<h3 className="text-2xl font-mono font-bold pb-4 text-amber-50">Pruning Tables</h3>
										<div className="prose prose-lg max-w-none">
											<p className="mb-4">
												Pruning tables greatly accelerate the search by precomputing the minimum number of moves
												needed to reach a goal state from various other cube configurations. During the search, if the
												pruning table indicates that the current position requires more moves than we have remaining
												in our depth limit, we can immediately backtrack without exploring that branch further.
											</p>
											<p className="mb-4">
												For each stage in the algorithm, I generate a pruning table by working backwards from the solved state(s) using Breadth First Search, recording the minimum distance for millions of configurations. For example, the G1 masked cube is used as the starting state and moves in G0 are applied and entered as a state in the tree. The tables are generated once at startup and used throughout all subsequent solves.
											</p>
											<pre className="!text-xs border border-gray-500/30 overflow-x-auto max-w-full !mb-4">
												<code className="language-python line-numbers whitespace-pre break-all">{`def gen_pruning_table(solved_states, depth, moveset):
    pruning_table = {}
    previous_frontier = solved_states[:]

    for state in solved_states:
        pruning_table[state] = 0

    for i in range(1, depth + 1):
        frontier = []
        for state in previous_frontier:
            for move in moveset:
                cube = Cube(state)
                cube.rotate(move)
                new_state = "".join(cube.state)
                if new_state not in pruning_table:
                    pruning_table[new_state] = i
                    frontier.append(new_state)
        previous_frontier = frontier
    return pruning_table`}</code>
											</pre>
										</div>
									</div>
								</div>

								<p className="mb-4">
									The combination of Cube Masking, IDDFS, and Pruning Tables all contributes to solving a Rubik's Cube using Thistlethwaite's Algorithm. Cube Masking reduces the number of cube states by focusing on only relevant pieces at each stage, IDDFS ensures the solution we find is reasonably short, and Pruning Tables allow us to eliminate uproductive branches in our search. 
								</p>

								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Results */}
								<div data-section="results" id="results" className="mb-12 scroll-mt-16">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Results
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											I tested my solving algorithm using 100,000 random scrambles. The G0 → G1 pruning table was generated with a depth of 12, and the other three pruning tables used a depth of 11. The depth of the search from G0 → G1, G1 → G2, G2 → G3, G3 → G4 was 16, 18, 21, and 19 respectively. The results from these solves were:
										</p>

										{/* Metric Cards */}
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
											<div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-xl p-6">
												<div className="text-blue-300/70 text-md font-mono mb-2">Average Solve Time</div>
												<div className="text-4xl font-bold text-lcd-blue mb-1">54.5 ms</div>
											</div>

											<div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-xl p-6">
												<div className="text-blue-300/70 text-md font-mono mb-2">Average Move Count</div>
												<div className="text-4xl font-bold text-lcd-blue mb-1">42 moves</div>
											</div>

											<div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-xl p-6">
												<div className="text-blue-300/70 text-md font-mono mb-2">Success Rate</div>
												<div className="text-4xl font-bold text-lcd-blue mb-1">100%</div>
											</div>

											<div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-xl p-6">
												<div className="text-blue-300/70 text-md font-mono mb-2">Table Generation</div>
												<div className="text-4xl font-bold text-lcd-blue mb-1">37.11s</div>
											</div>
										</div>

										<p className="mb-4">
											The depth of both the pruning tables and searches were tuned until a 100% success rate was achieved. Of course you could spend an hour generating extremely wide and deep pruning tables to reduce solve time further, however I wanted to keep the table generation time fast. For my goal of building a physical solving machine, the 54ms average solve time is more than sufficient. The motors speed and synchronization will become the bottleneck of the solving speed.
										</p>

										<p className="mb-4">
											The histogram below demonstrates consistent performance, with the slowest solves only marginally worse than average. Currently, Kociemba's Two-Phase-Algorithm is the best Rubik's Cube solving algorithm and it can solve the cube in under 20 moves (God's Number). However, my implementation of Thistlethwaite's Algorithm is relatively much easier to implement and I am satisfied with the results.
										</p>

										<div className="flex flex-col items-center mb-4">
											<div className="bg-gray-800 p-4 rounded-lg inline-block">
												<img src="/images/rubiks/n=100000histogram.png" className="rounded-lg" />
											</div>
											<p className="text-md text-amber-50/70 mt-2 font-mono">Histogram of Solve Time and Move Counts | n = 100000</p>
										</div>
										

										<p className="mb-4">
											A 25 move scramble solve showing the four stages:
										</p>
										<div className="bg-gray-800 rounded-lg p-4 my-4">
											<pre className="text-sm"><code>{`Scramble Cube
L B B L B L F F R U D D B F L F R U B F B B B U R

Reduce to G1:
F U F L R L F B

Reduce to G2:
U F2 D F2 R F2 R U D F2 B2 F2 R

Reduce to G3:
R2 F2 B2 U D R2 U L2 R2 B2 U

Reduce to G4 (solved):
F2 D2 F2 U2 L2 B2 L2 F2 D2 F2 D2

Solver found solution:  F ... D2 [43]
Total Time: 0.04s`}</code></pre>
										</div>
									</div>
								</div>
							
								<div className="h-px my-8 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>

								{/* Conclusion */}
								<div data-section="conclusion" id="conclusion" className="scroll-mt-16">
									<h2 className="text-3xl sm:text-4xl font-mono font-bold pb-6 text-amber-50">
										Conclusion
									</h2>
									<div className="prose prose-lg max-w-none">
										<p className="mb-4">
											This project is just getting started, as I have plans to utilize this solver in a physical Rubik's Cube solving machine. I would like to take a picture of a scrambled cube and use OpenCV to process the cube's state. I would then run this state through my solver to generate a solution sequence. This moveset would be translated into instructions for six motors mounted on each face of the cube to quickly solve it. After all this work, perhaps I'll finally beat my 30 second personal record.
										</p>										
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