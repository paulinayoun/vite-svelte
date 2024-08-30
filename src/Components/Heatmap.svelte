<script>
    import { onMount } from 'svelte';    
    import pointData from '../assets/data/points.json';
    import Heatmap from './js/Heatmap.js';
    import { Button, Modal } from "carbon-components-svelte";

    let points = [{"x": 93, "y": 40, "value": 18}];
    let open = false;

    // Initialize heatmap once container is ready
    onMount (() => {
        let heatmap = new Heatmap(pointData.points, document.getElementById('heatmap'));
        heatmap.init();

    });
</script>

<Button on:click={() => (open = true)}>Create database</Button>
  
  <Modal
    bind:open
    modalHeading="Create database"
    primaryButtonText="Confirm"
    secondaryButtonText="Cancel"
    on:click:button--secondary={() => (open = false)}
    on:open
    on:close
    on:submit
  >
    <p>Create a new Cloudant database in the US South region.</p>
  </Modal>
  
<div id="heatmap" style="width: 482px; height: 328px;"></div>

<style>
    #heatmap {
        display: block; 
        width: 482px;
        height: 328px;
        margin: 0 auto;
        border: 1px solid black;
        pointer-events: none; /* Allow clicks to pass through to the image */
    }
</style>