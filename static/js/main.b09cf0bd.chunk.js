(this["webpackJsonpslot-machine"]=this["webpackJsonpslot-machine"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(3),s=a.n(o),i=(a(12),a(4)),c=a(5),l=a(7),u=a(6),d=(a(13),a(0)),h=function(t){return Object(d.jsxs)("div",{id:"squaregrid",children:[Object(d.jsx)("div",{style:{background:t.colorsprop[0]},className:"square"}),Object(d.jsx)("div",{style:{background:t.colorsprop[1]},className:"square"}),Object(d.jsx)("div",{style:{background:t.colorsprop[2]},className:"square"})]})},p=(a(15),function(t){return Object(d.jsxs)("div",{id:"inputgrid",children:[Object(d.jsx)("input",{type:"number",placeholder:"enter bid...",id:"bid",onChange:t.inputprop}),Object(d.jsx)("button",{id:"gamestart",onClick:t.buttonprop,children:"PLAY!"})]})}),m=(a(16),function(t){return Object(d.jsxs)("div",{id:"resultgrid",children:[Object(d.jsxs)("div",{children:["Your money: ",t.walletprop," $"]}),Object(d.jsx)("div",{children:t.lastgamescoreprop}),"You played ",t.statsprop[0]," times, you won ",t.statsprop[1]," times and lost ",t.statsprop[2]," times"]})}),b=(a(17),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(i.a)(this,a),(t=e.call(this)).handleChange=function(e){t.setState({bidInput:e.target.value})},t.checkCanPlay=function(e){return t.state.wallet>=e},t.drawResult=function(){for(var t=["darkred","darkblue","darkgreen"],e=[],a=0;a<=t.length-1;a++)e.push(t[Math.floor(3*Math.random())]);return e},t.changeWallet=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+";if("number"!==typeof e||isNaN(e))throw console.log(typeof e),new Error("u stupid - dis not a number");var n=t.state.wallet;if("+"===a)return t.setState({wallet:n+=e});if("-"===a)return t.setState({wallet:n-=e});throw new Error("u stupid - wrong type")},t.showGameStats=function(){var e=t.state.gameHistory.length,a=t.state.gameHistory.filter((function(t){return t.win})).length,n=t.state.gameHistory.filter((function(t){return!t.win})).length;t.setState({gameScore:[e,a,n]})},t.showLastGameStats=function(){t.state.gameHistory.at(-1).win?t.setState({lastGameScore:"You won ".concat(t.moneyWonInGame(t.state.gameHistory.at(-1).win,t.state.gameHistory.at(-1).bid)," $!")}):t.setState({lastGameScore:"You lost ".concat(t.state.gameHistory.at(-1).bid," $ :(")})},t.startGame=function(){if(t.state.bidInput<1)return alert("bruh, that ain't even money");var e=Math.floor(t.state.bidInput);if(!t.checkCanPlay(e))return alert("nah, u broke");var a=t.drawResult();t.addGameToStats(t.checkWin(a),t.state.bidInput),t.checkWin(a)?t.changeWallet(t.moneyWonInGame(t.state.gameHistory.at(-1).win,t.state.gameHistory.at(-1).bid),"+"):t.changeWallet(e,"-"),t.setState({colors:a}),t.showLastGameStats(),t.showGameStats()},t.state={wallet:100,winMultiplier:3,colors:["#666","#666","#666"],bidInput:"",gameHistory:[],lastGameScore:"Good luck!",gameScore:[0,0,0]},t}return Object(c.a)(a,[{key:"checkWin",value:function(t){return t[0]===t[1]&&t[1]===t[2]||t[0]!==t[1]&&t[1]!==t[2]&&t[2]!==t[0]}},{key:"addGameToStats",value:function(t,e){var a={win:t,bid:e};this.state.gameHistory.push(a)}},{key:"moneyWonInGame",value:function(t,e){var a=this.state.winMultiplier;return t?a*e:0}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"SLOT MACHINE"}),Object(d.jsx)("p",{children:"You win when you see 1 color or all 3 colors. Bet how much you want and play!"}),Object(d.jsx)(h,{colorsprop:this.state.colors}),Object(d.jsx)(p,{inputprop:this.handleChange,buttonprop:this.startGame}),Object(d.jsx)(m,{walletprop:this.state.wallet,lastgamescoreprop:this.state.lastGameScore,statsprop:this.state.gameScore})]})}}]),a}(n.Component)),g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,s=e.getTTFB;a(t),n(t),r(t),o(t),s(t)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.b09cf0bd.chunk.js.map