import { create, v, w } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import themeBase from './themes/black/theme';
//import blue from './themes/blue/theme';
//import themeBase from '@dojo/themes/dojo';
//import themeBase from '@dojo/themes/dojo';
import Outlet from '@dojo/framework/routing/Outlet';
import Home from './widgets/Home';
import Dashboard from './widgets/Dashboard';
import About from './widgets/About';
import Vehiculo from './widgets/Vehicle';
import Vehicles from './widgets/Vehicles';
import Fueling from './widgets/fueling/Fueling';
import FuelingLog from './widgets/FuelingLog';
import Contact from './widgets/Contact';
import Contacts from './widgets/Contacts';
import Login from './widgets/login/Login';
import Register from './widgets/register/Register';
import AccountActivation from './widgets/account_activation/account_activation';
import VehicleCards from './widgets/VehicleCards/VehicleCards';
import * as css from './App.m.css';

const factory = create({ theme });

export default factory(function App({ middleware: { theme } }) {
	if (!theme.get()) {
		theme.set(themeBase);
  //                      theme.set(dojo);
//theme.set(blue);
	}

	return v('div', { classes: [css.root] }, [
            v('div', { classes: [css.body] }, [
                  v('div', {classes: [css.wrapper] }, [
                        w(Outlet, { key: 'home', id: 'home', renderer: () => w(Home, {}) }),
                        w(Outlet, { key: 'contact', id: 'contact', renderer: () => w(Contact, {}) }),      
                        w(Outlet, { key: 'contacts', id: 'contacts', renderer: () => w(Contacts, {}) }),   
                        w(Outlet, { key: 'vehicle', id: 'vehicle', renderer: () => w(Vehiculo, {}) }),         
                        w(Outlet, { key: 'vehicles', id: 'vehicles', renderer: () => w(Vehicles, {}) }),         
                        w(Outlet, { key: 'about', id: 'about', renderer: () => w(About, {}) }),
                        w(Outlet, { key: 'dashboard', id: 'dashboard', renderer: () => w(Dashboard, {}) }),
                        w(Outlet, { key: 'login', id: 'login', renderer: () => w(Login, {}) }),
                        w(Outlet, { key: 'register', id: 'register', renderer: () => w(Register, {}) }),
                        w(Outlet, { key: 'fueling', id: 'fueling', renderer: () => w(Fueling, {}) }),
                        w(Outlet, { key: 'account_activation', id: 'account_activation', renderer: () => w(AccountActivation, {}) }),
                        w(Outlet, { key: 'vehicle_cards', id: 'vehicle_cards', renderer: () => w(VehicleCards, {}) }),
                        w(Outlet, { key: 'fuelinglog', id: 'fuelinglog', renderer: () => w(FuelingLog, {}) })
                        ])
                  ])
            ]);
});
