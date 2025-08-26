<script>
        import { Pencil, Smartphone, Search, Zap } from 'lucide-svelte';
        import SplineIframe from '$lib/SplineIframe.svelte';
  const SPLINE_SCENE_URL =
    "https://my.spline.design/interactivekeyboardbyabhinand-J5KKNH5gg7835aJ0GuvTg84q/";

    let items = [
      {
      id: 1,
      title: "NeuralDev Landing Page",
      description: "A modern, intuitive landing page I created for NeuralDev...",
      image: "/images/ND.png",
    },
    {
      id: 2,
      title: "SWParse",
      description: "A user-friendly UI/UX design I created in Figma for SwParse...",
      image: "/images/swparse.png",
    },
    {
      id: 3,
      title: "T&C Logistics",
      description: "A mobile app redesign I developed for T&C Logistics...",
      image: "/images/tnc.png",
    },
    {
      id: 4,
      title: "Vaccination Event",
      description: "A clean, intuitive UI/UX design I created for managing vaccination events...",
      image: "/images/vacci.png",
    },
    {
      id: 5,
      title: "LC Search",
      description: "A sleek, efficient UI/UX design I created for the Labor Category Search...",
      image: "/images/lc.png",
    },
    {
      id: 6,
      title: "FedFunl Mobile UI",
      description: "I redesigned the FedFunl UI for a more user-friendly and efficient experience...",
      image: "/images/fed.png",
    },
    {
      id: 7,
      title: "Hexcode Landing Page",
      description: "I designed a landing page for Hexcode Technologies...",
      image: "/images/Hexcode.png",
    },
    {
      id: 8,
      title: "Driving Online Enrollment UI",
      description: "Designed a responsive, mobile-friendly UI in Figma...",
      image: "/images/car.png",
    }
  ];
</script>
<div class="">
    <!-- Hero Section -->
    <section>
      <div class="p-8 md:p-12 ">
        <div class="md:flex justify-between">
          <div class=" basis-3/4">
            <h3 class=" text-3xl md:text-5xl">I’m Thinzar, a UI/UX designer growing with every project, focused on creating clean layouts, smooth experiences, and designs that truly work for users.</h3>
          </div>
          <div class="md:mt-6 mt-8 ">
            <span class=" text-gray-800 p-2 md:p-3 text-sm md:text-base border border-black rounded-full">2 YEARS OF EXPERIENCES</span>
          </div>
        </div>
        <section class="grid place-items-center ">
          <SplineIframe src={SPLINE_SCENE_URL} title="Interactive Keyboard" />
        </section>
       <!-- <div class="flex justify-center my-3 md:my-0">
        <img src="/images/hero.png" alt="Avatar" class="w-auto h-72 md:w-auto md:h-96 object-cover" />   
       </div>    -->

       <div class="flex justify-between items-center">
        <div class="flex items-center whitespace-nowrap">
          <span class="text-sm md:text-base">GO TO WORK</span>
          <svg 
            class="ml-2 w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
          <div class="">
            <span class=" text-gray-800 font-semibold p-2 md:p-3 text-xs md:text-base border border-black rounded-full">Designing clarity into every pixel.</span>
          </div>
       </div>

      </div>
    </section>

    <section class="">
      <div class="mx-8 md:mx-12 border-t border-slate-200 py-4 md:py-12 md:flex  border-dotted ">
        <div class="flex basis-1/4 whitespace-nowrap sticky md:top-20  self-start py-2 bg-white z-10">
          <span class="text-sm md:text-base">PROJECTS</span>
          <svg 
            class="ml-2 w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-12 w-full">
          {#each items as item}
            <div class="space-y-4 ">
              <h3 class="mb-4 font-semibold">{item.title}</h3>
              <span class=" text-sm text-gray-500">{item.description}</span>
              <div class=" md:h-52 w-full bg-gray-50 rounded-sm flex items-center justify-center">
                <img src={item.image} alt={item.title} class=" object-center h-full w-full rounded-sm" />
            </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
</div>