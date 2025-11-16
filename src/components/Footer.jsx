import { useState } from "react";
import { MoveUpRight, Copy, Check } from "lucide-react";
import { bioData } from '../data/bio';

export const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "thomasenmckee@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="bg-gray-800 px-4 sm:px-6 font-mono">
            <div className="max-w-7xl mx-auto  py-8 sm:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-start">
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-amber-50 text-xl sm:text-2xl  font-bold">Email</h3>
                        <button 
                            onClick={copyEmail}
                            className="flex items-center gap-3 text-amber-50/70 hover:text-amber-50 transition-colors group rounded-lg p-2 -ml-2 hover:bg-gray-700/30 cursor-pointer"
                        >
                            <span className="text-sm sm:text-base break-all">{email}</span>
                            {copied ? (
                                <Check className="w-4 h-4 text-lcd-blue" />
                            ) : (
                                <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            )}
                        </button>
                        {copied && (
                            <p className="text-lcd-blue text-sm">Email copied to clipboard!</p>
                        )}
                    </div>

                    <div className="space-y-3 sm:space-y-4 text-left sm:text-right">
                        <h3 className="text-amber-50 text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect</h3>
                        <div className="flex flex-col space-y-2 sm:space-y-3 items-start sm:items-end">
                            <a 
                                href={bioData.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-amber-50/70 hover:text-amber-50 transition-colors group"
                            >
                                <span>LinkedIn</span>
                                <MoveUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a 
                                href={bioData.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-amber-50/70 hover:text-amber-50 transition-colors group"
                            >
                                <span>GitHub</span>
                                <MoveUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a 
                                href={bioData.socialLinks.strava}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-amber-50/70 hover:text-amber-50 transition-colors group"
                            >
                                <span>Strava</span>
                                <MoveUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700/50 pt-6 sm:pt-8 mt-8 sm:mt-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                            © 2025 Thomas McKee. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs text-center sm:text-right">
                            Built with React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}