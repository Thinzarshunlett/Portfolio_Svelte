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
  
  <div class=" flex flex-col transition-colors duration-300 ">
    
  
      {#if currentSection === 'home'}
      <Home></Home>
      <!-- {:else if currentSection === 'about'}
        <About></About>
      {:else if currentSection === 'projects'}
        <Work></Work>
      {:else if currentSection === 'contact'}
        <Contact></Contact> -->
      {/if}
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