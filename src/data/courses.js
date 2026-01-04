export const courses = [
    {
        id: "react-fundamentals",
        title: "React Fundamentals",
        description:
            "Learn components, props, state, JSX and core React concepts from scratch.",
        level: "Beginner",
        duration: "6 Hours",
        access: "Lifetime",
        lessonsCount: 12,
        lessons: [
            {
                id: "intro-react",
                title: "Introduction to React",
                description: "What React is and why developers love it",
                duration: "05:20",
                summary: "What is React and why we use it",
                type: "Video",
                status: "Unlocked",
                content: [
                    "React is a JavaScript library used to build fast and interactive user interfaces.",
                    "It encourages building reusable UI components which makes large applications easier to manage.",
                    "React updates the UI efficiently using a virtual DOM."
                ],
                objectives: [
                    "Understand what React is",
                    "Why React is popular",
                    "How React differs from traditional JS",
                ],
                resources: ["https://react.dev"],
            },
            {
                id: "components-jsx",
                title: "Components & JSX",
                description: "Learn the building blocks of React apps",
                duration: "12:45",
                summary: "Understanding components and JSX syntax",
                type: "Video",
                status: "Unlocked",
                content: [
                    "Components are the building blocks of React applications.",
                    "JSX allows you to write HTML-like syntax inside JavaScript.",
                    "Each component should ideally do one thing and do it well."
                ],
                objectives: [
                    "What is a component",
                    "JSX syntax rules",
                    "Rendering components",
                ],
                resources: [],
            },
            {
                id: "props-state",
                title: "Props & State",
                description: "Manage data flow inside React applications",
                duration: "18:10",
                summary: "Passing data and managing state",
                type: "Video",
                status: "Unlocked",
                content: [
                    "Props are used to pass data from parent components to children.",
                    "State is used to manage data that changes over time.",
                    "Understanding when to use props vs state is key to writing clean React code."
                ],
                objectives: [
                    "Difference between props and state",
                    "When to use state",
                    "Updating state correctly",
                ],
                resources: [],
            },
        ],
    },

    {
        id: "advanced-javascript",
        title: "Advanced JavaScript",
        description:
            "Master closures, async/await, promises, scope and modern JavaScript patterns.",
        level: "Intermediate",
        duration: "8 Hours",
        access: "Lifetime",
        lessonsCount: 18,
        lessons: [
            {
                id: "closures",
                title: "Closures Deep Dive",
                description: "Understand how JavaScript remembers variables",
                duration: "14:30",
                summary: "Understanding closures with real examples",
                type: "Video",
                status: "Unlocked",
                content: [
                    "Closures are created when a function remembers variables from its outer scope.",
                    "They are commonly used in event handlers, callbacks, and data privacy.",
                    "Closures are a powerful but often misunderstood JavaScript concept."
                ],
                objectives: [
                    "What is a closure",
                    "Why closures exist",
                    "Real-world use cases",
                ],
                resources: [],
            },
            {
                id: "async-await",
                title: "Async & Await",
                description: "Write cleaner asynchronous JavaScript",
                duration: "20:10",
                summary: "Handling async code the right way",
                type: "Video",
                status: "Unlocked",
                content: [
                    "Async and await simplify working with promises.",
                    "They allow asynchronous code to look synchronous.",
                    "Error handling becomes easier using try/catch blocks."
                ],
                objectives: [
                    "Why async/await is needed",
                    "How promises work",
                    "Error handling with try/catch",
                ],
                resources: [],
            },
        ],
    },

    {
        id: "tailwind-ui",
        title: "UI with Tailwind CSS",
        description:
            "Build modern, responsive and clean UI using Tailwind CSS utilities.",
        level: "Beginner",
        duration: "4 Hours",
        access: "Lifetime",
        lessonsCount: 10,
        lessons: [
            {
                id: "tailwind-basics",
                title: "Tailwind Basics",
                description: "Learn utility-first CSS fundamentals",
                duration: "09:00",
                summary: "Utility-first CSS fundamentals",
                type: "Video",
                status: "Unlocked",
                content: [
                    "Tailwind CSS uses utility classes to build designs directly in markup.",
                    "It removes the need to write custom CSS for most layouts.",
                    "Design consistency becomes much easier with Tailwind."
                ],
                objectives: [
                    "What is utility-first CSS",
                    "How Tailwind works",
                    "Basic utility classes",
                ],
                resources: [],
            },
            {
                id: "responsive-ui",
                title: "Responsive UI",
                description: "Build mobile-first layouts easily",
                duration: "15:40",
                summary: "Build responsive layouts with ease",
                type: "Video",
                status: "Unlocked",
                content: [
                    "Tailwind provides responsive variants like sm, md, lg.",
                    "You can build mobile-first layouts quickly.",
                    "Flexbox and Grid utilities simplify layout creation."
                ],
                objectives: [
                    "Responsive breakpoints",
                    "Mobile-first design",
                    "Flex and grid usage",
                ],
                resources: [],
            },
        ],
    },

    {
        id: "react-router",
        title: "React Router Mastery",
        description:
            "Understand routing, dynamic routes, nested routes and layouts in React.",
        level: "Advanced",
        duration: "5 Hours",
        access: "Lifetime",
        lessonsCount: 14,
        lessons: [
            {
                id: "basic-routing",
                title: "Basic Routing",
                description: "Learn how SPA navigation works",
                duration: "07:50",
                summary: "Understanding SPA routing",
                type: "Video",
                status: "Unlocked",
                content: [
                    "React Router enables navigation without page reloads.",
                    "It allows mapping URLs to components.",
                    "This is the foundation of SPA routing."
                ],
                objectives: [
                    "What is routing",
                    "SPA vs MPA",
                    "Basic route setup",
                ],
                resources: [],
            },
            {
                id: "dynamic-nested",
                title: "Dynamic & Nested Routes",
                description: "Build scalable routing architectures",
                duration: "16:30",
                summary: "Advanced routing patterns",
                type: "Video",
                status: "Unlocked",
                content: [
                    "Dynamic routes use URL parameters to load data.",
                    "Nested routes help structure large applications.",
                    "Outlet is used to render child routes inside parents."
                ],
                objectives: [
                    "Dynamic params",
                    "Nested routes",
                    "Outlet usage",
                ],
                resources: [],
            },
        ],
    },
];
