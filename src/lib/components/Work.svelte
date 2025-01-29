<script lang="ts">
    import { ChevronUp,ChevronDown } from 'lucide-svelte';
    const categories = ["ALL", "Web Design", "Landing Page", "Mobile Design"];
    let activeCategory = "ALL";
  
    const projects = [
      {
        id: 1,
        title: "NeuralDev Landing Page",
        description: "Passionate about UI/UX design with strong programming skills in HTML, CSS, Bootstrap, T...",
        image: "/images/ND.png",
        category: "Landing Page"
      },
      // Duplicate projects for the grid
      {
        id: 2,
        title: "Title",
        description: "Passionate about UI/UX design with strong programming skills in HTML, CSS, Bootstrap, T...",
        image: "/images/au.png",
        category: "Web Design",
        liveUrl: "#"
      },
      {
        id: 3,
        title: "Title",
        description: "Passionate about UI/UX design with strong programming skills in HTML, CSS, Bootstrap, T...",
        image: "/images/au.png",
        category: "Mobile Design",
        liveUrl: "#"
      }
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

  </script>
  
  <div class="">
    <div class="max-w-7xl mx-auto my-8">
      <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-4">Projects</h1>
      <p class="text-gray-600">Browse through all my creations</p>
    </div>
  
    <!-- Featured Project -->
    
  <div class="relative">
    <!-- Project Display -->
    <div class="flex flex-col md:flex-row px-4 gap-8 items-center">
       <div class="flex basis-1/2 flex-col">
        <div class="relative aspect-video overflow-hidden rounded-lg border">
          <img
            src={projects[currentProject].image || "/placeholder.svg"}
            alt={projects[currentProject].title}
            class="object-cover w-full h-full"
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
                <ChevronUp class="h-4 w-4 text-white" />
            </button>
            <button
            on:click={nextProject}
            class=" bg-orange-600 rounded-full p-1.5 hover:bg-orange-700 "
            aria-label="Next project"
            >
                <ChevronDown class="h-4 w-4 text-white" />
            </button>
        </div>
      <div class="space-y-4 basis-1/2">
        <span class="text-sm font-semibold text-gray-500">PROJECTS {String(currentProject + 1).padStart(2, '0')}</span>
        <h2 class="text-3xl font-bold">{projects[currentProject].title}</h2>
        <p class="text-gray-600">{projects[currentProject].description}</p>
        <a
          href={projects[currentProject].liveUrl}
          class="inline-flex items-center text-orange-600 hover:text-orange-500"
        >
          See it live
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
     
    </div>

    
  </div>
    </div>
    
  
   <div class="bg-orange-50 md:px-12 px-6 py-1 rounded-tl-3xl rounded-tr-3xl">
     <!-- Category Filter -->
     <div class="my-8">
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
    </div>
  
    <!-- Project Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {#each filteredProjects as project}
        <div class="bg-white rounded-lg border overflow-hidden hover:border-black hover:shadow-[-4px_4px_0px_black]">
          <div class="relative aspect-video">
            <img 
              src={project.image || "/placeholder.svg"} 
              alt={project.title}
              class="w-full h-full object-cover border-b"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-4">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <a href="#" class="inline-flex items-center font-semibold text-orange-500 hover:text-orange-600">
              See
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
  