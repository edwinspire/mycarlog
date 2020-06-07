import Evented from "@dojo/framework/core/Evented";
import SocketIO from "socket.io-client";
//import { Store } from "@dojo/framework/stores/Store";
//import { OperationType } from "@dojo/framework/stores/state/Patch";
//import { Pointer } from "@dojo/framework/stores/state/Pointer";
//import  PathS  from "./modules/PathStore";
//import { registerStoreInjector } from '@dojo/framework/stores/StoreInjector';
//import { load } from "@dojo/framework/stores/middleware/localStorage";

declare global {
  interface Window {
    GlobalSocketIO: SocketIOClient.Socket;
  }
}

export default class GlobalComunicator extends Evented {
  public test = "";
  //private store = new Store();
  private socket = SocketIO.connect("//" + document.location.host);
  //private PStore = new PathS();


  constructor() {
    super();
    //console.log("Global Test", this.PStore);
    //		const registry = registerStoreInjector(this.store);
    //		console.log(registry);
    window.GlobalSocketIO = this.socket;
    //load("my-process", this.store);
    /*
    window.GlobalStoreX = this.store;

    window.GlobalStore.on("invalidate", (e) => {
      console.log("El store ha cambiado", e);
    });

    window.GlobalStore.onChange(
      window.GlobalStore.path("grid", "meta", "page"),
      () => {
        console.log("onChange store");
      }
    );
*/
  }


  connect() {
    window.GlobalSocketIO.on("connection", function (client: any) {
      console.log("Client connected. web component..");
      window.GlobalSocketIO.emit("my other event", { my: "data" });
    });

    window.GlobalSocketIO.on("connect_error", (data: any) => {
      //console.log(data);
      window.GlobalSocketIO.emit("my other event", { my: "data" });
    });

    window.GlobalSocketIO.on("news", (data: any) => {
      //console.log(data);
      window.GlobalSocketIO.emit("my other event", { my: "data" });
    });

    window.GlobalSocketIO.on("gps", (data: any) => {
      console.log(data);
      //window.GlobalSocketIO.emit('my gps', data);
    });

    window.GlobalSocketIO.on("hora", (data: any) => {
      //console.log(data);
      //window.GlobalSocketIO.emit('my other event', { my: 'data' });
    });

    window.GlobalSocketIO.on("postgres", (data: any) => {
      //console.log(data);
      //window.GlobalSocketIO.emit('my other event', { my: 'data' });
    });
  }
}
