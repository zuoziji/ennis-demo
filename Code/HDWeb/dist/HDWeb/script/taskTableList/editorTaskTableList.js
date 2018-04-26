layui.link("./script/taskTableList/taskTableList.css");layui.define(["layer","element","form","qRouter","table","laytpl","config_constant","taskBasicInformation"],function(e){var a=layui.layer;var t=layui.element;var s=layui.form;var i=layui.qRouter;var l=layui.table;var n=layui-n;var o=layui.config_constant;var u={editorTaskTableList:function(e){var i=$("[id^='render-editorTaskTableList']");var n=JSON.parse($.localStorage.getItem("taskList_localStorageData"));var r=n.production_projects.split("|");var c="";i.empty();var d="";$.ajax({type:"get",url:o.URL_HEADER+"/task/projects/search",async:false,success:function(e){d=e}});$.ajax({type:"get",data:{taskId:n.task_id,aTaskId:n.id},url:o.URL_HEADER+"/task/a/search/subtask",success:function(p){var b=[];$.each(r,function(e,a){var t=0;$.each(p.data,function(e,s){$.each(s.subTask,function(e,i){if(a==i.projects_value){if(i.projects_value!=undefined){t+=s.mileage/i.pre_manday}}})});b.push(t)});var f=0;$.each(b,function(e,a){if(a!=0&&a!="0"&&a!=undefined){f+=1/a}});c+='<div class="layui-form taskTableList">';c+='<div class="taskTableList_button">';c+='<button class="layui-btn layui-btn-primary taskTableList_Issued '+($.sessionStorage.getItem("status")==6||$.sessionStorage.getItem("status")==7||$.sessionStorage.getItem("status")==8||$.sessionStorage.getItem("status")==11?"taskTableList_hide":"")+'">下发任务</button>';c+='<button class="layui-btn layui-btn-primary taskTableList_submit '+($.sessionStorage.getItem("status")==2||$.sessionStorage.getItem("status")==6||$.sessionStorage.getItem("status")==7||$.sessionStorage.getItem("status")==8||$.sessionStorage.getItem("status")==11?"taskTableList_hide":"")+'">任务提交</button>';c+="</div>";c+='<table class="layui-table taskTableList_table taskTableList_editor">';c+="<thead>";c+="<tr>";c+="<th>任务环节</th>";c+="<th>编号</th>";c+="<th>里程</th>";$.each(r,function(e,a){c+="<th>"+a+"</th>";c+="<th>"+a+"人天</th>"});c+="</tr>";c+="</thead>";c+="<tbody>";$.each(p.data,function(e,a){a.subTaskAll=[];c+="<tr>";c+="<td>"+n.step_value+"</td>";c+="<td>"+a.sub_task_id+"</td>";c+="<td>"+a.mileage+"</td>";if(a.subTask!=undefined){$.each(r,function(e,t){var s={projects_value:""};s.projects_value=t;$.each(a.subTask,function(e,a){if(t==a.projects_value){s=a}});a.subTaskAll.push(s)})}else{$.each(r,function(e,t){var s={projects_value:""};s.projects_value=t;a.subTaskAll.push(s)})}$.each(a.subTaskAll,function(e,a){c+='<td class="taskTableList_cell_value taskTableList_people_name">'+(a.name!=undefined?a.name:"")+"</td>";c+='<td class="taskTableList_cell_value">'+(a.pre_manday!=undefined?a.pre_manday:"")+"</td>"});c+="</tr> "});c+="</tbody>";c+="</table>";c+="</div>";c+='<div class="taskTableList_Statistics">';c+='<span class="taskTableList_overallEfficiency">综合效率：'+f.toFixed(5)+"</span>";$.each(r,function(e,a){c+="<span>"+a+"效率总计："+b[e]+"</span>"});c+="</div>";i.append(c);$(".taskTableList_editor tbody tr").on("click",function(){$(".taskTableList_table tbody tr").not($("this")).removeClass("layui-table-click");$(this).addClass("layui-table-click");var e=$(this)["0"].children[1].innerText;$.each(p.data,function(a,t){if(e==t.sub_task_id){taskListItemChooseMessage=t}});if($.sessionStorage.getItem("status")==2||$.sessionStorage.getItem("status")==3||$.sessionStorage.getItem("status")==9||$.sessionStorage.getItem("status")==10){k()}});var _="";var m="";function k(){var e="";var i={a_task_id:Number(n.id),sub_task_id:Number(taskListItemChooseMessage.sub_id),subTask:[]};e+='<div class="taskTableList_pop">';$.each(taskListItemChooseMessage.subTaskAll,function(a,t){var s={pre_manday:null,user_id:null,wrong_number:null,projects_id:null,is_qualified:null,id:null};$.each(taskListItemChooseMessage.subTask,function(e,a){if(t.projects_value==a.projects_value){t=a;s.pre_manday=t.pre_manday!=undefined?Number(t.pre_manday).toFixed(2):null;s.user_id=t.user_id!=undefined?Number(t.user_id):null;s.wrong_number=t.wrong_number!=undefined?Number(t.wrong_number):null;s.projects_id=t.projects_id!=undefined?Number(t.projects_id):null;s.is_qualified=t.is_qualified!=undefined?Number(t.is_qualified):null;s.id=t.id!=undefined?Number(t.id):null}});i.subTask.push(s);e+='<div class="taskTableList_pop_item">';e+='<p><b class="taskTableList_pop_b">'+t.projects_value+"基本信息</b></p>";e+='<div class="taskTableList_pop_itemName_editor">';e+="<div>负责人</div>";e+="<div>任务量（人/天）</div>";e+="</div>";e+='<div class="taskTableList_pop_itemName_editor">';e+="<div>";e+='<div class="taskTableList_pop_person" data_projects_value = "'+t.projects_value+'">';e+='<span class="taskTableList_pop_name">'+(t.name!=undefined?t.name:"")+"</span>";e+='<i class="layui-icon" style="font-size: 15px; color: #cccccc;position:absolute;right:15px;">&#xe61a;</i>';e+="</div>";e+="</div>";e+="<div>";e+='<input class="task_volume" '+(t.name!=undefined?"":"disabled")+' type="number" placeholder="" value="'+(t.pre_manday!=undefined?t.pre_manday:"")+'">';e+="</div>";e+="</div>";e+="</div>"});e+='<div class="taskTableList_pop_button">';e+='<button class="layui-btn layui-btn-primary layui-btn-sm taskTableList_pop_cancel">取消</button>';e+='<button class="layui-btn layui-btn-normal layui-btn-sm taskTableList_pop_save">保存</button>';e+="</div>";e+="</div>";a.open({title:"信息修改",type:1,skin:"layui-layer-taskSkin",area:["412px","auto"],content:e,closeBtn:0,shadeClose:true,success:function(e,l){t.render();s.render();$(".taskTableList_pop_person").on("click",function(){$.each(i.subTask,function(e,a){taskListItemChooseMessage.subTaskAll[e].pre_manday=$(".task_volume")[e].value!=""?Number($(".task_volume")[e].value):"";a.pre_manday=Number($(".task_volume")[e].value).toFixed(2)});m=$(this)["0"].attributes[1].value;v();a.close(l)});$(".taskTableList_pop_cancel").on("click",function(){a.closeAll()});$(".taskTableList_pop_save").on("click",function(){$.each(i.subTask,function(e,a){a.pre_manday=$(".task_volume")[e].value!=""?Number($(".task_volume")[e].value).toFixed(2):null});var e=a.load(2,{shade:[.1,"#fff"]});$.ajax({type:"post",data:JSON.stringify(i),contentType:"application/json; charset=utf-8",url:o.URL_HEADER+"/task/b/save",async:false,success:function(e){if(e.code==0){u.editorTaskTableList();a.closeAll();a.alert("保存成功")}else{a.closeAll();a.alert("保存失败")}},error:function(t){a.close(e);a.alert("保存失败")}})})}})}function v(){_="";var e="";e+='<div class="addinformation-container">';e+='<form class="layui-form" action="">';e+='<label class="addinformation-Layui-label">输入框</label>';e+='<div class="layui-input-inline addinformation-Layui-input">';e+='<input type="text" name="title" required  lay-verify="required" placeholder="搜索组员" autocomplete="off" class="layui-input searchValue">';e+="</div>";e+='<div class="layui-btn layui-btn-normal search" style="margin-left:10px;">搜索</div>';e+="</form>";e+='<table id="test" lay-filter="addTaskList"></table>';e+='<div class="layui-btn layui-btn-primary addinformation-moveBtn closeWindow">取消</div>';e+='<div class="layui-btn layui-btn-normal addMsg">添加</div>';e+="</div>";var t="";a.open({title:"负责人",type:1,skin:"layui-layer-taskSkin",area:["590px","500px"],content:e,closeBtn:0,shadeClose:true,success:function(e,s){t=s;l.render({elem:"#test",method:"post",url:o.URL_HEADER+"/sys/user/search/group_members",where:{stepId:Number(n.step_id),departmentId:Number($.localStorage.getItem("departmentId")),page:1,limit:10,search:""},cellMinWidth:100,height:322,page:true,limits:[10,20,30],cols:[[{field:"id",title:"ID",sort:true,align:"center",event:"addTaskId"},{field:"qq",title:"QQ号",sort:true,align:"center",event:"addTaskId"},{field:"name",title:"姓名",sort:true,align:"center",event:"addTaskId"}]]});l.on("tool(addTaskList)",function(e){var a=e.data,t=e.event;if(t==="addTaskId"){_=a}});$(".search").on("click",function(){var e=$(".searchValue").val();l.reload("test",{url:o.URL_HEADER+"/sys/user/search/group_members",method:"post",where:{search:e}})});$(".closeWindow").on("click",function(){a.close(t)});$(".addMsg").on("click",function(){if(_==""){a.alert("请选中要添加的行")}else{$.each(taskListItemChooseMessage.subTaskAll,function(e,a){if(m==a.projects_value){a.name=_.name;a.user_id=_.id;$.each(d.data,function(e,t){if(m==t.value){a.projects_id=t.id}})}else{if(a.name==undefined){a.name=_.name;a.user_id=_.id;$.each(d.data,function(e,t){if(a.projects_value==t.value){a.projects_id=t.id}})}}});taskListItemChooseMessage.subTask=taskListItemChooseMessage.subTaskAll;k();a.close(s)}})}})}$(".taskTableList_Issued").on("click",function(){var t=true;$.each($(".taskTableList_people_name"),function(e,a){if(a.innerText==""){t=false}});if(t==true){var s={id:Number(n.id),status:3};var i=a.load(2,{shade:[.1,"#fff"]});$.ajax({type:"post",data:JSON.stringify(s),contentType:"application/json; charset=utf-8",url:o.URL_HEADER+"/task/a/update_status",success:function(t){if(t.code==0){layui.taskBasicInformation.taskBasicInformation(e);a.close(i);a.open({title:"温馨提示",skin:"layui-layer-taskSkin",content:"下发成功"});u.editorTaskTableList()}else{a.close(i);a.alert("下发失败")}},error:function(e){a.close(i);a.alert("下发失败")}})}else{a.open({title:"温馨提示",skin:"layui-layer-taskSkin",content:"请填完所有人员信息"})}});$(".taskTableList_submit").on("click",function(){var t=$("#taskTableList_table tbody tr");var s=true;if($.sessionStorage.getItem("status")==3||$.sessionStorage.getItem("status")==10){$.each($(".taskTableList_cell_value"),function(e,t){if(t.innerText==""){a.open({title:"温馨提示",content:"提交失败，请完善表格数据"});s=false}});if(s==true){var i={id:Number(n.id),status:11};var l=a.load(2,{shade:[.1,"#fff"]});$.ajax({type:"post",data:JSON.stringify(i),contentType:"application/json; charset=utf-8",url:o.URL_HEADER+"/task/a/update_status",success:function(t){if(t.code==0){layui.taskBasicInformation.taskBasicInformation(e);a.close(l);a.alert("提交成功");u.editorTaskTableList()}else{a.close(l);a.alert("提交失败")}},error:function(e){a.close(l);a.alert("提交失败")}})}}else{a.open({title:"温馨提示",content:"该任务已提交"})}})}})}};e("editorTaskTableList",u)});