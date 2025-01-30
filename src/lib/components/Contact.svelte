<script>
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
  
    let name = '';
    let email = '';
    let message = '';
    let isSubmitting = false;
    let isSubmitted = false;
  
    async function handleSubmit() {
      isSubmitting = true;
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      isSubmitted = true;
      isSubmitting = false;
    }
  </script>
  
    <div class="w-3/4 max-w-4xl my-6 bg-white rounded-2xl border border-black shadow-[-4px_4px_0px_black] overflow-hidden flex flex-col md:flex-row">
      <div class="md:w-1/2 p-8 bg-orange-50">
        <h2 class="text-4xl font-bold mb-6 text-gray-800" in:fly="{{ y: 50, duration: 1000, delay: 300 }}">Let's Connect</h2>
        <p class="text-lg text-gray-600 mb-8" in:fly="{{ y: 50, duration: 1000, delay: 600 }}">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div class="space-y-4" in:fly="{{ y: 50, duration: 1000, delay: 900 }}">
          <div class="flex items-center space-x-4 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>thinzarshunl@gmail.com</span>
          </div>
          <div class="flex items-center space-x-4 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Magway, Myanmar</span>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 p-8">
        {#if !isSubmitted}
          <form on:submit|preventDefault={handleSubmit} class="space-y-6" in:fade={{ duration: 300 }}>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" bind:value={name} required
                     class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" bind:value={email} required
                     class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" bind:value={message} rows="4" required
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"></textarea>
            </div>
            <button type="submit" 
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600  hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition transform hover:-translate-y-1"
                    disabled={isSubmitting}>
              {#if isSubmitting}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              {/if}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        {:else}
          <div class="text-center" in:fly={{ y: 50, duration: 500, easing: quintOut }}>
            <svg class="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 class="mt-4 text-2xl font-bold text-gray-900">Thank You!</h2>
            <p class="mt-2 text-gray-600">I've received your message and will get back to you soon.</p>
          </div>
        {/if}
      </div>
    </div>
