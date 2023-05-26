"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8105],{8105:(z,h,s)=>{s.r(h),s.d(h,{DetailsPageModule:()=>F});var d=s(6895),m=s(433),a=s(2078),u=s(4262),x=s(655),t=s(4650),Z=s(7042),P=s(7556),M=s(7098),b=s(529),v=s(262),T=s(2843);const y={headers:new b.WM({Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"})};let D=(()=>{class o{constructor(n){this.http=n,this.url="http://webapps.pedromrtaguilera.tech:3000/tracks"}sendComment(n,e,i,r,l,g,_,p){return this.http.post(`${this.url}/${r}`,{author:n,comment:e,rating:i,userId:l,longitude:g,latitude:_,accuracy:p}).subscribe({next:f=>{console.log("Respuesta del servidor:",f)},error:f=>{console.log("Error en la petici\xf3n:",f)}})}deleteCommentById(n,e){return this.http.delete(`${this.url}/${encodeURI(n)}/${encodeURI(e)}`,y).pipe((0,v.K)(i=>{let r="Error desconocido";return 404===i.status?r="No se encontr\xf3 el elemento solicitado":500===i.status&&(r="Error interno del servidor"),(0,T._)(r)}))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(b.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=s(5705);function A(o,c){if(1&o&&(t.ynx(0),t._UZ(1,"img",19),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("src",n.information.href,t.LSH)}}function O(o,c){if(1&o&&t._UZ(0,"img",19),2&o){const n=t.oxw(2);t.Q6J("src",n.information.image,t.LSH)}}function k(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"ion-button",20),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.goToEdit(i.information._id))}),t._uU(1," Edit "),t.qZA()}}function U(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"ion-button",21),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.openSpotify())}),t._UZ(1,"ion-icon",22),t._uU(2," Open in Spotify "),t.qZA()}}function w(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",23),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.cancel())}),t._uU(4,"Cancel"),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6,"Comment"),t.qZA(),t.TgZ(7,"ion-buttons",24)(8,"ion-button",25),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.confirm())}),t._uU(9,"Confirm"),t.qZA()()()(),t.TgZ(10,"ion-content",26)(11,"ion-item")(12,"ion-label",27),t._uU(13,"Enter your name:"),t.qZA(),t.TgZ(14,"ion-input",28),t.NdJ("ngModelChange",function(i){t.CHM(n);const r=t.oxw(2);return t.KtG(r.author=i)}),t.qZA()(),t.TgZ(15,"ion-item")(16,"ion-label",27),t._uU(17,"Enter your comment:"),t.qZA(),t.TgZ(18,"ion-textarea",29),t.NdJ("ngModelChange",function(i){t.CHM(n);const r=t.oxw(2);return t.KtG(r.comment=i)}),t.qZA()(),t.TgZ(19,"ion-item")(20,"ion-label"),t._uU(21,"Rating: "),t.qZA(),t.TgZ(22,"ion-rating-stars",30),t.NdJ("ratingChange",function(i){t.CHM(n);const r=t.oxw(2);return t.KtG(r.ratingChanged(i))}),t.qZA()()()}if(2&o){const n=t.oxw(2);t.xp6(8),t.Q6J("strong",!0),t.xp6(6),t.Q6J("ngModel",n.author),t.xp6(4),t.Q6J("autoGrow",!0)("ngModel",n.comment)("counter",!0),t.xp6(4),t.Q6J("rating",0)("color","darkgrey")("filledColor","orange")("margin",2)("size",20)("disabled",!1)("opacity",.5)}}function I(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-card-subtitle"),t._uU(5),t.qZA()(),t.TgZ(6,"ion-card-content",5),t.YNc(7,A,2,1,"ng-container",6),t.YNc(8,O,1,1,"ng-template",null,7,t.W1O),t.TgZ(10,"ion-item",8),t._UZ(11,"ion-icon",9),t.TgZ(12,"ion-label"),t._uU(13),t.qZA()(),t.TgZ(14,"ion-item",8),t._UZ(15,"ion-icon",10),t.TgZ(16,"ion-label"),t._uU(17),t.ALo(18,"date"),t.qZA()(),t.TgZ(19,"ion-item",8),t._UZ(20,"ion-icon",11),t.TgZ(21,"ion-label"),t._uU(22),t.qZA()(),t.TgZ(23,"ion-item",8),t._UZ(24,"ion-icon",12),t.TgZ(25,"ion-label",13),t._uU(26),t.qZA()(),t.TgZ(27,"ion-item",8),t._UZ(28,"ion-icon",14),t.TgZ(29,"ion-label",13),t._uU(30),t.qZA()(),t.YNc(31,k,2,0,"ion-button",15),t.YNc(32,U,3,0,"ion-button",16),t.TgZ(33,"ion-button",17),t._uU(34,"Add comment"),t.qZA(),t.TgZ(35,"p"),t._uU(36),t.qZA(),t.TgZ(37,"ion-modal",18),t.NdJ("willDismiss",function(i){t.CHM(n);const r=t.oxw();return t.KtG(r.onWillDismiss(i))})("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.takePosition())}),t.YNc(38,w,23,12,"ng-template"),t.qZA()()()}if(2&o){const n=t.MAs(9),e=t.oxw();t.xp6(3),t.hij(" ",e.information.name," "),t.xp6(2),t.hij(" ",e.information.artist," "),t.xp6(2),t.Q6J("ngIf",e.information.href)("ngIfElse",n),t.xp6(6),t.Oqu(e.information.genres),t.xp6(4),t.Oqu(t.xi3(18,15,e.information.releaseDate,"dd/MM/yyyy")),t.xp6(5),t.Oqu(e.information.album),t.xp6(4),t.hij(" ",e.convertDuration(e.information.duration),""),t.xp6(4),t.HOy("",e.information.coords.type,": (",e.information.coords.coordinates[0],",",e.information.coords.coordinates[1],") Accuracy: ",e.information.coords.coordinates[2]," "),t.xp6(1),t.Q6J("ngIf",e.auth&&e.userId===e.information.userId),t.xp6(1),t.Q6J("ngIf",e.information.uri&&""!=e.information.uri),t.xp6(4),t.Oqu(e.message)}}function J(o,c){1&o&&t._UZ(0,"ion-icon",43)}function S(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"button",44),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,r=t.oxw(3);return t.KtG(r.presentAlertConfirm(r.information._id,i._id))}),t._UZ(1,"ion-icon",45),t.qZA()}}function N(o,c){if(1&o&&(t.TgZ(0,"article",34)(1,"a",35),t._UZ(2,"img",36),t.YNc(3,J,1,0,"ion-icon",37),t.YNc(4,S,2,0,"button",38),t.qZA(),t.TgZ(5,"div",39)(6,"div",40)(7,"p"),t._uU(8),t.qZA()(),t._UZ(9,"ion-rating-stars",41),t.TgZ(10,"p",42),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"p",42),t._uU(14),t.qZA()()()),2&o){const n=c.$implicit,e=t.oxw(3);t.xp6(3),t.Q6J("ngIf",n.userId),t.xp6(1),t.Q6J("ngIf",e.auth&&e.userId===n.userId||e.auth&&!n.userId),t.xp6(4),t.Oqu(n.comment),t.xp6(1),t.Q6J("rating",n.rating)("disabled",!0),t.xp6(2),t.AsE("by ",n.author," at ",t.xi3(12,10,n.createdOn,"dd/MM/yyyy hh:mm:ss a"),""),t.xp6(3),t.lnq("Point: (",n.coords.coordinates[0],", ",n.coords.coordinates[1],"). Accuracy: ",n.coords.coordinates[2],"")}}function q(o,c){if(1&o&&(t.ynx(0),t.YNc(1,N,15,13,"article",33),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.information.comments)}}function Y(o,c){1&o&&(t.TgZ(0,"p",46),t._uU(1,"No comments"),t.qZA())}function Q(o,c){if(1&o&&(t.TgZ(0,"section",31),t.YNc(1,q,2,1,"ng-container",6),t.YNc(2,Y,2,0,"ng-template",null,32,t.W1O),t.qZA()),2&o){const n=t.MAs(3),e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.information.comments.length>0)("ngIfElse",n)}}const E=[{path:"",component:(()=>{class o{constructor(n,e,i,r,l,g,_,p){this.modalController=n,this.geolocationService=e,this.alertController=i,this.authService=r,this.router=l,this.activatedRoute=g,this.tracksService=_,this.commentService=p,this.information=null,this.auth=!1,this.userId="",this.rating=0,this.latitude=void 0,this.longitude=void 0,this.accuracy=void 0,this.ratingChang=new t.vpe}ngOnInit(){let n=(this.activatedRoute.snapshot.paramMap.get("id")||"").toString();this.tracksService.getDetails(n).subscribe(e=>{this.information=e,this.authService.isAuthenticated().subscribe(i=>{i?(this.userId=i.uid,this.auth=!0):this.auth=!1})})}takePosition(){console.log("Pido ubicacion"),this.geolocationService.getPosition().then(n=>{console.log("Positions: ",n),this.latitude=n.coords.latitude,this.longitude=n.coords.longitude,this.accuracy=n.coords.accuracy}).catch(n=>console.error(n))}ratingChanged(n){this.rating=n,this.ratingChang.emit(n)}convertDuration(n){const e=Math.floor(n/6e4),i=(n%6e4/1e3).toFixed(0);return e+":"+(parseInt(i)<10?"0":"")+i}cancel(){this.modal.dismiss(null,"cancel")}confirm(){return(0,x.mG)(this,void 0,void 0,function*(){this.author&&this.comment?(this.sendComment(),this.modalController.dismiss().then(()=>{window.location.reload()})):(yield this.alertController.create({header:"Missing fields",message:"Please fill in all fields before submitting your comment.",buttons:["OK"]})).present()})}onWillDismiss(n){"confirm"===n.detail.role&&(this.message=`Added comment, ${n.detail.data}!`,location.reload())}openSpotify(){window.open(this.information.uri)}sendComment(){var n,e,i,r,l,g;console.log("posi: ",(null===(n=this.longitude)||void 0===n?void 0:n.toString())||"",(null===(e=this.latitude)||void 0===e?void 0:e.toString())||"",(null===(i=this.accuracy)||void 0===i?void 0:i.toString())||""),this.commentService.sendComment(this.author||"",this.comment||"",this.rating,this.information._id,this.userId,(null===(r=this.longitude)||void 0===r?void 0:r.toString())||"",(null===(l=this.latitude)||void 0===l?void 0:l.toString())||"",(null===(g=this.accuracy)||void 0===g?void 0:g.toString())||"")}goToEdit(n){this.router.navigate(["/edit",n])}presentAlertConfirm(n,e){return(0,x.mG)(this,void 0,void 0,function*(){console.log("uid track:",n,"uid comment",e),yield(yield this.alertController.create({header:"Are you sure?",message:"Do you want to delete the comment?",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:r=>{}},{text:"Delete",cssClass:"danger",handler:()=>{this.deleteComment(n,e)}}]})).present()})}deleteComment(n,e){this.commentService.deleteCommentById(n,e).subscribe(i=>{console.log("OK"===i?"Comment deleted Successfully":"Error deleting comment"),location.reload()})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.IN),t.Y36(Z._),t.Y36(a.Br),t.Y36(P.e),t.Y36(u.F0),t.Y36(u.gz),t.Y36(M.X),t.Y36(D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details"]],viewQuery:function(n,e){if(1&n&&t.Gf(a.ki,5),2&n){let i;t.iGM(i=t.CRH())&&(e.modal=i.first)}},decls:14,vars:2,consts:[["slot","start"],["defaultHref","trackslist"],["padding",""],[4,"ngIf"],["class","comments",4,"ngIf"],["text-center",""],[4,"ngIf","ngIfElse"],["showImage",""],["lines","none"],["name","musical-note-outline","slot","start"],["name","cloud-upload-outline","slot","start"],["name","albums-outline","slot","start"],["name","time-outline","slot","start"],["text-wrap",""],["name","clipboard","slot","start"],["expand","block","color","warning",3,"click",4,"ngIf"],["color","success","expand","block",3,"click",4,"ngIf"],["id","open-modal","expand","block"],["trigger","open-modal",3,"willDismiss","click"],[1,"info-img",3,"src"],["expand","block","color","warning",3,"click"],["color","success","expand","block",3,"click"],["name","open","slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["position","stacked"],["type","text","placeholder","Your name",3,"ngModel","ngModelChange"],["placeholder","Write your comment here!","maxlength","1000",3,"autoGrow","ngModel","counter","ngModelChange"],[3,"rating","color","filledColor","margin","size","disabled","opacity","ratingChange"],[1,"comments"],["noComments",""],["class","comment",4,"ngFor","ngForOf"],[1,"comment"],[1,"comment-img"],["src","/assets/imgs/avatar.png","alt","","width","50","height","50"],["class","icon2","name","accessibility-outline","title","Registered user",4,"ngIf"],["ion-button","","class","icon-only-button","title","Delete",3,"click",4,"ngIf"],[1,"comment-body"],[1,"text"],[3,"rating","disabled"],[1,"attribution"],["name","accessibility-outline","title","Registered user",1,"icon2"],["ion-button","","title","Delete",1,"icon-only-button",3,"click"],["name","trash-outline",1,"icon"],[2,"margin-left","80px"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Details"),t.qZA()()(),t.TgZ(6,"ion-content",2),t.YNc(7,I,39,18,"ion-card",3),t.TgZ(8,"ion-item")(9,"ion-label")(10,"h1"),t._uU(11,"Comments"),t.qZA()()(),t.YNc(12,Q,4,2,"section",4),t._uU(13," \u200b "),t.qZA()),2&n&&(t.xp6(7),t.Q6J("ngIf",e.information),t.xp6(5),t.Q6J("ngIf",null==e.information?null:e.information.comments))},dependencies:[d.sg,d.O5,m.JJ,m.nD,m.On,a.oU,a.YG,a.Sm,a.PM,a.FN,a.Zi,a.tO,a.Dq,a.W2,a.Gu,a.gu,a.pK,a.Ie,a.Q$,a.g2,a.wd,a.sr,a.ki,a.j9,a.cs,C.Oo,d.uU],styles:['.info-img[_ngcontent-%COMP%]{max-height:80vh;object-fit:contain;padding:10px}body[_ngcontent-%COMP%]{width:500px;margin:20px auto;font:16px/1.4 Arial,sans-serif;background:#f3eee9}p[_ngcontent-%COMP%]{margin:0 0 1em}.comment[_ngcontent-%COMP%]{overflow:hidden;padding:0 0 1em;border-bottom:1px solid #ddd;margin:0 0 1em;zoom:1}.comment-img[_ngcontent-%COMP%]{float:left;margin-right:33px;border-radius:5px;overflow:hidden}.comment-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.comment-body[_ngcontent-%COMP%]{overflow:hidden}.comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding:10px;border:1px solid #ffffff;border-radius:5px;background:#ffffff}.comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin:0}.comment[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%]{margin:.5em 0 0;font-size:14px;color:#666}.comments[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]{position:relative;margin-top:30px}.comments[_ngcontent-%COMP%]:before, .comment[_ngcontent-%COMP%]:before, .comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:65px}.comments[_ngcontent-%COMP%]:before{width:3px;top:-20px;bottom:-20px;background:rgba(0,0,0,.1)}.comment[_ngcontent-%COMP%]:before{width:9px;height:9px;border:3px solid #fff;border-radius:100px;margin:16px 0 0 -6px;box-shadow:0 1px 1px rgba(0,0,0,.2),inset 0 1px 1px rgba(0,0,0,.1);background:#ccc}.comment[_ngcontent-%COMP%]:hover:before{background:orange}.comment[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:before{top:18px;left:78px;width:9px;height:9px;border-width:0 0 1px 1px;border-style:solid;border-color:#e5e5e5;background:#fff;transform:rotate(45deg)}.icon[_ngcontent-%COMP%]{color:red;margin-left:5px;margin-top:17px;font-size:24px}.icon2[_ngcontent-%COMP%]{color:#000;margin-left:5px;margin-top:17px;font-size:24px}.icon-only-button[_ngcontent-%COMP%]{background:transparent}']}),o})()}];let G=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(E),u.Bz]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,m.u5,a.Pc,G,C.Fc]}),o})()}}]);