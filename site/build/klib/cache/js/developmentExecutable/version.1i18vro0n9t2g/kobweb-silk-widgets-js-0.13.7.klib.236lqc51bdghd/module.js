(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './html-html-core.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-kobweb-compose.js', './kobweb-compose-html-ext.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./html-html-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-kobweb-compose.js'), require('./kobweb-compose-html-ext.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['kobweb-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'kobweb-kobweb-compose' was not found. Please, check whether 'kobweb-kobweb-compose' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['kobweb-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'kobweb-compose-html-ext' was not found. Please, check whether 'kobweb-compose-html-ext' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk-widgets'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobweb-silk-widgets'.");
    }
    root['kobweb-kobweb-silk-widgets'] = factory(typeof this['kobweb-kobweb-silk-widgets'] === 'undefined' ? {} : this['kobweb-kobweb-silk-widgets'], this['html-html-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-kobweb-compose'], this['kobweb-compose-html-ext'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.s6;
  var protoOf = kotlin_kotlin.$_$.c7;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.r6;
  var style_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var style_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var selector = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var combine = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var plus = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var plus_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var get_universal = kotlin_org_jetbrains_compose_html_html_core.$_$.d6;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var className = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var attr = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var attr$default = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var attrEquals = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var attrEquals$default = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var attrListContains = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var attrListContains$default = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var attrHyphened = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var attrHyphened$default = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var attrPrefixed = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var attrPrefixed$default = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var attrSuffixed = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var attrSuffixed$default = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var attrContains = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var attrContains$default = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var group = kotlin_org_jetbrains_compose_html_html_core.$_$.m4;
  var descendant = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var desc = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var desc_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var desc_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var desc_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var child = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var sibling = kotlin_org_jetbrains_compose_html_html_core.$_$.y5;
  var adjacent = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var returnHoverSelector = kotlin_org_jetbrains_compose_html_html_core.$_$.r4;
  var hover = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var get_hover = kotlin_org_jetbrains_compose_html_html_core.$_$.p4;
  var get_anyLink = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var get_link = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var get_visited = kotlin_org_jetbrains_compose_html_html_core.$_$.h6;
  var get_localLink = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var get_target = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var get_targetWithin = kotlin_org_jetbrains_compose_html_html_core.$_$.b6;
  var get_scope = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var get_active = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var get_focus = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var get_focusVisible = kotlin_org_jetbrains_compose_html_html_core.$_$.l4;
  var get_playing = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var get_paused = kotlin_org_jetbrains_compose_html_html_core.$_$.l5;
  var get_autofill = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var get_enabled = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var get_disabled = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var get_readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var get_readWrite = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var get_placeholderShown = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var get_default = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var get_checked = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var get_indeterminate = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var get_blank = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var get_valid = kotlin_org_jetbrains_compose_html_html_core.$_$.g6;
  var get_invalid = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var get_inRange = kotlin_org_jetbrains_compose_html_html_core.$_$.t4;
  var get_outOfRange = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var get_required = kotlin_org_jetbrains_compose_html_html_core.$_$.s5;
  var get_optional = kotlin_org_jetbrains_compose_html_html_core.$_$.j5;
  var get_userInvalid = kotlin_org_jetbrains_compose_html_html_core.$_$.f6;
  var get_root = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var get_empty = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var get_first = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var get_firstChild = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var get_lastChild = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var get_onlyChild = kotlin_org_jetbrains_compose_html_html_core.$_$.h5;
  var get_firstOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.j4;
  var get_lastOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var get_onlyOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var get_host = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var host = kotlin_org_jetbrains_compose_html_html_core.$_$.o4;
  var get_defined = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var get_left = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var get_right = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var nthChild = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var nthLastChild = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var nthOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var nthLastOfType = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var not = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var get_after = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var get_before = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var get_cue = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var get_cueRegion = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var get_firstLetter = kotlin_org_jetbrains_compose_html_html_core.$_$.h4;
  var get_firstLine = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var get_fileSelectorButton = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var get_selection = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var slotted = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var objectMeta = kotlin_kotlin.$_$.b7;
  var VOID = kotlin_kotlin.$_$.fa;
  var setMetadataFor = kotlin_kotlin.$_$.d7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.x1;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var to = kotlin_kotlin.$_$.ba;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var Percentage = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var toList = kotlin_kotlin.$_$.w4;
  var Combine = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var equals = kotlin_kotlin.$_$.h6;
  var hashCode = kotlin_kotlin.$_$.n6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.p6;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var classMeta = kotlin_kotlin.$_$.e6;
  var mapCapacity = kotlin_kotlin.$_$.e4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var listOf = kotlin_kotlin.$_$.d4;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.w7;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.d7;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var overflowY = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var KProperty0 = kotlin_kotlin.$_$.r7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l6;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.b8;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var borderWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.z7;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.i7;
  var coerceAtLeast = kotlin_kotlin.$_$.j7;
  var until = kotlin_kotlin.$_$.o7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d3;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var TopStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var isObject = kotlin_kotlin.$_$.t6;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var borderStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.f8;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n1;
  var charArrayOf = kotlin_kotlin.$_$.b6;
  var split = kotlin_kotlin.$_$.l8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var charSequenceLength = kotlin_kotlin.$_$.d6;
  var objectCreate = kotlin_kotlin.$_$.a7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var first = kotlin_kotlin.$_$.q3;
  var Modifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var isInterface = kotlin_kotlin.$_$.s6;
  var toString = kotlin_kotlin.$_$.f7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.t7;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var plus_1 = kotlin_kotlin.$_$.k4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var removeSuffix = kotlin_kotlin.$_$.i8;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var removePrefix = kotlin_kotlin.$_$.h8;
  var interfaceMeta = kotlin_kotlin.$_$.p6;
  var getStringHashCode = kotlin_kotlin.$_$.m6;
  var StyleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var copyToArray = kotlin_kotlin.$_$.j3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var getValue = kotlin_kotlin.$_$.t3;
  var joinToString = kotlin_kotlin.$_$.v3;
  var emptyList = kotlin_kotlin.$_$.k3;
  var listOf_0 = kotlin_kotlin.$_$.c4;
  var plus_2 = kotlin_kotlin.$_$.m4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var THROW_ISE = kotlin_kotlin.$_$.l9;
  var Enum = kotlin_kotlin.$_$.c9;
  var numberToDouble = kotlin_kotlin.$_$.y6;
  var toIntOrNull = kotlin_kotlin.$_$.s8;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var getLocalDelegateReference = kotlin_kotlin.$_$.j6;
  var Map = kotlin_kotlin.$_$.n2;
  var trimIndent = kotlin_kotlin.$_$.w8;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.u9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var lazy = kotlin_kotlin.$_$.t9;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(ComponentModifier, 'ComponentModifier', interfaceMeta);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers, [ComponentModifier, StyleModifiers]);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta, VOID, [ComponentModifier]);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(Empty, 'Empty', objectMeta, ComponentVariant);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(StyleGroup, 'StyleGroup', interfaceMeta);
  setMetadataFor(Light, 'Light', classMeta, VOID, [StyleGroup]);
  setMetadataFor(Dark, 'Dark', classMeta, VOID, [StyleGroup]);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta, VOID, [StyleGroup]);
  setMetadataFor(ColorAware, 'ColorAware', classMeta, VOID, [StyleGroup]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(OfMedia, 'OfMedia', classMeta, CssRule);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeClosed, 'CompositeClosed', classMeta, NonMediaCssRule);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Px, 'Px', classMeta, BreakpointUnitValue);
  setMetadataFor(Em, 'Em', classMeta, BreakpointUnitValue);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(SilkConfig, 'SilkConfig', interfaceMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, [SilkConfig]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  function registerStyle(cssSelector, extraModifiers, init) {
    this.registerStyle$composable_w181iq_k$(cssSelector, SilkStylesheet$registerStyle$lambda(extraModifiers), init);
  }
  function registerStyle$default(cssSelector, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.registerStyle_1vlyq5_k$(cssSelector, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      registerStyle(cssSelector, extraModifiers, init);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  setMetadataFor(SilkStylesheet, 'SilkStylesheet', interfaceMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta, VOID, [SilkStylesheet]);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  function get(colorMode) {
    var tmp0_subject = colorMode;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = this.get_light_iuogdp_k$();
        break;
      case 1:
        tmp = this.get_dark_wokkvz_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(SilkPalettes, 'SilkPalettes', interfaceMeta);
  setMetadataFor(MutableSilkPalettes, 'MutableSilkPalettes', classMeta, VOID, [SilkPalettes]);
  setMetadataFor(Button, 'Button', interfaceMeta);
  setMetadataFor(Link, 'Link', interfaceMeta);
  setMetadataFor(Switch, 'Switch', interfaceMeta);
  setMetadataFor(Tab, 'Tab', interfaceMeta);
  setMetadataFor(Tooltip, 'Tooltip', interfaceMeta);
  setMetadataFor(SilkPalette, 'SilkPalette', interfaceMeta);
  setMetadataFor(Link_0, 'Link', classMeta, VOID, [Link]);
  setMetadataFor(Button_0, 'Button', classMeta, VOID, [Button]);
  setMetadataFor(Switch_0, 'Switch', classMeta, VOID, [Switch]);
  setMetadataFor(Tab_0, 'Tab', classMeta, VOID, [Tab]);
  setMetadataFor(Tooltip_0, 'Tooltip', classMeta, VOID, [Tooltip]);
  setMetadataFor(MutableSilkPalette, 'MutableSilkPalette', classMeta, VOID, [SilkPalette]);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet.call(this);
    this.$stable_2 = 0;
  }
  protoOf(SilkStyleSheet).style_n9akw7_k$ = function (selector, cssRule) {
    return this.style_4edtvi_k$(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function get_$stableprop_0() {
    return 8;
  }
  function KeyframesBuilder(colorMode) {
    this.colorMode_1 = colorMode;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.keyframeStyles_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(KeyframesBuilder).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  protoOf(KeyframesBuilder).get_keyframeStyles_tvt4hz_k$ = function () {
    return this.keyframeStyles_1;
  };
  protoOf(KeyframesBuilder).from_jm5c7n_k$ = function (createStyle) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.keyframeStyles_1;
    var tmp1_plusAssign = to(From_getInstance(), createStyle);
    tmp0_plusAssign.put_3mhbri_k$(tmp1_plusAssign.get_first_irdx8n_k$(), tmp1_plusAssign.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).to_6u3zwe_k$ = function (createStyle) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.keyframeStyles_1;
    var tmp1_plusAssign = to(To_getInstance(), createStyle);
    tmp0_plusAssign.put_3mhbri_k$(tmp1_plusAssign.get_first_irdx8n_k$(), tmp1_plusAssign.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).invoke_571ixe_k$ = function (_this__u8e3s4, createStyle) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.keyframeStyles_1;
    var tmp1_plusAssign = to(new Percentage(_this__u8e3s4), createStyle);
    tmp0_plusAssign.put_3mhbri_k$(tmp1_plusAssign.get_first_irdx8n_k$(), tmp1_plusAssign.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).each_uj16v1_k$ = function (keys, createStyle) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.keyframeStyles_1;
    var tmp1_plusAssign = to(new Combine(toList(keys)), createStyle);
    tmp0_plusAssign.put_3mhbri_k$(tmp1_plusAssign.get_first_irdx8n_k$(), tmp1_plusAssign.get_second_jf7fjx_k$());
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(get_comparableKeyframeStyles(this), get_comparableKeyframeStyles(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(get_comparableKeyframeStyles(this));
  };
  protoOf(KeyframesBuilder).addKeyframesIntoStylesheet_fg5iqc_k$ = function (stylesheet, keyframesName) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.keyframeStyles_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.get_size_woubt6_k$());
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp1_map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = item.get_key_18j28a_k$();
      var keyframe = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = item.get_value_j01efc_k$();
      var create = tmp$ret$2;
      var styles = toStyles(create());
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var keyframeRules = tmp$ret$5;
    stylesheet.add_nvgmad_k$(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function get_comparableKeyframeStyles(_this__u8e3s4) {
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp2_mapValues = _this__u8e3s4.keyframeStyles_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp2_mapValues.get_size_woubt6_k$()));
    var tmp$ret$4;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp2_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var tmp = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var create = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(create())(tmp0_apply);
      tmp$ret$2 = tmp0_apply;
      tmp$ret$3 = tmp$ret$2;
      tmp1_mapValuesTo.put_3mhbri_k$(tmp, tmp$ret$3);
    }
    tmp$ret$4 = tmp1_mapValuesTo;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    return tmp$ret$6;
  }
  function get_TabColorVar() {
    _init_properties_Tabs_kt__myintq();
    return TabColorVar$delegate.getValue_1h979_k$(null, TabColorVar$factory());
  }
  var TabColorVar$delegate;
  function get_TabBorderColorVar() {
    _init_properties_Tabs_kt__myintq();
    return TabBorderColorVar$delegate.getValue_1h979_k$(null, TabBorderColorVar$factory());
  }
  var TabBorderColorVar$delegate;
  function get_TabBackgroundColorVar() {
    _init_properties_Tabs_kt__myintq();
    return TabBackgroundColorVar$delegate.getValue_1h979_k$(null, TabBackgroundColorVar$factory());
  }
  var TabBackgroundColorVar$delegate;
  function get_TabDisabledBackgroundColorVar() {
    _init_properties_Tabs_kt__myintq();
    return TabDisabledBackgroundColorVar$delegate.getValue_1h979_k$(null, TabDisabledBackgroundColorVar$factory());
  }
  var TabDisabledBackgroundColorVar$delegate;
  function get_TabHoverBackgroundColorVar() {
    _init_properties_Tabs_kt__myintq();
    return TabHoverBackgroundColorVar$delegate.getValue_1h979_k$(null, TabHoverBackgroundColorVar$factory());
  }
  var TabHoverBackgroundColorVar$delegate;
  function get_TabPressedBackgroundColorVar() {
    _init_properties_Tabs_kt__myintq();
    return TabPressedBackgroundColorVar$delegate.getValue_1h979_k$(null, TabPressedBackgroundColorVar$factory());
  }
  var TabPressedBackgroundColorVar$delegate;
  function get_TabBorderThickness() {
    _init_properties_Tabs_kt__myintq();
    return TabBorderThickness$delegate.getValue_1h979_k$(null, TabBorderThickness$factory());
  }
  var TabBorderThickness$delegate;
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle$delegate.getValue_1h979_k$(null, TabsStyle$factory());
  }
  var TabsStyle$delegate;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle$delegate.getValue_1h979_k$(null, TabsTabRowStyle$factory());
  }
  var TabsTabRowStyle$delegate;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle$delegate.getValue_1h979_k$(null, TabsTabStyle$factory());
  }
  var TabsTabStyle$delegate;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle$delegate.getValue_1h979_k$(null, TabsPanelStyle$factory());
  }
  var TabsPanelStyle$delegate;
  function TabsStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_getInstance();
  }
  function TabsTabRowStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_getInstance());
    var tmp_0 = get_TabBorderThickness().value$default_75jjyg_k$();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp0__get_Solid__yuxops = Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'solid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return borderBottom(tmp, tmp_0, tmp$ret$3, get_TabBorderColorVar().value$default_75jjyg_k$());
  }
  function TabsTabStyle$delegate$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-900500012);
    if (isTraceInProgress()) {
      traceEventStart(-900500012, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle$delegate.<anonymous> (Tabs.kt:44)');
    }
    var tmp0 = tabIndex(Companion_getInstance(), 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function TabsTabStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$ComponentStyle.base_li7hyk_k$(TabsTabStyle$delegate$lambda$lambda);
    var tmp = get_ariaDisabled($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(TabsTabStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover_0($this$ComponentStyle).plus_1jnq5l_k$(not_0($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.invoke_ifmuo5_k$(TabsTabStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active_0($this$ComponentStyle).plus_1jnq5l_k$(not_0($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.invoke_ifmuo5_k$(TabsTabStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function TabsTabStyle$delegate$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$()), Companion_getInstance_2().group$default_tjw00v_k$(listOf(['background-color', 'color', 'border-color']), get_ms(200)).slice()), get_TabBackgroundColorVar().value$default_75jjyg_k$()), get_TabColorVar().value$default_75jjyg_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), get_cssRem(0.5));
    var tmp_0 = styleModifier(tmp, TabsTabStyle$delegate$lambda$lambda$lambda);
    var tmp_1 = get_TabBorderThickness().value$default_75jjyg_k$();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp0__get_Solid__yuxops = Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'solid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return borderBottom(tmp_0, tmp_1, tmp$ret$3, get_TabBorderColorVar().value$default_75jjyg_k$());
  }
  function TabsTabStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_Tabs_kt__myintq();
    $this$styleModifier.property_ze5ozi_k$('margin-bottom', 'calc(-1 * ' + get_TabBorderThickness().value$default_75jjyg_k$() + ')');
    return Unit_getInstance();
  }
  function TabsTabStyle$delegate$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_getInstance(), get_TabDisabledBackgroundColorVar().value$default_75jjyg_k$()), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function TabsTabStyle$delegate$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), get_TabHoverBackgroundColorVar().value$default_75jjyg_k$());
  }
  function TabsTabStyle$delegate$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), get_TabPressedBackgroundColorVar().value$default_75jjyg_k$());
  }
  function TabsPanelStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    return overflowY(flexGrow(fillMaxWidth(padding(Companion_getInstance(), get_cssRem(1))), 1), Companion_getInstance_4().get_Auto_wnyn88_k$());
  }
  function TabColorVar$factory() {
    return getPropertyCallableRef('TabColorVar', 0, KProperty0, function () {
      return get_TabColorVar();
    }, null);
  }
  function TabBorderColorVar$factory() {
    return getPropertyCallableRef('TabBorderColorVar', 0, KProperty0, function () {
      return get_TabBorderColorVar();
    }, null);
  }
  function TabBackgroundColorVar$factory() {
    return getPropertyCallableRef('TabBackgroundColorVar', 0, KProperty0, function () {
      return get_TabBackgroundColorVar();
    }, null);
  }
  function TabDisabledBackgroundColorVar$factory() {
    return getPropertyCallableRef('TabDisabledBackgroundColorVar', 0, KProperty0, function () {
      return get_TabDisabledBackgroundColorVar();
    }, null);
  }
  function TabHoverBackgroundColorVar$factory() {
    return getPropertyCallableRef('TabHoverBackgroundColorVar', 0, KProperty0, function () {
      return get_TabHoverBackgroundColorVar();
    }, null);
  }
  function TabPressedBackgroundColorVar$factory() {
    return getPropertyCallableRef('TabPressedBackgroundColorVar', 0, KProperty0, function () {
      return get_TabPressedBackgroundColorVar();
    }, null);
  }
  function TabBorderThickness$factory() {
    return getPropertyCallableRef('TabBorderThickness', 0, KProperty0, function () {
      return get_TabBorderThickness();
    }, null);
  }
  function TabsStyle$factory() {
    return getPropertyCallableRef('TabsStyle', 0, KProperty0, function () {
      return get_TabsStyle();
    }, null);
  }
  function TabsTabRowStyle$factory() {
    return getPropertyCallableRef('TabsTabRowStyle', 0, KProperty0, function () {
      return get_TabsTabRowStyle();
    }, null);
  }
  function TabsTabStyle$factory() {
    return getPropertyCallableRef('TabsTabStyle', 0, KProperty0, function () {
      return get_TabsTabStyle();
    }, null);
  }
  function TabsPanelStyle$factory() {
    return getPropertyCallableRef('TabsPanelStyle', 0, KProperty0, function () {
      return get_TabsPanelStyle();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (properties_initialized_Tabs_kt_moodfk) {
    } else {
      properties_initialized_Tabs_kt_moodfk = true;
      TabColorVar$delegate = StyleVariable(VOID, 'silk');
      TabBorderColorVar$delegate = StyleVariable(VOID, 'silk');
      TabBackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      TabDisabledBackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      TabHoverBackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      TabPressedBackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      TabBorderThickness$delegate = StyleVariable(get_px(2), 'silk');
      TabsStyle$delegate = ComponentStyle_0(VOID, VOID, TabsStyle$delegate$lambda);
      var tmp = Companion_getInstance_13();
      TabsTabRowStyle$delegate = base(tmp, VOID, VOID, TabsTabRowStyle$delegate$lambda);
      var tmp_0 = TabsTabStyle$delegate$lambda;
      TabsTabStyle$delegate = ComponentStyle$composable(tmp_0, VOID, TabsTabStyle$delegate$lambda_0);
      var tmp_1 = Companion_getInstance_13();
      TabsPanelStyle$delegate = base(tmp_1, VOID, VOID, TabsPanelStyle$delegate$lambda);
    }
  }
  function get_TocBorderColorVar() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderColorVar$delegate.getValue_1h979_k$(null, TocBorderColorVar$factory());
  }
  var TocBorderColorVar$delegate;
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle$delegate.getValue_1h979_k$(null, TocStyle$factory());
  }
  var TocStyle$delegate;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant$delegate.getValue_1h979_k$(null, TocBorderedVariant$factory());
  }
  var TocBorderedVariant$delegate;
  function TocStyle$delegate$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_getInstance(), Companion_getInstance_5().get_None_wo6tgh_k$()), Companion_getInstance_6().get_Start_ih4i6x_k$()), get_cssRem(0));
  }
  function TocBorderedVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_getInstance(), get_px(5));
    var tmp_0 = get_px(1);
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp0__get_Solid__yuxops = Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'solid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return padding(border(tmp, tmp_0, tmp$ret$3, get_TocBorderColorVar().value$default_75jjyg_k$()), get_cssRem(1));
  }
  function TocBorderColorVar$factory() {
    return getPropertyCallableRef('TocBorderColorVar', 0, KProperty0, function () {
      return get_TocBorderColorVar();
    }, null);
  }
  function TocStyle$factory() {
    return getPropertyCallableRef('TocStyle', 0, KProperty0, function () {
      return get_TocStyle();
    }, null);
  }
  function TocBorderedVariant$factory() {
    return getPropertyCallableRef('TocBorderedVariant', 0, KProperty0, function () {
      return get_TocBorderedVariant();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (properties_initialized_Toc_kt_t9o4p4) {
    } else {
      properties_initialized_Toc_kt_t9o4p4 = true;
      TocBorderColorVar$delegate = StyleVariable(VOID, 'silk');
      var tmp = Companion_getInstance_13();
      TocStyle$delegate = base(tmp, VOID, 'silk', TocStyle$delegate$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant$delegate = addVariantBase(tmp_0, VOID, TocBorderedVariant$delegate$lambda);
    }
  }
  function get_ButtonBackgroundDefaultColorVar() {
    _init_properties_Button_kt__2845m6();
    return ButtonBackgroundDefaultColorVar$delegate.getValue_1h979_k$(null, ButtonBackgroundDefaultColorVar$factory());
  }
  var ButtonBackgroundDefaultColorVar$delegate;
  function get_ButtonBackgroundFocusColorVar() {
    _init_properties_Button_kt__2845m6();
    return ButtonBackgroundFocusColorVar$delegate.getValue_1h979_k$(null, ButtonBackgroundFocusColorVar$factory());
  }
  var ButtonBackgroundFocusColorVar$delegate;
  function get_ButtonBackgroundHoverColorVar() {
    _init_properties_Button_kt__2845m6();
    return ButtonBackgroundHoverColorVar$delegate.getValue_1h979_k$(null, ButtonBackgroundHoverColorVar$factory());
  }
  var ButtonBackgroundHoverColorVar$delegate;
  function get_ButtonBackgroundPressedColorVar() {
    _init_properties_Button_kt__2845m6();
    return ButtonBackgroundPressedColorVar$delegate.getValue_1h979_k$(null, ButtonBackgroundPressedColorVar$factory());
  }
  var ButtonBackgroundPressedColorVar$delegate;
  function get_ButtonColorVar() {
    _init_properties_Button_kt__2845m6();
    return ButtonColorVar$delegate.getValue_1h979_k$(null, ButtonColorVar$factory());
  }
  var ButtonColorVar$delegate;
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle$delegate.getValue_1h979_k$(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    $this$ComponentStyle.base_li7hyk_k$(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover_0($this$ComponentStyle).plus_1jnq5l_k$(not_0($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.invoke_ifmuo5_k$(ButtonStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_focusVisible_0($this$ComponentStyle).plus_1jnq5l_k$(not_0($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.invoke_ifmuo5_k$(ButtonStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active_0($this$ComponentStyle).plus_1jnq5l_k$(not_0($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.invoke_ifmuo5_k$(ButtonStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    return userSelect(outline(borderWidth(borderRadius(padding_0(fontSize(lineHeight(backgroundColor(color(Companion_getInstance(), get_ButtonColorVar().value$default_75jjyg_k$()), get_ButtonBackgroundDefaultColorVar().value$default_75jjyg_k$()), 1.2), get_px(16)), get_px(8), get_px(16)), get_px(4)), get_px(0)), get_px(0)), Companion_getInstance_3().get_None_wo6tgh_k$());
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_getInstance(), get_ButtonBackgroundHoverColorVar().value$default_75jjyg_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function ButtonStyle$delegate$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    return boxShadow(Companion_getInstance(), VOID, VOID, VOID, get_px(3), get_ButtonBackgroundFocusColorVar().value$default_75jjyg_k$());
  }
  function ButtonStyle$delegate$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_getInstance(), get_ButtonBackgroundPressedColorVar().value$default_75jjyg_k$());
  }
  function ButtonBackgroundDefaultColorVar$factory() {
    return getPropertyCallableRef('ButtonBackgroundDefaultColorVar', 0, KProperty0, function () {
      return get_ButtonBackgroundDefaultColorVar();
    }, null);
  }
  function ButtonBackgroundFocusColorVar$factory() {
    return getPropertyCallableRef('ButtonBackgroundFocusColorVar', 0, KProperty0, function () {
      return get_ButtonBackgroundFocusColorVar();
    }, null);
  }
  function ButtonBackgroundHoverColorVar$factory() {
    return getPropertyCallableRef('ButtonBackgroundHoverColorVar', 0, KProperty0, function () {
      return get_ButtonBackgroundHoverColorVar();
    }, null);
  }
  function ButtonBackgroundPressedColorVar$factory() {
    return getPropertyCallableRef('ButtonBackgroundPressedColorVar', 0, KProperty0, function () {
      return get_ButtonBackgroundPressedColorVar();
    }, null);
  }
  function ButtonColorVar$factory() {
    return getPropertyCallableRef('ButtonColorVar', 0, KProperty0, function () {
      return get_ButtonColorVar();
    }, null);
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (properties_initialized_Button_kt_yov184) {
    } else {
      properties_initialized_Button_kt_yov184 = true;
      ButtonBackgroundDefaultColorVar$delegate = StyleVariable(VOID, 'silk');
      ButtonBackgroundFocusColorVar$delegate = StyleVariable(VOID, 'silk');
      ButtonBackgroundHoverColorVar$delegate = StyleVariable(VOID, 'silk');
      ButtonBackgroundPressedColorVar$delegate = StyleVariable(VOID, 'silk');
      ButtonColorVar$delegate = StyleVariable(VOID, 'silk');
      ButtonStyle$delegate = ComponentStyle_0(VOID, 'silk', ButtonStyle$delegate$lambda);
    }
  }
  function get_SwitchBorderRadiusVar() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchBorderRadiusVar$delegate.getValue_1h979_k$(null, SwitchBorderRadiusVar$factory());
  }
  var SwitchBorderRadiusVar$delegate;
  function get_SwitchTrackWidthVar() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackWidthVar$delegate.getValue_1h979_k$(null, SwitchTrackWidthVar$factory());
  }
  var SwitchTrackWidthVar$delegate;
  function get_SwitchTrackHeightVar() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackHeightVar$delegate.getValue_1h979_k$(null, SwitchTrackHeightVar$factory());
  }
  var SwitchTrackHeightVar$delegate;
  function get_SwitchTrackPaddingVar() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackPaddingVar$delegate.getValue_1h979_k$(null, SwitchTrackPaddingVar$factory());
  }
  var SwitchTrackPaddingVar$delegate;
  function get_SwitchTrackBackgroundColorVar() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackBackgroundColorVar$delegate.getValue_1h979_k$(null, SwitchTrackBackgroundColorVar$factory());
  }
  var SwitchTrackBackgroundColorVar$delegate;
  function get_SwitchThumbOffsetVar() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbOffsetVar$delegate.getValue_1h979_k$(null, SwitchThumbOffsetVar$factory());
  }
  var SwitchThumbOffsetVar$delegate;
  function get_SwitchThumbColorVar() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbColorVar$delegate.getValue_1h979_k$(null, SwitchThumbColorVar$factory());
  }
  var SwitchThumbColorVar$delegate;
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle$delegate.getValue_1h979_k$(null, SwitchStyle$factory());
  }
  var SwitchStyle$delegate;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle$delegate.getValue_1h979_k$(null, SwitchTrackStyle$factory());
  }
  var SwitchTrackStyle$delegate;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle$delegate.getValue_1h979_k$(null, SwitchThumbStyle$factory());
  }
  var SwitchThumbStyle$delegate;
  function SwitchStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    return Unit_getInstance();
  }
  function SwitchTrackStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$ComponentStyle.base_li7hyk_k$(SwitchTrackStyle$delegate$lambda$lambda);
    var tmp = get_hover_0($this$ComponentStyle).plus_1jnq5l_k$(not_0($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.invoke_ifmuo5_k$(SwitchTrackStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchTrackStyle$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_getInstance(), get_SwitchTrackWidthVar().value$default_75jjyg_k$()), get_SwitchTrackWidthVar().value$default_75jjyg_k$()), get_SwitchTrackHeightVar().value$default_75jjyg_k$()), get_SwitchTrackHeightVar().value$default_75jjyg_k$()), get_SwitchTrackPaddingVar().value$default_75jjyg_k$()), get_SwitchBorderRadiusVar().value$default_75jjyg_k$()), get_SwitchTrackBackgroundColorVar().value$default_75jjyg_k$()), [CSSTransition_init_$Create$('background-color', get_ms(150))]), Companion_getInstance_7().get_ContentBox_h63h2z_k$());
  }
  function SwitchTrackStyle$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function SwitchThumbStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_getInstance(), get_SwitchTrackHeightVar().value$default_75jjyg_k$()), get_SwitchBorderRadiusVar().value$default_75jjyg_k$()), Colors_getInstance().get_White_ij46ow_k$()), get_SwitchThumbOffsetVar().value$default_75jjyg_k$()), [CSSTransition_init_$Create$('translate', get_ms(150))]);
  }
  function SwitchBorderRadiusVar$factory() {
    return getPropertyCallableRef('SwitchBorderRadiusVar', 0, KProperty0, function () {
      return get_SwitchBorderRadiusVar();
    }, null);
  }
  function SwitchTrackWidthVar$factory() {
    return getPropertyCallableRef('SwitchTrackWidthVar', 0, KProperty0, function () {
      return get_SwitchTrackWidthVar();
    }, null);
  }
  function SwitchTrackHeightVar$factory() {
    return getPropertyCallableRef('SwitchTrackHeightVar', 0, KProperty0, function () {
      return get_SwitchTrackHeightVar();
    }, null);
  }
  function SwitchTrackPaddingVar$factory() {
    return getPropertyCallableRef('SwitchTrackPaddingVar', 0, KProperty0, function () {
      return get_SwitchTrackPaddingVar();
    }, null);
  }
  function SwitchTrackBackgroundColorVar$factory() {
    return getPropertyCallableRef('SwitchTrackBackgroundColorVar', 0, KProperty0, function () {
      return get_SwitchTrackBackgroundColorVar();
    }, null);
  }
  function SwitchThumbOffsetVar$factory() {
    return getPropertyCallableRef('SwitchThumbOffsetVar', 0, KProperty0, function () {
      return get_SwitchThumbOffsetVar();
    }, null);
  }
  function SwitchThumbColorVar$factory() {
    return getPropertyCallableRef('SwitchThumbColorVar', 0, KProperty0, function () {
      return get_SwitchThumbColorVar();
    }, null);
  }
  function SwitchStyle$factory() {
    return getPropertyCallableRef('SwitchStyle', 0, KProperty0, function () {
      return get_SwitchStyle();
    }, null);
  }
  function SwitchTrackStyle$factory() {
    return getPropertyCallableRef('SwitchTrackStyle', 0, KProperty0, function () {
      return get_SwitchTrackStyle();
    }, null);
  }
  function SwitchThumbStyle$factory() {
    return getPropertyCallableRef('SwitchThumbStyle', 0, KProperty0, function () {
      return get_SwitchThumbStyle();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (properties_initialized_Switch_kt_7kkg8m) {
    } else {
      properties_initialized_Switch_kt_7kkg8m = true;
      SwitchBorderRadiusVar$delegate = StyleVariable(get_px(9999), 'silk');
      SwitchTrackWidthVar$delegate = StyleVariable(VOID, 'silk');
      SwitchTrackHeightVar$delegate = StyleVariable(VOID, 'silk');
      SwitchTrackPaddingVar$delegate = StyleVariable(VOID, 'silk');
      SwitchTrackBackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      SwitchThumbOffsetVar$delegate = StyleVariable(VOID, 'silk');
      SwitchThumbColorVar$delegate = StyleVariable(VOID, 'silk');
      SwitchStyle$delegate = ComponentStyle_0(VOID, 'silk', SwitchStyle$delegate$lambda);
      var tmp0_extraModifiers = tabIndex(Companion_getInstance(), 0);
      SwitchTrackStyle$delegate = ComponentStyle_0(tmp0_extraModifiers, 'silk', SwitchTrackStyle$delegate$lambda);
      var tmp = Companion_getInstance_13();
      SwitchThumbStyle$delegate = base(tmp, VOID, 'silk', SwitchThumbStyle$delegate$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle$delegate.getValue_1h979_k$(null, CanvasStyle$factory());
  }
  var CanvasStyle$delegate;
  function CanvasStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_getInstance();
  }
  function CanvasStyle$factory() {
    return getPropertyCallableRef('CanvasStyle', 0, KProperty0, function () {
      return get_CanvasStyle();
    }, null);
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (properties_initialized_Canvas_kt_i28dei) {
    } else {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle$delegate = ComponentStyle_0(VOID, 'silk', CanvasStyle$delegate$lambda);
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle$delegate.getValue_1h979_k$(null, ImageStyle$factory());
  }
  var ImageStyle$delegate;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant$delegate.getValue_1h979_k$(null, FitWidthImageVariant$factory());
  }
  var FitWidthImageVariant$delegate;
  function ImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_getInstance();
  }
  function FitWidthImageVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_getInstance(), get_percent(100)), Companion_getInstance_8().get_ScaleDown_ala7ur_k$());
  }
  function ImageStyle$factory() {
    return getPropertyCallableRef('ImageStyle', 0, KProperty0, function () {
      return get_ImageStyle();
    }, null);
  }
  function FitWidthImageVariant$factory() {
    return getPropertyCallableRef('FitWidthImageVariant', 0, KProperty0, function () {
      return get_FitWidthImageVariant();
    }, null);
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (properties_initialized_Image_kt_7kjzpx) {
    } else {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle$delegate = ComponentStyle_0(VOID, 'silk', ImageStyle$delegate$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant$delegate = addVariantBase(tmp, VOID, FitWidthImageVariant$delegate$lambda);
    }
  }
  function get_DividerColorVar() {
    _init_properties_Divider_kt__8b5dnr();
    return DividerColorVar$delegate.getValue_1h979_k$(null, DividerColorVar$factory());
  }
  var DividerColorVar$delegate;
  function get_DividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return DividerStyle$delegate.getValue_1h979_k$(null, DividerStyle$factory());
  }
  var DividerStyle$delegate;
  function DividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp0__get_Solid__yuxops = Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'solid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return fillMaxWidth(borderTop(tmp, tmp_0, tmp$ret$3, get_DividerColorVar().value$default_75jjyg_k$()), get_percent(90));
  }
  function DividerColorVar$factory() {
    return getPropertyCallableRef('DividerColorVar', 0, KProperty0, function () {
      return get_DividerColorVar();
    }, null);
  }
  function DividerStyle$factory() {
    return getPropertyCallableRef('DividerStyle', 0, KProperty0, function () {
      return get_DividerStyle();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (properties_initialized_Divider_kt_k1kxcn) {
    } else {
      properties_initialized_Divider_kt_k1kxcn = true;
      DividerColorVar$delegate = StyleVariable(VOID, 'silk');
      var tmp = Companion_getInstance_13();
      DividerStyle$delegate = base(tmp, VOID, 'silk', DividerStyle$delegate$lambda);
    }
  }
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle$delegate.getValue_1h979_k$(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  function get_SimpleGridColumnVariants() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridColumnVariants;
  }
  var SimpleGridColumnVariants;
  function get_MAX_COLUMN_COUNT() {
    return MAX_COLUMN_COUNT;
  }
  var MAX_COLUMN_COUNT;
  function SimpleGridStyle$delegate$lambda($this$base) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    var tmp0__get_Grid__7tebaj = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'grid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function SimpleGridColumnVariants$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.size_f173z5_k$(get_fr(1));
    return Unit_getInstance();
  }
  function SimpleGridColumnVariants$lambda($numColumns) {
    return function ($this$gridTemplateColumns) {
      $this$gridTemplateColumns.repeat_roqod0_k$($numColumns, SimpleGridColumnVariants$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function SimpleGridColumnVariants$lambda$lambda_0($gridModifier) {
    return function () {
      return $gridModifier;
    };
  }
  function SimpleGridColumnVariants$lambda$lambda_1($gridModifier) {
    return function () {
      return $gridModifier;
    };
  }
  function SimpleGridColumnVariants$lambda_0($isBaseVariant, $element, $gridModifier) {
    return function ($this$addVariant) {
      var tmp;
      if ($isBaseVariant) {
        $this$addVariant.base_li7hyk_k$(SimpleGridColumnVariants$lambda$lambda_0($gridModifier));
        tmp = Unit_getInstance();
      } else {
        $this$addVariant.invoke_l1l5p_k$($element, SimpleGridColumnVariants$lambda$lambda_1($gridModifier));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SimpleGridStyle$factory() {
    return getPropertyCallableRef('SimpleGridStyle', 0, KProperty0, function () {
      return get_SimpleGridStyle();
    }, null);
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (properties_initialized_SimpleGrid_kt_fum19i) {
    } else {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      var tmp = Companion_getInstance_13();
      SimpleGridStyle$delegate = base(tmp, VOID, 'silk', SimpleGridStyle$delegate$lambda);
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridColumnVariants.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.associateWith' call
      var tmp0_associateWith = values();
      var result = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(tmp0_associateWith.length), 16));
      var tmp$ret$6;
      // Inline function 'kotlin.collections.associateWithTo' call
      var indexedObject = tmp0_associateWith;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$5;
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridColumnVariants.<anonymous>.<anonymous>' call
        var isBaseVariant = element.equals(Breakpoint_ZERO_getInstance());
        var tmp_0;
        if (isBaseVariant) {
          tmp_0 = 'base';
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.lowercase' call
          var tmp0_lowercase = element.toString();
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_lowercase;
          tmp$ret$1 = tmp$ret$0.toLowerCase();
          tmp_0 = tmp$ret$1;
        }
        var name = tmp_0;
        var tmp$ret$4;
        // Inline function 'kotlin.collections.associate' call
        var tmp3_associate = until(0, 5);
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp3_associate, 10)), 16);
        var tmp$ret$3;
        // Inline function 'kotlin.collections.associateTo' call
        var tmp2_associateTo = LinkedHashMap_init_$Create$_0(capacity);
        var inductionVariable_0 = tmp3_associate.get_first_irdx8n_k$();
        var last_0 = tmp3_associate.get_last_wopotb_k$();
        if (inductionVariable_0 <= last_0)
          do {
            var element_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$2;
            // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridColumnVariants.<anonymous>.<anonymous>.<anonymous>' call
            var numColumns = element_0 + 1 | 0;
            var tmp_1 = Companion_getInstance();
            var gridModifier = gridTemplateColumns(tmp_1, SimpleGridColumnVariants$lambda(numColumns));
            var tmp_2 = get_SimpleGridStyle();
            var tmp_3 = name + '-' + numColumns;
            tmp$ret$2 = to(numColumns, tmp_2.addVariant$default_69ec6h_k$(tmp_3, VOID, SimpleGridColumnVariants$lambda_0(isBaseVariant, element, gridModifier)));
            var tmp1_plusAssign = tmp$ret$2;
            tmp2_associateTo.put_3mhbri_k$(tmp1_plusAssign.get_first_irdx8n_k$(), tmp1_plusAssign.get_second_jf7fjx_k$());
          }
           while (!(element_0 === last_0));
        tmp$ret$3 = tmp2_associateTo;
        tmp$ret$4 = tmp$ret$3;
        var variants = tmp$ret$4;
        tmp$ret$5 = variants;
        result.put_3mhbri_k$(element, tmp$ret$5);
      }
      tmp$ret$6 = result;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      SimpleGridColumnVariants = tmp$ret$9;
    }
  }
  function get_SurfaceBackgroundColorVar() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceBackgroundColorVar$delegate.getValue_1h979_k$(null, SurfaceBackgroundColorVar$factory());
  }
  var SurfaceBackgroundColorVar$delegate;
  function get_SurfaceColorVar() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceColorVar$delegate.getValue_1h979_k$(null, SurfaceColorVar$factory());
  }
  var SurfaceColorVar$delegate;
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.getValue_1h979_k$(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  function get_AnimatedColorSurfaceVariant() {
    _init_properties_Surface_kt__8o7unv();
    return AnimatedColorSurfaceVariant$delegate.getValue_1h979_k$(null, AnimatedColorSurfaceVariant$factory());
  }
  var AnimatedColorSurfaceVariant$delegate;
  function Surface$composable(modifier, contentAlignment, variant, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1425093924);
    sourceInformation($composer_0, 'C(Surface$composable)P(2,1,4,3)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_ga7h3f_k$(modifier_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = fillMaxSize(Companion_getInstance());
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          contentAlignment_0._v = TopStart_getInstance();
        }
        if (!(($default & 4) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1425093924, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable (Surface.kt:55)');
      }
      var tmp = toModifier$composable(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).then_6jcr1i_k$(modifier_0._v);
      var tmp_0 = contentAlignment_0._v;
      var tmp_1 = ref_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1055562190, true, Surface$composable$lambda(content, $dirty));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_10().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      tmp$ret$1 = tmp_3;
      tmp$ret$2 = tmp$ret$1;
      var tmp_4 = tmp$ret$2;
      tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      Box$composable(tmp, tmp_0, tmp_1, tmp$ret$6, $composer_0, 3072 | 112 & $dirty | 896 & $dirty >> 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Surface$composable$lambda_0(modifier_0, contentAlignment_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.base_li7hyk_k$(SurfaceStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function SurfaceStyle$delegate$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_getInstance(), get_SurfaceBackgroundColorVar().value$default_75jjyg_k$()), get_SurfaceColorVar().value$default_75jjyg_k$());
  }
  function AnimatedColorSurfaceVariant$delegate$lambda($this$addVariant) {
    _init_properties_Surface_kt__8o7unv();
    var backgroundColorTransition = transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', get_ms(200))]);
    $this$addVariant.base_li7hyk_k$(AnimatedColorSurfaceVariant$delegate$lambda$lambda(backgroundColorTransition));
    $this$addVariant.cssRule_ehgmzl_k$(' div', AnimatedColorSurfaceVariant$delegate$lambda$lambda_0(backgroundColorTransition));
    return Unit_getInstance();
  }
  function AnimatedColorSurfaceVariant$delegate$lambda$lambda($backgroundColorTransition) {
    return function () {
      return $backgroundColorTransition;
    };
  }
  function AnimatedColorSurfaceVariant$delegate$lambda$lambda_0($backgroundColorTransition) {
    return function () {
      return $backgroundColorTransition;
    };
  }
  function Surface$composable$lambda($content, $$dirty) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1055562190, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous> (Surface.kt:66)');
        }
        $content($this$Box, $composer_0, 14 & $dirty | 112 & $$dirty >> 9);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function Surface$composable$lambda_0($modifier, $contentAlignment, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable($modifier._v, $contentAlignment._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SurfaceBackgroundColorVar$factory() {
    return getPropertyCallableRef('SurfaceBackgroundColorVar', 0, KProperty0, function () {
      return get_SurfaceBackgroundColorVar();
    }, null);
  }
  function SurfaceColorVar$factory() {
    return getPropertyCallableRef('SurfaceColorVar', 0, KProperty0, function () {
      return get_SurfaceColorVar();
    }, null);
  }
  function SurfaceStyle$factory() {
    return getPropertyCallableRef('SurfaceStyle', 0, KProperty0, function () {
      return get_SurfaceStyle();
    }, null);
  }
  function AnimatedColorSurfaceVariant$factory() {
    return getPropertyCallableRef('AnimatedColorSurfaceVariant', 0, KProperty0, function () {
      return get_AnimatedColorSurfaceVariant();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (properties_initialized_Surface_kt_k203pf) {
    } else {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceBackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      SurfaceColorVar$delegate = StyleVariable(VOID, 'silk');
      SurfaceStyle$delegate = ComponentStyle_0(VOID, 'silk', SurfaceStyle$delegate$lambda);
      var tmp = get_SurfaceStyle();
      AnimatedColorSurfaceVariant$delegate = addVariant(tmp, VOID, AnimatedColorSurfaceVariant$delegate$lambda);
    }
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.getValue_1h979_k$(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.getValue_1h979_k$(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.getValue_1h979_k$(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.getValue_1h979_k$(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.getValue_1h979_k$(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.getValue_1h979_k$(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.getValue_1h979_k$(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.getValue_1h979_k$(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.getValue_1h979_k$(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.getValue_1h979_k$(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.cssRule_hxh9rb_k$(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.cssRule_hxh9rb_k$(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.cssRule_hxh9rb_k$(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.cssRule_hxh9rb_k$(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.cssRule_hxh9rb_k$(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.invoke_l1l5p_k$(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_l1l5p_k$(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_l1l5p_k$(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_l1l5p_k$(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.invoke_l1l5p_k$(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance_9();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return display(tmp, tmp$ret$3);
  }
  function DisplayIfAtLeastZeroStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastZeroStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastZeroStyle();
    }, null);
  }
  function DisplayIfAtLeastSmStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastSmStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastSmStyle();
    }, null);
  }
  function DisplayIfAtLeastMdStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastMdStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastMdStyle();
    }, null);
  }
  function DisplayIfAtLeastLgStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastLgStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastLgStyle();
    }, null);
  }
  function DisplayIfAtLeastXlStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastXlStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastXlStyle();
    }, null);
  }
  function DisplayUntilZeroStyle$factory() {
    return getPropertyCallableRef('DisplayUntilZeroStyle', 0, KProperty0, function () {
      return get_DisplayUntilZeroStyle();
    }, null);
  }
  function DisplayUntilSmStyle$factory() {
    return getPropertyCallableRef('DisplayUntilSmStyle', 0, KProperty0, function () {
      return get_DisplayUntilSmStyle();
    }, null);
  }
  function DisplayUntilMdStyle$factory() {
    return getPropertyCallableRef('DisplayUntilMdStyle', 0, KProperty0, function () {
      return get_DisplayUntilMdStyle();
    }, null);
  }
  function DisplayUntilLgStyle$factory() {
    return getPropertyCallableRef('DisplayUntilLgStyle', 0, KProperty0, function () {
      return get_DisplayUntilLgStyle();
    }, null);
  }
  function DisplayUntilXlStyle$factory() {
    return getPropertyCallableRef('DisplayUntilXlStyle', 0, KProperty0, function () {
      return get_DisplayUntilXlStyle();
    }, null);
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (properties_initialized_BreakpointConditions_kt_kx7tgr) {
    } else {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastZeroStyle$delegate$lambda);
      DisplayIfAtLeastSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastSmStyle$delegate$lambda);
      DisplayIfAtLeastMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastMdStyle$delegate$lambda);
      DisplayIfAtLeastLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastLgStyle$delegate$lambda);
      DisplayIfAtLeastXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastXlStyle$delegate$lambda);
      DisplayUntilZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilZeroStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function get_LinkDefaultColorVar() {
    _init_properties_Link_kt__dm1ox2();
    return LinkDefaultColorVar$delegate.getValue_1h979_k$(null, LinkDefaultColorVar$factory());
  }
  var LinkDefaultColorVar$delegate;
  function get_LinkVisitedColorVar() {
    _init_properties_Link_kt__dm1ox2();
    return LinkVisitedColorVar$delegate.getValue_1h979_k$(null, LinkVisitedColorVar$factory());
  }
  var LinkVisitedColorVar$delegate;
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle$delegate.getValue_1h979_k$(null, LinkStyle$factory());
  }
  var LinkStyle$delegate;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant$delegate.getValue_1h979_k$(null, UndecoratedLinkVariant$factory());
  }
  var UndecoratedLinkVariant$delegate;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant$delegate.getValue_1h979_k$(null, UncoloredLinkVariant$factory());
  }
  var UncoloredLinkVariant$delegate;
  function LinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$ComponentStyle.base_li7hyk_k$(LinkStyle$delegate$lambda$lambda);
    var tmp = get_link_0($this$ComponentStyle);
    tmp.invoke_ifmuo5_k$(LinkStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_visited_0($this$ComponentStyle);
    tmp_0.invoke_ifmuo5_k$(LinkStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_hover_0($this$ComponentStyle);
    tmp_1.invoke_ifmuo5_k$(LinkStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function LinkStyle$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_11().get_None_wo6tgh_k$());
  }
  function LinkStyle$delegate$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), get_LinkDefaultColorVar().value$default_75jjyg_k$());
  }
  function LinkStyle$delegate$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), get_LinkVisitedColorVar().value$default_75jjyg_k$());
  }
  function LinkStyle$delegate$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_11().get_Underline_oo7egz_k$());
  }
  function UndecoratedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover_0($this$addVariant);
    tmp.invoke_ifmuo5_k$(UndecoratedLinkVariant$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function UndecoratedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_11().get_None_wo6tgh_k$());
  }
  function UncoloredLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_link_0($this$addVariant);
    tmp.invoke_ifmuo5_k$(UncoloredLinkVariant$delegate$lambda$lambda);
    var tmp_0 = get_visited_0($this$addVariant);
    tmp_0.invoke_ifmuo5_k$(UncoloredLinkVariant$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function UncoloredLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), get_ColorVar().value$default_75jjyg_k$());
  }
  function UncoloredLinkVariant$delegate$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), get_ColorVar().value$default_75jjyg_k$());
  }
  function LinkDefaultColorVar$factory() {
    return getPropertyCallableRef('LinkDefaultColorVar', 0, KProperty0, function () {
      return get_LinkDefaultColorVar();
    }, null);
  }
  function LinkVisitedColorVar$factory() {
    return getPropertyCallableRef('LinkVisitedColorVar', 0, KProperty0, function () {
      return get_LinkVisitedColorVar();
    }, null);
  }
  function LinkStyle$factory() {
    return getPropertyCallableRef('LinkStyle', 0, KProperty0, function () {
      return get_LinkStyle();
    }, null);
  }
  function UndecoratedLinkVariant$factory() {
    return getPropertyCallableRef('UndecoratedLinkVariant', 0, KProperty0, function () {
      return get_UndecoratedLinkVariant();
    }, null);
  }
  function UncoloredLinkVariant$factory() {
    return getPropertyCallableRef('UncoloredLinkVariant', 0, KProperty0, function () {
      return get_UncoloredLinkVariant();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (properties_initialized_Link_kt_5x6v44) {
    } else {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkDefaultColorVar$delegate = StyleVariable(VOID, 'silk');
      LinkVisitedColorVar$delegate = StyleVariable(VOID, 'silk');
      LinkStyle$delegate = ComponentStyle_0(VOID, 'silk', LinkStyle$delegate$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant$delegate = addVariant(tmp, VOID, UndecoratedLinkVariant$delegate$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant$delegate = addVariant(tmp_0, VOID, UncoloredLinkVariant$delegate$lambda);
    }
  }
  function get_OverlayBackgroundColorVar() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayBackgroundColorVar$delegate.getValue_1h979_k$(null, OverlayBackgroundColorVar$factory());
  }
  var OverlayBackgroundColorVar$delegate;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle$delegate.getValue_1h979_k$(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_getInstance(), get_OverlayBackgroundColorVar().value$default_75jjyg_k$());
  }
  function OverlayBackgroundColorVar$factory() {
    return getPropertyCallableRef('OverlayBackgroundColorVar', 0, KProperty0, function () {
      return get_OverlayBackgroundColorVar();
    }, null);
  }
  function OverlayStyle$factory() {
    return getPropertyCallableRef('OverlayStyle', 0, KProperty0, function () {
      return get_OverlayStyle();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (properties_initialized_Overlay_kt_mvmds0) {
    } else {
      properties_initialized_Overlay_kt_mvmds0 = true;
      OverlayBackgroundColorVar$delegate = StyleVariable();
      var tmp = Companion_getInstance_13();
      OverlayStyle$delegate = base(tmp, VOID, 'silk', OverlayStyle$delegate$lambda);
    }
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle$delegate.getValue_1h979_k$(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('opacity', get_ms(150))]);
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (properties_initialized_Popup_kt_wwy6qs) {
    } else {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_getInstance_13();
      PopupStyle$delegate = base(tmp, VOID, 'silk', PopupStyle$delegate$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipBackgroundColorVar() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipBackgroundColorVar$delegate.getValue_1h979_k$(null, TooltipBackgroundColorVar$factory());
  }
  var TooltipBackgroundColorVar$delegate;
  function get_TooltipColorVar() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipColorVar$delegate.getValue_1h979_k$(null, TooltipColorVar$factory());
  }
  var TooltipColorVar$delegate;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle$delegate.getValue_1h979_k$(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.getValue_1h979_k$(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant$delegate.getValue_1h979_k$(null, TopLeftTooltipArrowVariant$factory());
  }
  var TopLeftTooltipArrowVariant$delegate;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant$delegate.getValue_1h979_k$(null, TopTooltipArrowVariant$factory());
  }
  var TopTooltipArrowVariant$delegate;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant$delegate.getValue_1h979_k$(null, TopRightTooltipArrowVariant$factory());
  }
  var TopRightTooltipArrowVariant$delegate;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant$delegate.getValue_1h979_k$(null, LeftTopTooltipArrowVariant$factory());
  }
  var LeftTopTooltipArrowVariant$delegate;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant$delegate.getValue_1h979_k$(null, LeftTooltipArrowVariant$factory());
  }
  var LeftTooltipArrowVariant$delegate;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant$delegate.getValue_1h979_k$(null, LeftBottomTooltipArrowVariant$factory());
  }
  var LeftBottomTooltipArrowVariant$delegate;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant$delegate.getValue_1h979_k$(null, RightTopTooltipArrowVariant$factory());
  }
  var RightTopTooltipArrowVariant$delegate;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant$delegate.getValue_1h979_k$(null, RightTooltipArrowVariant$factory());
  }
  var RightTooltipArrowVariant$delegate;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant$delegate.getValue_1h979_k$(null, RightBottomTooltipArrowVariant$factory());
  }
  var RightBottomTooltipArrowVariant$delegate;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant$delegate.getValue_1h979_k$(null, BottomLeftTooltipArrowVariant$factory());
  }
  var BottomLeftTooltipArrowVariant$delegate;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant$delegate.getValue_1h979_k$(null, BottomTooltipArrowVariant$factory());
  }
  var BottomTooltipArrowVariant$delegate;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant$delegate.getValue_1h979_k$(null, BottomRightTooltipArrowVariant$factory());
  }
  var BottomRightTooltipArrowVariant$delegate;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    var tmp0__get_Relative__qfoucb = Companion_getInstance_12();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'relative';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), get_TooltipBackgroundColorVar().value$default_75jjyg_k$()), get_TooltipColorVar().value$default_75jjyg_k$()), get_px(6));
  }
  function TooltipArrowStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    var tmp0__get_Absolute__7arore = Companion_getInstance_12();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'absolute';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = borderWidth(position(tmp, tmp$ret$3), get_TRIANGLE_WIDTH());
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    var tmp1__get_Solid__u091i9 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'solid';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    return borderStyle(tmp_0, tmp$ret$7);
  }
  function TopLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function TopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function TopRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin(tmp0_$receiver, tmp2_top, tmp1_right), get_px(0)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function LeftTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function LeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function LeftBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin(Companion_getInstance(), VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function RightTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function RightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function RightBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function BottomLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function BottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function BottomRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin(Companion_getInstance(), VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), get_TooltipBackgroundColorVar().value$default_75jjyg_k$());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_getInstance(), get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_getInstance();
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_getInstance();
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', 'transparent transparent transparent ' + $color);
      return Unit_getInstance();
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_ze5ozi_k$('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_getInstance();
    };
  }
  function TooltipBackgroundColorVar$factory() {
    return getPropertyCallableRef('TooltipBackgroundColorVar', 0, KProperty0, function () {
      return get_TooltipBackgroundColorVar();
    }, null);
  }
  function TooltipColorVar$factory() {
    return getPropertyCallableRef('TooltipColorVar', 0, KProperty0, function () {
      return get_TooltipColorVar();
    }, null);
  }
  function TooltipStyle$factory() {
    return getPropertyCallableRef('TooltipStyle', 0, KProperty0, function () {
      return get_TooltipStyle();
    }, null);
  }
  function TooltipArrowStyle$factory() {
    return getPropertyCallableRef('TooltipArrowStyle', 0, KProperty0, function () {
      return get_TooltipArrowStyle();
    }, null);
  }
  function TopLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopLeftTooltipArrowVariant();
    }, null);
  }
  function TopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopTooltipArrowVariant();
    }, null);
  }
  function TopRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopRightTooltipArrowVariant();
    }, null);
  }
  function LeftTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTopTooltipArrowVariant();
    }, null);
  }
  function LeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTooltipArrowVariant();
    }, null);
  }
  function LeftBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftBottomTooltipArrowVariant();
    }, null);
  }
  function RightTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTopTooltipArrowVariant();
    }, null);
  }
  function RightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTooltipArrowVariant();
    }, null);
  }
  function RightBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightBottomTooltipArrowVariant();
    }, null);
  }
  function BottomLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomLeftTooltipArrowVariant();
    }, null);
  }
  function BottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomTooltipArrowVariant();
    }, null);
  }
  function BottomRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomRightTooltipArrowVariant();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (properties_initialized_Tooltip_kt_68t07n) {
    } else {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      TooltipBackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      TooltipColorVar$delegate = StyleVariable(VOID, 'silk');
      var tmp = Companion_getInstance_13();
      TooltipStyle$delegate = base(tmp, VOID, 'silk', TooltipStyle$delegate$lambda);
      var tmp_0 = Companion_getInstance_13();
      TooltipArrowStyle$delegate = base(tmp_0, VOID, 'silk', TooltipArrowStyle$delegate$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant$delegate = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$delegate$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant$delegate = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$delegate$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant$delegate = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$delegate$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant$delegate = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$delegate$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant$delegate = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$delegate$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant$delegate = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$delegate$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant$delegate = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$delegate$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant$delegate = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$delegate$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant$delegate = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$delegate$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant$delegate = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$delegate$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant$delegate = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$delegate$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant$delegate = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$delegate$lambda);
      var tmp_13 = Companion_getInstance_13();
      TooltipTextContainerStyle = base_0(tmp_13, 'tooltip-text', VOID, TooltipTextContainerStyle$lambda);
    }
  }
  function notifySelectorName($this, selectorName) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = split(selectorName, charArrayOf([_Char___init__impl__6a9atx(46)]));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.notifySelectorName.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$0 = charSequenceLength(element) > 0;
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    var tmp2_forEach = tmp$ret$3;
    var tmp0_iterator_0 = tmp2_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.notifySelectorName.<anonymous>' call
      Companion_getInstance_13().registeredClasses_1.add_1j60pz_k$(element_0);
    }
  }
  function ComponentStyle_init_$Init$(name, extraModifiers, prefix, init, $this) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    ComponentStyle.call($this, name, ComponentStyle$_init_$lambda_6xe5ih(extraModifiers), prefix, init);
    return $this;
  }
  function ComponentStyle_init_$Create$(name, extraModifiers, prefix, init) {
    return ComponentStyle_init_$Init$(name, extraModifiers, prefix, init, objectCreate(protoOf(ComponentStyle)));
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.registeredClasses_1 = tmp$ret$0;
  }
  protoOf(Companion).get_registeredClasses_8gv1qz_k$ = function () {
    return this.registeredClasses_1;
  };
  var Companion_instance;
  function Companion_getInstance_13() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.style_68ppe6_k$(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    var tmp0_subject = group;
    if (tmp0_subject instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.styles_1);
    else {
      if (tmp0_subject instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.styles_1);
      else {
        if (tmp0_subject instanceof ColorAgnostic)
          handler(selectorBaseName, group.styles_1);
        else {
          if (tmp0_subject instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.lightStyles_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.darkStyles_1);
          }
        }
      }
    }
  }
  function get_$stableprop_1() {
    return 8;
  }
  function addStylesInto$mergeCssModifiers(_this__u8e3s4, init) {
    var tmp$ret$12;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.groupBy' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    tmp$ret$0 = _this__u8e3s4;
    var tmp1_groupBy = tmp$ret$0.cssModifiers_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.groupByTo' call
    var tmp0_groupByTo = LinkedHashMap_init_$Create$();
    var tmp0_iterator = tmp1_groupBy.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = tmp0_groupByTo.get_1mhr4y_k$(key);
      var tmp;
      if (value == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        tmp$ret$2 = ArrayList_init_$Create$_0();
        var answer = tmp$ret$2;
        tmp0_groupByTo.put_3mhbri_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp$ret$3 = tmp;
      var list = tmp$ret$3;
      list.add_1j60pz_k$(element);
    }
    tmp$ret$4 = tmp0_groupByTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp4_mapValues = tmp$ret$5;
    var tmp$ret$11;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp3_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp4_mapValues.get_size_woubt6_k$()));
    var tmp$ret$10;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp2_associateByTo = tmp4_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator_0 = tmp2_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$6 = element_0.get_key_18j28a_k$();
      var tmp_0 = tmp$ret$6;
      var tmp$ret$8;
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$7 = element_0.get_value_j01efc_k$();
        var group = tmp$ret$7;
        var first_0 = first(group);
        if (group.get_size_woubt6_k$() === 1) {
          tmp$ret$8 = first_0;
          break $l$block;
        }
        var tmp_1 = Companion_getInstance();
        var mergedModifier = isInterface(tmp_1, Modifier) ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = group.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.mergeCssModifiers.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.check' call
          var tmp0_check = equals(element_1.mediaQuery_1, first_0.mediaQuery_1) ? element_1.suffix_1 == first_0.suffix_1 : false;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$9;
            // Inline function 'kotlin.check.<anonymous>' call
            tmp$ret$9 = 'Check failed.';
            var message = tmp$ret$9;
            throw IllegalStateException_init_$Create$(toString(message));
          }
          mergedModifier = mergedModifier.then_6jcr1i_k$(element_1.modifier_1);
        }
        tmp$ret$8 = new CssModifier(mergedModifier, first_0.mediaQuery_1, first_0.suffix_1);
      }
      tmp3_mapValuesTo.put_3mhbri_k$(tmp_0, tmp$ret$8);
    }
    tmp$ret$10 = tmp3_mapValuesTo;
    tmp$ret$11 = tmp$ret$10;
    tmp$ret$12 = tmp$ret$11;
    return tmp$ret$12;
  }
  function ComponentStyle$_init_$lambda_6xe5ih($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1698572553);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1698572553, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<init>.<anonymous> (ComponentStyle.kt:333)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function ComponentStyle$addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-2083936979);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2083936979, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addVariant.<anonymous> (ComponentStyle.kt:384)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      var tmp0_forEach = $styles.get_properties_zhllqc_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.property_ze5ozi_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
      var tmp1_forEach = $styles.get_variables_75f0zy_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$1 = tmp1_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator_0 = tmp$ret$1;
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.variable_d7dn6f_k$(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda(this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        notifySelectorName(Companion_getInstance_13(), name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_getInstance();
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        notifySelectorName(Companion_getInstance_13(), name);
        var tmp$ret$0;
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_orEmpty = $cssRuleKey.suffix_1;
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var cssRule = name + tmp$ret$0;
        var tmp_0;
        if (!($cssRuleKey.mediaQuery_1 == null)) {
          var tmp$ret$1;
          // Inline function 'kotlin.apply' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>.<anonymous>' call
          media($styleSheet, $cssRuleKey.mediaQuery_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp$ret$1 = $styleSheet;
          tmp_0 = Unit_getInstance();
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function ComponentStyle(name, extraModifiers, prefix, init) {
    Companion_getInstance_13();
    prefix = prefix === VOID ? null : prefix;
    illegalDecoyCallException('<init>');
  }
  protoOf(ComponentStyle).get_extraModifiers_h2rw6j_k$ = function () {
    return this.extraModifiers_1;
  };
  protoOf(ComponentStyle).get_prefix_i78za3_k$ = function () {
    return this.prefix_1;
  };
  protoOf(ComponentStyle).get_init_woo195_k$ = function () {
    return this.init_1;
  };
  protoOf(ComponentStyle).get_nameWithoutPrefix_lto6iu_k$ = function () {
    return this.nameWithoutPrefix_1;
  };
  protoOf(ComponentStyle).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ComponentStyle).get_variants_ik7l93_k$ = function () {
    return this.variants_1;
  };
  protoOf(ComponentStyle).addVariant_87mxd8_k$ = function (name, extraModifiers, init) {
    return this.addVariant$composable_l96oft_k$(name, ComponentStyle$addVariant$lambda(extraModifiers), init);
  };
  protoOf(ComponentStyle).addVariant$default_69ec6h_k$ = function (name, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return $super === VOID ? this.addVariant_87mxd8_k$(name, extraModifiers, init) : $super.addVariant_87mxd8_k$.call(this, name, extraModifiers, init);
  };
  protoOf(ComponentStyle).addVariant_x10yxp_k$ = function (name, extraModifiers, init) {
    illegalDecoyCallException('addVariant');
  };
  protoOf(ComponentStyle).addStylesInto_y7xxx7_k$ = function (styleSheet, selectorName) {
    notifySelectorName(Companion_getInstance_13(), selectorName);
    var lightModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this.init_1);
    var darkModifiers = addStylesInto$mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this.init_1);
    var tmp = Companion_getInstance_14();
    var tmp0_safe_receiver = lightModifiers.get_1mhr4y_k$(Companion_getInstance_15().BaseKey_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.modifier_1;
    var tmp1_safe_receiver = darkModifiers.get_1mhr4y_k$(Companion_getInstance_15().BaseKey_1);
    var tmp2_safe_receiver = tmp.from_l7i5qu_k$(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.modifier_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(this, styleSheet));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = plus_1(lightModifiers.get_keys_wop4xp_k$(), darkModifiers.get_keys_wop4xp_k$());
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      tmp$ret$1 = !element.equals(Companion_getInstance_15().BaseKey_1);
      if (tmp$ret$1) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$2 = tmp0_filterTo;
    tmp$ret$3 = tmp$ret$2;
    var allCssRuleKeys = tmp$ret$3;
    var tmp3_iterator = allCssRuleKeys.iterator_jk1svi_k$();
    while (tmp3_iterator.hasNext_bitz1p_k$()) {
      var cssRuleKey = tmp3_iterator.next_20eer_k$();
      var tmp_1 = Companion_getInstance_14();
      var tmp4_safe_receiver = lightModifiers.get_1mhr4y_k$(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.modifier_1;
      var tmp5_safe_receiver = darkModifiers.get_1mhr4y_k$(cssRuleKey);
      var tmp6_safe_receiver = tmp_1.from_l7i5qu_k$(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.modifier_1);
      if (tmp6_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        withFinalSelectorName(this, selectorName, tmp6_safe_receiver, ComponentStyle$addStylesInto$lambda_0(cssRuleKey, styleSheet, this));
        tmp$ret$4 = Unit_getInstance();
      }
    }
  };
  protoOf(ComponentStyle).addStylesInto_duevp8_k$ = function (styleSheet) {
    this.addStylesInto_y7xxx7_k$(styleSheet, '.' + this.name_1);
  };
  protoOf(ComponentStyle).intoImmutableStyle_rq28y7_k$ = function () {
    return new ImmutableComponentStyle(this.name_1, this.extraModifiers_1);
  };
  function ComponentStyle(name, extraModifiers, prefix, init) {
    Companion_getInstance_13();
    prefix = prefix === VOID ? null : prefix;
    this.extraModifiers_1 = extraModifiers;
    this.prefix_1 = prefix;
    this.init_1 = init;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(name) > 0;
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      tmp$ret$1 = 'ComponentStyle name must not be empty';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.nameWithoutPrefix_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.prefix_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp$ret$2 = '' + tmp0_safe_receiver + '-' + name;
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$_0();
    tmp_1.variants_1 = tmp$ret$4;
    this.$stable_1 = 8;
  }
  protoOf(ComponentStyle).addVariant$composable_l96oft_k$ = function (name, extraModifiers, init) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SimpleComponentVariant(new ComponentStyle(this.name_1 + '-' + name, extraModifiers, null, init), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addVariant$composable.<anonymous>' call
    this.variants_1.add_1j60pz_k$(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  function _get_extraModifiers__fohold($this) {
    return $this.extraModifiers_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function _get_init__d89e0r($this) {
    return $this.init_1;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    illegalDecoyCallException('<init>');
  }
  protoOf(ComponentStyleProvider).create_b1vg3p_k$ = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.extraModifiers_1, this.prefix_1, this.init_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.extraModifiers_1 = extraModifiers;
    this.prefix_1 = prefix;
    this.init_1 = init;
    this.$stable_2 = 0;
  }
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle$composable(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function get_$stableprop_3() {
    return 0;
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.colorMode_1 = colorMode;
    this.$stable_2 = 0;
  }
  protoOf(ComponentModifiers).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base$composable(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function get_$stableprop_4() {
    return 0;
  }
  function ComponentBaseModifier(colorMode) {
    this.colorMode_1 = colorMode;
    this.$stable_1 = 0;
  }
  protoOf(ComponentBaseModifier).get_colorMode_trbg8z_k$ = function () {
    return this.colorMode_1;
  };
  function ComponentStyle$composable(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function get_$stableprop_5() {
    return 0;
  }
  function Empty() {
    Empty_instance = this;
    ComponentVariant.call(this);
    this.$stable_2 = 0;
  }
  protoOf(Empty).addStylesInto_duevp8_k$ = function (styleSheet) {
    return Unit_getInstance();
  };
  protoOf(Empty).toModifier_aieq32_k$ = function () {
    illegalDecoyCallException('toModifier');
  };
  protoOf(Empty).toModifier$composable_j690xl_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1324185618);
    if (isTraceInProgress()) {
      traceEventStart(1324185618, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentVariant.Empty.toModifier$composable (ComponentStyle.kt:611)');
    }
    var tmp0 = Companion_getInstance();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function ComponentVariant() {
    this.$stable_1 = 0;
  }
  protoOf(ComponentVariant).then_xyv14v_k$ = function (next) {
    return next === Empty_getInstance() ? this : this === Empty_getInstance() ? next : new CompositeComponentVariant(this, next);
  };
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _get_extraModifiers__fohold_0($this) {
    return $this.extraModifiers_1;
  }
  function _get_init__d89e0r_0($this) {
    return $this.init_1;
  }
  function get_$stableprop_7() {
    return 8;
  }
  function ComponentVariantProvider(style, extraModifiers, init) {
    illegalDecoyCallException('<init>');
  }
  protoOf(ComponentVariantProvider).create_b1vg3p_k$ = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = removeSuffix(removePrefix(withoutSuffix, this.style_1.nameWithoutPrefix_1 + '-'), '-' + this.style_1.nameWithoutPrefix_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(tmp0_takeIf) > 0;
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_elvis_lhs = tmp$ret$2;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.style_1.addVariant$composable_l96oft_k$(name, this.extraModifiers_1, this.init_1);
  };
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.style_1 = style;
    this.extraModifiers_1 = extraModifiers;
    this.init_1 = init;
    this.$stable_2 = 8;
  }
  function addVariantBase(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return addVariantBase$composable(_this__u8e3s4, addVariantBase$lambda(extraModifiers), init);
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return addVariant$composable(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function base_0(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    return base$composable_0(_this__u8e3s4, className, base$lambda_0(extraModifiers), init);
  }
  function ComponentModifier() {
  }
  function get_$stableprop_8() {
    return 0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function Light(styles) {
    this.styles_1 = styles;
    this.$stable_1 = 0;
  }
  protoOf(Light).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function Dark(styles) {
    this.styles_1 = styles;
    this.$stable_1 = 0;
  }
  protoOf(Dark).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function ColorAgnostic(styles) {
    this.styles_1 = styles;
    this.$stable_1 = 0;
  }
  protoOf(ColorAgnostic).get_styles_jnubqj_k$ = function () {
    return this.styles_1;
  };
  function ColorAware(lightStyles, darkStyles) {
    this.lightStyles_1 = lightStyles;
    this.darkStyles_1 = darkStyles;
    this.$stable_1 = 0;
  }
  protoOf(ColorAware).get_lightStyles_rob4y9_k$ = function () {
    return this.lightStyles_1;
  };
  protoOf(ColorAware).get_darkStyles_j1rmo1_k$ = function () {
    return this.darkStyles_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).from_l7i5qu_k$ = function (lightModifiers, darkModifiers) {
    var tmp0_safe_receiver = lightModifiers;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(tmp0_safe_receiver)(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var lightStyles = tmp;
    var tmp1_safe_receiver = darkModifiers;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(tmp1_safe_receiver)(tmp0_apply_0);
      tmp$ret$3 = tmp0_apply_0;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp_0 = tmp$ret$5;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    var tmp0_check = !(lightStyles == null) ? !(darkStyles == null) : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$6;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$6 = 'Check failed.';
      var message = tmp$ret$6;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_14() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function StyleGroup() {
  }
  function get_$stableprop_12() {
    return 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.BaseKey_1 = new Key(null, null);
  }
  protoOf(Companion_1).get_BaseKey_nalpdx_k$ = function () {
    return this.BaseKey_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_15() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Key(mediaQuery, suffix) {
    this.mediaQuery_1 = mediaQuery;
    this.suffix_1 = suffix;
    this.$stable_1 = 0;
  }
  protoOf(Key).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(Key).get_suffix_jo1v8a_k$ = function () {
    return this.suffix_1;
  };
  protoOf(Key).component1_7eebsc_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(Key).component2_7eebsb_k$ = function () {
    return this.suffix_1;
  };
  protoOf(Key).copy_umjt85_k$ = function (mediaQuery, suffix) {
    return new Key(mediaQuery, suffix);
  };
  protoOf(Key).copy$default_7is6as_k$ = function (mediaQuery, suffix, $super) {
    mediaQuery = mediaQuery === VOID ? this.mediaQuery_1 : mediaQuery;
    suffix = suffix === VOID ? this.suffix_1 : suffix;
    return $super === VOID ? this.copy_umjt85_k$(mediaQuery, suffix) : $super.copy_umjt85_k$.call(this, mediaQuery, suffix);
  };
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.mediaQuery_1 + ', suffix=' + this.suffix_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.mediaQuery_1 == null ? 0 : getStringHashCode(this.mediaQuery_1);
    result = imul(result, 31) + (this.suffix_1 == null ? 0 : getStringHashCode(this.suffix_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.mediaQuery_1 == tmp0_other_with_cast.mediaQuery_1))
      return false;
    if (!(this.suffix_1 == tmp0_other_with_cast.suffix_1))
      return false;
    return true;
  };
  function CssModifier$lambda(_anonymous_parameter_0__qggqh8, currModifier) {
    if (!(currModifier instanceof StyleModifier)) {
      throw IllegalArgumentException_init_$Create$('You are attempting to construct a ComponentStyle or ComponentVariant with a non-style Modifier\n(e.g. `id`, `tabIndex`, etc.). Due to technical limitations in html / css, only `StyleModifier`s\nare allowed in this context.\n\nUnfortunately, at the point this exception is getting thrown, information about the offending\nattribute is not known. Please audit your project\'s ComponentStyle and ComponentVariant\nModifiers, perhaps commenting out recently added ones, until this exception goes away.\n\nOnce the offending modifier is identified, to fix this, you can either call attribute modifiers\ndirectly on the Modifier you pass into some widget, or you can extend this Style or Variant with\nextra modifiers by passing them in the `extraModifier` parameter:\n\n```\n// Approach #1: Call Attribute Modifiers later\n\nval ExampleStyle = ComponentStyle("ex") {\n   ...\n}\n\nExampleWidget(ExampleStyle.toModifier().tabIndex(0))\n\n// Approach #2: Use `extraModifiers`:\n\nval ExampleStyle = ComponentStyle("ex", extraModifiers = Modifier.tabIndex(0)) {\n   ...\n}\n\nExampleWidget(ExampleStyle.toModifier())\n```');
    }
    return Unit_getInstance();
  }
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_15();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.modifier_1 = modifier;
    this.mediaQuery_1 = mediaQuery;
    this.suffix_1 = suffix;
    this.modifier_1.fold_s9dnuv_k$(Unit_getInstance(), CssModifier$lambda);
  }
  protoOf(CssModifier).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(CssModifier).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(CssModifier).get_suffix_jo1v8a_k$ = function () {
    return this.suffix_1;
  };
  protoOf(CssModifier).get_key_18j28a_k$ = function () {
    var tmp0_safe_receiver = this.mediaQuery_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.suffix_1);
  };
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function _get_extraModifiers__fohold_1($this) {
    return $this.extraModifiers_1;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function ImmutableComponentStyle(name, extraModifiers) {
    illegalDecoyCallException('<init>');
  }
  protoOf(ImmutableComponentStyle).toModifier_aieq32_k$ = function () {
    illegalDecoyCallException('toModifier');
  };
  function ImmutableComponentStyle(name, extraModifiers) {
    this.name_1 = name;
    this.extraModifiers_1 = extraModifiers;
    this.$stable_1 = 0;
  }
  protoOf(ImmutableComponentStyle).toModifier$composable_j690xl_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(512683125);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(512683125, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable (ComponentStyle.kt:202)');
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp1_filter = listOf([this.name_1, suffixedWith(this.name_1, getColorMode$composable($composer_0, 0))]);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_filter.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable.<anonymous>' call
      var tmp0_return = Companion_getInstance_13().registeredClasses_1.contains_2ehdt1_k$(element);
      tmp$ret$0 = tmp0_return;
      if (tmp$ret$0) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var classNames_0 = tmp$ret$2;
    var tmp;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !classNames_0.isEmpty_y1axqb_k$();
    if (tmp$ret$3) {
      var tmp_0 = Companion_getInstance();
      var tmp$ret$4;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$4 = copyToArray(classNames_0);
      tmp = classNames(tmp_0, tmp$ret$4.slice());
    } else {
      tmp = Companion_getInstance();
    }
    var tmp0 = tmp.then_6jcr1i_k$(this.extraModifiers_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  function get_$stableprop_14() {
    return 0;
  }
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.style_1 = style;
    this.baseStyle_1 = baseStyle;
    this.$stable_2 = 0;
  }
  protoOf(SimpleComponentVariant).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(SimpleComponentVariant).get_baseStyle_lpil3d_k$ = function () {
    return this.baseStyle_1;
  };
  protoOf(SimpleComponentVariant).get_name_woqyms_k$ = function () {
    return removePrefix(this.style_1.name_1, this.baseStyle_1.name_1 + '-');
  };
  protoOf(SimpleComponentVariant).addStylesInto_duevp8_k$ = function (styleSheet) {
    this.style_1.addStylesInto_y7xxx7_k$(styleSheet, '.' + this.baseStyle_1.name_1 + '.' + this.style_1.name_1);
  };
  protoOf(SimpleComponentVariant).toModifier_aieq32_k$ = function () {
    illegalDecoyCallException('toModifier');
  };
  protoOf(SimpleComponentVariant).intoImmutableStyle_rq28y7_k$ = function () {
    return this.style_1.intoImmutableStyle_rq28y7_k$();
  };
  protoOf(SimpleComponentVariant).toModifier$composable_j690xl_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1695500569);
    if (isTraceInProgress()) {
      traceEventStart(-1695500569, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier$composable (ComponentStyle.kt:667)');
    }
    var tmp0 = toModifier$composable(this.style_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  function _get__cssModifiers__il7nll($this) {
    return $this._cssModifiers_1;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function StyleModifiers() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp._cssModifiers_1 = tmp$ret$0;
    this.cssModifiers_1 = this._cssModifiers_1;
    this.$stable_1 = 0;
  }
  protoOf(StyleModifiers).get_cssModifiers_m7qozi_k$ = function () {
    return this.cssModifiers_1;
  };
  protoOf(StyleModifiers).base_li7hyk_k$ = function (createModifier) {
    this._cssModifiers_1.add_1j60pz_k$(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).cssRule_e10r4o_k$ = function (mediaQuery, suffix, createModifier) {
    this._cssModifiers_1.add_1j60pz_k$(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).cssRule_ehgmzl_k$ = function (suffix, createModifier) {
    this._cssModifiers_1.add_1j60pz_k$(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).cssRule_hxh9rb_k$ = function (mediaQuery, createModifier) {
    this._cssModifiers_1.add_1j60pz_k$(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).invoke_l1l5p_k$ = function (_this__u8e3s4, createModifier) {
    this.cssRule_hxh9rb_k$(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function base$composable(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$composable$lambda(init));
  }
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.head_1 = head;
    this.tail_1 = tail;
  }
  protoOf(CompositeComponentVariant).addStylesInto_duevp8_k$ = function (styleSheet) {
    this.head_1.addStylesInto_duevp8_k$(styleSheet);
    this.tail_1.addStylesInto_duevp8_k$(styleSheet);
  };
  protoOf(CompositeComponentVariant).toModifier_aieq32_k$ = function () {
    illegalDecoyCallException('toModifier');
  };
  protoOf(CompositeComponentVariant).toModifier$composable_j690xl_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-690240964);
    if (isTraceInProgress()) {
      traceEventStart(-690240964, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier$composable (ComponentStyle.kt:679)');
    }
    var tmp0 = this.head_1.toModifier$composable_j690xl_k$($composer_0, 0).then_6jcr1i_k$(this.tail_1.toModifier$composable_j690xl_k$($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  function addVariantBase$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, addVariantBase$composable$lambda(init));
  }
  function addVariant$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function base$composable_0(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle(className, extraModifiers, VOID, base$composable$lambda_0(init));
  }
  function toModifier$composable(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1254167608);
    sourceInformation($composer_0, 'C(toModifier$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1254167608, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier$composable (ComponentStyle.kt:691)');
    }
    var tmp0 = getValue(get_SilkTheme().get_componentStyles_qanhau_k$(), _this__u8e3s4.name_1).toModifier$composable_j690xl_k$($composer_0, 0).then_6jcr1i_k$(combine$composable(toList(variants), $composer_0, 0).toModifier$composable_j690xl_k$($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function combine$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1446826835);
    sourceInformation($composer_0, 'C(combine$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1446826835, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine$composable (ComponentStyle.kt:736)');
    }
    var finalVariant = Empty_getInstance();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var variant = tmp0_iterator.next_20eer_k$();
      var tmp = finalVariant;
      var tmp1_elvis_lhs = variant;
      finalVariant = tmp.then_xyv14v_k$(tmp1_elvis_lhs == null ? Empty_getInstance() : tmp1_elvis_lhs);
    }
    var tmp0 = finalVariant;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:526)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:538)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-310854580);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-310854580, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariantBase.<anonymous> (ComponentStyle.kt:581)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1248093650);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1248093650, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentStyle.kt:575)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:240)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function base$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.colorMode_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.base_li7hyk_k$(base$composable$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function addVariantBase$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.colorMode_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function addVariantBase$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.base_li7hyk_k$(addVariantBase$composable$lambda$lambda($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function base$composable$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = new ComponentBaseModifier($this_$receiver.colorMode_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = $init(tmp0_let);
      return tmp$ret$0;
    };
  }
  function base$composable$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.base_li7hyk_k$(base$composable$lambda$lambda_0($this$$receiver, $init));
      return Unit_getInstance();
    };
  }
  function get_$stableprop_16() {
    return 8;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function get_$stableprop_21() {
    return 0;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).OfFunctionalPseudoClass_wf6xck_k$ = function (target, pseudoClass, params) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = params;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      tmp$ret$0 = element.toSelectorText_wuaxtz_k$();
      var tmp0_safe_receiver = tmp$ret$0;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
    }
    tmp$ret$2 = tmp0_mapNotNullTo;
    tmp$ret$3 = tmp$ret$2;
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(tmp$ret$3) + ')');
  };
  var Companion_instance_2;
  function Companion_getInstance_16() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function OfMedia(target, mediaQuery) {
    CssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
    this.$stable_2 = 8;
  }
  protoOf(OfMedia).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(OfMedia).plus_1jnq5l_k$ = function (other) {
    return new CompositeOpen(this.target_1, this.mediaQuery_2, emptyList(), listOf_0(other));
  };
  protoOf(OfMedia).plus_njvqst_k$ = function (other) {
    return new CompositeClosed(this.target_1, this.mediaQuery_2, emptyList(), emptyList(), other);
  };
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
    this.$stable_2 = 0;
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.attributeSelector_1 = attributeSelector;
    this.$stable_3 = 0;
  }
  protoOf(OfAttributeSelector).get_attributeSelector_29w3da_k$ = function () {
    return this.attributeSelector_1;
  };
  protoOf(OfAttributeSelector).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_mn0tr_k$(listOf_0(this), emptyList(), null);
  };
  protoOf(OfAttributeSelector).plus_6faqlm_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, listOf([this, other]), emptyList());
  };
  protoOf(OfAttributeSelector).plus_1jnq5l_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, listOf_0(this), listOf_0(other));
  };
  protoOf(OfAttributeSelector).plus_njvqst_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, listOf_0(this), emptyList(), other);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.pseudoClass_1 = pseudoClass;
    this.$stable_3 = 0;
  }
  protoOf(OfPseudoClass).get_pseudoClass_x3c835_k$ = function () {
    return this.pseudoClass_1;
  };
  protoOf(OfPseudoClass).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_mn0tr_k$(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).plus_1jnq5l_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, emptyList(), listOf([this, other]));
  };
  protoOf(OfPseudoClass).plus_njvqst_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, emptyList(), listOf_0(this), other);
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.pseudoElement_1 = pseudoElement;
    this.$stable_3 = 0;
  }
  protoOf(OfPseudoElement).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  protoOf(OfPseudoElement).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_mn0tr_k$(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
    this.attributeSelectors_1 = attributeSelectors;
    this.pseudoClasses_1 = pseudoClasses;
    this.$stable_3 = 0;
  }
  protoOf(CompositeOpen).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(CompositeOpen).get_attributeSelectors_ih5mp_k$ = function () {
    return this.attributeSelectors_1;
  };
  protoOf(CompositeOpen).get_pseudoClasses_jp4mn5_k$ = function () {
    return this.pseudoClasses_1;
  };
  protoOf(CompositeOpen).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_mn0tr_k$(this.attributeSelectors_1, this.pseudoClasses_1, null);
  };
  protoOf(CompositeOpen).plus_1jnq5l_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, this.attributeSelectors_1, plus_2(this.pseudoClasses_1, other));
  };
  protoOf(CompositeOpen).plus_6faqlm_k$ = function (other) {
    return new CompositeOpen(this.target_1, null, plus_2(this.attributeSelectors_1, other), this.pseudoClasses_1);
  };
  protoOf(CompositeOpen).plus_njvqst_k$ = function (other) {
    return new CompositeClosed(this.target_1, null, this.attributeSelectors_1, this.pseudoClasses_1, other);
  };
  function CompositeClosed(target, mediaQuery, attributeSelectors, pseudoClasses, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.mediaQuery_2 = mediaQuery;
    this.attributeSelectors_1 = attributeSelectors;
    this.pseudoClasses_1 = pseudoClasses;
    this.pseudoElement_1 = pseudoElement;
    this.$stable_3 = 0;
  }
  protoOf(CompositeClosed).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_2;
  };
  protoOf(CompositeClosed).get_attributeSelectors_ih5mp_k$ = function () {
    return this.attributeSelectors_1;
  };
  protoOf(CompositeClosed).get_pseudoClasses_jp4mn5_k$ = function () {
    return this.pseudoClasses_1;
  };
  protoOf(CompositeClosed).get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  protoOf(CompositeClosed).toSelectorText_wuaxtz_k$ = function () {
    return this.buildSelectorText_mn0tr_k$(this.attributeSelectors_1, this.pseudoClasses_1, this.pseudoElement_1);
  };
  function get_$stableprop_23() {
    return 0;
  }
  function CssRule(target) {
    Companion_getInstance_16();
    this.target_1 = target;
    this.mediaQuery_1 = null;
    this.$stable_1 = 0;
  }
  protoOf(CssRule).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(CssRule).invoke_ifmuo5_k$ = function (createModifier) {
    this.target_1.cssRule_e10r4o_k$(this.get_mediaQuery_bp0atp_k$(), this.toSelectorText_wuaxtz_k$(), createModifier);
  };
  protoOf(CssRule).get_mediaQuery_bp0atp_k$ = function () {
    return this.mediaQuery_1;
  };
  protoOf(CssRule).toSelectorText_wuaxtz_k$ = function () {
    return null;
  };
  protoOf(CssRule).buildSelectorText_mn0tr_k$ = function (attributeSelectors, pseudoClasses, pseudoElement) {
    var tmp$ret$4;
    // Inline function 'kotlin.takeIf' call
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      tmp0_apply.append_ssq29y_k$('[' + element.attributeSelector_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      tmp0_apply.append_ssq29y_k$(':' + element_0.pseudoClass_1);
    }
    if (!(pseudoElement == null)) {
      tmp0_apply.append_ssq29y_k$('::' + pseudoElement.pseudoElement_1);
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    var tmp1_takeIf = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$3;
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$2 = charSequenceLength(tmp1_takeIf) > 0;
    tmp$ret$3 = tmp$ret$2;
    if (tmp$ret$3) {
      tmp = tmp1_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  };
  function not_0(_this__u8e3s4, params) {
    return Companion_getInstance_16().OfFunctionalPseudoClass_wf6xck_k$(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_link_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited_0(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ZERO':
        return Breakpoint_ZERO_getInstance();
      case 'SM':
        return Breakpoint_SM_getInstance();
      case 'MD':
        return Breakpoint_MD_getInstance();
      case 'LG':
        return Breakpoint_LG_getInstance();
      case 'XL':
        return Breakpoint_XL_getInstance();
      default:
        Breakpoint_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_getInstance();
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Breakpoint).getValue_384s3h_k$ = function (thisRef, property) {
    return this;
  };
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.sm_1 = sm;
    this.md_1 = md;
    this.lg_1 = lg;
    this.xl_1 = xl;
    this.$stable_1 = 0;
  }
  protoOf(BreakpointValues).get_sm_kntnod_k$ = function () {
    return this.sm_1;
  };
  protoOf(BreakpointValues).get_md_kntnts_k$ = function () {
    return this.md_1;
  };
  protoOf(BreakpointValues).get_lg_kntnuk_k$ = function () {
    return this.lg_1;
  };
  protoOf(BreakpointValues).get_xl_kntnk3_k$ = function () {
    return this.xl_1;
  };
  protoOf(BreakpointValues).component1_7eebsc_k$ = function () {
    return this.sm_1;
  };
  protoOf(BreakpointValues).component2_7eebsb_k$ = function () {
    return this.md_1;
  };
  protoOf(BreakpointValues).component3_7eebsa_k$ = function () {
    return this.lg_1;
  };
  protoOf(BreakpointValues).component4_7eebs9_k$ = function () {
    return this.xl_1;
  };
  protoOf(BreakpointValues).copy_rewhmp_k$ = function (sm, md, lg, xl) {
    return new BreakpointValues(sm, md, lg, xl);
  };
  protoOf(BreakpointValues).copy$default_lse4sr_k$ = function (sm, md, lg, xl, $super) {
    sm = sm === VOID ? this.sm_1 : sm;
    md = md === VOID ? this.md_1 : md;
    lg = lg === VOID ? this.lg_1 : lg;
    xl = xl === VOID ? this.xl_1 : xl;
    return $super === VOID ? this.copy_rewhmp_k$(sm, md, lg, xl) : $super.copy_rewhmp_k$.call(this, sm, md, lg, xl);
  };
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.sm_1 + ', md=' + this.md_1 + ', lg=' + this.lg_1 + ', xl=' + this.xl_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.sm_1);
    result = imul(result, 31) + hashCode(this.md_1) | 0;
    result = imul(result, 31) + hashCode(this.lg_1) | 0;
    result = imul(result, 31) + hashCode(this.xl_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.sm_1, tmp0_other_with_cast.sm_1))
      return false;
    if (!equals(this.md_1, tmp0_other_with_cast.md_1))
      return false;
    if (!equals(this.lg_1, tmp0_other_with_cast.lg_1))
      return false;
    if (!equals(this.xl_1, tmp0_other_with_cast.xl_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    sm = sm === VOID ? get_cssRem(0) : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function get_$stableprop_25() {
    return 0;
  }
  function get_$stableprop_26() {
    return 0;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function Px(value) {
    BreakpointUnitValue.call(this, value);
    this.$stable_2 = 0;
  }
  protoOf(Px).toPx_24esj_k$ = function () {
    return this.width_1;
  };
  function Em(value) {
    BreakpointUnitValue.call(this, value);
    this.$stable_2 = 0;
  }
  protoOf(Em).toPx_24esj_k$ = function () {
    return get_px(this.width_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
    this.$stable_2 = 0;
  }
  protoOf(Rem).toPx_24esj_k$ = function () {
    return get_px(this.width_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function get_$stableprop_28() {
    return 0;
  }
  function BreakpointUnitValue(width) {
    this.width_1 = width;
    this.$stable_1 = 0;
  }
  protoOf(BreakpointUnitValue).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.components.style.breakpoint.<get-bodyFontSize>.<anonymous>' call
      tmp$ret$0 = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp0_safe_receiver).getPropertyValue('font-size'), 'px'));
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var bodySize = tmp;
    var tmp1_elvis_lhs = bodySize;
    return tmp1_elvis_lhs == null ? 16 : tmp1_elvis_lhs;
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle$delegate.getValue_1h979_k$(null, DisabledStyle$factory());
  }
  var DisabledStyle$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.getValue_1h979_k$(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function get_ariaDisabled(_this__u8e3s4) {
    _init_properties_CommonStyles_kt__a7wisz();
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function DisabledStyle$delegate$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1529746738);
    if (isTraceInProgress()) {
      traceEventStart(1529746738, $changed, -1, 'com.varabyte.kobweb.silk.components.style.common.DisabledStyle$delegate.<anonymous> (CommonStyles.kt:19)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_getInstance()), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function DisabledStyle$delegate$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_getInstance(), 0.5), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_getInstance(), [CSSTransition_init_$Create$('background-color', get_ms(200))]);
  }
  function DisabledStyle$factory() {
    return getPropertyCallableRef('DisabledStyle', 0, KProperty0, function () {
      return get_DisabledStyle();
    }, null);
  }
  function SmoothColorStyle$factory() {
    return getPropertyCallableRef('SmoothColorStyle', 0, KProperty0, function () {
      return get_SmoothColorStyle();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (properties_initialized_CommonStyles_kt_zd2b1t) {
    } else {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_getInstance_13();
      var tmp_0 = DisabledStyle$delegate$lambda;
      DisabledStyle$delegate = base$composable(tmp, tmp_0, 'silk', DisabledStyle$delegate$lambda_0);
      var tmp_1 = Companion_getInstance_13();
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk', SmoothColorStyle$delegate$lambda);
    }
  }
  function get_DivTextStyle() {
    _init_properties_DivText_kt__50pfx0();
    return DivTextStyle$delegate.getValue_1h979_k$(null, DivTextStyle$factory());
  }
  var DivTextStyle$delegate;
  function DivTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_DivText_kt__50pfx0();
    return Unit_getInstance();
  }
  function DivTextStyle$factory() {
    return getPropertyCallableRef('DivTextStyle', 0, KProperty0, function () {
      return get_DivTextStyle();
    }, null);
  }
  var properties_initialized_DivText_kt_3artse;
  function _init_properties_DivText_kt__50pfx0() {
    if (properties_initialized_DivText_kt_3artse) {
    } else {
      properties_initialized_DivText_kt_3artse = true;
      DivTextStyle$delegate = ComponentStyle_0(VOID, 'silk', DivTextStyle$delegate$lambda);
    }
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.getValue_1h979_k$(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  function get_TextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return TextStyle;
  }
  var TextStyle;
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_getInstance();
  }
  function SpanTextStyle$factory() {
    return getPropertyCallableRef('SpanTextStyle', 0, KProperty0, function () {
      return get_SpanTextStyle();
    }, null);
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (properties_initialized_SpanText_kt_kccny1) {
    } else {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle$delegate = ComponentStyle_0(VOID, 'silk', SpanTextStyle$delegate$lambda);
      TextStyle = get_SpanTextStyle();
    }
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function get_$stableprop_29() {
    return 8;
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.cache_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(CacheByPropertyNameDelegate).getValue_1h979_k$ = function (thisRef, property) {
    var name = property.callableName;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.cache_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(name);
    var tmp;
    if (value == null) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      tmp$ret$0 = this.create_b1vg3p_k$(name);
      var answer = tmp$ret$0;
      tmp0_getOrPut.put_3mhbri_k$(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$Entry$dismiss$lambda(this$0, this$1) {
    return function () {
      this$0.entries_1.remove_8hbkbr_k$(this$1);
      return Unit_getInstance();
    };
  }
  function _set_timeoutHandle__bya7pg($this, _set____db54di) {
    $this.timeoutHandle_1 = _set____db54di;
  }
  function _get_timeoutHandle__r61q7s($this) {
    return $this.timeoutHandle_1;
  }
  function _get_batchedCommands__4uvets($this) {
    return $this.batchedCommands_1;
  }
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function invokeLater($this, block) {
    $this.batchedCommands_1.add_1j60pz_k$(block);
    if ($this.timeoutHandle_1 === -1) {
      var tmp = $this;
      var tmp_0 = window;
      tmp.timeoutHandle_1 = tmp_0.setTimeout(DeferredComposablesState$invokeLater$lambda($this));
    }
  }
  function Entry($outer) {
    this.$this_1 = $outer;
    this.content_1 = null;
  }
  protoOf(Entry).set_content_wr7m87_k$ = function (_set____db54di) {
    illegalDecoyCallException('<set-content>');
  };
  protoOf(Entry).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(Entry).dismiss_54j4cn_k$ = function () {
    invokeLater(this.$this_1, DeferredComposablesState$Entry$dismiss$lambda(this.$this_1, this));
  };
  protoOf(Entry).$set_content$$composable_p0zfkv_k$ = function (set__$_ezb9bk) {
    this.content_1 = set__$_ezb9bk;
  };
  function DeferredComposablesState$invokeLater$lambda(this$0) {
    return function () {
      var tmp0_forEach = this$0.batchedCommands_1;
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.invokeLater.<anonymous>.<anonymous>' call
        element();
      }
      this$0.batchedCommands_1.clear_j9y8zo_k$();
      this$0.timeoutHandle_1 = -1;
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState$append$lambda(this$0, $tmp0_also) {
    return function () {
      this$0.entries_1.add_1j60qe_k$($tmp0_also);
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState$forEach$composable$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.forEach$composable_s16my3_k$($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function DeferredComposablesState() {
    this.timeoutHandle_1 = -1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.batchedCommands_1 = tmp$ret$0;
    this.entries_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).append_nc4352_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Entry(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.append.<anonymous>' call
    invokeLater(this, DeferredComposablesState$append$lambda(this, tmp0_also));
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  protoOf(DeferredComposablesState).forEach_ef9qa1_k$ = function (render) {
    illegalDecoyCallException('forEach');
  };
  protoOf(DeferredComposablesState).forEach$composable_s16my3_k$ = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2016651302);
    sourceInformation($composer_0, 'C(forEach$composable)');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(2016651302, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.entries_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(DeferredComposablesState$forEach$composable$lambda(tmp0_rcvr, render, $changed));
    }
  };
  function renderWithDeferred$composable(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2081108668);
    sourceInformation($composer_0, 'C(renderWithDeferred$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2081108668, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = [get_LocalDeferred().provides_3e53yf_k$(state)];
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$composable$lambda(content, $dirty, state));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_10().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      CompositionLocalProvider$composable(tmp, tmp$ret$6, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(renderWithDeferred$composable$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:79)');
    }
    var tmp0_safe_receiver = entry.content_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred$composable(tmp0_safe_receiver, $composer_0, 0);
      tmp$ret$0 = Unit_getInstance();
      tmp = Unit_getInstance();
    }
    var tmp0_group = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  protoOf(ComposableSingletons$DeferredKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    throw IllegalStateException_init_$Create$('Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.');
  }
  function renderWithDeferred$composable$lambda($content, $$dirty, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous> (Deferred.kt:77)');
        }
        $content($composer_0, 14 & $$dirty);
        $state.forEach$composable_s16my3_k$(ComposableSingletons$DeferredKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 70);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function renderWithDeferred$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (properties_initialized_Deferred_kt_1ab2bj) {
    } else {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function get_$stableprop_30() {
    return 8;
  }
  function InitSilkContext(config, stylesheet, theme) {
    this.config_1 = config;
    this.stylesheet_1 = stylesheet;
    this.theme_1 = theme;
    this.$stable_1 = 8;
  }
  protoOf(InitSilkContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(InitSilkContext).get_stylesheet_hk204p_k$ = function () {
    return this.stylesheet_1;
  };
  protoOf(InitSilkContext).get_theme_iz24rk_k$ = function () {
    return this.theme_1;
  };
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    var mutableTheme = new MutableSilkTheme();
    mutableTheme.registerComponentStyle_35os1s_k$(get_ButtonStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_CanvasStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisabledStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DividerStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DivTextStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_ImageStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_FitWidthImageVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_LinkStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_UncoloredLinkVariant(), get_UndecoratedLinkVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_OverlayStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_PopupStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SimpleGridStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SmoothColorStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SurfaceStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_AnimatedColorSurfaceVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_SpanTextStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SwitchStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SwitchTrackStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_SwitchThumbStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsTabRowStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsTabStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TabsPanelStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TocStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_TocBorderedVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_TooltipArrowStyle());
    mutableTheme.registerComponentVariants_h9g5mj_k$([get_TopLeftTooltipArrowVariant(), get_TopTooltipArrowVariant(), get_TopRightTooltipArrowVariant(), get_LeftTopTooltipArrowVariant(), get_LeftTooltipArrowVariant(), get_LeftBottomTooltipArrowVariant(), get_RightTopTooltipArrowVariant(), get_RightTooltipArrowVariant(), get_RightBottomTooltipArrowVariant(), get_BottomLeftTooltipArrowVariant(), get_BottomTooltipArrowVariant(), get_BottomRightTooltipArrowVariant()]);
    mutableTheme.registerComponentStyle_35os1s_k$(get_TooltipStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_TooltipTextContainerStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayIfAtLeastZeroStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayIfAtLeastSmStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayIfAtLeastMdStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayIfAtLeastLgStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayIfAtLeastXlStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayUntilZeroStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayUntilSmStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayUntilMdStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayUntilLgStyle());
    mutableTheme.registerComponentStyle_35os1s_k$(get_DisplayUntilXlStyle());
    var config = new MutableSilkConfig();
    additionalInit(new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme));
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().registerStylesAndKeyframesInto_g56hik_k$(SilkStyleSheet_getInstance());
    get_SilkTheme().registerStyles_5grm4a_k$(SilkStyleSheet_getInstance());
  }
  function setSilkVariables$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2044236650);
    sourceInformation($composer_0, 'C(setSilkVariables$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2044236650, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkVariables$composable (InitSilk.kt:170)');
      }
      var colorMode$delegate = rememberColorMode$composable($composer_0, 0);
      var palette = toSilkPalette(setSilkVariables$composable$lambda(colorMode$delegate));
      setVariable(_this__u8e3s4, get_BackgroundColorVar(), palette.get_background_stpfw7_k$());
      setVariable(_this__u8e3s4, get_ColorVar(), palette.get_color_ipu8u2_k$());
      setVariable(_this__u8e3s4, get_BorderColorVar(), palette.get_border_bj7585_k$());
      setVariable(_this__u8e3s4, get_ButtonBackgroundDefaultColorVar(), palette.get_button_bmjiuz_k$().get_default_qtagd4_k$());
      setVariable(_this__u8e3s4, get_ButtonBackgroundFocusColorVar(), palette.get_button_bmjiuz_k$().get_focus_irhg33_k$());
      setVariable(_this__u8e3s4, get_ButtonBackgroundHoverColorVar(), palette.get_button_bmjiuz_k$().get_hover_islez7_k$());
      setVariable(_this__u8e3s4, get_ButtonBackgroundPressedColorVar(), palette.get_button_bmjiuz_k$().get_pressed_3zxk93_k$());
      setVariable(_this__u8e3s4, get_ButtonColorVar(), palette.get_color_ipu8u2_k$());
      setVariable(_this__u8e3s4, get_DividerColorVar(), palette.get_border_bj7585_k$());
      setVariable(_this__u8e3s4, get_LinkDefaultColorVar(), palette.get_link_wopumb_k$().get_default_qtagd4_k$());
      setVariable(_this__u8e3s4, get_LinkVisitedColorVar(), palette.get_link_wopumb_k$().get_visited_8zg8qp_k$());
      setVariable(_this__u8e3s4, get_OverlayBackgroundColorVar(), palette.get_overlay_gs655l_k$());
      setVariable(_this__u8e3s4, get_SurfaceBackgroundColorVar(), palette.get_background_stpfw7_k$());
      setVariable(_this__u8e3s4, get_SurfaceColorVar(), palette.get_color_ipu8u2_k$());
      setVariable(_this__u8e3s4, get_SwitchThumbColorVar(), palette.get_switch_jp7nlp_k$().get_thumb_iz2gml_k$());
      setVariable(_this__u8e3s4, get_TabColorVar(), palette.get_tab_18ivo4_k$().get_color_ipu8u2_k$());
      setVariable(_this__u8e3s4, get_TabBackgroundColorVar(), palette.get_tab_18ivo4_k$().get_background_stpfw7_k$());
      setVariable(_this__u8e3s4, get_TabBorderColorVar(), palette.get_tab_18ivo4_k$().get_border_bj7585_k$());
      setVariable(_this__u8e3s4, get_TabDisabledBackgroundColorVar(), palette.get_tab_18ivo4_k$().get_disabled_rbmjej_k$());
      setVariable(_this__u8e3s4, get_TabHoverBackgroundColorVar(), palette.get_tab_18ivo4_k$().get_hover_islez7_k$());
      setVariable(_this__u8e3s4, get_TabPressedBackgroundColorVar(), palette.get_tab_18ivo4_k$().get_pressed_3zxk93_k$());
      setVariable(_this__u8e3s4, get_TocBorderColorVar(), palette.get_border_bj7585_k$());
      setVariable(_this__u8e3s4, get_TooltipBackgroundColorVar(), palette.get_tooltip_hl7una_k$().get_background_stpfw7_k$());
      setVariable(_this__u8e3s4, get_TooltipColorVar(), palette.get_tooltip_hl7una_k$().get_color_ipu8u2_k$());
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(setSilkVariables$composable$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function setSilkVariables$composable$lambda($colorMode$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('colorMode', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $colorMode$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function initSilk$lambda(it) {
    return Unit_getInstance();
  }
  function setSilkVariables$composable$lambda_0($this_setSilkVariables$composable, $$changed) {
    return function ($composer, $force) {
      setSilkVariables$composable($this_setSilkVariables$composable, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function get_$stableprop_31() {
    return 8;
  }
  function MutableSilkConfig() {
    this.initialColorMode_1 = ColorMode_LIGHT_getInstance();
    this.$stable_1 = 8;
  }
  protoOf(MutableSilkConfig).set_initialColorMode_n118as_k$ = function (_set____db54di) {
    this.initialColorMode_1 = _set____db54di;
  };
  protoOf(MutableSilkConfig).get_initialColorMode_i1z52t_k$ = function () {
    return this.initialColorMode_1;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_Instance_ljxvgi_k$ = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_17() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function SilkConfig() {
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (properties_initialized_SilkConfig_kt_bfwaef) {
    } else {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function SilkStylesheet$registerStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1471466098);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1471466098, $changed, -1, 'com.varabyte.kobweb.silk.init.SilkStylesheet.registerStyle.<anonymous> (SilkStylesheet.kt:65)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function SilkStylesheet() {
  }
  function _get_styles__6s6eeh($this) {
    return $this.styles_1;
  }
  function _get_keyframes__i12zvw($this) {
    return $this.keyframes_1;
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.styles_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.keyframes_1 = tmp$ret$1;
  }
  protoOf(SilkStylesheetInstance).registerStyle_vvdqu_k$ = function (cssSelector, extraModifiers, init) {
    illegalDecoyCallException('registerStyle');
  };
  protoOf(SilkStylesheetInstance).registerKeyframes_85283m_k$ = function (name, build) {
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.keyframes_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(name);
    tmp$ret$1 = tmp$ret$0;
    var tmp1_require = !tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      tmp$ret$2 = 'User is registering duplicate keyframe name: ' + name;
      var message = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.keyframes_1;
    tmp2_set.put_3mhbri_k$(name, build);
  };
  protoOf(SilkStylesheetInstance).registerStylesAndKeyframesInto_g56hik_k$ = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.styles_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.addStylesInto_y7xxx7_k$(siteStyleSheet, element.get_name_woqyms_k$());
    }
    var tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var tmp2_map = this.keyframes_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp1_mapTo = ArrayList_init_$Create$(tmp2_map.get_size_woubt6_k$());
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp2_map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = item.get_key_18j28a_k$();
      var name = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = item.get_value_j01efc_k$();
      var build = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(tmp0_apply);
      tmp$ret$3 = tmp0_apply;
      var lightBuilder = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(tmp1_apply);
      tmp$ret$4 = tmp1_apply;
      var darkBuilder = tmp$ret$4;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.addKeyframesIntoStylesheet_fg5iqc_k$(siteStyleSheet, name);
      } else {
        lightBuilder.addKeyframesIntoStylesheet_fg5iqc_k$(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.addKeyframesIntoStylesheet_fg5iqc_k$(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      tmp1_mapTo.add_1j60pz_k$(Unit_getInstance());
    }
    tmp$ret$5 = tmp1_mapTo;
    tmp$ret$6 = tmp$ret$5;
  };
  protoOf(SilkStylesheetInstance).registerStyle$composable_w181iq_k$ = function (cssSelector, extraModifiers, init) {
    this.styles_1.add_1j60pz_k$(new ComponentStyle(cssSelector, extraModifiers, null, init));
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  function get__SilkTheme() {
    return _SilkTheme;
  }
  var _SilkTheme;
  function _get_mutableSilkTheme__kqd2n1($this) {
    return $this.mutableSilkTheme_1;
  }
  function _get__componentStyles__eema7p($this) {
    return $this._componentStyles_1;
  }
  function get_$stableprop_32() {
    return 8;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.mutableSilkTheme_1 = mutableSilkTheme;
    this.palettes_1 = this.mutableSilkTheme_1.palettes_1;
    this.breakpoints_1 = this.mutableSilkTheme_1.breakpoints_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp._componentStyles_1 = tmp$ret$0;
    this.componentStyles_1 = this._componentStyles_1;
    this.$stable_1 = 8;
  }
  protoOf(ImmutableSilkTheme).get_palettes_f7ft27_k$ = function () {
    return this.palettes_1;
  };
  protoOf(ImmutableSilkTheme).get_palette_by3him_k$ = function () {
    illegalDecoyCallException('<get-palette>');
  };
  protoOf(ImmutableSilkTheme).get_breakpoints_k65pzb_k$ = function () {
    return this.breakpoints_1;
  };
  protoOf(ImmutableSilkTheme).get_componentStyles_qanhau_k$ = function () {
    return this.componentStyles_1;
  };
  protoOf(ImmutableSilkTheme).registerStyles_5grm4a_k$ = function (componentStyleSheet) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !(_SilkTheme == null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.mutableSilkTheme_1.componentStyles_1.get_values_ksazhn_k$();
    var tmp0_iterator = tmp1_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      element.addStylesInto_duevp8_k$(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this._componentStyles_1;
      var tmp1_set = element.get_name_woqyms_k$();
      var tmp2_set = element.intoImmutableStyle_rq28y7_k$();
      tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp3_filterIsInstance = this.mutableSilkTheme_1.componentVariants_1.get_values_ksazhn_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp2_filterIsInstanceTo = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp3_filterIsInstance.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      if (element_0 instanceof SimpleComponentVariant) {
        tmp2_filterIsInstanceTo.add_1j60pz_k$(element_0);
      }
    }
    tmp$ret$1 = tmp2_filterIsInstanceTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp4_forEach = tmp$ret$2;
    var tmp0_iterator_1 = tmp4_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      element_1.addStylesInto_duevp8_k$(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set_0 = this._componentStyles_1;
      var tmp1_set_0 = element_1.get_style_iyqetk_k$().get_name_woqyms_k$();
      var tmp2_set_0 = element_1.intoImmutableStyle_rq28y7_k$();
      tmp0_set_0.put_3mhbri_k$(tmp1_set_0, tmp2_set_0);
    }
  };
  protoOf(ImmutableSilkTheme).$get_palette$$composable_ggtdk7_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(593034641, $changed, -1, 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.$get-palette$$composable (SilkTheme.kt:343)');
    }
    var tmp0 = this.palettes_1.get_9eueec_k$(getColorMode$composable($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("You can't access SilkTheme before first calling SilkApp");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_$stableprop_33() {
    return 8;
  }
  function MutableSilkTheme$replaceComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1131711582);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1131711582, $changed, -1, 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle.<anonymous> (SilkTheme.kt:92)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme$replaceComponentVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(939054606);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(939054606, $changed, -1, 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentVariant.<anonymous> (SilkTheme.kt:145)');
        tmp = Unit_getInstance();
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function MutableSilkTheme() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.componentStyles_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0.overiddenStyles_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.componentVariants_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$3 = LinkedHashSet_init_$Create$();
    tmp_2.overiddenVariants_1 = tmp$ret$3;
    this.palettes_1 = new MutableSilkPalettes();
    this.breakpoints_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
    this.$stable_1 = 8;
  }
  protoOf(MutableSilkTheme).get_componentStyles_qanhau_k$ = function () {
    return this.componentStyles_1;
  };
  protoOf(MutableSilkTheme).get_overiddenStyles_9tjbu1_k$ = function () {
    return this.overiddenStyles_1;
  };
  protoOf(MutableSilkTheme).get_componentVariants_oc6iq_k$ = function () {
    return this.componentVariants_1;
  };
  protoOf(MutableSilkTheme).get_overiddenVariants_qyn9oj_k$ = function () {
    return this.overiddenVariants_1;
  };
  protoOf(MutableSilkTheme).set_palettes_lrppj5_k$ = function (_set____db54di) {
    this.palettes_1 = _set____db54di;
  };
  protoOf(MutableSilkTheme).get_palettes_f7ft27_k$ = function () {
    return this.palettes_1;
  };
  protoOf(MutableSilkTheme).set_breakpoints_7ftmxc_k$ = function (_set____db54di) {
    this.breakpoints_1 = _set____db54di;
  };
  protoOf(MutableSilkTheme).get_breakpoints_k65pzb_k$ = function () {
    return this.breakpoints_1;
  };
  protoOf(MutableSilkTheme).registerComponentStyle_35os1s_k$ = function (style) {
    // Inline function 'kotlin.check' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.componentStyles_1.get_1mhr4y_k$(style.get_name_woqyms_k$());
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    tmp$ret$0 = tmp0_let == null ? true : tmp0_let === style;
    tmp$ret$1 = tmp$ret$0;
    var tmp1_check = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      tmp$ret$2 = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.get_name_woqyms_k$() + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.componentStyles_1;
    var tmp3_set = style.get_name_woqyms_k$();
    tmp2_set.put_3mhbri_k$(tmp3_set, style);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp4_toTypedArray = style.get_variants_ik7l93_k$();
    tmp$ret$3 = copyToArray(tmp4_toTypedArray);
    this.registerComponentVariants_h9g5mj_k$(tmp$ret$3.slice());
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_cn49ye_k$ = function (style, extraModifiers, init) {
    this.replaceComponentStyle$composable_yvyojp_k$(style, MutableSilkTheme$replaceComponentStyle$lambda(extraModifiers), init);
  };
  protoOf(MutableSilkTheme).replaceComponentStyle$default_t6v9c5_k$ = function (style, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentStyle_cn49ye_k$(style, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentStyle_cn49ye_k$.call(this, style, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentStyle_x0hgr5_k$ = function (style, extraModifiers, init) {
    illegalDecoyCallException('replaceComponentStyle');
  };
  protoOf(MutableSilkTheme).registerComponentVariants_h9g5mj_k$ = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$_0();
    var indexedObject = variants;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$0 = tmp0_filterIsInstanceTo;
    tmp$ret$1 = tmp$ret$0;
    var tmp1_forEach = tmp$ret$1;
    var tmp0_iterator = tmp1_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.componentVariants_1.get_1mhr4y_k$(element_0.get_style_iyqetk_k$().get_name_woqyms_k$());
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      tmp$ret$2 = tmp0_let == null ? true : tmp0_let === element_0;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_check = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$4;
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        tmp$ret$4 = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.get_style_iyqetk_k$().get_name_woqyms_k$() + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        var message = tmp$ret$4;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var tmp2_set = this.componentVariants_1;
      var tmp3_set = element_0.get_style_iyqetk_k$().get_name_woqyms_k$();
      tmp2_set.put_3mhbri_k$(tmp3_set, element_0);
    }
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_5cbwuy_k$ = function (variant, extraModifiers, init) {
    this.replaceComponentVariant$composable_bp7kbn_k$(variant, MutableSilkTheme$replaceComponentVariant$lambda(extraModifiers), init);
  };
  protoOf(MutableSilkTheme).replaceComponentVariant$default_sqbhad_k$ = function (variant, extraModifiers, init, $super) {
    extraModifiers = extraModifiers === VOID ? Companion_getInstance() : extraModifiers;
    var tmp;
    if ($super === VOID) {
      this.replaceComponentVariant_5cbwuy_k$(variant, extraModifiers, init);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.replaceComponentVariant_5cbwuy_k$.call(this, variant, extraModifiers, init);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).replaceComponentVariant_743bzj_k$ = function (variant, extraModifiers, init) {
    illegalDecoyCallException('replaceComponentVariant');
  };
  protoOf(MutableSilkTheme).replaceComponentStyle$composable_yvyojp_k$ = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.componentStyles_1;
    var tmp1_contains = style.get_name_woqyms_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(tmp1_contains);
    tmp$ret$1 = tmp$ret$0;
    var tmp2_check = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      tmp$ret$2 = 'Attempting to replace a style that was never registered: "' + style.get_name_woqyms_k$() + '"';
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp3_check = this.overiddenStyles_1.add_1j60pz_k$(style.get_name_woqyms_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      tmp$ret$3 = 'Attempting to override style "' + style.get_name_woqyms_k$() + '" twice';
      var message_0 = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp4_set = this.componentStyles_1;
    var tmp5_set = style.get_name_woqyms_k$();
    var tmp6_set = new ComponentStyle(style.get_nameWithoutPrefix_lto6iu_k$(), extraModifiers, style.get_prefix_i78za3_k$(), init);
    tmp4_set.put_3mhbri_k$(tmp5_set, tmp6_set);
  };
  protoOf(MutableSilkTheme).replaceComponentVariant$composable_bp7kbn_k$ = function (variant, extraModifiers, init) {
    var tmp0_elvis_lhs = variant instanceof SimpleComponentVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('You can only replace variants created by `addVariant` or `addVariantBase`.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var variant_0 = tmp;
    // Inline function 'kotlin.check' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.componentVariants_1;
    var tmp1_contains = variant_0.get_style_iyqetk_k$().get_name_woqyms_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).containsKey_wgk31w_k$(tmp1_contains);
    tmp$ret$1 = tmp$ret$0;
    var tmp2_check = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentVariant$composable.<anonymous>' call
      tmp$ret$2 = 'Attempting to replace a variant that was never registered: "' + variant_0.get_style_iyqetk_k$().get_name_woqyms_k$() + '"';
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp3_check = this.overiddenVariants_1.add_1j60pz_k$(variant_0.get_style_iyqetk_k$().get_name_woqyms_k$());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentVariant$composable.<anonymous>' call
      tmp$ret$3 = 'Attempting to override variant "' + variant_0.get_style_iyqetk_k$().get_name_woqyms_k$() + '" twice';
      var message_0 = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var tmp4_set = this.componentVariants_1;
    var tmp5_set = variant_0.get_style_iyqetk_k$().get_name_woqyms_k$();
    var tmp6_set = variant_0.get_baseStyle_lpil3d_k$().addVariant$composable_l96oft_k$(variant_0.get_name_woqyms_k$(), extraModifiers, init);
    tmp4_set.put_3mhbri_k$(tmp5_set, tmp6_set);
  };
  function toSilkPalette(_this__u8e3s4) {
    return get_SilkTheme().palettes_1.get_9eueec_k$(_this__u8e3s4);
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_sm_kntnod_k$();
        break;
      case 2:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_md_kntnts_k$();
        break;
      case 3:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_lg_kntnuk_k$();
        break;
      case 4:
        tmp = get_SilkTheme().get_breakpoints_k65pzb_k$().get_xl_kntnk3_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_colorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = colorModeState$factory();
    tmp$ret$0 = colorModeState$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var colorModeState$delegate;
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = colorMode.get_name_woqyms_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    return _this__u8e3s4 + '_' + tmp$ret$1;
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function values_0() {
    return [ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LIGHT':
        return ColorMode_LIGHT_getInstance();
      case 'DARK':
        return ColorMode_DARK_getInstance();
      default:
        ColorMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_getInstance();
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).isLight_y52qz0_k$ = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).isDark_jivwhs_k$ = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).opposite_33uvbt_k$ = function () {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function getColorMode$composable($composer, $changed) {
    _init_properties_ColorMode_kt__lz79sc();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1734567091, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.getColorMode$composable (ColorMode.kt:61)');
    }
    var tmp0 = get_colorModeState().get_value_j01efc_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function rememberColorMode$composable($composer, $changed) {
    _init_properties_ColorMode_kt__lz79sc();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1269655540);
    sourceInformation($composer_0, 'C(rememberColorMode$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1269655540, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.rememberColorMode$composable (ColorMode.kt:57)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_0;
    var $composer_1 = tmp2_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_10().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.silk.theme.colors.rememberColorMode$composable.<anonymous>' call
      tmp$ret$0 = get_colorModeState();
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function colorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_getInstance_17().get_Instance_ljxvgi_k$().get_initialColorMode_i1z52t_k$());
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function colorModeState$factory() {
    return getPropertyCallableRef('colorModeState', 0, KProperty0, function () {
      return get_colorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (properties_initialized_ColorMode_kt_kbhp7u) {
    } else {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      colorModeState$delegate = lazy(colorModeState$delegate$lambda);
    }
  }
  function get_BackgroundColorVar() {
    _init_properties_SilkPalette_kt__sdvkxg();
    return BackgroundColorVar$delegate.getValue_1h979_k$(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_SilkPalette_kt__sdvkxg();
    return ColorVar$delegate.getValue_1h979_k$(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_SilkPalette_kt__sdvkxg();
    return BorderColorVar$delegate.getValue_1h979_k$(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_$stableprop_34() {
    return 8;
  }
  function MutableSilkPalettes(light, dark) {
    var tmp;
    if (light === VOID) {
      var tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'com.varabyte.kobweb.silk.theme.colors.MutableSilkPalettes.<init>.<anonymous>' call
      var buttonBase = Colors_getInstance().get_White_ij46ow_k$().darkened_3k65o0_k$(0.2);
      tmp$ret$0 = new MutableSilkPalette(Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_Black_i7mvue_k$(), new Button_0(buttonBase, buttonBase.darkened_3k65o0_k$(0.2), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), buttonBase.darkened_3k65o0_k$(0.4)), new Link_0(Colors_getInstance().get_Blue_wnz3k3_k$(), Colors_getInstance().get_Purple_33oyqt_k$()), new Switch_0(Colors_getInstance().get_DodgerBlue_w4tkwu_k$(), Colors_getInstance().get_LightGray_i1h2r4_k$()), new Tab_0(Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), Colors_getInstance().get_LightGray_i1h2r4_k$(), Colors_getInstance().get_WhiteSmoke_gvtxtb_k$(), Colors_getInstance().get_White_ij46ow_k$()));
      tmp$ret$0_0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$1_0 = Unit_getInstance();
      tmp = tmp$ret$1;
    } else {
      tmp = light;
    }
    light = tmp;
    var tmp_0;
    if (dark === VOID) {
      var tmp$ret$1_1;
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0_1;
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.silk.theme.colors.MutableSilkPalettes.<init>.<anonymous>' call
      var buttonBase_0 = lightened(Colors_getInstance().get_Black_i7mvue_k$(), 0.2);
      tmp$ret$0_1 = new MutableSilkPalette(Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_White_ij46ow_k$(), new Button_0(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), lightened(buttonBase_0, 0.4)), new Link_0(Colors_getInstance().get_Cyan_wnzzpo_k$(), Colors_getInstance().get_Violet_5rb5wo_k$()), new Switch_0(Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), Colors_getInstance().get_DarkGray_1y3y8u_k$()), new Tab_0(Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), Colors_getInstance().get_DarkSlateGray_s468al_k$(), Colors_getInstance().get_DarkGray_1y3y8u_k$(), Colors_getInstance().get_Black_i7mvue_k$()));
      tmp$ret$2 = Unit_getInstance();
      tmp$ret$1_1 = tmp$ret$0_1;
      tmp$ret$3 = Unit_getInstance();
      tmp_0 = tmp$ret$1_1;
    } else {
      tmp_0 = dark;
    }
    dark = tmp_0;
    this.light_1 = light;
    this.dark_1 = dark;
    this.$stable_1 = 8;
  }
  protoOf(MutableSilkPalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(MutableSilkPalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  function Button() {
  }
  function Link() {
  }
  function Switch() {
  }
  function Tab() {
  }
  function Tooltip() {
  }
  function SilkPalette() {
  }
  function SilkPalettes() {
  }
  function get_$stableprop_35() {
    return 8;
  }
  function get_$stableprop_36() {
    return 8;
  }
  function get_$stableprop_37() {
    return 8;
  }
  function get_$stableprop_38() {
    return 8;
  }
  function get_$stableprop_39() {
    return 8;
  }
  function Link_0(default_0, visited) {
    this.default_1 = default_0;
    this.visited_1 = visited;
    this.$stable_1 = 8;
  }
  protoOf(Link_0).set_default_uv4i87_k$ = function (_set____db54di) {
    this.default_1 = _set____db54di;
  };
  protoOf(Link_0).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(Link_0).set_visited_xm6sbm_k$ = function (_set____db54di) {
    this.visited_1 = _set____db54di;
  };
  protoOf(Link_0).get_visited_8zg8qp_k$ = function () {
    return this.visited_1;
  };
  function Button_0(default_0, hover, focus, pressed) {
    this.default_1 = default_0;
    this.hover_1 = hover;
    this.focus_1 = focus;
    this.pressed_1 = pressed;
    this.$stable_1 = 8;
  }
  protoOf(Button_0).set_default_uv4i87_k$ = function (_set____db54di) {
    this.default_1 = _set____db54di;
  };
  protoOf(Button_0).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(Button_0).set_hover_5g49pw_k$ = function (_set____db54di) {
    this.hover_1 = _set____db54di;
  };
  protoOf(Button_0).get_hover_islez7_k$ = function () {
    return this.hover_1;
  };
  protoOf(Button_0).set_focus_v838b4_k$ = function (_set____db54di) {
    this.focus_1 = _set____db54di;
  };
  protoOf(Button_0).get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  protoOf(Button_0).set_pressed_a5ywgq_k$ = function (_set____db54di) {
    this.pressed_1 = _set____db54di;
  };
  protoOf(Button_0).get_pressed_3zxk93_k$ = function () {
    return this.pressed_1;
  };
  function Switch_0(backgroundOn, backgroundOff, thumb) {
    thumb = thumb === VOID ? Colors_getInstance().get_White_ij46ow_k$() : thumb;
    this.backgroundOn_1 = backgroundOn;
    this.backgroundOff_1 = backgroundOff;
    this.thumb_1 = thumb;
    this.$stable_1 = 8;
  }
  protoOf(Switch_0).set_backgroundOn_xdnmbl_k$ = function (_set____db54di) {
    this.backgroundOn_1 = _set____db54di;
  };
  protoOf(Switch_0).get_backgroundOn_11s1ze_k$ = function () {
    return this.backgroundOn_1;
  };
  protoOf(Switch_0).set_backgroundOff_5bjgd5_k$ = function (_set____db54di) {
    this.backgroundOff_1 = _set____db54di;
  };
  protoOf(Switch_0).get_backgroundOff_wj5pl4_k$ = function () {
    return this.backgroundOff_1;
  };
  protoOf(Switch_0).set_thumb_7aiwfm_k$ = function (_set____db54di) {
    this.thumb_1 = _set____db54di;
  };
  protoOf(Switch_0).get_thumb_iz2gml_k$ = function () {
    return this.thumb_1;
  };
  function Tab_0(color, background, selectedColor, hover, pressed, disabled, border, selectedBackground, selectedBorder) {
    border = border === VOID ? color.toRgb_1tsrpu_k$().copyf$default_1ypp37_k$(VOID, VOID, VOID, 0.2) : border;
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    this.color_1 = color;
    this.background_1 = background;
    this.selectedColor_1 = selectedColor;
    this.hover_1 = hover;
    this.pressed_1 = pressed;
    this.disabled_1 = disabled;
    this.border_1 = border;
    this.selectedBackground_1 = selectedBackground;
    this.selectedBorder_1 = selectedBorder;
    this.$stable_1 = 8;
  }
  protoOf(Tab_0).set_color_mffmcl_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(Tab_0).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(Tab_0).set_background_j61p34_k$ = function (_set____db54di) {
    this.background_1 = _set____db54di;
  };
  protoOf(Tab_0).get_background_stpfw7_k$ = function () {
    return this.background_1;
  };
  protoOf(Tab_0).set_selectedColor_imhz7k_k$ = function (_set____db54di) {
    this.selectedColor_1 = _set____db54di;
  };
  protoOf(Tab_0).get_selectedColor_mfz4gv_k$ = function () {
    return this.selectedColor_1;
  };
  protoOf(Tab_0).set_hover_5g49pw_k$ = function (_set____db54di) {
    this.hover_1 = _set____db54di;
  };
  protoOf(Tab_0).get_hover_islez7_k$ = function () {
    return this.hover_1;
  };
  protoOf(Tab_0).set_pressed_a5ywgq_k$ = function (_set____db54di) {
    this.pressed_1 = _set____db54di;
  };
  protoOf(Tab_0).get_pressed_3zxk93_k$ = function () {
    return this.pressed_1;
  };
  protoOf(Tab_0).set_disabled_p20ng2_k$ = function (_set____db54di) {
    this.disabled_1 = _set____db54di;
  };
  protoOf(Tab_0).get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  protoOf(Tab_0).set_border_o4czsu_k$ = function (_set____db54di) {
    this.border_1 = _set____db54di;
  };
  protoOf(Tab_0).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(Tab_0).set_selectedBackground_z4mad7_k$ = function (_set____db54di) {
    this.selectedBackground_1 = _set____db54di;
  };
  protoOf(Tab_0).get_selectedBackground_7y8aq6_k$ = function () {
    return this.selectedBackground_1;
  };
  protoOf(Tab_0).set_selectedBorder_i89kl5_k$ = function (_set____db54di) {
    this.selectedBorder_1 = _set____db54di;
  };
  protoOf(Tab_0).get_selectedBorder_f0tq34_k$ = function () {
    return this.selectedBorder_1;
  };
  function Tooltip_0(background, color) {
    this.background_1 = background;
    this.color_1 = color;
    this.$stable_1 = 8;
  }
  protoOf(Tooltip_0).set_background_j61p34_k$ = function (_set____db54di) {
    this.background_1 = _set____db54di;
  };
  protoOf(Tooltip_0).get_background_stpfw7_k$ = function () {
    return this.background_1;
  };
  protoOf(Tooltip_0).set_color_mffmcl_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(Tooltip_0).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  function get_$stableprop_40() {
    return 8;
  }
  function MutableSilkPalette(background, color, button, link, switch_0, tab, border, overlay, tooltip) {
    border = border === VOID ? color : border;
    overlay = overlay === VOID ? color.toRgb_1tsrpu_k$().copyf$default_1ypp37_k$(VOID, VOID, VOID, 0.5) : overlay;
    tooltip = tooltip === VOID ? new Tooltip_0(color, background) : tooltip;
    this.background_1 = background;
    this.color_1 = color;
    this.button_1 = button;
    this.link_1 = link;
    this.switch_1 = switch_0;
    this.tab_1 = tab;
    this.border_1 = border;
    this.overlay_1 = overlay;
    this.tooltip_1 = tooltip;
    this.$stable_1 = 8;
  }
  protoOf(MutableSilkPalette).set_background_j61p34_k$ = function (_set____db54di) {
    this.background_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_background_stpfw7_k$ = function () {
    return this.background_1;
  };
  protoOf(MutableSilkPalette).set_color_mffmcl_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(MutableSilkPalette).set_button_lhdt7u_k$ = function (_set____db54di) {
    this.button_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  protoOf(MutableSilkPalette).set_link_i0j846_k$ = function (_set____db54di) {
    this.link_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  protoOf(MutableSilkPalette).set_switch_x5y4q2_k$ = function (_set____db54di) {
    this.switch_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_switch_jp7nlp_k$ = function () {
    return this.switch_1;
  };
  protoOf(MutableSilkPalette).set_tab_9y61p8_k$ = function (_set____db54di) {
    this.tab_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_tab_18ivo4_k$ = function () {
    return this.tab_1;
  };
  protoOf(MutableSilkPalette).set_border_o4czsu_k$ = function (_set____db54di) {
    this.border_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  protoOf(MutableSilkPalette).set_overlay_7qfc7c_k$ = function (_set____db54di) {
    this.overlay_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_overlay_gs655l_k$ = function () {
    return this.overlay_1;
  };
  protoOf(MutableSilkPalette).set_tooltip_gwl0e8_k$ = function (_set____db54di) {
    this.tooltip_1 = _set____db54di;
  };
  protoOf(MutableSilkPalette).get_tooltip_hl7una_k$ = function () {
    return this.tooltip_1;
  };
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  var properties_initialized_SilkPalette_kt_orb016;
  function _init_properties_SilkPalette_kt__sdvkxg() {
    if (properties_initialized_SilkPalette_kt_orb016) {
    } else {
      properties_initialized_SilkPalette_kt_orb016 = true;
      BackgroundColorVar$delegate = StyleVariable(VOID, 'silk');
      ColorVar$delegate = StyleVariable(VOID, 'silk');
      BorderColorVar$delegate = StyleVariable(VOID, 'silk');
    }
  }
  //region block: post-declaration
  protoOf(SilkStyleSheet).style_4edtvi_k$ = style;
  protoOf(SilkStyleSheet).style_5otx79_k$ = style_0;
  protoOf(SilkStyleSheet).style_68ppe6_k$ = style_1;
  protoOf(SilkStyleSheet).invoke_qvgdhg_k$ = invoke;
  protoOf(SilkStyleSheet).invoke_wa7zhx_k$ = invoke_0;
  protoOf(SilkStyleSheet).selector_vsua3m_k$ = selector;
  protoOf(SilkStyleSheet).combine_75bnet_k$ = combine;
  protoOf(SilkStyleSheet).plus_nlz2mk_k$ = plus;
  protoOf(SilkStyleSheet).plus_85zybx_k$ = plus_0;
  protoOf(SilkStyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(SilkStyleSheet).get_universal_1qp21u_k$ = get_universal;
  protoOf(SilkStyleSheet).type_gwc96h_k$ = type;
  protoOf(SilkStyleSheet).className_ykinvi_k$ = className;
  protoOf(SilkStyleSheet).id_xxyy5i_k$ = id;
  protoOf(SilkStyleSheet).attr_8c4xcm_k$ = attr;
  protoOf(SilkStyleSheet).attr$default_c3gqj1_k$ = attr$default;
  protoOf(SilkStyleSheet).attrEquals_ekinah_k$ = attrEquals;
  protoOf(SilkStyleSheet).attrEquals$default_c35y0d_k$ = attrEquals$default;
  protoOf(SilkStyleSheet).attrListContains_xb78l5_k$ = attrListContains;
  protoOf(SilkStyleSheet).attrListContains$default_jl16d_k$ = attrListContains$default;
  protoOf(SilkStyleSheet).attrHyphened_1nnzy3_k$ = attrHyphened;
  protoOf(SilkStyleSheet).attrHyphened$default_xd53cx_k$ = attrHyphened$default;
  protoOf(SilkStyleSheet).attrPrefixed_ju2x2d_k$ = attrPrefixed;
  protoOf(SilkStyleSheet).attrPrefixed$default_yotulb_k$ = attrPrefixed$default;
  protoOf(SilkStyleSheet).attrSuffixed_gk0h2_k$ = attrSuffixed;
  protoOf(SilkStyleSheet).attrSuffixed$default_1ikkf6_k$ = attrSuffixed$default;
  protoOf(SilkStyleSheet).attrContains_2muovr_k$ = attrContains;
  protoOf(SilkStyleSheet).attrContains$default_fjr3w3_k$ = attrContains$default;
  protoOf(SilkStyleSheet).group_po2tbv_k$ = group;
  protoOf(SilkStyleSheet).descendant_x63x3d_k$ = descendant;
  protoOf(SilkStyleSheet).desc_ej3sir_k$ = desc;
  protoOf(SilkStyleSheet).desc_8daddi_k$ = desc_0;
  protoOf(SilkStyleSheet).desc_npizau_k$ = desc_1;
  protoOf(SilkStyleSheet).desc_w7b77z_k$ = desc_2;
  protoOf(SilkStyleSheet).child_4w4v4o_k$ = child;
  protoOf(SilkStyleSheet).sibling_tzh2by_k$ = sibling;
  protoOf(SilkStyleSheet).adjacent_gxbr7y_k$ = adjacent;
  protoOf(SilkStyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(SilkStyleSheet).hover_gby0bi_k$ = hover;
  protoOf(SilkStyleSheet).get_hover_islez7_k$ = get_hover;
  protoOf(SilkStyleSheet).get_anyLink_cofd2b_k$ = get_anyLink;
  protoOf(SilkStyleSheet).get_link_wopumb_k$ = get_link;
  protoOf(SilkStyleSheet).get_visited_8zg8qp_k$ = get_visited;
  protoOf(SilkStyleSheet).get_localLink_bf63s4_k$ = get_localLink;
  protoOf(SilkStyleSheet).get_target_juba8q_k$ = get_target;
  protoOf(SilkStyleSheet).get_targetWithin_2o3zvf_k$ = get_targetWithin;
  protoOf(SilkStyleSheet).get_scope_iyfcq3_k$ = get_scope;
  protoOf(SilkStyleSheet).get_active_avldsf_k$ = get_active;
  protoOf(SilkStyleSheet).get_focus_irhg33_k$ = get_focus;
  protoOf(SilkStyleSheet).get_focusVisible_5vnmwz_k$ = get_focusVisible;
  protoOf(SilkStyleSheet).get_playing_6wau9n_k$ = get_playing;
  protoOf(SilkStyleSheet).get_paused_hy6yif_k$ = get_paused;
  protoOf(SilkStyleSheet).get_autofill_801dad_k$ = get_autofill;
  protoOf(SilkStyleSheet).get_enabled_pcr8o8_k$ = get_enabled;
  protoOf(SilkStyleSheet).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(SilkStyleSheet).get_readOnly_ovku97_k$ = get_readOnly;
  protoOf(SilkStyleSheet).get_readWrite_a0tpds_k$ = get_readWrite;
  protoOf(SilkStyleSheet).get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  protoOf(SilkStyleSheet).get_default_qtagd4_k$ = get_default;
  protoOf(SilkStyleSheet).get_checked_djib3y_k$ = get_checked;
  protoOf(SilkStyleSheet).get_indeterminate_997h5e_k$ = get_indeterminate;
  protoOf(SilkStyleSheet).get_blank_ip8b3f_k$ = get_blank;
  protoOf(SilkStyleSheet).get_valid_j01e4z_k$ = get_valid;
  protoOf(SilkStyleSheet).get_invalid_xocxse_k$ = get_invalid;
  protoOf(SilkStyleSheet).get_inRange_x4kdv3_k$ = get_inRange;
  protoOf(SilkStyleSheet).get_outOfRange_z0zuv5_k$ = get_outOfRange;
  protoOf(SilkStyleSheet).get_required_wq3z3c_k$ = get_required;
  protoOf(SilkStyleSheet).get_optional_x3zcnr_k$ = get_optional;
  protoOf(SilkStyleSheet).get_userInvalid_tptv3x_k$ = get_userInvalid;
  protoOf(SilkStyleSheet).get_root_wott0r_k$ = get_root;
  protoOf(SilkStyleSheet).get_empty_iqwn50_k$ = get_empty;
  protoOf(SilkStyleSheet).get_first_irdx8n_k$ = get_first;
  protoOf(SilkStyleSheet).get_firstChild_n9lgdn_k$ = get_firstChild;
  protoOf(SilkStyleSheet).get_lastChild_tniydf_k$ = get_lastChild;
  protoOf(SilkStyleSheet).get_onlyChild_cxh5if_k$ = get_onlyChild;
  protoOf(SilkStyleSheet).get_firstOfType_5b9t60_k$ = get_firstOfType;
  protoOf(SilkStyleSheet).get_lastOfType_9s7uy8_k$ = get_lastOfType;
  protoOf(SilkStyleSheet).get_onlyOfType_jptu62_k$ = get_onlyOfType;
  protoOf(SilkStyleSheet).get_host_wonf8x_k$ = get_host;
  protoOf(SilkStyleSheet).host_93x8z6_k$ = host;
  protoOf(SilkStyleSheet).get_defined_qtfew0_k$ = get_defined;
  protoOf(SilkStyleSheet).get_left_woprgw_k$ = get_left;
  protoOf(SilkStyleSheet).get_right_ixz7xv_k$ = get_right;
  protoOf(SilkStyleSheet).lang_xkki7h_k$ = lang;
  protoOf(SilkStyleSheet).nthChild_tigwrk_k$ = nthChild;
  protoOf(SilkStyleSheet).nthLastChild_4qjl06_k$ = nthLastChild;
  protoOf(SilkStyleSheet).nthOfType_n46p53_k$ = nthOfType;
  protoOf(SilkStyleSheet).nthLastOfType_jex6dt_k$ = nthLastOfType;
  protoOf(SilkStyleSheet).not_di0wzr_k$ = not;
  protoOf(SilkStyleSheet).get_after_iol2gj_k$ = get_after;
  protoOf(SilkStyleSheet).get_before_bdhrwo_k$ = get_before;
  protoOf(SilkStyleSheet).get_cue_18j7sm_k$ = get_cue;
  protoOf(SilkStyleSheet).get_cueRegion_qinivy_k$ = get_cueRegion;
  protoOf(SilkStyleSheet).get_firstLetter_6qe5bn_k$ = get_firstLetter;
  protoOf(SilkStyleSheet).get_firstLine_apktuj_k$ = get_firstLine;
  protoOf(SilkStyleSheet).get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  protoOf(SilkStyleSheet).get_selection_jv4aal_k$ = get_selection;
  protoOf(SilkStyleSheet).slotted_iujblx_k$ = slotted;
  protoOf(SilkStylesheetInstance).registerStyle_1vlyq5_k$ = registerStyle;
  protoOf(SilkStylesheetInstance).registerStyle$default_qb72pu_k$ = registerStyle$default;
  protoOf(MutableSilkPalettes).get_9eueec_k$ = get;
  //endregion
  //region block: init
  MAX_COLUMN_COUNT = 5;
  _SilkTheme = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Surface$composable;
  _.$_$.b = get_SmoothColorStyle;
  _.$_$.c = toModifier$composable;
  _.$_$.d = renderWithDeferred$composable;
  _.$_$.e = initSilk;
  _.$_$.f = setSilkVariables$composable;
  _.$_$.g = SilkStyleSheet_getInstance;
  //endregion
  return _;
}));
