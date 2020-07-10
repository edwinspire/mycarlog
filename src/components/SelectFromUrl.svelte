<script>
  export let url;
  export let selected;

  let promise = fetchData(url);

  async function fetchData() {
    console.log(url, selected);

    const res = await fetch(url, {
      method: "GET",
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
</script>

<div class="field">
  <div class="control">
    <div class="select is-small">
      <select bind:value={selected}>

        {#await promise}
          <option disabled>Cargando...</option>
        {:then datas}
          {#each datas as { label, value, disabled }, i}
            {#if {value}.toString().localeCompare({selected}.toString())}
              <option {disabled} {value} selected="selected">{label}</option>
            {:else}
              <option {disabled} {value}>{label}</option>
            {/if}
          {/each}
        {:catch error}
          <option disabled>Error...</option>
        {/await}

      </select>
    </div>
  </div>
</div>
