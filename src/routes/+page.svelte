<script lang="ts">
    import { onMount } from 'svelte';
    import { Moon, CloudSun, ArrowRight, Github, Linkedin, Twitter } from 'lucide-svelte';
    import { Pencil, Smartphone, Search, Zap } from 'lucide-svelte';
	import Home from '$lib/components/Home.svelte';
	import About from '$lib/components/About.svelte';
	import Work from '$lib/components/Work.svelte';
	import Contact from '$lib/components/Contact.svelte';

    
    let currentSection = 'home';
    let projects = [
      { title: 'Project Alpha', description: 'Innovative UI for a fintech app', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Beta Experience', description: 'UX redesign for e-commerce platform', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Gamma Interface', description: 'Cutting-edge design system', image: '/placeholder.svg?height=200&width=300' },
      { title: 'Delta Analytics', description: 'Data visualization dashboard', image: '/placeholder.svg?height=200&width=300' },
    ];

  
    function setSection(section: any) {
  currentSection = section;
}

  </script>
  
  <div class="min-h-screen flex flex-col transition-colors duration-300 ">
    <header class="flex items-center h-16 sticky top-0 border-b-2 backdrop-blur bg-white/30 z-50 px-8 md:px-12">
    <div class=" py-4">
      <a href="https://thinzarshunlett.netlify.app/" class="text-black font-bold text-xs md:text-base ">Thinzar</a>
    </div>
    <nav class="flex-grow ">
      <ul class="flex space-x-2 lg:space-x-4 p-2.5 lg:p-4">
        <li><button on:click={() => setSection('home')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'home' ? 'font-bold text-orange-500' : ''}">Home</button></li>
        <li><button on:click={() => setSection('about')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'about' ? 'font-bold text-orange-500' : ''}">About</button></li>
        <li><button on:click={() => setSection('projects')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'projects' ? 'font-bold text-orange-500' : ''}">Works</button></li>
        <li><button on:click={() => setSection('contact')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'contact' ? 'font-bold text-orange-500' : ''}">Contact</button></li>
      </ul>
    </nav>
  
      <a href="" class="flex gap-2 justify-center items-center">
        <CloudSun size={16} />
      <span class="text-xs md:text-base ">Insights</span>
      </a>      
    </header>
  
    <main class="flex-grow flex flex-col items-center justify-center ">
      {#if currentSection === 'home'}
      <Home></Home>
      {:else if currentSection === 'about'}
        <About></About>
      {:else if currentSection === 'projects'}
        <Work></Work>
      {:else if currentSection === 'contact'}
        <Contact></Contact>
      {/if}
    </main>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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