webpackJsonp([0],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var s=a(1),n=l(s),c=a(30),o=l(c),r=a(163),d=l(r),i=a(164),u=l(i),p=a(165),m=l(p),f={name:"todos",todos:[{completed:!1,title:"finish exercise"},{completed:!1,title:"lean jsx"},{completed:!0,title:"lean react"}]},h=n["default"].createClass({displayName:"App",getInitialState:function(){return{listTitle:"",todolist:f,type:"all"}},changeHandel:function(e){this.setState({value:e.target.value})},addTaskHandel:function(){var e=this.refs.addTask;if(""===e.value)return!1;var t={completed:!1,title:e.value},a=this.state.todolist.todos;a.push(t),this.setState(a),e.value=""},delTaskHandel:function(e){var t=this;return function(){var a=t.state.todolist.todos;a.splice(e,1),t.setState(a)}},comTaskHandel:function(e){var t=this;return function(){var a=t.state.todolist.todos;a[e].completed=!a[e].completed,t.setState(a)}},clearCompleteHandel:function(){var e=this.state.todolist,t=e.todos.filter(function(e){return!e.completed});e.todos=t,this.setState(e)},switchTypeHandel:function(e){this.setState({type:e})},render:function(){var e=this.state.todolist.todos,t=e.reduce(function(e,t){return t.completed?e:e+1},0),a=e.length?n["default"].createElement(d["default"],{lefted:t,type:this.state.type,switchType:this.switchTypeHandel,clearCom:this.clearCompleteHandel}):"";return n["default"].createElement("div",{ref:"app"},n["default"].createElement(u["default"],{title:f.name}),n["default"].createElement("div",{className:"add-taskItem-box"},n["default"].createElement("input",{ref:"addTask",className:"new-todo",placeholder:"What needs to be done?",defaultValue:this.state.listTitle,onChange:this.changeHandel}),n["default"].createElement("button",{className:"add-taskItem",onClick:this.addTaskHandel},"Add")),n["default"].createElement(m["default"],{todos:f.todos,type:this.state.type,delTask:this.delTaskHandel,comTask:this.comTaskHandel}),a)}});o["default"].render(n["default"].createElement(h,null),document.getElementById("AppRoot"))},163:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=l.createClass({displayName:"Footer",render:function(){var e={all:"",active:"",completed:""};return e[this.props.type]="selected",l.createElement("footer",{className:"footer"},l.createElement("span",{className:"todo-count"},l.createElement("strong",null," ",this.props.lefted," ")," ",l.createElement("span",null," ")," ",l.createElement("span",null," items ")," ",l.createElement("span",null," left ")),l.createElement("ul",{className:"filters"},l.createElement("li",null," ",l.createElement("a",{href:"#",className:e.all,onClick:this.props.switchType.bind(null,"all")}," All ")," "),l.createElement("li",null," ",l.createElement("a",{href:"#active",className:e.active,onClick:this.props.switchType.bind(null,"active")}," Active ")," "),l.createElement("li",null," ",l.createElement("a",{href:"#completed",className:e.completed,onClick:this.props.switchType.bind(null,"completed")}," Completed ")," ")),l.createElement("button",{className:"clear-completed",onClick:this.props.clearCom.bind(null,"")},"Clear completed"))}});t["default"]=s},164:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=l.createClass({displayName:"Header",render:function(){return l.createElement("header",{className:"header"},l.createElement("h1",null,this.props.title))}});t["default"]=s},165:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(166),n=l(s),c=a(1),o=c.createClass({displayName:"TodoList",render:function(){return c.createElement("ul",{className:"todo-list"},this.props.todos.map(function(e,t){switch(this.props.type){case"all":return c.createElement(n["default"],{data:e,key:t,delTask:this.props.delTask(t),comTask:this.props.comTask(t)});case"active":if(!e.completed)return c.createElement(n["default"],{data:e,key:t,delTask:this.props.delTask(t),comTask:this.props.comTask(t)});break;case"completed":if(e.completed)return c.createElement(n["default"],{data:e,key:t,delTask:this.props.delTask(t),comTask:this.props.comTask(t)})}}.bind(this)))}});t["default"]=o},166:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=l.createClass({displayName:"TodoItem",render:function(){var e=this.props.data,t=e.completed?"completed":"";return l.createElement("li",{className:t},l.createElement("div",{className:"view"},l.createElement("input",{className:"toggle",type:"checkbox",onClick:this.props.comTask,checked:e.completed}),l.createElement("label",null," ",e.title," "),l.createElement("button",{ref:"deleteTask",className:"destroy",onClick:this.props.delTask}," ")),l.createElement("input",{type:"text",className:"edit",value:e.title}))}});t["default"]=s}});