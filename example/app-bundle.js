"bundle";System.register("example/app.less",[],function(){return{setters:[],execute:function(){}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("example/app.html",[],function(){return"<strong>A template demo</strong>"}),a()}(),System.register("example/app.js",["example/app.less","example/app.html"],function(a){"use strict";var b,c,d;return{setters:[function(a){},function(a){b=a["default"]}],execute:function(){c="A hello from the systemjs/builder LESS plugin",a("message",c),d=b,a("template",d)}}}),System.register("example/app.less",[],!1,function(){}),function(a){var b=document,c="appendChild",d="styleSheet",e=b.createElement("style");e.type="text/css",b.getElementsByTagName("head")[0][c](e),e[d]?e[d].cssText=a:e[c](b.createTextNode(a))}(".red{background-color:red}.green{background-color:green}.blue{background-color:#00f}");