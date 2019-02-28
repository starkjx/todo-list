(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),o=n.n(i),r=(n(16),n(1)),l=n(2),c=n(4),u=n(3),h=n(5),d=(n(17),n(18),n(19),n(20),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onKeyPress:this.submit.bind(this),onChange:this.changeTitle.bind(this)})}}]),t}(a.Component)),m=(n(21),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}},{key:"render",value:function(){return s.a.createElement("div",{className:"TodoItem"},s.a.createElement("div",{className:"TitleWrapper"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),this.props.todo.title),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}}]),t}(a.Component)),p=(n(22),n(9)),g=n(6),f=n.n(g);function v(){var e=f.a.User.current();return e?b(e):null}function b(e){return Object(p.a)({id:e.id},e.attributes)}f.a.init({appId:"s1ANbxEGwFdBx7B6kYXKwFTS-gzGzoHsz",appKey:"TpqDhnKsp9JPiFy211TrVtt6"});var E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp",formData:{username:"",password:""}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){var s=new f.a.User;s.setUsername(e),s.setPassword(t),s.signUp().then(function(e){var t=b(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignUp.call(null,e)},function(e){switch(e.code){case 202:alert("\u7528\u6237\u540d\u88ab\u5360\u7528");break;default:alert(e)}})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){f.a.User.logIn(e,t).then(function(e){var t=b(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignIn.call(null,e)},function(e){switch(e.code){case 210:alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d");break;default:alert(e)}})}},{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.formData[e]=t.target.value,this.setState(n)}},{key:"render",value:function(){var e=s.a.createElement("form",{className:"signUp",onSubmit:this.signUp.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c"))),t=s.a.createElement("form",{className:"signIn",onSubmit:this.signIn.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55")));return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)}),"\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)}),"\u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?e:null,"signIn"===this.state.selected?t:null)))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:v()||{},newTodo:"",todoList:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addTodo",value:function(e){this.state.todoList.push({id:k(),title:e.target.value,status:"",deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"delete",value:function(e,t){t.deleted=!0,this.setState(this.state)}},{key:"onSignUpOrSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"onSignOut",value:function(){f.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(m,{todo:t,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)}))});return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e",this.state.user.id?s.a.createElement("button",{onClick:this.onSignOut.bind(this)},"\u767b\u51fa"):null),s.a.createElement("div",{className:"InputWrapper"},s.a.createElement(d,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(E,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:this.onSignUpOrSignIn.bind(this)}))}}]),t}(a.Component),y=0;function k(){return y+=1}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.0bbc4ac4.chunk.js.map