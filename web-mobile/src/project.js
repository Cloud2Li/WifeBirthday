window.__require=function t(e,o,n){function i(a,s){if(!o[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!s&&l)return l(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+a+"'")}}var u=o[a]={exports:{}};e[a][0].call(u.exports,function(t){return i(e[a][1][t]||t)},u,u.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({BaseStage:[function(t,e,o){"use strict";cc._RF.push(e,"3e8d2mGh7xHGYppwoM+N7Ex","BaseStage");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(){function t(){}return t.prototype.play=function(){console.log("------------PanelBase play",this.pid,this.state);Number(this.bone.name);var t=this.bone.getComponent(dragonBones.ArmatureDisplay);t.removeEventListener(dragonBones.EventObject.COMPLETE),"wait"==this.state?t.playAnimation(this.state+this.id+"_"+this.pid,0):"pass"==this.state?(this.aniexc>0?t.playAnimation(this.state+this.id+"_"+this.pid+"_"+this.enter+"_"+this.exit+"_"+this.aniexc,1):t.playAnimation(this.state+this.id+"_"+this.pid+"_"+this.enter+"_"+this.exit,1),t.addEventListener(dragonBones.EventObject.COMPLETE,this.passEnded)):"lock"==this.state&&(t.playAnimation(this.state+this.id+"_"+this.pid+"_"+this.enter,1),t.addEventListener(dragonBones.EventObject.COMPLETE,this.lockEnded))},t}()),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("base onload"),this._panellist=new Array(this._consider.length),this._panelsort=new Array,this._panel_init_sort=new Array,this._panel_x=new Array,this._panel_y=new Array;for(var t=1;t<=this._consider.length;t++)this._panelsort.push(t),this._panel_init_sort.push(t);helper.event.on("play",this.begin,this),helper.event.on("right",this.right,this),this.onUILoaded()},e.prototype.onUILoaded=function(){this._view=fgui.UIPackage.createObject("Stage"+this.id,"Stage"+this.id).asCom,this._view.makeFullScreen(),fgui.GRoot.inst.addChild(this._view),this._view.setPosition(0,0);for(var t=1;t<=this.num;t++)this._panel_x.push(this._view.getChild("panel"+t).x),this._panel_y.push(this._view.getChild("panel"+t).y);for(var e=1;e<=this._dragable.length;e++)this._dragable[e-1]&&(this._view.getChild("panel"+e).asCom.draggable=!0,this._view.getChild("panel"+e).asCom.on(fgui.Event.DRAG_START,this.onDragStart,this),this._view.getChild("panel"+e).asCom.on(fgui.Event.DROP,this.onDrop,this));this.initPanel()},e.prototype.start=function(){},e.prototype.onDragStart=function(t){var e=this;console.log("--------------onDrag-------------");var o=fgui.GObject.cast(t.currentTarget),n=Number(o.name.split("l")[1]);o.stopDrag(),o.visible=!1,fgui.DragDropManager.inst.startDrag(o,function(t){e._panellist[n-1].bone.parent=t.node},n),fgui.DragDropManager.inst.dragAgent.on(fgui.Event.DRAG_END,function(){o.visible=!0,e._panellist[n-1].bone.parent=o.node})},e.prototype.onDrop=function(t,e){if(this._view.getChild("panel"+e).visible=!0,void 0!=t){var o=Number(t.name.split("l")[1]);console.log(e,o),o!=e&&this.switch(e,o)}},e.prototype.initPanel=function(){console.log("------------initPanel-------------");for(var t=0;t<this.num;t++)this.createBone("chapter"+this.id+"s",this._armatureName,""+(t+1),this.onBoneLoaded.bind(this))},e.prototype.createBone=function(t,e,o,n){console.log(t),helper.AniHelper.createDB("stage/stage"+this.id+"/bone",t,t,o,e,n)},e.prototype.onBoneLoaded=function(t){console.log("----------------onBoneLoaded--------------");var e=Number(t.name),o=this._view.getChild("panel"+e);o.node.addChild(t),t.setPosition(o.width/2,-o.height/2);var n=new s;n.id=this.id,n.pid=e,n.state="wait",n.lockEnded=this.lockEnded.bind(this),n.passEnded=this.passEnded.bind(this),n.bone=t,this._panellist[e-1]=n,this._no_wait&&(n.state="pass",n.enter=1,n.exit=1),n.play(),this._curidx=this._curidx+1,this._curidx>=this.num&&(this._view.getChild("mask").asCom.touchable=!1)},e.prototype.passEnded=function(t){this._curidx=this._curidx+1,this.play()},e.prototype.lockEnded=function(t){this.stop()},e.prototype.switch=function(t,e){for(var o=0;o<this._panelsort.length;o++)this._panelsort[o]==t?this._panelsort[o]=e:this._panelsort[o]==e&&(this._panelsort[o]=t);var n=this._view.getChild("panel"+t),i=this._view.getChild("panel"+e),r=n.x,a=n.y;n.setPosition(i.x,i.y),i.setPosition(r,a)},e.prototype.move=function(t,e){this._view.getChild("panel"+t).setPosition(this._panel_x[e],this._panel_y[e])},e.prototype.begin=function(){console.log("-------------begin---------------"),this.stop(),this.excute(),this.play(),this._view.getChild("mask").asCom.touchable=!0},e.prototype.stop=function(){this._curidx=0,this.reset(),this._view.getChild("mask").asCom.touchable=!1},e.prototype.reset=function(){this._panellist.forEach(function(t){t.state="wait",t.aniexc=0,t.play()})},e.prototype.sort=function(t){void 0===t&&(t=this._panel_init_sort),this.reset(),this.sortPanel(t)},e.prototype.right=function(){this.sort(this._panel_right_sort),this.begin()},e.prototype.sortPanel=function(t){var e=this;t.forEach(function(t,o){e._panelsort[o]=t,e.move(t,o)})},e.prototype.play=function(){if(this._curidx>=this._panellist.length)return this._no_wait||this.stop(),void helper.event.emit("next_stage");this._panellist[this._panelsort[this._curidx]-1].play()},e.prototype.excute=function(){for(var t=this,e=1,o=new Array,n=0;n<this._conditionnum;n++)o.push(!1);this._panelsort.forEach(function(n){var i=t._panellist[n-1];if(i.enter=e,i.exit=0,i.aniexc=0,0==t._consider[n-1].length)i.exit=1;else{console.log(n,t._consider[n-1][i.enter-1]),i.enter>t._consider[n-1].length&&(i.enter=1);for(var r=0;r<t._consider[n-1][i.enter-1].length;r++){if(0==i.exit)(a=t._consider[n-1][i.enter-1][r]).condition?a.condition.forEach(function(t){o[t]&&(i.exit=r+1)}):i.exit=r+1}var a;if(i.exit>0)(a=t._consider[n-1][i.enter-1][i.exit-1]).event&&a.event.forEach(function(t){if(console.log("-----event",n,t.condition,t.ani),t.condition){var e=!0;t.condition.forEach(function(t){o[t]||(e=!1)}),e&&(o[t.id]=!0,t.ani&&(i.aniexc=t.ani))}else o[t.id]=!0,t.ani&&(i.aniexc=t.ani)})}0!=i.exit?(i.state="pass",e=i.exit):i.state="lock"})},e.prototype.onDisable=function(){helper.event.off("play",this.begin,this),helper.event.off("right",this.right,this),this._view.removeFromParent()},e=i([a],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],Book:[function(t,e,o){"use strict";cc._RF.push(e,"caaf6bYUN5FvaqYedo1XrlM","Book");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onEnable=function(){console.log("---------onEnable------------"),this.getChild("mail").onClick(this.onMail,this)},e.prototype.onMail=function(){console.log("---------onMail------------"),this.getChild("mail").asLoader.url="ui://Book/mail",this._view=fgui.UIPackage.createObject("Book","Mail").asCom,this._view.makeFullScreen(),this._view.name="Mail",fgui.GRoot.inst.addChild(this._view),this._view.getChild("btn_play").onClick(this.onGong,this),this._view.getChild("btn_play2").onClick(this.onNei,this)},e.prototype.hideTxt=function(){this._view.getChild("btn_play").removeFromParent(),this._view.getChild("btn_play2").removeFromParent(),this._view.getChild("nei").removeFromParent(),this._view.getChild("gong").removeFromParent(),this._view.getChild("code").removeFromParent()},e.prototype.onGong=function(){this.hideTxt(),this._view.getChild("page1").asList.addItemFromPool("ui://Book/txt1")},e.prototype.onNei=function(){"yudi1003"==this._view.getChild("code").text?(this.hideTxt(),this._view.getChild("page1").asList.addItemFromPool("ui://Book/txt2")):this.onGong()},e=i([a],e)}(fgui.GComponent));o.default=s,cc._RF.pop()},{}],CommonBG:[function(t,e,o){"use strict";cc._RF.push(e,"b96daHXk0RNm6zCG5LSCTqT","CommonBG");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onEnable=function(){console.log("---------onEnable------------"),this.getChild("BtnPlay").onClick(this.onPlay,this),this.getChild("BtnTips").onClick(this.onRight,this)},e.prototype.onPlay=function(){console.log("---------onPlay------------"),helper.event.emit("play")},e.prototype.onRight=function(){helper.event.emit("right")},e=i([a],e)}(fgui.GComponent));o.default=s,cc._RF.pop()},{}],LoadScene:[function(t,e,o){"use strict";cc._RF.push(e,"04c34KaJU1MoawoiS7D3Znj","LoadScene");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onEnable=function(){console.log("---------onEnable------------"),this.num=0,this.getChild("bar").asProgress.value=this.num,fgui.UIPackage.loadPackage("ui/CommonUI",this.onPackLoaded.bind(this,"\u901a\u7528\u6a21\u5757","ui/CommonUI")),fgui.UIPackage.loadPackage("ui/MainScene",this.onPackLoaded.bind(this,"\u4e3b\u754c\u9762","ui/MainScene")),fgui.UIPackage.loadPackage("ui/Stage1",this.onPackLoaded.bind(this,"\u7b2c\u4e00\u5173","ui/Stage1")),fgui.UIPackage.loadPackage("ui/Stage2",this.onPackLoaded.bind(this,"\u7b2c\u4e8c\u5173","ui/Stage2")),fgui.UIPackage.loadPackage("ui/Stage3",this.onPackLoaded.bind(this,"\u7b2c\u4e09\u5173","ui/Stage3")),fgui.UIPackage.loadPackage("ui/Stage4",this.onPackLoaded.bind(this,"\u7b2c\u56db\u5173","ui/Stage4")),fgui.UIPackage.loadPackage("ui/Stage5",this.onPackLoaded.bind(this,"\u7b2c\u4e94\u5173","ui/Stage5")),fgui.UIPackage.loadPackage("ui/Book",this.onPackLoaded.bind(this,"\u4fe1","ui/Book"));for(var t=1;t<=5;t++)this.loadBone("chapter"+t+"s","chapter"+t+"s",t,this.onBoneLoaded.bind(this))},e.prototype.loadBone=function(t,e,o,n){helper.AniHelper.loadDB("stage/stage"+o+"/bone",t,t,""+o,n)},e.prototype.onPackLoaded=function(t,e){this.num=this.num+1,this.getChild("bar").asProgress.value=this.num,this.getChild("txt").asLabel.text=t+"\u52a0\u8f7d\u5b8c\u6210",fgui.UIPackage.addPackage(e),this.num>=13&&this.loaded()},e.prototype.onBoneLoaded=function(t){this.num=this.num+1,this.getChild("bar").asProgress.value=this.num,this.getChild("txt").asLabel.text="\u7b2c"+t+"\u5173\u52a8\u753b\u52a0\u8f7d\u5b8c\u6210",this.num>=13&&this.loaded()},e.prototype.loaded=function(){helper.event.emit("call")},e=i([a],e)}(fgui.GComponent));o.default=s,cc._RF.pop()},{}],Main:[function(t,e,o){"use strict";cc._RF.push(e,"22b72EPu2VC/43NBbS/eLJl","Main");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./Common/CommonBG")),c=t("./Stage/StageManager"),l=t("./Load/LoadScene"),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){cc.debug.setDisplayStats(!1),fgui.addLoadHandler(),fgui.GRoot.create(),fgui.UIPackage.loadPackage("ui/Load",this.onLoadLoaded.bind(this))},e.prototype.start=function(){},e.prototype.onLoadLoaded=function(){fgui.UIPackage.addPackage("ui/Load"),fgui.UIObjectFactory.setPackageItemExtension("ui://Load/LoadScene",l.default),this._load=fgui.UIPackage.createObject("Load","LoadScene").asCom,this._load.makeFullScreen(),this._load.name="LoadScene",fgui.GRoot.inst.addChild(this._load),helper.event.on("call",this.onMain,this)},e.prototype.onMain=function(){this._main=fgui.UIPackage.createObject("MainScene","MainScene").asCom,this._main.makeFullScreen(),this._main.name="MainScene",fgui.GRoot.inst.addChild(this._main),this._main.getChild("btn_start").onClick(this.onStart,this)},e.prototype.onStart=function(){this._main.removeFromParent(),fgui.UIObjectFactory.setPackageItemExtension("ui://CommonUI/CommonBG",s.default),this._view=fgui.UIPackage.createObject("CommonUI","CommonBG").asCom,this._view.makeFullScreen(),this._view.name="CommonBG",fgui.GRoot.inst.addChild(this._view),this.addComponent(c.default)},e=i([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./Common/CommonBG":"CommonBG","./Load/LoadScene":"LoadScene","./Stage/StageManager":"StageManager"}],Stage1:[function(t,e,o){"use strict";cc._RF.push(e,"d6598aZ7LpMjI1OE5UtDrLr","Stage1");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./BaseStage")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("1 onload"),this.id=1,this.num=4,this._curidx=0,this._conditionnum=1,this._panel_right_sort=[1,3,2,4],this._dragable=[!1,!0,!0,!1],this._armatureName="chapter1s",this._no_wait=!1,this._consider=[[],[[{condition:[0]}]],[[{event:[{id:0}]}]],[]],s.default.prototype.onLoad.apply(this),console.log("----------Stage1 onLoad-------------")},e=i([a],e)}(s.default);o.default=c,cc._RF.pop()},{"./BaseStage":"BaseStage"}],Stage2:[function(t,e,o){"use strict";cc._RF.push(e,"12893HzWN1Hjo7gZtyRNDZc","Stage2");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./BaseStage")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("2 onload"),this.id=2,this.num=6,this._curidx=0,this._conditionnum=3,this._panel_right_sort=[1,4,2,5,3,6],this._dragable=[!1,!0,!0,!0,!0,!1],this._armatureName="chapter2s",this._no_wait=!1,this._consider=[[],[[{event:[{id:1,condition:[0],ani:1}]}]],[[],[{}]],[[{event:[{id:0}]}]],[[{condition:[100]},{condition:[1]}]],[]],s.default.prototype.onLoad.apply(this),console.log("----------Stage2 onLoad-------------")},e=i([a],e)}(s.default);o.default=c,cc._RF.pop()},{"./BaseStage":"BaseStage"}],Stage3:[function(t,e,o){"use strict";cc._RF.push(e,"a7f62AAPfZF4pnCrM5ljQlm","Stage3");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./BaseStage")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("2 onload"),this.id=3,this.num=5,this._curidx=0,this._conditionnum=0,this._panel_right_sort=[1,4,3,2,5],this._dragable=[!1,!0,!1,!0,!1],this._armatureName="chapter3s",this._no_wait=!1,this._consider=[[],[[{}],[{}]],[[],[{condition:[100]},{}]],[[{condition:[100]},{}]],[]],s.default.prototype.onLoad.apply(this),console.log("----------Stage2 onLoad-------------")},e=i([a],e)}(s.default);o.default=c,cc._RF.pop()},{"./BaseStage":"BaseStage"}],Stage4:[function(t,e,o){"use strict";cc._RF.push(e,"0a9011lv7hO9KtFGNfVjOsv","Stage4");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./BaseStage")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("4 onload"),this.id=4,this.num=6,this._curidx=0,this._conditionnum=4,this._panel_right_sort=[1,3,2,4,5,6],this._dragable=[!1,!0,!0,!0,!0,!1],this._armatureName="chapter4s",this._no_wait=!1,this._consider=[[],[[{event:[{id:1}]}]],[[{condition:[1]},{event:[{id:2}]}]],[[{condition:[2],event:[{id:3}]}]],[[{condition:[3]},{}]],[]],s.default.prototype.onLoad.apply(this),console.log("----------Stage4 onLoad-------------")},e=i([a],e)}(s.default);o.default=c,cc._RF.pop()},{"./BaseStage":"BaseStage"}],Stage5:[function(t,e,o){"use strict";cc._RF.push(e,"3dc52+6Hg1IXZeEFKrDdsZ7","Stage5");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./BaseStage")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("5 onload"),this.id=5,this.num=1,this._curidx=0,this._conditionnum=1,this._panel_right_sort=[1],this._dragable=[!1],this._armatureName="chapter5s",this._no_wait=!0,this._consider=[[]],s.default.prototype.onLoad.apply(this),console.log("----------Stage5 onLoad-------------")},e=i([a],e)}(s.default);o.default=c,cc._RF.pop()},{"./BaseStage":"BaseStage"}],StageManager:[function(t,e,o){"use strict";cc._RF.push(e,"1ebab8tMl9Eg43UhAThKUNP","StageManager");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./Stage1")),c=t("./Stage2"),l=t("./Stage3"),u=t("./Stage4"),p=t("./Stage5"),h=t("../Book/Book"),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){this.stage_list=new Array,this.stage_list.push(s.default),this.stage_list.push(c.default),this.stage_list.push(l.default),this.stage_list.push(u.default),this.stage_list.push(p.default),console.log("-------------onLoad--------------"),helper.event.on("next_stage",this.nextStage,this),helper.event.on("jump_stage",this.jumpToStage,this)},e.prototype.start=function(){this.jumpToStage(1)},e.prototype.nextStage=function(){if(void 0!=this.cur_stage){var t=this.cur_stage.id+1;t>this.stage_list.length?this.onUILoaded():this.jumpToStage(t)}},e.prototype.jumpToStage=function(t){console.log("------jump to "+t),void 0!=this.cur_stage&&this.node.removeComponent(this.cur_stage),this.cur_stage=this.addComponent(this.stage_list[t-1])},e.prototype.curStage=function(){},e.prototype.onUILoaded=function(){console.log("----------------BookLoad----------------");var t=cc.sequence(cc.delayTime(1),cc.callFunc(this.showBook,this));this.node.runAction(t)},e.prototype.showBook=function(){console.log("----------------showBook----------------"),fgui.UIObjectFactory.setPackageItemExtension("ui://Book/Book",h.default),this._view=fgui.UIPackage.createObject("Book","Book").asCom,this._view.makeFullScreen(),this._view.name="Book",fgui.GRoot.inst.addChild(this._view)},e.prototype.onDisable=function(){helper.event.off("next_stage",this.nextStage,this),helper.event.off("jump_stage",this.jumpToStage,this)},e=i([a],e)}(cc.Component);o.default=d,cc._RF.pop()},{"../Book/Book":"Book","./Stage1":"Stage1","./Stage2":"Stage2","./Stage3":"Stage3","./Stage4":"Stage4","./Stage5":"Stage5"}],helper:[function(t,e,o){"use strict";cc._RF.push(e,"1f6fdb6e3lDtruel+EqnWBg","helper"),window.helper={},window.map_db={},function(t){var e=function(){function t(){}return t.createDBWithLoad=function(t,e,o,n,i,r){console.log(t,e,o,n);var a=t+"/"+e+"_ske",s=t+"/"+o+"_tex",c=new cc.Node;c.name=n;var l=c.addComponent(dragonBones.ArmatureDisplay);l.dragonAtlasAsset=window.map_db[s],l.dragonAsset=window.map_db[a],l.armatureName="",l.armatureName=i||"Armature",r&&r(c)},t.loadDB=function(t,e,o,n,i){var r=t+"/"+e+"_ske",a=t+"/"+o+"_tex";cc.loader.loadRes(a,dragonBones.DragonBonesAtlasAsset,function(t,e){cc.loader.loadRes(r,dragonBones.DragonBonesAsset,function(t,o){window.map_db[r]=o,window.map_db[a]=e,i&&i(n)})})},t.createDB=function(t,e,o,n,i,r){console.log(t,e,o,n);var a=new cc.Node;a.name=n;var s=a.addComponent(dragonBones.ArmatureDisplay);s.dragonAtlasAsset=null,s.dragonAsset=null,s.armatureName="";var c=t+"/"+e+"_ske",l=t+"/"+o+"_tex";cc.loader.loadRes(l,dragonBones.DragonBonesAtlasAsset,function(t,e){s.dragonAtlasAsset=e,cc.loader.loadRes(c,dragonBones.DragonBonesAsset,function(t,e){s.dragonAsset=e,s.armatureName=i||"Armature",r&&r(a)})})},t}();t.AniHelper=e;var o=function(){function t(){}return t.on=function(t,e,o){fgui.GRoot.inst.node.on(t,e,o)},t.emit=function(t,e){fgui.GRoot.inst.node.emit(t,e)},t.off=function(t,e,o){fgui.GRoot.inst.node.off(t,e,o)},t}();t.event=o}(helper||(helper={})),cc._RF.pop()},{}]},{},["Book","CommonBG","helper","LoadScene","Main","BaseStage","Stage1","Stage2","Stage3","Stage4","Stage5","StageManager"]);