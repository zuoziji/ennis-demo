if(!layui["layui.mobile"]){layui.config({base:layui.cache.dir+"lay/modules/mobile/"}).extend({"layer-mobile":"layer-mobile",zepto:"zepto","upload-mobile":"upload-mobile","layim-mobile":"layim-mobile"})}layui.define(["layer-mobile","zepto","layim-mobile"],function(l){l("mobile",{layer:layui["layer-mobile"],layim:layui["layim-mobile"]})});