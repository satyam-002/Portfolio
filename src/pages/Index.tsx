
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import TimelineItem from '@/components/TimelineItem';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import JobTitle from '@/components/JobTitle';
import CertificationCard from '@/components/CertificationCard';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      title: 'Full-Stack Development',
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'NoSQL & SQL']
    },
    {
      title: 'Data Analysis',
      skills: ['Hadoop', 'R Programming', 'Tableau', 'Ms Excel', ]
    },
    {
      title: 'DevOps and Tools',
      skills: ['Git', 'Docker', 'Jenkins', 'Selenium', 'Unreal(UE5)']
    }
  ];

  const projectsData = [
    {
      title: 'Chess Arena',
      description: 'An all-in-one chess website for chess geeks.',
      technologies: ['React.js', 'MongoDB', 'Docker-swarm'],
      imageUrl: '/assets/P1.png', 
      projectUrl: 'https://github.com/Satyam12217960/Project-01.git'
    },  
    {
      title: 'Flappy Bird',
      description: 'Inspired by original game and made from basics.',
      technologies: ['Cpp'],
      imageUrl: '/assets/P2.jpg',
      projectUrl: 'https://github.com/Satyam12217960/Games.git'
    },
    {
      title: 'Chat bot',
      description: 'A website to access all chatbots at a place.',
      technologies: ['Vite + React', 'MongoDB'],
      imageUrl: '/assets/P3.png',
      projectUrl: 'https://github.com/Satyam12217960/ChatBot.git'
    }
  ];

  const educationData = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science',
      period: '2022 - Present',
      description: 'Percentile: 6.46'
    },
    {
      institution: 'Levana Public School',
      degree: '10th and 12th',
      period: '2018 - 2022',
      description: 'Percentage: 88.6% | 80.2% '
    }
  ];

  const timelineData = [
    {
      date: 'June-July 2024',
      title: 'Ranked among Top 100 in LPU',
      description: 'Ranked among Top 100 for Summer Competetive Batch.',
    },
    {
      date: 'June 2025',
      title: 'Secured an internship ',
      description: 'In-Progress.',
    }
  ];

  const certificationsData = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "July - November' 2024",
      credentialUrl: "#"
    },
    {
      title: "MongoDB",
      issuer: "Atlas",
      date: "June - July' 2024",
      credentialUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gradient mb-4"
            >
              Satyam Raj
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Developer
            </motion.div>
          </motion.div>
        ) : (
          <>
            <Navbar />

            <section 
              id="home" 
              className="min-h-screen flex items-center justify-center px-4 pt-20"
            >
              <div className="text-center flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full">
                <div className="flex-1 text-left md:pr-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="heading-xl mb-4">
                      Hi, I'm <span className="text-gradient">Satyam Raj</span>
                    </h1>
                    <JobTitle />
                    <p className="max-w-2xl mb-12 text-lg">
                    I am passionate about learning new things.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="group"
                      >
                        <a href="#contact">
                          Get In Touch
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="group"
                      >
                        <a href="/src/pages/assets/resume.pdf" download="ayushman_raj_resume.pdf" className="flex items-center gap-2">
                          Download Resume
                          <Download size={16} className="transition-transform group-hover:-translate-y-1" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 md:flex-none md:w-96 mt-8 md:mt-0"
                >
                  <div className="relative w-72 h-72 mx-auto">
                    <img
                      src="/assets/I1.jpg"
                      alt="Satyam Raj"
                      className="rounded-full w-full h-full object-cover shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-full glass opacity-20"></div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <a
                  href="#about"
                  className="flex flex-col items-center animate-bounce"
                >
                  <span className="text-sm mb-2">Scroll Down</span>
                  <ArrowDown size={20} />
                </a>
              </motion.div>
            </section>

            <AnimatedSection id="about" className="container">
              <SectionTitle 
                title="About Me" 
                subtitle="Here's a brief introduction about myself and my journey as a developer."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-card p-8 rounded-xl"
                >
                  <p className="text-lg mb-4">
                  I'm a B.Tech CSE student specializing in Data Analysis, DevOps, and Game Development. Passionate about building innovative systems, I enjoy combining logic with creativity to solve real-world problems and craft engaging digital experiences. 
                  </p>
                  <p className="text-lg mb-4">
                  I began my coding journey in the first semester with Python, and quickly fell in love with programming. Driven by curiosity, I went on to explore C, C++, Competitive coding, DevOps, Data analysis, and Game development as personal interests—enjoying every step of the way. This self-driven path has shaped my passion for building and solving through code.
                  </p>
                  <p className="text-lg">
                  My journey so far has been driven by a genuine passion for learning and creating. As I continue exploring more technologies, I aim to deepen my expertise and work on innovative projects that challenge me to grow as both a developer and a problem-solver.
                  </p>

                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative"
                >
                  <div className="glass p-2 rounded-xl">
                    <img 
                      src="/assets/I2.png" 
                      alt="Satyam Raj" 
                      className="rounded-lg w-full h-auto" 
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection id="skills" className="container bg-primary/5">
              <SectionTitle 
                title="My Skills" 
                subtitle="Here are the technologies and tools I'm proficient with."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillsData.map((skillCategory, index) => (
                  <SkillCard 
                    key={index}
                    title={skillCategory.title}
                    skills={skillCategory.skills}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="projects" className="container">
              <SectionTitle 
                title="My Projects" 
                subtitle="Take a look at some of the projects I've worked on."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="education" className="container bg-primary/5">
              <SectionTitle 
                title="Education" 
                subtitle="My academic background and qualifications."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((education, index) => (
                  <EducationCard
                    key={index}
                    institution={education.institution}
                    degree={education.degree}
                    period={education.period}
                    description={education.description}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="achievements" className="container">
              <SectionTitle 
                title="Achievements" 
                subtitle="My journey and key milestones in chronological order."
              />
              <div className="max-w-4xl mx-auto">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="certifications" className="container">
              <SectionTitle 
                title="Certifications" 
                subtitle="Professional certifications and courses I've completed."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificationsData.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    credentialUrl={cert.credentialUrl}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection id="contact" className="container">
              <SectionTitle 
                title="Contact Me" 
                subtitle="Feel free to reach out for collaborations or just a friendly hello."
              />
              <ContactForm />
            </AnimatedSection>

            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndexPage;
