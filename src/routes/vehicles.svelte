<script>
  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte";
  import ToolBar from "../components/ToolBar.svelte";

  import { IdAccount, APPLocalStorage } from "../components/Stores.js";

  export let segment;
  let promise = Promise.resolve([]);
  let idaccount = 0;
  let search = "";

  function ClickAddContact() {
    window.location.href = "/vehicle?idvehicle=" + idvehicle;
  }

  function handleClickSearch() {
    promise = GetData(search);
  }

  async function GetData(search) {
    console.log(idaccount, search);
    const res = await fetch("/api/vehicles", {
      method: "POST",
      body: JSON.stringify({ idaccount: idaccount, search: search }),
      headers: {
        "Content-Type": "application/json",
      },
    });

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
</style>

<Menu {segment} />
<ToolBar Search="true">
  <span slot="Title">VEHICULOS</span>
  <span slot="Rigth3" on:click={ClickAddContact}>
    <a href="/vehicle?idvehicle=0">
      <i class="fas fa-car fa-lg icon"/> Agregar
    </a>
  </span>
  <span slot="Rigth5">
    <div class="field has-addons">
      <p class="control">
        <input
          class="input is-small"
          type="text"
          placeholder="Buscar"
          bind:value={search} />
      </p>
      <p class="control">
        <button class="button is-small" on:click={handleClickSearch}>
          <i class="fas fa-search" />
        </button>
      </p>
    </div>
  </span>
</ToolBar>

<div class="columns is-multiline is-mobile root">
  {#await promise}
    <p>...waiting</p>
  {:then datas}
    {#each datas as {name_vehicle, name, idcontact, flname, mark_label, license_plate, year, idvehicle}, i}
      <div class="column is-one-quarter">

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {name_vehicle.toUpperCase()}
            </p>
            <span class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-car"></i>
              </span>
            </span>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns">

                <div class="column" />
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

                <div class="column" />
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
            <a href="/#" class="card-footer-item"><span class="icon"><i class="fas fa-check"></i></span> Seleccionar</a>
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
