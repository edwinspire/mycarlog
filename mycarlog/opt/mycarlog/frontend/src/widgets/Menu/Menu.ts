import { create, w, v } from "@dojo/framework/core/vdom";
import Link from "@dojo/framework/routing/ActiveLink";
import Icon from "@dojo/widgets/icon";
import Header from "@dojo/widgets/header";
import SlidePane from "@dojo/widgets/slide-pane";
import icache from "@dojo/framework/core/middleware/icache";
import * as css from "./Menu.m.css";

const factory = create({ icache });

export default factory(function Menu({ middleware: { icache } }) {
  const open_menu = icache.getOrSet("open", false);

  return v("div", {}, [
    w(
      SlidePane,
      {
        title: "Menu",
        align: "right",
        underlay: true,
        open: open_menu,
        onRequestClose: () => {
          icache.set("open", false);
        },
      },
      [
        v("div", {}, [
          v("div", { classes: [css.link_container] }, [
            w(
              Link,
              {
                to: "home",
                classes: [css.link],
                activeClasses: [css.selected],
              },
              ["Home"]
            ),
          ]),
          v("div", { classes: [css.link_container] }, [
            w(
              Link,
              {
                to: "contacts",
                classes: [css.link],
                activeClasses: [css.selected],
              },
              ["CONTACTOS"]
            ),
          ]),
          v("div", { classes: [css.link_container] }, [
            w(
              Link,
              {
                to: "vehicle_cards",
                classes: [css.link],
                activeClasses: [css.selected],
              },
              ["VEHICULOS"]
            ),
          ]),
          v("div", { classes: [css.link_container] }, [
            w(
              Link,
              {
                to: "fuelling",
                classes: [css.link],
                activeClasses: [css.selected],
              },
              ["ABASTECIMIENTO"]
            ),
          ]),
          v("div", { classes: [css.link_container] }, [
            w(
              Link,
              {
                to: "login",
                classes: [css.link],
                activeClasses: [css.selected],
              },
              ["SALIR"]
            ),
          ]),
        ]),
      ]
    ),
    w(Header, {}, [
      {
        title: "My Car Log!",
        trailing: v(
          "span",
          {
            onclick: () => {
              icache.set("open", true);
            },
          },
          [w(Icon, { type: "barsIcon" })]
        ),
        actions: v("virtual", [
          v('i', {classes: ['fas fa-gas-pump']}),
          v('i', {classes: ['fas fa-tools']})
        ]),
      },
    ]),
  ]);
});
