(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd727d6"],{"1c05":function(e,t,n){},"7a07":function(e,t,n){"use strict";n("1c05")},"8b29":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n("b775");function r(e){return Object(o["a"])({url:"/system/notice/list",method:"get",params:e})}function i(e){return Object(o["a"])({url:"/system/notice/"+e,method:"get"})}function s(e){return Object(o["a"])({url:"/system/notice",method:"post",data:e})}function a(e){return Object(o["a"])({url:"/system/notice",method:"put",data:e})}function c(e){return Object(o["a"])({url:"/system/notice/"+e,method:"delete"})}function l(e){return Object(o["a"])({url:"/system/noticeLog/add",method:"post",data:e})}},dd7b:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[n("h3",{staticClass:"title"},[e._v("易税云平台")]),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[n("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{prop:"code"}},[n("el-input",{staticStyle:{width:"63%"},attrs:{"auto-complete":"off",placeholder:"验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}},[n("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"validCode"},slot:"prefix"})],1),n("div",{staticClass:"login-code"},[n("img",{staticClass:"login-code-img",attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1),n("el-checkbox",{staticStyle:{margin:"0px 0px 25px 0px"},model:{value:e.loginForm.rememberMe,callback:function(t){e.$set(e.loginForm,"rememberMe",t)},expression:"loginForm.rememberMe"}},[e._v("记住密码")]),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?n("span",[e._v("登 录 中...")]):n("span",[e._v("登 录")])])],1)],1),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-login-footer"},[n("span",[e._v("Copyright © 2018-2019 zzhtax.com All Rights Reserved.")]),n("br"),n("img",{staticStyle:{width:"16px",height:"16px",display:"inline-block","margin-right":"4px"},attrs:{src:"http://www.beian.gov.cn/img/ghs.png"}}),n("span",[n("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[e._v("粤ICP备2022100305号-1")])])])}],i=(n("4de4"),n("d3b7"),n("13d5"),n("7ded")),s=n("8b29"),a=n("a78e"),c=n.n(a),l=n("720d"),u=n.n(l),d="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\nnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==",m="MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\n7Nt+PrgrxkiA50efORdI5U5lsW79MmFnusUA355oaSXcLhu5xxB38SMSyP2KvuKN\nPuH3owIDAQABAkAfoiLyL+Z4lf4Myxk6xUDgLaWGximj20CUf+5BKKnlrK+Ed8gA\nkM0HqoTt2UZwA5E2MzS4EI2gjfQhz5X28uqxAiEA3wNFxfrCZlSZHb0gn2zDpWow\ncSxQAgiCstxGUoOqlW8CIQDDOerGKH5OmCJ4Z21v+F25WaHYPxCFMvwxpcw99Ecv\nDQIgIdhDTIqD2jfYjPTY8Jj3EDGPbH2HHuffvflECt3Ek60CIQCFRlCkHpi7hthh\nYhovyloRYsM+IS9h/0BzlEAuO0ktMQIgSPT3aFAgJYwKpqRYKlLDVcflZFCKY7u3\nUP8iWi1Qw0Y=";function g(e){var t=new u.a;return t.setPublicKey(d),t.encrypt(e)}function p(e){var t=new u.a;return t.setPrivateKey(m),t.decrypt(e)}var f={name:"Login",data:function(){return{codeUrl:"",cookiePassword:"",loginForm:{username:"",password:"",rememberMe:!1,code:"",uuid:""},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}],code:[{required:!0,trigger:"change",message:"验证码不能为空"}]},loading:!1,redirect:void 0,noticeList:[]}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.getCode()},methods:{getCode:function(){var e=this;Object(i["a"])().then((function(t){e.codeUrl="data:image/gif;base64,"+t.img,e.loginForm.uuid=t.uuid}))},getCookie:function(){var e=c.a.get("username"),t=c.a.get("password"),n=c.a.get("rememberMe");this.loginForm={username:void 0===e?this.loginForm.username:e,password:void 0===t?this.loginForm.password:p(t),rememberMe:void 0!==n&&Boolean(n)}},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){t&&(e.loading=!0,e.loginForm.rememberMe?(c.a.set("username",e.loginForm.username,{expires:30}),c.a.set("password",g(e.loginForm.password),{expires:30}),c.a.set("rememberMe",e.loginForm.rememberMe,{expires:30})):(c.a.remove("username"),c.a.remove("password"),c.a.remove("rememberMe")),e.$store.dispatch("Login",e.loginForm).then((function(t){e.$router.push({path:e.redirect||"/"}),setTimeout((function(){Object(s["e"])().then((function(t){e.noticeList=t.rows;for(var n=(new Date).getTime(),o=e.noticeList.filter((function(e){var t=new Date(e.validity).getTime();return t>n})),r=function(t){setTimeout((function(){e.$notify({title:o[t].noticeTitle,dangerouslyUseHTMLString:!0,message:'<div class="ql-editor">'.concat(o[t].noticeContent,"</div>"),position:"bottom-right"},200)}))},i=0;i<o.length;i++)r(i);o.length>0&&Object(s["b"])({noticeIds:o.reduce((function(e,t){return e.push(t.noticeId),e}),[])})}))}),1e3)})).catch((function(t){502==t.code&&e.$router.push({name:"editpassword",params:{userName:e.loginForm.username}}),e.loading=!1,e.getCode()})))}))}}},h=f,v=(n("7a07"),n("2877")),b=Object(v["a"])(h,o,r,!1,null,null,null);t["default"]=b.exports}}]);