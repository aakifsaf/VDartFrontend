import React, { useRef, useEffect } from 'react';
import logo from '/vdart-logo.png';
import { Target, TrendingUp, Cloud,Brain, Palette, Menu, X, MapPin, MessageCircle, Laptop } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";
import AnimatedNumber from "../components/AnimatedNumber";
import AlumniSection from "../components/AlumniSection";
import { motion } from "framer-motion";
import CoursesSection from "../components/CoursesSection";


gsap.registerPlugin(ScrollTrigger);


const features = [
  {
    title: "Innovative Approach",
    description:
      "We harness modern tech stacks and design systems to solve real-world problems in intuitive ways.",
  },
  {
    title: "Human-Centric Design",
    description:
      "Every product we build is crafted to be meaningful, accessible, and delightful to use.",
  },
  {
    title: "Scalable Architecture",
    description:
      "From startups to enterprises, our solutions scale with your needs and goals.",
  },
];

const courses = [
  {
    icon: <Target className="h-5 w-5 text-blue-800" />,
    title: "FullStack Development",
    points: [
      "Master front-end and back-end technologies to build dynamic web applications.",
      "Learn through real-time projects using HTML, CSS, JavaScript, Node.js, and more.",
    ],
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-blue-800" />,
    title: "Data Analytics",
    points: [
      "Gain skills in data cleaning, visualization, and interpretation using Excel, SQL, and Python.",
      "Transform raw data into actionable insights that drive smart decisions.",
    ],
  },
  {
    icon: <Cloud className="h-5 w-5 text-blue-800" />,
    title: "Cloud Computing",
    points: [
      "Learn the fundamentals of cloud services with AWS, Azure, and Google Cloud.",
      "Deploy, manage, and scale applications in real-world cloud environments.",
    ],
  },
  {
    icon: <Brain className="h-5 w-5 text-blue-800" />,
    title: "AI & Machine Learning",
    points: [
      "Learn to build intelligent systems with Python, TensorFlow, and real projects.",
      "Gain expertise in model training, deployment, and AI ethics.",
    ],
  },
  {
    icon: <Palette className="h-5 w-5 text-blue-800" />,
    title: "UI/UX Design",
    points: [
      "Design user-centered digital experiences with Figma, Adobe XD, and usability principles.",
      "From wireframes to prototypes, bring creativity and functionality together.",
    ],
  },
  {
    icon: <Laptop className="h-5 w-5 text-blue-800" />,
    title: "Digital Marketing",
    points: [
      "Gain practical experience by working on live projects for real clients.",
      "Learn SEO, SEM, social media, and email marketing from industry experts.",
    ],
  },
];
const roles = [
  "Full Stack Development",
  "Data Analytics",
  "Cloud Computing",
  "UI/UX Design",
  "AI & Machine Learning",
  "Cybersecurity",
];

