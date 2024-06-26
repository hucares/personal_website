<script>
  import { browser } from "$app/environment";
  import Seo from "$lib/components/Seo.svelte";
  import Post from "./Post.svelte";
  //import BlogPost from '$lib/components/BlogPost.svelte';
  /** @type {import('./$types').PageData} */

  export let data;
  const { page, post, imageData } = data;
</script>

<Seo title="Alex Hu – Writing | {page.title}" description={page.description} />

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <Post data={data.page} />
  </div>
</div>
