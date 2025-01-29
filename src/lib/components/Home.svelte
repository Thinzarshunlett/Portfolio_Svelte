<script>
        import { Pencil, Smartphone, Search, Zap } from 'lucide-svelte';

</script>
<div class="m min-h-screen">
    <!-- Hero Section -->
    <div class="relative grid gap-8 md:grid-cols-2 md:p-12 p-8 bg-orange-50 rounded-br-3xl rounded-bl-3xl">
      <div>
        <p class="text-gray-600">Hello, I'm</p>
        <h1 class="mt-2 text-5xl font-bold text-orange-600 md:text-6xl">UI/UX Designer</h1>
        <h2 class="mt-4 text-2xl font-semibold text-gray-800">Thinzar Shun Lett</h2>
        <p class="mt-4 text-gray-600">
          I specialize in creating intuitive and aesthetically pleasing interfaces that enhance user experience. With a
          background in Computer Science and practical experience from job simulations with Accenture and BP, I excel in
          crafting error-free designs that prioritize functionality and user satisfaction. Currently contributing as a
          Junior UI/UX designer in a technology company, I am passionate about continuous improvement and innovation in
          UI/UX design.
        </p>
        <button 
          class="mt-6 px-4 py-2 bg-[#F85A1A] text-white rounded-md hover:bg-orange-600  transition-colors"
        >
          My work
        </button>
      </div>
      <div class="flex justify-center md:justify-end">
        <img
          src="/images/au.png"
          alt="Cute cartoon character"
          class="max-w-[300px] md:max-w-[400px] rounded-full"
        />
      </div>
    </div>

    <!-- Specialties Section -->
    <section class="my-8">
      <h2 class="mb-12 text-center text-3xl font-bold text-gray-800">Specialties</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:px-12 px-8">
        <!-- UI/UX Design Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative">
            <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
              <Pencil class="h-6 w-6 text-orange-600" />
            </div>
          <h3 class="mb-2 text-xl font-semibold">UI/UX Design</h3>
          <p class="text-gray-600">Creating user-friendly interfaces</p>
        </div>

        <!-- Responsive Design Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative">
          <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
            <Smartphone class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-semibold">Responsive Design</h3>
          <p class="text-gray-600">Mobile-first approach</p>
        </div>
       
        <!-- User Research Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative">
          <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
            <Search class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-semibold">User Research</h3>
          <p class="text-gray-600">Understanding user behavior</p>
        </div>

        <!-- Front-end Skills Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative">
          <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
            <Zap class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-semibold">Front-end Skills</h3>
          <p class="text-gray-600">Svelte, Tailwind CSS</p>
        </div>
      </div>
    </section>
  </div>