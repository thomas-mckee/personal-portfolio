import { useState, useEffect } from 'react'

export const Hero = () => {
    return (
        <div className="min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="text-white ml-16">
                    <h1 className="text-7xl font-extrabold mb-10">
                        Hey! I'm <span className="bg-gradient-to-r from-blue-400 to-yellow-300 text-transparent bg-clip-text">Thomas McKee</span>
                    </h1>
                    <p className="text-4xl mb-4">
                        I'm a computer engineering student
                    </p>
                    <p className="text-2xl font-bold">
                        Welcome to my portfolio.
                    </p>
                </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/32 left-1/16 w-128 h-128 bg-slate-300 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/12 left-1/3 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}