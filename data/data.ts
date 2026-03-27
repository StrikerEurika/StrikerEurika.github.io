import { iconMap } from "@/components/icons";

export const projects = [
  {
    id: 1,
    shortTitle: "Diabetes Prediction",
    title: "Type-2 Diabetes Prediction",
    shortDescription: "ML model predicting type-2 diabetes with 85% accuracy",
    longDescription:
      "This project implements a machine learning model to predict the risk of type-2 diabetes based on clinical and lifestyle-related health features. Trained on publicly available medical datasets, the model achieves an accuracy of 85%, offering a reliable tool to support early detection and preventive healthcare strategies.",
    imageBig: "/images/project-diabetes.png?height=200&width=300",
    imageSmall: "/images/project-diabetes.png?height=200&width=300",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "SMOTE",
    ],
    category: "Machine Learning",
    date: "November 2024",
    duration: "3 months",
    team: "Team Project",
    github: "https://github.com/StrikerEurika/Diabetes-Classification",
    demo: null,
    results: [
      "85% accuracy on test dataset",
      "Identified top diabetic risk factors",
      "Potential application in healthcare settings",
    ],
    challenges: [
      "Handling imbalanced dataset (~10% diabetes rate)",
      "Feature selection from 10+ variables",
      "Model interpretability for healthcare professionals",
    ],
  },
  {
    id: 2,
    title: "CornGaurdAMS: Corn Disease Classification",
    shortTitle: "Corn Disease Classification",
    shortDescription:
      "Deep learning model classifying corn diseases with 90% accuracy",
    longDescription:
      "CornGuardAMS is a transfer learning-based model designed to classify corn leaf diseases with high precision. Leveraging pre-trained convolutional neural networks, it achieves over 90% accuracy in identifying multiple disease types, aiding early detection and crop protection.",
    imageBig: "/images/project-corn.png?height=200&width=300",
    imageSmall: "/images/project-corn.png?height=200&width=300",
    technologies: [
      "Python",
      "TensorFlow",
      "Pandas",
      "CNNs",
      "NumPy",
      "Matplotlib",
      "React",
      "DJango",
    ],
    category: "Deep Learning",
    date: "March 2025",
    duration: "3 months",
    team: "Team Project",
    github: "https://github.com/StrikerEurika/Corn-Disease-Classification",
    demo: null,
    results: [
      "90% directional accuracy",
      "Utilized transfer learning for efficiency",
      "Classified 3 disease types",
      "Potential for Agriculture Industry",
    ],
    challenges: [
      "Limited dataset images",
      "Prolonged traing time",
      "High model Complexity",
    ],
  },
  {
    id: 3,
    title: "Emotify: Music-Recommendation-based-on-Facial-Expression",
    shortTitle: "Music Recommendation System",
    shortDescription:
      "Interactive recommendation system using facial expressions to suggest music",
    longDescription:
      "Emotify is an interactive system that analyzes facial expressions in real time to recommend music that matches the user's mood. Using emotion detection via webcam, it maps expressions like joy, sadness, or surprise to curated tracks, offering a personalized and adaptive listening experience.",
    imageBig: "/images/project-music.png?height=200&width=300",
    imageSmall: "/images/project-music.png?height=200&width=300",
    technologies: [
      "Python",
      "JavaScript",
      "FastAPI",
      "React",
      "Deepface",
      "YouTube API",
    ],
    category: "Deep Learning",
    date: "April 2024",
    duration: "2 months",
    team: "Team Project",
    github:
      "https://github.com/StrikerEurika/Music-Recommendation-based-on-Facial-Expression",
    demo: null,
    results: ["User-friendly", "Low latency", "Mobile-responsive design"],
    challenges: [
      "Handling multiple data sources with different Emotions",
      "Not real-time data accuracy",
      "Optimizing performance for large datasets",
    ],
  },
];

export const skills = [
  "Python",
  "R",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "Data Visualization",
  "Statistical Analysis",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  "Scikit-learn",
];

export const highlights: {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}[] = [
  {
    icon: "Code",
    title: "Programming",
    description:
      "Proficient in Python, R, and SQL for data analysis and modeling",
  },
  {
    icon: "BarChart3",
    title: "Data Analysis",
    description:
      "Expertise in analyzing complex datasets, uncovering insights, and driving data-informed decisions",
  },
  {
    icon: "Presentation",
    title: "Visualization",
    description:
      "Creating compelling data stories with Matplotlib, Seaborn, and Tableau",
  },
  {
    icon: "Brain",
    title: "Machine Learning",
    description: "Building predictive models and implementing ML algorithms",
  },
];

