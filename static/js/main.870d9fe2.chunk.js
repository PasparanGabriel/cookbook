(this.webpackJsonpcookbook=this.webpackJsonpcookbook||[]).push([[0],{216:function(e,t,a){e.exports=a(415)},404:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(83),s=a.n(i),c=a(13),o=a(24),l=a(45),u=a(57),h=a(214),m=a(25),p=a(9),d=Object(c.b)((function(e){return{auth:e.firebase.auth}}))((function(e){return e.auth.uid?r.a.createElement("h1",null,"Cookbook"):r.a.createElement(m.a,{to:"/sign-in"})})),b=a(44),g=a(23),f=a(85),E=a(86),S=a(89),O=a(87),v=a(17),C=a(90),N=(a(404),function(e){return r.a.createElement("div",{className:"containerCentral"},e.children)}),j=(a(405),function(e){var t,a="btn";return a+=e.type?" "+e.type:"",a+=e.position?" "+e.position:"",a+=e.size?" "+e.size:"",t=e.onClick,r.a.createElement("button",{className:a,onClick:t},e.children)}),k=(a(406),function(e){var t,a;return t=e.children?"input wrongValue":"input",a=""!==e.value?"label":"labelOff",r.a.createElement("div",{className:"group"},r.a.createElement("label",{className:a},e.placeholder),r.a.createElement("input",{className:t,onChange:e.onChange,name:e.name,placeholder:e.placeholder,type:e.type,value:e.value}))}),I=(a(407),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(S.a)(this,Object(O.a)(t).call(this,e))).state={user:{email:"",password:""},inputValidation:!0},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.redirectSignUp=a.redirectSignUp.bind(Object(v.a)(a)),a}return Object(C.a)(t,e),Object(E.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(g.a)({},r,Object(b.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.user;t.email&&t.password?this.props.signIn(t):this.setState({inputValidation:!1})}},{key:"redirectSignUp",value:function(){this.props.history.push("/sign-up")}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.inputValidation,n=this.props,i=n.auth,s=n.authError;return i.uid?r.a.createElement(m.a,{to:"/"}):r.a.createElement(N,null,r.a.createElement("h1",{className:"textSignIn"},"Sign In"),s&&r.a.createElement("h1",{className:"signInFailed"},s),r.a.createElement("form",null,r.a.createElement(k,{type:"text",name:"email",value:t.email,placeholder:"Email",onChange:this.handleChange},!a&&!t.email),r.a.createElement(k,{type:"password",name:"password",value:t.password,placeholder:"Password",onChange:this.handleChange},!a&&!t.password),r.a.createElement(j,{type:"info",size:"xLarge",onClick:this.handleSubmit},"Sign in")),r.a.createElement("div",{className:"orContainerSignIn"},r.a.createElement("span",{className:"orSignIn"},"OR")),r.a.createElement(j,{type:"info",size:"xLarge",onClick:this.redirectSignUp},"Sign up"))}}]),t}(n.PureComponent)),y=Object(c.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"SIGNIN_SUCCESS"})})).catch((function(e){t({type:"SIGNIN_ERROR",err:e})}))}}(t))}}}))(I),U=(a(408),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(S.a)(this,Object(O.a)(t).call(this,e))).state={user:{firstName:"",lastName:"",email:"",password:""},inputValidation:!0},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.redirectSignIn=a.redirectSignIn.bind(Object(v.a)(a)),a}return Object(C.a)(t,e),Object(E.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(g.a)({},r,Object(b.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.user;t.firstName&&t.lastName&&t.email&&t.password?this.props.signUp(t):this.setState({inputValidation:!1})}},{key:"redirectSignIn",value:function(){this.props.history.push("/sign-in")}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.inputValidation,n=this.props,i=n.auth,s=n.authError;return i.uid?r.a.createElement(m.a,{to:"/"}):r.a.createElement(N,null,r.a.createElement("h1",{className:"textSignUp"},"Sign Up"),s&&r.a.createElement("h1",{className:"signUpFailed"},s),r.a.createElement("form",null,r.a.createElement(k,{type:"text",name:"firstName",value:t.firstName,placeholder:"First name",onChange:this.handleChange},!a&&!t.firstName),r.a.createElement(k,{type:"text",name:"lastName",value:t.lastName,placeholder:"Last name",onChange:this.handleChange},!a&&!t.lastName),r.a.createElement(k,{type:"text",name:"email",value:t.email,placeholder:"Email",onChange:this.handleChange},!a&&!t.email),r.a.createElement(k,{type:"password",name:"password",value:t.password,placeholder:"Password",onChange:this.handleChange},!a&&!t.password),r.a.createElement(j,{type:"info",size:"xLarge",onClick:this.handleSubmit},"Sign Up")),r.a.createElement("div",{className:"orContainerSignUp"},r.a.createElement("span",{className:"orSignUp"},"OR")),r.a.createElement(j,{type:"info",size:"xLarge",onClick:this.redirectSignIn},"Sign in"))}}]),t}(n.PureComponent)),w=Object(c.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,i=n.getFirestore,s=r(),c=i();s.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return c.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(U),R=a(43),x=Object(c.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement(j,{type:"info",position:"right",onClick:e.signOut},"Sign Out")})),F=(a(409),Object(c.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth;return r.a.createElement("div",{className:"containerNav"},r.a.createElement("nav",{className:"nav"},r.a.createElement(R.a,{to:"/",className:"cookbook item"},"Cookbook"),t.uid&&r.a.createElement(x,null)))}))),P={authError:null,authErrorSignIn:null},G=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN_ERROR":return Object(g.a)({},e,{authErrorSignIn:t.err.message});case"SIGNIN_SUCCESS":return Object(g.a)({},e,{authErrorSignIn:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_ERROR":return Object(g.a)({},e,{authError:t.err.message});case"SIGNUP_SUCCESS":return Object(g.a)({},e,{authError:null});default:return e}},firebase:u.firebaseReducer,firestore:l.firestoreReducer}),_=a(88),z=a.n(_);a(410),a(412);z.a.initializeApp({apiKey:"AIzaSyAi8K3muEmBp5LY4jlPnjdheN5RD9nrenY",authDomain:"cookbook-76fa8.firebaseapp.com",databaseURL:"https://cookbook-76fa8.firebaseio.com",projectId:"cookbook-76fa8",storageBucket:"cookbook-76fa8.appspot.com",messagingSenderId:"631264122155",appId:"1:631264122155:web:fb48428dd91490524aa16e"}),z.a.firestore().settings({});var L=Object(o.e)(G,Object(o.d)(Object(o.a)(h.a.withExtraArgument({getFirebase:u.getFirebase,getFirestore:l.getFirestore})),Object(l.reduxFirestore)(z.a)));s.a.render(r.a.createElement(c.a,{store:L},r.a.createElement(u.ReactReduxFirebaseProvider,{firebase:z.a,config:z.a,dispatch:L.dispatch,createFirestoreInstance:l.createFirestoreInstance},r.a.createElement((function(){return r.a.createElement(m.c,{history:Object(p.a)()},r.a.createElement(F,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:d}),r.a.createElement(m.b,{exact:!0,path:"/sign-in",component:y}),r.a.createElement(m.b,{exact:!0,path:"/sign-up",component:w})))}),null))),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.870d9fe2.chunk.js.map