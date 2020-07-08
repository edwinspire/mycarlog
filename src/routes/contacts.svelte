<script>
  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte";
  import ToolBar from "../components/ToolBar.svelte";

  import { IdAccount, APPLocalStorage } from "../components/Stores.js";
  import { space } from "svelte/internal";

  export let segment;
  let promise = Promise.resolve([]);
  let idaccount = 0;
  let search = "";

  function ClickAddContact() {
    window.location.href = "/contact?idaccount=" + idaccount;
  }

  function handleClickSearch() {
    promise = GetData(search);
  }

  async function GetData(search) {
    console.log(idaccount, search);
    const res = await fetch("/api/contacts_r", {
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
  <span slot="Title">CONTACTOS</span>
  <span slot="Rigth4" on:click={ClickAddContact}>
    <a href="/#" class="icon">
      <i class="fas fa-user-plus fa-lg" />
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

<div class="columns is-multiline is-desktop root">
  {#await promise}
    <p>...waiting</p>
  {:then datas}
    {#each datas as { idcontact, flname, lastname, lfname, identification, identificationtype_label }, i}
      <div class="column is-one-quarter">

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{lfname.toUpperCase()}</p>
            <span class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-user" />
              </span>
            </span>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns">

                <div class="column" />
                <div class="field">
                  <label class="label is-small">Identificación</label>
                  <div class="control is-small">
                    <input
                      type="text"
                      class="input is-small"
                      value={identification}
                      readonly />
                  </div>
                </div>

                <div class="column" />
                <div class="field">
                  <label class="label is-small">Tipo Identificación</label>
                  <div class="control is-small">
                    <input
                      type="text"
                      class="input is-small"
                      value={identificationtype_label}
                      readonly />
                  </div>
                </div>

              </div>

            </div>
          </div>
          <footer class="card-footer">
            <a href="/contact?idcontact={idcontact}" class="card-footer-item">
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
