import renderer, { w } from "@dojo/framework/core/vdom";
import Registry from "@dojo/framework/core/Registry";
import { registerRouterInjector } from "@dojo/framework/routing/RouterInjector";
import "@dojo/themes/dojo/index.css";
import routes from "./routes";
import App from "./App";
import push from "./push-notifications";
//import GlobalComunicator from "./widgets/GlobalComunicator";
import { Store } from "@dojo/framework/stores/Store";
import { add } from "@dojo/framework/stores/state/operations";

const NoSleep = require("nosleep.js");
import "@fortawesome/fontawesome-free/css/all.css";

export interface StateStore {
  root: {
    user: {
      fullname: string;
      idaccount: number;
      iduser: number;
      message: string;
      preferences: {
        last_vehicle_selected: { idvehicle: number; name: string; vin: string; mark_label: string; licence_plate: string;};
      };
      token: string;
      username: string;
      rowkey: string;
    };
  };
}

declare global {
  interface Window {
    GlobalStore: Store<StateStore>;
  }
}

window.GlobalStore = new Store<StateStore>();
/*
window.GlobalStore.on("invalidate", (e) => {
  localStorage.setItem(
    "mycarlog",
    JSON.stringify(window.GlobalStore.get(window.GlobalStore.path("root")))
  );
  console.log("El store Global ha cambiado", e);
});
*/

window.GlobalStore.onChange(
  window.GlobalStore.path("root", "user", "preferences"),
  async () => {
    console.log("Las preferencias han cambiado");

    let user_preferences = window.GlobalStore.get(
      window.GlobalStore.path("root", "user")
    );

    let f = await fetch("/preferences_u", {
      method: "POST",
      body: JSON.stringify(user_preferences),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await f.json();
    console.log(data);
    if (data.rowkey) {
      const { path, apply } = window.GlobalStore;
      apply([add(path("root", "user", "rowkey"), data.rowkey)], false);
      localStorage.setItem(
        "mycarlog",
        JSON.stringify(window.GlobalStore.get(window.GlobalStore.path("root")))
      );
    }
  }
);

new push(); // Registra para recibir notificaciones push

//let gcom = new GlobalComunicator();
//gcom.connect();
//gcom.storeTest();
//gcom.storeTest();

const noSleep = new NoSleep();
noSleep.enable();

const registry = new Registry();
registerRouterInjector(routes, registry);

const r = renderer(() => w(App, {}));
r.mount({ registry });
