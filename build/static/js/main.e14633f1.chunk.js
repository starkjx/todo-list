(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(9),o=n.n(i),r=(n(16),n(2)),l=n(3),c=n(5),u=n(4),d=n(6);n(17),n(18),n(19),n(20);function m(e,t){"Enter"===t.key&&""!==t.target.value.trim()&&e.onSubmit(t)}function h(e,t){e.onChange(t)}var p=function(e){return s.a.createElement("input",{type:"text",value:e.content,className:"TodoInput",onChange:h.bind(null,e),onKeyPress:m.bind(null,e)})},g=(n(21),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}},{key:"render",value:function(){return s.a.createElement("div",{className:"TodoItem"},s.a.createElement("div",{className:"TitleWrapper"},s.a.createElement("div",{className:"CheckboxWrapper"},s.a.createElement("input",{className:"Item-checkbox",type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("label",{htmlFor:"Item-checkbox",onClick:this.toggle.bind(this)})),s.a.createElement("p",null,this.props.todo.title)),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}}]),t}(a.Component)),f=(n(22),n(7)),b=n(1),v=n.n(b);v.a.init({appId:"s1ANbxEGwFdBx7B6kYXKwFTS-gzGzoHsz",appKey:"TpqDhnKsp9JPiFy211TrVtt6"});v.a;var E={getByUser:function(e,t,n){var a=new v.a.Query("Todo");a.equalTo("deleted",!1),a.find().then(function(e){var n=e.map(function(e){return Object(f.a)({id:e.id},e.attributes)});t.call(null,n)},function(e){n&&n.call(null,e)})},create:function(e,t,n){var a=e.status,s=e.title,i=e.deleted,o=new(v.a.Object.extend("Todo"));o.set("title",s),o.set("status",a),o.set("deleted",i);var r=new v.a.ACL;r.setPublicReadAccess(!1),r.setWriteAccess(v.a.User.current(),!0),r.setReadAccess(v.a.User.current(),!0),o.setACL(r),o.save().then(function(e){t.call(null,e.id)},function(e){n&&n.call(null,e)})},update:function(e,t,n){var a=e.id,s=e.title,i=e.status,o=e.deleted,r=v.a.Object.createWithoutData("Todo",a);void 0!==s&&r.set("title",s),void 0!==i&&r.set("status",i),void 0!==o&&r.set("deleted",o),r.save().then(function(e){t&&t.call(null)},function(e){n&&n.call(null,e)})},destory:function(e,t,n){E.update({id:e,deleted:!0},t,n)}};function w(){var e=v.a.User.current();return e?S(e):null}function S(e){return Object(f.a)({id:e.id},e.attributes)}var y=function(e){return s.a.createElement("form",{className:"signUp",onSubmit:e.onSubmit.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:e.formData.email,onChange:e.onChange.bind(null,"email")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:e.formData.username,onChange:e.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:e.formData.password,onChange:e.onChange.bind(null,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c")))},O=function(e){return s.a.createElement("form",{className:"signIn",onSubmit:e.onSubmit}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:e.formData.username,onChange:e.onChange.bind(null,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:e.formData.password,onChange:e.onChange.bind(null,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55"),s.a.createElement("button",{onClick:e.onForgotPassword},"\u5fd8\u8bb0\u5bc6\u7801?")))},k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"signInOrSignUp"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)}),"\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)}),"\u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?s.a.createElement(y,{formData:this.props.formData,onSubmit:this.props.onSignUp,onChange:this.props.onChange}):null,"signIn"===this.state.selected?s.a.createElement(O,{formData:this.props.formData,onSubmit:this.props.onSignIn,onChange:this.props.onChange,onForgotPassword:this.props.onForgotPassword}):null))}}]),t}(a.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"forgotPassword"},s.a.createElement("h3",null,"\u91cd\u7f6e\u5bc6\u7801"),s.a.createElement("form",{className:"forgotPassword",onSubmit:this.props.onSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.props.formData.email,onChange:this.props.onChange.bind(null,"email")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u53d1\u9001\u91cd\u7f6e\u90ae\u4ef6"),s.a.createElement("button",{onClick:this.props.onReturnToSignIn},"\u8fd4\u56de\u767b\u5f55"))))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selectedTab:"signInOrSignUp",formData:{email:"",username:"",password:""}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a,s){var i=new v.a.User;i.setUsername(t),i.setEmail(e),i.setPassword(n),i.signUp().then(function(e){var t=S(e);a.call(null,t)},function(e){s.call(null,e)})}(n.email,n.username,n.password,function(e){t.props.onSignUp.call(null,e)},function(e){switch(e.code){case 202:alert("\u7528\u6237\u540d\u88ab\u5360\u7528");break;case 125:alert("\u90ae\u7bb1\u9519\u8bef\uff0c\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740");break;default:alert(e)}})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){v.a.User.logIn(e,t).then(function(e){var t=S(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignIn.call(null,e)},function(e){switch(e.code){case 210:alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d");break;case 211:alert("\u627e\u4e0d\u5230\u7528\u6237");break;default:alert(e)}})}},{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.formData[e]=t.target.value,this.setState(n)}},{key:"showForgotPassword",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="forgotPassword",this.setState(e)}},{key:"resetPassword",value:function(e){var t,n,a;e.preventDefault(),t=this.state.formData.email,v.a.User.requestPasswordReset(t).then(function(e){n.call()},function(e){a.call(null,e)})}},{key:"returnToSignIn",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="signInOrSignUp",this.setState(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},"signInOrSignUp"===this.state.selectedTab?s.a.createElement(k,{formData:this.state.formData,onSignIn:this.signIn.bind(this),onSignUp:this.signUp.bind(this),onChange:this.changeFormData.bind(this),onForgotPassword:this.showForgotPassword.bind(this)}):s.a.createElement(N,{formData:this.state.formData,onSubmit:this.resetPassword.bind(this),onChange:this.changeFormData.bind(this),onReturnToSignIn:this.returnToSignIn.bind(this)})))}}]),t}(a.Component),D=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:w()||{},newTodo:"",todoList:[]};var a=w();return a&&E.getByUser(a,function(e){var t=JSON.parse(JSON.stringify(n.state));t.todoList=e,n.setState(t)}),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"addTodo",value:function(e){var t=this,n={title:e.target.value,status:"",deleted:!1};E.create(n,function(e){n.id=e,t.state.todoList.push(n),t.setState({newTodo:"",todoList:t.state.todoList})},function(e){console.log(e)})}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"toggle",value:function(e,t){var n=this,a=t.status;t.status="completed"===t.status?"":"completed",E.update(t,function(){n.setState(n.state)},function(e){t.state=a,n.setState(n.state)})}},{key:"delete",value:function(e,t){var n=this;E.destory(t.id,function(){t.deleted=!0,n.setState(n.state)})}},{key:"onSignUpOrSignIn",value:function(e){if(e.username.length>6){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}else alert("\u7528\u6237\u540d\u548c\u5bc6\u7801\u957f\u5ea6\u9700\u5927\u4e8e6\uff01")}},{key:"onsignOut",value:function(){v.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(g,{todo:t,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)}))});return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"HeadWrapper"},s.a.createElement("div",{className:"Head"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e"),this.state.user.id?s.a.createElement("button",{onClick:this.onsignOut.bind(this)},"\u767b\u51fa"):null)),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(p,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(C,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:this.onSignUpOrSignIn.bind(this)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.e14633f1.chunk.js.map