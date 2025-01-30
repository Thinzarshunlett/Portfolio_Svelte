<script>
  import { Progressbar } from 'flowbite-svelte';
  import GotoTop from './GotoTop.svelte';
     const skills = [
    { name: 'UI/UX', level: 95 },
    { name: 'Tailwind', level: 95 },
    { name: 'Svelte', level: 50 }
  ];

  const stats = [
    { value: '10+', label: 'PROJECTS' },
    { value: '10+', label: 'HAPPY CLIENTS' },
    { value: '12+', label: 'POSITIVE REVIEW' }
  ];
  let education = [
    { course: "UI/UX Design", institution: "Coursera, Self-study" },
    { course: "Professional Web Design Course", institution: "CODE LAB" },
    { course: "Basic Web Design and Special Web Design Course (HTML, CSS, Bootstrap, JavaScript, UI/UX design)", institution: "MMS One Stop IT Solutions" },
    { course: "Third year in Computer Science", institution: "University of Computer Studies Magway" }
  ];
  const navItems = [
    { label: 'Introduction', href: '#introduction' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' }
  ];
  let activeLink = '#introduction'; 
</script>

<div class="flex flex-col md:flex-row gap-6 md:gap-0 bg-white" >
    <!-- Sidebar -->
    <aside class="w-full md:w-80 bg-orange-50 p-6 md:p-8 flex flex-col md:rounded-tr-3xl rounded-br-3xl rounded-bl-3xl h-auto md:h-[calc(100vh-4rem)]">
      <div class="text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2 md:mb-4">About Me</h1>
        <p class="text-gray-600 mb-6 md:mb-8">Portfolio Snapshot</p>
    
        <nav class="md:grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-4 md:items-start justify-center hidden">
          {#each navItems as { label, href }}
            <div class="flex items-center gap-2 md:gap-3">
              <div class="h-2 w-2 md:h-3 md:w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] hover:bg-orange-600"></div>
              <a
                href={href}
                on:click={() => activeLink = href} 
                class="text-gray-600 text-sm md:text-base hover:text-orange-600"
                class:text-orange={activeLink === href}  
              >
                {label}
              </a>
            </div>
          {/each}
        </nav>
      </div>
    
      <div class="mt-6 md:mt-auto flex justify-center md:justify-start gap-6">
        <a href="https://github.com/Thinzarshunlett" target="_blank" class="text-gray-600 hover:text-[#FF4500]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a href="#" target="_blank" class="text-gray-600 hover:text-[#FF4500]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="#" target="_blank" class="text-gray-600 hover:text-[#FF4500]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
    </aside>
  
    <!-- Main Content -->
    <main class="flex-1 p-2 md:p-12 overflow-y-auto md:h-[calc(100vh-4rem)] h-auto">
      <!-- Introduction -->
      <section id="introduction" class="mb-12 md:px-4 px-2">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black]"></div>
          <h2 class="text-3xl font-bold">Introduction</h2>
        </div>
      
        <div class="flex flex-col md:flex-row gap-8 items-start border-black border-l-2 border-dotted ps-4 md:ps-8">
          <img src="/images/profile.jpeg" alt="Avatar" class="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover" />      
          <div class="text-left">
            <h3 class="text-2xl font-bold mb-2">Thinzar Shun Lett</h3>
            <p class="text-gray-600 mb-4">UI/UX Designer</p>
            <p class="text-gray-700 leading-relaxed">
              I’m a UI/UX Designer who transitioned from a background in Computer Science because I found true joy in combining technology with design. My technical foundation fuels my passion for creating user-friendly and visually engaging digital experiences. Now, as a Junior UI/UX Designer in a technology company, I’m excited to blend my technical knowledge with creativity, crafting intuitive and visually compelling user experiences. I’m passionate about the continuous innovation in design and always strive to make a positive impact with every project.
            </p>
          </div>
        </div>
      </section>
      
      <!-- Skills -->
      <section id="skills" class="mb-12 md:px-4 px-2">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black]"></div>
          <h2 class="text-3xl font-bold">Skills</h2>
        </div>
        <div class="flex flex-col md:flex-row gap-10 border-black border-l-2 border-dotted md:ps-8 ps-4">
          <!-- Skills Overview -->
          <div class="space-y-6 md:basis-1/2">
            <p class="text-gray-700 leading-relaxed">
              Passionate about UI/UX design with strong programming skills in HTML, CSS, Bootstrap, Tailwind, Svelte, and UI/UX. 
              I excel in creating intuitive interfaces and am dedicated to advancing my career in UI/UX design, leveraging my programming 
              knowledge to craft effective solutions.
            </p>
            <div class="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-8">
              {#each stats as stat}
                <div class="text-center space-y-2">
                  <div class="text-orange-600 md:text-2xl text-xl font-bold">{stat.value}</div>
                  <div class="text-gray-600 text-xs md:text-sm">{stat.label}</div>
                </div>
              {/each}
              
            </div>
          </div>
      
          <!-- Skills Progress Bars -->
          <div class="space-y-6 md:basis-1/2 bg-orange-50 border border-black rounded-xl md:p-6 p-3 shadow-[-3px_3px_0px_black] hover:shadow-[-4px_4px_0px_black]">
            {#each skills as skill}
              <div class="flex items-center justify-between md:gap-4 gap-2">
                <span class="font-medium w-24 md:text-base text-sm">{skill.name}</span>
                <div class="w-full bg-white rounded-full h-2.5 dark:bg-gray-700">
                  <div class="bg-orange-600 h-2.5 rounded-full" style="width: {skill.level}%"></div>
                </div>
              </div>
            {/each}
            <div class="flex items-center ">
              <span class="font-medium w-24 md:text-base text-sm">Tool I use :</span>
              <img src="/images/figma.png" alt="Avatar" class="w-10 h-10 rounded-lg object-cover" />      
            </div>
          </div>
        </div>
      </section>
       <!-- Work Experience -->
       <section id="experience" class="mb-16 md:px-4 px-2">
        <div class="flex items-center gap-3 mb-8">
            <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black]"></div>
            <h2 class="text-3xl font-bold">Work Experience</h2>
        </div>
        <div class="space-y-4 border-black border-l-2 border-dotted md:ps-8 ps-4">
            <div class="relative flex flex-col md:flex-row justify-between md:items-center items-start gap-4">
                <div>
                    <h3 class="text-orange-600 text-xl font-bold mb-2">UI/UX Designer</h3>
                    <p class="text-gray-600">Hexcode Technologies</p>
                </div>
                <div class="flex flex-wrap md:flex-row flex-col gap-4">
                    <div class="flex flex-wrap gap-2">
                        <span class="md:px-4 px-1.5 py-1 rounded-full bg-orange-50 text-xs md:text-base font-medium text-orange-600 flex items-center">AI platforms</span>
                        <span class="md:px-4 px-1.5 py-1 rounded-full bg-orange-50 text-xs md:text-base font-medium text-orange-600 flex items-center">Product Design</span>
                        <span class="md:px-4 px-1.5 py-1 rounded-full bg-orange-50 text-xs md:text-base font-medium text-orange-600 flex items-center">Landing Page</span>
                    </div>
                    <div class=" absolute top-3 right-4 md:static">
                        <span class="border border-black rounded-lg bg-orange-50 shadow-[-2px_2px_0px_black] md:px-6 md:py-2 py-1 px-3 block text-center text-xs md:text-base">
                            1+ years
                        </span>
                    </div>
                </div>
            </div>
            <p class="text-gray-700 leading-relaxed">
              As a UI/UX Designer, I’ve worked on AI platforms, product designs, and landing pages. I focus on making complex AI applications intuitive and user-friendly. For product design, I create seamless experiences from wireframes to high-fidelity prototypes. I also design landing pages that clearly communicate brand messages and drive conversions. My goal in every project is to enhance usability, accessibility, and overall user experience.
            </p>
        </div>
      </section>

        <!-- Education -->
       <section id="education" class="mb-16 md:px-4 px-2">
          <div class="flex items-center gap-3 mb-8">
            <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black]"></div>
            <h2 class="text-3xl font-bold">Education</h2>
          </div>

          <div class="space-y-4 border-black border-l-2 border-dotted ps-4 md:ps-8">
            <div class="relative overflow-hidden border rounded-lg">
              <table class="w-full text-sm text-left text-gray-700">
                <tbody>
                  {#each education as entry}
                    <tr class="odd:bg-white even:bg-orange-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <td class="px-4 py-3 md:px-6 font-medium text-gray-900 dark:text-white border-r">
                        {entry.course}
                      </td>
                      <td class="px-4 py-3 md:px-6 text-gray-600">{entry.institution}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- certificates -->
        <section id="certificates" class="mb-16 md:px-4 px-2">
          <div class="flex items-center gap-3 mb-8">
              <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] "></div>
              <h2 class="text-3xl font-bold ">Certificates</h2>
          </div>
          <div class="space-y-4 border-black border-l-2 border-dotted ps-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <img src="/images/Codelab.jpg" alt="" class="border h-52">
              </div>
              <div>
                <img src="/images/Coursera1.jpg" alt="" class="border h-52">
              </div>
              <div>
                <img src="/images/Coursera2.jpg" alt="" class="border h-52">
              </div>
              <div>
                <img src="/images/Acc.jpg" alt="" class="border h-52">
              </div>
              <div>
                <img src="/images/BP.jpg" alt="" class="border h-52">
              </div>
            </div>
          </div>
        </section>    
        <GotoTop  />
       
    </main>

   
</div>
