goog.provide('app.poms_00_signup_20230831');
app.poms_00_signup_20230831.validation_message = (function app$poms_00_signup_20230831$validation_message(username){
var username__$1 = clojure.string.trim(username);
if(cljs.core.empty_QMARK_(username__$1)){
return "Username is required";
} else {
if((!(((((3) <= ((username__$1).length))) && ((((username__$1).length) <= (12))))))){
return "Username must be between 3 and 12 characters.";
} else {
return null;
}
}
});
app.poms_00_signup_20230831.toggle = (function app$poms_00_signup_20230831$toggle(elem_id){
var elem = document.getElementById(elem_id);
var style = elem.style;
var display = style.display;
var new_display = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("none",display))?"block":"none");
return (style.display = new_display);
});
goog.exportSymbol('app.poms_00_signup_20230831.toggle', app.poms_00_signup_20230831.toggle);

//# sourceMappingURL=app.poms_00_signup_20230831.js.map
