import Evented from "@dojo/framework/core/Evented";
//import WidgetBase from "@dojo/framework/core/WidgetBase";

export default class PathStore extends Evented {
  constructor() {
    super();
    console.log("LocalStore");
  }

  set(path: string, value: any) {
    localStorage.setItem(path, JSON.stringify(value));
  }

  get(path: string) {
    let v = localStorage.getItem(path) as any;
    //this.invalidate();
    return JSON.parse(v);
  }

  remove(path: string) {
    localStorage.removeItem(path);
  }

  clear(path: string) {
    localStorage.clear();
  }

  link(val: any){

  }
  
}
