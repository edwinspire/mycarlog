import { create, v, w } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import Outlet from "@dojo/framework/routing/Outlet";
import dojo from "@dojo/widgets/theme/dojo";
import Snackbar from "@dojo/widgets/snackbar";
import AccountActivation from "./widgets/AccountActivation/AccountActivation";
import Login from "./widgets/Login/Login";
import Register from "./widgets/Register/Register";
import VehicleCards from "./widgets/VehicleCards/VehicleCards";
import Vehicle from "./widgets/Vehicle/Vehicle";
import Home from "./widgets/Home";
import About from "./widgets/About";
import Profile from "./widgets/Profile";
import icache from "@dojo/framework/core/middleware/icache";

import * as css from "./App.m.css";

const factory = create({ theme, icache });

export default factory(function App({ middleware: { theme, icache } }) {
  if (!theme.get()) {
    theme.set(dojo);
  }

  var message = icache.getOrSet("message", "");
  var type = icache.getOrSet("type", undefined);
  var OpenSnackBar = icache.getOrSet("OpenSnackBar", false);

  window.GlobalStore.onChange(
    window.GlobalStore.path("root", "notifications"),
    () => {
      console.log("Notificación ha cambiado", icache.get('message'));

      let notification = window.GlobalStore.get(
        window.GlobalStore.path("root", "notifications")
      );

	  console.log(notification); 
      icache.set("message", notification.message);
      icache.set("type", notification.type);
	  icache.set("OpenSnackBar", true);
      setTimeout(() => {
        icache.set("OpenSnackBar", false);
      }, 4000);
    }
  );

  return v("div", { classes: [css.root] }, [
    w(Snackbar, { open: OpenSnackBar, type: type }, [{ message: message }]),
//    w(Menu, {}),
    w(Outlet, { id: "main" }, [
      {
        home: w(Home, {}),
		about: w(About, {}),
		login: w(Login, {}),
		register: w(Register, {}),
    account_activation: w(AccountActivation, {}),
    vehicle: w(Vehicle, {}),
		vehicle_cards: w(VehicleCards, {}),
        profile: w(Profile, { username: "Dojo User" }),
      },
    ]),
  ]);
});
