layui.link("./script/tableList/tableList.css");layui.define(["layer","element","form","qRouter","table","laytpl","config_constant"],function(e){var a=layui.layer;var t=layui.element;var s=layui.form;var i=layui.qRouter;var l=layui.table;var r=layui.laytpl;var n=layui.config_constant;var d={tableList:function(e){var i=this;var r=$("[id^='render-tableList']");r.empty();$.each(r,function(e,i){var r="";var d=$("#"+i.id);var o=d.data("componentData");r+='<div class="layui-fluid">';r+='<div class="layui-row">';r+='<div class="layui-col-md12">';r+='<table id="add-tableList-'+i.id+'" lay-filter="filter-tableList-'+i.id+'"></table>';r+="</div>";r+='<div class="layui-col-md12">';r+='<div class="layui-btn layui-btn-normal tableList-button" id="exportExcel-tableList'+i.id+'">导出图表</div>';r+="</div>";r+="</div>";r+="</div>";d.append(r);var b="#add-tableList-"+i.id;if(o.tableConfig!=undefined&&o.tableConfig!=null){if(o.userIdParameter!=undefined&&o.userIdParameter!=null){var u=o.tableConfig;var c=o.userIdParameter;var v={};$.each(c,function(e,r){if(r.Parameter!=undefined&&r.Parameter!=null){v[r.Parameter]=$.localStorage.getItem(r.Parameter)}if(r.KeyValue!=undefined&&r.KeyValue!=null){$.each(r.KeyValue,function(e,a){v[e]=a;return v})}l.render({elem:b,method:u.method,where:v,url:u.url,page:u.page,limits:u.limits,cols:u.cols,done:function(e,a,t){var s=$(".tableList_Editor_addOperate");s.html(function(e){var a="";a+="<div>";a+='<a class="layui-btn tableList_btnsize tableList_GetTheTask" lay-event="getTask">领取任务</a>';a+='<a class="layui-btn tableList_btnsize tableList_BeginToQualityCheck" lay-event="openQuality" href="javascript:void(0);">开启质检</a>';a+='<a class="layui-btn tableList_btnsize tableList_Editor_SubmitTask" lay-event="editorSubmitTask">提交任务</a>';a+='<a class="layui-btn tableList_btnsize" href="#">查看任务</a>';a+="</div>";return a});var i=$(".tableList_Inspector_addOperate");i.html(function(e){var a="";a+="<div>";a+='<a class="layui-btn tableList_btnsize tableList_GetTheTask" lay-event="getTask">领取任务</a>';a+='<a class="layui-btn tableList_btnsize tableList_BeginToQualityCheck" lay-event="openQuality" href="javascript:void(0);">开启质检</a>';a+='<a class="layui-btn tableList_btnsize tableList_Inspector_SubmitTask" lay-event="inspectorSubmitTask">提交任务</a>';a+='<a class="layui-btn tableList_btnsize" href="">查看任务</a>';a+="</div>";return a});var l=e.data.length;var r=e.data;for(var n=0;n<l;n++){var d=$(".tableList_GetTheTask"),o=$(".tableList_BeginToQualityCheck"),b=$(".tableList_Editor_SubmitTask"),u=$(".tableList_Inspector_SubmitTask");if(r[n].task_start_date==undefined){$(d[n]).removeClass("tableList_disabled").addClass("tableList_green");$(o[n]).addClass("tableList_disabled");$(b[n]).addClass("tableList_disabled");$(u[n]).addClass("tableList_disabled")}else{$(d[n]).addClass("tableList_disabled");if(r[n].task_end_date==undefined){$(o[n]).removeClass("tableList_disabled").addClass("tableList_green");$(b[n]).removeClass("tableList_disabled").addClass("tableList_green");$(u[n]).removeClass("tableList_disabled").addClass("tableList_green")}else{$(o[n]).removeClass("tableList_green").addClass("tableList_disabled");$(b[n]).removeClass("tableList_green").addClass("tableList_disabled");$(u[n]).removeClass("tableList_green").addClass("tableList_disabled")}}}}});t.init();s.render();var d="#exportExcel-tableList"+i.id;$(d).on("click",function(){$("#"+i.id+" .layui-table").tableExport({type:"excel",escape:"false",tableName:"导出图表"})});var o="filter-tableList-"+i.id;l.on("tool("+o+")",function(e){var i=e.data,l=e.event;$.sessionStorage.setItem("tabList_data",JSON.stringify(i));$.localStorage.setItem("taskList_localStorageData",JSON.stringify(i));t.render();s.render();if(l=="getTask"){var r=e.tr.find(".tableList_GetTheTask");if(r.hasClass("tableList_disabled")){return}else{var d=JSON.parse($.sessionStorage.getItem("tabList_data"));var o=d.id;$.ajax({type:"post",contentType:"application/json",url:n.URL_HEADER+"/task/b/update/start_time?id="+o,success:function(e){if(e.code==0){r.removeClass("tableList_green").addClass("tableList_disabled");r.next().removeClass("tableList_disabled").addClass("tableList_green");r.next().next().removeClass("tableList_disabled").addClass("tableList_green");a.alert("领取成功")}else{a.alert("领取失败")}},error:function(e){a.alert("错误")}})}}else if(l=="inspectorSubmitTask"){var r=e.tr.find(".tableList_Inspector_SubmitTask");var b=e.tr.find(".tableList_BeginToQualityCheck");var u="";u+='<form class="layui-form" action="">';u+='<div class="tableList-position" style="margin-left:20px;">';u+='<div class="tableList-Layui-label">制作人天</div>';u+='<div class="layui-input-inline" style="width:91%;">';u+='<input type="text" name="title" required  lay-verify="required" placeholder="制作人天" autocomplete="off" class="layui-input inspectorTime">';u+="</div>";u+="</div>";u+='<div class="tableList-position">';u+='<div class="tableList-search-position">';u+='<div class="tableList-Layui-label">制作任务错误量</div>';u+='<div class="layui-input-inline">';u+='<input type="text" name="title" required  lay-verify="required" placeholder="制作任务错误量" autocomplete="off" class="layui-input inspectorError">';u+="</div>";u+="</div>";u+='<div class="tableList-search-position">';u+='<div class="layui-form-item">';u+='<div class="tableList-Layui-label">制作任务是否合格</div>';u+='<div class="layui-input-inline">';u+="<select>";u+='<option value="0">合格</option>';u+='<option value="1">不合格</option>';u+="</select>";u+="</div>";u+="</div>";u+="</div>";u+="</div>";u+='<div class="tableList-moveBtnPosition">';u+='<div class="layui-btn layui-btn-primary inspectorCancel">取消</div>';u+='<div class="layui-btn layui-btn-normal inspectorKeep">保存</div>';u+="</div>";u+="</form>";if(r.hasClass("tableList_disabled")){return}else{a.open({type:1,skin:"layui-layer-taskSkin",title:"提交任务",closeBtn:0,area:["450px","300px"],shadeClose:true,content:u,success:function(e,t){var s=t,i=JSON.parse($.sessionStorage.getItem("tabList_data")).id;$(".inspectorKeep").on("click",function(){var e=$(".inspectorTime").val();var t=$(".inspectorError").val();var l=$(".layui-select-title>input:last").val();var d=0;if(l=="合格"){d=1}else{d=0}if(e!=""&&t!=""&&l!=""){if(isNaN(Number(e))==false){if(isNaN(Number(t))==false){$.ajax({type:"post",contentType:"application/json",url:n.URL_HEADER+"/task/b/update/end_time",data:JSON.stringify({id:i,preManday:e,wrongNumber:t,isQualified:d}),success:function(e){if(e.code==0){r.removeClass("tableList_green").addClass("tableList_disabled");b.removeClass("tableList_green").addClass("tableList_disabled");a.alert("保存成功");a.close(s)}else{a.alert("保存失败")}},error:function(e){a.alert("错误")}})}else{a.alert("制作任务错误量必须为数字类型")}}else{a.alert("制作人天必须为数字类型")}}else{a.alert("信息不能为空")}});$(".inspectorCancel").on("click",function(){a.close(s)})}})}}else if(l=="editorSubmitTask"){var r=e.tr.find(".tableList_Editor_SubmitTask");var b=e.tr.find(".tableList_BeginToQualityCheck");var c="";c+='<div class="tableList-position" style="padding-top:5%;">';c+='<label class="tableList-Layui-label">制作人天</label>';c+='<div class="layui-input-inline" style="width:75%;">';c+='<input type="text" name="title" required  lay-verify="required" placeholder="制作人天" autocomplete="off" class="layui-input editerInput">';c+="</div>";c+='<div class="tableList-moveBtnPosition" style="padding-top:5%;">';c+='<div class="layui-btn layui-btn-primary tableList-moveBtn editerCancel">取消</div>';c+='<div class="layui-btn layui-btn-normal editerKeep">保存</div>';c+="</div>";c+="</div>";if(r.hasClass("tableList_disabled")){return}else{a.open({type:1,skin:"layui-layer-taskSkin",title:"提交任务",closeBtn:0,area:["350px","170px"],shadeClose:true,content:c,success:function(e,t){var s=t;$(".editerKeep").on("click",function(){var e=$(".editerInput").val();if(e!=undefined&&e!=""&&e!=0){var t=JSON.parse($.sessionStorage.getItem("tabList_data"));var i=t.id;if(isNaN(Number(e))==true){a.alert("请填写数字类型")}else{$.ajax({type:"post",contentType:"application/json",url:n.URL_HEADER+"/task/b/update/end_time",data:JSON.stringify({id:i,preManday:e}),success:function(e){if(e.code==0){r.removeClass("tableList_green").addClass("tableList_disabled");b.removeClass("tableList_green").addClass("tableList_disabled");a.alert("保存成功");a.close(s)}else{a.alert("保存失败")}},error:function(e){a.alert("错误")}})}}else{a.alert("制作人天不能为0或空")}});$(".editerCancel").on("click",function(){a.close(s)})}})}}else if(l=="openQuality"){var r=e.tr.find(".tableList_BeginToQualityCheck");if(r.hasClass("tableList_disabled")){return}else{var d=JSON.parse($.sessionStorage.getItem("tabList_data"));var v=d.task_id;var p=null;if(d.projects_value=="路牙"){p=d.task_id+"-"+d.sub_task_id+".curb"}if(d.projects_value=="车道线"){p=d.task_id+"-"+d.sub_task_id+".json"}if(d.projects_value=="栅栏"){p=d.task_id+"-"+d.sub_task_id+".barrier"}if(d.projects_value=="栅栏"){p=d.task_id+"-"+d.sub_task_id+".barrier"}var _=null;var L=n.EDITING_PLATFORM_HREF+"/2deditor?task="+v+"&file="+p+"&ver="+_;window.open(L,"_blank")}}})})}else{var u=o.tableConfig;l.render({elem:b,method:u.method,url:u.url,page:u.page,limits:u.limits,cols:u.cols,done:function(e){for(var a=0;a<e.data.length;a++){var t=e.data[a].status,s=$(".tableList_system_open"),i=$(".tableList_system_close");if(t==1){$(s[a]).removeClass("tableList_green").addClass("tableList_disabled");$(i[a]).removeClass("tableList_disabled").addClass("tableList_green")}else{$(s[a]).removeClass("tableList_disabled").addClass("tableList_green");$(i[a]).removeClass("tableList_green").addClass("tableList_disabled")}}}});t.init();s.render();var p="#exportExcel-tableList"+i.id;$(p).on("click",function(){$("#"+i.id+" .layui-table").tableExport({type:"excel",escape:"false",tableName:"导出图表"})});var _="filter-tableList-"+i.id;l.on("tool("+_+")",function(e){var t=e.data,s=e.event;$.sessionStorage.setItem("tabList_data",JSON.stringify(t));var i=e.tr.find(".tableList_system_close"),l=e.tr.find(".tableList_system_open"),r=parseInt(t.id);if(s=="tableList_system_open"){if(l.hasClass("tableList_green")){$.ajax({type:"get",contentType:"application/json",url:n.URL_HEADER+"/sys/user/start/status/"+r,success:function(e){if(e.code==0){a.alert("修改成功");l.removeClass("tableList_green").addClass("tableList_disabled");i.removeClass("tableList_disabled").addClass("tableList_green")}else{a.alert("修改失败")}},error:function(e){a.alert("错误")}})}else{return}}else if(s=="tableList_system_close"){if(i.hasClass("tableList_green")){$.ajax({type:"get",contentType:"application/json",url:n.URL_HEADER+"/sys/user/stop/status/"+r,success:function(e){if(e.code==0){a.alert("修改成功");l.removeClass("tableList_disabled").addClass("tableList_green");i.removeClass("tableList_green").addClass("tableList_disabled")}else{a.alert("修改失败")}},error:function(e){a.alert("错误")}})}else{return}}})}}})},changeData:function(e,a,t){var s=$("[id^='render-tableList']");$.each(s,function(t,s){var i=$("#"+s.id);var l=i.data("componentData");var r=i.data("componentIndex");var n=i.data("componentName");if(r==e){if(l.userIdParameter!=undefined&&l.userIdParameter!=null){var d={};d.KeyValue=a;d.type="搜索的参数";l.userIdParameter.push(d);i.data("componentData",l)}else{l.userIdParameter=[];var d={};d.KeyValue=a;d.type="搜索的参数";l.userIdParameter.push(d);i.data("componentData",l)}}});this.tableList()}};e("tableList",d)});