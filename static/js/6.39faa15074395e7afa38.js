webpackJsonp([6],{LRyQ:function(e,n){},j008:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={name:"herosposition",data:function(){return{isScroll:!0,mapType:"BMAP_SATELLITE_MAP",center:{lng:116.404,lat:39.915},zoom:15,ak:"Gj4pVfAeFPLn9gmaW4gfhrXOSZG1DaLG"}},methods:{syncCenterAndZoom:function(e){var n=e.target.getCenter(),t=n.lng,o=n.lat;this.center.lng=t,this.center.lat=o,this.zoom=e.target.getZoom()}},mixins:[t("msXN").a]},r={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"heros-position"},[t("baidu-map",{staticClass:"map",style:{width:e.innerW,height:e.innerH},attrs:{"scroll-wheel-zoom":e.isScroll,center:e.center,zoom:e.zoom},on:{moving:e.syncCenterAndZoom,moveend:e.syncCenterAndZoom,zoomend:e.syncCenterAndZoom}},[t("bm-scale",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),e._v(" "),t("bm-navigation",{attrs:{showZoomInfo:"",enableGeolocation:"",anchor:"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1)},staticRenderFns:[]};var a=t("VU/8")(o,r,!1,function(e){t("LRyQ")},null,null);n.default=a.exports}});
//# sourceMappingURL=6.39faa15074395e7afa38.js.map