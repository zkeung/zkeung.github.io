webpackJsonp([5],{Quw4:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={name:"loginer",data:function(){var e=this;return{isSee:"password",loading:!1,formData:{username:"",password:""},formRules:{username:[{required:!0,validator:function(r,t,a){""===t?a(new Error("请输入用户名")):"keung"==e.formData.username?a():a(new Error("用户名输入错误~"))},trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:function(r,t,a){""===t?a(new Error("请输入密码")):"997997"!==e.formData.password?a(new Error("密码错误")):a()}}]}}},methods:{submitForm:function(e){var r=this;this.loading=!0;var t=this.formData.username,a=this.formData.password;this.$refs.loginform.validate(function(e,s){if(!e)return!1;r.$axios.post("/marvelLogin?username="+t+"&password="+a).then(function(e){r.loading=!1,r.$router.push({path:"/"}),console.log(e)}).catch(function(){r.loading=!1})})},seeCode:function(){""===this.isSee?this.isSee="password":this.isSee=""}}},s={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-container"},[t("div",{staticClass:"form-position"},[t("h2",[e._v("欢迎来到漫威数据管理系统")]),e._v(" "),t("el-form",{ref:"loginform",staticClass:"ruleForm",attrs:{"status-icon":"","hide-required-asterisk":"",model:e.formData,"label-width":"30px",rules:e.formRules}},[t("el-form-item",{attrs:{prop:"username"}},[t("i",{staticClass:"el-icon-service",attrs:{slot:"label"},slot:"label"}),e._v(" "),t("el-input",{attrs:{autocomplete:"on",placeholder:"请输入用户名"},model:{value:e.formData.username,callback:function(r){e.$set(e.formData,"username",r)},expression:"formData.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("i",{staticClass:"el-icon-view",attrs:{slot:"label"},on:{click:e.seeCode},slot:"label"}),e._v(" "),t("el-input",{attrs:{type:e.isSee,placeholder:"请输入密码"},model:{value:e.formData.password,callback:function(r){e.$set(e.formData,"password",r)},expression:"formData.password"}})],1),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(r){return e.submitForm()}}},[e._v("登录")])],1)],1)])},staticRenderFns:[]};var o=t("VU/8")(a,s,!1,function(e){t("dgb2")},null,null);r.default=o.exports},dgb2:function(e,r){}});
//# sourceMappingURL=5.8cab072a479c32995f5d.js.map