<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Alex Hu – Writing"
  description="Past writing: investing notes, technical blog posts, and other sundries."
/>

<section class="layout-md py-12">
    <WritingList data={writing.papers} />
</section>
