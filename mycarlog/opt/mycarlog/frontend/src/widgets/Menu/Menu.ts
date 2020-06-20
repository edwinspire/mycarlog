import { create, w, v, invalidator } from "@dojo/framework/core/vdom";
import Link from "@dojo/framework/routing/ActiveLink";
import Tag from "./../Tag/Tag";
//import Header from "@dojo/widgets/header";
//import SlidePane from "@dojo/widgets/slide-pane";
import icache from "@dojo/framework/core/middleware/icache";
import * as css from "./Menu.m.css";

const factory = create({ icache });

export default factory(function Menu({ middleware: { icache } }) {

  var idBurger = "MenuBurger" + (Math.floor(Math.random() * 100000) + 1);
  var idMenu = "MenuBurger" + (Math.floor(Math.random() * 100000) + 1);

  function ClickMenu(e: any) {
    console.log(e.target);

    var M = document.getElementById(idMenu);
    var B = document.getElementById(idBurger);
    if (M && B) {
      M.classList.toggle("is-active");
      B.classList.toggle("is-active");
    }

    invalidator();
  }

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
          w(Tag, {
            left: { label: "123" },
            rigth: {
              label: v("i", { classes: ["fas fa-bell"] }),
              class: "is-primary",
            },
          }),
        ]),
        v("a", { classes: ["navbar-item"] }, [
          w(Tag, {
            left: { label: "123" },
            rigth: {
              label: v("i", { classes: ["fas fa-bell"] }),
              class: "is-primary",
            },
          }),
        ]),

        v(
          "div",
          {
            role: "button",
            id: idBurger,
            classes: ["navbar-burger burger"],
            "aria-label": "menu",
            "aria-expanded": "false",
            //      "data-target": "navbarBasicExample",
            onclick: ClickMenu,
          },
          [
            v("span", { "aria-hidden": "true" }),
            v("span", { "aria-hidden": "true" }),
            v("span", { "aria-hidden": "true" }),
          ]
        ),
      ]),

      v("div", { id: idMenu, classes: ["navbar-menu"] }, [
        v("div", { classes: ["navbar-end"] }, [
          v("div", { classes: ["navbar-item"] }, [
            w(
              Link,
              {
                to: "home",
                classes: [],
                activeClasses: [css.selected],
              },
              ["HOME"]
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
                to: "fueling",
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
