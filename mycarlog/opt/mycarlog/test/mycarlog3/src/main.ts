import renderer, { w } from "@dojo/framework/core/vdom";
import Registry from "@dojo/framework/core/Registry";
import { registerRouterInjector } from "@dojo/framework/routing/RouterInjector";
import { Store } from "@dojo/framework/stores/Store";
import { add } from "@dojo/framework/stores/state/operations";
import "@fortawesome/fontawesome-free/css/all.css";

import routes from "./routes";
import App from "./App";

export interface StateStore {
  root: {
    notifications: {
      message: string;
      type: "error" | "success" | undefined;
    };
    user: {
      fullname: string;
      idaccount: number;
      iduser: number;
      message: string;
      preferences: {
        last_vehicle_selected: {
          idvehicle: number;
          name: string;
          vin: string;
          mark_label: string;
          licence_plate: string;
        };
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

const registry = new Registry();
registerRouterInjector(routes, registry);

const r = renderer(() => w(App, {}));
r.mount({ registry });
