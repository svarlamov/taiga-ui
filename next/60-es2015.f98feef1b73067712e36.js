(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{RU05:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateRangeModule",(function(){return De}));var a,o=n("An66"),r=n("3kIJ"),i=n("1VvW"),l=n("SVIu"),d=n("hLNI"),u=n("Qq0t"),m=n("dvRg"),c=n("Piem"),s=n("kZht"),p=n("l4xa"),f=n("LusI"),T=n("K/iL"),y=n("OZlg"),h=n("e0eB"),C=n("yZWP"),g=n("iyc4"),_=n("Yj6K"),D=n("KG37");a=$localize`:␟8d97632c6e9254396e076f0dcbfbda595c40cc40␟6291046411933318432: If a field is optional, but unfinished field should be marked as invalid, use ${"\ufffd#3\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: directive `;let E=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(new p.TuiDayRange(new p.TuiDay(2018,2,10),new p.TuiDay(2018,3,20)))}),this.min=new p.TuiDay(2e3,2,20),this.max=new p.TuiDay(2040,2,20)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-1"]],decls:6,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiUnfinishedValidator","Finish filling the field","formControlName","testValue",3,"min","max"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"p"),s["\u0275\u0275i18nStart"](2,a),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-input-date-range",1),s["\u0275\u0275text"](5," Choose dates "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("min",t.min)("max",t.max))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,_.a,D.a,r.NgControlStatus,r.FormControlName],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{constructor(){this.control=new r.FormControl(new p.TuiDayRange(new p.TuiDay(2018,2,10),new p.TuiDay(2018,3,20)))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-2"]],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-date-range",0),s["\u0275\u0275text"](1," Choose dates\n"),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("formControl",t.control)},directives:[_.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})(),V=(()=>{class e{constructor(){this.control=new r.FormControl(new p.TuiDayRange(new p.TuiDay(2018,2,10),new p.TuiDay(2018,3,20)))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-3"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:p.TUI_DATE_FORMAT,useValue:"YMD"},{provide:p.TUI_DATE_SEPARATOR,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-date-range",0),s["\u0275\u0275text"](1," Choose dates\n"),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("formControl",t.control)},directives:[_.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})();class x{fromControlValue(e){return e&&p.TuiDay.fromLocalNativeDate(e)}toControlValue(e){return e&&e.toLocalNativeDate()}}class A{constructor(e){this.dateTransformer=e}fromControlValue(e){const[t,n]=e||[null,null],a=t&&this.dateTransformer.fromControlValue(t),o=n&&this.dateTransformer.fromControlValue(n);return a&&o&&new p.TuiDayRange(a,o)}toControlValue(e){const t=e&&this.dateTransformer.toControlValue(e.from),n=e&&this.dateTransformer.toControlValue(e.to);return t&&n&&[t,n]}}function b(e){return e&&new A(e)}let P=(()=>{class e{constructor(){this.control=new r.FormControl([new Date(2018,2,10),new Date(2018,3,20)])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-4"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:m.TUI_DATE_VALUE_TRANSFORMER,useClass:x},{provide:m.TUI_DATE_RANGE_VALUE_TRANSFORMER,deps:[m.TUI_DATE_VALUE_TRANSFORMER],useFactory:b}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-date-range",0),s["\u0275\u0275text"](1," Choose dates\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275text"](3,"Stringified control value:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"p"),s["\u0275\u0275elementStart"](5,"code"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formControl",t.control),s["\u0275\u0275advance"](6),s["\u0275\u0275textInterpolate"](t.control.value))},directives:[_.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var L,R,v,w,O,M=n("EPR0"),$=n("yHor"),I=n("zGJC"),G=n("FSyC"),F=n("eB8V"),H=n("pQcr"),N=n("gEyt"),k=n("2wTY"),z=n("RlDx"),U=n("u8jZ");L=$localize`:␟d2d0c7a3331cfc0abccc0a31c9be9ed11b568504␟6250893485944821333:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputDate${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a field to input a range of dates. `,R=$localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`,v=$localize`:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#9\ufffd"}:START_TAG_DD: active date format ( ${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: ) ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#13\ufffd"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:`,v=s["\u0275\u0275i18nPostprocess"](v),w=$localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`,O=$localize`:␟a889115d6a437c86488d83937a6a773891b3c218␟1221854426540962093:${"\ufffd#22\ufffd"}:START_TAG_DT:${"[\ufffd#23\ufffd|\ufffd#28\ufffd|\ufffd#29\ufffd]"}:START_TAG_CODE:TUI_DATE_RANGE_VALUE_TRANSFORMER${"[\ufffd/#23\ufffd|\ufffd/#28\ufffd|\ufffd/#29\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#22\ufffd"}:CLOSE_TAG_DT:${"\ufffd#24\ufffd"}:START_TAG_DD: custom format of control output ( ${"\ufffd#25\ufffd"}:START_LINK: TuiDayRange ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#30\ufffd]"}:CLOSE_LINK: is default). ${"\ufffd#26\ufffd"}:START_PARAGRAPH:${"\ufffd#27\ufffd"}:START_LINK_1: See an example ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#30\ufffd]"}:CLOSE_LINK: of how to provide transformers for ${"[\ufffd#23\ufffd|\ufffd#28\ufffd|\ufffd#29\ufffd]"}:START_TAG_CODE:InputDate${"[\ufffd/#23\ufffd|\ufffd/#28\ufffd|\ufffd/#29\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#23\ufffd|\ufffd#28\ufffd|\ufffd#29\ufffd]"}:START_TAG_CODE:InputDateRange${"[\ufffd/#23\ufffd|\ufffd/#28\ufffd|\ufffd/#29\ufffd]"}:CLOSE_TAG_CODE: to work with native ${"\ufffd#30\ufffd"}:START_LINK_2: Date ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#30\ufffd]"}:CLOSE_LINK: objects. ${"\ufffd/#26\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd/#24\ufffd"}:CLOSE_TAG_DD:`,O=s["\u0275\u0275i18nPostprocess"](O);const K=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],j=["heading",$localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`],Y=["heading",$localize`:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`];function B(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p",2),s["\u0275\u0275i18nStart"](1,L),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"h3"),s["\u0275\u0275i18n"](4,R),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"dl"),s["\u0275\u0275i18nStart"](6,v),s["\u0275\u0275elementStart"](7,"dt"),s["\u0275\u0275element"](8,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"dd",3),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"dt"),s["\u0275\u0275element"](12,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](13,"dd"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"p",2),s["\u0275\u0275elementStart"](15,"a",4),s["\u0275\u0275text"](16," See an example "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](17," with the usage of these tokens. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"h3"),s["\u0275\u0275i18n"](19,w),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"dl"),s["\u0275\u0275i18nStart"](21,O),s["\u0275\u0275elementStart"](22,"dt"),s["\u0275\u0275element"](23,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"dd"),s["\u0275\u0275element"](25,"a",5),s["\u0275\u0275elementStart"](26,"p"),s["\u0275\u0275element"](27,"a",6),s["\u0275\u0275element"](28,"code"),s["\u0275\u0275element"](29,"code"),s["\u0275\u0275element"](30,"a",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"tui-doc-example",8),s["\u0275\u0275i18nAttributes"](32,K),s["\u0275\u0275element"](33,"tui-input-date-range-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](34,"tui-doc-example",9),s["\u0275\u0275i18nAttributes"](35,j),s["\u0275\u0275element"](36,"tui-input-date-range-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](37,"tui-doc-example",10),s["\u0275\u0275element"](38,"tui-input-date-range-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](39,"tui-doc-example",11),s["\u0275\u0275i18nAttributes"](40,Y),s["\u0275\u0275element"](41,"tui-input-date-range-example-4"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](31),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example4)}}function J(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-date-range",22),s["\u0275\u0275text"](1," Choose dates "),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("focusable",e.focusable)("formControl",e.control)("defaultViewedMonth",e.defaultViewedMonth)("items",e.items)("markerHandler",e.markerHandler)("min",e.min)("max",e.max)("minLength",e.minLength)("maxLength",e.maxLength)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("disabledItemHandler",e.disabledItemHandler)}}var Q,W,Z,q,X,ee,te,ne,ae,oe,re;function ie(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,Q),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function le(e,t){1&e&&s["\u0275\u0275i18n"](0,W)}function de(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,Z),s["\u0275\u0275element"](1,"div"),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"]())}function ue(e,t){1&e&&s["\u0275\u0275i18n"](0,q)}function me(e,t){1&e&&s["\u0275\u0275i18n"](0,X)}function ce(e,t){1&e&&s["\u0275\u0275i18n"](0,ee)}function se(e,t){1&e&&s["\u0275\u0275i18n"](0,te)}function pe(e,t){1&e&&s["\u0275\u0275i18n"](0,ne)}function fe(e,t){1&e&&s["\u0275\u0275i18n"](0,ae)}function Te(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",12),s["\u0275\u0275template"](1,J,2,21,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,ie,2,0,"ng-template",13),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](4,le,1,0,"ng-template",14),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().defaultViewedMonth=t})),s["\u0275\u0275template"](5,de,3,0,"ng-template",15),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabledItemHandler=t})),s["\u0275\u0275template"](6,ue,1,0,"ng-template",16),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().items=t})),s["\u0275\u0275template"](7,me,1,0,"ng-template",17),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().markerHandler=t})),s["\u0275\u0275template"](8,ce,1,0,"ng-template",18),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().min=t})),s["\u0275\u0275template"](9,se,1,0,"ng-template",19),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().max=t})),s["\u0275\u0275template"](10,pe,1,0,"ng-template",20),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().minLength=t})),s["\u0275\u0275template"](11,fe,1,0,"ng-template",21),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().maxLength=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"inherited-documentation")}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.defaultViewedMonthVariants)("documentationPropertyValue",e.defaultViewedMonth),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.dayVariants)("documentationPropertyValue",e.min),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.dayVariants)("documentationPropertyValue",e.max),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.minLengthVariants)("documentationPropertyValue",e.minLength),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength)}}function ye(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",23),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,oe),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",24),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18nStart"](8,re),s["\u0275\u0275element"](9,"code"),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-doc-code",25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"li"),s["\u0275\u0275text"](13," Use "),s["\u0275\u0275elementStart"](14,"code"),s["\u0275\u0275text"](15,"TuiInputDateRange"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](16," in template: "),s["\u0275\u0275element"](17,"tui-doc-code",26),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleDeclareForm),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}Q=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,W=$localize`:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `,Z=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,q=$localize`:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `,X=$localize`:␟f8f45d3aaac30e82d76043430e84bc125f1317f4␟7803518593552218835: A handler that gets date and returns null or a tuple with circled marker colors `,ee=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,te=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,ne=$localize`:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `,ae=$localize`:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `,oe=$localize`:␟9b96102ad80a0d3a11e4fbb8383fedba8bc52a2b␟7275600632239735393: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputDateRangeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,re=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,re=s["\u0275\u0275i18nPostprocess"](re);const he=["primary","secondary"],Ce=["success"];let ge=(()=>{class e extends f.a{constructor(){super(...arguments),this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputDateRangeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputDateRangeModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-date-range formControlName="testValue">\n        Choose dates\n    </tui-input-date-range>\n</form>\n',this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl()\n    });\n}\n",this.example1={TypeScript:n.e(253).then(n.bind(null,"YlNn")),HTML:n.e(254).then(n.bind(null,"hgel"))},this.example2={TypeScript:n.e(255).then(n.bind(null,"bRLu")),HTML:n.e(256).then(n.bind(null,"4QQw"))},this.example3={TypeScript:n.e(258).then(n.bind(null,"V2E+")),HTML:n.e(257).then(n.bind(null,"X7oQ"))},this.example4={TypeScript:n.e(260).then(n.bind(null,"g6rr")),HTML:n.e(259).then(n.bind(null,"c2uk")),"value-transformers.ts":n.e(261).then(n.bind(null,"Gf/y"))},this.dayVariants=[p.TUI_FIRST_DAY,new p.TuiDay(2021,2,5),new p.TuiDay(1900,0,1),new p.TuiDay(2300,0,1),p.TUI_LAST_DAY],this.min=this.dayVariants[0],this.minLengthVariants=[{day:3},{day:15}],this.minLength=null,this.maxLengthVariants=[{day:5},{month:1},{year:1}],this.maxLength=null,this.max=this.dayVariants[this.dayVariants.length-1],this.markerHandlerVariants=[u.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?he:Ce],this.markerHandler=this.markerHandlerVariants[0],this.cleaner=!1,this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new r.FormControl(null,r.Validators.required),this.itemsVariants=[[],Object(m.tuiCreateDefaultDayRangePeriods)()],this.items=this.itemsVariants[0],this.defaultViewedMonthVariants=[p.TuiMonth.currentLocal(),p.TuiMonth.currentLocal().append({month:1}),new p.TuiMonth(2007,5)],this.defaultViewedMonth=this.defaultViewedMonthVariants[0]}}return e.\u0275fac=function(t){return _e(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-date-range"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:T.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputDateRange","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],["tuiLink","","target","_blank","href","https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day-range.ts"],["tuiLink","","routerLink",".","fragment","native-date-output"],["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"],["id","base",3,"content",6,"heading"],["id","large",3,"content",6,"heading"],["id","date-localization","heading","Date localization",3,"content"],["id","native-date-output",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","defaultViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiDayRangePeriod[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-control",3,"focusable","formControl","defaultViewedMonth","items","markerHandler","min","max","minLength","maxLength","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","tuiHintContent","tuiHintDirection","tuiHintMode","disabledItemHandler"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,B,42,4,"ng-template",1),s["\u0275\u0275template"](2,Te,13,18,"ng-template",1),s["\u0275\u0275template"](3,ye,18,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[y.a,h.a,C.a,i.e,g.a,E,S,V,P,M.a,$.a,I.a,G.a,_.a,r.NgControlStatus,r.FormControlDirective,F.b,H.b,N.b,k.b,z.a,U.a],encapsulation:2,changeDetection:0}),e})();const _e=s["\u0275\u0275getInheritedFactory"](ge);let De=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,m.TuiInputDateRangeModule,r.ReactiveFormsModule,c.a,u.TuiButtonModule,u.TuiLinkModule,d.TuiMobileCalendarDialogModule,u.TuiTextfieldControllerModule,u.TuiHintControllerModule,l.h,i.f.forChild(Object(l.o)(ge)),m.TuiUnfinishedValidatorModule]]}),e})()}}]);