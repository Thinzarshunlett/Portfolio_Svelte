<script>
  import { Progressbar } from 'flowbite-svelte';
     const skills = [
    { name: 'UI/UX', level: 95 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind', level: 95 },
    { name: 'Svelte', level: 50 }
  ];

  const stats = [
    { value: '100+', label: 'PROJECT' },
    { value: '90+', label: 'HAPPY CLIENTS' },
    { value: '96+', label: 'POSITIVE REVIEW' }
  ];
  let education = [
    { course: "UI/UX Design", institution: "Coursera, Self-study" },
    { course: "Professional Web Design Course", institution: "CODE LAB" },
    { course: "Basic Web Design and Special Web Design Course (HTML, CSS, Bootstrap, JavaScript, UI/UX design)", institution: "MMS One Stop IT Solutions" },
    { course: "Third year in Computer Science", institution: "University of Computer Studies Magway" }
  ];
</script>

<div class="flex flex-col md:flex-row bg-white" >
    <!-- Sidebar -->
    <aside class="w-80 bg-orange-50 p-8 flex flex-col rounded-tr-3xl" style="height: calc(100vh - 4rem)">
      <div>
        <h1 class="text-4xl font-bold text-[#2D2D2D] mb-4">About Me</h1>
        <p class="text-gray-600 mb-8">Portfolio Snapshot</p>
        
        <nav class="space-y-4">
            <div class="flex items-center gap-4 ">
                <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] hover:bg-orange-600"></div>
                <a href="#introduction" class="block text-gray-600 hover:text-orange-600">Introduction</a>
            </div>
            <div class="flex items-center gap-4 ">
                <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] hover:bg-orange-600"></div>
                <a href="#skills" class="block text-gray-600 hover:text-[#FF4500]">Skills</a>
            </div>
            <div class="flex items-center gap-4 ">
                <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] hover:bg-orange-600"></div>
                <a href="#experience" class="block text-gray-600 hover:text-[#FF4500]">Work Experience</a>
            </div>
            <div class="flex items-center gap-4 ">
                <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] hover:bg-orange-600"></div>
                <a href="#education" class="block text-gray-600 hover:text-[#FF4500]">Education</a>
            </div>
            <div class="flex items-center gap-4 ">
                <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] hover:bg-orange-600"></div>
                <a href="#certificates" class="block text-gray-600 hover:text-[#FF4500]">Certificates</a>
            </div>
        </nav>
      </div>
      
      <div class="mt-auto flex gap-6">
        <a href="#" class="text-gray-600 hover:text-[#FF4500]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        <a href="#" class="text-gray-600 hover:text-[#FF4500]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="#" class="text-gray-600 hover:text-[#FF4500]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
    </aside>
  
    <!-- Main Content -->
    <main class="flex-1 p-8 md:p-12 overflow-y-auto" style="height: calc(100vh - 4rem)">
      <!-- Introduction -->
      <section id="introduction" class="mb-12">
        <div class="flex items-center gap-3 mb-8">
            <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] "></div>
            <h2 class="text-3xl font-bold ">Introduction</h2>
        </div>
        <div class="flex flex-col md:flex-row gap-8 items-start border-black border-l-2 border-dotted ps-8">
          <img
            src="/images/au.png"
            alt="Avatar"
            class="w-[200px] h-[200px] rounded-full"
          />
          <div>
            <h3 class="text-2xl font-bold mb-2">Thinzar Shun Lett</h3>
            <p class="text-gray-600 mb-4">UI/UX Designer</p>
            <p class="text-gray-700 leading-relaxed">
              I specialize in creating intuitive and aesthetically pleasing interfaces that enhance user experience. With a
              background in Computer Science and practical experience from job simulations with Accenture and BP, I excel in
              crafting error-free designs that prioritize functionality and user satisfaction. Currently contributing as a Junior
              UI/UX designer in a technology company, I am passionate about continuous improvement and innovation in UI/UX design.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Skills -->
      <section id="skills" class="mb-12">
        <div class="flex items-center gap-3 mb-8">
            <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] "></div>
            <h2 class="text-3xl font-bold ">Skills</h2>
        </div>
        <div class="flex md:flex-row flex-col gap-10 border-black border-l-2 border-dotted ps-8">
          <div class="space-y-6 basis-1/2">
            <p class="text-gray-700 leading-relaxed">
              Passionate about UI/UX design with strong programming skills in HTML, CSS, Bootstrap, Tailwind, JavaScript, Svelte, and Figma. I
              excel in creating intuitive interfaces and am dedicated to advancing my career in UI/UX design, leveraging my programming knowledge
              to craft effective solutions.
            </p>
            <div class="grid grid-cols-3 gap-4 mt-8">
              {#each stats as stat}
                <div class="text-center space-y-2">
                  <div class="text-orange-600 text-2xl font-bold">{stat.value}</div>
                  <div class="text-gray-600 text-sm">{stat.label}</div>
                </div>
              {/each}
            </div>
          </div>
          <div class="space-y-6 basis-1/2 bg-orange-50 border border-black rounded-xl p-4 shadow-[-4px_4px_0px_black]">
            {#each skills as skill}
              <div class="flex items-center justify-between gap-4">
                <div class="w-28">
                  <span class="font-medium">{skill.name}</span>
                </div>
                <div class="w-full bg-white rounded-full h-2.5 dark:bg-gray-700">
                  <div class="bg-orange-600 h-2.5 rounded-full" style="width: {skill.level}%"></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>
  
      <!-- Work Experience -->
      <section id="experience" class="mb-16">
        <div class="flex items-center gap-3 mb-8">
            <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] "></div>
            <h2 class="text-3xl font-bold ">Work Experience</h2>
        </div>
        <div class="space-y-4 border-black border-l-2 border-dotted ps-8">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-orange-600 text-xl font-bold mb-4">UI/UX Designer</h3>
              <p class="text-gray-600 mb-4">Hexcode Technologies</p>
            </div>
            <div class="flex gap-4 items-start">
              <span class="px-4 py-1 rounded-full bg-orange-50 font-medium text-orange-600">AI Application</span>
              <span class="px-4 py-1 rounded-full bg-orange-50 font-medium text-orange-600">Product Design</span>
              <span class="px-4 py-1 rounded-full bg-orange-50 font-medium text-orange-600">Landing Page</span>
              <span class="border border-black rounded-lg bg-orange-50 shadow-[-2px_2px_0px_black] p-6">1+ years</span>
            </div>
          </div>
          <p class="text-gray-700 leading-relaxed">
            Passionate about UI/UX design with strong programming skills in HTML, CSS, Bootstrap, Tailwind, JavaScript, Svelte, and Figma. I
            excel in creating intuitive interfaces and am dedicated to advancing my career in UI/UX design, leveraging my programming knowledge
            to craft effective solutions.
          </p>
        </div>
      </section>

        <!-- Education -->
        <section id="education" class="mb-16">
          <div class="flex items-center gap-3 mb-8">
              <div class="h-3 w-3 rounded-full bg-orange-50 border border-black shadow-[-1px_1px_0px_black] "></div>
              <h2 class="text-3xl font-bold ">Education</h2>
          </div>
          <div class="space-y-4 border-black border-l-2 border-dotted ps-8">
                        
            <div class="relative overflow-x-auto border sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <!-- <thead class="text-xs text-gray-700 uppercase bg-orange-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">Course</th>
                    <th scope="col" class="px-6 py-3">Institution</th>
                  </tr>
                </thead> -->
                <tbody>
                  {#each education as entry}
                    <tr class="odd:bg-white even:bg-orange-50 even:bg-opacity-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
                        {entry.course}
                      </td>
                      <td class="px-6 py-4">{entry.institution}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </section>


        <!-- certificates -->
        <section id="certificates" class="mb-16">
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
    </main>
</div>
