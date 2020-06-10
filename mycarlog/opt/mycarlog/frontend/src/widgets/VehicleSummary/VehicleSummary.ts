import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import Link from "@dojo/framework/routing/ActiveLink";
import TextInput from "@dojo/widgets/text-input";
//import Textarea from "@dojo/widgets/text-area";
//import SBar from "@dojo/widgets/snackbar";
import watch from "@dojo/framework/core/decorators/watch";
import ToolBar from ".././ToolBar/ToolBar";
//import Icon from "../Icon/Icon";
//import ToolBar from "@dojo/widgets/toolbar";

export interface VehicleSummaryProperties {
  idvehicle: number;
}

export default class VehicleSummary extends WidgetBase<
  VehicleSummaryProperties
> {
  @watch() private Params = {
    idaccount: 0,
    account: "",
    date_start: "",
    date_end: "",
    idvehicle: 0,
    license_plate: "",
    year: "",
    color: "",
    fuel_tank_capacity: "",
    vin: "",
    name: "",
    idmark: "",
    mark_label: "",
    idmodel: "",
    model_label: "",
    idcontact: "",
    firstname: "",
    lastname: "",
    identification: "",
    birthday: "",
    lfname: "",
    idcontacttype: "",
    contacttype_label: "",
    idgender: "",
    gender_label: "",
    idfueltype: "",
    fueltype_label: "",
    idunit_measure_fuel_tank: "",
    unit_measure_fuel_tank_label: "",
  };

  // @watch() private _openSnack = false;
  // private _MsgSnackBar = "-";

  private SnackBar(msg: string) {
    console.log("SnackBar " + msg);
    // this._openSnack = true;
    // this._MsgSnackBar = msg;
    // this.invalidate();
    // setTimeout(() => {
    //   this._openSnack = false;
    //   this.invalidate();
    // }, 4000);
  }

  async onAttach() {
    this.Params.idvehicle = this.properties.idvehicle;
    console.log(this.properties.idvehicle);

    let idaccount = window.GlobalStore.get(
      window.GlobalStore.path("root", "user", "idaccount")
    );
    this.Params.idaccount = idaccount;

    if (this.properties.idvehicle > 0) {
      var url = "/vehicle_summary";

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          idaccount: this.Params.idaccount,
          idvehicle: this.Params.idvehicle,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      console.log(data);
      if (data.length > 0) {
        this.Params = data[0];
        this.invalidate();
      } else {
        this.SnackBar("No se ha encontrado datos");
      }
      //console.log(data);
    } else {
      this.SnackBar("Debe seleccionar un vehículo");
      window.location.href = "/#vehicle_cards";
    }
  }


  protected render() {
    return v("div", {}, [
      w(ToolBar, { title: this.Params.license_plate, customActions: [
        w(
          Link,
          {
            to: "home",
            activeClasses: []
          },
          ["PRUEBA"]
        )
      ] }, [
        
      ]),
      v("div", { classes: [] }, [
        v("div", { classes: [] }, [
          w(
            TextInput,
            {
              type: "text",
              value: this.Params.lastname + " " + this.Params.firstname,
              readOnly: true,
            },
            [{ label: "Propietario" }]
          ),
        ]),
        v("div", { classes: [] }, [
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                type: "text",

                //                disabled: false,
                readOnly: true,
                //              required: true,
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
            w(
              TextInput,
              {
                value: this.Params.mark_label,
                readOnly: true,
              },
              [{ label: "Marca" }]
            ),
          ]),
        ]),
        v("div", {}, [
          v("div", {}, [
            w(
              TextInput,
              {
                type: "number",

                //disabled: false,
                readOnly: true,
                value: this.Params.year as any,
              },
              [{ label: "Año" }]
            ),
          ]),
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                type: "text",

                //disabled: false,
                readOnly: true,
                value: this.Params.vin as any,
              },
              [{ label: "VIN" }]
            ),
          ]),
        ]),
        v("div", {}, [
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                //type: "color",
                readOnly: true,
                value: this.Params.color,
              },
              [{ label: "Color" }]
            ),
          ]),
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                value: this.Params.fueltype_label,
                readOnly: true,
              },
              [{ label: "Tipo de combustible" }]
            ),
          ]),
        ]),
        v("div", {}, [
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                //                key: "t6",
                type: "text",

                //                disabled: false,
                readOnly: true,
                value:
                  (this.Params.fuel_tank_capacity as any) +
                  " " +
                  this.Params.unit_measure_fuel_tank_label,
              },
              [{ label: "Capacidad del tanque" }]
            ),
          ]),
          v("div", { classes: [] }, [
            w(
              TextInput,
              {
                readOnly: true,
                value: "this.Params.unit_measure_fuel_tank_label",
              },
              [{ label: "Unidad de medida del tanque" }]
            ),
          ]),
        ]),
      ]),
    ]);
  }
}
