<script lang="ts">
  import Markdown from "$lib/components/Markdown.svelte";
  import { formatTime } from "$lib/utils";

  type Post = {
    title: string;
    date: string;
    content: string;
  };

  export let data: Post;
  export let images: Record<string, { default: string }>;
  export let stars: Record<string, number> | null = null;
</script>

<!-- Title -->
<h3 class="text-black text-xl font-semibold mb-2">
  <span class="mr-1">{data.title}</span>
  <small class="whitespace-nowrap text-neutral-500 text-base font-normal">
    {formatTime("%B %Y", data.date)}
  </small>
</h3>

<Markdown source={data.content} />
