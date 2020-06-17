import { create, w, v, invalidator } from "@dojo/framework/core/vdom";
import Link from "@dojo/framework/routing/ActiveLink";
//import Icon from "@dojo/widgets/icon";
//import Header from "@dojo/widgets/header";
//import SlidePane from "@dojo/widgets/slide-pane";
import icache from "@dojo/framework/core/middleware/icache";
import * as css from "./Menu.m.css";

const factory = create({ icache });

export default factory(function Menu({ middleware: { icache } }) {
  //const open_menu = icache.getOrSet("open", false);
  //const is_active = "is-active";
  //const is_normal = "navbar-burger burger";
  //var menu_class = is_normal;

  //  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  /** 
 <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
 * **/

  return v(
    "nav",
    {
      classes: ["navbar is-dark"],
      role: "navigation",
      "aria-label": "main navigation",
    },
    [
      v("div", { classes: ["navbar-brand"] }, [
        v("a", { classes: ["navbar-item"] }, [v("span", {}, ["MY CAR LOG"])]),

        v("a", { classes: ["navbar-item"] }, [
          v("div", { classes: ["tags has-addons"] }, [
            v("span", { classes: ["tag"] }, ["23400"]),
            v("span", { classes: ["tag is-primary"] }, ["Km"]),
          ]),
        ]),
        v("a", { classes: ["navbar-item"] }, [
          v("div", { classes: ["tags has-addons"] }, [
            v("span", { classes: ["tag"] }, ["3000"]),
            v("span", { classes: ["tag is-danger"] }, [
              v("i", { classes: ["fas fa-bell"] }),
            ]),
          ]),
        ]),

        v(
          "a",
          {
            role: "button",
            classes: ['navbar-burger burger'],
            "aria-label": "menu",
            "aria-expanded": "false",
            "data-target": "navbarBasicExample",
            onclick: (e) => {
              //   alert("Hola");
              //menu_class = is_active;
              
              console.log(e);

              const target = e.target.dataset.target || "";
              var target2 = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              e.target.classList.toggle("is-active");

              if (target2) {
                target2.classList.toggle("is-active");
              }
              invalidator();
              //target.classList.toggle('is-active');
            },
          }, 
          [
            v("span", { "aria-hidden": "true" }),
            v("span", { "aria-hidden": "true" }),
            v("span", { "aria-hidden": "true" }),
          ]
        ),
      ]),

      v("div", { id: "navbarBasicExample", classes: ["navbar-menu"] }, [
        v("div", { classes: ["navbar-end"] }, [
          v("div", { classes: ["navbar-item"] }, [
            w(
              Link,
              {
                to: "home",
                classes: [],
                activeClasses: [css.selected],
              },
              ["Home"]
            ),
          ]),
          v("div", { classes: ["navbar-item"] }, [
            w(
              Link,
              {
                to: "contacts",
                classes: [],
                activeClasses: [css.selected],
              },
              ["CONTACTOS"]
            ),
          ]),
          v("div", { classes: ["navbar-item"] }, [
            w(
              Link,
              {
                to: "vehicle_cards",
                classes: [],
                activeClasses: [css.selected],
              },
              ["VEHICULOS"]
            ),
          ]),
          v("div", { classes: ["navbar-item"] }, [
            w(
              Link,
              {
                to: "fuelling",
                classes: [],
                activeClasses: [css.selected],
              },
              ["ABASTECIMIENTO"]
            ),
          ]),

          v("div", { classes: ["navbar-item"] }, [
            w(
              Link,
              {
                to: "login",
                classes: [],
                activeClasses: [css.selected],
              },
              ["SALIR"]
            ),
          ]),
        ]),
      ]),
    ]
  );
});
