<script>
    import "../app.css";
    import { Moon, CloudSun} from 'lucide-svelte';

</script>
<header class="flex items-center h-16 sticky top-0  backdrop-blur bg-white/30 z-50 px-8 md:px-12">
  <div class=" py-4">
    <a href="https://thinzarshunlett.netlify.app/" class="text-black font-bold text-xs md:text-base ">Thinzar</a>
  </div>
  <nav class="flex-grow ">
    <!-- <ul class="flex space-x-2 lg:space-x-4 p-2.5 lg:p-4">
      <li><button on:click={() => setSection('home')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'home' ? 'font-bold text-orange-500' : ''}">Home</button></li>
      <li><button on:click={() => setSection('about')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'about' ? 'font-bold text-orange-500' : ''}">About</button></li>
      <li><button on:click={() => setSection('projects')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'projects' ? 'font-bold text-orange-500' : ''}">Works</button></li>
      <li><button on:click={() => setSection('contact')} class="hover:text-orange-500 text-xs md:text-base {currentSection === 'contact' ? 'font-bold text-orange-500' : ''}">Contact</button></li>
    </ul> -->
  </nav>

    <a href="" class="flex gap-2 justify-center items-center">
      <CloudSun size={16} />
    <span class="text-xs md:text-base ">Insights</span>
    </a>      
  </header>
  <main class="flex-grow flex flex-col items-center justify-center">
    
  <slot />
  </main>