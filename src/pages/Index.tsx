import { Github, Linkedin, Mail, Code, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import { useRef, useState } from "react";

const Index = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const highlightExperience = () => {
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Rithvik Vukka</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Data Scientist passionate about creating impactful solutions through data analysis and machine learning
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => {
                scrollToProjects();
                highlightExperience();
              }}
            >
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted transition-colors duration-500 ${
        isHighlighted ? 'bg-primary/10' : 'bg-muted'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Experience</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm hover:-translate-y-1 transition-transform hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
              <p className="text-muted-foreground mb-4">AAPI Data, Riverside | October 2023 - October 2024</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed and maintained dashboards visualizing 2020 Census data</li>
                <li>Collaborated with policy analysts to enhance the State Policy Portal</li>
                <li>Performed descriptive analysis of the ACS IPUMS demographic data</li>
                <li>Analyzed patterns and trends in campaign contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="EdgeAvatar"
              description="Edge computing-based Text-to-Speech system using Nvidia Jetson Nano"
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              tags={["Edge Computing", "TTS", "OpenAI API", "YourTTS"]}
              link="#"
            />
            <ProjectCard
              title="CryptoCart"
              description="Secure shopping platform with crypto payments integration"
              image="https://images.unsplash.com/photo-1621416894569-0f39ed31d247"
              tags={["MetaMask", "SQLAlchemy", "Python", "Crypto"]}
              link="#"
            />
            <ProjectCard
              title="Network Analysis"
              description="Influential node identification in multilayered networks"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              tags={["K-means", "DBSCAN", "Network Analysis"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={Code}
              title="Languages"
              items={["Python", "R", "SQL", "SQL++", "C"]}
            />
            <SkillCard
              icon={Briefcase}
              title="Data Technologies"
              items={["Apache Spark", "Hadoop", "BigQuery"]}
            />
            <SkillCard
              icon={User}
              title="Visualization"
              items={["Tableau", "Power BI", "R Shiny", "Plotly"]}
            />
            <SkillCard
              icon={Code}
              title="Cloud & Databases"
              items={["AWS", "Azure", "PostgreSQL", "MongoDB"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Get In Touch</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/rithvik78" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/rithvik-vukka/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:rvukk002@ucr.edu">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
