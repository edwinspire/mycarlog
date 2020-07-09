<script>
  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte";
  import ToolBar from "../components/ToolBar.svelte";
  import Summary from "../components/Summary.svelte";
  import {
    IdVehicle,
    APPLocalStorage
  } from "../components/Stores.js";

  export let segment;
  let id = 909;

  function ClickService() {
    alert("Servicio");
    console.log('Click en servicio');
  }

  onMount(async () => {
    let x = new APPLocalStorage();
    id = x.getPreferences().idvehicle;
    console.log({ $IdVehicle }, x.getPreferences());
  });
</script>

<style>

</style>

<Menu {segment} />
<ToolBar>
  <span slot="left">'Vehículo'</span>
  <span slot="right">
    <span class="icon">
      <i class="fas fa-tools" />
    </span>
    <div class="icon" on:click={ClickService}>
      <i class="fas fa-gas-pump" />
    </div>
  </span>
</ToolBar>
<Summary />
