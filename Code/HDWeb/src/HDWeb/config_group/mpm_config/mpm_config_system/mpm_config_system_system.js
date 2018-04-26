/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:高精度地图在线生产管理平台系统管理配置文件
 */
layui.define(['config_constant'], function (exports) {
    var config_constant = layui.config_constant;
    var obj = {
        title: "系统管理",
        name: "SystemManagementNav",
        href: config_constant.HREF_HEADER + "SystemManagementNav/userManagement",
        containt: [{
                title: "用户管理",
                name: "userManagement",
                href: config_constant.HREF_HEADER + "SystemManagementNav/userManagement",
                routesName: "mpm_system_system_userManagement",
                body: [{
                    title: "用户管理",
                    components: [{
                            name: 'button',
                            addButton: [{
                                    buttonName: '新增',
                                    url: config_constant.URL_HEADER + '/sys/user/save_qq',
                                    type: 'AddData',
                                    //宽度400px和800px可选
                                    area: ['400px', "520px"],
                                    listConfig: [{
                                            title: "QQ号码",
                                            submitkey: "qq",
                                            type: 'input',
                                            placeholder: "请输入QQ号",
                                            valueType: "number",
                                        },
                                        {
                                            title: "姓名",
                                            submitkey: "name",
                                            type: 'input',
                                            placeholder: "请输入姓名",
                                            valueType: "string"
                                        },
                                        {
                                            title: "单位",
                                            submitkey: "department",
                                            type: 'formSelect',
                                            placeholder: "请选择单位",
                                            url: config_constant.URL_HEADER + '/sys/department/search',
                                        },
                                        {
                                            title: "角色",
                                            submitkey: "role",
                                            type: 'formSelect',
                                            placeholder: "请选择角色",
                                            url: config_constant.URL_HEADER + '/sys/role/search',
                                        },
                                        {
                                            title: "入职时间",
                                            submitkey: "hireDate",
                                            placeholder: "请选择入职时间",
                                            type: 'timeSelect',
                                        }
                                    ]
                                },
                                {
                                    buttonName: '修改',
                                    url: config_constant.URL_HEADER + '/sys/user/update',
                                    type: 'ModifyData',
                                    area: ['400px', "450px"],
                                    userIdParameter: [{
                                        sessionStorageParameter: 'id',
                                        submitKey: 'id',
                                        keyType: "number"
                                    }, ],
                                    listConfig: [{
                                            title: "姓名",
                                            submitkey: "name",
                                            readDataKey: "name",
                                            type: 'input',
                                            placeholder: "请输入姓名",
                                            valueType: "string"
                                        },
                                        {
                                            title: "单位",
                                            submitkey: "department",
                                            readDataKey: "department_value",
                                            type: 'formSelect',
                                            placeholder: "请选择单位",
                                            url: config_constant.URL_HEADER + '/sys/department/search',
                                        },
                                        {
                                            title: "角色",
                                            submitkey: "role",
                                            readDataKey: "role_value",
                                            type: 'formSelect',
                                            placeholder: "请选择角色",
                                            url: config_constant.URL_HEADER + '/sys/role/search',
                                        },
                                        {
                                            title: "入职时间",
                                            submitkey: "hireDate",
                                            readDataKey: "hire_date",
                                            placeholder: "请选择入职时间",
                                            type: 'timeSelect',
                                        }
                                    ]
                                },
                                // {
                                //     buttonName: '删除',
                                //     type: 'Delete',
                                //     url: config_constant.URL_HEADER + "/sys/user/delete_id"
                                // },
                                {
                                    buttonName: '导入用户',
                                    url: config_constant.URL_HEADER + '/sys/user/save',
                                    type: 'UploadFile'
                                },
                                {
                                    buttonName: '搜索',
                                    url: config_constant.URL_HEADER + '/taskstatus/find',
                                    type: 'SearchData',
                                    listConfig: [{
                                        title: "搜索",
                                        submitkey: "qq",
                                        type: 'input'
                                    }]
                                },
                            ]
                        },
                        {
                            name: "tableList",
                            userIdParameter: [{
                                type: '搜索的参数',
                                KeyValue: {
                                    qq: ""
                                }
                            }],
                            tableTemplet: "userManagement",
                            tableConfig: {
                                url: config_constant.URL_HEADER + "/sys/user/search",
                                method: "post",
                                page: true,
                                limits: [10, 20, 30],
                                cols: [
                                    [ //表头
                                        {
                                            field: "id",
                                            title: "ID",
                                            sort: true,
                                            event: "vehicleNumber"
                                        }, {
                                            field: "qq",
                                            title: "qq号码",
                                            sort: true,
                                            event: "vehicleNumber"
                                        }, {
                                            field: "name",
                                            title: "姓名",
                                            sort: true,
                                            event: "vehicleNumber"
                                        }, {
                                            field: "department_value",
                                            title: "单位",
                                            sort: true,
                                            event: "vehicleNumber"
                                        }, {
                                            field: "role_value",
                                            title: "角色",
                                            sort: true,
                                            event: "vehicleNumber"
                                        }, {
                                            field: "hire_date",
                                            title: "入职时间",
                                            sort: true,
                                            event: "vehicleNumber"
                                        },
                                        {
                                            title: "操作",
                                            sort: false,
                                            width: '180',
                                            align: 'center',
                                            event: "vehicleNumber",
                                            templet: '<div><a class="layui-btn tableList_btnsize tableList_system_open" lay-event="tableList_system_open">启用</a><a class="layui-btn tableList_btnsize tableList_system_close" lay-event="tableList_system_close">禁用</a></div>'
                                        },
                                    ]
                                ],
                            }
                        },
                    ]
                }, ],
            },
            {
                title: "字典表管理",
                name: "dictionaryManagement",
                href: "javascript:void(0);",
                children: [{
                        title: "任务类型维护",
                        name: "taskmaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/dictionaryManagement/taskType",
                        routesName: "mpm_system_system_taskType",
                        body: [{
                            title: "任务类型维护",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/task/type/save',
                                            type: 'AddData',
                                            area: ['400px'],
                                            listConfig: [{
                                                    title: "任务类型名称",
                                                    placeholder: "请输入任务类型名称",
                                                    submitkey: "value",
                                                    type: 'input',
                                                    valueType: "string",
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    submitkey: "des",
                                                    valueType: "string",
                                                    valueType: "string",
                                                    type: 'input'
                                                },
                                            ]
                                        },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/task/type/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "number"
                                            }, ],
                                            listConfig: [{
                                                    title: "任务类型名称",
                                                    submitkey: "value",
                                                    readDataKey: "value",
                                                    valueType: "string",
                                                    placeholder: "请输入任务类型名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    valueType: "string",
                                                    submitkey: "des",
                                                    readDataKey: "des",
                                                    type: 'input'
                                                },
                                            ]
                                        },
                                        {
                                            buttonName: '删除',
                                            type: 'Delete',
                                            url: config_constant.URL_HEADER + '/task/type/delete',
                                        }
                                    ]
                                },
                                {
                                    name: "tableList",
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/task/type/search",
                                        method: "get",
                                        page: false,
                                        limits: [10, 20, 30],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "id",
                                                    title: "编号",
                                                    sort: true,
                                                    event: "qq"
                                                }, {
                                                    field: "value",
                                                    title: "任务类型名称",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "des",
                                                    title: "描述",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                    {
                        title: "制作项维护",
                        name: "makeMaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/dictionaryManagement/makeMaintenance",
                        routesName: "mpm_system_system_makeMaintenance",
                        body: [{
                            title: "制作项维护",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/task/projects/save',
                                            type: 'AddData',
                                            area: ['400px'],
                                            listConfig: [{
                                                    title: "制作项名称",
                                                    submitkey: "value",
                                                    valueType: "string",
                                                    placeholder: "请制作项名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    valueType: "string",
                                                    submitkey: "des",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/task/projects/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "number"
                                            }, ],
                                            listConfig: [{
                                                    title: "制作项名称",
                                                    submitkey: "value",
                                                    readDataKey: "value",
                                                    valueType: "string",
                                                    placeholder: "请输入制作项名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    valueType: "string",
                                                    readDataKey: "des",
                                                    submitkey: "des",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '删除',
                                            url: config_constant.URL_HEADER + '/task/projects/delete',
                                            type: 'Delete'
                                        }
                                    ]
                                },
                                {
                                    name: "tableList",
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/task/projects/search",
                                        method: "get",
                                        page: false,
                                        limits: [10, 20, 30],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "id",
                                                    title: "编号",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "value",
                                                    title: "制作项名称",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "des",
                                                    title: "描述",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                    {
                        title: "任务状态维护",
                        name: "taskStatusMaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/dictionaryManagement/taskstatusmaintenance",
                        routesName: "mpm_system_system_taskStatusMaintenance",
                        body: [{
                            title: "任务状态维护",
                            components: [{
                                    name: 'button',
                                    addButton: [
                                        // {
                                        //     buttonName: '新增',
                                        //     url: config_constant.URL_HEADER + '/task/status/save',
                                        //     type: 'AddData',
                                        //     listConfig: [{
                                        //             title: "任务状态名称",
                                        //             submitkey: "value",
                                        //             valueType: "string",
                                        //             placeholder: "请输入任务状态名称",
                                        //             type: 'input'
                                        //         },
                                        //         {
                                        //             title: "描述",
                                        //             placeholder: "请输入描述",
                                        //             valueType: "string",
                                        //             submitkey: "des",
                                        //             type: 'input'
                                        //         }
                                        //     ]
                                        // },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/task/status/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "number"
                                            }, ],
                                            listConfig: [{
                                                    title: "任务状态名称",
                                                    submitkey: "value",
                                                    valueType: "string",
                                                    readDataKey: "value",
                                                    placeholder: "请输入任务状态名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    valueType: "string",
                                                    readDataKey: "des",
                                                    submitkey: "des",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        // {
                                        //     buttonName: '删除',
                                        //     type: 'Delete',
                                        //     url: config_constant.URL_HEADER + '/task/status/delete',
                                        // }
                                    ]
                                },
                                {
                                    name: "tableList",
                                    userIdParameter: [{
                                        type: '路径设置字典表',
                                        KeyValue: {
                                            taskPath: null
                                        }
                                    }],
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/task/status/search",
                                        method: "get",
                                        page: false,
                                        limits: [10],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "id",
                                                    title: "序号",
                                                    sort: true,
                                                    event: "id"
                                                }, {
                                                    field: "value",
                                                    title: "任务状态",
                                                    sort: true,
                                                    event: "taskPath"
                                                }, {
                                                    field: "des",
                                                    title: "备注",
                                                    sort: true,
                                                    event: "pathComment"
                                                }
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                    {
                        title: "单位维护",
                        name: "unitmaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/dictionaryManagement/unitmaintenance",
                        routesName: "mpm_system_system_unitmaintenance",
                        body: [{
                            title: "单位维护",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/sys/department/save',
                                            type: 'AddData',
                                            area: ['400px'],
                                            listConfig: [{
                                                    title: "单位名称",
                                                    submitkey: "value",
                                                    valueType: "string",
                                                    placeholder: "请输入单位名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    submitkey: "des",
                                                    valueType: "string",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/sys/department/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "number"
                                            }, ],
                                            listConfig: [{
                                                    title: "单位名称",
                                                    submitkey: "value",
                                                    readDataKey: "value",
                                                    placeholder: "请输入单位名称",
                                                    valueType: "string",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    readDataKey: "des",
                                                    valueType: "string",
                                                    submitkey: "des",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '删除',
                                            url: config_constant.URL_HEADER + '/sys/department/delete',
                                            type: 'Delete'
                                        }
                                    ]
                                },
                                {
                                    name: "tableList",
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/sys/department/search",
                                        method: "get",
                                        page: false,
                                        limits: [10, 20, 30],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "id",
                                                    title: "编号",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "value",
                                                    title: "单位名称",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "des",
                                                    title: "描述",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                    {
                        title: "城市代码管理",
                        name: "unitmaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/dictionaryManagement/cityCodeManagement",
                        routesName: "mpm_system_system_cityCodeManagement",
                        body: [{
                            title: "城市代码管理",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/cityinfo/insert',
                                            type: 'AddData',
                                            area: ['400px'],
                                            listConfig: [{
                                                    title: "城市代码",
                                                    submitkey: "id",
                                                    valueType: "number",
                                                    placeholder: "请输入城市代码",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "省份",
                                                    placeholder: "请输入省份",
                                                    submitkey: "province",
                                                    valueType: "string",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "城市",
                                                    placeholder: "请输入城市",
                                                    submitkey: "city",
                                                    valueType: "string",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/cityinfo/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "string"
                                            }, ],
                                            listConfig: [{
                                                    title: "城市代码",
                                                    submitkey: "id",
                                                    readDataKey: "id",
                                                    placeholder: "请输入城市代码",
                                                    valueType: "number",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "省份",
                                                    placeholder: "请输入省份",
                                                    readDataKey: "province",
                                                    valueType: "string",
                                                    submitkey: "province",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "城市",
                                                    placeholder: "请输入城市",
                                                    readDataKey: "city",
                                                    valueType: "string",
                                                    submitkey: "city",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '删除',
                                            url: config_constant.URL_HEADER + '/cityinfo/delete',
                                            type: 'Delete'
                                        }
                                    ]
                                },
                                {
                                    name: "tableList",
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/cityinfo/find",
                                        method: "post",
                                        page: false,
                                        limits: [10, 20, 30],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "id",
                                                    title: "城市代码",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "province",
                                                    title: "省份",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                                {
                                                    field: "city",
                                                    title: "城市",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                    {
                        title: "车牌号管理",
                        name: "unitmaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/dictionaryManagement/licensePlateManagement",
                        routesName: "mpm_system_system_licensePlateManagement",
                        body: [{
                            title: "车牌号管理",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/carinfo/insert',
                                            type: 'AddData',
                                            area: ['400px'],
                                            listConfig: [{
                                                    title: "车牌号",
                                                    submitkey: "id",
                                                    valueType: "string",
                                                    placeholder: "请输入车牌号",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "车号",
                                                    placeholder: "请输入车号",
                                                    submitkey: "num",
                                                    valueType: "number",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "停车地点",
                                                    placeholder: "请输入停车地点",
                                                    submitkey: "place",
                                                    valueType: "string",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/sys/department/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "number"
                                            }, ],
                                            listConfig: [{
                                                    title: "车牌号",
                                                    submitkey: "id",
                                                    readDataKey: "id",
                                                    placeholder: "请输入车牌号",
                                                    valueType: "string",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "车号",
                                                    placeholder: "请输入车号",
                                                    readDataKey: "num",
                                                    valueType: "number",
                                                    submitkey: "num",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "停车地点",
                                                    placeholder: "请输入停车地点",
                                                    readDataKey: "place",
                                                    valueType: "string",
                                                    submitkey: "place",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '删除',
                                            url: config_constant.URL_HEADER + '/carinfo/delete',
                                            type: 'Delete'
                                        }
                                    ]
                                },
                                {
                                    name: "tableList",
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/carinfo/find",
                                        method: "post",
                                        page: false,
                                        limits: [10, 20, 30],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "id",
                                                    title: "车牌号",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "num",
                                                    title: "车号",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                                {
                                                    field: "place",
                                                    title: "停车地点",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                    {
                        title: "制作项-任务类型-效率管理",
                        name: "unitmaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/dictionaryManagement/productionItemAndTaskTypeAndeEfficiencyManagement",
                        routesName: "mpm_system_system_productionItemAndTaskTypeAndeEfficiencyManagement",
                        body: [{
                            title: "制作项-任务类型-效率管理",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/sys/department/save',
                                            type: 'FormSubmission',
                                            area: ['615px', '665px'],
                                            tableConfig: {
                                                url: config_constant.URL_HEADER + "/sys/department/search",
                                                method: "get",
                                                page: false,
                                                limits: [10, 20, 30],
                                                cols: [
                                                    [ //表头
                                                        {
                                                            field: 'id',
                                                            title: 'ID',
                                                            sort: true,
                                                            event: 'task_num',
                                                            minWidth: 110
                                                        }, {
                                                            field: 'part_name',
                                                            title: '制作项',
                                                            sort: true,
                                                            event: 'part_name',
                                                            minWidth: 110
                                                        }, {
                                                            field: 'value',
                                                            title: '任务类型',
                                                            sort: true,
                                                            event: 'problem',
                                                            minWidth: 110
                                                        }, {
                                                            field: 'des',
                                                            title: '效率值',
                                                            sort: true,
                                                            event: 'ask_date',
                                                            minWidth: 110,
                                                            edit: 'text'
                                                        }
                                                    ]
                                                ],
                                            },
                                        },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/sys/department/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "number"
                                            }, ],
                                            listConfig: [{
                                                    title: "制作项",
                                                    submitkey: "null",
                                                    readDataKey: "value",
                                                    placeholder: "请输入制作项",
                                                    valueType: "string",
                                                    type: 'input',
                                                    inputDisable: "true",
                                                },
                                                {
                                                    title: "任务类型",
                                                    placeholder: "请输入任务类型",
                                                    readDataKey: "des",
                                                    valueType: "string",
                                                    submitkey: "null",
                                                    type: 'input',
                                                    inputDisable: "true",
                                                },
                                                {
                                                    title: "版本时间",
                                                    placeholder: "请输入任务类型",
                                                    readDataKey: "des",
                                                    valueType: "string",
                                                    submitkey: "null",
                                                    type: 'input',
                                                    inputDisable: "true",
                                                },
                                                {
                                                    title: "效率",
                                                    placeholder: "请输入效率",
                                                    readDataKey: "des",
                                                    valueType: "number",
                                                    submitkey: "des",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '删除',
                                            url: config_constant.URL_HEADER + '/sys/department/delete',
                                            type: 'Delete'
                                        }
                                    ]
                                },
                                {
                                    name: "tableList",
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/sys/department/search",
                                        method: "get",
                                        page: false,
                                        limits: [10, 20, 30],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "id",
                                                    title: "id",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                                {
                                                    field: "id",
                                                    title: "制作项",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "value",
                                                    title: "任务类型",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "des",
                                                    title: "效率值",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                                {
                                                    field: "des",
                                                    title: "版本时间",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                ]
            },
            {
                title: "后处理管理",
                name: "dictionaryManagement",
                href: "javascript:void(0);",
                children: [{
                        title: "环节设置",
                        name: "linkSet",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/postProcessingLinkSetting/linkSet",
                        routesName: "mpm_system_system_linkSet",
                        body: [{
                            title: "环节设置",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/task-step/save',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                    localStorageParameter: 'id',
                                                    submitKey: 'createUser',
                                                    keyType: "string"
                                                },
                                                {
                                                    localStorageParameter: 'id',
                                                    submitKey: 'modifyUser',
                                                    keyType: "string"
                                                },
                                            ],
                                            type: 'AddData',
                                            listConfig: [{
                                                    title: "环节名称",
                                                    submitkey: "stepName",
                                                    valueType: "string",
                                                    placeholder: "请输入环节名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "环节类型",
                                                    submitkey: "stepType",
                                                    valueType: "string",
                                                    placeholder: "请输入环节类型",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "备注",
                                                    placeholder: "请输入备注",
                                                    valueType: "string",
                                                    submitkey: "stepComment",
                                                    type: 'input'
                                                },
                                            ]
                                        },
                                        {
                                            buttonName: '修改',
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "string"
                                            }, ],
                                            url: config_constant.URL_HEADER + '/task-step/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            listConfig: [{
                                                    title: "环节名称",
                                                    submitkey: "stepName",
                                                    readDataKey: "step_name",
                                                    valueType: "string",
                                                    placeholder: "请输入环节名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "环节类型",
                                                    submitkey: "stepType",
                                                    readDataKey: "step_type",
                                                    valueType: "string",
                                                    placeholder: "请输入环节类型",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "备注",
                                                    placeholder: "请输入备注",
                                                    valueType: "string",
                                                    submitkey: "stepComment",
                                                    readDataKey: "step_comment",
                                                    type: 'input'
                                                },
                                            ]
                                        },
                                        {
                                            buttonName: '搜索',
                                            url: config_constant.URL_HEADER + '/task-step/select',
                                            type: 'SearchData',
                                            listConfig: [{
                                                title: "搜索",
                                                submitkey: "stepName",
                                                type: 'input'
                                            }]
                                        },
                                    ]
                                },
                                {
                                    name: "tableList",
                                    userIdParameter: [{
                                        type: '路径设置字典表',
                                        KeyValue: {
                                            stepName: null
                                        }
                                    }],
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/task-step/select",
                                        method: "post",
                                        page: true,
                                        limits: [10, 20, 30],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "step_name",
                                                    title: "环节名称",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "step_type",
                                                    title: "环节类型",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "create_time",
                                                    title: "创建时间",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "user_name",
                                                    title: "创建人",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                }, {
                                                    field: "step_comment",
                                                    title: "备注",
                                                    sort: true,
                                                    event: "vehicleNumber"
                                                },
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                    {
                        title: "流程设置",
                        name: "makemaintenance",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/postProcessingLinkSetting/processSet",
                        routesName: "mpm_system_system_processSet",
                        body: [{
                            title: "流程设置",
                            components: [{
                                name: 'systemProcessSetting',
                            }, ]
                        }, ],
                    },
                    {
                        title: "路径设置",
                        name: "pathSettings",
                        href: config_constant.HREF_HEADER + "SystemManagementNav/postProcessingLinkSetting/pathSettings",
                        routesName: "mpm_system_system_pathSettings",
                        body: [{
                            title: "路径设置",
                            components: [{
                                    name: 'button',
                                    addButton: [{
                                            buttonName: '新增',
                                            url: config_constant.URL_HEADER + '/task-path/save',
                                            type: 'AddData',
                                            area: ['400px'],
                                            listConfig: [{
                                                    title: "路径名称",
                                                    submitkey: "taskPath",
                                                    valueType: "chinese",
                                                    placeholder: "请输入非中文路径名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "描述",
                                                    placeholder: "请输入描述",
                                                    valueType: "string",
                                                    submitkey: "pathComment",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '修改',
                                            url: config_constant.URL_HEADER + '/task-path/update',
                                            type: 'ModifyData',
                                            area: ['400px'],
                                            userIdParameter: [{
                                                sessionStorageParameter: 'id',
                                                submitKey: 'id',
                                                keyType: "string"
                                            }, ],
                                            listConfig: [{
                                                    title: "路径名称",
                                                    submitkey: "taskPath",
                                                    valueType: "chinese",
                                                    readDataKey: "taskPath",
                                                    placeholder: "请输入非中文路径名称",
                                                    type: 'input'
                                                },
                                                {
                                                    title: "备注",
                                                    placeholder: "请输入备注",
                                                    valueType: "string",
                                                    readDataKey: "pathComment",
                                                    submitkey: "pathComment",
                                                    type: 'input'
                                                }
                                            ]
                                        },
                                        {
                                            buttonName: '删除',
                                            type: 'Delete',
                                            url: config_constant.URL_HEADER + '/task-path/delete',
                                        },
                                        {
                                            buttonName: '搜索',
                                            url: config_constant.URL_HEADER + '/task-path/select',
                                            type: 'SearchData',
                                            listConfig: [{
                                                title: "搜索",
                                                submitkey: "taskPath",
                                                type: 'input'
                                            }]
                                        },
                                    ]
                                },
                                {
                                    name: "tableList",
                                    userIdParameter: [{
                                        type: '路径设置字典表',
                                        KeyValue: {
                                            taskPath: null
                                        }
                                    }],
                                    tableConfig: {
                                        url: config_constant.URL_HEADER + "/task-path/select",
                                        method: "post",
                                        page: true,
                                        limits: [10],
                                        cols: [
                                            [ //表头
                                                {
                                                    field: "taskPath",
                                                    title: "路径",
                                                    sort: true,
                                                    event: "taskPath"
                                                }, {
                                                    field: "pathComment",
                                                    title: "描述",
                                                    sort: true,
                                                    event: "pathComment"
                                                }
                                            ]
                                        ],
                                    }
                                },
                            ]
                        }, ],
                    },
                ]
            },
            // {
            //     title: "采集平台接口配置",
            //     name: "collectPlatform",
            //     href: config_constant.HREF_HEADER + "SystemManagementNav/collectPlatform",
            //     routesName: "mpm_system_system_collectPlatform",
            //     body: []
            // },
        ]
    };

    exports("mpm_config_system_system", obj);
});