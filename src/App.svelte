<script lang="ts">
  import "carbon-components-svelte/css/all.css";
  import Modal from './components/Modal.svelte';
  import Barchart from "./components/BarChart.svelte";
  import LineChart from "./components/LineChart.svelte";

  let theme = "g90"; // "white" | "g10" | "g80" | "g90" | "g100"

  $: document.documentElement.setAttribute("theme", theme);
</script>

<main>
  <div class="card">
    <Modal />
  </div>

  <div class="chart">
    <Barchart />
    <LineChart />
  </div>
</main>

<style>
  .chart {
    display: flex;
    gap: 1em;
  }
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
