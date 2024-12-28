const resumeTemplates = [
    {
      id: 1,
      rating: 4.8,
      name: "Neon Nights",
      desc: "A cyberpunk-inspired design with neon accents and dark mode aesthetics",
      tags: ["dark", "modern", "cyberpunk", "neon"],
      template: `
          <div class="min-h-screen bg-gray-900 p-4 md:p-8 font-sans text-gray-100 overflow-x-hidden">
            <div class="max-w-6xl mx-auto space-y-6">
              <header class="border-b border-pink-500/30 pb-6">
                <h1 class="text-4xl md:text-6xl font-bold text-indigo-300 truncate">{{name}}</h1>
                <p class="text-xl text-pink-400 mt-2 truncate">{{jobTitle}}</p>
                <p class="text-gray-400 mt-4 max-w-2xl text-sm md:text-base line-clamp-3">{{about}}</p>
              </header>
              
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                  <!--[[ExperienceTemplate=<div class="bg-gray-800/50 p-4 rounded border border-pink-500/20 mb-3">
                    <h3 class="text-pink-400 text-lg truncate">{{experience.designation}}</h3>
                    <p class="text-sm text-gray-400 truncate">{{experience.company}} | {{experience.duration}}</p>
                  </div>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur overflow-auto max-h-[500px]">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4 sticky top-0 bg-gray-800/95 py-2">Experience</h2>
                    {{experienceTemplate}}
                  </section>
                  
                  <!--[[ProjectsTemplate=<div class="bg-gray-800/50 p-4 rounded border border-pink-500/20 mb-3">
                    <h3 class="text-pink-400 text-lg truncate">{{project.name}}</h3>
                    <p class="text-sm text-gray-400 line-clamp-2">{{project.description}}</p>
                    <a href="{{project.link}}" class="text-cyan-400 text-sm hover:text-cyan-300 truncate block">View Project →</a>
                  </div>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur overflow-auto max-h-[500px]">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4 sticky top-0 bg-gray-800/95 py-2">Projects</h2>
                    {{projectsTemplate}}
                  </section>
                </div>
                
                <aside class="space-y-6">
                  <!--[[SkillsTemplate=<span class="inline-block px-3 py-1 bg-pink-500/20 rounded-full text-pink-400 text-sm m-1 truncate max-w-full">{{skill}}</span>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Skills</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[200px]">
                      {{skillsTemplate}}
                    </div>
                  </section>
    
                  <!--[[EducationTemplate=<div class="mb-3">
                    <h3 class="text-pink-400 truncate">{{education.type}}</h3>
                    <p class="text-sm text-gray-400 truncate">{{education.name}} | GPA: {{education.cgpa}}</p>
                  </div>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur overflow-auto max-h-[300px]">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4 sticky top-0 bg-gray-800/95 py-2">Education</h2>
                    {{educationTemplate}}
                  </section>
    
                  <!--[[LanguagesTemplate=<span class="inline-block px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm m-1 truncate max-w-full">{{language}}</span>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Languages</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{languagesTemplate}}
                    </div>
                  </section>
    
                  <!--[[FrameworksTemplate=<span class="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm m-1 truncate max-w-full">{{framework}}</span>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Frameworks</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{frameworksTemplate}}
                    </div>
                  </section>
    
                  <!--[[LibrariesTemplate=<span class="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm m-1 truncate max-w-full">{{library}}</span>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Libraries</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{librariesTemplate}}
                    </div>
                  </section>
    
                  <!--[[DeveloperToolsTemplate=<span class="inline-block px-3 py-1 bg-orange-500/20 rounded-full text-orange-400 text-sm m-1 truncate max-w-full">{{developerTool}}</span>]]-->
                  <section class="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur">
                    <h2 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Developer Tools</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{developerToolsTemplate}}
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        `,
    },
    // Similar changes for other templates...
    {
      id: 2,
      rating: 4.9,
      name: "Minimal Swiss",
      desc: "Clean and minimal design inspired by Swiss typography",
      tags: ["minimal", "clean", "typography", "professional"],
      template: `
          <div class="min-h-screen bg-white p-4 md:p-8 font-sans text-gray-900 overflow-x-hidden">
            <div class="max-w-6xl mx-auto">
              <header class="mb-12">
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight truncate">{{name}}</h1>
                <p class="text-xl md:text-2xl text-gray-500 mt-4 truncate">{{jobTitle}}</p>
                <p class="text-gray-600 mt-6 max-w-2xl text-sm md:text-base line-clamp-3">{{about}}</p>
              </header>
    
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div class="lg:col-span-8 space-y-8">
                  <!--[[ExperienceTemplate=<div class="mb-6 pb-6 border-b border-gray-100">
                    <h3 class="text-lg md:text-xl font-bold truncate">{{experience.designation}}</h3>
                    <p class="text-gray-500 truncate">{{experience.company}} | {{experience.duration}}</p>
                  </div>]]-->
                  <section class="overflow-auto max-h-[500px]">
                    <h2 class="text-2xl md:text-3xl font-bold mb-6 sticky top-0 bg-white py-2">Experience</h2>
                    {{experienceTemplate}}
                  </section>
    
                  <!--[[ProjectsTemplate=<div class="mb-6 pb-6 border-b border-gray-100">
                    <h3 class="text-lg md:text-xl font-bold truncate">{{project.name}}</h3>
                    <p class="text-gray-600 mt-2 line-clamp-2">{{project.description}}</p>
                    <a href="{{project.link}}" class="text-blue-600 hover:text-blue-800 mt-2 inline-block truncate">View Project</a>
                  </div>]]-->
                  <section class="overflow-auto max-h-[500px]">
                    <h2 class="text-2xl md:text-3xl font-bold mb-6 sticky top-0 bg-white py-2">Projects</h2>
                    {{projectsTemplate}}
                  </section>
                </div>
    
                <div class="lg:col-span-4 space-y-8">
                  <!--[[SkillsTemplate=<span class="inline-block px-3 py-1 bg-gray-100 rounded-md text-gray-800 m-1 truncate max-w-full">{{skill}}</span>]]-->
                  <section>
                    <h2 class="text-2xl md:text-3xl font-bold mb-4">Skills</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[200px]">
                      {{skillsTemplate}}
                    </div>
                  </section>
    
                  <!--[[EducationTemplate=<div class="mb-4 pb-4 border-b border-gray-100">
                    <h3 class="font-bold truncate">{{education.type}}</h3>
                    <p class="text-gray-600 truncate">{{education.name}}</p>
                    <p class="text-gray-500 truncate">GPA: {{education.cgpa}}</p>
                  </div>]]-->
                  <section class="overflow-auto max-h-[300px]">
                    <h2 class="text-2xl md:text-3xl font-bold mb-4 sticky top-0 bg-white py-2">Education</h2>
                    {{educationTemplate}}
                  </section>
    
                  <!--[[LanguagesTemplate=<span class="inline-block px-3 py-1 bg-blue-50 text-blue-800 rounded-md m-1 truncate max-w-full">{{language}}</span>]]-->
                  <section>
                    <h2 class="text-2xl md:text-3xl font-bold mb-4">Languages</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{languagesTemplate}}
                    </div>
                  </section>
    
                  <!--[[FrameworksTemplate=<span class="inline-block px-3 py-1 bg-green-50 text-green-800 rounded-md m-1 truncate max-w-full">{{framework}}</span>]]-->
                  <section>
                    <h2 class="text-2xl md:text-3xl font-bold mb-4">Frameworks</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{frameworksTemplate}}
                    </div>
                  </section>
    
                  <!--[[LibrariesTemplate=<span class="inline-block px-3 py-1 bg-purple-50 text-purple-800 rounded-md m-1 truncate max-w-full">{{library}}</span>]]-->
                  <section>
                    <h2 class="text-2xl md:text-3xl font-bold mb-4">Libraries</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{librariesTemplate}}
                    </div>
                  </section>
    
                  <!--[[DeveloperToolsTemplate=<span class="inline-block px-3 py-1 bg-orange-50 text-orange-800 rounded-md m-1 truncate max-w-full">{{developerTool}}</span>]]-->
                  <section>
                    <h2 class="text-2xl md:text-3xl font-bold mb-4">Developer Tools</h2>
                    <div class="flex flex-wrap overflow-auto max-h-[150px]">
                      {{developerToolsTemplate}}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        `,
    },
    // Would you like me to continue with the remaining templates?
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
              <p class="mt-4 text-green-300/80">{{about}}</p>
            </header>
  
            <div class="p-6 space-y-6">
              <!--[[ExperienceTemplate=<div class="mb-4 border-l-2 border-green-500/30 pl-4">
                <span class="text-green-300">$ {{experience.designation}}</span>
                <p class="text-green-400/80">{{experience.company}} | {{experience.duration}}</p>
              </div>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ cat experience.txt</h2>
                {{experienceTemplate}}
              </section>
  
              <!--[[ProjectsTemplate=<div class="mb-4 border-l-2 border-green-500/30 pl-4">
                <span class="text-green-300">$ {{project.name}}</span>
                <p class="text-green-400/80">{{project.description}}</p>
                <a href="{{project.link}}" class="text-green-500 hover:text-green-400">> View</a>
              </div>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ cat projects.txt</h2>
                {{projectsTemplate}}
              </section>
  
              <!--[[SkillsTemplate=<span class="inline-block px-2 py-1 border border-green-500/30 text-green-400 mr-2 mb-2">{{skill}}</span>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ ls skills/</h2>
                <div class="flex flex-wrap">
                  {{skillsTemplate}}
                </div>
              </section>
  
              <!--[[EducationTemplate=<div class="mb-4 border-l-2 border-green-500/30 pl-4">
                <span class="text-green-300">$ {{education.type}}</span>
                <p class="text-green-400/80">{{education.name}} | GPA: {{education.cgpa}}</p>
              </div>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ cat education.txt</h2>
                {{educationTemplate}}
              </section>
  
              <!--[[LanguagesTemplate=<span class="inline-block px-2 py-1 border border-green-500/30 text-green-400 mr-2 mb-2">{{language}}</span>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ ls languages/</h2>
                <div class="flex flex-wrap">
                  {{languagesTemplate}}
                </div>
              </section>
  
              <!--[[FrameworksTemplate=<span class="inline-block px-2 py-1 border border-green-500/30 text-green-400 mr-2 mb-2">{{framework}}</span>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ ls frameworks/</h2>
                <div class="flex flex-wrap">
                  {{frameworksTemplate}}
                </div>
              </section>
              <!--[[LibrariesTemplate=<span class="inline-block px-2 py-1 border border-green-500/30 text-green-400 mr-2 mb-2">{{library}}</span>]]-->
              <section>
                <h2 class="text-xl mb-4 text-green-300">$ ls libraries/</h2>
                <div class="flex flex-wrap">
                  {{librariesTemplate}}
                </div>
              </section>
  
              <!--[[DeveloperToolsTemplate=<span class="inline-block px-2 py-1 border border-green-500/30 text-green-400 mr-2 mb-2">{{developerTool}}</span>]]-->
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
            <header class="text-center mb-12">
              <h1 class="text-5xl font-black text-purple-900">{{name}}</h1>
              <p class="text-2xl text-purple-600 mt-2">{{jobTitle}}</p>
              <p class="text-purple-700 mt-4 max-w-2xl mx-auto">{{about}}</p>
            </header>
  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-8">
                <!--[[ExperienceTemplate=<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 class="text-xl font-bold text-purple-900">{{experience.designation}}</h3>
                  <p class="text-purple-600">{{experience.company}}</p>
                  <p class="text-purple-500 text-sm">{{experience.duration}}</p>
                </div>]]-->
                <section>
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Experience</h2>
                  {{experienceTemplate}}
                </section>
  
                <!--[[ProjectsTemplate=<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 class="text-xl font-bold text-purple-900">{{project.name}}</h3>
                  <p class="text-purple-700">{{project.description}}</p>
                  <a href="{{project.link}}" class="text-purple-500 hover:text-purple-600 mt-2 inline-block">View Project →</a>
                </div>]]-->
                <section>
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Projects</h2>
                  {{projectsTemplate}}
                </section>
  
                <!--[[SkillsTemplate=<span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full m-1">{{skill}}</span>]]-->
                <section class="bg-white rounded-xl p-6 shadow-lg">
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Skills</h2>
                  <div class="flex flex-wrap">
                    {{skillsTemplate}}
                  </div>
                </section>
              </div>
  
              <div class="space-y-8">
                <!--[[EducationTemplate=<div class="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <h3 class="font-bold text-purple-900">{{education.type}}</h3>
                  <p class="text-purple-700">{{education.name}}</p>
                  <p class="text-purple-500">GPA: {{education.cgpa}}</p>
                </div>]]-->
                <section>
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Education</h2>
                  {{educationTemplate}}
                </section>
  
                <!--[[LanguagesTemplate=<span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full m-1">{{language}}</span>]]-->
                <section class="bg-white rounded-xl p-6 shadow-lg">
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Languages</h2>
                  <div class="flex flex-wrap">
                    {{languagesTemplate}}
                  </div>
                </section>
  
                <!--[[FrameworksTemplate=<span class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full m-1">{{framework}}</span>]]-->
                <section class="bg-white rounded-xl p-6 shadow-lg">
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Frameworks</h2>
                  <div class="flex flex-wrap">
                    {{frameworksTemplate}}
                  </div>
                </section>
  
                <!--[[LibrariesTemplate=<span class="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full m-1">{{library}}</span>]]-->
                <section class="bg-white rounded-xl p-6 shadow-lg">
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Libraries</h2>
                  <div class="flex flex-wrap">
                    {{librariesTemplate}}
                  </div>
                </section>
  
                <!--[[DeveloperToolsTemplate=<span class="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full m-1">{{developerTool}}</span>]]-->
                <section class="bg-white rounded-xl p-6 shadow-lg">
                  <h2 class="text-2xl font-bold text-purple-900 mb-6">Developer Tools</h2>
                  <div class="flex flex-wrap">
                    {{developerToolsTemplate}}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      `,
    },
  ];
  
  export default resumeTemplates;
  