(this["webpackJsonprestaraunt-menu"]=this["webpackJsonprestaraunt-menu"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(7),c=r.n(s),i=(r(16),r(8)),u=r(10),o=r(2),d=r(3),l=r(4),b=r(9),j=r(6),p=r(5),h=(r(17),r(0)),g={name:"Cheeseburger",price:1488,description:"Burger with meat and cheese",image:"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg",status:!0},O=function(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"EUR"})},f=function(e){var t={};return e.forEach((function(e){t[e]=(t[e]||0)+1})),Object.keys(t).map((function(e){return{id:e,count:t[e]}}))},m=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(d.a)(this,r),(e=t.call(this)).addBurger=function(t){e.setState({burgers:[].concat(Object(o.a)(e.state.burgers),[t])})},e.loadSample=function(){e.setState({burgers:[].concat(Object(o.a)(e.state.burgers),[g])})},e.addToOrder=function(t){e.setState({order:[].concat(Object(o.a)(e.state.order),[t.name])})},e.updateBurger=function(t,r){var n=e.state.burgers;n[t]=r,e.setState({burgers:[].concat(Object(o.a)(e.state.burgers),[n])}),e.setState({burgers:Object(o.a)(e.state.burgers.filter((function(e){return!Array.isArray(e)})))})},e.deleteBurger=function(t){var r=e.state.burgers;r.splice(t,1),e.setState({burgers:[].concat(Object(o.a)(e.state.burgers),[r])}),e.setState({burgers:Object(o.a)(e.state.burgers.filter((function(e){return!Array.isArray(e)})))})},e.state={burgers:[],order:[]},e.addBurger=e.addBurger.bind(Object(b.a)(e)),e}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.state.burgers.map((function(t,r){return Object(h.jsx)(R,{index:t,details:e.state.burgers[r],addToOrder:e.addToOrder},t)}));return Object(h.jsxs)("div",{className:"catch-of-the-day",children:[Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)(x,{}),Object(h.jsx)("ul",{children:t})]}),Object(h.jsx)(C,Object(u.a)({},this.state)),Object(h.jsx)(B,{addBurger:this.addBurger,loadSample:this.loadSample,burgers:this.state.burgers,updateBurger:this.updateBurger,deleteBurger:this.deleteBurger})]})}}]),r}(a.a.Component),x=function(){return Object(h.jsx)("header",{className:"top",children:Object(h.jsx)("h1",{children:"Menu"})})},v=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).addBurger=function(e){e.preventDefault();var t={name:n.nameRef.current.value,price:Number(n.priceRef.current.value),description:n.descriptionRef.current.value,image:n.imageRef.current.value,status:"yes"===n.statusRef.current.value};n.props.addBurger(t),e.currentTarget.reset()},n.nameRef=a.a.createRef(),n.priceRef=a.a.createRef(),n.descriptionRef=a.a.createRef(),n.imageRef=a.a.createRef(),n.statusRef=a.a.createRef(),n}return Object(l.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"burger-edit",onSubmit:this.addBurger,children:[Object(h.jsx)("input",{name:"name",type:"text",ref:this.nameRef,placeholder:"Name"}),Object(h.jsx)("input",{name:"price",type:"text",ref:this.priceRef,placeholder:"Price"}),Object(h.jsx)("input",{name:"description",type:"text",ref:this.descriptionRef,placeholder:"Description"}),Object(h.jsx)("input",{name:"image",type:"text",ref:this.imageRef,placeholder:"Image"}),Object(h.jsxs)("select",{name:"status",ref:this.statusRef,children:[Object(h.jsx)("option",{value:"yes",children:"Available"}),Object(h.jsx)("option",{value:"no",children:"Unavailable"})]}),Object(h.jsx)("button",{type:"submit",children:"Add Burger "})]})}}]),r}(a.a.Component),y=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).handleChange=function(e){var t=Object(u.a)(Object(u.a)({},n.props.burgers),{},Object(i.a)({},e.currentTarget.name,e.currentTarget.value));n.props.updateBurger(n.props.index,t)},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"burger-edit",children:[Object(h.jsx)("input",{name:"name",type:"text",onChange:this.handleChange,value:this.props.burgers.name,readonly:"readonly"}),Object(h.jsx)("input",{name:"price",type:"text",value:this.props.burgers.price,onChange:this.handleChange}),Object(h.jsx)("input",{name:"description",type:"text",value:this.props.burgers.description,onChange:this.handleChange}),Object(h.jsx)("input",{name:"image",type:"text",value:this.props.burgers.image,onChange:this.handleChange}),Object(h.jsxs)("select",{name:"status",value:this.props.burgers.status?"yes":"no",onChange:this.handleChange,children:[Object(h.jsx)("option",{value:"yes",children:"Available"}),Object(h.jsx)("option",{value:"no",children:"Unavailable"})]}),Object(h.jsx)("button",{onClick:function(){return e.props.deleteBurger(e.props.index)},children:"DELETE BURGER"})]})}}]),r}(a.a.Component),B=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(e){return Object(d.a)(this,r),t.call(this,e)}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[" ",Object(h.jsx)("h2",{children:"Stock"}),this.props.burgers.map((function(t,r){return Object(h.jsx)(y,{burgers:Object.values(e.props.burgers)[r],updateBurger:e.props.updateBurger,index:r,deleteBurger:e.props.deleteBurger},r)})),Object(h.jsx)(v,{addBurger:this.props.addBurger}),Object(h.jsx)("button",{onClick:this.props.loadSample,children:"LOAD SAMPLE BURGER"})]})}}]),r}(a.a.Component),C=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){for(var e=Object.values(this.props.order),t=Object.values(this.props.burgers),r={},n=0;n<t.length;n++)for(var a=t[n].name,s=0;s<e.length;s++)if(e[s]===a){r[a]=t[n].price;break}var c=0,i=(f(e).forEach((function(e){c+=r[e.id]*e.count})),f(e).map((function(e){return Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{class:"prices",children:[e.count," ",e.id,e.count>1?"s":""," ",O(r[e.id]*e.count)," "]})})})));return Object(h.jsxs)("div",{className:"order-wrap",id:"orders",children:[Object(h.jsx)("h2",{children:"Your order"}),i,Object(h.jsxs)("div",{className:0===c?"hidden":"",children:[Object(h.jsx)("b",{children:"Total: "}),O(c)]})]})}}]),r}(a.a.Component),R=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.props.details,r=!!t.status;return Object(h.jsxs)("li",{className:"menu-burger",children:[Object(h.jsx)("img",{src:t.image}),Object(h.jsxs)("h3",{className:"burger-name",children:[t.name,Object(h.jsx)("span",{className:"price",children:O(t.price)})]}),Object(h.jsx)("p",{children:t.description}),Object(h.jsx)("button",{disabled:!r,onClick:function(){e.props.addToOrder(e.props.index)},children:r?"ADD TO CART":"SOLD OUT"})]})}}]),r}(a.a.Component),S=m;c.a.render(Object(h.jsx)(m,{}),document.getElementById("root"));var k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.fbd937ca.chunk.js.map