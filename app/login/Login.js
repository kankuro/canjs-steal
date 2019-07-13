import $ from "jquery";
import { LoginViewModel } from "./Login.vm";
import template from "./Login.stache";

(() => {
    const vm = new LoginViewModel();

    $("#root").html(template(vm));
})();
