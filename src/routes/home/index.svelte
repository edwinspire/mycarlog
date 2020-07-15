<script>
  import { onMount } from "svelte";
  import Menu from "../../components/Menu.svelte";
  import ToolBar from "../../components/ToolBar.svelte";
  import Summary from "../../components/Summary.svelte";
  import { IdVehicle, APPLocalStorage } from "../../components/Stores.js";
  

  export let segment;
  let id = 909;
  

  function ClickService() {
    window.location.href = "/service";
  }

  onMount(async () => {
    let x = new APPLocalStorage();
    id = x.getPreferences().idvehicle;
    console.log({ $IdVehicle }, x.getPreferences());
  });
</script>

<style>

</style>

<Menu title="HHHHHH" {segment} >
  <span slot="Title" class="has-text-info">HOME</span>
  <span slot=left>
    <div class="level-item">
      <span>
        <div class="tags has-addons">
          <span class="tag">123</span>
          <span class="tag is-info">km</span>
        </div>
      </span>
    </div>
  </span>
</Menu>


<ToolBar>
  <span slot="left">Vehículo</span>
  <span slot="right">
    <span class="icon" on:click={ClickService}>
      <i class="fas fa-tools" />
    </span>
    <span class="icon">
      <i class="fas fa-gas-pump" />
    </span>
  </span>
</ToolBar>
<Summary />
