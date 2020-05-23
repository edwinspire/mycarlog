import renderer, { w } from "@dojo/framework/core/vdom";
import Registry from "@dojo/framework/core/Registry";
import { registerRouterInjector } from "@dojo/framework/routing/RouterInjector";
import "@dojo/themes/dojo/index.css";
import routes from "./routes";
import App from "./App";
import push from "./push-notifications";
import GlobalComunicator from "./widgets/GlobalComunicator";
import { Store } from "@dojo/framework/stores/Store";
//import { add } from "@dojo/framework/stores/state/operations";

const NoSleep = require("nosleep.js");
require("@fortawesome/fontawesome-free/css/all.css");

export interface StateStore {
  root: {
    user: {
      default_idvehicle: string;
      default_vehicle: string;
      fullname: string;
      idaccount: number;
      iduser: number;
      login: boolean;
      welcome: string;
      preferences: { last_vehicle: { idvehicle: number; label: string } };
      token: string;
      username: string;
    };
  };
}

declare global {
  interface Window {
    GlobalStore: Store<StateStore>;
  }
}

window.GlobalStore = new Store<StateStore>();
window.GlobalStore.on("invalidate", (e) => {
  localStorage.setItem(
    "mycarlog",
    JSON.stringify(window.GlobalStore.get(window.GlobalStore.path("root")))
  );
  console.log("El store Global ha cambiado", e);
});

new push(); // Registra para recibir notificaciones push

let gcom = new GlobalComunicator();
gcom.connect();
//gcom.storeTest();
//gcom.storeTest();

const noSleep = new NoSleep();
noSleep.enable();

const registry = new Registry();
registerRouterInjector(routes, registry);

const r = renderer(() => w(App, {}));
r.mount({ registry });
