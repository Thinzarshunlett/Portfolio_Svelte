<script lang="ts">
    import { onMount } from 'svelte';
    import { Moon, Sun, ArrowRight, Github, Linkedin, Twitter } from 'lucide-svelte';
  
    let isDarkMode = false;
    
    let currentSection = 'home';
    let projects = [
      { title: 'Project Alpha', description: 'Innovative UI for a fintech app', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Beta Experience', description: 'UX redesign for e-commerce platform', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Gamma Interface', description: 'Cutting-edge design system', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Delta Analytics', description: 'Data visualization dashboard', image: '/placeholder.svg?height=200&width=300' },
    ];
  
    function toggleDarkMode() {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  
    function setSection(section: any) {
  currentSection = section;
}


    onMount(() => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDarkMode = prefersDark;
      if (isDarkMode) {
        document.body.classList.add('dark');
      }
    });
  </script>
  
  <div class="min-h-screen flex flex-col transition-colors duration-300 {isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}">
    <header class="flex items-center sticky top-0 backdrop-blur bg-white/30 dark:bg-gray-900/30 z-50">
    <div class="bg-orange-500 px-2 py-4">
      <a href="https://thinzarshunlett.netlify.app/" class="text-white font-bold text-xs md:text-base ">Thinzar</a>
    </div>
    <nav class="flex-grow ">
      <ul class="flex space-x-2 lg:space-x-4 p-2.5 lg:p-4">
        <li><button on:click={() => setSection('home')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'home' ? 'font-bold text-orange-500' : ''}">Home</button></li>
        <li><button on:click={() => setSection('projects')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'projects' ? 'font-bold text-orange-500' : ''}">Works</button></li>
        <li><button on:click={() => setSection('about')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'about' ? 'font-bold text-orange-500' : ''}">About</button></li>
        <li><button on:click={() => setSection('contact')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'contact' ? 'font-bold text-orange-500' : ''}">Contact</button></li>
      </ul>
    </nav>
    <button
      on:click={toggleDarkMode}
      class="flex justify-center items-center px-2 py-4 space-x-2 hover:bg-orange-500 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
    {#if isDarkMode}
        <Sun size={16} />
      {:else}
        <Moon size={16} />
      {/if}
      <span class="text-xs md:text-base ">Mode</span>
      
    </button>
    </header>
  
    <main class="flex-grow flex flex-col items-center justify-center p-4">
      {#if currentSection === 'home'}
        <div class="text-center space-y-8 animate-fade-in">
          <p class="text-base font-semibold text-gray-500">Hello, I'm</p>
          <p class="text-4xl font-semibold text-black text-opacity-80 ">Thinzar Shun Lett</p>
          <h1 class="text-6xl font-bold text-orange-500">UI/UX Designer</h1>
        </div>
      {:else if currentSection === 'about'}
        <div class="max-w-2xl text-center animate-slide-in">
          <h2 class="text-3xl font-bold mb-6 text-orange-500">About Me</h2>
          <p class="mb-4">I love creating clean, intuitive designs that make life easier for users. With a background in Computer Science and hands-on experience from job simulations with Accenture and BP, I’ve learned how to craft functional and visually appealing interfaces that just work.</p>
          <p>Currently, I’m working as a Junior UI/UX Designer at a tech company, and I’m always looking for new ways to improve and innovate in the world of design.</p>
        </div>
      {:else if currentSection === 'projects'}
        <div class="w-full max-w-6xl  animate-slide-in">
          <h2 class="text-3xl font-bold mb-6 text-orange-500 text-center">Last Projects</h2>
          <div class=" bg-white py-12 flex w-full justify-center items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div class="bg-white border-x-2 w-64 h-full border-black border-opacity-30 rounded-md transform rotate-[-11deg] hover:rotate-0 transition-transform duration-500 hover:rounded-md hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50 hover:z-40 z-30">
                <div class="p-3 border-y-8 border-orange-500 rounded-md space-y-4">
                  <img src="/images/swparse.png" class=" w-full h-44  border border-neutral-200 rounded" alt="">
                  <hr class=" border border-dashed border-orange-500">
                <div class="space-y-2">
                  <h3 class="text-base ">SWParse</h3>
                  <p class="text-sm">Streamline Your Document Extractions</p>
                  <a href="" class="block text-center text-sm font-bold text-orange-500">see more</a>
                </div>
              </div>
              </div>
              <div class="bg-white border-x-2 w-64 h-full border-black border-opacity-30 rounded-md transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 hover:rounded-md hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50  hover:z-40 z-20">
                <div class="p-3 border-y-8 border-orange-500 rounded-md space-y-4">
                  <img src="/images/Online.png" class="w-full h-44  border border-neutral-200 rounded" alt="">
                  <hr class=" border border-dashed border-orange-500">
                <div class="space-y-2">
                  <h3 class="text-base font-semibold">Online Enrolment</h3>
                  <p class="text-sm">Online Enrolment for Driving Courses</p>
                  <a href="" class="block text-center text-sm font-bold text-orange-500">see more</a>
                </div>
              </div>
              </div>
              <div class="bg-white border-x-2 w-64 h-full border-black border-opacity-30 rounded-md transform rotate-[5deg] hover:rotate-0 transition-transform duration-500 hover:rounded-md hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50  hover:z-40 z-10">
                <div class="p-3 border-y-8 border-orange-500 rounded-md space-y-4">
                  <img src="/images/Hexcode.png" class="w-full h-44  border border-neutral-200 rounded" alt="">
                  <hr class=" border border-dashed border-orange-500">
                <div class="space-y-2">
                  <h3 class="text-base font-semibold">Hexcode Technologies</h3>
                  <p class="text-sm">Landing page for Hexcode Technologies</p>
                  <a href="" class="block text-center text-sm font-bold text-orange-500">see more</a>
                </div>
              </div>
              </div>
              <div class="bg-white border-x-2 w-64 h-full border-black border-opacity-30 rounded-md transform rotate-[11deg] hover:rotate-0 transition-transform duration-500 hover:rounded-md hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50  hover:z-40 z-0">
                <div class="p-3 border-y-8 border-orange-500 rounded-md space-y-4">
                  <img src="/images/NeuralDev.png" class="w-full h-44 border border-neutral-200 rounded" alt="">
                  <hr class=" border border-dashed border-orange-500">
                <div class="space-y-2">
                  <h3 class="text-base font-semibold">NeuralDev </h3>
                  <p class="text-sm">Transform Your Industrial Operations with Intelligent Automation</p>
                  <a href="" class="block text-center text-sm font-bold text-orange-500">see more</a>
                </div>
              </div>
              </div>
            </div>
            
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {#each projects as project}
              <div class="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
                  <p class="mb-4">{project.description}</p>
                  <a href="#" class="text-orange-500 hover:underline inline-flex items-center">
                    View Project <ArrowRight class="ml-2" size={18} />
                  </a>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else if currentSection === 'contact'}
        <div class="max-w-md w-full animate-slide-in">
          <h2 class="text-3xl font-bold mb-6 text-orange-500">Get in Touch</h2>
          <form class="space-y-4">
            <div>
              <label for="name" class="block mb-2">Name</label>
              <input type="text" id="name" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
            </div>
            <div>
              <label for="email" class="block mb-2">Email</label>
              <input type="email" id="email" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
            </div>
            <div>
              <label for="message" class="block mb-2">Message</label>
              <textarea id="message" rows="4" class="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required></textarea>
            </div>
            <button type="submit" class="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-200">Send Message</button>
          </form>
        </div>
      {/if}
    </main>
  
    <footer class="p-4 text-center bg-orange-500 text-white">
      <div class="flex justify-center space-x-4 mb-4">
        <a href="#" class="hover:text-gray-200 transition-colors duration-200" aria-label="GitHub"><Github size={24} /></a>
        <a href="#" class="hover:text-gray-200 transition-colors duration-200" aria-label="LinkedIn"><Linkedin size={24} /></a>
        <a href="#" class="hover:text-gray-200 transition-colors duration-200" aria-label="Twitter"><Twitter size={24} /></a>
      </div>
      <p>&copy; 2024 Thinzar. All rights reserved.</p>
    </footer>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    :global(.dark) {
      color-scheme: dark;
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out;
    }
    .animate-slide-in {
      animation: slideIn 0.5s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideIn {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  </style>