<script>
  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte";
  import ToolBar from "../components/ToolBar.svelte";

  import { IdAccount, APPLocalStorage } from "../components/Stores.js";

  export let segment;
  let promise = Promise.resolve([]);
  let idaccount = 0;
  let idvehicle = 0;

  let vehicle = {};

  function ClickAddContact() {
    window.location.href = "/vehicle?idvehicle=" + idvehicle;
  }

  function handleClickSearch() {
    promise = GetData();
  }

  async function GetData() {
    let urlOrg = new URL(window.location.href);
    let searchParams = new URLSearchParams(urlOrg.search);
    idvehicle = searchParams.get("idvehicle") || "-2";
    let url = "/api/vehicle?idvehicle=" + idvehicle + "&idaccount=" + idaccount;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      let data = await res.json();
      if (data.length > 0 && data[0].idaccount && data[0].idvehicle) {
        return data[0];
      } else {
        return {};
      }
    } else {
      throw new Error("No se pudo cargar la información");
    }
  }

  onMount(async () => {
    let AppLS = new APPLocalStorage();
    idaccount = AppLS.getUser().idaccount;
    handleClickSearch();
  });
</script>

<style>
  .root {
    padding: 0.5em;
  }
</style>

<Menu {segment} />
<ToolBar Search="true">
  <span slot="Title">VEHICULO</span>
  <span slot="Rigth3" on:click={ClickAddContact}>
    <a href="/vehicle?idvehicle=0">
      <i class="fas fa-car fa-lg icon" />
      Agregar
    </a>
  </span>

</ToolBar>

<div class="columns is-multiline is-mobile root">
  {#await promise}
    <p>...waiting</p>
  {:then data}

    <article class="root">
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Propietario</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  value={data.idvehicle}
                  readonly />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Placa</label>
              <div class="control is-small">
                <input
                  placeholder="Placa"
                  type="text"
                  class="input is-small"
                  value={data.license_plate}
                  readonly />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Marca</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  value={data.mark_label}
                  readonly />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Año</label>
              <div class="control is-small">
                <input
                  type="number"
                  class="input is-small"
                  value={data.year}
                  readonly />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">VIN</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  value={data.vin}
                  readonly />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Color</label>
              <div class="control is-small">
                <input
                  type="color"
                  class="input is-small"
                  value={data.color}
                  readonly />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Tipo de combustible</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  value={data.fueltype_label}
                  readonly />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Capacidad del tanque</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  value={data.fuel_tank_capacity}
                  readonly />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Unidad de medida del tanque</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  value={data.unit_measure_fuel_tank_label}
                  readonly />
              </div>
            </div>
          </span>
        </div>
        <div class="column" />
      </div>
    </article>

  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

</div>
