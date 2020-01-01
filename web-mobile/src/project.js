window.__require=function t(e,o,n){function i(a,s){if(!o[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var p="function"==typeof __require&&__require;if(!s&&p)return p(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+a+"'")}}var u=o[a]={exports:{}};e[a][0].call(u.exports,function(t){return i(e[a][1][t]||t)},u,u.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({BaseStage:[function(t,e,o){"use strict";cc._RF.push(e,"3e8d2mGh7xHGYppwoM+N7Ex","BaseStage");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(){function t(){}return t.prototype.play=function(){Number(this.bone.name);var t=this.bone.getComponent(dragonBones.ArmatureDisplay);t.removeEventListener(dragonBones.EventObject.COMPLETE),"wait"==this.state?t.playAnimation(this.state+this.id+"_"+this.pid,0):"pass"==this.state?(t.playAnimation(this.state+this.id+"_"+this.pid+"_"+this.enter+"_"+this.exit,1),t.addEventListener(dragonBones.EventObject.COMPLETE,this.passEnded)):"lock"==this.state&&(t.playAnimation(this.state+this.id+"_"+this.pid+"_"+this.enter,1),t.addEventListener(dragonBones.EventObject.COMPLETE,this.lockEnded))},t}()),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("base onload"),this._panellist=new Array(this._consider.length),this._panelsort=new Array;for(var t=1;t<=this._consider.length;t++)this._panelsort.push(t);fgui.UIPackage.loadPackage("ui/Stage"+this.id,this.onUILoaded.bind(this))},e.prototype.onUILoaded=function(){fgui.UIPackage.addPackage("ui/Stage"+this.id),this._view=fgui.UIPackage.createObject("Stage"+this.id,"Stage"+this.id).asCom,this._view.makeFullScreen(),fgui.GRoot.inst.addChild(this._view),this._view.setPosition(0,0);for(var t=2;t<this._consider.length;t++)console.log(t),this._view.getChild("panel"+t).asCom.draggable=!0,this._view.getChild("panel"+t).asCom.on(fgui.Event.DRAG_START,this.onDragStart,this),this._view.getChild("panel"+t).asCom.on(fgui.Event.DROP,this.onDrop,this);this.initPanel()},e.prototype.start=function(){},e.prototype.onDragStart=function(t){console.log("--------------onDrag-------------");var e=fgui.GObject.cast(t.currentTarget),o=Number(e.name.split("l")[1]);e.stopDrag(),e.visible=!1,fgui.DragDropManager.inst.startDrag(e,e.icon,o),fgui.DragDropManager.inst.dragAgent.on(fgui.Event.DRAG_END,function(){e.visible=!0})},e.prototype.onDrop=function(t,e){if(this._view.getChild("panel"+e).visible=!0,void 0!=t){var o=Number(t.name.split("l")[1]);console.log(e,o),o!=e&&this.switch(e,o)}},e.prototype.initPanel=function(){for(var t=0;t<this.num;t++)this.createBone("chapter"+this.id+"s","armatureName",""+(t+1),this.onBoneLoaded.bind(this))},e.prototype.createBone=function(t,e,o,n){helper.AniHelper.createDB("stage/stage"+this.id+"/bone",t,t,o,e,n)},e.prototype.onBoneLoaded=function(t){console.log("----------------onBoneLoaded--------------");var e=Number(t.name);this._view.getChild("panel"+e).node.addChild(t),t.setPosition(421,-185);var o=new s;o.id=this.id,o.pid=e,o.state="wait",o.lockEnded=this.lockEnded.bind(this),o.passEnded=this.passEnded.bind(this),o.bone=t,this._panellist[e-1]=o,o.play(),this._curidx=this._curidx+1,this._curidx},e.prototype.passEnded=function(t){this._curidx=this._curidx+1,this.play()},e.prototype.lockEnded=function(t){stop()},e.prototype.switch=function(t,e){for(var o=0;o<this._panelsort.length;o++)this._panelsort[o]==t?this._panelsort[o]=e:this._panelsort[o]==e&&(this._panelsort[o]=t);var n=this._view.getChild("panel"+t),i=this._view.getChild("panel"+e),r=n.x,a=n.y;n.setPosition(i.x,i.y),i.setPosition(r,a),this.begin()},e.prototype.begin=function(){this.stop(),this.excute(),this.play()},e.prototype.stop=function(){this._curidx=0,this.reset()},e.prototype.reset=function(){this._panellist.forEach(function(t){t.state="wait",t.play()})},e.prototype.play=function(){this._curidx>=this._panellist.length?this.stop():this._panellist[this._panelsort[this._curidx]-1].play()},e.prototype.excute=function(){for(var t=this,e=1,o=new Array,n=0;n<this._conditionnum;n++)o.push(!1);this._panelsort.forEach(function(n){var i=t._panellist[n-1];if(i.enter=e,i.exit=0,0==t._consider[n-1].length)i.exit=1;else{console.log(n,t._consider[n-1][i.enter-1]);for(var r=0;r<t._consider[n-1][i.enter-1].length;r++){if(0==i.exit)(a=t._consider[n-1][i.enter-1][r]).condition?a.condition.forEach(function(t){console.log(t),o[t]&&(i.exit=r+1)}):i.exit=r+1}var a;if(i.exit>0)(a=t._consider[n-1][i.enter-1][i.exit-1]).event&&a.event.forEach(function(t){o[t]=!0})}0!=i.exit?(i.state="pass",e=i.exit):i.state="lock"})},e=i([a],e)}(cc.Component);o.default=c,cc._RF.pop()},{}],CommonBG:[function(t,e,o){"use strict";cc._RF.push(e,"b96daHXk0RNm6zCG5LSCTqT","CommonBG");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){fgui.UIPackage.loadPackage("ui/CommonUI",this.onUILoaded.bind(this)),console.log("-----------CommonBG------onLoad-------------")},e.prototype.start=function(){},e.prototype.onUILoaded=function(){},e=i([a],e)}(fgui.GComponent));o.default=s,cc._RF.pop()},{}],Main:[function(t,e,o){"use strict";cc._RF.push(e,"22b72EPu2VC/43NBbS/eLJl","Main");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./Common/CommonBG")),c=t("./Stage/StageManager"),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){fgui.addLoadHandler(),fgui.GRoot.create(),fgui.UIObjectFactory.setPackageItemExtension("ui://CommonUI/CommonBG",s.default),console.log("----------Main onLoad-------------"),fgui.UIPackage.loadPackage("ui/CommonUI",this.onUILoaded.bind(this))},e.prototype.start=function(){},e.prototype.onUILoaded=function(){fgui.UIPackage.addPackage("ui/CommonUI"),this._view=fgui.UIPackage.createObject("CommonUI","CommonBG").asCom,this._view.makeFullScreen(),this._view.name="CommonBG",fgui.GRoot.inst.addChild(this._view),this.addComponent(c.default)},e=i([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./Common/CommonBG":"CommonBG","./Stage/StageManager":"StageManager"}],Stage1:[function(t,e,o){"use strict";cc._RF.push(e,"d6598aZ7LpMjI1OE5UtDrLr","Stage1");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./BaseStage")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){console.log("1 onload"),this.id=1,this.num=4,this._curidx=0,this._conditionnum=1,this._consider=[[],[[{condition:[0]}]],[[{event:[0]}]],[]],s.default.prototype.onLoad.apply(this),console.log("----------Stage1 onLoad-------------")},e=i([a],e)}(s.default);o.default=c,cc._RF.pop()},{"./BaseStage":"BaseStage"}],StageManager:[function(t,e,o){"use strict";cc._RF.push(e,"1ebab8tMl9Eg43UhAThKUNP","StageManager");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,t("./Stage1")),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){this.stage_list=new Array,this.stage_list.push(s.default),this.node.on("next_stage",this.nextStage,this),this.node.on("jump_stage",this.jumpToStage,this)},e.prototype.start=function(){this.jumpToStage(1)},e.prototype.nextStage=function(t){if(void 0!=this.cur_stage){var e=this.cur_stage.id+1;e>this.stage_list.length&&(e=1),this.jumpToStage(e)}},e.prototype.jumpToStage=function(t){void 0!=this.cur_stage&&this.node.removeComponent(this.cur_stage),this.cur_stage=this.addComponent(this.stage_list[t-1])},e.prototype.curStage=function(){},e=i([a],e)}(cc.Component);o.default=c,cc._RF.pop()},{"./Stage1":"Stage1"}],helper:[function(t,e,o){"use strict";cc._RF.push(e,"1f6fdb6e3lDtruel+EqnWBg","helper"),window.helper={},function(t){var e=function(){function t(){}return t.createDB=function(t,e,o,n,i,r){var a=new cc.Node;a.name=n;var s=a.addComponent(dragonBones.ArmatureDisplay);s.dragonAtlasAsset=null,s.dragonAsset=null,s.armatureName="";var c=t+"/"+e+"_ske",p=t+"/"+o+"_tex";cc.loader.loadRes(p,dragonBones.DragonBonesAtlasAsset,function(t,e){s.dragonAtlasAsset=e,cc.loader.loadRes(c,dragonBones.DragonBonesAsset,function(t,e){s.dragonAsset=e,s.armatureName=i||"Armature",r&&r(a)})})},t}();t.AniHelper=e}(helper||(helper={})),cc._RF.pop()},{}]},{},["CommonBG","helper","Main","BaseStage","Stage1","StageManager"]);