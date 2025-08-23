<script lang="ts">
    export let src: string;
    export let title = 'Spline scene';
  </script>
  
    <iframe
      src={src}
      title={title}
      class="w-full h-[400px]"
      frameborder="0"
      allow=" autoplay; xr-spatial-tracking"
      allowfullscreen
    />
