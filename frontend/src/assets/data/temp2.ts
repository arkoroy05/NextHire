const items = [
    {
      id: 1,
      name: "Classic Elegance",
      desc: "A clean and timeless template with a focus on simplicity and professionalism.",
      tags: ["classic", "professional", "elegant"],
      rating: 4,
      template: `
        <div class="h-full bg-black p-10 font-sans text-neutral-400 flex flex-col justify-between">
          <div class="content">
            <h1 class="text-4xl font-bold">{{name}}</h1>
            
            <p class="text-lg font-bold">{{jobTitle}}</p> 
            <p class="text-sm py-2 text-neutral-500">{{about}}</p>
            <a href="{{linkedinUrl}}">
                Linkedin
              </a>
              <a href="{{githubUrl}}">
                Github
                </a>
            <div class="skills flex gap-2 mt-2">
              <!--[[SkillsTemplate=<div class="text-lime-700">{{skill}}</div>]]-->
              <h1 class="text-xl font-bold flex flex-col items-center justify-center">Skills:</h1>
                {{skillsTemplate}}
            </div>
            <div class="education">
              <!--[[EducationTemplate=<div class=""><span class="text-lime-600">{{education.type}}</span> <span class="text-neutral-300">[{{education.cgpa}}]</span>: {{education.name}}</div>]]-->
              <h1 class="text-xl font-bold">Education:</h1>
              <div class="">{{educationTemplate}}</div>
            </div>
              <div class="experience">
              <!--[[ExperienceTemplate=<div class=""><span class="text-lime-600">{{experience.designation}}</span> <span class="text-neutral-300">[{{experience.duration}}]</span>: {{experience.company}}</div>]]-->
              <h1 class="text-xl font-bold">Experience:</h1>
              <div class="">{{experienceTemplate}}</div>
            </div>
              <div class="projects">
              <!--[[ProjectsTemplate=<div class="flex flex-col"><span class="font-bold text-neutral-200">{{project.name}}:</span> <p class="text-[0.9rem]">{{project.description}}</p><a href="{{project.link}}" class="text-blue-700">{{project.link}}</a></div>]]-->
              <h1 class="text-xl font-bold">Projects:</h1>
              <div class="">{{projectsTemplate}}</div>
            </div>
          </div>
          <div class="footer flex gap-2"> 
            <h1 class="text-lg font-bold">Contact:</h1>
            <div class="flex gap-2 items-center">
              <p class="text-neutral-500">Email: {{email}}</p>
              <p class="text-neutral-500">Phone: {{phone}}</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 2,
      name: "Modern Minimalist",
      desc: "A sleek and contemporary template for tech-savvy professionals.",
      tags: ["modern", "minimal", "tech"],
      rating: 5,
      template: `
        <div style="font-family: 'Helvetica', sans-serif; padding: 20px; background-color: #f9f9f9; color: #444;">
          <h1 style="text-align: center; font-size: 26px;">Modern Minimalist</h1>
          <p style="font-size: 18px; text-align: center;">A sleek template for modern professionals in the tech industry.</p>
          <div>
            <h3>Skills</h3>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      `,
    },
    {
      id: 3,
      name: "Creative Spark",
      desc: "A vibrant and dynamic template tailored for creative individuals.",
      tags: ["creative", "colorful", "dynamic"],
      rating: 4,
      template: `
        <div style="font-family: 'Courier New', monospace; background-color: #f0f0f0; padding: 30px;">
          <h1 style="color: #ff6600; text-align: center;">Creative Spark</h1>
          <p style="color: #333;">A vibrant template for designers, artists, and other creative professionals.</p>
          <h3>Portfolio</h3>
          <ul>
            <li>Graphic Designer for XYZ Art Studio</li>
            <li>Freelance Illustrator</li>
          </ul>
        </div>
      `,
    },
    {
      id: 4,
      name: "Executive Appeal",
      desc: "A polished and formal template for high-level executives.",
      tags: ["executive", "formal", "polished"],
      rating: 5,
      template: `
        <div style="font-family: 'Times New Roman', serif; background-color: #ffffff; padding: 25px;">
          <h1 style="text-align: center; font-size: 28px;">Executive Appeal</h1>
          <p style="font-size: 18px;">A sophisticated and formal template for senior professionals.</p>
          <h3>Executive Summary</h3>
          <ul>
            <li>Leading teams at Fortune 500 companies</li>
            <li>Extensive experience in management and strategy</li>
          </ul>
        </div>
      `,
    },
    {
      id: 5,
      name: "Academic Scholar",
      desc: "A detailed template with a focus on academic achievements and research.",
      tags: ["academic", "detailed", "research"],
      rating: 5,
      template: `
        <div style="font-family: 'Georgia', serif; padding: 30px;">
          <h1 style="text-align: center;">Academic Scholar</h1>
          <p>This template is perfect for academic professionals or researchers.</p>
          <h3>Research Experience</h3>
          <ul>
            <li>Research Assistant at ABC University</li>
            <li>Published articles in top-tier journals</li>
          </ul>
        </div>
      `,
    },
    {
      id: 6,
      name: "Bold Impact",
      desc: "A bold and striking template for professionals who want to stand out.",
      tags: ["bold", "impactful", "unique"],
      rating: 3,
      template: `
        <div style="font-family: 'Impact', sans-serif; padding: 20px; background-color: #000; color: #fff;">
          <h1 style="text-align: center;">Bold Impact</h1>
          <p>Make an impact with this bold and eye-catching template.</p>
          <h3>Skills</h3>
          <ul>
            <li>Public Speaking</li>
            <li>Leadership</li>
            <li>Strategic Planning</li>
          </ul>
        </div>
      `,
    },
    {
      id: 7,
      name: "Traditional Professional",
      desc: "A traditional template that emphasizes work experience and skills.",
      tags: ["traditional", "experience-focused", "skills"],
      rating: 4,
      template: `
        <div style="font-family: 'Verdana', sans-serif; padding: 20px; border: 2px solid #ccc;">
          <h1 style="text-align: center;">Traditional Professional</h1>
          <p>Designed for professionals looking to showcase experience and skills.</p>
          <h3>Work Experience</h3>
          <ul>
            <li>Sales Manager at XYZ Corp</li>
            <li>Marketing Specialist at ABC Inc.</li>
          </ul>
        </div>
      `,
    },
    {
      id: 8,
      name: "Freelancer Portfolio",
      desc: "A visually appealing template designed to showcase portfolio work.",
      tags: ["freelancer", "portfolio", "creative"],
      rating: 4,
      template: `
        <div style="font-family: 'Tahoma', sans-serif; padding: 20px; background-color: #fafafa;">
          <h1 style="text-align: center;">Freelancer Portfolio</h1>
          <p>A perfect template for freelancers to showcase their work.</p>
          <h3>Portfolio Highlights</h3>
          <ul>
            <li>Web Design for XYZ Company</li>
            <li>Logo Design for ABC Business</li>
          </ul>
        </div>
      `,
    },
    {
      id: 9,
      name: "Graduate Starter",
      desc: "A concise and straightforward template for fresh graduates entering the workforce.",
      tags: ["graduate", "starter", "concise"],
      rating: 3,
      template: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f1f1f1;">
          <h1 style="text-align: center;">Graduate Starter</h1>
          <p>Designed for recent graduates with limited work experience.</p>
          <h3>Education</h3>
          <ul>
            <li>Bachelor of Science in Computer Science</li>
            <li>University of XYZ</li>
          </ul>
        </div>
      `,
    },
    {
      id: 10,
      name: "Tech Guru",
      desc: "A modern and innovative template for professionals in the tech industry.",
      tags: ["tech", "modern", "innovative"],
      rating: 5,
      template: `
        <div style="font-family: 'Roboto', sans-serif; padding: 20px; background-color: #fff;">
          <h1 style="text-align: center; color: #333;">Tech Guru</h1>
          <p>This template is ideal for tech professionals with cutting-edge skills.</p>
          <h3>Technical Skills</h3>
          <ul>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Web Development</li>
          </ul>
        </div>
      `,
    },
  ];
  
  export default items;
  