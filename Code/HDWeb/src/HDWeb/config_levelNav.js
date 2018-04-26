/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台顶部导航栏配置文件
 */
layui.define(["config_constant",
    "mpm_config_task_administrator_taskManagement",
    "mpm_config_task_administrator_messageStatistics",
    "mpm_config_task_administrator_balance",
    "mpm_config_task_editingGroupLeader_taskLoading",
    "mpm_config_task_editingGroupLeader_taskCompleted",
    "mpm_config_task_editor_taskCompleted",
    "mpm_config_task_editor_taskLoading",
    "mpm_config_task_qcLead_taskCompleted",
    "mpm_config_task_qcLead_taskLoading",
    "mpm_config_task_inspector_taskCompleted",
    "mpm_config_task_inspector_taskLoading",
    "mpm_config_system_system",
    "mpm_config_message_message",
    "mpm_config_personnel_editingGroupLeader",
    "mpm_config_personnel_editor",
    "mpm_config_collectionAndManagement_collectionManagerCollectionRequirementsManagement",
    "mpm_config_collectionAndManagement_theCollectorCollectsDemandManagement",
    "mpm_config_collectionAndManagement_acquisitionProgramManagement",
    "mpm_config_collectionAndManagement_collectionManagerCollectionPlanManagement",
    "mpm_config_collectionAndManagement_administratorCollectionTrackLibraryManagement",
    "mpm_config_postProcessingManagementNav_administratorPostProcessingProcessManagement",
    "mpm_config_postProcessingManagementNav_collectionAdministratorPostProcessingTrackManagement",
    "mpm_config_task_internalManagerTaskCompleteProcessStateManagement",
    "mpm_config_task_internalManagementProblemRecordAndFeedback",
    "mpm_config_task_noInternalManagementProblemRecordAndFeedback"


], function (exports) {
    var config_constant = layui.config_constant;
    var mpm_config_task_administrator_taskManagement = layui.mpm_config_task_administrator_taskManagement;
    var mpm_config_task_administrator_balance = layui.mpm_config_task_administrator_balance;
    var mpm_config_task_administrator_messageStatistics = layui.mpm_config_task_administrator_messageStatistics;
    var mpm_config_task_editingGroupLeader_taskLoading = layui.mpm_config_task_editingGroupLeader_taskLoading;
    var mpm_config_task_editingGroupLeader_taskCompleted = layui.mpm_config_task_editingGroupLeader_taskCompleted;
    var mpm_config_task_editor_taskCompleted = layui.mpm_config_task_editor_taskCompleted;
    var mpm_config_task_editor_taskLoading = layui.mpm_config_task_editor_taskLoading;
    var mpm_config_task_qcLead_taskCompleted = layui.mpm_config_task_qcLead_taskCompleted;
    var mpm_config_task_qcLead_taskLoading = layui.mpm_config_task_qcLead_taskLoading;
    var mpm_config_task_inspector_taskCompleted = layui.mpm_config_task_inspector_taskCompleted;
    var mpm_config_task_inspector_taskLoading = layui.mpm_config_task_inspector_taskLoading;
    var mpm_config_system_system = layui.mpm_config_system_system;
    var mpm_config_message_message = layui.mpm_config_message_message;
    var mpm_config_personnel_editingGroupLeader = layui.mpm_config_personnel_editingGroupLeader;
    var mpm_config_personnel_editor = layui.mpm_config_personnel_editor;



    var mpm_config_collectionAndManagement_collectionManagerCollectionRequirementsManagement = layui.mpm_config_collectionAndManagement_collectionManagerCollectionRequirementsManagement;
    var mpm_config_collectionAndManagement_theCollectorCollectsDemandManagement = layui.mpm_config_collectionAndManagement_theCollectorCollectsDemandManagement;
    var mpm_config_collectionAndManagement_acquisitionProgramManagement = layui.mpm_config_collectionAndManagement_acquisitionProgramManagement;
    var mpm_config_collectionAndManagement_collectionManagerCollectionPlanManagement = layui.mpm_config_collectionAndManagement_collectionManagerCollectionPlanManagement;
    var mpm_config_collectionAndManagement_administratorCollectionTrackLibraryManagement = layui.mpm_config_collectionAndManagement_administratorCollectionTrackLibraryManagement;
    var mpm_config_postProcessingManagementNav_administratorPostProcessingProcessManagement = layui.mpm_config_postProcessingManagementNav_administratorPostProcessingProcessManagement;
    var mpm_config_postProcessingManagementNav_collectionAdministratorPostProcessingTrackManagement = layui.mpm_config_postProcessingManagementNav_collectionAdministratorPostProcessingTrackManagement;
    var mpm_config_task_internalManagerTaskCompleteProcessStateManagement = layui.mpm_config_task_internalManagerTaskCompleteProcessStateManagement;
    var mpm_config_task_internalManagementProblemRecordAndFeedback = layui.mpm_config_task_internalManagementProblemRecordAndFeedback;
    var mpm_config_task_noInternalManagementProblemRecordAndFeedback = layui.mpm_config_task_noInternalManagementProblemRecordAndFeedback;
    
    var obj = {
        config_levelNav: function (componentName) {
            var config_levelNav = [{
                    title: "采集管理",
                    name: "CollectionAndManagement",
                    href: "javascript:void(0);",
                    menu: [{
                        title: "采集管理员采集需求管理",
                        name: "CollectionManagerCollectionRequirementsManagement",
                        href: config_constant.HREF_HEADER + "CollectionAndManagement/CollectionManagerCollectionRequirementsManagement",
                        configContain: mpm_config_collectionAndManagement_collectionManagerCollectionRequirementsManagement,
                    },
                    {
                        title: "采集员采集需求管理",
                        name: "TheCollectorCollectsDemandManagement",
                        href: config_constant.HREF_HEADER + "CollectionAndManagement/TheCollectorCollectsDemandManagement",
                        configContain: mpm_config_collectionAndManagement_theCollectorCollectsDemandManagement,
                    },
                    {
                        title: "采集管理员采集计划管理",
                        name: "AcquisitionProgramManagement",
                        href: config_constant.HREF_HEADER + "CollectionAndManagement/AcquisitionProgramManagement",
                        configContain: mpm_config_collectionAndManagement_acquisitionProgramManagement,
                    },
                    {
                        title: "采集员采集计划管理",
                        name: "CollectionManagerCollectionPlanManagement",
                        href: config_constant.HREF_HEADER + "CollectionAndManagement/CollectionManagerCollectionPlanManagement",
                        configContain: mpm_config_collectionAndManagement_collectionManagerCollectionPlanManagement,
                    },
                    {
                        title: "管理员采集轨迹库管理",
                        name: "AdministratorCollectionTrackLibraryManagement",
                        href: config_constant.HREF_HEADER + "CollectionAndManagement/AdministratorCollectionTrackLibraryManagement",
                        configContain: mpm_config_collectionAndManagement_administratorCollectionTrackLibraryManagement,
                    }
                ]
                },
                {
                    title: "后处理管理",
                    name: "PostProcessingManagementNav",
                    href: "javascript:void(0);",
                    menu: [{
                        title: "管理员后处理流程管理",
                        name: "AdministratorPostProcessingProcessManagement",
                        href: config_constant.HREF_HEADER + "PostProcessingManagementNav/AdministratorPostProcessingProcessManagement",
                        configContain: mpm_config_postProcessingManagementNav_administratorPostProcessingProcessManagement,
                    },
                    {
                        title: "采集管理员后处理轨迹管理",
                        name: "CollectionAdministratorPostProcessingTrackManagement",
                        href: config_constant.HREF_HEADER + "PostProcessingManagementNav/CollectionAdministratorPostProcessingTrackManagement",
                        configContain: mpm_config_postProcessingManagementNav_collectionAdministratorPostProcessingTrackManagement,
                    },
                ]
                },
                {
                    title: "任务管理",
                    name: "TaskManagementNav",
                    href: "javascript:void(0);",
                    menu: [{
                            title: "管理员任务管理",
                            name: "AdministratorTaskManagement",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/AdministratorTaskManagement",
                            configContain: mpm_config_task_administrator_taskManagement,
                        },
                        {
                            title: "管理员统计信息",
                            name: "AdministratorMessageStatistics",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/AdministratorMessageStatistics",
                            configContain: mpm_config_task_administrator_messageStatistics,
                        },
                        {
                            title: "管理员结算信息",
                            name: "AdministratorBalance",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/AdministratorBalance",
                            configContain: mpm_config_task_administrator_balance,
                        },
                        {
                            title: "编辑组长进行中任务列表",
                            name: "EditingGroupLeaderTaskLoading",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/EditingGroupLeaderTaskLoading",
                            configContain: mpm_config_task_editingGroupLeader_taskLoading,
                        },
                        {
                            title: "编辑组长已完成任务列表",
                            name: "EditingGroupLeaderTaskCompleted",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/EditingGroupLeaderTaskCompleted",
                            configContain: mpm_config_task_editingGroupLeader_taskCompleted,
                        },
                        {
                            title: "编辑员进行中任务列表",
                            name: "EditorTaskLoading",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/EditorTaskLoading",
                            configContain: mpm_config_task_editor_taskLoading,
                        },
                        {
                            title: "编辑员已完成任务列表",
                            name: "EditorTaskCompleted",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/EditorTaskCompleted",
                            configContain: mpm_config_task_editor_taskCompleted,
                        },
                        {
                            title: "质检组长进行中任务列表",
                            name: "QCLeadTaskLoading",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/QCLeadTaskLoading",
                            configContain: mpm_config_task_qcLead_taskLoading,
                        },
                        {
                            title: "质检组长已完成任务列表",
                            name: "QCLeadTaskCompleted",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/QCLeadTaskCompleted",
                            configContain: mpm_config_task_qcLead_taskCompleted,
                        },
                        {
                            title: "质检员进行中任务列表",
                            name: "InspectorTaskLoading",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/InspectorTaskLoading",
                            configContain: mpm_config_task_inspector_taskLoading,
                        },
                        {
                            title: "质检员已完成任务列表",
                            name: "InspectorTaskCompleted",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/InspectorTaskCompleted",
                            configContain: mpm_config_task_inspector_taskCompleted,
                        },
                        {
                            title: "内业管理员任务全流程状态管理",
                            name: "InternalManagerTaskCompleteProcessStateManagement",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/InternalManagerTaskCompleteProcessStateManagement",
                            configContain: mpm_config_task_internalManagerTaskCompleteProcessStateManagement,
                        },
                        {
                            title: "内业管理员问题记录与反馈",
                            name: "InternalManagementProblemRecordAndFeedback",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/InternalManagementProblemRecordAndFeedback",
                            configContain: mpm_config_task_internalManagementProblemRecordAndFeedback,
                        },
                        {
                            title: "非内业管理员问题记录与反馈",
                            name: "NoInternalManagementProblemRecordAndFeedback",
                            href: config_constant.HREF_HEADER + "TaskManagementNav/NoInternalManagementProblemRecordAndFeedback",
                            configContain: mpm_config_task_noInternalManagementProblemRecordAndFeedback,
                        }

                    ]
                },
                {
                    title: "系统管理",
                    name: "SystemManagementNav",
                    href: config_constant.HREF_HEADER + "SystemManagementNav/userManagement",
                    configContain: mpm_config_system_system,
                },
                {
                    title: "消息",
                    name: "TheMessageNav",
                    href: config_constant.HREF_HEADER + "TheMessageNav",
                    configContain: mpm_config_message_message,
                    iconContain: {
                        // icon: "./img/header/邮件.png"
                        icon: "./img/header/email.png"
                    }
                },
                {
                    title: "人员",
                    name: "PersonnelNav",
                    href: "javascript:void(0);",
                    iconContain: {
                        name: "人员",
                        // icon: "./img/header/管理员.png"
                        icon: "./img/header/administrator.png"
                    },
                    menu: [{
                            title: "编辑组长",
                            name: "EditingGroupLeader",
                            href: config_constant.HREF_HEADER + "PersonnelNav/EditingGroupLeader",
                            configContain: mpm_config_personnel_editingGroupLeader,
                        },
                        {
                            title: "编辑员",
                            name: "Editor",
                            href: config_constant.HREF_HEADER + "PersonnelNav/Editor",
                            configContain: mpm_config_personnel_editor,
                        },
                        {
                            title: "质检组长",
                            name: "QCLead",
                            href: config_constant.HREF_HEADER + "PersonnelNav/EditingGroupLeader",
                            configContain: mpm_config_personnel_editingGroupLeader,
                        },
                        {
                            title: "质检员",
                            name: "Inspector",
                            href: config_constant.HREF_HEADER + "PersonnelNav/Editor",
                            configContain: mpm_config_personnel_editor,
                        },
                        {
                            title: "管理员",
                            name: "Administrator",
                            href: config_constant.HREF_HEADER + "PersonnelNav/Editor",
                            configContain: mpm_config_personnel_editor,
                        },

                    ]
                },
                {
                    title: "退出",
                    name: "ExitNav",
                    href: config_constant.HREF_HEADER + "LogOut",
                    iconContain: {
                        // icon: "./img/header/登出.png"
                        icon: "./img/header/loginOut.png"
                    }
                }
            ];
            return config_levelNav;
        }
    }

    exports("config_levelNav", obj);
});