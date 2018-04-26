layui.define(function(e){"use strict";var a=document,t="getElementById",i="getElementsByTagName",n="laypage",r="layui-disabled",u=function(e){var a=this;a.config=e||{};a.config.index=++s.index;a.render(true)};u.prototype.type=function(){var e=this.config;if(typeof e.elem==="object"){return e.elem.length===undefined?2:3}};u.prototype.view=function(){var e=this,a=e.config,t=a.groups="groups"in a?a.groups|0:5;a.layout=typeof a.layout==="object"?a.layout:["prev","page","next"];a.count=a.count|0;a.curr=a.curr|0||1;a.limits=typeof a.limits==="object"?a.limits:[10,20,30,40,50];a.limit=a.limit|0||10;a.pages=Math.ceil(a.count/a.limit)||1;if(a.curr>a.pages){a.curr=a.pages}if(t<0){t=1}else if(t>a.pages){t=a.pages}a.prev="prev"in a?a.prev:"&#x4E0A;&#x4E00;&#x9875;";a.next="next"in a?a.next:"&#x4E0B;&#x4E00;&#x9875;";var i=a.pages>t?Math.ceil((a.curr+(t>1?1:0))/(t>0?t:1)):1,n={prev:function(){return a.prev?'<a href="javascript:;" class="layui-laypage-prev'+(a.curr==1?" "+r:"")+'" data-page="'+(a.curr-1)+'">'+a.prev+"</a>":""}(),page:function(){var e=[];if(a.count<1){return""}if(i>1&&a.first!==false&&t!==0){e.push('<a href="javascript:;" class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">'+(a.first||1)+"</a>")}var n=Math.floor((t-1)/2),r=i>1?a.curr-n:1,u=i>1?function(){var e=a.curr+(t-n-1);return e>a.pages?a.pages:e}():t;if(u-r<t-1){r=u-t+1}if(a.first!==false&&r>2){e.push('<span class="layui-laypage-spr">&#x2026;</span>')}for(;r<=u;r++){if(r===a.curr){e.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" '+(/^#/.test(a.theme)?'style="background-color:'+a.theme+';"':"")+"></em><em>"+r+"</em></span>")}else{e.push('<a href="javascript:;" data-page="'+r+'">'+r+"</a>")}}if(a.pages>t&&a.pages>u&&a.last!==false){if(u+1<a.pages){e.push('<span class="layui-laypage-spr">&#x2026;</span>')}if(t!==0){e.push('<a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="'+a.pages+'">'+(a.last||a.pages)+"</a>")}}return e.join("")}(),next:function(){return a.next?'<a href="javascript:;" class="layui-laypage-next'+(a.curr==a.pages?" "+r:"")+'" data-page="'+(a.curr+1)+'">'+a.next+"</a>":""}(),count:'<span class="layui-laypage-count">共 '+a.count+" 条</span>",limit:function(){var e=['<span class="layui-laypage-limits"><select lay-ignore>'];layui.each(a.limits,function(t,i){e.push('<option value="'+i+'"'+(i===a.limit?"selected":"")+">"+i+" 条/页</option>")});return e.join("")+"</select></span>"}(),skip:function(){return['<span class="layui-laypage-skip">&#x5230;&#x7B2C;','<input type="text" min="1" value="'+a.curr+'" class="layui-input">','&#x9875;<button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button>',"</span>"].join("")}()};return['<div class="layui-box layui-laypage layui-laypage-'+(a.theme?/^#/.test(a.theme)?"molv":a.theme:"default")+'" id="layui-laypage-'+a.index+'">',function(){var e=[];layui.each(a.layout,function(a,t){if(n[t]){e.push(n[t])}});return e.join("")}(),"</div>"].join("")};u.prototype.jump=function(e,a){if(!e)return;var t=this,n=t.config,r=e.children,u=e[i]("button")[0],l=e[i]("input")[0],p=e[i]("select")[0],c=function(){var e=l.value.replace(/\s|\D/g,"")|0;if(e){n.curr=e;t.render()}};if(a)return c();for(var o=0,f=r.length;o<f;o++){if(r[o].nodeName.toLowerCase()==="a"){s.on(r[o],"click",function(){var e=this.getAttribute("data-page")|0;if(e<1||e>n.pages)return;n.curr=e;t.render()})}}if(p){s.on(p,"change",function(){var e=this.value;if(n.curr*e>n.count){n.curr=Math.ceil(n.count/e)}n.limit=e;t.render()})}if(u){s.on(u,"click",function(){c()})}};u.prototype.skip=function(e){if(!e)return;var a=this,t=e[i]("input")[0];if(!t)return;s.on(t,"keyup",function(t){var i=this.value,n=t.keyCode;if(/^(37|38|39|40)$/.test(n))return;if(/\D/.test(i)){this.value=i.replace(/\D/,"")}if(n===13){a.jump(e,true)}})};u.prototype.render=function(e){var i=this,n=i.config,r=i.type(),u=i.view();if(r===2){n.elem&&(n.elem.innerHTML=u)}else if(r===3){n.elem.html(u)}else{if(a[t](n.elem)){a[t](n.elem).innerHTML=u}}n.jump&&n.jump(n,e);var s=a[t]("layui-laypage-"+n.index);i.jump(s);if(n.hash&&!e){location.hash="!"+n.hash+"="+n.curr}i.skip(s)};var s={render:function(e){var a=new u(e);return a.index},index:layui.laypage?layui.laypage.index+1e4:0,on:function(e,a,t){e.attachEvent?e.attachEvent("on"+a,function(a){a.target=a.srcElement;t.call(e,a)}):e.addEventListener(a,t,false);return this}};e(n,s)});