/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:数据表格组件
 */
layui.link('./script/tableList/tableList.css')
layui.define(['layer', 'element', 'form', 'qRouter', 'table', 'laytpl', 'config_constant'], function (exports) {
    var layer = layui.layer;
    var element = layui.element;
    var form = layui.form;
    var qRouter = layui.qRouter;
    var table = layui.table;
    var laytpl = layui.laytpl;
    var config_constant = layui.config_constant;
    var obj = {
        tableList: function (componentName) {
            var thisP = this;
            var getRoot = $("[id^='render-tableList']");
            getRoot.empty();
            $.each(getRoot, function (key, listId) {
                var nodeHtml = '';
                var getNodeHtml = $('#' + listId.id);
                var componentData = getNodeHtml.data('componentData');
                nodeHtml += '<div class="layui-fluid">';
                nodeHtml += '<div class="layui-row">';
                nodeHtml += '<div class="layui-col-md12">';
                nodeHtml += '<table id="add-tableList-' + listId.id + '" lay-filter="filter-tableList-' + listId.id + '"></table>';
                nodeHtml += '</div>';
                nodeHtml += '<div class="layui-col-md12">';
                nodeHtml += '<div class="layui-btn layui-btn-normal tableList-button" id="exportExcel-tableList' + listId.id + '">导出图表</div>';
                nodeHtml += '</div>';
                nodeHtml += '</div>';
                nodeHtml += '</div>';
                getNodeHtml.append(nodeHtml);
                var elemId = '#add-tableList-' + listId.id;
                if (componentData.tableConfig != undefined && componentData.tableConfig != null) {
                    if (componentData.userIdParameter != undefined && componentData.userIdParameter != null) {
                        var tableConfig = componentData.tableConfig;
                        var userIdParameter = componentData.userIdParameter;
                        var whereParameter = {};
                        $.each(userIdParameter, function (userIdParameterKey, userIdParameterValue) {
                            if (userIdParameterValue.Parameter != undefined && userIdParameterValue.Parameter != null) {
                                if (userIdParameterValue.ParameterType != undefined && userIdParameterValue.ParameterType != null && userIdParameterValue.ParameterType == "number") {
                                    whereParameter[userIdParameterValue.Parameter] = Number($.localStorage.getItem(userIdParameterValue.Parameter));
                                } else {
                                    whereParameter[userIdParameterValue.Parameter] = $.localStorage.getItem(userIdParameterValue.Parameter);
                                }

                            }
                            if (userIdParameterValue.KeyValue != undefined && userIdParameterValue.KeyValue != null) {
                                $.each(userIdParameterValue.KeyValue, function (KeyValueKey, KeyValueValue) {
                                    whereParameter[KeyValueKey] = KeyValueValue;
                                    return whereParameter
                                })
                            }
                            table.render({
                                elem: elemId,
                                method: tableConfig.method,
                                where: whereParameter,
                                //数据接口
                                url: tableConfig.url,
                                //开启分页
                                page: tableConfig.page,
                                limits: tableConfig.limits,
                                cols: tableConfig.cols,
                                done: function (res, curr, count) {
                                    var tableTemplet = componentData.tableTemplet;
                                    if (tableTemplet == "userManagement") {
                                        // 用户管理
                                        for (var i = 0; i < res.data.length; i++) {
                                            var openStatus = res.data[i].status,
                                                ststemOpen = $('.tableList_system_open'),
                                                ststemClose = $('.tableList_system_close');
                                            //用户管理的 开启/禁用 操作
                                            if (openStatus == 1) { //1表示开启需要关闭,禁用为绿
                                                $(ststemOpen[i]).removeClass('tableList_green').addClass('tableList_disabled');
                                                $(ststemClose[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                            } else {
                                                $(ststemOpen[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                                $(ststemClose[i]).removeClass('tableList_green').addClass('tableList_disabled');
                                            }
                                        }
                                    }



                                    //编辑员添加操作
                                    var tableList_Editor_addOperate = $('.tableList_Editor_addOperate');
                                    tableList_Editor_addOperate.html(
                                        function (d) {
                                            var functionButton = '';
                                            functionButton += '<div>';
                                            functionButton += '<a class="layui-btn tableList_btnsize tableList_GetTheTask" lay-event="getTask">领取任务</a>'
                                            functionButton += '<a class="layui-btn tableList_btnsize tableList_BeginToQualityCheck" lay-event="openQuality" href="javascript:void(0);">开启编辑</a>'
                                            functionButton += '<a class="layui-btn tableList_btnsize tableList_Editor_SubmitTask" lay-event="editorSubmitTask">提交任务</a>'
                                            functionButton += '<a class="layui-btn tableList_btnsize" href="#">查看任务</a>'
                                            functionButton += '</div>'
                                            return functionButton;
                                        }
                                    );


                                    //质检员添加操作
                                    var tableList_Inspector_addOperate = $('.tableList_Inspector_addOperate');
                                    tableList_Inspector_addOperate.html(
                                        function (d) {
                                            var functionButton = '';
                                            functionButton += '<div>';
                                            functionButton += '<a class="layui-btn tableList_btnsize tableList_GetTheTask" lay-event="getTask">领取任务</a>'
                                            functionButton += '<a class="layui-btn tableList_btnsize tableList_BeginToQualityCheck" lay-event="openQuality" href="javascript:void(0);">开启质检</a>'
                                            functionButton += '<a class="layui-btn tableList_btnsize tableList_Inspector_SubmitTask" lay-event="inspectorSubmitTask">提交任务</a>'
                                            functionButton += '<a class="layui-btn tableList_btnsize" href="">查看任务</a>'
                                            functionButton += '</div>'
                                            return functionButton;

                                        }
                                    );


                                    //如果是异步请求数据方式，res即为你接口返回的信息。
                                    //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
                                    var len = res.data.length;
                                    var data = res.data;
                                    for (var i = 0; i < len; i++) {
                                        var tableList_GetTheTask = $('.tableList_GetTheTask'),
                                            tableList_BeginToQualityCheck = $('.tableList_BeginToQualityCheck'),
                                            tableList_Editor_SubmitTask = $('.tableList_Editor_SubmitTask'),
                                            // tableList_Inspector_GetTheTask=$('.tableList_Inspector_GetTheTask'),
                                            tableList_Inspector_SubmitTask = $('.tableList_Inspector_SubmitTask');
                                        if (data[i].task_start_date == undefined) {
                                            $(tableList_GetTheTask[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                            // tableList_Inspector_GetTheTask.removeClass('tableList_disabled').addClass('tableList_green');
                                            $(tableList_BeginToQualityCheck[i]).addClass('tableList_disabled');
                                            $(tableList_Editor_SubmitTask[i]).addClass('tableList_disabled');
                                            $(tableList_Inspector_SubmitTask[i]).addClass('tableList_disabled');
                                        } else {
                                            $(tableList_GetTheTask[i]).addClass('tableList_disabled');
                                            // tableList_Inspector_GetTheTask.addClass('tableList_disabled');
                                            if (data[i].task_end_date == undefined) {
                                                $(tableList_BeginToQualityCheck[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                                $(tableList_Editor_SubmitTask[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                                $(tableList_Inspector_SubmitTask[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                            } else {
                                                $(tableList_BeginToQualityCheck[i]).removeClass('tableList_green').addClass('tableList_disabled');
                                                $(tableList_Editor_SubmitTask[i]).removeClass('tableList_green').addClass('tableList_disabled');
                                                $(tableList_Inspector_SubmitTask[i]).removeClass('tableList_green').addClass('tableList_disabled');
                                            }
                                        }
                                    }

                                    //得到当前页码

                                    //得到数据总量

                                    //编辑员领取任务
                                    /* tableList_Editor_GetTheTask.on('click',function(){
                                         var that=$(this);
                                         if(that.hasClass('tableList_disabled')){
                                             return;
                                         } else {
                                             var tabList_data=JSON.parse($.sessionStorage.getItem('tabList_data'));
                                             var editerGetId=tabList_data.id;
                                             $.ajax({
                                                 type: "post",
                                                 contentType: "application/json",
                                                 url: config_constant.URL_HEADER + '/task/b/update/start_time?id='+editerGetId,
                                                 // data: JSON.stringify({
                                                 //     id : editerGetId
                                                 // }),
                                                 success: function(data){
                                                     if(data.code==0){
                                                         that.removeClass('tableList_Editor_GetTheTask tableList_green').addClass('tableList_disabled');
                                                         that.next().removeClass('tableList_disabled').addClass('tableList_green tableList_BeginToQualityCheck');
                                                         that.next().next().removeClass('tableList_disabled').addClass('tableList_green tableList_Editor_SubmitTask');
                                                         layer.alert("领取成功");    
                                                     } else {
                                                         layer.alert("领取失败");
                                                     }
                                                 },
                                                 error: function(data){
                                                     layer.alert("错误");
                                                 }
                                             })
                                         }
                                     })*/

                                }
                            });

                            element.init();
                            form.render();



                            //导出excel图表
                            var exportExcel = '#exportExcel-tableList' + listId.id;
                            $(exportExcel).on('click', function () {
                                $('#' + listId.id + ' .layui-table').tableExport({
                                    type: 'excel',
                                    escape: 'false',
                                    tableName: '导出图表'
                                });
                            })



                            //点击详细信息页面跳转传递参数到下一个页面
                            var filterId = 'filter-tableList-' + listId.id;
                            table.on('tool(' + filterId + ')', function (obj) {


                                var tableTemplet = componentData.tableTemplet;
                                if (tableTemplet == "userManagement") {
                                    var tableId = obj.data,
                                        layEvent = obj.event;
                                    $.sessionStorage.setItem('tabList_data', JSON.stringify(tableId));
                                    //用户管理的 开启/禁用 操作
                                    var tableList_syste_close_node = obj.tr.find(".tableList_system_close"),
                                        tableList_system_open_node = obj.tr.find(".tableList_system_open"),
                                        systemUserId = parseInt(tableId.id);
                                    if (layEvent == "tableList_system_open") {
                                        if (tableList_system_open_node.hasClass('tableList_green')) {
                                            $.ajax({
                                                type: "get",
                                                contentType: "application/json",
                                                url: config_constant.URL_HEADER + '/sys/user/start/status/' + systemUserId,
                                                // data: JSON.stringify({
                                                //     id : systemUserId
                                                // }),
                                                success: function (data) {
                                                    if (data.code == 0) {
                                                        layer.alert("修改成功");
                                                        tableList_system_open_node.removeClass('tableList_green').addClass('tableList_disabled');
                                                        tableList_syste_close_node.removeClass('tableList_disabled').addClass('tableList_green');
                                                    } else {
                                                        layer.alert("修改失败");
                                                    }
                                                },
                                                error: function (data) {
                                                    layer.alert("错误");
                                                }
                                            })
                                        } else {
                                            return;
                                        }
                                    } else if (layEvent == "tableList_system_close") {
                                        if (tableList_syste_close_node.hasClass('tableList_green')) {
                                            $.ajax({
                                                type: "get",
                                                contentType: "application/json",
                                                url: config_constant.URL_HEADER + '/sys/user/stop/status/' + systemUserId,
                                                // data: JSON.stringify({
                                                //     id : systemUserId
                                                // }),
                                                success: function (data) {
                                                    if (data.code == 0) {
                                                        layer.alert("修改成功");
                                                        tableList_system_open_node.removeClass('tableList_disabled').addClass('tableList_green');
                                                        tableList_syste_close_node.removeClass('tableList_green').addClass('tableList_disabled');
                                                    } else {
                                                        layer.alert("修改失败");
                                                    }
                                                },
                                                error: function (data) {
                                                    layer.alert("错误");
                                                }
                                            })
                                        } else {
                                            return;
                                        }
                                    }
                                }
                                var tableId = obj.data,
                                    layEvent = obj.event;
                                $.sessionStorage.setItem('tabList_data', JSON.stringify(tableId));
                                // 存储信息用于任务单
                                $.localStorage.setItem('taskList_localStorageData', JSON.stringify(tableId));
                                element.render();
                                form.render();
                                if (layEvent == 'getTask') {
                                    //领取任务
                                    var that = obj.tr.find(".tableList_GetTheTask");
                                    if (that.hasClass('tableList_disabled')) {
                                        return;
                                    } else {
                                        var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                                        var inspectorGetId = tabList_data.id;
                                        $.ajax({
                                            type: "post",
                                            contentType: "application/json",
                                            url: config_constant.URL_HEADER + '/task/b/update/start_time?id=' + inspectorGetId,
                                            // data: JSON.stringify({
                                            //     id : inspectorGetId
                                            // }),
                                            success: function (data) {
                                                if (data.code == 0) {
                                                    that.removeClass('tableList_green').addClass('tableList_disabled');
                                                    that.next().removeClass('tableList_disabled').addClass('tableList_green');
                                                    that.next().next().removeClass('tableList_disabled').addClass('tableList_green');
                                                    // layer.alert("领取成功");

                                                } else {
                                                    layer.alert("领取失败");
                                                }
                                            },
                                            error: function (data) {
                                                layer.alert("错误");
                                            }
                                        })
                                    }
                                } else if (layEvent == 'inspectorSubmitTask') {
                                    //质检员提交任务
                                    var that = obj.tr.find(".tableList_Inspector_SubmitTask");
                                    var tableList_BeginToQualityCheck_node = obj.tr.find(".tableList_BeginToQualityCheck");

                                    var inspectorSubmitTaskContent = '';
                                    inspectorSubmitTaskContent += '<form class="layui-form" action="">';
                                    inspectorSubmitTaskContent += '<div class="tableList-position" style="margin-left:20px;">';
                                    inspectorSubmitTaskContent += '<div class="tableList-Layui-label">质检人天</div>';
                                    inspectorSubmitTaskContent += '<div class="layui-input-inline" style="width:91%;">';
                                    inspectorSubmitTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="质检人天" autocomplete="off" class="layui-input inspectorTime">';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '<div class="tableList-position">';
                                    inspectorSubmitTaskContent += '<div class="tableList-search-position">';
                                    inspectorSubmitTaskContent += '<div class="tableList-Layui-label">质检任务错误量</div>';
                                    inspectorSubmitTaskContent += '<div class="layui-input-inline">';
                                    inspectorSubmitTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="质检任务错误量" autocomplete="off" class="layui-input inspectorError">';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '<div class="tableList-search-position">';
                                    inspectorSubmitTaskContent += '<div class="layui-form-item">';
                                    inspectorSubmitTaskContent += '<div class="tableList-Layui-label">质检任务是否合格</div>';
                                    inspectorSubmitTaskContent += '<div class="layui-input-inline">';
                                    inspectorSubmitTaskContent += '<select>';
                                    inspectorSubmitTaskContent += '<option value="0">合格</option>';
                                    inspectorSubmitTaskContent += '<option value="1">不合格</option>';
                                    inspectorSubmitTaskContent += '</select>';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '<div class="tableList-moveBtnPosition">';
                                    inspectorSubmitTaskContent += '<div class="layui-btn layui-btn-primary inspectorCancel">取消</div>';
                                    inspectorSubmitTaskContent += '<div class="layui-btn layui-btn-normal inspectorKeep">保存</div>';
                                    inspectorSubmitTaskContent += '</div>';
                                    inspectorSubmitTaskContent += '</form>';

                                    if (that.hasClass('tableList_disabled')) {
                                        return;
                                    } else {
                                        layer.open({
                                            type: 1,
                                            skin: 'layui-layer-taskSkin',
                                            title: '提交任务',
                                            closeBtn: 0,
                                            area: ['450px', '300px'],
                                            shadeClose: true,
                                            content: inspectorSubmitTaskContent,
                                            success: function (layero, index) {
                                                var inspectorWindow = index,
                                                    inspectorMsgId = JSON.parse($.sessionStorage.getItem('tabList_data')).id;
                                                $(".inspectorKeep").on('click', function () {
                                                    var inspectorTime = $(".inspectorTime").val();
                                                    var inspectorError = $(".inspectorError").val();
                                                    var inspectorQualified = $(".layui-select-title>input:last").val();
                                                    var isQualifiedNum = 0;
                                                    if (inspectorQualified == '合格') {
                                                        isQualifiedNum = 1;
                                                    } else {
                                                        isQualifiedNum = 0;
                                                    }
                                                    if (inspectorTime != "" && inspectorError != "" && inspectorQualified != "") {
                                                        if (isNaN(Number(inspectorTime)) == false) {
                                                            if (isNaN(Number(inspectorError)) == false) {
                                                                $.ajax({
                                                                    type: "post",
                                                                    contentType: "application/json",
                                                                    url: config_constant.URL_HEADER + '/task/b/update/end_time',
                                                                    data: JSON.stringify({
                                                                        id: inspectorMsgId,
                                                                        preManday: inspectorTime,
                                                                        wrongNumber: inspectorError,
                                                                        isQualified: isQualifiedNum
                                                                    }),
                                                                    success: function (data) {
                                                                        if (data.code == 0) {
                                                                            that.removeClass('tableList_green').addClass('tableList_disabled');
                                                                            tableList_BeginToQualityCheck_node.removeClass('tableList_green').addClass('tableList_disabled');
                                                                            layer.alert("保存成功");
                                                                            layer.close(inspectorWindow);
                                                                        } else {
                                                                            layer.alert("保存失败");
                                                                        }
                                                                    },
                                                                    error: function (data) {
                                                                        layer.alert("错误");
                                                                    }
                                                                })
                                                            } else {
                                                                layer.alert("制作任务错误量必须为数字类型");
                                                            }
                                                        } else {
                                                            layer.alert("制作人天必须为数字类型");

                                                        }
                                                    } else {
                                                        layer.alert("信息不能为空");
                                                    }
                                                })
                                                $(".inspectorCancel").on('click', function () {
                                                    layer.close(inspectorWindow);
                                                })
                                            }
                                        })
                                    }
                                } else if (layEvent == 'editorSubmitTask') {
                                    //编辑员提交任务
                                    var that = obj.tr.find(".tableList_Editor_SubmitTask");
                                    var tableList_BeginToQualityCheck_node = obj.tr.find(".tableList_BeginToQualityCheck");
                                    var editerSubmitTaskContent = '';
                                    editerSubmitTaskContent += '<div class="tableList-position" style="padding-top:5%;">';
                                    editerSubmitTaskContent += '<label class="tableList-Layui-label">制作人天</label>';
                                    editerSubmitTaskContent += '<div class="layui-input-inline" style="width:75%;">';
                                    editerSubmitTaskContent += '<input type="text" name="title" required  lay-verify="required" placeholder="制作人天" autocomplete="off" class="layui-input editerInput">';
                                    editerSubmitTaskContent += '</div>';
                                    editerSubmitTaskContent += '<div class="tableList-moveBtnPosition" style="padding-top:5%;">';
                                    editerSubmitTaskContent += '<div class="layui-btn layui-btn-primary tableList-moveBtn editerCancel">取消</div>';
                                    editerSubmitTaskContent += '<div class="layui-btn layui-btn-normal editerKeep">保存</div>';
                                    editerSubmitTaskContent += '</div>';
                                    editerSubmitTaskContent += '</div>';
                                    if (that.hasClass('tableList_disabled')) {
                                        return;
                                    } else {
                                        layer.open({
                                            type: 1,
                                            skin: 'layui-layer-taskSkin',
                                            title: '提交任务',
                                            closeBtn: 0,
                                            area: ['350px', '170px'],
                                            shadeClose: true,
                                            content: editerSubmitTaskContent,
                                            success: function (layero, index) {
                                                var editerWindow = index;
                                                $(".editerKeep").on('click', function () {
                                                    var editerInput = $(".editerInput").val();
                                                    if (editerInput != undefined && editerInput != "" && editerInput != 0) {
                                                        var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                                                        var editerTaskId = tabList_data.id;
                                                        if (isNaN(Number(editerInput)) == true) {
                                                            layer.alert("请填写数字类型");
                                                        } else {
                                                            $.ajax({
                                                                type: "post",
                                                                contentType: "application/json",
                                                                url: config_constant.URL_HEADER + '/task/b/update/end_time',
                                                                data: JSON.stringify({
                                                                    id: editerTaskId,
                                                                    preManday: editerInput
                                                                }),
                                                                success: function (data) {
                                                                    if (data.code == 0) {
                                                                        that.removeClass('tableList_green').addClass('tableList_disabled');

                                                                        tableList_BeginToQualityCheck_node.removeClass('tableList_green').addClass('tableList_disabled');
                                                                        layer.alert("保存成功");
                                                                        layer.close(editerWindow);
                                                                    } else {
                                                                        layer.alert("保存失败");
                                                                    }
                                                                },
                                                                error: function (data) {
                                                                    layer.alert("错误");
                                                                }
                                                            })

                                                        }
                                                    } else {
                                                        layer.alert("制作人天不能为0或空")
                                                    }

                                                })
                                                $(".editerCancel").on('click', function () {
                                                    layer.close(editerWindow);
                                                })
                                            }
                                        })
                                    }
                                } else if (layEvent == 'openQuality') {
                                    var that = obj.tr.find(".tableList_BeginToQualityCheck");
                                    if (that.hasClass('tableList_disabled')) {
                                        return;
                                    } else {
                                        var tabList_data = JSON.parse($.sessionStorage.getItem('tabList_data'));
                                        var taskId = tabList_data.task_id;
                                        var taskIdJson = null;
                                        if (tabList_data.projects_value == "路牙") {
                                            taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.curb'
                                        }
                                        if (tabList_data.projects_value == "车道线") {
                                            taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.json'
                                        }
                                        if (tabList_data.projects_value == "栅栏") {
                                            taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.barrier'
                                        }
                                        if (tabList_data.projects_value == "地标") {
                                            taskIdJson = tabList_data.task_id + '-' + tabList_data.sub_task_id + '.roadsign'
                                        }
                                        var versionId = null;
                                        // var filePath=tabList_data.task_id+'-'+tabList_data.sub_task_id;
                                        var href2D = config_constant.EDITING_PLATFORM_HREF + "/2deditor?task=" + taskId + "&file=" + taskIdJson + "&ver=" + versionId;
                                        // var href3D = config_constant.EDITING_PLATFORM_HREF + "/3deditor?task=" + taskId + "&file=" + taskIdJson + "&pcAddr=" + filePath;
                                        window.open(href2D, "_blank")
                                    }

                                }
                            });
                        })
                    } else {
                        var tableConfig = componentData.tableConfig;
                        table.render({
                            elem: elemId,
                            method: tableConfig.method,
                            url: tableConfig.url, //数据接口
                            page: tableConfig.page, //开启分页
                            limits: tableConfig.limits,
                            cols: tableConfig.cols,
                            done: function (res) {
                                // for (var i = 0; i < res.data.length; i++) {
                                //     var openStatus = res.data[i].status,
                                //         ststemOpen = $('.tableList_system_open'),
                                //         ststemClose = $('.tableList_system_close');
                                //     //用户管理的 开启/禁用 操作
                                //     if (openStatus == 1) { //1表示开启需要关闭,禁用为绿
                                //         $(ststemOpen[i]).removeClass('tableList_green').addClass('tableList_disabled');
                                //         $(ststemClose[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                //     } else {
                                //         $(ststemOpen[i]).removeClass('tableList_disabled').addClass('tableList_green');
                                //         $(ststemClose[i]).removeClass('tableList_green').addClass('tableList_disabled');
                                //     }
                                // }
                            }
                        });
                        element.init();
                        form.render();


                        //导出excel图表
                        var exportExcel = '#exportExcel-tableList' + listId.id;
                        $(exportExcel).on('click', function () {
                            $('#' + listId.id + ' .layui-table').tableExport({
                                type: 'excel',
                                escape: 'false',
                                tableName: '导出图表'
                            });
                        })
                        //点击详细信息页面跳转传递参数到下一个页面
                        var filterId = 'filter-tableList-' + listId.id;
                        table.on('tool(' + filterId + ')', function (obj) {
                            var tableId = obj.data;
                            // var layEvent = obj.event;
                            $.sessionStorage.setItem('tabList_data', JSON.stringify(tableId));
                            //用户管理的 开启/禁用 操作
                            // var tableList_syste_close_node = obj.tr.find(".tableList_system_close"),
                            //     tableList_system_open_node = obj.tr.find(".tableList_system_open"),
                            //     systemUserId = parseInt(tableId.id);
                            // if (layEvent == "tableList_system_open") {
                            //     if (tableList_system_open_node.hasClass('tableList_green')) {
                            //         $.ajax({
                            //             type: "get",
                            //             contentType: "application/json",
                            //             url: config_constant.URL_HEADER + '/sys/user/start/status/' + systemUserId,
                            //             // data: JSON.stringify({
                            //             //     id : systemUserId
                            //             // }),
                            //             success: function (data) {
                            //                 if (data.code == 0) {
                            //                     layer.alert("修改成功");
                            //                     tableList_system_open_node.removeClass('tableList_green').addClass('tableList_disabled');
                            //                     tableList_syste_close_node.removeClass('tableList_disabled').addClass('tableList_green');
                            //                 } else {
                            //                     layer.alert("修改失败");
                            //                 }
                            //             },
                            //             error: function (data) {
                            //                 layer.alert("错误");
                            //             }
                            //         })
                            //     } else {
                            //         return;
                            //     }
                            // } else if (layEvent == "tableList_system_close") {
                            //     if (tableList_syste_close_node.hasClass('tableList_green')) {
                            //         $.ajax({
                            //             type: "get",
                            //             contentType: "application/json",
                            //             url: config_constant.URL_HEADER + '/sys/user/stop/status/' + systemUserId,
                            //             // data: JSON.stringify({
                            //             //     id : systemUserId
                            //             // }),
                            //             success: function (data) {
                            //                 if (data.code == 0) {
                            //                     layer.alert("修改成功");
                            //                     tableList_system_open_node.removeClass('tableList_disabled').addClass('tableList_green');
                            //                     tableList_syste_close_node.removeClass('tableList_green').addClass('tableList_disabled');
                            //                 } else {
                            //                     layer.alert("修改失败");
                            //                 }
                            //             },
                            //             error: function (data) {
                            //                 layer.alert("错误");
                            //             }
                            //         })
                            //     } else {
                            //         return;
                            //     }
                            // }
                        });
                    }

                }

            })
        },
        changeData: function (index, parameterObj, ChangeObj) {
            var getRoot = $("[id^='render-tableList']");
            $.each(getRoot, function (key, listId) {
                var getNodeHtml = $('#' + listId.id);
                var componentData = getNodeHtml.data('componentData');
                var componentIndex = getNodeHtml.data('componentIndex');
                var componentName = getNodeHtml.data('componentName');
                if (componentIndex == index) {
                    if (componentData.userIdParameter != undefined && componentData.userIdParameter != null) {
                        var userIdParameterObj = {};
                        userIdParameterObj.KeyValue = parameterObj;
                        userIdParameterObj.type = "搜索的参数";
                        componentData.userIdParameter.push(userIdParameterObj);
                        getNodeHtml.data('componentData', componentData);
                    } else {
                        componentData.userIdParameter = [];
                        var userIdParameterObj = {};
                        userIdParameterObj.KeyValue = parameterObj;
                        userIdParameterObj.type = "搜索的参数";
                        componentData.userIdParameter.push(userIdParameterObj);
                        getNodeHtml.data('componentData', componentData);
                    }
                }
            })
            this.tableList();

        },
    }

    exports('tableList', obj);
});