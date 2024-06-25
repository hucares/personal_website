<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="Alex Hu"
  description="Software engineer and founder."
/>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I cofounded <a class="link" href="https://www.fortue.com">Fortue</a>, a
      construction compliance platform.
    </p>

    <p>
      While my primary skill is software engineering, I seek to maximize impact wherever I find myself.
      Sometimes this means solving thorny product, operations, or go-to-market problems.
      I love thinking about the future. Of particular interest to me right now are semiconductors and GLP1 drugs.
    </p>

    <p>
      Previously, I've worked at <a class="link" href="https://asana.com">Asana</a>,
      <a class="link" href="https://flexport.com">Flexport</a>, and
      <a class="link" href="https://standard.ai">Standard AI</a>.

      I graduated from UC Berkeley with a degree in computer science.
    </p>

    <p>Other interests: running, reading, BJJ, photography.</p>
  </div>

  <div class="space-y-5">
    <!-- <p>This is what I look like:</p> -->
    <img
      alt="Photograph of Alex Hu at his desk"
      src="/assets/images/alex-profile.jpg"
    />
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
