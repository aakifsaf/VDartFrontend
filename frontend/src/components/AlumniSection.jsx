import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

export default function AlumniSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alumniData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [alumniData.length]);

  const { name, course, message, image } = alumniData[current];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16 px-4 md:px-12">
      <h3 className="text-center text-4xl font-extrabold text-blue-900 mb-10">
        Hear From Our Alumni
      </h3>

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl px-6 py-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="text-center md:text-left max-w-lg space-y-4">
              <h4 className="text-2xl font-semibold text-blue-800">{name}</h4>
              <p className="text-sm text-blue-600 italic">{course}</p>
              <p className="text-gray-700 text-md leading-relaxed">{message}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {alumniData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-blue-900 scale-125"
                  : "bg-blue-200 hover:bg-blue-400"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
