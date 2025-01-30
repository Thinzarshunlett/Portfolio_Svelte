<script>
        import { Pencil, Smartphone, Search, Zap } from 'lucide-svelte';

</script>
<div class="m min-h-screen">
    <!-- Hero Section -->
    <div class="relative flex flex-col-reverse md:flex-row md:gap-16 items-center md:px-12 px-8 bg-orange-50 rounded-br-3xl rounded-bl-3xl">
      <div class="basis-3/4">
        <p class="text-gray-600 text-center md:text-start">Hello, I'm</p>
        <!-- <h1 class="mt-2 text-5xl font-bold text-orange-600 md:text-6xl text-center md:text-start">UI/UX Designer</h1> -->
        <h2 class="mt-2 text-2xl font-semibold text-gray-800 text-center md:text-start">Thinzar Shun Lett</h2>
        <h1 class="mt-4 text-3xl font-bold text-orange-600 md:text-3xl text-center md:text-start">Designing seamless digital experiences</h1>
        <p class="mt-4 text-gray-600 text-center md:text-start">
          I’m a UI/UX Designer dedicated to creating intuitive, visually appealing, and user-friendly digital experiences. With a background in Computer Science and over a year of hands-on experience, I specialize in crafting seamless, error-free designs that prioritize functionality and user satisfaction. Currently, I work as a Junior UI/UX Designer at a technology company, continuously refining and innovating digital experiences.
        </p>
        <div class="flex w-full justify-center md:justify-start">
          <button  
          class="my-6 px-4 py-2 bg-[#F85A1A] text-white rounded-md hover:bg-orange-600  transition-colors"
          >
            My work
          </button>
        </div>
      </div>
      <div class="flex justify-center md:justify-end">
        <img
          src="/images/UI.png"
          alt="Cute cartoon character"
          class="max-w-[300px] md:max-w-[500px] rounded-full"
        />
      </div>
    </div>

    <!-- Specialties Section -->
    <section class="mt-8 mb-16">
      <h2 class="mb-12 text-center text-3xl font-bold text-gray-800">Specialties</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:px-12 px-8">
        <!-- UI/UX Design Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative hover:shadow-md hover:shadow-black-400">
            <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
              <Pencil class="h-6 w-6 text-orange-600" />
            </div>
          <h3 class="mb-2 text-xl font-semibold">UI/UX Design</h3>
          <p class="text-gray-600">Creating user-friendly interfaces</p>
        </div>

        <!-- Responsive Design Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative hover:shadow-md hover:shadow-black-400">
          <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
            <Smartphone class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-semibold">Responsive Design</h3>
          <p class="text-gray-600">Mobile-first approach</p>
        </div>
       
        <!-- User Research Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative hover:shadow-md hover:shadow-black-400">
          <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
            <Search class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-semibold">User Research</h3>
          <p class="text-gray-600">Understanding user behavior</p>
        </div>

        <!-- Front-end Skills Card -->
        <div class="rounded-lg border border-dashed border-gray-200 p-8 bg-orange-50 relative hover:shadow-md hover:shadow-black-400">
          <div class="absolute bg-orange-50 text-white rounded-md p-2 -top-5 right-5 border border-black shadow-[-2px_2px_0px_black]">
            <Zap class="h-6 w-6 text-orange-600" />
          </div>
          <h3 class="mb-2 text-xl font-semibold">Front-end Skills</h3>
          <p class="text-gray-600">Svelte, Tailwind CSS</p>
        </div>
      </div>
    </section>
  </div>