webpackJsonp([1],{IDVr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={name:"Imager",data:function(){return{messageBoxSrc:"static/fukidashi02.png",copyrightFlg:!1}},props:{name:{type:String,default:"りゅーさん"},message:{type:String,default:"リミットブレイク！！！"},copyright:{type:String,default:"Copyright (C) 2010 - 2019 SQUARE ENIX CO., LTD. All Rights Reserved."}},mounted:function(){this.file=document.getElementById("file"),this.result=document.getElementById("result"),this.canvas=this.$el.querySelector("#canvas"),this.ctx=this.canvas.getContext("2d"),this.img=new Image,this.img.src="static/fantasy_ryuukishi.png",this.messageBoxImage=new Image,this.messageBoxImage.src=this.messageBoxSrc,this.canvasDraw()},methods:{onFileChange:function(t){this.fileList=t.target.files||t.dataTransfer.files,this.loadLocalImage(this.fileList[0])},onCursolChange:function(){this.messageBoxImage.src=this.messageBoxSrc,this.canvasDraw()},loadLocalImage:function(t){var e=this;t.type.match("image.*")?(this.reader=new FileReader,this.img=new Image,this.reader.onloadend=function(){e.img.onload=function(){e.canvasDraw()},e.img.src=e.reader.result},this.reader.readAsDataURL(t)):alert("画像を選択してください")},canvasDraw:function(){var t=this,e=new Image;e.onload=function(){t.getSize(e),t.canvas.width=t.imageWidth,t.canvas.height=t.imageHeight,t.ctx.clearRect(0,0,t.imageWidth,t.imageHeight),t.ctx.drawImage(e,0,0,t.imageWidth,t.imageHeight),t.ctx.drawImage(t.messageBoxImage,t.messageBoxPosition.x,t.messageBoxPosition.y,t.messageBoxPosition.w,t.messageBoxPosition.h),t.addText(),t.addCopyright()},e.src=this.img.src},getSize:function(t){var e=t.naturalWidth/t.naturalHeight;this.imageWidth=t.naturalWidth,this.imageHeight=this.imageWidth/e,this.messageBoxPosition={x:this.imageWidth/2-.2*this.imageHeight*(657/158)/2,y:this.imageHeight*(715/900),w:.2*this.imageHeight*(657/158),h:.2*this.imageHeight},this.messageBoxPosition.w>this.imageWidth&&(this.messageBoxPosition.x=.05*this.imageWidth,this.messageBoxPosition.w=.9*this.imageWidth),this.namePosition={x:this.messageBoxPosition.x+.08*this.messageBoxPosition.w,y:this.imageHeight*(737/900),size:Math.round(.021*this.imageHeight)},this.messagePosition={x:this.namePosition.x,y:this.imageHeight*(777/900),size:this.namePosition.size}},addText:function(){var t=this.namePosition.size+"px",e=this.messagePosition.size+"px";this.ctx.textAlign="left",this.ctx.textBaseline="middle",this.ctx.fillStyle="#FFFFFF",this.ctx.font="normal "+t+" 'Noto Sans JP'",this.ctx.fillText(this.name,this.namePosition.x,this.namePosition.y),this.ctx.fillStyle="#000000",this.ctx.font="normal "+e+" 'Noto Sans JP'";for(var i=this.message.split("\n"),s=0,a=i.length;a>s;s++){var n=i[s],o=0;s&&(o+=1.4*this.namePosition.size*s),this.ctx.fillText(n,this.messagePosition.x,this.messagePosition.y+o)}},addCopyright:function(){if(this.copyrightFlg){var t=this.imageHeight*(10/900)+"px";this.ctx.textAlign="left",this.ctx.textBaseline="middle",this.ctx.fillStyle="#000000",this.ctx.font="normal "+t+" 'Noto Sans JP'",this.ctx.fillText(this.copyright,11,.99*this.imageHeight+1),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(this.copyright,10,.99*this.imageHeight)}},download:function(){var t=document.getElementById("canvas").toDataURL(),e=this.base64toBlob(t),i=document.getElementById("downloadButton"),s="xivserif_"+(new Date).getTime()+".png";i.href=window.URL.createObjectURL(e),i.download=s},base64toBlob:function(t){for(var e=t.split(","),i=atob(e[1]),s=e[0].split(":")[1].split(";")[0],a=new Uint8Array(i.length),n=0;n<i.length;n++)a[n]=i.charCodeAt(n);return new Blob([a],{type:s})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"imager"},[t._m(0),i("h2",[t._v("設定するところ")]),i("div",{staticClass:"setting"},[i("div",{staticClass:"upload"},[i("p",[i("span",{staticClass:"inputName"},[t._v("画像：")]),i("input",{staticClass:"inputArea -image",attrs:{type:"file",name:"file",id:"file"},on:{change:t.onFileChange}})])]),i("hr"),i("div",{staticClass:"name"},[i("p",[i("span",{staticClass:"inputName"},[t._v("キャラクター名：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"inputArea -text",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{change:t.canvasDraw,input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),i("hr"),i("div",{staticClass:"message"},[i("p",[i("span",{staticClass:"inputName"},[t._v("セリフ：")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"inputArea -text",attrs:{name:"message",rows:"3"},domProps:{value:t.message},on:{change:t.canvasDraw,input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),i("hr"),i("div",{staticClass:"cursol"},[i("p",[i("span",{staticClass:"inputName"},[t._v("カーソル：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.messageBoxSrc,expression:"messageBoxSrc"}],staticClass:"inputArea",attrs:{type:"checkbox",name:"cursol","true-value":"static/fukidashi02.png","false-value":"static/fukidashi01.png"},domProps:{checked:Array.isArray(t.messageBoxSrc)?t._i(t.messageBoxSrc,null)>-1:t._q(t.messageBoxSrc,"static/fukidashi02.png")},on:{change:[function(e){var i=t.messageBoxSrc,s=e.target,a=s.checked?"static/fukidashi02.png":"static/fukidashi01.png";if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&(t.messageBoxSrc=i.concat([null])):n>-1&&(t.messageBoxSrc=i.slice(0,n).concat(i.slice(n+1)))}else t.messageBoxSrc=a},t.onCursolChange]}})])]),i("hr"),i("div",{staticClass:"copyright"},[i("p",[i("span",{staticClass:"inputName"},[t._v("コピーライト：")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyright,expression:"copyright"}],staticClass:"inputArea -text",attrs:{name:"copyright"},domProps:{value:t.copyright},on:{change:t.canvasDraw,input:function(e){e.target.composing||(t.copyright=e.target.value)}}})]),i("p",[i("span",{staticClass:"inputName"},[t._v("ON/OFF：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.copyrightFlg,expression:"copyrightFlg"}],staticClass:"inputArea",attrs:{type:"checkbox",name:"cursol"},domProps:{checked:Array.isArray(t.copyrightFlg)?t._i(t.copyrightFlg,null)>-1:t.copyrightFlg},on:{change:[function(e){var i=t.copyrightFlg,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);s.checked?n<0&&(t.copyrightFlg=i.concat([null])):n>-1&&(t.copyrightFlg=i.slice(0,n).concat(i.slice(n+1)))}else t.copyrightFlg=a},t.onCursolChange]}})])])]),t._m(1),i("div",{attrs:{id:"result"}}),i("h2",[t._v("できあがり")]),i("canvas",{staticClass:"canvas",attrs:{id:"canvas"}}),i("div",{staticClass:"download"},[i("a",{staticClass:"button",attrs:{id:"downloadButton"},on:{click:t.download}},[t._v("ダウンロードボタン")])]),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("h1",[this._v("FFXIV セリフジェネレーター")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-display"},[e("img",{attrs:{src:"static/fukidashi01.png"}}),e("img",{attrs:{src:"static/fukidashi02.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("hr"),e("p",[this._v("フキダシ素材は xxxxx よりお借りいたしました。")]),e("p",[this._v("記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。"),e("br"),this._v("Copyright (C) 2010 - 2019 SQUARE ENIX CO., LTD. All Rights Reserved.")]),e("p",[this._v("ご意見ご要望は"),e("a",{attrs:{href:"https://twitter.com/kid_nanarya/"}},[this._v("@kid_nanarya")]),this._v("まで")])])}]};var o={name:"App",components:{Imager:i("VU/8")(a,n,!1,function(t){i("IDVr")},"data-v-65cbd1c6",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Imager")],1)},staticRenderFns:[]};var c=i("VU/8")(o,r,!1,function(t){i("qiH6")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:c},template:"<App/>"})},qiH6:function(t,e){}},["NHnr"]);