"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5410],{5410:(M,p,r)=>{r.r(p),r.d(p,{TracksPageModule:()=>C});var g=r(6895),f=r(433),m=r(529),s=r(2078),u=r(4262),h=r(655),v=r(4004),t=r(4650),k=r(7042),P=r(7556),T=r(7098);const x=["locationContainer"];function y(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"ion-card",6),t.NdJ("click",function(){const o=t.CHM(e),a=o.index,d=o.$implicit,l=t.oxw();return t.KtG(l.isSelected(a)?l.toggleSelected(a):l.viewDetails(d))}),t._UZ(1,"img",7),t.TgZ(2,"ion-card-header")(3,"ion-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"ion-card-subtitle"),t._uU(6),t.qZA()(),t.TgZ(7,"ion-card-content")(8,"ion-button",8),t.NdJ("click",function(o){const d=t.CHM(e).index;return t.oxw().toggleSelected(d),t.KtG(o.stopPropagation())}),t._uU(9),t.qZA()()()}if(2&i){const e=c.$implicit,n=c.index,o=t.oxw();t.ekj("selected",o.isSelected(n)),t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(e.artist),t.xp6(3),t.hij(" ",o.isSelected(n)?"REMOVE":"ADD"," ")}}const b=[{path:"",component:(()=>{class i{constructor(e,n,o,a,d,l){this.geolocationService=e,this.alertController=n,this.authService=o,this.tracksService=a,this.activateRoute=d,this.router=l,this.selected=[],this.searchTerm="",this.searchTermSpotify="",this.userId="",this.latitude=void 0,this.longitude=void 0,this.accuracy=void 0}ngOnInit(){this.searchTerm=(this.activateRoute.snapshot.paramMap.get("searchTermSpotify")||"").toString(),this.results=this.tracksService.searchData(this.searchTerm),this.getId()}getId(){return(0,h.mG)(this,void 0,void 0,function*(){if(""==this.userId){const e=yield this.authService.getUserId();console.log("user id:",e),e&&(this.userId=e)}})}takePosition(){return(0,h.mG)(this,void 0,void 0,function*(){console.log("Pido ubicacion"),this.geolocationService.getPosition().then(e=>{console.log("Positions: ",e),this.latitude=e.coords.latitude,this.longitude=e.coords.longitude,this.accuracy=e.coords.accuracy}).catch(e=>console.error(e))})}toggleSelected(e){this.isSelected(e)?this.selected=this.selected.filter(n=>n!==e):this.selected.push(e)}isSelected(e){return this.selected.includes(e)}checkSelected(){return this.selected.length>0}viewDetails(e){this.router.navigate(["/details",e])}sendSelectedResults(){if(this.results){this.takePosition();const e=this.results.pipe((0,v.U)(n=>this.selected.map(o=>{const a=n[o];return a.userId=this.userId,a.coords={type:"Point",coordinates:[this.longitude,this.latitude,this.accuracy]},a})));console.log("Enviar results :",e),this.tracksService.sendResults(e).subscribe(n=>{console.log("response:",n),"OK"===n?this.presentAlert("Songs Saved Successfully","Coordinates: Latitude="+this.latitude+", Longitude="+this.longitude+", Accuracy="+this.accuracy):"Duplicate Song"===n?this.presentAlert("Duplicate song","Nothing has been saved"):this.presentAlert("Error saving songs","Try again later")})}}presentAlert(e,n){return(0,h.mG)(this,void 0,void 0,function*(){console.log(e);const o=yield this.alertController.create({header:e,message:n,buttons:["OK"]});yield o.present(),yield o.onDidDismiss().then(()=>{this.router.navigate(["/trackslist"]).then(()=>{location.reload()})})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(k._),t.Y36(s.Br),t.Y36(P.e),t.Y36(T.X),t.Y36(u.gz),t.Y36(u.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tracks"]],viewQuery:function(e,n){if(1&e&&t.Gf(x,5),2&e){let o;t.iGM(o=t.CRH())&&(n.locationContainer=o.first)}},decls:12,vars:4,consts:[["slot","start"],["defaultHref","trackslist"],["color","light","type","button","slot","end",3,"disabled","click"],["name","save-outline"],[1,"ion-no-padding"],[3,"selected","click",4,"ngFor","ngForOf"],[3,"click"],[3,"src"],["color","success","expand","block",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Tracks"),t.qZA(),t.TgZ(6,"ion-button",2),t.NdJ("click",function(){return n.sendSelectedResults()}),t._UZ(7,"ion-icon",3),t.qZA()()(),t.TgZ(8,"ion-content")(9,"ion-list",4),t.YNc(10,y,10,6,"ion-card",5),t.ALo(11,"async"),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("disabled",!n.selected.length),t.xp6(4),t.Q6J("ngForOf",t.lcZ(11,2,n.results)))},dependencies:[g.sg,s.oU,s.YG,s.Sm,s.PM,s.FN,s.Zi,s.tO,s.Dq,s.W2,s.Gu,s.gu,s.q_,s.wd,s.sr,s.cs,g.Ov],styles:['@charset "UTF-8";@property --rotate{syntax: "<angle>"; initial-value: 132deg; inherits: false;}ion-card[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px;display:inline-block;vertical-align:top;margin-inline:10px}@media only screen and (max-width: 767px){ion-card[_ngcontent-%COMP%]{width:100%;margin-left:auto;margin-right:auto;margin-bottom:10px;height:-webkit-min-content;height:-moz-min-content;height:min-content}}.card-container[_ngcontent-%COMP%]{width:100%;height:100%}ion-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,300px);grid-auto-rows:450px}@media (max-width: 767px){ion-list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);grid-auto-rows:auto}}.selected[_ngcontent-%COMP%]{position:relative;padding:1%;box-sizing:border-box;color:#fff;background-clip:padding-box;border-radius:1em}.selected[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;border-radius:inherit;background-image:linear-gradient(var(--rotate),#5ddcff,#3c67e3 43%,#4e00c2);animation:_ngcontent-%COMP%_spin 2.5s linear infinite;-webkit-background-clip:padding-box;background-clip:padding-box}@keyframes _ngcontent-%COMP%_spin{0%{--rotate: 0deg}to{--rotate: 360deg}}ion-card.selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:1em}ion-card-header[_ngcontent-%COMP%]{height:100px}ion-content[_ngcontent-%COMP%]{background:#213423}']}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(b),u.Bz]}),i})(),C=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[m.eN],imports:[g.ez,f.u5,s.Pc,S,m.JF]}),i})()}}]);