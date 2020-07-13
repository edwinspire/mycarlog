<script>
  //import GlobalS from "../components/GlobalStore.svelte";

  export let segment;
  let idBurger = "MenuBurger" + (Math.floor(Math.random() * 100000) + 1);
  let idMenu = "MenuBurger" + (Math.floor(Math.random() * 100000) + 1);

  function ClickMenu(e) {
    console.log(e.target);

    var M = document.getElementById(idMenu);
    var B = document.getElementById(idBurger);

    console.log(e.target, M, B);

    if (M && B) {
      M.classList.toggle("is-active");
      B.classList.toggle("is-active");
    }
  }
</script>

<style>
  /* mouse over link */
  .menu_links a:hover {
    color: rgb(234, 251, 255);
    background-color: rgb(24, 37, 56);
  }
  .menu_links a:active {
    color: rgb(255, 161, 38);
  }
</style>

<!-- svelte-ignore a11y-missing-attribute -->
<nav class="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <span>MY CAR LOG</span>
    </a>
    <a class="navbar-item">
      <span>
        <div class="tags has-addons">
          <span class="tag">123</span>
          <span class="tag is-info">km</span>
        </div>
      </span>
    </a>
    <a class="navbar-item">
      <span>
        <div class="tags has-addons">
          <span class="tag">0</span>
          <span class="tag is-danger">
            <i class="fas fa-bell" />
          </span>
        </div>
      </span>
    </a>
    <div
      on:click={ClickMenu}
      role="button"
      id={idBurger}
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </div>
  </div>
  <div id={idMenu} class="navbar-menu menu_links">
    <div class="navbar-end">
      <div class="navbar-item">
        <a aria-current={segment === 'home' ? 'page' : undefined} href="home">
          HOME
        </a>
      </div>
      <div class="navbar-item">
        <a href="contacts">CONTACTOS</a>
      </div>
      <div class="navbar-item">
        <a href="vehicles">VEHICULOS</a>
      </div>
      <div class="navbar-item">
        <a href="fueling">ABASTECIMIENTO</a>
      </div>
      <div class="navbar-item">
        <a href="/" aria-current={segment === '/' ? 'page' : undefined}>
          SALIR
        </a>
      </div>
    </div>
  </div>
</nav>

