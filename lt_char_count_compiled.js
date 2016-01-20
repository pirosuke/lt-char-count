if(!lt.util.load.provided_QMARK_('crate.binding')) {
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6555 = cljs.core.seq.call(null,self__.watches);var chunk__6556 = null;var count__6557 = 0;var i__6558 = 0;while(true){
if((i__6558 < count__6557))
{var vec__6559 = cljs.core._nth.call(null,chunk__6556,i__6558);var key__$1 = cljs.core.nth.call(null,vec__6559,0,null);var f = cljs.core.nth.call(null,vec__6559,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6634 = seq__6555;
var G__6635 = chunk__6556;
var G__6636 = count__6557;
var G__6637 = (i__6558 + 1);
seq__6555 = G__6634;
chunk__6556 = G__6635;
count__6557 = G__6636;
i__6558 = G__6637;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6555);if(temp__4092__auto__)
{var seq__6555__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6555__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6555__$1);{
var G__6638 = cljs.core.chunk_rest.call(null,seq__6555__$1);
var G__6639 = c__5632__auto__;
var G__6640 = cljs.core.count.call(null,c__5632__auto__);
var G__6641 = 0;
seq__6555 = G__6638;
chunk__6556 = G__6639;
count__6557 = G__6640;
i__6558 = G__6641;
continue;
}
} else
{var vec__6560 = cljs.core.first.call(null,seq__6555__$1);var key__$1 = cljs.core.nth.call(null,vec__6560,0,null);var f = cljs.core.nth.call(null,vec__6560,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6642 = cljs.core.next.call(null,seq__6555__$1);
var G__6643 = null;
var G__6644 = 0;
var G__6645 = 0;
seq__6555 = G__6642;
chunk__6556 = G__6643;
count__6557 = G__6644;
i__6558 = G__6645;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.atm))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__6562 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__6562,0,null);var path__$2 = cljs.core.nth.call(null,vec__6562,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__6562,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__6562,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__6646__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__6646 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__6646__delegate.call(this,sa,f,x,y,z,more);};
G__6646.cljs$lang$maxFixedArity = 5;
G__6646.cljs$lang$applyTo = (function (arglist__6647){
var sa = cljs.core.first(arglist__6647);
arglist__6647 = cljs.core.next(arglist__6647);
var f = cljs.core.first(arglist__6647);
arglist__6647 = cljs.core.next(arglist__6647);
var x = cljs.core.first(arglist__6647);
arglist__6647 = cljs.core.next(arglist__6647);
var y = cljs.core.first(arglist__6647);
arglist__6647 = cljs.core.next(arglist__6647);
var z = cljs.core.first(arglist__6647);
var more = cljs.core.rest(arglist__6647);
return G__6646__delegate(sa,f,x,y,z,more);
});
G__6646.cljs$core$IFn$_invoke$arity$variadic = G__6646__delegate;
return G__6646;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj6564 = {};return obj6564;
})();
crate.binding._depend = (function _depend(this$,atm){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$computable$_depend$arity$2;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._depend[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._depend["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-depend",this$);
}
}
})().call(null,this$,atm);
}
});
crate.binding._compute = (function _compute(this$){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._compute[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._compute["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){var self__ = this;
var this$__$1 = this;this$__$1.atms = cljs.core.conj.call(null,this$__$1.atms,atm);
return cljs.core.add_watch.call(null,atm,self__.key,((function (this$__$1){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,this$__$1);
});})(this$__$1))
);
});
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;var nv = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));this$__$1.value = nv;
return cljs.core._notify_watches.call(null,this$__$1,old,nv);
});
crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6565 = cljs.core.seq.call(null,self__.watches);var chunk__6566 = null;var count__6567 = 0;var i__6568 = 0;while(true){
if((i__6568 < count__6567))
{var vec__6569 = cljs.core._nth.call(null,chunk__6566,i__6568);var key__$1 = cljs.core.nth.call(null,vec__6569,0,null);var f = cljs.core.nth.call(null,vec__6569,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6648 = seq__6565;
var G__6649 = chunk__6566;
var G__6650 = count__6567;
var G__6651 = (i__6568 + 1);
seq__6565 = G__6648;
chunk__6566 = G__6649;
count__6567 = G__6650;
i__6568 = G__6651;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6565);if(temp__4092__auto__)
{var seq__6565__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6565__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6565__$1);{
var G__6652 = cljs.core.chunk_rest.call(null,seq__6565__$1);
var G__6653 = c__5632__auto__;
var G__6654 = cljs.core.count.call(null,c__5632__auto__);
var G__6655 = 0;
seq__6565 = G__6652;
chunk__6566 = G__6653;
count__6567 = G__6654;
i__6568 = G__6655;
continue;
}
} else
{var vec__6570 = cljs.core.first.call(null,seq__6565__$1);var key__$1 = cljs.core.nth.call(null,vec__6570,0,null);var f = cljs.core.nth.call(null,vec__6570,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6656 = cljs.core.next.call(null,seq__6565__$1);
var G__6657 = null;
var G__6658 = 0;
var G__6659 = 0;
seq__6565 = G__6656;
chunk__6566 = G__6657;
count__6567 = G__6658;
i__6568 = G__6659;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key,meta){return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));crate.binding._compute.call(null,neue);
var seq__6575_6660 = cljs.core.seq.call(null,atms);var chunk__6576_6661 = null;var count__6577_6662 = 0;var i__6578_6663 = 0;while(true){
if((i__6578_6663 < count__6577_6662))
{var atm_6664 = cljs.core._nth.call(null,chunk__6576_6661,i__6578_6663);crate.binding._depend.call(null,neue,atm_6664);
{
var G__6665 = seq__6575_6660;
var G__6666 = chunk__6576_6661;
var G__6667 = count__6577_6662;
var G__6668 = (i__6578_6663 + 1);
seq__6575_6660 = G__6665;
chunk__6576_6661 = G__6666;
count__6577_6662 = G__6667;
i__6578_6663 = G__6668;
continue;
}
} else
{var temp__4092__auto___6669 = cljs.core.seq.call(null,seq__6575_6660);if(temp__4092__auto___6669)
{var seq__6575_6670__$1 = temp__4092__auto___6669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6575_6670__$1))
{var c__5632__auto___6671 = cljs.core.chunk_first.call(null,seq__6575_6670__$1);{
var G__6672 = cljs.core.chunk_rest.call(null,seq__6575_6670__$1);
var G__6673 = c__5632__auto___6671;
var G__6674 = cljs.core.count.call(null,c__5632__auto___6671);
var G__6675 = 0;
seq__6575_6660 = G__6672;
chunk__6576_6661 = G__6673;
count__6577_6662 = G__6674;
i__6578_6663 = G__6675;
continue;
}
} else
{var atm_6676 = cljs.core.first.call(null,seq__6575_6670__$1);crate.binding._depend.call(null,neue,atm_6676);
{
var G__6677 = cljs.core.next.call(null,seq__6575_6670__$1);
var G__6678 = null;
var G__6679 = 0;
var G__6680 = 0;
seq__6575_6660 = G__6677;
chunk__6576_6661 = G__6678;
count__6577_6662 = G__6679;
i__6578_6663 = G__6680;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.compute = (function compute(compu){return crate.binding._compute.call(null,compu);
});
crate.binding.depend_on = (function depend_on(compu,atm){return crate.binding._depend.call(null,compu,atm);
});
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj6580 = {};return obj6580;
})();
crate.binding.bindable = (function (){var obj6582 = {};return obj6582;
})();
crate.binding._value = (function _value(this$){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._value[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._value["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__4872__auto__ = this$;if(and__4872__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__4872__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__5511__auto__ = (((this$ == null))?null:this$);return (function (){var or__4884__auto__ = (crate.binding._on_change[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (crate.binding._on_change["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6583 = cljs.core.seq.call(null,self__.watches);var chunk__6584 = null;var count__6585 = 0;var i__6586 = 0;while(true){
if((i__6586 < count__6585))
{var vec__6587 = cljs.core._nth.call(null,chunk__6584,i__6586);var key = cljs.core.nth.call(null,vec__6587,0,null);var f = cljs.core.nth.call(null,vec__6587,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6681 = seq__6583;
var G__6682 = chunk__6584;
var G__6683 = count__6585;
var G__6684 = (i__6586 + 1);
seq__6583 = G__6681;
chunk__6584 = G__6682;
count__6585 = G__6683;
i__6586 = G__6684;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6583);if(temp__4092__auto__)
{var seq__6583__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6583__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6583__$1);{
var G__6685 = cljs.core.chunk_rest.call(null,seq__6583__$1);
var G__6686 = c__5632__auto__;
var G__6687 = cljs.core.count.call(null,c__5632__auto__);
var G__6688 = 0;
seq__6583 = G__6685;
chunk__6584 = G__6686;
count__6585 = G__6687;
i__6586 = G__6688;
continue;
}
} else
{var vec__6588 = cljs.core.first.call(null,seq__6583__$1);var key = cljs.core.nth.call(null,vec__6588,0,null);var f = cljs.core.nth.call(null,vec__6588,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6689 = cljs.core.next.call(null,seq__6583__$1);
var G__6690 = null;
var G__6691 = 0;
var G__6692 = 0;
seq__6583 = G__6689;
chunk__6584 = G__6690;
count__6585 = G__6691;
i__6586 = G__6692;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__6589){var vec__6590 = p__6589;var event = cljs.core.nth.call(null,vec__6590,0,null);var el = cljs.core.nth.call(null,vec__6590,1,null);var v = cljs.core.nth.call(null,vec__6590,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__4884__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__6693){
var bc = cljs.core.first(arglist__6693);
var segs = cljs.core.rest(arglist__6693);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__6599_6694 = cljs.core.seq.call(null,added);var chunk__6600_6695 = null;var count__6601_6696 = 0;var i__6602_6697 = 0;while(true){
if((i__6602_6697 < count__6601_6696))
{var a_6698 = cljs.core._nth.call(null,chunk__6600_6695,i__6602_6697);crate.binding.bc_add.call(null,bc,a_6698,a_6698);
{
var G__6699 = seq__6599_6694;
var G__6700 = chunk__6600_6695;
var G__6701 = count__6601_6696;
var G__6702 = (i__6602_6697 + 1);
seq__6599_6694 = G__6699;
chunk__6600_6695 = G__6700;
count__6601_6696 = G__6701;
i__6602_6697 = G__6702;
continue;
}
} else
{var temp__4092__auto___6703 = cljs.core.seq.call(null,seq__6599_6694);if(temp__4092__auto___6703)
{var seq__6599_6704__$1 = temp__4092__auto___6703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6599_6704__$1))
{var c__5632__auto___6705 = cljs.core.chunk_first.call(null,seq__6599_6704__$1);{
var G__6706 = cljs.core.chunk_rest.call(null,seq__6599_6704__$1);
var G__6707 = c__5632__auto___6705;
var G__6708 = cljs.core.count.call(null,c__5632__auto___6705);
var G__6709 = 0;
seq__6599_6694 = G__6706;
chunk__6600_6695 = G__6707;
count__6601_6696 = G__6708;
i__6602_6697 = G__6709;
continue;
}
} else
{var a_6710 = cljs.core.first.call(null,seq__6599_6704__$1);crate.binding.bc_add.call(null,bc,a_6710,a_6710);
{
var G__6711 = cljs.core.next.call(null,seq__6599_6704__$1);
var G__6712 = null;
var G__6713 = 0;
var G__6714 = 0;
seq__6599_6694 = G__6711;
chunk__6600_6695 = G__6712;
count__6601_6696 = G__6713;
i__6602_6697 = G__6714;
continue;
}
}
} else
{}
}
break;
}
var seq__6603 = cljs.core.seq.call(null,removed);var chunk__6604 = null;var count__6605 = 0;var i__6606 = 0;while(true){
if((i__6606 < count__6605))
{var r = cljs.core._nth.call(null,chunk__6604,i__6606);crate.binding.bc_remove.call(null,bc,r);
{
var G__6715 = seq__6603;
var G__6716 = chunk__6604;
var G__6717 = count__6605;
var G__6718 = (i__6606 + 1);
seq__6603 = G__6715;
chunk__6604 = G__6716;
count__6605 = G__6717;
i__6606 = G__6718;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6603);if(temp__4092__auto__)
{var seq__6603__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6603__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6603__$1);{
var G__6719 = cljs.core.chunk_rest.call(null,seq__6603__$1);
var G__6720 = c__5632__auto__;
var G__6721 = cljs.core.count.call(null,c__5632__auto__);
var G__6722 = 0;
seq__6603 = G__6719;
chunk__6604 = G__6720;
count__6605 = G__6721;
i__6606 = G__6722;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__6603__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__6723 = cljs.core.next.call(null,seq__6603__$1);
var G__6724 = null;
var G__6725 = 0;
var G__6726 = 0;
seq__6603 = G__6723;
chunk__6604 = G__6724;
count__6605 = G__6725;
i__6606 = G__6726;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__6607){var vec__6610 = p__6607;var path = cljs.core.nth.call(null,vec__6610,0,null);var opts = cljs.core.nth.call(null,vec__6610,1,null);var vec__6611 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__6611,0,null);var opts__$1 = cljs.core.nth.call(null,vec__6611,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__6611,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__6610,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__6611,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__6610,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__6607 = null;if (arguments.length > 1) {
  p__6607 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__6607);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__6727){
var atm = cljs.core.first(arglist__6727);
var p__6607 = cljs.core.rest(arglist__6727);
return bound_coll__delegate(atm,p__6607);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__6612){var vec__6614 = p__6612;var opts = cljs.core.nth.call(null,vec__6614,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__6614,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__6614,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__6612 = null;if (arguments.length > 2) {
  p__6612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__6612);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__6728){
var as = cljs.core.first(arglist__6728);
arglist__6728 = cljs.core.next(arglist__6728);
var atm = cljs.core.first(arglist__6728);
var p__6612 = cljs.core.rest(arglist__6728);
return map_bound__delegate(as,atm,p__6612);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__6616 = b;if(G__6616)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__6616.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__6616.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__6616);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__6616);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__6618 = b;if(G__6618)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__6618.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__6618.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__6618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__6618);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__6620 = atm;if(G__6620)
{var bit__5534__auto__ = (G__6620.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__5534__auto__) || (G__6620.cljs$core$IDeref$))
{return true;
} else
{if((!G__6620.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__6620);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__6621){var vec__6623 = p__6621;var func = cljs.core.nth.call(null,vec__6623,0,null);var func__$1 = (function (){var or__4884__auto__ = func;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__6621 = null;if (arguments.length > 1) {
  p__6621 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__6621);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__6729){
var atm = cljs.core.first(arglist__6729);
var p__6621 = cljs.core.rest(arglist__6729);
return bound__delegate(atm,p__6621);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-char-count')) {
goog.provide('lt.plugins.lt_char_count');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.statusbar');
goog.require('lt.objs.statusbar');
lt.plugins.lt_char_count.count_ui = (function count_ui(count_num){var e__6366__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.editor-count","span.editor-count",2628898885),count_num], null));var seq__6776_6785 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6777_6786 = null;var count__6778_6787 = 0;var i__6779_6788 = 0;while(true){
if((i__6779_6788 < count__6778_6787))
{var vec__6780_6789 = cljs.core._nth.call(null,chunk__6777_6786,i__6779_6788);var ev__6367__auto___6790 = cljs.core.nth.call(null,vec__6780_6789,0,null);var func__6368__auto___6791 = cljs.core.nth.call(null,vec__6780_6789,1,null);lt.util.dom.on.call(null,e__6366__auto__,ev__6367__auto___6790,func__6368__auto___6791);
{
var G__6792 = seq__6776_6785;
var G__6793 = chunk__6777_6786;
var G__6794 = count__6778_6787;
var G__6795 = (i__6779_6788 + 1);
seq__6776_6785 = G__6792;
chunk__6777_6786 = G__6793;
count__6778_6787 = G__6794;
i__6779_6788 = G__6795;
continue;
}
} else
{var temp__4092__auto___6796 = cljs.core.seq.call(null,seq__6776_6785);if(temp__4092__auto___6796)
{var seq__6776_6797__$1 = temp__4092__auto___6796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6776_6797__$1))
{var c__5632__auto___6798 = cljs.core.chunk_first.call(null,seq__6776_6797__$1);{
var G__6799 = cljs.core.chunk_rest.call(null,seq__6776_6797__$1);
var G__6800 = c__5632__auto___6798;
var G__6801 = cljs.core.count.call(null,c__5632__auto___6798);
var G__6802 = 0;
seq__6776_6785 = G__6799;
chunk__6777_6786 = G__6800;
count__6778_6787 = G__6801;
i__6779_6788 = G__6802;
continue;
}
} else
{var vec__6781_6803 = cljs.core.first.call(null,seq__6776_6797__$1);var ev__6367__auto___6804 = cljs.core.nth.call(null,vec__6781_6803,0,null);var func__6368__auto___6805 = cljs.core.nth.call(null,vec__6781_6803,1,null);lt.util.dom.on.call(null,e__6366__auto__,ev__6367__auto___6804,func__6368__auto___6805);
{
var G__6806 = cljs.core.next.call(null,seq__6776_6797__$1);
var G__6807 = null;
var G__6808 = 0;
var G__6809 = 0;
seq__6776_6785 = G__6806;
chunk__6777_6786 = G__6807;
count__6778_6787 = G__6808;
i__6779_6788 = G__6809;
continue;
}
}
} else
{}
}
break;
}
return e__6366__auto__;
});
lt.plugins.lt_char_count.__GT_char_count_html = (function __GT_char_count_html(p__6782){var map__6784 = p__6782;var map__6784__$1 = ((cljs.core.seq_QMARK_.call(null,map__6784))?cljs.core.apply.call(null,cljs.core.hash_map,map__6784):map__6784);var o = map__6784__$1;var cur_ed = cljs.core.get.call(null,map__6784__$1,new cljs.core.Keyword(null,"cur-ed","cur-ed",3959684798));if(cljs.core.truth_(cur_ed))
{return lt.plugins.lt_char_count.count_ui.call(null,cljs.core.count.call(null,lt.objs.editor.__GT_val.call(null,cur_ed)));
} else
{return null;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-char-count","container","lt.plugins.lt-char-count/container",1263077518),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),crate.binding.bound.call(null,this$,lt.plugins.lt_char_count.__GT_char_count_html)], null)], null);
}));
lt.plugins.lt_char_count.container = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-char-count","container","lt.plugins.lt-char-count/container",1263077518));
lt.objs.statusbar.add_statusbar_item.call(null,lt.plugins.lt_char_count.container);
lt.plugins.lt_char_count.__BEH__attach = (function __BEH__attach(this$){return lt.object.merge_BANG_.call(null,lt.plugins.lt_char_count.container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur-ed","cur-ed",3959684798),this$], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-char-count","attach","lt.plugins.lt-char-count/attach",4297696866),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_char_count.__BEH__attach,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
}

//# sourceMappingURL=lt_char_count_compiled.js.map