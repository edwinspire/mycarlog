import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./Login.m.css";
import SBar from "@dojo/widgets/snackbar";
import watch from "@dojo/framework/core/decorators/watch";
import { add } from "@dojo/framework/stores/state/operations";
//import {StateStore} from "../../main";

export default class Login extends WidgetBase {
  @watch() private _openSnack = false;
  @watch() private _MsgSnackBar = "-";

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

  onAttach() {
    document.cookie = "TOKEN_USER= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    console.log("Borrar");
  }

  protected render() {
    return v("div", { classes: [css.root] }, [
      v("div", { classes: [css.body] }, [
        v("div", { classes: css.wrapper }, [
          v("div", { classes: [css.container] }, [
            v("h1", {}, ["Login"]),
            v(
              "form",
              {
                classes: css.form,
                action: "/login",
                method: "post",
                onsubmit: (e: Event) => {
                  if (e.target) {
                    let d = e.target as HTMLFormElement;
                    let inputs = d.getElementsByTagName("input");
                    let i = 0;
                    var DataLogin = {};

                    for (i = 0; i < inputs.length; i++) {
                      Object.defineProperty(DataLogin, inputs[i].name, {
                        value: inputs[i].value,
                        enumerable: true,
                      });
                      if (i + 1 == inputs.length) {
                        (async () => {
                          let res = await fetch("/login", {
                            method: "POST",
                            body: JSON.stringify(DataLogin),
                            headers: { "Content-Type": "application/json" },
                          });
                          var data = await res.json();
                          console.log(data);
                          if (res.status == 200) {
                            if (!data.login) {
                              this.SnackBar(data.message);
                            } else {
                              const { path, apply } = window.GlobalStore;
                              apply(
                                [
                                  add(
                                    path("root", "user", "idaccount"),
                                    data.idaccount
                                  ),
                                ],
                                true
                              );
                              apply(
                                [
                                  add(
                                    path("root", "user", "iduser"),
                                    data.iduser
                                  ),
                                ],
                                true
                              );
                              apply(
                                [
                                  add(
                                    path("root", "user", "preferences"),
                                    data.preferences
                                  ),
                                ],
                                true
                              );
                              apply(
                                [
                                  add(
                                    path("root", "user", "username"),
                                    data.username
                                  ),
                                ],
                                true
                              );
                              apply(
                                [
                                  add(
                                    path("root", "user", "fullname"),
                                    data.fullname
                                  ),
                                ],
                                true
                              );
                              apply(
                                [
                                  add(
                                    path("root", "user", "rowkey"),
                                    data.rowkey
                                  ),
                                ],
                                true
                              );

                              window.location.href = "/#home";
                            }
                          } else {
                            this.SnackBar(
                              "Sucedió un inconveniente con el servidor"
                            );
                          }
                        })();
                      }
                    }
                  }

                  e.preventDefault();
                },
              },
              [
                //v('input', {classes: [css.input], name: 'account',  type: 'text', placeholder: 'Cuenta'}, []),
                v(
                  "input",
                  {
                    name: "username",
                    type: "text",
                    placeholder: "Usuario",
                    required: "required",
                  },
                  []
                ),
                v(
                  "input",
                  {
                    name: "pwd",
                    type: "password",
                    placeholder: "Contraseña",
                    required: "required",
                  },
                  []
                ),
                v("input", { type: "submit", name: "submit", value: "Aceptar" }),
                v("div", { classes: css.links_block }, [
                  v("a", { href: "/#register" }, ["Registro"]),
                ]),
              ]
            ),
          ]),
          w(SBar, {
            open: this._openSnack,
            leading: false,
            type: "error",
            messageRenderer: () => this._MsgSnackBar,
          }),
        ]),
      ]),
      v("ul", { classes: css.bg_bubbles }, [
        v("li"),
        v("li"),
        v("li"),
        v("li"),
        v("li"),
        v("li"),
        v("li"),
        v("li"),
        v("li"),
        v("li"),
      ]),
    ]);
  }
}
