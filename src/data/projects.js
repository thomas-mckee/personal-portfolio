export const projects = [
    {
        id: 1,
        title: "TailwindKOM",
        description: "A smart planning tool that analyzes your Strava segments against live weather data to identify which routes are most favorable given current wind direction and speed.",
        video: "/videos/Untitled.mp4",
        tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API", "OAuth 2.0"],
        github: "https://github.com/thomas-mckee/TailwindKOM",
        live: "https://tailwindkom.vercel.app/",
        details: {
            overview: "Detailed description of what this project does...",
            challenges: "Technical challenges you overcame...",
            results: "What you achieved and learned...",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            features: [
                "User authentication",
                "Real-time data updates",
                "Responsive design",
                "API integration"
            ]
        }
    },
    {
        id: 2,
        title: "Rubik's Cube Solver", 
        description: "A Rubik's cube solver based on Thistlethwaite's algorithm built using Python. In the future, an ESP32, 2 cameras, and 6 motors will be used to solve a physical cube.",
        video: "/videos/rubiks_cube_solver_demo.mp4",
        tags: ["Python", "ESP32"],
        github: "https://github.com/thomas-mckee/project2",
        live: "https://project2-demo.com",
        details: {
            overview: "Detailed description of this ML project...",
            challenges: "Data processing and model optimization challenges...",
            results: "Model accuracy and performance improvements...",
            techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "NumPy"],
            features: [
                "Data preprocessing pipeline",
                "Machine learning model training",
                "REST API endpoints",
                "Interactive dashboard"
            ]
        }
    },
    {
        id: 3,
        title: "2048 Clone",
        description: "A clone of the popular game 2048.",
        video: "/videos/2048_demo.mp4", 
        tags: ["Python", "Pygame"],
        github: "https://github.com/thomas-mckee/project3",
        live: null, // No live demo for hardware project
        details: {
            overview: "Embedded systems project description...",
            challenges: "Hardware integration and sensor calibration...",
            results: "Successfully implemented IoT solution...",
            techStack: ["Arduino", "C++", "ESP32", "Sensors", "WiFi"],
            features: [
                "Sensor data collection",
                "Wireless data transmission", 
                "Real-time monitoring",
                "Low power consumption"
            ]
        }
    }
];