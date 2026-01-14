import { useState, useEffect } from 'react';
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { ScrollDownArrow } from "../components/ScrollDownArrow";
import { LCDDisplay } from "../components/LCDDisplay";
import { projects } from '../data/projects';
import { Footer } from '../components/Footer';

const featuredProjects = projects.slice(0, 4);

export const HomePage = () => {
    const [left, setLeft] = useState(0);
    const [lcdRect, setLcdRect] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const [displayText, setDisplayText] = useState({ line1: '', line2: '' });
    const [showCursor, setShowCursor] = useState(true);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const messages = [
        { line1: "HI, IM THOMAS", line2: "WELCOME!" },
        { line1: "I STUDY COMPUTER", line2: "ENGINEERING" },
        { line1: "SCROLL DOWN TO", line2: "SEE MORE >" }
    ];

    // ------------------- TYPEWRITER -------------------
    useEffect(() => {
        const message = messages[currentMessageIndex];
        const line1Full = message.line1;
        const line2Full = message.line2;
        let currentIndex = 0;
        const totalChars = line1Full.length + line2Full.length;
        let pauseCounter = 0;

        setShowCursor(true);

        const typeInterval = setInterval(() => {
            if (currentIndex <= line1Full.length) {
                setDisplayText({
                    line1: line1Full.substring(0, currentIndex),
                    line2: ''
                });
            } else {
                setDisplayText({
                    line1: line1Full,
                    line2: line2Full.substring(0, currentIndex - line1Full.length)
                });
            }

            currentIndex++;

            if (currentIndex === line1Full.length + 1 && pauseCounter < 2) { // pause for two writes between lines
                pauseCounter++;
                currentIndex--;
                return;
            }

            if (currentIndex > totalChars) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                }, 1500);
            }
        }, 125); // char write speed

        return () => clearInterval(typeInterval);
    }, [currentMessageIndex]);


    // ------------------- IMAGE/LCD ALIGNMENT -------------------
    useEffect(() => {
        const imgWidth = 4162;
        const imgHeight = 3714;

        const lcdX = 2414;
        const lcdY = 1795;
        const lcdWidth = 1597;
        const lcdHeight = 335;
        const lcdCenterX = lcdX + lcdWidth / 2;

        function update() {
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            const displayHeight = vh;
            setImageHeight(displayHeight);
            const displayWidth = (imgWidth / imgHeight) * displayHeight;
            const scale = displayHeight / imgHeight;

            let imageLeft;
            if (displayWidth <= vw) {
                imageLeft = (vw - displayWidth) / 2;
            } else {
                const lcdPositionInDisplay = lcdCenterX * scale;
                imageLeft = vw / 2 - lcdPositionInDisplay;
            }

            setLeft(imageLeft);

            const imageTop = vh / 2 - displayHeight / 2;

            // Now compute LCD position RELATIVE TO IMAGE
            const lcdLeftOnScreen = imageLeft + lcdX * scale;
            const lcdTopOnScreen = imageTop + lcdY * scale;

            setLcdRect({
                left: lcdLeftOnScreen,
                top: lcdTopOnScreen,
                width: lcdWidth * scale,
                height: lcdHeight * scale
            });
        }

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);


    return (
        <div className='min-h-screen'>
            <Header />

            <div className="relative overflow-hidden bg-gray-800 min-h-screen flex items-center justify-center">
                
                {/* IMAGE */}
                <img
                    src="/images/6502.webp"
                    alt="6502 breadboard"
                    style={{
                        position: "absolute",
                        left: `${left}px`,
                        top: `${lcdRect.top - (1795 * (imageHeight / 3714))}px`,
                        maxWidth: "none",
                        maxHeight: "none",
                        height: `${imageHeight}px`,
                        width: "auto",
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                />

                {/* LCD Glow */}
                <div
                    style={{
                        position: "absolute",
                        left: `${lcdRect.left}px`,
                        top: `${lcdRect.top}px`,
                        width: `${lcdRect.width}px`,
                        height: `${lcdRect.height}px`,
                        backgroundColor: "rgba(83, 170, 255, 0.8)",
                        borderRadius: "6px",
                        boxShadow: "0 0 100px rgba(83, 170, 255, 0.8)",
                        pointerEvents: "none",
                        transform: "rotate(-0.5deg)",
                        transformOrigin: "center",
                    }}
                />

                {/* LCD Text */}
                <div
                    style={{
                        position: "absolute",
                        left: `${lcdRect.left}px`,
                        top: `${lcdRect.top}px`,
                        width: `${lcdRect.width}px`,
                        height: `${lcdRect.height}px`,
                        pointerEvents: "none",
                        transform: "rotate(-0.5deg)",
                        transformOrigin: "center",
                    }}
                >
                    <LCDDisplay
                        line1={
                            displayText.line1 +
                            (showCursor &&
                                displayText.line2 === '' &&
                                displayText.line1.length < messages[currentMessageIndex].line1.length
                                ? '_'
                                : '')
                        }
                        line2={
                            displayText.line2 +
                            (showCursor &&
                                displayText.line2.length < messages[currentMessageIndex].line2.length &&
                                displayText.line2.length > 0
                                ? '_'
                                : '')
                        }
                        width={lcdRect.width}
                        height={lcdRect.height}
                        opacity={1}
                    />
                </div>

                <ScrollDownArrow />
            </div>

            <div className="relative bg-gray-800 pb-20 px-4 sm:px-6 pt-12">
                <div className="max-w-7xl mx-auto mt-10 sm:mt-20">
                    <div className="inline-block mb-8 sm:mb-10 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-1 font-mono font-extrabold text-amber-50">
                            Featured Projects
                        </h1>
                        <div className="h-1 rounded-full bg-lcd-blue shadow-lcd-glow"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
