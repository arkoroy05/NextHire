const resumeTemplates = [
  {
    id: 1,
    rating: 4.8,
    name: "Neon Nights",
    desc: "A cyberpunk-inspired design with neon accents and dark mode aesthetics",
    tags: ["dark", "modern", "cyberpunk", "neon"],
    template: `
        <div class="h-full bg-gray-900 p-4 font-sans text-gray-100">
          <div class="m-5">
            <header class="border-b border-pink-500/30 p-2 mb-5">
              <h1 class="text-4xl font-bold text-indigo-300">{{name}}</h1>
              <p class="text-xl text-pink-400 mt-2">{{jobTitle}}</p>
              <p class="text-gray-400 mt-4 max-w-2xl text-sm mb-2">{{about}}</p>
            </header>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div class="lg:col-span-2 space-y-6">
                <!--[[ExperienceTemplate=<div class="bg-gray-800/50 p-4 rounded border border-pink-500/20 mb-3"><h3 class="text-pink-400 text-lg">{{experience.designation}}</h3><p class="text-sm text-gray-400">{{experience.company}} | {{experience.duration}}</p></div>]]-->
                <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur overflow-auto max-h-[500px]">
                  <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4 py-2">Experience</h2>
                  {{experienceTemplate}}
                </section>
                
                <!--[[ProjectsTemplate=<div class="flex flex-col bg-gray-800/50 p-4 rounded border border-pink-500/20 mb-3"><h3 class="text-pink-400 text-lg">{{project.name}}</h3><p class="text-sm text-gray-400">{{project.description}}</p><a href="{{project.link}}" class="text-cyan-400 text-sm hover:text-cyan-300">View Project →</a></div>]]-->
                <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur overflow-auto max-h-[500px]">
                  <h2 class="text-xl font-bold text-cyan-400 mb-4 py-2">Projects</h2>
                  {{projectsTemplate}}
                </section>

                <!--[[EducationTemplate=<div class="bg-gray-800/50 p-4 rounded border border-pink-500/20 mb-3"><h3 class="text-pink-400 text-lg">{{education.type}}</h3><p class="text-sm text-gray-400">{{education.name}} | GPA: {{education.cgpa}}</p></div>]]-->
                <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur overflow-auto max-h-[500px]">
                  <h2 class="text-xl font-bold text-cyan-400 mb-4 py-2">Education</h2>
                  {{educationTemplate}}
                </section>
              </div>
              
              <aside class="space-y-5">
                <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                  <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Languages</h2>
                  <div class="flex flex-wrap overflow-auto max-h-[200px]">
                    <!--[[LanguagesTemplate=<span class="bg-gray-800 px-3 py-1 rounded-full text-pink-400 text-sm m-1">{{language}}</span>]]-->
                    {{languagesTemplate}}
                  </div>
                </section>
  
                <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                  <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Libraries</h2>
                  <div class="flex flex-wrap overflow-auto max-h-[150px]">
                    <!--[[LibrariesTemplate=<span class="bg-gray-800 px-3 py-1 rounded-full text-purple-400 text-sm m-1">{{library}}</span>]]-->
                    {{librariesTemplate}}
                  </div>
                </section>

                <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                  <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Dev Tools</h2>
                  <div class="flex flex-wrap overflow-auto max-h-[150px]">
                    <!--[[DeveloperToolsTemplate=<span class="bg-gray-800 px-3 py-1 rounded-full text-orange-400 text-sm m-1">{{developerTool}}</span>]]-->
                    {{developerToolsTemplate}}
                  </div>
                </section>
              </aside>
            </div>
            <footer class="bg-gray-800/50 p-4 rounded-lg mt-3">
              <div class="flex flex-row justify-between items-center">
                <div class="space-y-2">
                  <p class="text-gray-400 text-sm">Call me at <a href="tel:{{phone}}" class="text-white hover:text-gray-300">{{phone}}</a></p>
                  <p class="text-gray-400 text-sm">Or email me at <a href="mailto:{{email}}" class="text-white hover:text-gray-300">{{email}}</a></p>
                </div>
                <div class="space-y-2">
                  <p class="text-gray-400 text-sm">You can also find me on <a href="{{github}}" class="text-white hover:text-gray-300">GitHub</a></p>
                  <p class="text-gray-400 text-sm">Or connect with me on <a href="{{linkedin}}" class="text-white hover:text-gray-300">LinkedIn</a></p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      `,
  },
  {
    id: 2,
    rating: 4.9,
    name: "Minimal Swiss",
    desc: "Clean and minimal design inspired by Swiss typography",
    tags: ["minimal", "clean", "typography", "professional"],
    template: `
        <div class="bg-white p-4 font-sans text-gray-900 h-full">
          <div class="m-5">
            <header class="mb-8">
              <h1 class="text-5xl font-bold tracking-tight">{{name}}</h1>
              <p class="text-xl text-gray-500 mt-1">{{jobTitle}}</p>
              <p class="text-gray-600 mt-2 text-lg">{{about}}</p>
            </header>
  
            <div class="grid grid-cols-1 gap-8">
              <div class="space-y-8">
                <!--[[ExperienceTemplate=<div class="pb-2 border-b border-gray-100"><h3 class="text-lg font-bold">{{experience.designation}}</h3><p class="text-gray-500">{{experience.company}} | {{experience.duration}}</p></div>]]-->
                <section class="overflow-auto max-h-[500px]">
                  <h2 class="text-2xl font-bold mb-3 bg-white sticky top-0">Experience</h2>
                  {{experienceTemplate}}
                </section>
  
                <!--[[ProjectsTemplate=<div class="pb-2 border-b border-gray-100"><h3 class="text-lg font-bold">{{project.name}}</h3><p class="text-gray-600 mt-2">{{project.description}}</p><a href="{{project.link}}" class="text-blue-600 hover:text-blue-800 mt-2 inline-block">View Project</a></div>]]-->
                <section class="overflow-auto max-h-[500px]">
                  <h2 class="text-2xl font-bold mb-3 bg-white sticky top-0">Projects</h2>
                  {{projectsTemplate}}
                </section>
  
                <!--[[EducationTemplate=<div class="pb-2 border-b border-gray-100"><h3 class="text-lg font-bold">{{education.type}}</h3><p class="text-gray-600">{{education.name}} | GPA: {{education.cgpa}}</p></div>]]-->
                <section class="overflow-auto max-h-[300px]">
                  <h2 class="text-2xl font-bold mb-3 bg-white sticky top-0">Education</h2>
                  {{educationTemplate}}
                </section>

                <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h2 class="text-2xl font-bold mb-3">Languages</h2>
                    <div class="flex flex-wrap gap-2">
                      <!--[[SkillsTemplate=<span class="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">{{language}}</span>]]-->
                      {{skillsTemplate}}
                    </div>
                  </div>

                  <div>
                    <h2 class="text-2xl font-bold mb-3">Libraries</h2>
                    <div class="flex flex-wrap gap-2">
                      <!--[[LibrariesTemplate=<span class="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">{{library}}</span>]]-->
                      {{librariesTemplate}}
                    </div>
                  </div>

                  <div>
                    <h2 class="text-2xl font-bold mb-3">Dev Tools</h2>
                    <div class="flex flex-wrap gap-2">
                      <!--[[DeveloperToolsTemplate=<span class="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">{{developerTool}}</span>]]-->
                      {{developerToolsTemplate}}
                    </div>
                  </div>
                </section>
              </div>
              
              <footer class="border-t border-gray-200 pt-4 mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p>Phone: <a href="tel:{{phone}}" class="text-blue-600 hover:text-blue-800">{{phone}}</a></p>
                    <p>Email: <a href="mailto:{{email}}" class="text-blue-600 hover:text-blue-800">{{email}}</a></p>
                  </div>
                  <div>
                    <p>GitHub: <a href="{{github}}" class="text-blue-600 hover:text-blue-800">GitHub Profile</a></p>
                    <p>LinkedIn: <a href="{{linkedin}}" class="text-blue-600 hover:text-blue-800">LinkedIn Profile</a></p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      `,
  },
    {
      id: 3,
      rating: 4.7,
      name: "Code Terminal",
      desc: "Developer-focused design with terminal aesthetics",
      tags: ["developer", "terminal", "tech", "retro"],
      template: `
        <div class="min-h-full bg-gray-950 p-6 font-mono text-green-500">
          <div class="max-w-4xl mx-auto border border-green-500/30 rounded-lg">
            <header class="border-b border-green-500/30 p-6">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h1 class="text-4xl mb-2">
                <span class="text-green-300">~/</span>{{name}}
              </h1>
              <p class="text-xl text-green-400">{{jobTitle}}</p>
              <p class="mt-4 text-green-300/80 text-sm">{{about}}</p>
            </header>
  
            <div class="p-6 pt-0 pb-0 space-y-3">
              <!--[[ExperienceTemplate=<div class="mb-4 border-l-2 border-green-500/30 pl-4 text-[1rem]"><span class="text-green-300">$ {{experience.designation}}</span><p class="text-green-400/80">{{experience.company}} | {{experience.duration}}</p></div>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ cat experience.txt</h2>
                {{experienceTemplate}}
              </section>
  
              <!--[[ProjectsTemplate=<div class="mb-4 border-l-2 border-green-500/30 pl-4 text-[1rem]"><span class="text-green-300">$ {{project.name}}</span><p class="text-green-400/80">{{project.description}}</p><a href="{{project.link}}" class="text-green-500 hover:text-green-400">> View</a></div>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ cat projects.txt</h2>
                {{projectsTemplate}}
              </section>
  
              <!--[[SkillsTemplate=<span class="inline-block px-2 pb-4 border border-green-500/30 text-green-400 mr-2 mb-2">{{skill}}</span>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ ls skills/</h2>
                <div class="flex flex-wrap">
                  {{skillsTemplate}}
                </div>
              </section>

              <!--[[LibrariesTemplate=<span class="inline-block px-2 pb-4 border border-green-500/30 text-green-400 mr-2 mb-2">{{library}}</span>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ ls libraries/</h2>
                <div class="flex flex-wrap">
                  {{librariesTemplate}}
                </div>
              </section>
  
              <!--[[DeveloperToolsTemplate=<span class="inline-block px-2 pb-4 border border-green-500/30 text-green-400 mr-2 mb-2">{{developerTool}}</span>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ ls developer-tools/</h2>
                <div class="flex flex-wrap">
                  {{developerToolsTemplate}}
                </div>
              </section>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 4,
      rating: 4.6,
      name: "Creative Cards",
      desc: "Modern card-based layout with playful gradients and shadows",
      tags: ["creative", "colorful", "modern", "cards"],
      template: `
        <div class="min-h-full bg-gradient-to-br from-purple-100 to-pink-100 p-8 font-sans">
          <div class="max-w-5xl mx-auto">
            <header class="text-center mb-6">
              <h1 class="text-5xl font-black text-purple-900">{{name}}</h1>
              <p class="text-2xl text-purple-600 mt-2">{{jobTitle}}</p>

              <p class="text-purple-700 mt-4 max-w-2xl mx-auto">{{about}}</p>
                            <p class="text-purple-700 mt-4 max-w-2xl mx-auto">
                Phone: {{phone}}
                <br />
                Email: {{email}}
              </p>
            </header>
  
            <div class="space-y-8 mt-0">
              <!--[[ExperienceTemplate=<div class="bg-white rounded-xl p-6 mt-2"><h3 class="text-xl font-bold text-purple-900">{{experience.designation}}</h3><p class="text-purple-600">{{experience.company}}</p><p class="text-purple-500 text-sm">{{experience.duration}}</p></div>]]-->
                <section>
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Experience</h2>
                  {{experienceTemplate}}
                </section>
  
                <!--[[ProjectsTemplate=<div class="bg-white rounded-xl p-6 mt-2"><h3 class="text-xl font-bold text-purple-900">{{project.name}}</h3><p class="text-purple-700">{{project.description}}</p><a href="{{project.link}}" class="text-purple-500 hover:text-purple-600 mt-2 inline-block">View Project →</a></div>]]-->
                <section>
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Projects</h2>
                  {{projectsTemplate}}
                </section>
            </div>
          </div>
        </div>
      `,
    },
  ];
  
  export default resumeTemplates;
  