export default function HomePage() {


  // State variables
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  // Data
  const images = [
    "/young-businesswoman-smiling-camera-removebg-preview 1.png",
    "/young-businesswoman-smiling-camera-removebg-preview 1 (1).png",
    "/young-businesswoman-smiling-camera-removebg-preview 1 (2).png",
  ];

  const alumniData = [
    {
      name: "Rahul R",
      course: "FullStack Development",
      image: "/images/alumni1.png",
      message:
        "The Full Stack Development course at VDart Academy provided me with a comprehensive understanding of both front-end and back-end technologies. The curriculum was well-structured, and the hands-on projects allowed me to apply what I learned in real-world scenarios. The instructors were knowledgeable and supportive, making the learning experience both challenging and rewarding.",
    },
    {
      name: "Priya",
      course: "Data Analytics",
      image: "/images/alumni2.png",
      message:
        "Enrolling in the Data Analytics course at VDart Academy was a pivotal decision in my career. The course covered essential topics like data visualization, statistical analysis, and predictive modeling. The practical assignments helped me build a strong portfolio, and the guidance from industry experts was invaluable in enhancing my analytical skills.",
    },
    {
      name: "Arjun P",
      course: "Cloud Computing",
      image: "/images/alumni3.png",
      message:
        "The Cloud Computing course at VDart Academy equipped me with the skills to design and manage scalable cloud infrastructures. The curriculum was up-to-date with industry standards, and the hands-on labs provided practical experience with leading cloud platforms. This course has significantly boosted my confidence in pursuing cloud-related roles.",
    },
    {
      name: "Nisha",
      course: "UI/UX Design",
      image: "/images/alumni4.png",
      message:
        "As someone passionate about design, the UI/UX Design course at VDart Academy exceeded my expectations. The course delved into user research, wireframing, and prototyping, providing a holistic view of the design process. The collaborative projects and constructive feedback from peers and instructors enriched my learning journey.",
    },
  ];

  const { name, course, image, message } = alumniData[current];
  const formRef = useRef();

  // Effects and Handlers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alumniData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ouzs018',
        'template_tf5scg9',
        formRef.current,
        'VV70-VP44EmtKcUy2'
      )
      .then(
        (result) => {
          alert("✅ Form submitted successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send form. Please try again.");
          console.error(error.text);
        }
      );
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);


  useEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollInSection = Math.min(
        Math.max(scrollY - sectionTop, 0),
        sectionHeight - windowHeight
      );

      const maxScroll = inner.scrollWidth - window.innerWidth;
      const scrollProgress = scrollInSection / (sectionHeight - windowHeight);
      const translateX = -scrollProgress * maxScroll;

      inner.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;

      if (
        scrollTop >= offsetTop &&
        scrollTop <= offsetTop + sectionHeight
      ) {
        const relativeScroll = scrollTop - offsetTop;
        const scrollPercentage = relativeScroll / sectionHeight;

        const maxScroll = innerRef.current.scrollWidth - innerRef.current.clientWidth;
        const newScrollX = maxScroll * scrollPercentage;

        setScrollX(newScrollX);
      }
    };

    setContainerWidth(innerRef.current.scrollWidth - innerRef.current.clientWidth);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-green-100 font-sans text-[#002244] w-full">
      {/* Header */}
      <header className="bg-[#D9F5E2] py-2 px-2 md:px-4 fixed w-full flex justify-between items-center shadow-sm z-50 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 relative">
          <img src={logo} alt="VDart Logo" className="h-12 w-auto md:h-16" />
        </div>
        {/* Nav Links and User Icon */}
        <div className="flex items-center gap-2 md:gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 md:gap-10 text-sm font-medium text-blue-900">
            <a href="#home" className="font-bold text-blue-900">Home</a>
            <a href="#courses" className="text-blue-900">Courses</a>
            <a href="#gallery" className="text-blue-900">Gallery</a>
            <a href="#about" className="text-blue-900">About Us</a>
            <a href="#contact" className="text-blue-900">Contact</a>
          </nav>
          {/* Hamburger Icon */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Open navigation"
          >
            {navOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
          </button>
          <button className="bg-blue-900 text-white px-4 md:px-8 py-2 text-sm rounded shadow hover:bg-blue-800 transition">
            Login
          </button>
        </div>
        {/* Mobile Nav Drawer */}
        {navOpen && (
          <nav className="fixed top-16 left-0 w-full bg-[#D9F5E2] shadow-lg z-50 flex flex-col items-center py-6 gap-6 md:hidden animate-slideDown">
            <a href="#home" className="font-bold text-blue-900" onClick={() => setNavOpen(false)}>Home</a>
            <a href="#courses" className="text-blue-900" onClick={() => setNavOpen(false)}>Courses</a>
            <a href="#gallery" className="text-blue-900" onClick={() => setNavOpen(false)}>Gallery</a>
            <a href="#about" className="text-blue-900" onClick={() => setNavOpen(false)}>About Us</a>
            <a href="#contact" className="text-blue-900" onClick={() => setNavOpen(false)}>Contact</a>
          </nav>
        )}
      </header>
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slideDown {
            animation: slideDown 0.2s ease;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[200px] md:min-h-[300px] lg:min-h-[400px] px-4 md:px-8 pt-24 pb-16" id="home">
        {/* Decorative Images */}
        <img
          src="/design1-removebg-preview.png"
          alt="Left Shape"
          className="absolute top-0 left-0 hidden md:block w-[530px] h-[600px] opacity-50 "
        />
        <img
          src="/design2-removebg-preview.png"
          alt="Right Shape"
          className="absolute bottom-0 right-0 hidden md:block w-[500px] h-[540px] opacity-50"
        />
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 flex items-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Content */}
            <div className="md:w-[87%] w-full">
              {/* Title */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 uppercase tracking-tight">
                  Welcome to Vdart Academy!!
                </h1>
              </div>

              {/* Typing Text */}
              <div className="mb-8">
              <p className="text-base md:text-lg lg:text-xl font-mono leading-relaxed flex items-center flex-wrap gap-2 sm:gap-4">
  <span className="font-bold text-blue-900 whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-2xl">
    Academic Internships in
  </span>
  <span className="relative flex items-center h-[1.8em]">
    <span className="text-sky-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl leading-none">
      {text}
    </span>
    <span className="animate-pulse text-sky-700 text-lg md:text-xl ml-1">|</span>
  </span>
</p>
</div>


              {/* Description */}
              <div className="mb-12">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Step into VDart Academy. Power up your curiosity. <br />
                  Learn limitlessly with tools, insights, and support designed just for you. <br />
                  Fuel your ambitions with industry-aligned courses, hands-on learning, and expert mentorship.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center md:items-start md:flex-row  gap-3 md:gap-6">
                <a href="https://forms.gle/UJpTdevcRG2d61ur6" target="_blank" rel="noopener noreferrer">
                <button className="w-[40vw] md:w-auto px-6 md:px-8 py-3 md:py-4 text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all duration-200">
                  
                    Enroll
                </button>
                 </a>
                <button className="w-[30vw] md:w-auto px-2 md:px-8 py-3 md:py-4 bg-green-200 text-blue-900 rounded-lg hover:bg-green-300 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
            
          </div>
        </div>
        <div className="hidden md:flex justify-end items-center">
              <img
                src={images[currentIndex]}
                alt="Changing"
                className={`absolute bottom-0 right-0 transition-all duration-500  md:h-[460px] ${
                  currentIndex === 2 ? 'max-w-[480px] md:max-w-[480px] right-0' : 'max-w-[330px] md:max-w-[330px] right-4 md:right-10'
                }`}
              />
        </div>
      </section>

{/* About Us */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-4 md:px-20" id="about">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left - Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We're a passionate team focused on blending technology, design, and innovation to create seamless digital experiences. Our goal is to deliver products that people love to use and rely on daily.
          </p>

          <div className="space-y-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="p-4 border-l-4 border-blue-500 bg-white shadow-md rounded-lg hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg text-blue-700 mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="w-full md:w-1/2 bg-white"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/about-us (1).png"
            alt="Team working illustration"
            className="w-full max-h-[450px] object-contain rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>

      {/* Courses Offered */}
      {/* <section
  ref={sectionRef}
  className="relative h-[200vh] bg-gradient-to-br from-green-50 to-blue-50 z-10"
  id="courses"
>
  <div className="sticky top-2 h-screen flex flex-col justify-center items-start overflow-hidden">
    <h3 className="text-3xl md:text-3xl font-bold text-blue-800 mb-6 md:mb-10 text-center mx-auto w-fit pb-6 md:pb-10 px-4">
      <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
        Explore
      </span>{" "}
      Our Courses
    </h3>

    <div
      ref={innerRef}
      className="flex gap-6 md:gap-8 transition-transform duration-300 ease-out will-change-transform px-4 md:px-[25vw]"
    >
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] w-[80vw] md:w-[47vw] lg:h-[25vw] md:h-[50vh] bg-white rounded-2xl shadow-lg p-6 flex-shrink-0 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-4 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-sky-500 shadow-lg text-white text-2xl">
            {course.icon}
          </div>
          <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 pb-6  text-center">
            {course.title}
          </h4>
          <ul className="space-y-2 text-sm text-gray-700 pl-4 md:pl-8">
            {course.points.map((pt, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section> */}

<CoursesSection />

{/* 
<section className="relative px-4 py-12 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden" id="courses">
  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent opacity-30 pointer-events-none" />
  <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-100/20 rounded-full blur-2xl animate-float" />
  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-green-100/20 rounded-full blur-2xl animate-float-reverse" />

  <h3 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-8 z-10 relative tracking-tight">
    <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Explore</span> Our Courses
  </h3>

  <div className="overflow-hidden relative z-10">
    <div
      ref={sliderRef}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      className="flex gap-4 px-3 pb-6 snap-x snap-mandatory overflow-x-auto scroll-smooth"
      style={{ scrollbarWidth: "none" }}
    >
      <style>{`::-webkit-scrollbar { display: none; }`}</style>

      {[...courses, ...courses].map((course, idx) => (
        <div
          key={idx}
          className="min-w-[240px] md:min-w-[300px] h-auto group relative overflow-hidden rounded-xl shadow-lg transition-all duration-200 hover:shadow-md hover:scale-102"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/5 to-blue-900/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl opacity-40 pointer-events-none" />
          <div className="relative p-4">
            <div className="flex items-center justify-center w-12 h-12 mb-3 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-sky-500 shadow-md">
              <div className="text-white text-xl">{course.icon}</div>
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-sky-600 transition-colors duration-200">
              {course.title}
            </h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              {course.points.map((pt, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-500 opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl animate-pulse" />
  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-100/20 rounded-full blur-2xl animate-pulse-delay" />
</section> */}

      {/* About Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 md:px-20">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-12 py-4">
      Why Choose <span className="text-sky-600">VDart Academy?</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Feature Block */}
      {[
        {
          title: "Expert Trainers",
          icon: "/icons/ChalkboardTeacher.png",
          description1: "Led by seasoned professionals from the VDart Group—bringing real-world experience into the classroom.",
          description2: "Sessions enriched with real-time examples, hands-on activities, and industry scenarios.",
        },
        {
          title: "Career Support",
          icon: "/icons/GraduationCap.png",
          description1: "We help you launch your career, not just learn.",
          description2: "Resume building, mock interviews, and personalized career strategy planning.",
        },
        {
          title: "Internship Access",
          icon: "/icons/Briefcase.png",
          description1: "Gain practical experience by applying what you learn in real internships.",
          description2: "Hands-on exposure across development, analytics, marketing, and more.",
        },
        {
          title: "Industry-Aligned Curriculum",
          icon: "/icons/Buildings.png",
          description1: "Courses designed with direct input from industry experts.",
          description2: "Regular updates ensure you're learning skills that are in-demand.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start gap-4"
        >
          <div className="min-w-[64px] min-h-[64px] bg-blue-100 rounded-full flex items-center justify-center shadow-inner">
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-blue-900 font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description1}</p>
            <p className="text-gray-600 text-sm mt-2">{item.description2}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* <section className="relative bg-gradient-to-r from-green-100 to-blue-100 py-16 px-4 md:px-20 overflow-hidden" id="about">

  <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl z-0"></div>
  <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-green-300 opacity-20 rounded-full blur-3xl z-0"></div>

  <div className="relative z-10 max-w-screen-xl mx-auto">
    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-16">
      Why Choose <span className="bg-gradient-to-r from-sky-500 to-green-500 text-transparent bg-clip-text">VDart Academy?</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          title: "Expert Trainers",
          icon: "/icons/ChalkboardTeacher.png",
          description1: "Our trainers are industry veterans from VDart Group who bring real-world insights into every class.",
          description2: "Hands-on training with real-time projects and scenario-based learning.",
          gradient: "from-blue-500 to-sky-400",
        },
        {
          title: "Career Support",
          icon: "/icons/GraduationCap.png",
          description1: "Get personalized guidance for resumes, mock interviews, and career roadmaps.",
          description2: "We help you build the confidence to ace your next job opportunity.",
          gradient: "from-green-500 to-lime-400",
        },
        {
          title: "Internships",
          icon: "/icons/Briefcase.png",
          description1: "Real internship opportunities across development, analytics, and marketing fields.",
          description2: "Bridge the gap between knowledge and experience with hands-on roles.",
          gradient: "from-yellow-400 to-pink-400",
        },
        {
          title: "Industry-Focused Courses",
          icon: "/icons/Buildings.png",
          description1: "Curriculum crafted with insights from working professionals and tech leaders.",
          description2: "Updated regularly to match the latest hiring trends.",
          gradient: "from-purple-500 to-indigo-400",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="flex items-start gap-4">
            <div
              className={`min-w-[64px] min-h-[64px] rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}
            >
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-blue-900 font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-800 text-sm">{item.description1}</p>
              <p className="text-gray-600 text-sm mt-2">{item.description2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}
<section className="py-16 px-6 md:px-28 bg-white">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Automate Daily <br />
        <span className="relative inline-block">
          <span className="bg-indigo-100 absolute inset-0 -skew-y-1 z-[-1]" />
          Operations
        </span>
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        We make it easy to focus on things that matter.
      </p>

      <div className="border-l-4 border-blue-900 pl-4">
        <p className="text-gray-700 font-semibold">Trusted By</p>
        <AnimatedNumber targetNumber={1100} />
        <p className="text-gray-600">Educators</p>
      </div>
    </div>

    {/* Image */}
    <div className="w-full flex justify-center">
      <img
        src="/feature.png"
        alt="Automate Daily Operations Illustration"
        className="max-w-full h-auto"
      />
    </div>
  </div>
</section>


    
      {/* Alumni Section */}
      {/* <section className="bg-[#fdfdfb] pt-16 px-2 md:px-4">
        <h3 className="text-center text-3xl font-bold text-blue-900 mb-8 pb-4">
          Hear From Our Alumni
        </h3>
        <div className="max-w-5xl h-auto md:h-[180px] mx-auto bg-gray-100 rounded shadow-md flex flex-col md:flex-row items-center overflow-hidden">
          <div className="w-full md:w-[200px] h-[160px] md:h-[200px] flex justify-center items-center">
            <img src={image} alt={name} className="object-contain h-[120px] md:h-[180px]" />
          </div>
          <div className="w-full md:w-2/3 p-4 md:p-6 text-sm text-gray-800 space-y-3">
            <div>
              <h4 className="font-semibold text-blue-900">{name}</h4>
              <p className="text-xs text-blue-800 pt-2">{course}</p>
            </div>
            <p className="text-[13px] leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-6">
          {alumniData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-blue-900"
                  : "bg-green-200 hover:bg-green-400"
              }`}
            ></span>
          ))}
        </div>
      </section> */}
      <AlumniSection />
      {/* Contact Section */}
      {/* <section className="bg-gray-100 py-10 px-4" id="contact">
  <h2 className="text-center text-xl font-bold text-blue-900 mb-10">Contact Us</h2>
  <div className="max-w-6xl mx-auto bg-white rounded shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
    <div className="h-80 md:h-auto hidden md:block">
  <iframe
    title="Location Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.361437052865!2d78.67921652814984!3d10.785222629822906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf55b333f9c25%3A0xfc2cfc83ced05e74!2sVDart!5e0!3m2!1sen!2sin!4v1752641096910!5m2!1sen!2sin"  // Replace with your location embed URL
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full border-0"
  ></iframe>
</div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-blue-200 p-6 md:p-10">
  <form
    ref={formRef}
    onSubmit={sendEmail}
    className="w-full max-w-md backdrop-blur-md bg-white/70 border border-white/40 rounded-xl shadow-2xl p-8 space-y-6"
  >
    <h2 className="text-2xl font-semibold text-blue-900 text-center">Contact Us</h2>

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm shadow-sm transition-all"
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm shadow-sm transition-all"
    />
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm shadow-sm transition-all"
    />
    <input
      type="text"
      name="subject"
      placeholder="Subject"
      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm shadow-sm transition-all"
    />
    <textarea
      name="message"
      placeholder="Message"
      rows="4"
      required
      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-sm shadow-sm resize-none transition-all"
    />

    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
      >
        Send Message
      </button>
    </div>
  </form>
</div>

  </div>
</section> */}

<section className="relative bg-white py-20 px-4" id="contact">
  {/* Decorative Glows */}
  
  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className="text-center text-3xl md:text-3xl font-bold text-blue-900 mb-12 tracking-tight">
      Get in <span className="bg-blue-900 bg-clip-text text-transparent">Touch</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2  rounded-xl overflow-hidden bg-white/30 backdrop-blur-md shadow-2xl">
      {/* Map Section */}
      <div className="hidden md:block p-10 bg-gray-200">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.361437052865!2d78.67921652814984!3d10.785222629822906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf55b333f9c25%3A0xfc2cfc83ced05e74!2sVDart!5e0!3m2!1sen!2sin!4v1752641096910!5m2!1sen!2sin"
          className="w-full h-full border-0 rounded"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form */}
      <div className="flex items-center justify-center bg-sky-100 p-8">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-md space-y-6 animate-fade-in"
        >
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">We'd love to hear from you!</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 text-sm shadow-sm transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 text-sm shadow-sm transition-all"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 text-sm shadow-sm transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 text-sm shadow-sm transition-all"
          />
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 text-sm shadow-sm resize-none transition-all"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-blue-400 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-green-100 text-white px-4 md:px-6 py-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Left: Logo */}
    <div className="flex items-start md:pl-10">
      <img
        src="/vdart-logo.png"
        alt="VDart Academy Logo"
        className="hidden md:block h-28 pl-10 object-contain scale-150" // Reduced height
      />
    </div>

    {/* Right: Company Info */}
    <div className="space-y-2 text-center md:text-left">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-900">Contact Us</h3>
      <p className="text-sm font-bold text-blue-900">VDart Academy</p>
      <a href="mailto:info@vdartacademy.com" className="text-sm text-blue-900 underline hover:text-blue-600">
        info@vdartacademy.com
      </a>
      <p className="text-sm text-blue-900">
        Vdart, 30, Chennai - Theni Hwy, Mannarpuram, Sangillyandapuram,<br />
        Tiruchirappalli, Tamil Nadu 620020
      </p>
    </div>
  </div>

  {/* Bottom Row */}
  <div className="border-t border-gray-600 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-blue-100 gap-4">
    <p className="text-center md:text-left text-blue-900">
      &copy; VDart Academy 2025. All Rights Reserved.
      <span className="underline cursor-pointer ml-1">Disclaimer</span> |
      <span className="underline cursor-pointer ml-1">Privacy Policy</span>
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 text-blue-900">
      <div className="flex items-center gap-1">
        <FaFacebook className="w-4 h-4" />
        <span>VDart Academy</span>
      </div>
      <div className="flex items-center gap-1">
        <FaInstagram className="w-4 h-4" />
        <span>VDart Academy</span>
      </div>
      <div className="flex items-center gap-1">
        <FaXTwitter className="w-4 h-4" />
        <span>VDart Academy</span>
      </div>
      <div className="flex items-center gap-1">
        <FaLinkedin className="w-4 h-4" />
        <span>vdart_academy</span>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
