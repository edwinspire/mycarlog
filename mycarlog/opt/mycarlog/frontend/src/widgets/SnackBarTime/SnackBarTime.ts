import { w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import SnackBar from "@dojo/widgets/snackbar";
import { diffProperty } from "@dojo/framework/core/decorators/diffProperty";
import { auto } from "@dojo/framework/core/diff";

export interface SnackBarTimeProperties {
  message?: string;
  type?: "error" | "success" | undefined;
}

export default class SnackBarTime extends WidgetBase<SnackBarTimeProperties> {
  private open = false;
  //private message = "Hola mundo";

  constructor() {
    super();
    diffProperty("message", auto, this.diffFooReaction)(this);
    console.log("Se ha creado");
  }

  diffFooReaction(previousProperty: any, newProperty: any) {
    //this.message = newProperty.value;
    console.log(previousProperty, newProperty);
    if (newProperty.message.length > 0) {
      this.show();
    }
  }

  private show() {
    //this.message = message;
    this.open = true;
    this.invalidate();
    setTimeout(() => {
      this.open = false;
      this.invalidate();
    }, 5000);
  }

  protected render() {
    return w(SnackBar, { open: this.open, type: this.properties.type }, [
      { message: this.properties.message },
    ]);
  }
}
