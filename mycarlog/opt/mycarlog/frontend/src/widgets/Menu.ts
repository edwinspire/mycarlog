import { create, w } from "@dojo/framework/core/vdom";
import Link from "@dojo/framework/routing/ActiveLink";
import Toolbar from "@dojo/widgets/toolbar";
import * as css from "./styles/Menu.m.css";
import Icon from "./Icon/Icon";

const factory = create();

export default factory(function Menu() {
  var Title =
    window.GlobalStore.get(
      window.GlobalStore.path(
        "root",
        "user",
        "preferences",
        "last_vehicle_selected",
        "label"
      )
    ) || "May Car Log";

  window.GlobalStore.onChange(
    window.GlobalStore.path(
      "root",
      "user",
      "preferences",
      "last_vehicle_selected",
      "label"
    ),
    () => {
      Title = window.GlobalStore.get(
        window.GlobalStore.path(
          "root",
          "user",
          "preferences",
          "last_vehicle_selected",
          "label"
        )
      );
      console.log("El Título ha cambiado", Title);
    }
  );

  let m = [
    w(
      Link,
      {
        to: "home",
        classes: [css.link],
        activeClasses: [css.selected],
      },
      [w(Icon, { label: "HOME", classes: ["fas", "fa-home"], ShowLabel: true })]
    ),
    w(
      Link,
      {
        to: "contacts",
        classes: [css.link],
        activeClasses: [css.selected],
      },
      [
        w(Icon, {
          label: "CONTACTOS",
          classes: ["fas", "fa-users"],
          ShowLabel: true,
        }),
      ]
    ),
    w(
      Link,
      {
        to: "vehicles",
        classes: [css.link],
        activeClasses: [css.selected],
      },
      [
        w(Icon, {
          label: "VEHÍCULOS",
          classes: ["fas", "fa-car-side"],
          ShowLabel: true,
        }),
      ]
    ),
    w(
      Link,
      {
        to: "vehicle_cards",
        classes: [css.link],
        activeClasses: [css.selected],
      },
      [
        w(Icon, {
          label: "Mis Vehiculos",
          classes: ["fas", "fa-gas-pump"],
          ShowLabel: true,
        }),
      ]
    ),
    w(
      Link,
      {
        to: "fueling",
        classes: [css.link],
        activeClasses: [css.selected],
      },
      [
        w(Icon, {
          label: "ABASTECIMIENTO",
          classes: ["fas", "fa-gas-pump"],
          ShowLabel: true,
        }),
      ]
    ),
    w(
      Link,
      {
        to: "login",
        classes: [css.link],
        activeClasses: [css.selected],
      },
      [
        w(Icon, {
          label: "SALIR",
          classes: ["fas", "fa-sign-out-alt"],
          ShowLabel: true,
        }),
      ]
    ),
  ];
  return w(Toolbar, { heading: Title, collapseWidth: 500 }, m);
});
