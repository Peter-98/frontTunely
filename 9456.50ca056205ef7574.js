"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9456],{7556:(A,O,o)=>{o.d(O,{e:()=>m});var T=o(655),P=o(4004),r=o(262),k=o(5577),x=o(8996),t=o(9751),v=o(5698),f=o(9260),s=(o(3042),o(4650)),h=o(1762),_=o(1205),E=o(529);let m=(()=>{class p{constructor(c,d,g){this.afs=c,this.afAuth=d,this.http=g,this.url="http://webapps.pedromrtaguilera.tech:3000/auth",this.afAuth.authState.subscribe(a=>{a?(this.userData=a,localStorage.setItem("user",JSON.stringify(this.userData)),JSON.parse(localStorage.getItem("user")||"{}")):(localStorage.setItem("user","{}"),JSON.parse(localStorage.getItem("user")||"{}"))})}postLogin(c,d){const g={email:c,pass:d};return console.log("LOG 1",g),this.http.post(`${this.url}/login`,g).pipe((0,P.U)(a=>{if(a&&a.token)return console.log("LOG 2",a),localStorage.setItem("token",a.token),a.token;throw console.log("LOG 3",a),new Error("Error en la solicitud")}),(0,r.K)(a=>{throw console.log("LOG 4"),new Error("Error en la solicitud")}))}postSignUp(c,d){return this.http.post(`${this.url}/signup`,{email:c,pass:d}).pipe((0,P.U)(a=>{if(a&&a.token)return localStorage.setItem("token",a.token),a.token;throw new Error("Error en la solicitud")}),(0,r.K)(a=>{throw new Error("Error en la solicitud")}))}doLogin(c){const{email:d,password:g}=c;return this.postLogin(d,g).pipe((0,k.z)(a=>(0,x.D)(f.Z.auth().signInWithEmailAndPassword(d,g)).pipe((0,k.z)(y=>(0,x.D)(Promise.resolve(a))),(0,r.K)(y=>{throw new Error("Error en la autenticaci\xf3n de Firebase")}))),(0,r.K)(a=>{throw new Error("Error en la autenticaci\xf3n de MongoDB")}))}doLogout(){return new Promise((c,d)=>{this.afAuth.signOut().then(()=>{localStorage.removeItem("user"),c()}).catch(g=>{console.log(g),d()})})}doRegister(c){return new t.y(d=>{this.postSignUp(c.email,c.password).subscribe(g=>{localStorage.setItem("token",g),this.afAuth.createUserWithEmailAndPassword(c.email,c.password).then(a=>{d.next(a),d.complete()}).catch(a=>{d.error(a)})},g=>{d.error(g)})})}isAuthenticated(){return this.afAuth.authState}getUserId(){return(0,T.mG)(this,void 0,void 0,function*(){const c=yield this.afAuth.authState.pipe((0,v.q)(1)).toPromise();return console.log("respues getId",c),c?c.uid:null})}}return p.\u0275fac=function(c){return new(c||p)(s.LFG(h.ST),s.LFG(_.zQ),s.LFG(E.eN))},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},7098:(A,O,o)=>{o.d(O,{X:()=>v});var T=o(529),P=o(9751),r=o(2843),k=o(262),x=o(4650);const t={headers:new T.WM({Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"})};let v=(()=>{class f{constructor(s){this.http=s,this.url="http://webapps.pedromrtaguilera.tech:3000/tracks"}testOperation(){console.log("Executing test operation...")}searchData(s){return console.log("Authorization header:",t.headers.get("Authorization")),this.http.get(`${this.url}/search/${encodeURI(s)}`,t)}sendResults(s){return new P.y(h=>{s.subscribe(_=>{const E={tracks:_};console.log("Resultados seleccionados data:",E),this.http.post(`${this.url}`,E,t).subscribe({next:m=>{console.log("Respuesta del servidor:",m),h.next("OK"),h.complete()},error:m=>{409===m.status?h.next("Duplicate Song"):(console.log("Error en la petici\xf3n:",m),h.next("KO")),h.complete()}})})})}getData(){return this.http.get(`${this.url}`)}getDataBySearchTerm(s){return this.http.get(`${this.url}/${encodeURI(s)}`)}getDetails(s){return this.http.get(`${this.url}/details/${encodeURI(s)}`)}deleteById(s){return this.http.delete(`${this.url}/${encodeURI(s)}`,t).pipe((0,k.K)(h=>{let _="Error desconocido";return 404===h.status?_="No se encontr\xf3 el elemento solicitado":500===h.status&&(_="Error interno del servidor"),(0,r._)(_)}))}updateTrack(s,h){return new P.y(_=>{h.subscribe(E=>{const m={tracks:E};console.log("Resultados seleccionados data:",m),this.http.put(`${this.url}/${encodeURI(s)}`,m,t).subscribe({next:p=>{console.log("Respuesta del servidor:",p),_.next("OK"),_.complete()},error:p=>{404===p.status?_.next("Duplicate Song"):(console.log("Error en la petici\xf3n:",p),_.next("KO")),_.complete()}})})})}}return f.\u0275fac=function(s){return new(s||f)(x.LFG(T.eN))},f.\u0275prov=x.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},9456:(A,O,o)=>{o.r(O),o.d(O,{TrackslistPageModule:()=>y});var T=o(6895),P=o(433),r=o(2078),k=o(4262),x=o(655),t=o(4650),v=o(7556),f=o(7098);function C(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",16),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.logout())}),t._UZ(1,"ion-icon",17),t.qZA()}}function s(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",16),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.openSearch())}),t._UZ(1,"ion-icon",18),t.qZA()}}function h(n,u){if(1&n&&(t.ynx(0),t._UZ(1,"img",25),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.href,t.LSH)}}function _(n,u){if(1&n&&t._UZ(0,"img",25),2&n){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)}}function E(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",26),t.NdJ("click",function(){t.CHM(e);const l=t.oxw().$implicit,M=t.oxw(3);return t.KtG(M.presentAlertConfirm(l._id))}),t._UZ(1,"ion-icon",27),t._uU(2," Delete "),t.qZA()}}function m(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"ion-card"),t.YNc(1,h,2,1,"ng-container",19),t.YNc(2,_,1,1,"ng-template",null,22,t.W1O),t.TgZ(4,"ion-card-header")(5,"ion-card-title"),t._uU(6),t.qZA(),t.TgZ(7,"ion-card-subtitle"),t._uU(8),t.qZA()(),t.TgZ(9,"ion-card-content")(10,"ion-button",23),t.NdJ("click",function(){const M=t.CHM(e).$implicit,I=t.oxw(3);return t.KtG(I.viewDetails(M._id))}),t._uU(11," Details "),t.qZA(),t.YNc(12,E,3,0,"ion-button",24),t.qZA()()}if(2&n){const e=u.$implicit,i=t.MAs(3),l=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.href)("ngIfElse",i),t.xp6(5),t.Oqu(e.name),t.xp6(2),t.Oqu(e.artist),t.xp6(4),t.Q6J("ngIf",l.auth&&l.userId===e.userId)}}function p(n,u){if(1&n&&(t.ynx(0),t.YNc(1,m,13,5,"ion-card",21),t.BQk()),2&n){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}function b(n,u){1&n&&(t.TgZ(0,"div",28),t._uU(1," No results "),t.qZA())}function c(n,u){if(1&n&&(t.ynx(0),t.YNc(1,p,2,1,"ng-container",19),t.YNc(2,b,2,0,"ng-template",null,20,t.W1O),t.BQk()),2&n){const e=u.ngIf,i=t.MAs(3);t.xp6(1),t.Q6J("ngIf",e.length>0)("ngIfElse",i)}}const g=[{path:"",component:(()=>{class n{constructor(e,i,l,M,I,D){this.toastController=e,this.alertController=i,this.authService=l,this.tracksService=M,this.activateRoute=I,this.router=D,this.auth=!1,this.userId="",this.searchTerm="",this.searchTermSpotify=""}ngOnInit(){this.searchTerm=(this.activateRoute.snapshot.paramMap.get("searchTerm")||"").toString(),this.results=this.searchTerm?this.tracksService.getDataBySearchTerm(this.searchTerm):this.tracksService.getData(),this.authService.isAuthenticated().subscribe(e=>{e?(this.userId=e.uid,this.auth=!0):this.auth=!1})}viewDetails(e){this.router.navigate(["/details",e])}searchTracks(){this.results=this.tracksService.getDataBySearchTerm(this.searchTerm)}logout(){this.authService.doLogout().then(e=>{console.log("User logout"),this.presentToast("You have successfully logged out"),this.router.navigate(["/home"])},e=>{console.log(e)})}presentToast(e){return(0,x.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3})).present()})}deleteTrack(e){this.tracksService.deleteById(e).subscribe(i=>{location.reload()})}openSearch(){const e=document.getElementById("search-overlay");e&&e.classList.add("show")}closeSearch(){const e=document.getElementById("search-overlay");e&&e.classList.remove("show")}goToTrackListData(){this.router.navigate(["/tracks",this.searchTermSpotify])}goToAddTrackListData(){this.router.navigate(["/add-song"])}presentAlertConfirm(e){return(0,x.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Are u sure?",message:"Do you want to delete the song?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:l=>{console.log("Cancelar")}},{text:"Delete",cssClass:"danger",handler:()=>{console.log("Confirmar"),this.deleteTrack(e)}}]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.yF),t.Y36(r.Br),t.Y36(v.e),t.Y36(f.X),t.Y36(k.gz),t.Y36(k.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-trackslist"]],decls:26,vars:7,consts:[["slot","start"],["defaultHref","home"],["slot","end",3,"click",4,"ngIf"],[1,"search-container"],["id","search-overlay",1,"overlay"],["id","search-bar",1,"search-bar"],["placeholder","Search song in spotify database","color","dark",3,"ngModel","ngModelChange","keyup.enter"],["slot","end","color","tertiary",3,"click"],["name","search","slot","start"],["slot","end","color","success",3,"click"],["name","cloud-upload-outline","slot","start"],["slot","end","color","danger",3,"click"],["name","close-outline","slot","start"],["placeholder","Search song","color","dark",3,"ngModel","ngModelChange","ionChange"],[1,"ion-no-padding"],[4,"ngIf"],["slot","end",3,"click"],["slot","icon-only","name","exit-outline"],["slot","icon-only","name","add-circle-outline"],[4,"ngIf","ngIfElse"],["noResults",""],[4,"ngFor","ngForOf"],["showImage",""],["color","primary","expand","block",3,"click"],["id","present-alert","expand","block","color","danger",3,"click",4,"ngIf"],[3,"src"],["id","present-alert","expand","block","color","danger",3,"click"],["name","trash-outline","slot","start"],[1,"ion-text-left"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.YNc(4,C,2,0,"ion-button",2),t.TgZ(5,"ion-title"),t._uU(6,"All songs"),t.qZA()()(),t.TgZ(7,"ion-content")(8,"div",3)(9,"div",4)(10,"div",5)(11,"ion-searchbar",6),t.NdJ("ngModelChange",function(M){return i.searchTermSpotify=M})("keyup.enter",function(){return i.goToTrackListData()}),t.qZA(),t.TgZ(12,"ion-button",7),t.NdJ("click",function(){return i.goToTrackListData()}),t._UZ(13,"ion-icon",8),t._uU(14," Search"),t.qZA(),t.TgZ(15,"ion-button",9),t.NdJ("click",function(){return i.goToAddTrackListData()}),t._UZ(16,"ion-icon",10),t._uU(17," Upload song"),t.qZA(),t.TgZ(18,"ion-button",11),t.NdJ("click",function(){return i.closeSearch()}),t._UZ(19,"ion-icon",12),t._uU(20,"Close"),t.qZA()()(),t.TgZ(21,"ion-searchbar",13),t.NdJ("ngModelChange",function(M){return i.searchTerm=M})("ionChange",function(){return i.searchTracks()}),t.qZA(),t.YNc(22,s,2,0,"ion-button",2),t.qZA(),t.TgZ(23,"ion-list",14),t.YNc(24,c,4,2,"ng-container",15),t.ALo(25,"async"),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngIf",i.auth),t.xp6(7),t.Q6J("ngModel",i.searchTermSpotify),t.xp6(10),t.Q6J("ngModel",i.searchTerm),t.xp6(1),t.Q6J("ngIf",i.auth),t.xp6(2),t.Q6J("ngIf",t.lcZ(25,5,i.results)))},dependencies:[T.sg,T.O5,P.JJ,P.On,r.oU,r.YG,r.Sm,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.W2,r.Gu,r.gu,r.q_,r.VI,r.wd,r.sr,r.j9,r.cs,T.Ov],styles:['@charset "UTF-8";@property --rotate{syntax: "<angle>"; initial-value: 132deg; inherits: false;}ion-card[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px;display:inline-block;vertical-align:top;margin-inline:10px}@media only screen and (max-width: 767px){ion-card[_ngcontent-%COMP%]{width:100%;margin-left:auto;margin-right:auto;margin-bottom:10px;height:-webkit-min-content;height:-moz-min-content;height:min-content}}.card-container[_ngcontent-%COMP%]{width:100%;height:100%}ion-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);grid-auto-rows:600px}@media (max-width: 767px){ion-list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);grid-auto-rows:auto}}.selected[_ngcontent-%COMP%]{position:relative;padding:1%;box-sizing:border-box;color:#fff;background:#ff0000;background-clip:padding-box;border:solid 5px transparent;border:5px solid transparent;border-radius:1em}.selected[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-5px;border-radius:inherit;background-image:linear-gradient(var(--rotate),#5ddcff,#3c67e3 43%,#4e00c2);animation:_ngcontent-%COMP%_spin 2.5s linear infinite;-webkit-background-clip:padding-box;background-clip:padding-box}@keyframes _ngcontent-%COMP%_spin{0%{--rotate: 0deg}to{--rotate: 360deg}}ion-card.selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:1em}ion-card-header[_ngcontent-%COMP%]{min-height:120px;height:auto}ion-content[_ngcontent-%COMP%]{background:#213423}.ion-text-left[_ngcontent-%COMP%]{margin-left:20px}.search-bar[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;margin:20% auto;width:80%;padding:20px}@media (max-width: 767px){.search-bar[_ngcontent-%COMP%]{margin:50% auto}}.overlay[_ngcontent-%COMP%]{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:9999}.overlay.show[_ngcontent-%COMP%]{display:block}.search-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:60%}']}),n})()}];let a=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[k.Bz.forChild(g),k.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[T.ez,P.u5,r.Pc,a]}),n})()}}]);