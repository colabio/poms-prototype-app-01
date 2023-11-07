goog.provide('app.poms_00_signup_20230831');
app.poms_00_signup_20230831.sort_table_by_column = (function app$poms_00_signup_20230831$sort_table_by_column(table,column){
var rows = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(document.getElementsByTagName(table,"tr"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var get_cell_text = (function (row){
return (row.getElementsByTagName(document,"td")[column]).textContent(document).trim();
});
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__304786_SHARP_){
return get_cell_text(p1__304786_SHARP_);
}),cljs.core.rest(rows));
});
app.poms_00_signup_20230831.sort_table = (function app$poms_00_signup_20230831$sort_table(table,column){
var sorted_rows = app.poms_00_signup_20230831.sort_table_by_column(table,column);
var tbody = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(table.querySelector("tbody"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var seq__304787 = cljs.core.seq(sorted_rows);
var chunk__304788 = null;
var count__304789 = (0);
var i__304790 = (0);
while(true){
if((i__304790 < count__304789)){
var row = chunk__304788.cljs$core$IIndexed$_nth$arity$2(null,i__304790);
tbody.appendChild(row);


var G__304791 = seq__304787;
var G__304792 = chunk__304788;
var G__304793 = count__304789;
var G__304794 = (i__304790 + (1));
seq__304787 = G__304791;
chunk__304788 = G__304792;
count__304789 = G__304793;
i__304790 = G__304794;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__304787);
if(temp__5804__auto__){
var seq__304787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__304787__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__304787__$1);
var G__304795 = cljs.core.chunk_rest(seq__304787__$1);
var G__304796 = c__5568__auto__;
var G__304797 = cljs.core.count(c__5568__auto__);
var G__304798 = (0);
seq__304787 = G__304795;
chunk__304788 = G__304796;
count__304789 = G__304797;
i__304790 = G__304798;
continue;
} else {
var row = cljs.core.first(seq__304787__$1);
tbody.appendChild(row);


var G__304799 = cljs.core.next(seq__304787__$1);
var G__304800 = null;
var G__304801 = (0);
var G__304802 = (0);
seq__304787 = G__304799;
chunk__304788 = G__304800;
count__304789 = G__304801;
i__304790 = G__304802;
continue;
}
} else {
return null;
}
}
break;
}
});
app.poms_00_signup_20230831.table = document.getElementsById("myTable");

//# sourceMappingURL=app.poms_00_signup_20230831.js.map