export const resume = {
  experience: [
    {
      title: "Programming Teaching Assistant",
      company: "ITC - Senior Teaching Junior",
      location: "Phnom Penh, Cambodia",
      period: "November 2024 - June 2025",
      description: [
        "Assisted in teaching C and C++ programming to undergraduate students",
        "Conducted daily sessions to reinforce programming concepts",
        "Provided one-on-one support to students struggling with course material",
        "Organized review sessions before exams to help students prepare",
      ],
    },
  ],
  socialActivitiesAndVolunteering: [
    {
      title: "Charity for Rural School in Kampot Province",
      organization: "Youth Heart",
      location: "Kampot, Cambodia",
      period: "May 2025 - Jun 2025",
      description: [
        "Standby for Donations",
        "Contribued in Promoting the Videos",
        "Teaching English to Rural Students",
      ],
    },
    {
      title: "Celebrating Cambodia",
      organization: "Celebrating Cambodia",
      location: "Phnom Penh, Cambodia",
      period: "Nov 2024 - Jan 2025",
      description: [
        "Marching in Celebraing Parade",
        "Designed Custume representing for School Department",
        "Helped Monitoring the Event",
      ],
    },
    {
      title: "Charity for Rural School in Kampoung Thom Province",
      organization: "Youth Heart",
      location: "Kampong Thom, Cambodia",
      period: "Nov 2024 - Dec 2025",
      description: [
        "Standby for Donations",
        "Contribued in Promoting the Videos",
        "Teaching English to Rural Students",
      ],
    },
  ],
  projects: projects,
  technicalSkills: {
    "Programming Languages": [
      "Python",
      "R",
      "SQL",
      "JavaScript/TypeScript",
      "Java",
      "C/C++",
      "HTML/CSS",
      "Latex",
      "PHP",
    ],
    "Data Science Libraries": [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
    ],
    "Visualization Tools": [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Tableau",
      "Power BI",
    ],
    Databases: ["PostgreSQL", "MySQL", "SQLite"],
    "Tools & Technologies": [
      "Git/GitHub",
      "Docker",
      "Jupyter",
      "RStudio",
      "VS Code",
      "Spring Tool Suite 4",
      "PyCharm",
      "Anaconda/Miniconda",
    ],
  },
  education: [
    {
      degree: "Bachelor of English",
      institution: "Institute of Foreign Languages (IFL)",
      location: "Phnom Penh, Cambodia",
      period: "2024 - 2027 (Expected)",
      gpa: "3.0",
      coursework: [
        "Introduction to Sociology",
        "Writting Skills I & II",
        "Literature Studies",
        "Introduction to Development Issues",
        "Global Studies",
        "Introduction to Environmental Studies",
      ],
    },
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Institute of Technology of Cambodia (ITC)",
      location: "Phnom Penh, Cambodia",
      period: "2023 - 2027 (Expected)",
      gpa: "3.0",
      coursework: [
        "Calculus I, II, & III",
        "Linear Algebra",
        "Probability",
        "Differential Equation",
        "Statistics",
        "Numerical Analysis",
        "Machine Learning",
      ],
    },
    {
      degree: "High School Diploma",
      institution: "Kravanh Hun Sen High School",
      location: "Pursat, Cambodia",
      period: "2020 - 2022",
      gpa: "3.9",
      achievements: [
        "Only Grade A student of the school in 2022",
        "Top 10% of Class",
        "Student Association Team Captain",
      ],
    },
  ],
  certifications: ["OOP Programming in C++"],
};

export const faqs = [
  {
    id: 1,
    question: "What type of projects are you interested in?",
    answer:
      "I'm passionate about machine learning, data visualization, NLP, and predictive analytics. I'm particularly interested in projects that have real-world impact in healthcare, sustainability, or social good.",
  },
  {
    id: 2,
    question: "Are you available for internships?",
    answer:
      "Yes! I am actively seeking internship opportunities in data science and machine learning. I am eager to apply my skills in a practical setting and learn from industry professionals.",
  },
];
