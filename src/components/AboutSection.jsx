import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Where Curiosity Meets Craft
            </h3>
            <p className="text-muted-foreground">
              I’ve always believed that every detail matters — whether it’s a
              line of code, a stroke of design, or the cadence of words. This
              belief has shaped my journey as a Front-End Developer over the
              past 2.7 years.
            </p>
            <p className="text-muted-foreground">
              It began with curiosity — a fascination for how creativity and
              code could come together to craft meaningful digital experiences.
              From responsive websites to interactive interfaces, I’ve learned
              that every challenge is an opportunity to refine my craft. Every
              project is a story waiting to be told, and every detail shapes the
              experience.
            </p>
            <p className="text-muted-foreground">
              I don’t just write code — I craft narratives in pixels and
              performance. My work sits at the intersection of design and
              function, blending creativity with precision. Outside of building,
              I explore ideas, trends, and tools, because the journey of
              learning never stops.
            </p>
            <p className="text-muted-foreground">
              My story is still unfolding. Let’s build the next chapter
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Delivered 10+ websites and portals with flawless design
                    fidelity using HTML, CSS, JavaScript, Vue.js, and Sitecore
                    CMS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designed intuitive, responsive interfaces that ensure
                    seamless user experiences across browsers.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Component Devlopment
                  </h4>
                  <p className="text-muted-foreground">
                    Built reusable, scalable components for efficient and
                    maintainable web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
