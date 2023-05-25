"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4317],{7556:(A,p,n)=>{n.d(p,{e:()=>v});var d=n(655),s=n(4004),l=n(262),u=n(5577),m=n(8996),t=n(9751),h=n(5698),f=n(9260),c=(n(3042),n(4650)),_=n(1762),E=n(1205),S=n(529);let v=(()=>{class g{constructor(o,r,e){this.afs=o,this.afAuth=r,this.http=e,this.url="http://localhost:3000/auth",this.afAuth.authState.subscribe(i=>{i?(this.userData=i,localStorage.setItem("user",JSON.stringify(this.userData)),JSON.parse(localStorage.getItem("user")||"{}")):(localStorage.setItem("user","{}"),JSON.parse(localStorage.getItem("user")||"{}"))})}postLogin(o,r){const e={email:o,pass:r};return console.log("LOG 1",e),this.http.post(`${this.url}/login`,e).pipe((0,s.U)(i=>{if(i&&i.token)return console.log("LOG 2",i),localStorage.setItem("token",i.token),i.token;throw console.log("LOG 3",i),new Error("Error en la solicitud")}),(0,l.K)(i=>{throw console.log("LOG 4"),new Error("Error en la solicitud")}))}postSignUp(o,r){return this.http.post(`${this.url}/signup`,{email:o,pass:r}).pipe((0,s.U)(i=>{if(i&&i.token)return localStorage.setItem("token",i.token),i.token;throw new Error("Error en la solicitud")}),(0,l.K)(i=>{throw new Error("Error en la solicitud")}))}doLogin(o){const{email:r,password:e}=o;return this.postLogin(r,e).pipe((0,u.z)(i=>(0,m.D)(f.Z.auth().signInWithEmailAndPassword(r,e)).pipe((0,u.z)(a=>(0,m.D)(Promise.resolve(i))),(0,l.K)(a=>{throw new Error("Error en la autenticaci\xf3n de Firebase")}))),(0,l.K)(i=>{throw new Error("Error en la autenticaci\xf3n de MongoDB")}))}doLogout(){return new Promise((o,r)=>{this.afAuth.signOut().then(()=>{localStorage.removeItem("user"),o()}).catch(e=>{console.log(e),r()})})}doRegister(o){return new t.y(r=>{this.postSignUp(o.email,o.password).subscribe(e=>{localStorage.setItem("token",e),this.afAuth.createUserWithEmailAndPassword(o.email,o.password).then(i=>{r.next(i),r.complete()}).catch(i=>{r.error(i)})},e=>{r.error(e)})})}isAuthenticated(){return this.afAuth.authState}getUserId(){return(0,d.mG)(this,void 0,void 0,function*(){const o=yield this.afAuth.authState.pipe((0,h.q)(1)).toPromise();return console.log("respues getId",o),o?o.uid:null})}}return g.\u0275fac=function(o){return new(o||g)(c.LFG(_.ST),c.LFG(E.zQ),c.LFG(S.eN))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},4317:(A,p,n)=>{n.r(p),n.d(p,{SignUpPageModule:()=>P});var d=n(6895),s=n(433),l=n(2078),u=n(4262),m=n(655),t=n(4650),h=n(7556);function f(o,r){if(1&o&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.message," ")}}function U(o,r){if(1&o&&(t.ynx(0),t.YNc(1,f,2,1,"div",12),t.BQk()),2&o){const e=r.$implicit,i=t.oxw(2);let a;t.xp6(1),t.Q6J("ngIf",(null==i.formValidation||null==(a=i.formValidation.get("email"))?null:a.hasError(e.type))&&((null==(a=i.formValidation.get("email"))?null:a.dirty)||(null==(a=i.formValidation.get("email"))?null:a.touched)))}}function c(o,r){if(1&o&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.message," ")}}function _(o,r){if(1&o&&(t.ynx(0),t.YNc(1,c,2,1,"div",12),t.BQk()),2&o){const e=r.$implicit,i=t.oxw(2);let a;t.xp6(1),t.Q6J("ngIf",(null==(a=i.formValidation.get("password"))?null:a.hasError(e.type))&&((null==(a=i.formValidation.get("password"))?null:a.dirty)||(null==(a=i.formValidation.get("password"))?null:a.touched)))}}function E(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.tryRegister(a.formValidation.value))}),t.TgZ(2,"ion-item")(3,"ion-label",4),t._uU(4,"Email: "),t.qZA(),t._UZ(5,"ion-input",5),t.qZA(),t.TgZ(6,"div"),t.YNc(7,U,2,1,"ng-container",6),t.qZA(),t.TgZ(8,"ion-item")(9,"ion-label",4),t._uU(10,"Contrase\xf1a: "),t.qZA(),t._UZ(11,"ion-input",7),t.qZA(),t.TgZ(12,"div"),t.YNc(13,_,2,1,"ng-container",6),t.qZA(),t.TgZ(14,"div",8)(15,"ion-button",9),t._uU(16,"Registrarse"),t.qZA()(),t.TgZ(17,"div",10)(18,"ion-label",11),t._uU(19),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.formValidation),t.xp6(6),t.Q6J("ngForOf",e.formValidationMessages.email),t.xp6(6),t.Q6J("ngForOf",e.formValidationMessages.password),t.xp6(2),t.Q6J("disabled",!e.formValidation.valid),t.xp6(4),t.Oqu(e.errorMessage)}}const v=[{path:"",component:(()=>{class o{constructor(e,i,a,M){this.authService=e,this.formBuilder=i,this.router=a,this.toastController=M,this.errorMessage="",this.formValidationMessages={email:[{type:"required",message:"El email es un campo obligatorio."},{type:"pattern",message:"El formato del email no es correcto."}],password:[{type:"required",message:"La contrase\xf1a es un campo obligatorio."},{type:"minlength",message:"La l\xf3ngitud m\xednima de una contrase\xf1a es 6 caracteres."}]}}ngOnInit(){this.formValidation=this.formBuilder.group({email:new s.NI("",s.kI.compose([s.kI.required,s.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new s.NI("",s.kI.compose([s.kI.minLength(6),s.kI.required]))})}tryRegister(e){this.authService.doRegister(e).subscribe(i=>(0,m.mG)(this,void 0,void 0,function*(){yield this.presentToast(),this.router.navigate(["/trackslist"])}),i=>{this.errorMessage=i.message,console.log(i)})}presentToast(){return(0,m.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"Registro exitoso",duration:2e3})).present()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.e),t.Y36(s.qu),t.Y36(u.F0),t.Y36(l.yF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sign-up"]],decls:8,vars:1,consts:[["slot","start"],["defaultHref","home"],[4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],["position","floating","color","primary"],["type","text","formControlName","email"],[4,"ngFor","ngForOf"],["type","password","formControlName","password"],[1,"div-button-login"],["type","submit","expand","block",1,"ion-text-center",3,"disabled"],[1,"div-label-error"],[1,"error-message"],["class","error-message",4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Sign-up"),t.qZA(),t.TgZ(4,"ion-buttons",0),t._UZ(5,"ion-back-button",1),t.qZA()()(),t.TgZ(6,"ion-content"),t.YNc(7,E,20,5,"div",2),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngIf",i.formValidation))},dependencies:[d.sg,d.O5,s._Y,s.JJ,s.JL,l.oU,l.YG,l.Sm,l.W2,l.Gu,l.pK,l.Ie,l.Q$,l.wd,l.sr,l.j9,l.cs,s.sg,s.u]}),o})()}];let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(v),u.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,s.u5,l.Pc,s.UX,g]}),o})()}}]);