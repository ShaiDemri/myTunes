(this["webpackJsonpmy-tunes"]=this["webpackJsonpmy-tunes"]||[]).push([[13],{117:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(52),l=t(115),i=t(171),o=t(174),s=t(207),u=t(211),m=t(173),d=t(118),p=t(119),f=t.n(p),h=Object(l.a)((function(e){return{card:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"-webkit-fill-available"},button:{width:"-webkit-fill-available"}}}));a.default=function(e){var a=h(),t=Object(c.d)((function(e){return e.tune.selectedTune})),n=void 0!==Object(c.d)((function(e){return e.auth.user}));r.a.useEffect((function(){if(!n){e.history.push({pathname:"/signup",state:{from:{pathname:"/searchTune"}}})}}),[n]);var l=t.artistName,p=t.trackName,v=t.primaryGenreName,b=t.artworkUrl100,y=t.collectionName,E=t.previewUrl,k=t.kind,w=t.wrapperType,N="song"===k||"audiobook"===w;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:a.card},r.a.createElement("div",{className:a.details},r.a.createElement(o.a,{className:a.content},r.a.createElement(s.a,{component:"h5",variant:"h5"},p," ",y),r.a.createElement(s.a,{variant:"subtitle1",color:"textSecondary"},l),r.a.createElement(s.a,{variant:"subtitle1",color:"textSecondary"},"Genre: ",v)),N?r.a.createElement(d.AudioPlayer,{src:E,autoPlay:!1,elevation:1}):r.a.createElement(f.a,{url:E,playing:!1,controls:!0})),r.a.createElement(m.a,{className:a.cover,image:b,title:p})),r.a.createElement(u.a,{variant:"extended",color:"secondary",className:a.button,onClick:function(){e.history.push({pathname:"/searchTune",state:{from:{pathname:"/tune"}}})}},"Back To Search"))}}}]);
//# sourceMappingURL=13.bcb4e867.chunk.js.map