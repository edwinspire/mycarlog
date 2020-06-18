import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
//import * as css from "../styles/Vehicle.m.css";
//import * as cssProfile from "../styles/Profile.m.css";
import TextInput from "@dojo/widgets/text-input";
//import Checkbox, { Mode } from "@dojo/widgets/checkbox";
import Textarea from "@dojo/widgets/text-area";
//import SelectFromURL from "./SelectFromURL";
//import SBar from "@dojo/widgets/snackbar";
import watch from "@dojo/framework/core/decorators/watch";
import Menu from ".././Menu/Menu";
import Input from ".././Input/Input";
// import UserPreferences, {
//   UserPreferencesProperties,
// } from ".././UserPreferences/UserPreferences";
import ToolBar from "../../widgets/ToolBar/ToolBar";

export interface VehicleProperties {
  idvehicle?: string;
}

export default class Vehicle extends WidgetBase<VehicleProperties> {
  @watch() private Params = {
    idvehicle: "-1",
    idaccount: 0,
    idcontact: "0",
    rowkey: 0,
    license_plate: "",
    year: "",
    fuel_tank_capacity: "",
    idfuel_tank_capacitytype: "0",
    vin: "",
    idvehicletype: "0",
    idmark: "0",
    idmodel: "0",
    idcolor: "0",
    idfueltype: "0",
    idunit_measure_fuel_tank: "0",
    note: "",
  };

  //@watch() private _openSnack = false;
  //private _MsgSnackBar = "-";

  private SnackBar(msg: string) {
    /* console.log("SnackBar " + msg);
    this._openSnack = true;
    this._MsgSnackBar = msg;
    this.invalidate();
    setTimeout(() => {
      this._openSnack = false;
      this.invalidate();
    }, 4000); */
  }

  private async Save() {
    if (Number(this.Params.idcontact) > 0) {
      if (this.Params.license_plate.length > 0) {
        let resp = await fetch("/vehicle_cu", {
          method: "POST",
          body: JSON.stringify(this.Params),
          headers: { "Content-Type": "application/json" },
        });
        let data = await resp.json();
        if (resp.status == 200) {
          console.log(data);
          if (data.idvehicle > 0) {
            window.location.href =
              "/#vehicles?idvehicle=" +
              data.idvehicle +
              "&idaccount=" +
              this.Params.idaccount;
          } else {
            this.SnackBar("No se pudo guardar");
          }
        } else if (resp.status == 401) {
          window.location.href = "/#login";
        } else {
          this.SnackBar("No se pudo guardar " + resp.status);
        }
      } else {
        this.SnackBar("Complete los campos que son requeridos");
      }
    } else {
      this.SnackBar("Debe seleccionar un Propietario");
    }

    this.invalidate();
  }

  async onAttach() {
    console.log(this.properties.idvehicle);

    this.Params.idaccount = window.GlobalStore.get(
      window.GlobalStore.path("root", "user", "idaccount")
    );

    if (this.properties.idvehicle) {
      var paramsString = window.location.hash.split("?")[1];
      var searchParams = new URLSearchParams(paramsString);
      this.Params.idvehicle = searchParams.get("idvehicle") || "-2";
      var url =
        "/vehicle?idvehicle=" +
        this.Params.idvehicle +
        "&idaccount=" +
        this.Params.idaccount;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      console.log(data);
      if (data.length > 0 && data[0].idaccount && data[0].idvehicle) {
        this.Params = data[0];
        this.invalidate();
      }
      //console.log(data);
    }
  }

