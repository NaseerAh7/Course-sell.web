// Mock course data for CourseHub
export const courses = [
  // Web Development Courses
  {
    id: 1,
    title: "Advanced React & Next.js Masterclass",
    shortDescription: "Master modern React patterns, hooks, and Next.js for production-ready apps.",
    fullDescription: "Dive deep into React 19 and Next.js 15. Learn advanced patterns like compound components, render props, custom hooks, and server components. Build real-world applications with authentication, database integration, and deployment strategies. This comprehensive course covers everything from fundamentals to advanced optimization techniques.",
    price: 149.99,
    category: "Web Development",
    level: "Advanced",
    duration: "42 hours",
    lessons: 156,
    students: 12450,
    rating: 4.9,
    instructor: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1738255654134-1877cb984a8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbiUyMGRhcmt8ZW58MHx8fHwxNzcxOTYwNTA1fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "Full-Stack JavaScript Developer",
    shortDescription: "Build complete web applications with Node.js, Express, and MongoDB.",
    fullDescription: "Become a full-stack developer with this comprehensive JavaScript course. Learn to build RESTful APIs with Node.js and Express, work with MongoDB databases, implement authentication with JWT, and deploy to cloud platforms. Includes real projects like an e-commerce platform and social media app.",
    price: 179.99,
    category: "Web Development",
    level: "Intermediate",
    duration: "58 hours",
    lessons: 210,
    students: 8920,
    rating: 4.8,
    instructor: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Modern CSS & Tailwind Mastery",
    shortDescription: "Create stunning, responsive designs with modern CSS and Tailwind.",
    fullDescription: "Master CSS Grid, Flexbox, animations, and the Tailwind CSS framework. Learn to build beautiful, responsive interfaces that work across all devices. This course covers custom design systems, component libraries, dark mode implementation, and accessibility best practices.",
    price: 89.99,
    category: "Web Development",
    level: "Beginner",
    duration: "28 hours",
    lessons: 98,
    students: 15780,
    rating: 4.7,
    instructor: "Emma Williams",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
  },
  // Data Science & AI Courses
  {
    id: 4,
    title: "Machine Learning with Python",
    shortDescription: "From regression to neural networks - complete ML journey.",
    fullDescription: "Start your machine learning journey with Python. Cover supervised and unsupervised learning, decision trees, random forests, SVMs, and neural networks. Work with real datasets using scikit-learn, pandas, and TensorFlow. Build and deploy ML models for production environments.",
    price: 199.99,
    category: "Data Science",
    level: "Intermediate",
    duration: "64 hours",
    lessons: 185,
    students: 21340,
    rating: 4.9,
    instructor: "Dr. Alex Rivera",
    image: "https://images.pexels.com/photos/17484901/pexels-photo-17484901.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 5,
    title: "Deep Learning & Neural Networks",
    shortDescription: "Build AI systems with TensorFlow and PyTorch.",
    fullDescription: "Explore the cutting edge of artificial intelligence. Learn convolutional neural networks for computer vision, recurrent neural networks for sequence data, transformers for NLP, and generative models. Implement state-of-the-art architectures and train models on GPUs.",
    price: 249.99,
    category: "Data Science",
    level: "Advanced",
    duration: "72 hours",
    lessons: 198,
    students: 9870,
    rating: 4.8,
    instructor: "Dr. Priya Patel",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Data Analysis & Visualization",
    shortDescription: "Turn raw data into actionable insights with Python.",
    fullDescription: "Learn to analyze and visualize data like a pro. Master pandas for data manipulation, matplotlib and seaborn for visualization, and statistical analysis techniques. Work with real-world datasets from finance, healthcare, and marketing to extract meaningful insights.",
    price: 129.99,
    category: "Data Science",
    level: "Beginner",
    duration: "36 hours",
    lessons: 124,
    students: 18650,
    rating: 4.7,
    instructor: "James Lee",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
  },
  // Design Courses
  {
    id: 7,
    title: "UI/UX Design Fundamentals",
    shortDescription: "Design beautiful, user-centered digital experiences.",
    fullDescription: "Master the principles of user interface and user experience design. Learn design thinking, user research, wireframing, prototyping, and usability testing. Use industry-standard tools like Figma to create stunning designs. Build a professional portfolio with real projects.",
    price: 159.99,
    category: "Design",
    level: "Beginner",
    duration: "44 hours",
    lessons: 142,
    students: 14320,
    rating: 4.8,
    instructor: "Olivia Martinez",
    image: "https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbmVyJTIwbW9uaXRvcnxlbnwwfHx8fDE3NzE5NjA1MDd8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 8,
    title: "Motion Design & Animation",
    shortDescription: "Bring interfaces to life with smooth animations.",
    fullDescription: "Learn the art of motion design for digital products. Create micro-interactions, loading animations, page transitions, and complex animated sequences. Work with After Effects, Lottie, and CSS/JavaScript animations. Understand timing, easing, and the psychology of motion.",
    price: 139.99,
    category: "Design",
    level: "Intermediate",
    duration: "38 hours",
    lessons: 115,
    students: 7890,
    rating: 4.6,
    instructor: "Daniel Kim",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Design Systems & Branding",
    shortDescription: "Build scalable design systems and memorable brands.",
    fullDescription: "Create comprehensive design systems that scale. Learn to establish design tokens, component libraries, documentation, and governance. Develop brand identities with logo design, typography, color theory, and visual language. Bridge the gap between design and development.",
    price: 189.99,
    category: "Design",
    level: "Advanced",
    duration: "52 hours",
    lessons: 168,
    students: 5430,
    rating: 4.9,
    instructor: "Sophie Anderson",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60"
  }
];

// Mock purchased courses data for dashboard
export const purchasedCourses = [
  {
    courseId: 1,
    progress: 78,
    lessonsCompleted: 122,
    totalLessons: 156,
    lastAccessed: "2024-01-15",
    certificateEarned: false
  },
  {
    courseId: 4,
    progress: 100,
    lessonsCompleted: 185,
    totalLessons: 185,
    lastAccessed: "2024-01-10",
    certificateEarned: true,
    certificateDate: "2024-01-10"
  },
  {
    courseId: 7,
    progress: 45,
    lessonsCompleted: 64,
    totalLessons: 142,
    lastAccessed: "2024-01-14",
    certificateEarned: false
  }
];

// Helper function to get course by ID
export const getCourseById = (id) => {
  return courses.find(course => course.id === parseInt(id));
};

// Helper function to get courses by category
export const getCoursesByCategory = (category) => {
  if (!category || category === 'All') return courses;
  return courses.filter(course => course.category === category);
};

// Get unique categories
export const categories = ['All', ...new Set(courses.map(course => course.category))];
