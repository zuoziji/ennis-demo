/**
 * Copyright ©2018 DATAOJO. All Rights Reserved. 北京相数科技有限公司 版权所有
 * Created Date: 2018.01.08
 * Author: 付国强
 * instructions:管理员采集轨迹库管理
 */
layui.define(['header','nonavigationBody','panelCrumbs','trackLibraryManagement'],function (exports) {
    var obj = function (componentName) {
      layui.header.header(componentName);
      layui.nonavigationBody.nonavigationBody(componentName);
      layui.panelCrumbs.panelCrumbs(componentName);
      layui.trackLibraryManagement.trackLibraryManagement(componentName);

    }
    exports('mpm_collectionAndManagement_administratorCollectionTrackLibraryManagement', obj);
  });