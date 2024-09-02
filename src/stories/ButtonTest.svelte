<script lang="ts">
    import "carbon-components-svelte/css/all.css";
    import { Button } from "carbon-components-svelte";

    export let label = 'Example Button';
</script>

<Button class="bx--btn--primary" on:click>{label}</Button>