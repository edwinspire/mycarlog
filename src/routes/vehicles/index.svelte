<script>
  import { onMount } from "svelte";
  import Menu from "../../components/Menu.svelte";
  import { FetchData } from "../../components/FetchData.js";
  import { IdAccount, APPLocalStorage } from "../../components/Stores.js";

  let FData = new FetchData();

  export let segment;
  let promise = Promise.resolve([]);
  let idaccount = 0;
  let search = "";

  function ClickAddVehicle() {
    window.location.href = "/vehicle?idvehicle=0";
  }

  function handleClickSearch() {
    promise = GetData(search);
  }

  async function GetData(search) {
    let query = { idaccount: idaccount, search: search };
    const res = await FData.get("/api/vehicles", query, {
      "Content-Type": "application/json",
    });

    /*
    let searchURL = new URLSearchParams(obj);
    let url = "/api/vehicles?" + searchURL.toString();
    console.log(idaccount, search, url);
    const res = await fetch(url, {
      method: "GET",
      //body: JSON.stringify({ idaccount: idaccount, search: search }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    */

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("No se pudo cargar la información");
    }
  }

  onMount(async () => {
    let AppLS = new APPLocalStorage();
    idaccount = AppLS.getUser().idaccount;
  });
</script>

<style>
  .root {
    padding: 0.5em;
  }
  .input_search {
    width: 7em;
  }
</style>

<Menu {segment} />

<nav class="is-mobile level root">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        <b>VEHICULOS</b>
      </p>
    </div>

  </div>

  <!-- Right side -->
  <div class="level-right">

    <p class="level-item" on:click={ClickAddVehicle}>

      <a class="icon" href="/vehicle?idvehicle=0">
        <i class="fas fa-car fa-lg " />
      </a>

    </p>

    <p class="level-item">
      <span class="field has-addons">
        <p class="control">
          <input
            class="input is-small input_search"
            type="text"
            placeholder="Buscar"
            bind:value={search} />
        </p>
        <p class="control">
          <button class="button is-small" on:click={handleClickSearch}>
            <i class="fas fa-search" />
          </button>
        </p>
      </span>

    </p>

  </div>

</nav>

<div class="columns is-multiline is-mobile root">
  {#await promise}
    <p>...waiting</p>
  {:then datas}
    {#each datas as { name_vehicle, name, idcontact, flname, mark_label, license_plate, year, idvehicle }, i}
      <div
        class="column is-half-mobile is-one-third-tablet is-one-quarter-fullhd
        is-one-quarter-widescreen is-one-quarter-desktop">

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{name_vehicle.toUpperCase()}</p>
            <span class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-car" />
              </span>
            </span>
          </header>
          <div class="card-content">

            <div class="columns is-multiline is-mobile">

              <div
                class="column is-half-tablet is-half-mobile is-half-fullhd
                is-half-widescreen is-half-desktop">
                <div class="field">
                  <label class="label is-small">Marca</label>
                  <div class="control is-small">
                    <input
                      type="text"
                      class="input is-small"
                      value={mark_label}
                      readonly />
                  </div>
                </div>
              </div>

              <div
                class="column is-half-tablet is-half-mobile is-half-fullhd
                is-half-widescreen is-half-desktop">
                <div class="field">
                  <label class="label is-small">Año</label>
                  <div class="control is-small">
                    <input
                      type="text"
                      class="input is-small"
                      value={year}
                      readonly />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <footer class="card-footer">
            <a href="/#" class="card-footer-item">
              <span class="icon">
                <i class="fas fa-check" />
              </span>
              Seleccionar
            </a>
            <a href="/vehicle?idvehicle={idvehicle}" class="card-footer-item">
              Editar
            </a>
            <a href="/#" class="card-footer-item">Eliminar</a>

          </footer>
        </div>

      </div>

      <!-- <User {...{ login, url }} /> -->
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

</div>
