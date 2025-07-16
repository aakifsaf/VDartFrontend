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
const roles = [
  "Full Stack Development",
  "Data Analytics",
  "Cloud Computing",
  "UI/UX Design",
  "AI & Machine Learning",
  "Cybersecurity",
];
export default function HomePage() {
    const scrollRef = useRef(null);
    const sliderRef = useRef(null);
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

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

  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000; // Increased pause duration

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentRole.length) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Move to next role
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

    useEffect(() => {
    const el = scrollRef.current;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      if (el) el.scrollLeft = scrollTop;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const wrapper = wrapperRef.current;

    const handleScroll = () => {
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;

      // If in view, scroll horizontally
      if (scrollY >= containerTop && scrollY < containerTop + containerHeight) {
        const horizontalScroll = scrollY - containerTop;
        wrapper.scrollLeft = horizontalScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const [navOpen, setNavOpen] = useState(false);

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
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono leading-relaxed flex flex-wrap md:flex-column items-start gap-2 sm:gap-4">
    <span className="font-bold text-blue-900 ">Internships available in</span>
    <span className="relative inline-block">
      <span className="text-sky-700">{text}</span>
      <span className="animate-pulse text-sky-700">|</span>
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

      {/* Courses Offered */}
<section className="relative px-2 md:px-4 pt-10 pb-8 bg-white z-0" id="courses">
  <h3 className="text-center text-base font-bold text-blue-900 relative z-50 pb-8">
    Courses Offered
  </h3>
  <div className="overflow-x-hidden w-full z-20">
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
    <div className="overflow-x-hidden w-full z-20">
      <div
        ref={sliderRef}
        className="flex gap-4 md:gap-6 snap-x snap-mandatory px-2 pb-4 animate-courses-roll"
        style={{
          scrollbarWidth: "none",
          animation: "coursesRoll 10s linear infinite",
        }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
      >
        <style>{`
          ::-webkit-scrollbar {
            display: none;
          }
          @keyframes coursesRoll {
          0% { transform: translateX(0); }
          80% { transform: translateX(-105%); }
          90% { transform: translateX(-105%); }
          95% { transform: translateX(0); }
        }
        `}</style>
        {[...courses, ...courses].map((course, idx) => (
          <div
            key={idx}
            className="w-[280px] md:w-[380px] lg:w-[400px] h-[200px] snap-center bg-green-100 p-4 md:p-6 shadow text-center flex-shrink-0 rounded-xl transition-transform duration-300 hover:scale-105"
            style={{
              boxShadow: "0 4px 24px rgba(34,197,94,0.07)",
              border: "1px solid #d1fae5",
            }}
          >
            <div className="flex flex-col items-center gap-1 mb-2">
              {course.icon}
              <h4 className="font-semibold text-base md:text-lg text-blue-900">{course.title}</h4>
            </div>
            <ul className="text-xs md:text-sm list-disc list-inside text-gray-700 text-left mt-3 px-2 md:px-4">
              {course.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="bg-white px-2" id="about">
        <div className=" gap-6 bg-gray-100 py-4 md:py-12 px-4 md:px-20 rounded-lg shadow w-[97vw] md:w-[100vw]">
        <h2 className="text-center text-base font-bold text-blue-900 mb-10">Why Choose VDart Academy?</h2>
        <div className="space-y-12">
          {/* Feature Blocks */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center w-full md:w-40 pl-0 md:pl-10">
              <img src="/icons/ChalkboardTeacher.png" alt="Expert Trainers" className="w-16 h-16 md:w-22 md:h-22" />
              <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Expert Trainers</h2>
            </div>
            <div className="flex-1 pl-0 md:pl-20 pt-2">
              <p className="text-sm text-gray-700">
                At VDart Academy, our training is led by seasoned professionals from the VDart Group—bringing years of real-world experience and industry expertise into the classroom...
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Their teaching goes far beyond textbooks. Every session is enriched with real-time examples, hands-on activities, and insights drawn from actual industry scenarios...
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center w-full md:w-40 pl-0 md:pl-10">
              <img src="/icons/GraduationCap.png" alt="Expert Trainers" className="w-16 h-16 md:w-22 md:h-22" />
              <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Expert Trainers</h2>
            </div>
            <div className="flex-1 pl-0 md:pl-20 pt-2">
              <p className="text-sm text-gray-700">
                At VDart Academy, we don’t just help you learn—we help you launch your career...
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Our expert team offers guidance in resume building, mock interviews, soft skill development, and career strategy planning...
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center w-full md:w-40 pl-0 md:pl-10">
              <img src="/icons/Briefcase.png" alt="Internships" className="w-16 h-16 md:w-22 md:h-22" />
              <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Internships</h2>
            </div>
            <div className="flex-1 pl-0 md:pl-20 pt-2">
              <p className="text-sm text-gray-700">
                At VDart Academy, we believe that learning is most powerful when it's applied...
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Whether you're interested in software development, data analytics, digital marketing, or other tech-driven domains...
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center w-full md:w-40 pl-0 md:pl-10">
              <img src="/icons/Buildings.png" alt="Industry Oriented Courses" className="w-16 h-16 md:w-22 md:h-22" />
              <h2 className="text-blue-900 font-semibold text-center mt-2 text-sm">Industry Oriented Courses</h2>
            </div>
            <div className="flex-1 pl-0 md:pl-20 pt-2">
              <p className="text-sm text-gray-700">
                At VDart Academy, our curriculum is thoughtfully crafted to align with the evolving needs of the tech industry...
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Every course is developed in collaboration with industry experts and is regularly updated...
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
    
      {/* Alumni Section */}
      <section className="bg-[#fdfdfb] py-8 px-2 md:px-4">
        <h3 className="text-center text-sm font-bold text-blue-900 mb-8">
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
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-10 px-4" id="contact">
  <h2 className="text-center text-xl font-bold text-blue-900 mb-10">Contact Us</h2>
  <div className="max-w-6xl mx-auto bg-white rounded shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
    {/* Map Section */}
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
    {/* Form Section */}
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
</section>


      {/* Footer */}
      <footer className="bg-blue-900 text-white px-4 md:px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 pl-0 md:pl-10 text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Contact Us</h3>
            <p className="text-sm font-bold">VDart Academy</p>
            <a href="mailto:info@vdartacademy.com" className="text-sm text-blue-100 underline hover:text-white">
              info@vdartacademy.com
            </a>
            <p className="text-sm flex items-center md:items-start gap-2 md:gap-3 text-blue-100">
              <span className="flex-grow">
                Vdart, 30, Chennai - Theni Hwy, Mannarpuram, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620020
              </span>
            </p>
          </div>
        </div>
        <div className="border-t border-blue-900 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-blue-100 gap-4">
          <p className="text-center md:text-left pl-0 md:pl-10">
            &copy; VDart Academy 2025. All Rights Reserved. <span className="underline cursor-pointer">Disclaimer</span> | <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
          <div className="flex flex-wrap justify-start gap-6 md:gap-14 pr-0 md:pr-4">
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
