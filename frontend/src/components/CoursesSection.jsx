import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, Cloud, Brain, Palette, Laptop } from "lucide-react";
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

  export default function CourseSection() {
    const sectionRef = useRef(null);
    const innerRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIdx, setActiveIdx] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = sectionRef.current;
        const inner = innerRef.current;
  
        if (!section || !inner) return;
  
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const scrollProgress = Math.min(
          Math.max((scrollY - sectionTop) / (sectionHeight - window.innerHeight), 0),
          1
        );
  
        inner.style.transform = `translateX(-${scrollProgress * (inner.scrollWidth - window.innerWidth)}px)`;
  
        // Determine which card is centered
        const center = window.innerWidth / 2;
        let closest = 0;
        let minDist = Infinity;
        cardRefs.current.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const dist = Math.abs(center - cardCenter);
          if (dist < minDist) {
            closest = index;
            minDist = dist;
          }
        });
        setActiveIdx(closest);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <section
        ref={sectionRef}
        className="relative h-[200vh] bg-gradient-to-br from-green-50 to-blue-50"
        id="courses"
      >
        <div className="sticky top-2 h-screen flex flex-col justify-center items-start overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-14 text-center w-full">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Explore
            </span>{" "}
            Our Courses
          </h3>
  
          <div
            ref={innerRef}
            className="flex gap-6 md:gap-10 transition-transform duration-300 ease-out will-change-transform px-[32vw] w-[300vw]"
          >
            {courses.map((course, idx) => (
            <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`w-[70vw] md:w-[60vw] lg:h-[30vw] md:h-[60vh] p-6 rounded-3xl shadow-xl transition-all duration-500 ease-in-out transform ${
              idx === activeIdx
                ? "scale-105 z-10 bg-white shadow-2xl"
                : "scale-95 opacity-80 bg-white/80"
            }`}
          >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-sky-500 shadow-lg text-white text-3xl">
                  {course.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
                  {course.title}
                </h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 pl-4">
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
      </section>
    );
  }