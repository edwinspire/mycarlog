import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as cssProfile from "../styles/Profile.m.css";
import TextInput from "@dojo/widgets/text-input";
//import Textarea from "@dojo/widgets/text-area";
import SBar from "@dojo/widgets/snackbar";
import watch from "@dojo/framework/core/decorators/watch";
import Icon from "../Icon/Icon";
import ToolBar from "@dojo/widgets/toolbar";

export interface VehicleSummaryProperties {
  idvehicle: string;
}

export default class VehicleSummary extends WidgetBase<
  VehicleSummaryProperties
> {
  @watch() private Params = {
    idaccount: localStorage.getItem("idaccount"),
    account: "",
    date_start: "",
    date_end: "",
    idvehicle: "",
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

  @watch() private _openSnack = false;
  private _MsgSnackBar = "-";

  private SnackBar(msg: string) {
    console.log("SnackBar " + msg);
    this._openSnack = true;
    this._MsgSnackBar = msg;
    this.invalidate();
    setTimeout(() => {
      this._openSnack = false;
      this.invalidate();
    }, 4000);
  }

  async onAttach() {
    console.log(this.properties.idvehicle);

    if (this.properties.idvehicle) {
      var url = "/vehicle_summary";

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.Params),
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
    }
  }

  protected render() {
    return v("div", {}, [
      w(ToolBar, { heading: "VEHÍCULO", collapseWidth: 150 }, [
        w(Icon, {
          label: "NUEVO",
          classes: ["fas", "fa-car"],
          ShowLabel: true,
          onClick: (e) => {
           
          },
        }),
        v("span", {}, ["|"]),
      ]),
      v("div", { classes: [cssProfile.container] }, [
        v("div", { classes: [cssProfile.container_field_reset] }, [
          w(
            TextInput,
            {
              type: "text",
              label: "Propietario",
              value: this.Params.idcontact,
              readOnly: false,
            },
            []
          ),
        ]),
        v("div", { classes: [cssProfile.row] }, [
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                type: "text",
                label: "Placa",
                disabled: false,
                readOnly: false,
                required: true,
                placeholder: "Placa",
                value: this.Params.license_plate,
                onChange: (d) => {
                  this.Params.license_plate = d as string;
                  this.invalidate();
                },
              },
              []
            ),
          ]),
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                label: "Marca",
                value: this.Params.idmark,
                readOnly: false,
              },
              []
            ),
          ]),
        ]),
        v("div", { classes: cssProfile.row }, [
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                type: "number",
                label: "Año",
                disabled: false,
                readOnly: false,
                value: this.Params.year as any,
                onChange: (v) => {
                  this.Params.year = v as string;
                  this.invalidate();
                },
              },
              []
            ),
          ]),
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                type: "text",
                label: "VIN",
                disabled: false,
                readOnly: false,
                value: this.Params.vin as any,
                onChange: (v) => {
                  this.Params.vin = v as string;
                  this.invalidate();
                },
              },
              []
            ),
          ]),
        ]),
        v("div", { classes: cssProfile.row }, [
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                label: "Color",
                //type: "color",
                readOnly: true,
                value: this.Params.color,
              },
              []
            ),
          ]),
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                label: "Tipo de combustible",
                value: this.Params.fueltype_label,
                readOnly: true,
              },
              []
            ),
          ]),
        ]),
        v("div", { classes: cssProfile.row }, [
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                key: "t6",
                type: "number",
                label: "Capacidad del tanque",
                disabled: false,
                readOnly: false,
                value: this.Params.fuel_tank_capacity as any,
                onChange: (v) => {
                  this.Params.fuel_tank_capacity = v as string;
                  this.invalidate();
                },
              },
              []
            ),
          ]),
          v("div", { classes: [cssProfile.column2] }, [
            w(
              TextInput,
              {
                label: "Unidad de medida del tanque",
                readOnly: true,
                value: this.Params.unit_measure_fuel_tank_label,
              },
              []
            ),
          ]),
        ]),
        w(SBar, {
          open: this._openSnack,
          leading: false,
          type: "error",
          messageRenderer: () => this._MsgSnackBar,
        }),
      ]),
    ]);
  }
}
