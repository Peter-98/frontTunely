"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(v,d,a)=>{a.r(d),a.d(d,{HomePageModule:()=>M});var h=a(6895),c=a(2078),i=a(433),l=a(4262),m=a(655),t=a(4650),f=a(7556);const _=function(){return["/sign-up"]};function O(n,r){1&n&&(t.TgZ(0,"ion-button",13),t._uU(1,"Sign up "),t.qZA()),2&n&&t.Q6J("routerLink",t.DdM(1,_))}const u=function(){return["/login"]};function p(n,r){1&n&&(t.TgZ(0,"ion-button",13),t._uU(1,"Log in "),t.qZA()),2&n&&t.Q6J("routerLink",t.DdM(1,u))}function b(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",14),t.NdJ("click",function(){t.CHM(e);const g=t.oxw();return t.KtG(g.logout())}),t._UZ(1,"ion-icon",15),t.qZA()}}const P=[{path:"",component:(()=>{class n{constructor(e,o,g){this.toastController=e,this.authService=o,this.router=g,this.data="",this.auth=!1}ngOnInit(){this.authService.isAuthenticated().subscribe(e=>{e?(console.log("AUTENTIFICADO"),this.auth=!0):(console.log("NO AUTENTIFICADO"),this.auth=!1)})}goToTrackListData(){this.router.navigate(["/trackslist",this.data])}goToTrackList(){this.router.navigate(["/trackslist"])}logout(){this.authService.doLogout().then(e=>{console.log("User logout"),this.presentToast("You have successfully logged out"),this.router.navigate(["/home"])},e=>{console.log(e)})}presentToast(e){return(0,m.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.yF),t.Y36(f.e),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:17,vars:6,consts:[["collapse","fade",3,"translucent"],["color","translucent"],["src","/assets/imgs/tunely2.png","width","150","height","50",1,"title-image"],["slot","end"],["class","register",3,"routerLink",4,"ngIf"],["slot","end",3,"click",4,"ngIf"],["padding","",1,"background",3,"fullscreen"],["role","banner",1,"banner"],["action","",1,"search-bar"],["type","search","name","search","pattern",".*\\S.*","required","",3,"ngModel","ngModelChange"],["type","submit",1,"search-btn",3,"click"],[1,"text-box"],["type","button",1,"btn","btn-white","animated",3,"click"],[1,"register",3,"routerLink"],["slot","end",3,"click"],["slot","icon-only","name","exit-outline"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1),t._UZ(2,"img",2),t.TgZ(3,"ion-buttons",3),t.YNc(4,O,2,2,"ion-button",4),t.YNc(5,p,2,2,"ion-button",4),t.YNc(6,b,2,0,"ion-button",5),t.qZA()()(),t.TgZ(7,"ion-content",6)(8,"section",7)(9,"h1"),t._uU(10,"Life is music"),t.qZA(),t.TgZ(11,"form",8)(12,"input",9),t.NdJ("ngModelChange",function(x){return o.data=x}),t.qZA(),t.TgZ(13,"button",10),t.NdJ("click",function(){return o.goToTrackListData()}),t.qZA()(),t.TgZ(14,"div",11)(15,"button",12),t.NdJ("click",function(){return o.goToTrackList()}),t._uU(16,"All songs"),t.qZA()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("ngIf",!o.auth),t.xp6(1),t.Q6J("ngIf",!o.auth),t.xp6(1),t.Q6J("ngIf",o.auth),t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(5),t.Q6J("ngModel",o.data))},dependencies:[h.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.c5,i.On,i.F,c.YG,c.Sm,c.W2,c.Gu,c.gu,c.sr,c.YI,l.rH],styles:['ion-content.background[_ngcontent-%COMP%]{--background: url(fondoMovil.88f5fd792a896d3b.jpeg) 0 0/100% 100% no-repeat}@media only screen and (max-width: 600px){ion-content.background[_ngcontent-%COMP%]{--background: url(fondoMovil.88f5fd792a896d3b.jpeg) 0 0/100% 100% no-repeat}}@font-face{font-family:Dancing Script;src:url(DancingScript.37c09881bb8c7428.ttf)}h1[_ngcontent-%COMP%]{margin:0;padding:0}.banner[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;left:0;padding:5em 0;position:flex;text-align:center;top:0;width:100%;bottom:0}.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{bottom:0;color:#fff;font-family:Dancing Script;font-size:2.375rem;margin-bottom:1em}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #313338;--color: white}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#fff}img.custom-icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 auto}ion-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}*[_ngcontent-%COMP%]{border:0;box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font:1em Hind,sans-serif;line-height:1.5em}body[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{color:#171717}body[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]{display:flex}body[_ngcontent-%COMP%]{background:#f1f1f1;height:100vh}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%]:before, .search-btn[_ngcontent-%COMP%]:after{transition:all .25s ease-out}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%]{width:3em;height:3em}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid:not(:focus), .search-btn[_ngcontent-%COMP%]{cursor:pointer}.search-bar[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{width:100%}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:focus) + .search-btn[_ngcontent-%COMP%]:focus{outline:transparent}.search-bar[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:auto;padding:1.5em;justify-content:center;max-width:30em;display:flex}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:transparent;border-radius:1.5em;box-shadow:0 0 0 .4em #171717 inset;padding:.75em;transform:translate(.5em,.5em) scale(.5);transform-origin:100% 0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{background:#fff;border-radius:.375em 0 0 .375em;box-shadow:0 0 0 .1em #d9d9d9 inset;transform:scale(1)}.search-btn[_ngcontent-%COMP%]{background:#171717;border-radius:0 .75em .75em 0/0 1.5em 1.5em 0;padding:.75em;position:relative;transform:translate(.25em,.25em) rotate(45deg) scale(.25,.125);transform-origin:0 50%}.search-btn[_ngcontent-%COMP%]:before, .search-btn[_ngcontent-%COMP%]:after{content:"";display:block;opacity:0;position:absolute}.search-btn[_ngcontent-%COMP%]:before{border-radius:50%;box-shadow:0 0 0 .2em #f1f1f1 inset;top:.75em;left:.75em;width:1.2em;height:1.2em}.search-btn[_ngcontent-%COMP%]:after{background:#f1f1f1;border-radius:0 .25em .25em 0;top:51%;left:51%;width:.75em;height:.25em;transform:translate(.2em) rotate(45deg);transform-origin:0 50%}.search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;overflow:hidden;width:1px;height:1px}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]{background:#2762f3;border-radius:0 .375em .375em 0;transform:scale(1)}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:before, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:after, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:before, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:after{opacity:1}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:hover, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:hover, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid:not(:focus) + .search-btn[_ngcontent-%COMP%]:focus{background:#0c48db}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .search-btn[_ngcontent-%COMP%]:active, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + .search-btn[_ngcontent-%COMP%]:active{transform:translateY(1px)}@media screen and (prefers-color-scheme: dark){body[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{color:#f1f1f1}body[_ngcontent-%COMP%]{background:#171717}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-shadow:0 0 0 .4em #f1f1f1 inset}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{opacity:.5;background:#3d3d3d;box-shadow:0 0 0 .1em #3d3d3d inset}.search-btn[_ngcontent-%COMP%]{background:#f1f1f1}}.text-box[_ngcontent-%COMP%]{margin-left:auto;margin-top:42vh}.btn.animated[_ngcontent-%COMP%]{position:relative;overflow:hidden;display:inline-block;text-transform:uppercase;text-decoration:none;padding:15px 40px;border-radius:100px;transition:all .2s;z-index:1}.btn.animated[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 10px 20px rgba(0,0,0,.2)}.btn.animated[_ngcontent-%COMP%]:active{transform:translateY(-1px);box-shadow:0 5px 10px rgba(0,0,0,.2)}.btn-white.animated[_ngcontent-%COMP%]{color:#777;background-color:#fff}.btn.animated[_ngcontent-%COMP%]:after{content:"";display:inline-block;height:100%;width:0;border-radius:100px;position:absolute;top:0;left:50%;z-index:-1;transition:all .4s ease-out}.btn.animated[_ngcontent-%COMP%]:hover:after{width:100%;left:0;transform:translate(-50%);opacity:0}.btn.animated[_ngcontent-%COMP%]:active:after{width:100%;left:0;transform:translate(-50%);opacity:1;transition:0s}.btn[_ngcontent-%COMP%]{background-color:var(--blue);background-image:linear-gradient(90deg,var(--blue) 0%,var(--lightblue) 74%);border-radius:20px;border:1px solid var(--blue);color:var(--white);cursor:pointer;font-size:.8rem;font-weight:700;letter-spacing:.1rem;padding:.9rem 4rem;text-transform:uppercase;transition:transform 80ms ease-in}.register[_ngcontent-%COMP%]{background-color:var(--blue);background-image:#333;border-radius:20px;border:1px solid var(--blue);color:var(--white);cursor:pointer;font-size:.8rem;font-weight:700;text-transform:uppercase;transition:transform 80ms ease-in}']}),n})()}];let s=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(P),l.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.ez,i.u5,c.Pc,s]}),n})()},7556:(v,d,a)=>{a.d(d,{e:()=>P});var h=a(655),c=a(4004),i=a(262),l=a(5577),m=a(8996),t=a(9751),f=a(5698),_=a(9260),u=(a(3042),a(4650)),p=a(1762),b=a(1205),C=a(529);let P=(()=>{class s{constructor(n,r,e){this.afs=n,this.afAuth=r,this.http=e,this.url="http://webapps.pedromrtaguilera.tech:3000/auth",this.afAuth.authState.subscribe(o=>{o?(this.userData=o,localStorage.setItem("user",JSON.stringify(this.userData)),JSON.parse(localStorage.getItem("user")||"{}")):(localStorage.setItem("user","{}"),JSON.parse(localStorage.getItem("user")||"{}"))})}postLogin(n,r){const e={email:n,pass:r};return console.log("LOG 1",e),this.http.post(`${this.url}/login`,e).pipe((0,c.U)(o=>{if(o&&o.token)return console.log("LOG 2",o),localStorage.setItem("token",o.token),o.token;throw console.log("LOG 3",o),new Error("Error en la solicitud")}),(0,i.K)(o=>{throw console.log("LOG 4"),new Error("Error en la solicitud")}))}postSignUp(n,r){return this.http.post(`${this.url}/signup`,{email:n,pass:r}).pipe((0,c.U)(o=>{if(o&&o.token)return localStorage.setItem("token",o.token),o.token;throw new Error("Error en la solicitud")}),(0,i.K)(o=>{throw new Error("Error en la solicitud")}))}doLogin(n){const{email:r,password:e}=n;return this.postLogin(r,e).pipe((0,l.z)(o=>(0,m.D)(_.Z.auth().signInWithEmailAndPassword(r,e)).pipe((0,l.z)(g=>(0,m.D)(Promise.resolve(o))),(0,i.K)(g=>{throw new Error("Error en la autenticaci\xf3n de Firebase")}))),(0,i.K)(o=>{throw new Error("Error en la autenticaci\xf3n de MongoDB")}))}doLogout(){return new Promise((n,r)=>{this.afAuth.signOut().then(()=>{localStorage.removeItem("user"),n()}).catch(e=>{console.log(e),r()})})}doRegister(n){return new t.y(r=>{this.postSignUp(n.email,n.password).subscribe(e=>{localStorage.setItem("token",e),this.afAuth.createUserWithEmailAndPassword(n.email,n.password).then(o=>{r.next(o),r.complete()}).catch(o=>{r.error(o)})},e=>{r.error(e)})})}isAuthenticated(){return this.afAuth.authState}getUserId(){return(0,h.mG)(this,void 0,void 0,function*(){const n=yield this.afAuth.authState.pipe((0,f.q)(1)).toPromise();return console.log("respues getId",n),n?n.uid:null})}}return s.\u0275fac=function(n){return new(n||s)(u.LFG(p.ST),u.LFG(b.zQ),u.LFG(C.eN))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);