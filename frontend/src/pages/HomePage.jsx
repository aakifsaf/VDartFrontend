import React from 'react';
import logo from '/vdart-logo.png';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Target, TrendingUp, Cloud,Brain, Palette, Menu, X, MapPin, MessageCircle, Laptop } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
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
export default function HomePage() {
    const scrollRef = useRef(null);
    const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };
    const images = [
      "/young-businesswoman-smiling-camera-removebg-preview 1.png",
      "/young-businesswoman-smiling-camera-removebg-preview 1 (1).png",
      "/young-businesswoman-smiling-camera-removebg-preview 1 (2).png",
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }, []);

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

    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alumniData.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);

  const { name, course, image, message } = alumniData[current];
  
  const formRef = useRef();

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
          formRef.current.reset(); // clear form
        },
        (error) => {
          alert("❌ Failed to send form. Please try again.");
          console.error(error.text);
        }
      );

      useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
    
        // Duplicate content to simulate loop
        const clone = el.innerHTML;
        el.innerHTML += clone;
    
        let scrollAmount = 0;
        const speed = 0.5;
    
        const scrollLoop = () => {
          scrollAmount += speed;
          if (scrollAmount >= el.scrollWidth / 2) {
            scrollAmount = 0; // reset
          }
          el.scrollLeft = scrollAmount;
          requestAnimationFrame(scrollLoop);
        };
    
        scrollLoop();
      }, []);
  };
  return (
    <div className="flex flex-col min-h-screen bg-green-100 font-sans text-[#002244] w-[100vw]">
      {/* Header */}
      <header className="bg-[#D9F5E2] py-2 px-4 fixed w-full flex justify-between items-center shadow-sm z-50 h-16">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <img src={logo} alt="VDart Logo" className="absolute h-16 w-auto scale-125" />
  </div>

  {/* Nav Links and User Icon */}
  <div className="flex items-center gap-8">
    <nav className="flex gap-10 text-sm font-medium text-blue-900">
      <a href="#home" className="font-bold text-blue-900">Home</a>
      <a href="#courses" className="text-blue-900">Courses</a>
      <a href="#gallery" className="text-blue-900">Gallery</a>
      <a href="#about" className="text-blue-900">About Us</a>
      <a href="#contact" className="text-blue-900">Contact</a>

    </nav>
    {/* <div className="w-8 h-8 flex items-center justify-center border-blue-900 rounded-full">
      <UserCircleIcon className="w-8 h-8 text-[#002A5C]" />
    </div> */}
    <div className=" text-right pr-0">
          <button className="bg-blue-900 text-white px-8 py-2 text-sm rounded shadow hover:bg-blue-800 transition">
            Login
          </button>
        </div>
  </div>
</header>

{/* Hero Section */}
<section className="flex flex-col items-center px-4 py-24 relative overflow-hidden" id="home">
<img
  src="/design1-removebg-preview.png"
  alt="Left Shape"
  className="absolute top-4 left-0 w-[50vw] max-w-[300px] md:max-w-[400px] h-auto z-0"
/>

<img
  src="/design2-removebg-preview.png"
  alt="Right Shape"
  className="absolute bottom-0 right-0 w-[50vw] max-w-[320px] md:max-w-[400px] h-auto z-0"
/>
<img
  src={images[currentIndex]}
  alt="Changing"
  className={`absolute bottom-0 transition-all duration-500 h-[300px] ${
    currentIndex === 2 ? 'w-[50vw] max-w-[350px] right-0' : 'w-[40vw] max-w-[240px] right-10'
  }`}
/>
  <div className="space-y-4">
    {/* Centered and Left-Aligned Typewriter Heading */}
    <div className="w-[28ch] mx-auto">
      <h2 className="typewriter text-1xl font-semibold uppercase pt-4 text-left">
        Welcome to Vdart Academy!!
      </h2>
    </div>

    {/* Paragraph */}
    <p className="text-center text-xs leading-relaxed p-6">
      Step into VDart Academy. Power up your curiosity. <br />
      Learn limitlessly with tools, insights, and support designed just for you. <br />
      Fuel your ambitions with industry-aligned courses, hands-on learning, and expert mentorship.
    </p>
    <div className="flex justify-center gap-12 pt-2" style={{ minHeight: '40px' }}>
    <a href="https://forms.gle/UJpTdevcRG2d61ur6" target="_blank" rel="noopener noreferrer">
  <button
    className="px-20 py-1 border bg-green-100 border-blue-500 text-blue-600 rounded transition-all duration-100 hover:border-blue-900 hover:text-blue-900 hover:scale-102 transform"
  >
    Enroll
  </button>
</a>
        {/* <Link to="/login">
            <button className="px-16 py-1 bg-green-200 rounded text-blue-900">
                Get Started
            </button>
        </Link> */}
        <button className="px-16 py-1 bg-green-200 rounded text-blue-900">
                Get Started
        </button>
        </div>
  </div>
</section>

{/* Courses Offered */}
{/* <section className="relative px-4 pt-10 pb-8 bg-white z-0" id="courses">
  <h3 className="text-center text-base font-bold text-blue-900 relative z-50 pb-6">
    Courses Offered
  </h3>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-50">
    <div className="bg-green-100 p-6 shadow text-center">
      <div className="flex flex-col items-center gap-1 mb-2">
        <Target className="h-5 w-5 text-blue-800" />
        <h4 className="font-semibold text-sm text-blue-900">FullStack Development</h4>
      </div>
      <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
        <li>Master front-end and back-end technologies to build dynamic web applications.</li>
        <li>Learn through real-time projects using HTML, CSS, JavaScript, Node.js, and more.</li>
      </ul>
    </div>

    <div className="bg-green-100 p-6 shadow text-center">
      <div className="flex flex-col items-center gap-1 mb-2">
        <TrendingUp className="h-5 w-5 text-blue-800" />
        <h4 className="font-semibold text-sm text-blue-900">Data Analytics</h4>
      </div>
      <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
        <li>Gain skills in data cleaning, visualization, and interpretation using Excel, SQL, and Python.</li>
        <li>Transform raw data into actionable insights that drive smart decisions.</li>
      </ul>
    </div>

    <div className="bg-green-100 p-6 shadow text-center">
      <div className="flex flex-col items-center gap-1 mb-2">
        <Cloud className="h-5 w-5 text-blue-800" />
        <h4 className="font-semibold text-sm text-blue-900">Cloud Computing</h4>
      </div>
      <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
        <li>Learn the fundamentals of cloud services with AWS, Azure, and Google Cloud.</li>
        <li>Deploy, manage, and scale applications in real-world cloud environments.</li>
      </ul>
    </div>
    <div className="bg-green-100 p-6 shadow text-center">
      <div className="flex flex-col items-center gap-1 mb-2">
        <Brain className="h-5 w-5 text-blue-800" />
        <h4 className="font-semibold text-sm text-blue-900">AI & Machine Learning</h4>
      </div>
      <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
        <li>Learn the fundamentals of cloud services with AWS, Azure, and Google Cloud.</li>
        <li>Deploy, manage, and scale applications in real-world cloud environments.</li>
      </ul>
    </div>
    <div className="bg-green-100 p-6 shadow text-center">
      <div className="flex flex-col items-center gap-1 mb-2">
        <Palette className="h-5 w-5 text-blue-800" />
        <h4 className="font-semibold text-sm text-blue-900">UI/UX Design</h4>
      </div>
      <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
        <li>Design user-centered digital experiences with Figma, Adobe XD, and usability principles.</li>
        <li>From wireframes to prototypes, bring creativity and functionality together.</li>
      </ul>
    </div>
    <div className="bg-green-100 p-6 shadow text-center">
      <div className="flex flex-col items-center gap-1 mb-2">
        <Laptop className="h-5 w-5 text-blue-800" />
        <h4 className="font-semibold text-sm text-blue-900">Digital Marketing</h4>
      </div>
      <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
        <li>Gain practical experience by working on live projects for real clients, building a professional portfolio that showcases your skills and enhances employability.</li>
        <li>Learn essential digital marketing strategies from industry experts, including SEO, SEM, and social media marketing, to become job-ready.</li>
      </ul>
    </div>
  </div>
</section> */}
<section className="relative px-4 pt-10 pb-8 bg-white z-0" id="courses">
  {/* Heading */}
  <h3 className="text-center text-base font-bold text-blue-900 relative z-50 pb-6">
    Courses Offered
  </h3>
  {/* Scrollable Card Container */}
  <div className="overflow-x-auto w-[97vw] z-20">
     <div className="absolute top-[50%] left-2 z-50">
        <button onClick={scrollLeft} className="bg-blue-900 shadow p-1 rounded-full">
          <ChevronLeft className="text-green-100" />
        </button>
      </div>
      <div className="absolute top-[50%] right-2 z-50">
        <button onClick={scrollRight} className="bg-blue-900 shadow p-1 rounded-full">
          <ChevronRight className="text-green-100" />
        </button>
      </div>

      {/* Scroll Container */}
      <div className="overflow-x-auto w-[97vw] z-20">
        <div
          ref={sliderRef}
          className="flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-smooth px-2 pb-4"
          style={{ scrollbarWidth: "none" }}
        >
      {/* Hide Scrollbar for Webkit */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Card Template */}
      
      <div className="w-[400px] h-[200px] snap-center bg-green-100 p-6 shadow text-center flex-shrink-0">
        <div className="flex flex-col items-center gap-1 mb-2">
          <Target className="h-5 w-5 text-blue-800" />
          <h4 className="font-semibold text-sm text-blue-900">FullStack Development</h4>
        </div>
        <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
          <li>Master front-end and back-end technologies to build dynamic web applications.</li>
          <li>Learn through real-time projects using HTML, CSS, JavaScript, Node.js, and more.</li>
        </ul>
      </div>

      <div className="w-[400px] h-[200px] snap-center bg-green-100 p-6 shadow text-center flex-shrink-0">
        <div className="flex flex-col items-center gap-1 mb-2">
          <TrendingUp className="h-5 w-5 text-blue-800" />
          <h4 className="font-semibold text-sm text-blue-900">Data Analytics</h4>
        </div>
        <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
          <li>Gain skills in data cleaning, visualization, and interpretation using Excel, SQL, and Python.</li>
          <li>Transform raw data into actionable insights that drive smart decisions.</li>
        </ul>
      </div>

      <div className="w-[380px] h-[200px] snap-center bg-green-100 p-6 shadow text-center flex-shrink-0">
        <div className="flex flex-col items-center gap-1 mb-2">
          <Cloud className="h-5 w-5 text-blue-800" />
          <h4 className="font-semibold text-sm text-blue-900">Cloud Computing</h4>
        </div>
        <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
          <li>Learn the fundamentals of cloud services with AWS, Azure, and Google Cloud.</li>
          <li>Deploy, manage, and scale applications in real-world cloud environments.</li>
        </ul>
      </div>

      <div className="w-[400px] h-[200px] snap-center bg-green-100 p-6 shadow text-center flex-shrink-0">
        <div className="flex flex-col items-center gap-1 mb-2">
          <Brain className="h-5 w-5 text-blue-800" />
          <h4 className="font-semibold text-sm text-blue-900">AI & Machine Learning</h4>
        </div>
        <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
          <li>Learn to build intelligent systems with Python, TensorFlow, and real projects.</li>
          <li>Gain expertise in model training, deployment, and AI ethics.</li>
        </ul>
      </div>

      <div className="w-[400px] h-[200px] snap-center bg-green-100 p-6 shadow text-center flex-shrink-0">
        <div className="flex flex-col items-center gap-1 mb-2">
          <Palette className="h-5 w-5 text-blue-800" />
          <h4 className="font-semibold text-sm text-blue-900">UI/UX Design</h4>
        </div>
        <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
          <li>Design user-centered digital experiences with Figma, Adobe XD, and usability principles.</li>
          <li>From wireframes to prototypes, bring creativity and functionality together.</li>
        </ul>
      </div>

      <div className="w-[380px] h-[200px] snap-center bg-green-100 p-6 shadow text-center flex-shrink-0">
        <div className="flex flex-col items-center gap-1 mb-2">
          <Laptop className="h-5 w-5 text-blue-800" />
          <h4 className="font-semibold text-sm text-blue-900">Digital Marketing</h4>
        </div>
        <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
          <li>Gain practical experience by working on live projects for real clients.</li>
          <li>Learn SEO, SEM, social media, and email marketing from industry experts.</li>
        </ul>
      </div>
    </div>
  </div>
    </div>
</section>
{/* <section className="relative px-4 pt-10 pb-8 bg-white z-0 overflow-hidden" id="courses">
      <h3 className="text-center text-base font-bold text-blue-900 pb-6">
        Courses Offered
      </h3>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-6">
          {[...courses, ...courses].map((course, index) => (
            <div
              key={index}
              className="w-[400px] h-[210px] bg-green-100 p-6 shadow text-center flex-shrink-0"
            >
              <div className="flex flex-col items-center gap-1 mb-2">
                {course.icon}
                <h4 className="font-semibold text-sm text-blue-900">{course.title}</h4>
              </div>
              <ul className="text-xs list-disc list-inside text-gray-700 text-left mt-3 px-4">
                {course.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section> */}


<section className="bg-gray-100 py-12 px-4 md:px-20" id="about">
  <h2 className="text-center text-base font-bold text-blue-900 mb-10">Why Choose VDart Academy?</h2>

  <div className=" space-y-12">
    {/* Feature 1: Expert Trainers */}
    <div className="flex gap-6 items-start">
  {/* Icon + Heading Column */}
  <div className="flex flex-col items-center w-40 pl-10">
    <img
      src="/icons/ChalkboardTeacher.png"
      alt="Expert Trainers"
      className="w-22 h-22"
    />
    <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Expert Trainers</h2>
  </div>

  {/* Paragraph Block */}
  <div className="flex-1 pl-20 items-center pt-2">
    <p className="text-sm text-gray-700">
      At VDart Academy, our training is led by seasoned professionals from the VDart Group—bringing years of real-world experience and industry expertise into the classroom. These are not just instructors, but mentors who have worked on live projects and understand what the modern job market truly demands.
    </p>
    <p className="text-sm text-gray-700 mt-2">
      Their teaching goes far beyond textbooks. Every session is enriched with real-time examples, hands-on activities, and insights drawn from actual industry scenarios. This ensures that learners not only understand the concepts but also know how to apply them in practical situations.
    </p>
  </div>
</div>

<div className="flex gap-6 items-start">
  {/* Icon + Heading Column */}
  <div className="flex flex-col items-center w-40 pl-10">
    <img
      src="/icons/GraduationCap.png"
      alt="Expert Trainers"
      className="w-22 h-22"
    />
    <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Expert Trainers</h2>
  </div>

  {/* Paragraph Block */}
  <div className="flex-1 pl-20 items-center pt-2">
    <p className="text-sm text-gray-700">
    At VDart Academy, we don’t just help you learn—we help you launch your career. Our comprehensive career services are designed to guide you every step of the way, from classroom to workplace. Whether you're building your first resume or preparing for a big interview, we provide personalized support to help you stand out.
    </p>
    <p className="text-sm text-gray-700 mt-2">
    Our expert team offers guidance in resume building, mock interviews, soft skill development, and career strategy planning. We understand what employers look for, and we equip you with the tools and confidence to present yourself as a top candidate.
    </p>
  </div>
</div>

<div className="flex gap-6 items-start">
  {/* Icon + Heading Column */}
  <div className="flex flex-col items-center w-40 pl-10">
    <img
      src="/icons/Briefcase.png"
      alt="Internships"
      className="w-22 h-22"
    />
    <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Internships</h2>
  </div>

  {/* Paragraph Block */}
  <div className="flex-1 pl-20 items-center pt-2">
    <p className="text-sm text-gray-700">
    At VDart Academy, we believe that learning is most powerful when it's applied. That’s why our internship programs are designed to give you hands-on experience in real industry environments, preparing you for the demands of today’s workforce.
    </p>
    <p className="text-sm text-gray-700 mt-2">
    Whether you're interested in software development, data analytics, digital marketing, or other tech-driven domains, our internships place you directly on real-time projects. You'll work alongside experienced professionals, gain practical exposure to tools and technologies, and understand how concepts are implemented in real business scenarios.
    </p>
  </div>
</div>

<div className="flex gap-6 items-start">
  {/* Icon + Heading Column */}
  <div className="flex flex-col items-center w-26 pl-4">
    <img
      src="/icons/Buildings.png"
      alt="Industry Oriented Courses"
      className="w-22 h-22"
    />
    <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Industry Oriented Courses</h2>
  </div>

  {/* Paragraph Block */}
  <div className="flex-1 pl-14 items-center pt-2">
    <p className="text-sm text-gray-700">
    At VDart Academy, our curriculum is thoughtfully crafted to align with the evolving needs of the tech industry. We focus on emerging technologies like Artificial Intelligence, Blockchain, Cloud Computing, Data Analytics, and more—ensuring our students stay ahead in a fast-changing digital world.
    </p>
    <p className="text-sm text-gray-700 mt-2">
    Every course is developed in collaboration with industry experts and is regularly updated to reflect the latest tools, trends, and best practices. This means you’re not just learning outdated theory—you’re gaining real, relevant skills that employers actively seek.
    </p>
  </div>
</div>
  </div>
</section>
<section className="bg-[#fdfdfb] py-10 px-4">
      <h3 className="text-center text-sm font-bold text-blue-900 mb-6">
        Hear From Our Alumni
      </h3>

      <div className="max-w-5xl h-[180px] mx-auto bg-gray-100 rounded shadow-md flex flex-col md:flex-row items-center overflow-hidden">
        {/* Image */}
        <div className="w-[200px] h-[200px] flex justify-center items-center">
          <img src={image} alt={name} className="object-contain h-[300px]" />
        </div>

        {/* Text */}
        <div className="w-full md:w-2/3 p-6 text-sm text-gray-800 space-y-3">
          <div>
            <h4 className="font-semibold text-blue-900">{name}</h4>
            <p className="text-xs text-blue-800 pt-2">{course}</p>
          </div>
          <p className="text-[13px] leading-relaxed">{message}</p>
        </div>
      </div>

      {/* Dots */}
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
    </section>

    <section className="bg-gray-100 py-10 px-4" id="contact">
  <h2 className="text-center text-sm font-bold text-blue-900 mb-8">Contact Us</h2>

  <div className=" w-[700px] h-[460px] mx-auto bg-white p-10 rounded shadow-md flex items-center justify-center">
  <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-8 w-[500px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border border-blue-900 bg-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full px-4 py-2 border border-blue-900 bg-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border border-blue-900 bg-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-4 py-2 border border-blue-900 bg-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          required
          className="w-full px-4 py-2 border border-blue-900 bg-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-900 text-white px-8 py-2 text-sm hover:bg-blue-800 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
  </div>
</section>
<footer className="bg-blue-900 text-white px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {/* Contact Info */}
    <div className="space-y-4 pl-10">
      <h3 className="text-sm font-semibold uppercase tracking-wide">Contact Us</h3>
      <p className="text-sm font-bold">VDart Academy</p>
      <a href="mailto:info@vdartacademy.com" className="text-sm text-blue-100 underline hover:text-white">
        info@vdartacademy.com
      </a>
      <p className="text-sm flex items-start gap-2 text-blue-100">
      <MapPin className="h-5 w-5 text-blue-100 mt-1" />
        Vdart, 30, Chennai - Theni Hwy, Mannarpuram, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620020
      </p>
    </div>
  </div>

  {/* Footer Bottom Row */}
  <div className="border-t border-blue-900 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-blue-100 gap-4">
    {/* Left Text */}
    <p className="text-center md:text-left pl-10">
      © VDart Academy 2025. All Rights Reserved. <span className="underline cursor-pointer">Disclaimer</span> | <span className="underline cursor-pointer">Privacy Policy</span>
    </p>

    {/* Social Icons */}
    <div className="flex justify-start gap-14 pr-4">
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

