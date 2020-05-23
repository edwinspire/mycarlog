import Evented from "@dojo/framework/core/Evented";
import { Store } from "@dojo/framework/stores/Store";
import { add } from "@dojo/framework/stores/state/operations";

export interface State {
  auth: {
    token: string;
  };
  users: {
    current: string;
    list: string[];
  };
}

export default class PathStore extends Evented {
  private store = new Store<State>();
  private paths: any[] = [];

  constructor() {
    super();


  }


  set(name: string, value: any) {
    const { apply } = this.store;
    this.paths.forEach((path) => {
      if(path.path == name){
        apply([add(path, value)], true);        
      }
    });
  }


  save() {
    localStorage.setItem("mycarlog", JSON.stringify(this.get("root")));
  }

  get(path: string) {
    //    return this.store.get(this.store.path(path));
  }

  remove(path: string) {
    localStorage.removeItem(path);
  }

  clear(path: string) {
    localStorage.clear();
  }
}
