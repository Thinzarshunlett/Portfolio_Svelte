<script lang="ts">
    import { ChevronUp,ChevronDown,ChevronLeft,ChevronRight,MessageCircleHeart } from 'lucide-svelte';
    const categories = ["ALL", "Web Design", "Landing Page", "Mobile Design"];
    let activeCategory = "ALL";
  
    const projects = [
      {
        id: 1,
        title: "NeuralDev Landing Page",
        description: "A modern, intuitive landing page I created for NeuralDev, an AI development company. The page highlights the company’s mission and services, showcasing its innovative AI solutions, and provides an engaging, user-friendly experience for visitors to explore and connect.",
        image: "/images/ND.png",
        category: "Landing Page",
        liveUrl: "https://www.figma.com/design/xqKf10q4BR88HqY3ZPkWX6/Landing-Page-for-NeuralDev?node-id=0-1&t=zI5hmYSjYZ3g0h42-1"
      },
      // Duplicate projects for the grid
      {
        id: 2,
        title: "SWParse",
        description: "A user-friendly UI/UX design I created in Figma for SwParse, a web app focused on advanced data extraction. This is one of my favorite designs, and I’m incredibly satisfied with how it turned out. It includes advanced, complex extraction features, and it’s not just my effort, it was a true collaboration with my talented developer teammates. If you ask me, this is the UI I’m most proud of! Unfortunately, the UI can’t be shown right now, but I’d be happy to share it with you when it’s available.",
        image: "/images/swparse.png",
        category: "Web Design",
      },
      {
        id: 3,
        title: "T&C Logistics",
        description: "A mobile app redesign I developed for T&C Logistics, ensuring a modern and intuitive user experience while aligning with the brand’s logo theme. The redesign focuses on enhancing navigation, simplifying key workflows, and maintaining visual consistency with the logo’s color scheme and design elements, providing users with a seamless, cohesive experience for managing shipments and tracking deliveries.",
        image: "/images/tnc.png",
        category: "Mobile Design",
        liveUrl: "https://www.figma.com/design/fzqPWGzbxrNtm2B9CegcH7/TNC-for-portfolio?node-id=0-1&t=TCHOFjVW8wZmmNqX-1"
      },
      {
        id: 4,
        title: "Vaccination Event",
        description: "A clean, intuitive UI/UX design I created for managing vaccination events, streamlining registration, tracking, and administration for a seamless user experience.",
        image: "/images/vacci.png",
        category: "Web Design",
        liveUrl: "https://www.figma.com/design/LQuacCNmTxiOIaX0l0IhHF/Vaccination-for-portfolio?node-id=0-1&t=HxeXPzAntk0iLW5g-1"
      },
      {
        id: 5,
        title: "LC Search",
        description: "A sleek, efficient UI/UX design I created for the Labor Category Search, featuring advanced filtering, auto-complete, and a scrollable results table for seamless user experience.",
        image: "/images/lc.png",
        category: "Web Design",
        liveUrl: "https://www.figma.com/design/LQuacCNmTxiOIaX0l0IhHF/Vaccination-for-portfolio?node-id=0-1&t=HxeXPzAntk0iLW5g-1"
      },
      {
        id: 6,
        title: "FedFunl Mobile UI",
        description: "I redesigned the FedFunl UI for a more user-friendly and efficient experience. I also designed email templates to enhance communication and maintain brand consistency.",
        image: "/images/fed.png",
        category: "Mobile Design",
        liveUrl: "https://www.figma.com/design/ndznVDrwxXdYOl67z9Vj5O/FedFunl-mobile?node-id=0-1&t=lalPBy1aid1vJk2x-1"
      },
      {
        id: 7,
        title: "My Portfolio",
        description: "Congratulations, you’ve found the portfolio inside the portfolio! This entire UI was designed by me, just me and my trusty mouse. It’s a mix of creativity, late-night inspiration, and a touch of chaos. Enjoy exploring the design, and hopefully, you won’t need a map! 😜",
        image: "/images/portfolio.png",
        category: "Web Design",
        liveUrl: "https://www.figma.com/design/6vWyADKGXuJW5p6P4yHiH2/Portfolio?node-id=0-1&t=aTIyzsRzSKniEeEE-1"
      },
      {
        id: 8,
        title: "Hexcode Landing Page",
        description: "I designed a landing page for Hexcode Technologies with a little smooth parallax effect, highlighting their innovative solutions. The page provides an engaging, user-friendly experience, making it easy to explore services and connect with the company. Hope you enjoy the flow!",
        image: "/images/Hexcode.png",
        category: "Landing Page",
        liveUrl: "https://www.figma.com/design/zkoAS2bWt1LWQoJE09GzPL/Hexcode-for-portfolio?node-id=0-1&t=BbRKbs1YbM00iL4S-1"
      },
      {
        id: 9,
        title: "Driving Online Enrollment UI",
        description: "Designed a responsive, mobile-friendly UI in Figma for an online driving enrollment system. The interface follows a step-by-step guided process with a clean and modern layout.",
        image: "/images/car.png",
        category: "Web Design",
        liveUrl: "https://www.figma.com/design/uTdJ9rEUAtuDARZ0oaz57v/Online-Enrolment-for-portfolio?node-id=0-1&t=TCWlYIthXMEyD1kS-1"
      },
    ];
  
    $: filteredProjects = activeCategory === "ALL" 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
      
    let currentProject:number = 0;

    function nextProject() {
    currentProject = (currentProject + 1) % projects.length;
    }

    function previousProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    }
    function goToProject(index: number) {
    currentProject = index;
  }
  let isModalOpen = false;

  const toggleModal = () => {
    isModalOpen = !isModalOpen;
  };

  </script>
  
  <div class="">
    <div class="max-w-7xl mx-auto my-8">
      <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-4">Projects</h1>
      <p class="text-gray-600 md:px-64 px-6">Browse through my creations, where creativity meets usability. I design clean, functional interfaces with love (and a lot of coffee! ☕😂). Hope you enjoy as much as I enjoyed making them! 💖</p>
    </div>
  
    <!-- Featured Project -->
    
  <div class="relative">
    <!-- Project Display -->
    <div class="flex flex-col md:flex-row px-4 gap-8 items-center">
       <div class="flex basis-1/2 flex-col">
        <div class="relative aspect-video overflow-hidden rounded-lg ">
          <img
            src={projects[currentProject].image || "/placeholder.svg"}
            alt={projects[currentProject].title}
            class="object-contain w-full h-full "
          />
        </div>
         <!-- Pagination Dots -->
        <div class="flex justify-center gap-2 mt-8">
          {#each projects as _, i}
            <button
              class="w-2 h-2 rounded-full transition-colors duration-200 {i === currentProject ? 'bg-orange-600' : 'bg-gray-300'}"
              on:click={() => goToProject(i)}
              aria-label="Go to project {i + 1}"
            />
          {/each}
        </div>
       </div>
       <!-- Navigation Buttons -->
        <div class="md:absolute flex gap-3 md:flex-col md:right-0 md:bottom-8 ">
            <button
            on:click={previousProject}
            class=" bg-orange-600 rounded-full p-1.5 hover:bg-orange-700 "
            aria-label="Previous project"
            >
              <ChevronUp class="h-4 w-4 text-white hidden md:block" />
              <ChevronLeft class="h-4 w-4 text-white md:hidden " />
            </button>
            <button
            on:click={nextProject}
            class=" bg-orange-600 rounded-full p-1.5 hover:bg-orange-700 "
            aria-label="Next project"
            >
            <ChevronDown class="h-4 w-4 text-white hidden md:block" />
            <ChevronRight class="h-4 w-4 text-white md:hidden " />
            </button>
        </div>
      <div class="space-y-4 basis-1/2">
        <span class="text-sm flex justify-center md:justify-start font-semibold text-gray-500">PROJECTS {String(currentProject + 1).padStart(2, '0')}</span>
        <h2 class="text-3xl text-center md:text-start font-bold">{projects[currentProject].title}</h2>
        <p class="text-gray-600 text-center md:text-start">{projects[currentProject].description}</p>
        <div class="flex justify-center md:justify-start">
          <a
            href={projects[currentProject].liveUrl}
            target="_blank" 
            class="inline-flex items-center text-orange-600 hover:text-orange-500 font-semibold"
          >
          See the Design
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
     
    </div>
  </div>
</div>
    
  
   <div class="bg-orange-50 md:px-12 px-6 py-1 rounded-tl-3xl rounded-tr-3xl">
     <!-- Category Filter -->
     <div class="my-8 relative">
      <div class="flex flex-wrap gap-4 justify-between items-center">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="pe-4 md:border-r">
            <h3 class="text-xl font-bold">Other Projects</h3>
          </div>
          <div class="flex gap-2 md:gap-4">
            {#each categories as category}
              <button
                class="md:px-4 px-2 py-2 rounded-lg text-xs md:text-base font-semibold {activeCategory === category ? 'bg-white text-black shadow-[-2px_2px_0px_black] border border-black' : 'hover:bg-white hover:text-black hover:shadow-[-2px_2px_0px_black] hover:border hover:border-black'}"
                on:click={() => activeCategory = category}
              >
                {category}
              </button>
            {/each}
          </div>
        </div>
        <div class=" absolute right-0 top-0 md:block">
          <button on:click={toggleModal} class=" ">
            <MessageCircleHeart class="h-8 w-8 text-orange-600 animate-bounce" />
          </button>
        </div>
        {#if isModalOpen}
          <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div class="bg-orange-50 p-6 rounded-lg w-96 border border-black shadow-[-4px_4px_0px_black]">
              <h2 class="text-lg font-bold text-center">Portfolio Info</h2>
              <p class="mt-4 text-center">
                All designs and UI in this portfolio were handled by me. Some other UI projects involved collaborative efforts. Most of the projects are AI-focused, but I’m excited to explore new areas like e-commerce, color-focused UI design, and more in the future!
              </p>
              <div class="flex justify-center items-center">
                <button class="mt-4 bg-orange-600 text-white py-2 px-4 rounded" on:click={toggleModal}>Close</button>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  
    <!-- Project Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
      {#each filteredProjects as project}
        <div class="bg-white rounded-lg border overflow-hidden hover:border-black hover:shadow-[-4px_4px_0px_black]">
          <div class="relative aspect-video">
            <img 
              src={project.image || "/placeholder.svg"} 
              alt={project.title}
              class="w-full h-full object-contain p-1 border-b"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-4">{project.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
            <a href={project.liveUrl}
              target="_blank"  
              class="inline-flex items-center font-semibold text-orange-500 hover:text-orange-600">
              See the Design
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
   </div>
  </div>
  