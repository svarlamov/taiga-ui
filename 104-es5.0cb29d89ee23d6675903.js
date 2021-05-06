function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f428a5c79e6b5bb5ed9ba84f0e336ee249b1c187e\u241f1847855813698345106:Imitate material"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f782da18aa411d0f44908c8df3b2d2bb74aa718c2\u241f3199947270986380724: Built-in appearances come with Taiga UI theme. You can extend or completely replace them with your own in global non-encapsulated styles. Here are CSS selectors you can use to target wrapper and customize the look of components: "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f7b2b2ee53f4b7a8f035d59ce764f8907eb0a5f41\u241f1351822894570451890: Many Taiga UI components use ",":START_TAG_CODE:tui-wrapper",":CLOSE_TAG_CODE: component internally. It is responsible for display of various interactive states and is controlled with CSS. Buttons provide a direct input for ",":START_TAG_CODE:appearance",":CLOSE_TAG_CODE: while others, like input fields, are configurable through Dependency Injection. "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f35330b8bd8fae8bd891f4fc98bb518fdaf27095b\u241f6199836572724339721:Wrapper"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{mFkU:function(e,a,t){"use strict";t.r(a),t.d(a,"WrapperModule",(function(){return y}));var n,r,o,p=t("HHFY"),i=t("2kYt"),c=t("nIj0"),l=t("sEIs"),d=t("SVIu"),u=t("Qq0t"),s=t("dvRg"),b=t("EM62"),f=t("OZlg"),x=t("iyc4"),m=t("GdrL"),g=t("D+uv"),h=t("zV1d"),k=((n=function e(){_classCallCheck(this,e),this.value="",this.checkbox=!1}).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=b["\u0275\u0275defineComponent"]({type:n,selectors:[["tui-wrapper-example-1"]],features:[b["\u0275\u0275ProvidersFeature"]([{provide:u.TUI_TEXTFIELD_APPEARANCE,useValue:"material-textfield"},{provide:u.TUI_CHECKBOX_OPTIONS,useValue:Object.assign(Object.assign({},u.TUI_CHECKBOX_DEFAULT_OPTIONS),{appearances:{unchecked:"material-checkbox-off",checked:"material-checkbox-on",indeterminate:"material-checkbox-on"}})}])],decls:7,vars:2,consts:[["minlength","5",1,"b-form",3,"ngModel","ngModelChange"],[1,"tui-space_vertical-4"],[3,"ngModel","ngModelChange"],["tuiButton","","size","s","appearance","material-button"]],template:function(e,a){1&e&&(b["\u0275\u0275elementStart"](0,"tui-input",0),b["\u0275\u0275listener"]("ngModelChange",(function(e){return a.value=e})),b["\u0275\u0275text"](1," Input example\n"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](2,"div",1),b["\u0275\u0275elementStart"](3,"tui-checkbox-labeled",2),b["\u0275\u0275listener"]("ngModelChange",(function(e){return a.checkbox=e})),b["\u0275\u0275text"](4," Checkbox example "),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](5,"button",3),b["\u0275\u0275text"](6,"Submit"),b["\u0275\u0275elementEnd"]()),2&e&&(b["\u0275\u0275property"]("ngModel",a.value),b["\u0275\u0275advance"](3),b["\u0275\u0275property"]("ngModel",a.checkbox))},directives:[m.a,c.MinLengthValidator,c.NgControlStatus,c.NgModel,g.a,h.a],styles:['tui-wrapper[data-appearance=material-textfield]{background:#f5f5f5;color:rgba(0,0,0,.87);border-radius:4px 4px 0 0}tui-wrapper[data-appearance=material-textfield]:after{height:1px;background:#8e8e8e;top:auto;border:none;-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transition:all var(--tui-duration);transition:all var(--tui-duration)}tui-wrapper[data-appearance=material-textfield][data-state=hovered]{background:#ececec}tui-wrapper[data-appearance=material-textfield][data-state=hovered]:after{background:#1f1f1f}tui-wrapper[data-appearance=material-textfield]._focused{background:#dcdcdc}tui-wrapper[data-appearance=material-textfield]._focused label{color:#6200ee!important}tui-wrapper[data-appearance=material-textfield]._focused:after{background:#6200ee;-webkit-transform:scaleY(2);transform:scaleY(2)}tui-wrapper[data-appearance=material-textfield]._invalid label{color:#b00020!important}tui-wrapper[data-appearance=material-textfield]._invalid:after{background:#b00020}tui-wrapper[data-appearance=material-button]{border-radius:4px;background:#6200ee;color:#fff;text-transform:uppercase;font-weight:700;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.0014),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.0014),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:all var(--tui-duration);transition:all var(--tui-duration)}tui-wrapper[data-appearance=material-button][data-state=hovered]{background:#6e14ef;-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}tui-wrapper[data-appearance=material-button][data-state=pressed]{background:#6e14ef;-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}tui-wrapper[data-appearance=material-button]._focused{background:#883df2}tui-wrapper[data-appearance=material-button]._focused:after{display:none}tui-wrapper[data-appearance=material-checkbox-off],tui-wrapper[data-appearance=material-checkbox-on]{color:#fff}tui-wrapper[data-appearance=material-checkbox-off]:before,tui-wrapper[data-appearance=material-checkbox-on]:before{position:absolute;content:"";top:0;left:0;right:0;bottom:0;border-radius:2px;border:2px solid rgba(0,0,0,.54);-webkit-transition:all var(--tui-duration);transition:all var(--tui-duration)}tui-wrapper[data-appearance=material-checkbox-off]:after,tui-wrapper[data-appearance=material-checkbox-on]:after{position:absolute;top:-8px;left:-8px;right:-8px;bottom:-8px;border-radius:100%;background:#000;opacity:0;-webkit-transition:opacity var(--tui-duration);transition:opacity var(--tui-duration)}tui-wrapper[data-appearance=material-checkbox-off][data-state=hovered]:after,tui-wrapper[data-appearance=material-checkbox-on][data-state=hovered]:after{opacity:.05}tui-wrapper[data-appearance=material-checkbox-off]._focused:after,tui-wrapper[data-appearance=material-checkbox-off][data-state=pressed]:after,tui-wrapper[data-appearance=material-checkbox-on]._focused:after,tui-wrapper[data-appearance=material-checkbox-on][data-state=pressed]:after{opacity:.1}tui-wrapper[data-appearance=material-checkbox-on]:after,tui-wrapper[data-appearance=material-checkbox-on]:before{background:#6200ee;border-color:transparent}'],encapsulation:2}),n),w=t("ER+R"),v=["header",$localize(_templateObject())];r=$localize(_templateObject2(),"[\ufffd#4\ufffd|\ufffd#5\ufffd]","[\ufffd/#4\ufffd|\ufffd/#5\ufffd]","[\ufffd#4\ufffd|\ufffd#5\ufffd]","[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"),r=b["\u0275\u0275i18nPostprocess"](r),o=$localize(_templateObject3());var _=["heading",$localize(_templateObject4())];function T(e,a){if(1&e&&(b["\u0275\u0275elementStart"](0,"li"),b["\u0275\u0275elementStart"](1,"tui-doc-copy",3),b["\u0275\u0275elementStart"](2,"code"),b["\u0275\u0275text"](3),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275text"](4),b["\u0275\u0275elementEnd"]()),2&e){var t=a.$implicit;b["\u0275\u0275advance"](1),b["\u0275\u0275property"]("cdkCopyToClipboard",t.key),b["\u0275\u0275advance"](2),b["\u0275\u0275textInterpolate"](t.key),b["\u0275\u0275advance"](1),b["\u0275\u0275textInterpolate1"](" \u2014 ",t.value," ")}}var C,O,E=((O=function e(){_classCallCheck(this,e),this.example1={HTML:'<tui-input class="b-form" minlength="5" [(ngModel)]="value">\n    Input example\n</tui-input>\n<div class="tui-space_vertical-4">\n    <tui-checkbox-labeled [(ngModel)]="checkbox">\n        Checkbox example\n    </tui-checkbox-labeled>\n</div>\n<button tuiButton size="s" appearance="material-button">Submit</button>\n',LESS:"tui-wrapper[data-appearance='material-textfield'] {\n    background: #f5f5f5;\n    color: rgba(0, 0, 0, 0.87);\n    border-radius: 4px 4px 0 0;\n\n    &:after {\n        height: 1px;\n        background: #8e8e8e;\n        top: auto;\n        border: none;\n        transform-origin: bottom;\n        transition: all var(--tui-duration);\n    }\n\n    &[data-state='hovered'] {\n        background: #ececec;\n\n        &:after {\n            background: #1f1f1f;\n        }\n    }\n\n    &._focused {\n        background: #dcdcdc;\n\n        // TODO: Better internal elements customization\n        label {\n            color: #6200ee !important;\n        }\n\n        &:after {\n            background: #6200ee;\n            transform: scaleY(2);\n        }\n    }\n\n    &._invalid {\n        // TODO: Better internal elements customization\n        label {\n            color: #b00020 !important;\n        }\n\n        &:after {\n            background: #b00020;\n        }\n    }\n}\n\ntui-wrapper[data-appearance='material-button'] {\n    border-radius: 4px;\n    background: #6200ee;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14%),\n        0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    transition: all var(--tui-duration);\n\n    &[data-state='hovered'] {\n        background: #6e14ef;\n        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n            0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    }\n\n    &[data-state='pressed'] {\n        background: #6e14ef;\n        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),\n            0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n    }\n\n    &._focused {\n        background: #883df2;\n\n        &:after {\n            display: none;\n        }\n    }\n}\n\ntui-wrapper[data-appearance='material-checkbox-on'],\ntui-wrapper[data-appearance='material-checkbox-off'] {\n    color: #fff;\n\n    &:before {\n        position: absolute;\n        content: '';\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 2px;\n        border: 2px solid rgba(0, 0, 0, 0.54);\n        transition: all var(--tui-duration);\n    }\n\n    &:after {\n        position: absolute;\n        top: -8px;\n        left: -8px;\n        right: -8px;\n        bottom: -8px;\n        border-radius: 100%;\n        background: #000;\n        opacity: 0;\n        transition: opacity var(--tui-duration);\n    }\n\n    &[data-state='hovered'] {\n        &:after {\n            opacity: 0.05;\n        }\n    }\n\n    &[data-state='pressed'],\n    &._focused {\n        &:after {\n            opacity: 0.1;\n        }\n    }\n}\n\ntui-wrapper[data-appearance='material-checkbox-on'] {\n    &:before,\n    &:after {\n        background: #6200ee;\n        border-color: transparent;\n    }\n}\n",TypeScript:"import {Component, ViewEncapsulation} from '@angular/core';\nimport {\n    TUI_CHECKBOX_DEFAULT_OPTIONS,\n    TUI_CHECKBOX_OPTIONS,\n    TUI_TEXTFIELD_APPEARANCE,\n} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-wrapper-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    providers: [\n        {\n            provide: TUI_TEXTFIELD_APPEARANCE,\n            useValue: 'material-textfield',\n        },\n        {\n            provide: TUI_CHECKBOX_OPTIONS,\n            useValue: {\n                ...TUI_CHECKBOX_DEFAULT_OPTIONS,\n                appearances: {\n                    unchecked: 'material-checkbox-off',\n                    checked: 'material-checkbox-on',\n                    indeterminate: 'material-checkbox-on',\n                },\n            },\n        },\n    ],\n})\nexport class TuiWrapperExample1 {\n    value = '';\n    checkbox = false;\n}\n"},this.state={"[data-appearance]":"appearance string","[data-mode]":'optional "onDark"/"onLight" mode',"[data-state]":'interactive state: "hovered"/"pressed"/"readonly"/"disabled"',"._focused":"class for focused state","._invalid":"class for invalid state"}}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=b["\u0275\u0275defineComponent"]({type:O,selectors:[["wrapper"]],decls:14,vars:4,consts:[[6,"header"],[4,"ngFor","ngForOf"],["id","material",3,"content",6,"heading"],[1,"var",3,"cdkCopyToClipboard"]],template:function(e,a){1&e&&(b["\u0275\u0275elementStart"](0,"tui-doc-page",0),b["\u0275\u0275i18nAttributes"](1,v),b["\u0275\u0275elementStart"](2,"p"),b["\u0275\u0275i18nStart"](3,r),b["\u0275\u0275element"](4,"code"),b["\u0275\u0275element"](5,"code"),b["\u0275\u0275i18nEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](6,"p"),b["\u0275\u0275i18n"](7,o),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](8,"ul"),b["\u0275\u0275template"](9,T,5,3,"li",1),b["\u0275\u0275pipe"](10,"keyvalue"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](11,"tui-doc-example",2),b["\u0275\u0275i18nAttributes"](12,_),b["\u0275\u0275element"](13,"tui-wrapper-example-1"),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"]()),2&e&&(b["\u0275\u0275advance"](9),b["\u0275\u0275property"]("ngForOf",b["\u0275\u0275pipeBind1"](10,2,a.state)),b["\u0275\u0275advance"](2),b["\u0275\u0275property"]("content",a.example1))},directives:[f.a,i.s,x.a,k,w.a,p.a],pipes:[i.l],encapsulation:2,changeDetection:0}),O),y=((C=function e(){_classCallCheck(this,e)}).\u0275mod=b["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=b["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[i.c,p.c,u.TuiButtonModule,d.j,s.TuiInputModule,s.TuiCheckboxLabeledModule,d.h,l.f.forChild(Object(d.o)(E)),c.FormsModule]]}),C)}}]);