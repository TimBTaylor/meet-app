(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{12:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(22),o=n.n(r),i=(n(29),n(2)),s=n(6),c=n(4),l=n(3),u=(n(12),n(0)),d=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showingDetails:!1},e.eventDetails=function(){!1===e.state.showingDetails?e.setState({showingDetails:!0}):e.setState({showingDetails:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime),a=n.toDateString(),r=n.toTimeString(),o="".concat(r.slice(0,5)," ").concat(r.slice(18));return Object(u.jsxs)("div",{className:"event-container",children:[Object(u.jsx)("h1",{className:"event-summary",children:t.summary}),Object(u.jsxs)("p",{className:"event-date",children:[a," "]}),Object(u.jsx)("p",{className:"event-time",children:o}),Object(u.jsx)("p",{className:"event-location",children:t.location}),this.state.showingDetails&&Object(u.jsxs)("div",{className:"event-details",children:[Object(u.jsx)("h3",{className:"about-event",children:"About event:"}),Object(u.jsx)("a",{className:"details-link",target:"_blank",rel:"noreferrer",href:t.htmlLink,children:"See details on Google Calendar"}),Object(u.jsx)("p",{className:"event-description",children:t.description})]}),Object(u.jsxs)("button",{className:"show-hide",onClick:function(){return e.eventDetails()},children:[" ",this.state.showingDetails?"hide description":"show description"," "]})]})}}]),n}(a.Component),h=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(u.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(u.jsx)("li",{className:"list-item",children:Object(u.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),p=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"alert",children:Object(u.jsxs)("p",{className:"alert-text",style:this.getStyle(),children:[this.props.text," "]})})}}]),n}(a.Component),m=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),f=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),v=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),g=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.props.updateEvents(t),e.setState({query:t,showSuggestions:!1,infoText:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"CitySearch",children:[Object(u.jsx)(m,{text:this.state.infoText}),Object(u.jsx)("h4",{className:"enter-city",children:"Enter a city:"}),Object(u.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(u.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(u.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(u.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(u.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),b=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),n.toUpperCase()!==n.toLowerCase()?(e.setState({errorText:"Please enter a number",numberOfEvents:0}),e.props.updateEventCount(0)):n<1?(e.setState({errorText:"Please enter a larger number",numberOfEvents:0}),e.props.updateEventCount(0)):n>32?(e.setState({errorText:"Please enter a smaller number",numberOfEvents:0}),e.props.updateEventCount(0)):(e.props.updateEventCount(n),e.setState({errorText:""}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"number-of-events",children:[Object(u.jsx)("h4",{className:"total-events",children:"Events shown:"}),Object(u.jsx)("input",{className:"events-number",type:"text",onChange:this.handleInputChanged}),Object(u.jsx)(f,{text:this.state.errorText})]})}}]),n}(a.Component),w=n(7),j=n.n(w),y=n(8),k=n(24),O=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkfld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tfsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eah9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],x=n(11),T=n.n(x),S=n(9),Z=n.n(S),E=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},C=function(){var e=Object(y.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(y.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://5u1d5pqz15.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(y.a)(j.a.mark((function e(){var t,n,a,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",O);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,L();case 10:if(!(n=e.sent)){e.next=20;break}return M(),a="https://5u1d5pqz15.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,T.a.get(a);case 16:return(r=e.sent).data&&(o=E(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(y.a)(j.a.mark((function e(){var t,n,a,r,o,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://5u1d5pqz15.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&N(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=(n(49),n.p+"static/media/github-logo.b964e4ef.svg"),D=n.p+"static/media/linkedin_icon.c4f4a7d8.svg",J=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,eventsByLocation:null,currentLocation:"all"},e.updateEvents=function(t){W().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents,o=a.slice(0,r),i=a.length;e.setState({events:o,eventsByLocation:i,currentLocation:t})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0;var t=this.state.numberOfEvents;navigator.onLine||this.setState({offlineWarning:"No network connection. Events might be outdated"}),W().then((function(n){e.mounted&&e.setState({events:n.slice(0,t),locations:E(n),eventsByLocation:n.length})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",className:"github-logo",href:"https://github.com/TimBTaylor/meet",children:Object(u.jsx)("img",{className:"github-logo",src:A,alt:"github logo"})}),Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",className:"linkedin-logo",href:"https://www.linkedin.com/in/tim-taylor-aaa970207/",children:Object(u.jsx)("img",{className:"linkedin-logo",src:D,alt:"linkedin logo"})})]}),Object(u.jsx)(v,{text:this.state.offlineWarning}),Object(u.jsx)("h1",{className:"intro",children:"Meet App"}),Object(u.jsx)(g,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(u.jsx)(b,{numberOfEvents:this.state.numberOfEvents,updateEventCount:this.updateEventCount}),Object(u.jsx)(h,{events:this.state.events})]})}}]),n}(a.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},U=n(23);o.a.render(Object(u.jsx)(J,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}))}}(),q(),U.config("0c7b8e3021b740f295790758e7abd1ef").install()}},[[51,1,2]]]);
//# sourceMappingURL=main.a5735989.chunk.js.map