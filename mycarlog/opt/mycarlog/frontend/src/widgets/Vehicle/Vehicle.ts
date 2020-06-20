import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "../Vehicle/Vehicle.m.css";
import Textarea from "../TextArea/TextArea";
import Select from "../SelectRemoteSource/SelectRemoteSource";
import watch from "@dojo/framework/core/decorators/watch";
import Menu from ".././Menu/Menu";
import Input from ".././Input/Input";
import ToolBar from "../../widgets/ToolBar/ToolBar";
import SnackBarT from "../../widgets/SnackBarTime/SnackBarTime";

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
    model: "",
    color: "0",
    idfueltype: "0",
    idunit_measure_fuel_tank: "0",
    note: "",
  };

  private Message = "";
  private MessageType = undefined;

  private SnackBar(message: string, type?: any) {
    this.MessageType = type;
    this.Message = message;
  }

  private async Save() {
    console.log(this.Params);
    if (this.Params.idaccount && this.Params.idaccount > 0) {
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
              this.SnackBar("Guardado", "success");
              setTimeout(() => {
                window.location.href =
                  "/vehicle_cards?idvehicle=" +
                  data.idvehicle +
                  "&idaccount=" +
                  this.Params.idaccount; 
              }, 2000);
            } else {
              this.SnackBar("No se pudo guardar", "error");
            }
          } else if (resp.status == 401) {
            window.location.href = "/#login";
          } else {
            this.SnackBar("No se pudo guardar " + resp.status, "error");
          }
        } else {
          this.SnackBar("Complete los campos que son requeridos", "error");
        }
      } else {
        this.SnackBar("Debe seleccionar un Propietario", "error");
      }
    } else {
      this.SnackBar("No se encuentra una cuenta válida", "error");
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
      w(SnackBarT, { message: this.Message, type: this.MessageType }),
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
            model: "",
            color: "",
            idfueltype: "0",
            idunit_measure_fuel_tank: "0",
            note: "",
          };
        },
      }),
      v("div", { classes: [] }, [
        v("div", { classes: ["columns is-mobile", css.spacing] }, [
          v("div", { classes: ["column"] }, [
            w(Select, {
              label: "Propietario",
              url: "/toselect/contacts",
              onValue: (value) => {
                console.log("onSelect", value);
                this.Params.idcontact = value;
              },
            }),
          ]),
          v("div", { classes: ["column"] }, [
            w(Input, {
              label: "Placa",
              onValue: (d) => {
                this.Params.license_plate = d as string;
                this.invalidate();
              },
            }),
          ]),
        ]),
        v("div", { classes: ["columns is-mobile", css.spacing] }, [
          v("div", { classes: ["column"] }, [
            w(Select, {
              label: "Marca",
              value: this.Params.idmark,
              url: "/toselect/marks",
              onValue: (value) => {
                console.log("onSelect", value);
                this.Params.idmark = value;
              },
            }),
          ]),
          v("div", { classes: ["column"] }, [
            w(
              Input,
              {
                label: "Modelo",
                value: this.Params.model,
                onValue: (value) => {
                  this.Params.model = value;
                },
              },
              []
            ),
          ]),
        ]),
        v("div", { classes: ["columns is-mobile", css.spacing] }, [
          v("div", { classes: ["column"] }, [
            w(Input, {
              label: "Año",
              type: "number",
              value: this.Params.year as any,
              onValue: (v) => {
                this.Params.year = v as string;
                this.invalidate();
              },
            }),
          ]),
          v("div", { classes: ["column"] }, [
            w(Input, {
              label: "VIN",
              value: this.Params.vin as any,
              onValue: (v) => {
                this.Params.vin = v as string;
                this.invalidate();
              },
            }),
          ]),
        ]),
        v("div", { classes: ["columns is-mobile", css.spacing] }, [
          v("div", { classes: ["column"] }, [
            w(Input, {
              label: "Color",
              type: "color",
              value: this.Params.color,
              onValue: (value) => {
                this.Params.color = value;
              },
            }),
          ]),
          v("div", { classes: ["column"] }, [
            w(Select, {
              label: "Tipo de combustible",
              url: "/toselect/fueltypes",
              value: this.Params.idfueltype,
              onValue: (value) => {
                console.log("onSelect", value);
                this.Params.idfueltype = value;
              },
            }),
          ]),
        ]),

        v("div", { classes: ["columns is-mobile", css.spacing] }, [
          v("div", { classes: ["column"] }, [
            w(Input, {
              label: "Capacidad Tanque",
              type: "number",
              value: this.Params.fuel_tank_capacity as any,
              onValue: (v) => {
                this.Params.fuel_tank_capacity = v as string;

                console.log(this.Params.fuel_tank_capacity);

                this.invalidate();
              },
            }),
          ]),
          v("div", { classes: ["column"] }, [
            w(
              Select,
              {
                label: "Unidad de medida del tanque",
                url: "/toselect/unit_measure_fuel_tanks",
                value: this.Params.idunit_measure_fuel_tank,
                onValue: (value) => {
                  console.log("onSelect", value);
                  this.Params.idunit_measure_fuel_tank = value;
                },
              },
              []
            ),
          ]),
        ]),
        /*
        v("div", { classes: ["columns is-mobile", css.spacing] }, [
          v("div", { classes: ["column"] }, []),
          v("div", { classes: ["column"] }, []),
        ]),

        v("div", { classes: ["columns is-mobile", css.spacing] }, [
          v("div", { classes: ["column"] }, []),
          v("div", { classes: ["column"] }, []),
        ]),
*/
        v("div", { classes: [css.spacing] }, [
          w(Textarea, {
            label: "Notas",
            rows: 5,
            value: this.Params.note,
            onValue: (value: string) => {
              this.Params.note = value;
              this.invalidate();
            },
          }),
        ]),
      ]),
    ]);
  }
}
