goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__46372 = libspec;
var seq__46373 = cljs.core.seq(vec__46372);
var first__46374 = cljs.core.first(seq__46373);
var seq__46373__$1 = cljs.core.next(seq__46373);
var lib = first__46374;
var spec = seq__46373__$1;
var libspec__$1 = vec__46372;
var vec__46375 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46375,(0),null);
var vec__46378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46375,(1),null);
var seq__46379 = cljs.core.seq(vec__46378);
var first__46380 = cljs.core.first(seq__46379);
var seq__46379__$1 = cljs.core.next(seq__46379);
var _ = first__46380;
var first__46380__$1 = cljs.core.first(seq__46379__$1);
var seq__46379__$2 = cljs.core.next(seq__46379__$1);
var alias = first__46380__$1;
var post_spec = seq__46379__$2;
var post = vec__46378;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__46385 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46385,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__46385;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__46390 = cljs.core.seq(new_as_aliases);
var chunk__46391 = null;
var count__46392 = (0);
var i__46393 = (0);
while(true){
if((i__46393 < count__46392)){
var vec__46423 = chunk__46391.cljs$core$IIndexed$_nth$arity$2(null,i__46393);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__46539 = seq__46390;
var G__46540 = chunk__46391;
var G__46541 = count__46392;
var G__46542 = (i__46393 + (1));
seq__46390 = G__46539;
chunk__46391 = G__46540;
count__46392 = G__46541;
i__46393 = G__46542;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46390);
if(temp__5804__auto__){
var seq__46390__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46390__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46390__$1);
var G__46547 = cljs.core.chunk_rest(seq__46390__$1);
var G__46548 = c__5568__auto__;
var G__46549 = cljs.core.count(c__5568__auto__);
var G__46550 = (0);
seq__46390 = G__46547;
chunk__46391 = G__46548;
count__46392 = G__46549;
i__46393 = G__46550;
continue;
} else {
var vec__46441 = cljs.core.first(seq__46390__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46441,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46441,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__46553 = cljs.core.next(seq__46390__$1);
var G__46554 = null;
var G__46555 = (0);
var G__46556 = (0);
seq__46390 = G__46553;
chunk__46391 = G__46554;
count__46392 = G__46555;
i__46393 = G__46556;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__46468 = arguments.length;
switch (G__46468) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__46480 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__46480__$1 = cljs.core.__destructure_map(map__46480);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46480__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46480__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__46483 = ret__$1;
var G__46483__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46483,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__46483);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46483__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__46483__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46494,p__46495){
var map__46497 = p__46494;
var map__46497__$1 = cljs.core.__destructure_map(map__46497);
var ret__$1 = map__46497__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46497__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__46498 = p__46495;
var seq__46499 = cljs.core.seq(vec__46498);
var first__46500 = cljs.core.first(seq__46499);
var seq__46499__$1 = cljs.core.next(seq__46499);
var spec_key = first__46500;
var libspecs = seq__46499__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__46504 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__46504__$1 = cljs.core.__destructure_map(map__46504);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46504__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46504__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__46507 = ret__$1;
var G__46507__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46507,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__46507);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46507__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__46507__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
