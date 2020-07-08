<script>
  import SelectFromUrl from "../components/SelectFromUrl.svelte";

  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte";
  import ToolBar from "../components/ToolBar.svelte";


  import { IdAccount, APPLocalStorage } from "../components/Stores.js";

  export let segment;
  let promise = Promise.resolve([]);
  let DataContact = {};

  function ClickAddContact() {
    console.log(DataContact);
    DataContact.idcontact = 0;
    DataContact.firstname = '';
    DataContact.lastname = '';
    DataContact.identification = '';
    DataContact.birthday = Date.now;
    DataContact.notes = '';
    DataContact.rowkey = 0;
  }

  async function Save() {
    if (
      DataContact.firstname.length > 0 &&
      DataContact.lastname.length > 0 &&
      DataContact.identification.length
    ) {
      console.log(DataContact);

      let resp = await fetch("/api/contact_cu", {
        method: "POST",
        body: JSON.stringify(DataContact),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        let data = await resp.json();
        console.log(data);
        if (data.idcontact > 0 && data.rowkey > 0) {
          window.location.href = "/contacts";
        } else {
          alert("Algo salió mal");
        }
      } else {
        alert("Error");
      }
    } else {
      alert("No...");
    }
  }

  async function GetData() {
    if (DataContact.idaccount) {
      let urlOrg = new URL(window.location.href);
      let searchParams = new URLSearchParams(urlOrg.search);

      DataContact.idcontact = searchParams.get("idcontact") || "-3";
      var url =
        "/api/contact_r?idcontact=" +
        DataContact.idcontact +
        "&idaccount=" +
        DataContact.idaccount;

      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (res.status == 200) {
        const data = await res.json();
        console.log(data);
        if (data.length > 0) {
          DataContact = data[0];
        }
      } else if (res.status == 401) {
        window.location.href = "/";
      }
    } else {
      console.log("No consulta", DataContact);
    }
  }

  onMount(async () => {
    let AppLS = new APPLocalStorage();
    DataContact.idaccount = AppLS.getUser().idaccount;
    GetData();
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
  <span slot="Rigth3" on:click={ClickAddContact}>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a >
      <i class="fas fa-user fa-lg icon" />
      NUEVO
    </a>
  </span>
  <span slot="Rigth4" on:click={Save}>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a>
      <i class="fas fa-save fa-lg icon" />
      GUARDAR
    </a>
  </span>
</ToolBar>

<div class="columns is-multiline is-desktop root">

  <form >
    <article class="root">
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Nombre</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  bind:value={DataContact.firstname} />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Apellido</label>
              <div class="control is-small">
                <input
                  placeholder="Placa"
                  type="text"
                  class="input is-small"
                  bind:value={DataContact.lastname} />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Identificación</label>
              <div class="control is-small">
                <input
                  type="text"
                  class="input is-small"
                  bind:value={DataContact.identification} />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Tipo Identificación</label>
              <div class="control is-small">
                <SelectFromUrl
                  url="/api/toselect/identificationtypes"
                  bind:selected={DataContact.ididentificationtype} />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Tipo Contacto</label>
              <div class="control is-small">
                <SelectFromUrl
                  url="/api/toselect/contacttypes"
                  bind:selected={DataContact.idcontacttype} />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Fecha Cumpleaños</label>
              <div class="control is-small">
                <input
                  type="date"
                  class="input is-small"
                  bind:value={DataContact.birthday} />
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="columns is-mobile spacing">
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Género</label>
              <div class="control is-small">
                <SelectFromUrl
                  url="/api/toselect/genders"
                  bind:selected={DataContact.idgender} />
              </div>
            </div>
          </span>
        </div>
        <div class="column">
          <span>
            <div class="field">
              <label class="label is-small">Notas</label>
              <div class="control is-small">
  
                  <textarea class="input is-small" bind:value={DataContact.note}></textarea>
              </div>
            </div>
          </span>
        </div>
      </div>
      
    </article>
  
  </form>

</div>