  protected render() {
    return v("div", {}, [
      w(Menu, {}),
      w(ToolBar, {
        title: "VEHÍCULO",
        ShowNew: true,
        ShowSave: true,
        onSave: () => {
          this.Save();
        },
        onNew: () => {
          this.Params = {
            idaccount: this.Params.idaccount,
            idvehicle: "-1",
            idcontact: "0",
            rowkey: 0,
            license_plate: "",
            year: "",
            fuel_tank_capacity: "",
            idfuel_tank_capacitytype: "0",
            vin: "",
            idvehicletype: "0",
            idmark: "0",
            idmodel: "0",
            idcolor: "0",
            idfueltype: "0",
            idunit_measure_fuel_tank: "0",
            note: "",
          };
        },
      }),
      v("div", { classes: [] }, [
        v("div", { classes: [] }, [
          /* w(
            SelectFromURL,
            {
              label: "Propietario",
              value: this.Params.idcontact,
              url: "/toselect/contacts",
              onSelect: (label, value, disabled) => {
                console.log("onSelect", label, value, disabled);
                this.Params.idcontact = value;
              },
            },
            []
          ), */
        ]),
v('div', {classes: ['columns is-mobile']}, [
v('div', {classes: ['column']}, [
  w(Input, {label: 'Mi primer input'})
]),
v('div', {classes: ['column']}, [
  w(Input, {label: 'Mi Segundo input'})
]),
v('div', {classes: ['column']}, [
  w(Input, {label: 'Mi tercer input'})
]),
v('div', {classes: ['column']}, [
  w(Input, {label: 'Mi cuerto input'})
]),
v('div', {classes: ['column']}, [
  w(Input, {label: 'Mi quinto input'})
])

]),

        w(Input, {label: 'Mi primer input'}),
        v("div", { classes: [] }, [
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                type: "text",

                disabled: false,
                readOnly: false,
                required: true,
                placeholder: "Placa",
                value: this.Params.license_plate,
                onValue: (d) => {
                  this.Params.license_plate = d as string;
                  this.invalidate();
                },
              },
              [{ label: "Placa" }]
            ),
          ]),
          v("div", { classes: [] }, [
            /* w(
              SelectFromURL,
              {
                label: "Marca",
                value: this.Params.idmark,
                url: "/toselect/marks",
                onSelect: (label, value, disabled) => {
                  console.log("onSelect", label, value, disabled);
                  this.Params.idmark = value;
                },
              },
              []
            ), */
          ]),
        ]),
        /*v('div',{ classes: [css.entrada] }, [
					w(SelectFromURL, {label: 'Modelo', value: this.Params.idmodel, url: '/toselect/models',
						onSelect:(label, value, disabled)=>{
							console.log('onSelect', label, value, disabled);
							this.Params.idfuel_tank_capacitytype = value;	
						}
					}, []),
					]
					),		
					*/
        v("div", { classes: []}, [
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                type: "number",
                
                disabled: false,
                readOnly: false,
                value: this.Params.year as any,
                onValue: (v) => {
                  this.Params.year = v as string;
                  this.invalidate();
                },
              },
              [{label: "Año"}]
            ),
          ]),
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                type: "text",
                
                disabled: false,
                readOnly: false,
                value: this.Params.vin as any,
                onValue: (v) => {
                  this.Params.vin = v as string;
                  this.invalidate();
                },
              },
              [{label: "VIN"}]
            ),
          ]),
        ]),
        v("div", { classes: ''}, [
          v("div", { classes: [] }, [
            /* w(
              SelectFromURL,
              {
                label: "Color",
                url: "/toselect/colors",
                value: this.Params.idcolor,
                onSelect: (label, value, disabled) => {
                  console.log("onSelect", label, value, disabled);
                  this.Params.idcolor = value;
                },
              },
              []
            ), */
          ]),
          v("div", { classes: [] }, [
            /* w(
              SelectFromURL,
              {
                label: "Tipo de combustible",
                url: "/toselect/fueltypes",
                value: this.Params.idfueltype,
                onSelect: (label, value, disabled) => {
                  console.log("onSelect", label, value, disabled);
                  this.Params.idfueltype = value;
                },
              },
              []
            ), */
          ]),
        ]),
        v("div", { classes: ''}, [
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                key: "t6",
                type: "number",
                
                disabled: false,
                readOnly: false,
                value: this.Params.fuel_tank_capacity as any,
                onValue: (v) => {
                  this.Params.fuel_tank_capacity = v as string;
                  this.invalidate();
                },
              },
              [{label: "Capacidad del tanque"}]
            ),
          ]),
          v("div", { classes: [] }, [
            /* w(
              SelectFromURL,
              {
                label: "Unidad de medida del tanque",
                url: "/toselect/unit_measure_fuel_tanks",
                value: this.Params.idunit_measure_fuel_tank,
                onSelect: (label, value, disabled) => {
                  console.log("onSelect", label, value, disabled);
                  this.Params.idunit_measure_fuel_tank = value;
                },
              },
              []
            ), */
          ]),
        ]),
        v("div", { classes: [''] }, [
          w(Textarea, {
            columns: 40,
            rows: 5,
            placeholder: "Notas",
            
            key: "text-area",
            value: this.Params.note,
            onValue: (value: string) => {
              this.Params.note = value;
              this.invalidate();
            },
          }),
        ]),
        /* w(SBar, {
          open: this._openSnack,
          leading: false,
          type: "error",
          messageRenderer: () => this._MsgSnackBar,
        }), */
      ]),
    ]);
  }
}
