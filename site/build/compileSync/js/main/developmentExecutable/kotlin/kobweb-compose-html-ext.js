(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './html-html-core.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./html-html-core.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-compose-html-ext'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-compose-html-ext'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-compose-html-ext'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-compose-html-ext'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'kobweb-compose-html-ext'.");
    }
    root['kobweb-compose-html-ext'] = factory(typeof this['kobweb-compose-html-ext'] === 'undefined' ? {} : this['kobweb-compose-html-ext'], this['kotlin-kotlin-stdlib-js-ir'], this['html-html-core'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.c7;
  var objectCreate = kotlin_kotlin.$_$.a7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.x1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var equals = kotlin_kotlin.$_$.h6;
  var hashCode = kotlin_kotlin.$_$.n6;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var hidden = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var title = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var dir = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var draggable = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var contentEditable = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var inputMode = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var inputMode_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var onContextMenu = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var onDoubleClick = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var onMouseDown = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var onMouseUp = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var onMouseMove = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var onMouseOut = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var onMouseOver = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var onWheel = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var onDrag = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var onDrop = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var onDragStart = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var onDragEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var onDragOver = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var onDragEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var onDragLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var onCopy = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var onCut = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var onPaste = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var onFocus = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var onBlur = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var onTouchCancel = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var onTouchMove = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var onTouchEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var onTouchStart = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var onAnimationIteration = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var onAnimationStart = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var onScroll = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var addEventListener = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var addEventListener_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var classMeta = kotlin_kotlin.$_$.e6;
  var VOID = kotlin_kotlin.$_$.fa;
  var setMetadataFor = kotlin_kotlin.$_$.d7;
  var objectMeta = kotlin_kotlin.$_$.b7;
  var THROW_ISE = kotlin_kotlin.$_$.l9;
  var Enum = kotlin_kotlin.$_$.c9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n1;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.i8;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.d8;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.b7;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.b8;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.a7;
  var toString = kotlin_kotlin.$_$.f7;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.l6;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.m6;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.o6;
  var variable_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.n6;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.k6;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.j6;
  var invoke_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.i6;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.q6;
  var copyToArray = kotlin_kotlin.$_$.j3;
  var get_lastIndex = kotlin_kotlin.$_$.x3;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var interfaceMeta = kotlin_kotlin.$_$.p6;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var Annotation = kotlin_kotlin.$_$.z8;
  var split = kotlin_kotlin.$_$.m8;
  var Collection = kotlin_kotlin.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.s6;
  var checkCountOverflow = kotlin_kotlin.$_$.b3;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.m7;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.e7;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.n7;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.k7;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.l7;
  var charSequenceLength = kotlin_kotlin.$_$.d6;
  var joinToString = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.u9;
  var listOf = kotlin_kotlin.$_$.c4;
  var addAll = kotlin_kotlin.$_$.y2;
  var listOfNotNull = kotlin_kotlin.$_$.b4;
  var CSSVariable = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var removeSuffix = kotlin_kotlin.$_$.i8;
  var joinToString_0 = kotlin_kotlin.$_$.w3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d3;
  var charSequenceGet = kotlin_kotlin.$_$.c6;
  var isWhitespace = kotlin_kotlin.$_$.e8;
  var checkIndexOverflow = kotlin_kotlin.$_$.c3;
  var getOrNull = kotlin_kotlin.$_$.s3;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var toList = kotlin_kotlin.$_$.w4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var isObject = kotlin_kotlin.$_$.t6;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var json = kotlin_kotlin.$_$.v6;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Exception = kotlin_kotlin.$_$.e9;
  var decodeToString = kotlin_kotlin.$_$.w7;
  var isCharSequence = kotlin_kotlin.$_$.r6;
  var trim = kotlin_kotlin.$_$.x8;
  var isBlank = kotlin_kotlin.$_$.b8;
  var compareTo = kotlin_kotlin.$_$.f6;
  var repeat = kotlin_kotlin.$_$.j8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.a6;
  var CoroutineImpl = kotlin_kotlin.$_$.s5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.w1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p1;
  var intercepted = kotlin_kotlin.$_$.f5;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.r;
  var returnIfSuspended = kotlin_kotlin.$_$.d;
  var SuspendFunction1 = kotlin_kotlin.$_$.t5;
  var KProperty1 = kotlin_kotlin.$_$.s7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l6;
  var lazy = kotlin_kotlin.$_$.t9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var isUpperCase = kotlin_kotlin.$_$.d8;
  var isLowerCase = kotlin_kotlin.$_$.c8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.f8;
  var toString_0 = kotlin_kotlin.$_$.o1;
  var replace = kotlin_kotlin.$_$.k8;
  var last = kotlin_kotlin.$_$.g8;
  var Char = kotlin_kotlin.$_$.a9;
  var first = kotlin_kotlin.$_$.a8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsKeyword, 'JustifyItemsKeyword', classMeta, JustifyItems);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItemsKeyword);
  setMetadataFor(BaselineAlignment, 'BaselineAlignment', classMeta, JustifyItems);
  setMetadataFor(OverflowAlignment, 'OverflowAlignment', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfKeyword, 'JustifySelfKeyword', classMeta, JustifySelf);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelfKeyword);
  setMetadataFor(BaselineAlignment_0, 'BaselineAlignment', classMeta, JustifySelf);
  setMetadataFor(OverflowAlignment_0, 'OverflowAlignment', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(BaselineSet, 'BaselineSet', classMeta, Enum);
  setMetadataFor(OverflowStrategy, 'OverflowStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat);
  setMetadataFor(GridTrackBuilderHandle, 'GridTrackBuilderHandle', classMeta);
  setMetadataFor(GridTrackSizeEntry, 'GridTrackSizeEntry', interfaceMeta);
  setMetadataFor(Type, 'Type', classMeta, Enum);
  setMetadataFor(GridTrackSize, 'GridTrackSize', classMeta);
  setMetadataFor(TrackBreadth, 'TrackBreadth', classMeta, GridTrackSize, [GridTrackSize, GridTrackSizeEntry]);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackBreadth);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackBreadth);
  setMetadataFor(FlexBreadth, 'FlexBreadth', classMeta, TrackBreadth);
  setMetadataFor(InflexibleBreadth, 'InflexibleBreadth', classMeta, TrackBreadth);
  setMetadataFor(KeywordBreadth, 'KeywordBreadth', classMeta, InflexibleBreadth);
  setMetadataFor(FixedBreadth, 'FixedBreadth', classMeta, InflexibleBreadth);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridTrackSize, [GridTrackSize, GridTrackSizeEntry]);
  setMetadataFor(TrackRepeat, 'TrackRepeat', classMeta, Repeat);
  setMetadataFor(AutoRepeat, 'AutoRepeat', classMeta, Repeat);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(NamedGridTrackSize, 'NamedGridTrackSize', classMeta, VOID, [GridTrackSizeEntry]);
  setMetadataFor(GridDslMarker, 'GridDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ListStylePosition, 'ListStylePosition', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta, VOID, [CSSVariable]);
  setMetadataFor(StyleVariableProvider, 'StyleVariableProvider', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(CSSImage, 'CSSImage', classMeta);
  setMetadataFor(Keyword, 'Keyword', classMeta, CSSImage);
  setMetadataFor(Url, 'Url', classMeta, CSSImage);
  setMetadataFor(Gradient, 'Gradient', classMeta, CSSImage);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color);
  setMetadataFor(Stop, 'Stop', classMeta, Color);
  setMetadataFor(StopRange, 'StopRange', classMeta, Color);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta);
  setMetadataFor(Gradient_0, 'Gradient', interfaceMeta);
  setMetadataFor(CSSUrl, 'CSSUrl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, Exception);
  setMetadataFor(getBodyBytesAsync$slambda, 'getBodyBytesAsync$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($tryFetchCOROUTINE$0, '$tryFetchCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($getBodyBytesCOROUTINE$1, '$getBodyBytesCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, VOID, VOID, VOID, [3, 4]);
  setMetadataFor(AbortController_0, 'AbortController', classMeta);
  //endregion
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function get_$stableprop() {
    return 8;
  }
  function ComparableAttrsScope(wrapped) {
    this.wrapped_1 = wrapped;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.attributes_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    tmp_0.classes_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$2 = LinkedHashSet_init_$Create$();
    tmp_1.listeners_1 = tmp$ret$2;
    this.style_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(ComparableAttrsScope).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(ComparableAttrsScope).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(ComparableAttrsScope).get_listeners_bn2kiy_k$ = function () {
    return this.listeners_1;
  };
  protoOf(ComparableAttrsScope).set_style_ch8v2y_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(ComparableAttrsScope).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ComparableAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.attributes_1;
    tmp0_set.put_3mhbri_k$(attr, value);
    this.wrapped_1.attr_z3nk29_k$(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).classes_m2xsyo_k$ = function (classes) {
    this.classes_1.addAll_oxxjjk_k$(classes);
  };
  protoOf(ComparableAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    this.wrapped_1.prop_mo7bqj_k$(update, value);
  };
  protoOf(ComparableAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    this.listeners_1.add_1j60pz_k$(listener);
    this.wrapped_1.registerEventListener_wc34s5_k$(listener);
  };
  protoOf(ComparableAttrsScope).style_sa2yps_k$ = function (builder) {
    var tmp0_elvis_lhs = this.style_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.style_1 = style;
    this.wrapped_1.style_sa2yps_k$(builder);
  };
  protoOf(ComparableAttrsScope).ref_r9zm5w_k$ = function (effect) {
    this.wrapped_1.ref_6wvjf3_k$(effect);
  };
  protoOf(ComparableAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_r9zm5w_k$(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.attributes_1, this.attributes_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.classes_1, this.classes_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.listeners_1, this.listeners_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.style_1, this.style_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.attributes_1);
    result = imul(31, result) + hashCode(this.classes_1) | 0;
    result = imul(31, result) + hashCode(this.listeners_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).attr_z3nk29_k$ = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).classes_m2xsyo_k$ = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).prop_mo7bqj_k$ = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).registerEventListener_wc34s5_k$ = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).style_sa2yps_k$ = function (builder) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_r9zm5w_k$ = function (effect) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_6wvjf3_k$ = function (effect) {
    return this.ref_r9zm5w_k$(effect);
  };
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.property_lwhspk_k$('justify-items', justifyItems);
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function JustifyItemsKeyword(value) {
    JustifyItems.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifyItemsPosition(value) {
    JustifyItemsKeyword.call(this, value);
    this.$stable_3 = 0;
  }
  function BaselineAlignment(baselineSet) {
    JustifyItems.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment(strategy, position) {
    JustifyItems.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Normal_22avww_k$ = function () {
    return new JustifyItemsKeyword('normal');
  };
  protoOf(Companion).get_Stretch_2brthg_k$ = function () {
    return new JustifyItemsKeyword('stretch');
  };
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return new JustifyItemsPosition('end');
  };
  protoOf(Companion).get_FlexStart_cfavq8_k$ = function () {
    return new JustifyItemsPosition('flex-start');
  };
  protoOf(Companion).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifyItemsPosition('flex-end');
  };
  protoOf(Companion).get_SelfStart_di8gbx_k$ = function () {
    return new JustifyItemsPosition('self-start');
  };
  protoOf(Companion).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifyItemsPosition('self-end');
  };
  protoOf(Companion).get_Left_wo5bw0_k$ = function () {
    return new JustifyItemsPosition('left');
  };
  protoOf(Companion).get_Right_igdsyb_k$ = function () {
    return new JustifyItemsPosition('right');
  };
  protoOf(Companion).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment(null);
  };
  protoOf(Companion).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion).Safe_362a2d_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion).Unsafe_he27se_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion).get_Inherit_a1a9e6_k$ = function () {
    return new JustifyItemsKeyword('inherit');
  };
  protoOf(Companion).get_Initial_a0h2v9_k$ = function () {
    return new JustifyItemsKeyword('initial');
  };
  protoOf(Companion).get_Revert_3t1tzh_k$ = function () {
    return new JustifyItemsKeyword('revert');
  };
  protoOf(Companion).get_Unset_ii4mhs_k$ = function () {
    return new JustifyItemsKeyword('unset');
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function JustifyItems(value) {
    Companion_getInstance_2();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.value_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.property_lwhspk_k$('justify-self', justifySelf);
  }
  function get_$stableprop_5() {
    return 0;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function JustifySelfKeyword(value) {
    JustifySelf.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifySelfPosition(value) {
    JustifySelfKeyword.call(this, value);
    this.$stable_3 = 0;
  }
  function BaselineAlignment_0(baselineSet) {
    JustifySelf.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment_0(strategy, position) {
    JustifySelf.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Auto_wnyn88_k$ = function () {
    return new JustifySelfKeyword('auto');
  };
  protoOf(Companion_0).get_Normal_22avww_k$ = function () {
    return new JustifySelfKeyword('normal');
  };
  protoOf(Companion_0).get_Stretch_2brthg_k$ = function () {
    return new JustifySelfKeyword('stretch');
  };
  protoOf(Companion_0).get_Center_3arb0i_k$ = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).get_Start_ih4i6x_k$ = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).get_End_18ju7i_k$ = function () {
    return new JustifySelfPosition('end');
  };
  protoOf(Companion_0).get_SelfStart_di8gbx_k$ = function () {
    return new JustifySelfPosition('self-start');
  };
  protoOf(Companion_0).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifySelfPosition('self-end');
  };
  protoOf(Companion_0).get_FlexStart_cfavq8_k$ = function () {
    return new JustifySelfPosition('flex-start');
  };
  protoOf(Companion_0).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifySelfPosition('flex-end');
  };
  protoOf(Companion_0).get_Left_wo5bw0_k$ = function () {
    return new JustifySelfPosition('left');
  };
  protoOf(Companion_0).get_Right_igdsyb_k$ = function () {
    return new JustifySelfPosition('right');
  };
  protoOf(Companion_0).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment_0(null);
  };
  protoOf(Companion_0).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion_0).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion_0).Safe_8ikg8d_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion_0).Unsafe_23mdn8_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion_0).get_Inherit_a1a9e6_k$ = function () {
    return new JustifySelfKeyword('inherit');
  };
  protoOf(Companion_0).get_Initial_a0h2v9_k$ = function () {
    return new JustifySelfKeyword('initial');
  };
  protoOf(Companion_0).get_Revert_3t1tzh_k$ = function () {
    return new JustifySelfKeyword('revert');
  };
  protoOf(Companion_0).get_Unset_ii4mhs_k$ = function () {
    return new JustifySelfKeyword('unset');
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function JustifySelf(value) {
    Companion_getInstance_3();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.value_1;
  };
  var BaselineSet_FIRST_instance;
  var BaselineSet_LAST_instance;
  function values() {
    return [BaselineSet_FIRST_getInstance(), BaselineSet_LAST_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FIRST':
        return BaselineSet_FIRST_getInstance();
      case 'LAST':
        return BaselineSet_LAST_getInstance();
      default:
        BaselineSet_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BaselineSet_entriesInitialized;
  function BaselineSet_initEntries() {
    if (BaselineSet_entriesInitialized)
      return Unit_getInstance();
    BaselineSet_entriesInitialized = true;
    BaselineSet_FIRST_instance = new BaselineSet('FIRST', 0);
    BaselineSet_LAST_instance = new BaselineSet('LAST', 1);
  }
  function BaselineSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue(_this__u8e3s4) {
    var self_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toValue.<anonymous>' call
    if (!(self_0 == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.lowercase' call
      var tmp0_lowercase = self_0.get_name_woqyms_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_lowercase;
      tmp$ret$1 = tmp$ret$0.toLowerCase();
      tmp0_apply.append_ssq29y_k$(tmp$ret$1);
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.append_ssq29y_k$('baseline');
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  var OverflowStrategy_SAFE_instance;
  var OverflowStrategy_UNSAFE_instance;
  function values_0() {
    return [OverflowStrategy_SAFE_getInstance(), OverflowStrategy_UNSAFE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SAFE':
        return OverflowStrategy_SAFE_getInstance();
      case 'UNSAFE':
        return OverflowStrategy_UNSAFE_getInstance();
      default:
        OverflowStrategy_initEntries();
        THROW_ISE();
        break;
    }
  }
  var OverflowStrategy_entriesInitialized;
  function OverflowStrategy_initEntries() {
    if (OverflowStrategy_entriesInitialized)
      return Unit_getInstance();
    OverflowStrategy_entriesInitialized = true;
    OverflowStrategy_SAFE_instance = new OverflowStrategy('SAFE', 0);
    OverflowStrategy_UNSAFE_instance = new OverflowStrategy('UNSAFE', 1);
  }
  function OverflowStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue_0(_this__u8e3s4, position) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = _this__u8e3s4.get_name_woqyms_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    return tmp$ret$1 + ' ' + position;
  }
  function BaselineSet_FIRST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_FIRST_instance;
  }
  function BaselineSet_LAST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_LAST_instance;
  }
  function OverflowStrategy_SAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_SAFE_instance;
  }
  function OverflowStrategy_UNSAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_UNSAFE_instance;
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = lineStyle;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.property_ze5ozi_k$('border-style', tmp$ret$2);
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.property_lwhspk_k$('border-bottom', tmp$ret$0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.property_lwhspk_k$('border-top', tmp$ret$0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp2_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_BorderBox_q3yb4a_k$ = function () {
    return new BoxSizing('border-box');
  };
  protoOf(Companion_1).get_ContentBox_h63h2z_k$ = function () {
    return new BoxSizing('content-box');
  };
  protoOf(Companion_1).get_Inherit_a1a9e6_k$ = function () {
    return new BoxSizing('inherit');
  };
  protoOf(Companion_1).get_Initial_a0h2v9_k$ = function () {
    return new BoxSizing('initial');
  };
  protoOf(Companion_1).get_Revert_3t1tzh_k$ = function () {
    return new BoxSizing('revert');
  };
  protoOf(Companion_1).get_Unset_ii4mhs_k$ = function () {
    return new BoxSizing('unset');
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function BoxSizing(value) {
    Companion_getInstance_4();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BoxSizing).toString = function () {
    return this.value_1;
  };
  function boxShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.boxShadow.<anonymous>' call
    if (inset) {
      tmp0_apply.append_ssq29y_k$('inset');
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    }
    tmp0_apply.append_t8pm91_k$(offsetX);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    tmp0_apply.append_t8pm91_k$(offsetY);
    if (!(blurRadius == null)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(48));
      }
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(spreadRadius);
    }
    if (!(color == null)) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      tmp0_apply.append_t8pm91_k$(color);
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_ze5ozi_k$('box-shadow', value);
  }
  function get_$stableprop_11() {
    return 0;
  }
  function ComparableStyleScope() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.properties_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.variables_1 = tmp$ret$1;
    this.$stable_1 = 0;
  }
  protoOf(ComparableStyleScope).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(ComparableStyleScope).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(ComparableStyleScope).property_lwhspk_k$ = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.properties_1;
    var tmp1_set = toString(value);
    tmp0_set.put_3mhbri_k$(propertyName, tmp1_set);
  };
  protoOf(ComparableStyleScope).variable_3743rz_k$ = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.variables_1;
    var tmp1_set = toString(value);
    tmp0_set.put_3mhbri_k$(variableName, tmp1_set);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.properties_1, other.properties_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.variables_1, other.variables_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(31, result) + hashCode(this.variables_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.properties_1;
    tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = _this__u8e3s4.variables_1;
      tmp$ret$1 = !tmp1_isNotEmpty.isEmpty_y1axqb_k$();
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function _get_value__a43j40_2($this) {
    return $this.value_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).get_Auto_wnyn88_k$ = function () {
    return new Cursor('auto');
  };
  protoOf(Companion_2).get_Default_goqax4_k$ = function () {
    return new Cursor('default');
  };
  protoOf(Companion_2).get_None_wo6tgh_k$ = function () {
    return new Cursor('none');
  };
  protoOf(Companion_2).get_ContextMenu_v99p0b_k$ = function () {
    return new Cursor('context-menu');
  };
  protoOf(Companion_2).get_Help_wo2s2y_k$ = function () {
    return new Cursor('help');
  };
  protoOf(Companion_2).get_Pointer_m64vg4_k$ = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).get_Progress_nqna52_k$ = function () {
    return new Cursor('progress');
  };
  protoOf(Companion_2).get_Wait_woc9um_k$ = function () {
    return new Cursor('wait');
  };
  protoOf(Companion_2).get_Cell_wnzl57_k$ = function () {
    return new Cursor('cell');
  };
  protoOf(Companion_2).get_Crosshair_69627b_k$ = function () {
    return new Cursor('crosshair');
  };
  protoOf(Companion_2).get_Text_woag7q_k$ = function () {
    return new Cursor('text');
  };
  protoOf(Companion_2).get_VerticalText_6nu4a4_k$ = function () {
    return new Cursor('vertical-text');
  };
  protoOf(Companion_2).get_Alias_i73953_k$ = function () {
    return new Cursor('alias');
  };
  protoOf(Companion_2).get_Copy_wnzsny_k$ = function () {
    return new Cursor('copy');
  };
  protoOf(Companion_2).get_Move_wo66nu_k$ = function () {
    return new Cursor('move');
  };
  protoOf(Companion_2).get_NoDrop_21hmk9_k$ = function () {
    return new Cursor('no-drop');
  };
  protoOf(Companion_2).get_NotAllowed_mobp4y_k$ = function () {
    return new Cursor('not-allowed');
  };
  protoOf(Companion_2).get_Grab_wo2egl_k$ = function () {
    return new Cursor('grab');
  };
  protoOf(Companion_2).get_Grabbing_taamx7_k$ = function () {
    return new Cursor('grabbing');
  };
  protoOf(Companion_2).get_AllScroll_y9eih1_k$ = function () {
    return new Cursor('all-scroll');
  };
  protoOf(Companion_2).get_ColumnResize_w27e5_k$ = function () {
    return new Cursor('col-resize');
  };
  protoOf(Companion_2).get_RowResize_dbunq3_k$ = function () {
    return new Cursor('row-resize');
  };
  protoOf(Companion_2).get_NResize_kz2xjb_k$ = function () {
    return new Cursor('n-resize');
  };
  protoOf(Companion_2).get_NeResize_pdt3gs_k$ = function () {
    return new Cursor('ne-resize');
  };
  protoOf(Companion_2).get_EResize_b0fdlc_k$ = function () {
    return new Cursor('e-resize');
  };
  protoOf(Companion_2).get_SeResize_nbwu41_k$ = function () {
    return new Cursor('se-resize');
  };
  protoOf(Companion_2).get_SResize_im7kea_k$ = function () {
    return new Cursor('s-resize');
  };
  protoOf(Companion_2).get_SwResize_rrw3z5_k$ = function () {
    return new Cursor('sw-resize');
  };
  protoOf(Companion_2).get_WResize_uxqhha_k$ = function () {
    return new Cursor('w-resize');
  };
  protoOf(Companion_2).get_NwResize_ppzume_k$ = function () {
    return new Cursor('nw-resize');
  };
  protoOf(Companion_2).get_EwResize_kla901_k$ = function () {
    return new Cursor('ew-resize');
  };
  protoOf(Companion_2).get_NsResize_wzla9q_k$ = function () {
    return new Cursor('ns-resize');
  };
  protoOf(Companion_2).get_NeswResize_x625qw_k$ = function () {
    return new Cursor('nesw-resize');
  };
  protoOf(Companion_2).get_NwseResize_c95994_k$ = function () {
    return new Cursor('nwse-resize');
  };
  protoOf(Companion_2).get_ZoomIn_7qsf41_k$ = function () {
    return new Cursor('zoom-in');
  };
  protoOf(Companion_2).get_ZoomOut_qz4z8y_k$ = function () {
    return new Cursor('zoom-out');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function Cursor(value) {
    Companion_getInstance_5();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.value_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.property_lwhspk_k$('cursor', cursor);
  }
  function get_$stableprop_13() {
    return 0;
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
    this.$stable_2 = 0;
  }
  protoOf(GridTrackBuilder).repeat_roqod0_k$ = function (count, block) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var tmp1_toTypedArray = tmp$ret$0.tracks_1;
    tmp$ret$1 = copyToArray(tmp1_toTypedArray);
    var repeatTracks = tmp$ret$1;
    return this.size_53840m_k$(Companion_getInstance_6().repeat_k1dhef_k$(count, repeatTracks.slice()));
  };
  protoOf(GridTrackBuilder).repeat_ts27as_k$ = function (type, block) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var tmp1_toTypedArray = tmp$ret$0.tracks_1;
    tmp$ret$1 = copyToArray(tmp1_toTypedArray);
    var repeatTracks = tmp$ret$1;
    return this.size_53840m_k$(Companion_getInstance_6().repeat_euqprl_k$(type, repeatTracks.slice()));
  };
  function _get_tracks__k54r5v($this) {
    return $this.tracks_1;
  }
  function _get_trackIndex__f9wb18($this) {
    return $this.trackIndex_1;
  }
  function get_$stableprop_14() {
    return 8;
  }
  function GridTrackBuilderHandle(tracks, trackIndex) {
    trackIndex = trackIndex === VOID ? get_lastIndex(tracks) : trackIndex;
    this.tracks_1 = tracks;
    this.trackIndex_1 = trackIndex;
    this.$stable_1 = 8;
  }
  protoOf(GridTrackBuilderHandle).named_ixh048_k$ = function (startName, endNames) {
    var track = this.tracks_1.get_fkrdnv_k$(this.trackIndex_1);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(track instanceof GridTrackSize)) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.GridTrackBuilderHandle.named.<anonymous>' call
      tmp$ret$0 = 'Using `named` on an invalid receiver. Expected `GridTrackSize`, got `' + getKClassFromExpression(track).get_simpleName_r6f8py_k$() + '`';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.tracks_1.set_meu351_k$(this.trackIndex_1, named(track, startName, endNames));
  };
  protoOf(GridTrackBuilderHandle).named$default_89pdjv_k$ = function (startName, endNames, $super) {
    startName = startName === VOID ? null : startName;
    endNames = endNames === VOID ? null : endNames;
    var tmp;
    if ($super === VOID) {
      this.named_ixh048_k$(startName, endNames);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.named_ixh048_k$.call(this, startName, endNames);
    }
    return tmp;
  };
  function get_$stableprop_15() {
    return 8;
  }
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.tracks_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(GridTrackBuilderInRepeat).get_auto_woj2t4_k$ = function () {
    return Companion_getInstance_6().get_Auto_wnyn88_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_minContent_f65gog_k$ = function () {
    return Companion_getInstance_6().get_MinContent_hspenk_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_maxContent_ez72f2_k$ = function () {
    return Companion_getInstance_6().get_MaxContent_n32482_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFit_9f9csn_k$ = function () {
    return Type_AutoFit_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFill_80lsv9_k$ = function () {
    return Type_AutoFill_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_tracks_k3cuq9_k$ = function () {
    return this.tracks_1;
  };
  protoOf(GridTrackBuilderInRepeat).size_53840m_k$ = function (track) {
    this.tracks_1.add_1j60pz_k$(track);
    return new GridTrackBuilderHandle(this.tracks_1);
  };
  protoOf(GridTrackBuilderInRepeat).size_lj9gax_k$ = function (value) {
    return this.size_53840m_k$(Companion_getInstance_6().invoke_hkq2lq_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).size_f173z5_k$ = function (value) {
    return this.size_53840m_k$(Companion_getInstance_6().invoke_x6prq0_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).fitContent_73iiqm_k$ = function (value) {
    return this.size_53840m_k$(Companion_getInstance_6().fitContent_73iiqm_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_tkqky7_k$ = function (min, max) {
    return this.size_53840m_k$(Companion_getInstance_6().minmax_tkqky7_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_qgeih1_k$ = function (min, max) {
    return this.size_53840m_k$(Companion_getInstance_6().minmax_tkqky7_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_pcu46n_k$ = function (min, max) {
    return this.minmax_tkqky7_k$(min, Companion_getInstance_6().invoke_x6prq0_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_sfaglh_k$ = function (min, max) {
    return this.minmax_tkqky7_k$(min, Companion_getInstance_6().invoke_hkq2lq_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_v5cotk_k$ = function (min, max) {
    return this.minmax_qgeih1_k$(Companion_getInstance_6().invoke_hkq2lq_k$(min), max);
  };
  protoOf(GridTrackBuilderInRepeat).minmax_jirghq_k$ = function (min, max) {
    return this.minmax_qgeih1_k$(Companion_getInstance_6().invoke_hkq2lq_k$(min), Companion_getInstance_6().invoke_hkq2lq_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_mv66s8_k$ = function (min, max) {
    return this.minmax_qgeih1_k$(Companion_getInstance_6().invoke_hkq2lq_k$(min), Companion_getInstance_6().invoke_x6prq0_k$(max));
  };
  function GridTrackSizeEntry() {
  }
  function get_$stableprop_16() {
    return 0;
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
  function get_$stableprop_23() {
    return 0;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function _get_value__a43j40_3($this) {
    return $this.value_1;
  }
  var Type_AutoFill_instance;
  var Type_AutoFit_instance;
  function values_1() {
    return [Type_AutoFill_getInstance(), Type_AutoFit_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AutoFill':
        return Type_AutoFill_getInstance();
      case 'AutoFit':
        return Type_AutoFit_getInstance();
      default:
        Type_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_AutoFill_instance = new Type('AutoFill', 0, 'auto-fill');
    Type_AutoFit_instance = new Type('AutoFit', 1, 'auto-fit');
  }
  function Type(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Type).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_25() {
    return 0;
  }
  function Type_AutoFill_getInstance() {
    Type_initEntries();
    return Type_AutoFill_instance;
  }
  function Type_AutoFit_getInstance() {
    Type_initEntries();
    return Type_AutoFit_instance;
  }
  function _get_value__a43j40_4($this) {
    return $this.value_1;
  }
  function TrackBreadth(value) {
    GridTrackSize.call(this, value);
    this.$stable_2 = 0;
  }
  function FitContent(value) {
    TrackBreadth.call(this, 'fit-content(' + value + ')');
    this.$stable_3 = 0;
  }
  function MinMax(min, max) {
    TrackBreadth.call(this, 'minmax(' + min + ', ' + max + ')');
    this.min_1 = min;
    this.max_1 = max;
    this.$stable_3 = 0;
  }
  protoOf(MinMax).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(MinMax).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
  function FlexBreadth(value) {
    TrackBreadth.call(this, value);
    this.$stable_3 = 0;
  }
  function InflexibleBreadth(value) {
    TrackBreadth.call(this, value);
    this.$stable_3 = 0;
  }
  function KeywordBreadth(value) {
    InflexibleBreadth.call(this, value);
    this.$stable_4 = 0;
  }
  function FixedBreadth(value) {
    InflexibleBreadth.call(this, value);
    this.$stable_4 = 0;
  }
  function Repeat(value, entries) {
    GridTrackSize.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.entries_1 = entries;
    // Inline function 'kotlin.check' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.none' call
      var tmp0_none = this.entries_1;
      var indexedObject = tmp0_none;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.compose.css.Repeat.<anonymous>' call
        tmp$ret$0 = element instanceof Repeat;
        if (tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    var tmp1_check = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.Repeat.<anonymous>' call
      tmp$ret$2 = 'Repeat calls cannot nest other repeat calls';
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.$stable_2 = 0;
  }
  protoOf(Repeat).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function TrackRepeat(count, entries) {
    Repeat.call(this, count, entries);
    this.$stable_3 = 0;
  }
  function AutoRepeat(type, entries) {
    Repeat.call(this, type, entries);
    this.$stable_3 = 0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).get_Auto_wnyn88_k$ = function () {
    return new KeywordBreadth('auto');
  };
  protoOf(Companion_3).get_MinContent_hspenk_k$ = function () {
    return new KeywordBreadth('min-content');
  };
  protoOf(Companion_3).get_MaxContent_n32482_k$ = function () {
    return new KeywordBreadth('max-content');
  };
  protoOf(Companion_3).invoke_hkq2lq_k$ = function (value) {
    return new FixedBreadth(toString(value));
  };
  protoOf(Companion_3).invoke_x6prq0_k$ = function (value) {
    return new FlexBreadth(toString(value));
  };
  protoOf(Companion_3).minmax_tkqky7_k$ = function (min, max) {
    return new MinMax(min, max);
  };
  protoOf(Companion_3).fitContent_73iiqm_k$ = function (value) {
    return new FitContent(value);
  };
  protoOf(Companion_3).repeat_k1dhef_k$ = function (count, entries) {
    return new TrackRepeat(count, entries.slice());
  };
  protoOf(Companion_3).repeat_euqprl_k$ = function (type, entries) {
    return new AutoRepeat(type, entries.slice());
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_26() {
    return 0;
  }
  function GridTrackSize(value) {
    Companion_getInstance_6();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(GridTrackSize).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_27() {
    return 0;
  }
  function NamedGridTrackSize(size, startNames, endNames) {
    startNames = startNames === VOID ? null : startNames;
    endNames = endNames === VOID ? null : endNames;
    this.size_1 = size;
    this.startNames_1 = startNames;
    this.endNames_1 = endNames;
    this.$stable_1 = 0;
  }
  protoOf(NamedGridTrackSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(NamedGridTrackSize).get_startNames_okkgi7_k$ = function () {
    return this.startNames_1;
  };
  protoOf(NamedGridTrackSize).get_endNames_3j9qmi_k$ = function () {
    return this.endNames_1;
  };
  function named(_this__u8e3s4, startNames, endNames) {
    startNames = startNames === VOID ? null : startNames;
    endNames = endNames === VOID ? null : endNames;
    return new NamedGridTrackSize(_this__u8e3s4, startNames, endNames);
  }
  function GridDslMarker() {
  }
  protoOf(GridDslMarker).equals = function (other) {
    if (!(other instanceof GridDslMarker))
      return false;
    var tmp0_other_with_cast = other instanceof GridDslMarker ? other : THROW_CCE();
    return true;
  };
  protoOf(GridDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(GridDslMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.css.GridDslMarker()';
  };
  function toTrackListString(_this__u8e3s4) {
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var names = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>.<anonymous>' call
    validate(_this__u8e3s4);
    tmp$ret$1 = _this__u8e3s4;
    var entries = tmp$ret$1;
    var indexedObject = entries;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var entry = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_subject = entry;
      if (tmp1_subject instanceof NamedGridTrackSize) {
        if (!(entry.startNames_1 == null)) {
          names.addAll_oxxjjk_k$(split(entry.startNames_1, [' ']));
        }
        toTrackListString$_anonymous_$appendSize_l8qlsn(names, tmp0_apply, entry.size_1);
        if (!(entry.endNames_1 == null)) {
          names.addAll_oxxjjk_k$(split(entry.endNames_1, [' ']));
        }
      } else {
        if (tmp1_subject instanceof GridTrackSize) {
          toTrackListString$_anonymous_$appendSize_l8qlsn(names, tmp0_apply, entry);
        }
      }
    }
    toTrackListString$_anonymous_$appendNamesIfAny_3wuanx(names, tmp0_apply);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function validate(_this__u8e3s4) {
    var rawEntries = validate$foldOutNamed(_this__u8e3s4);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp;
      if (isInterface(rawEntries, Collection)) {
        tmp = rawEntries.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = rawEntries.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
        tmp$ret$1 = element instanceof AutoRepeat;
        if (tmp$ret$1) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    var autoRepeatCount = tmp$ret$0;
    if (autoRepeatCount === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.check' call
    var tmp0_check = autoRepeatCount <= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      tmp$ret$2 = 'Only one auto-repeat call is allowed per track list';
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = validate$foldOutRepeat(rawEntries);
    var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp0_subject = element_0;
      if (tmp0_subject instanceof TrackBreadth) {
        var tmp1_subject = element_0;
        if (tmp1_subject instanceof FixedBreadth) {
        } else {
          if (tmp1_subject instanceof FlexBreadth) {
            // Inline function 'kotlin.error' call
            throw IllegalStateException_init_$Create$('Cannot use flex values with auto-repeat');
          } else {
            if (tmp1_subject instanceof KeywordBreadth) {
              // Inline function 'kotlin.error' call
              throw IllegalStateException_init_$Create$('Cannot use keywords with auto-repeat');
            } else {
              if (tmp1_subject instanceof FitContent) {
                // Inline function 'kotlin.error' call
                throw IllegalStateException_init_$Create$('Cannot use fit-content with auto-repeat');
              } else {
                if (tmp1_subject instanceof MinMax) {
                  // Inline function 'kotlin.check' call
                  var tmp_0;
                  var tmp_1 = element_0.min_1;
                  if (tmp_1 instanceof FixedBreadth) {
                    tmp_0 = true;
                  } else {
                    var tmp_2 = element_0.max_1;
                    tmp_0 = tmp_2 instanceof FixedBreadth;
                  }
                  var tmp0_check_0 = tmp_0;
                  // Inline function 'kotlin.contracts.contract' call
                  if (!tmp0_check_0) {
                    var tmp$ret$3;
                    // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                    tmp$ret$3 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                    var message_0 = tmp$ret$3;
                    throw IllegalStateException_init_$Create$(toString(message_0));
                  }
                }
              }
            }
          }
        }
      } else {
        var tmp_3;
        if (tmp0_subject instanceof AutoRepeat) {
          tmp_3 = true;
        } else {
          tmp_3 = tmp0_subject instanceof TrackRepeat;
        }
        if (tmp_3) {
          // Inline function 'kotlin.error' call
          throw IllegalStateException_init_$Create$('Cannot nest repeat calls');
        }
      }
    }
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(tmp$ret$0.tracks_1));
  }
  function toTrackListString_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString(tmp$ret$0);
  }
  function grid(_this__u8e3s4, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$0.buildInto_4p4aiu_k$(_this__u8e3s4);
  }
  function get_$stableprop_28() {
    return 0;
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
    this.$stable_2 = 0;
  }
  protoOf(GridBuilder).auto_d25ild_k$ = function (block) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp.autoBuilder_1 = tmp$ret$0;
  };
  function get_$stableprop_29() {
    return 8;
  }
  function GridBuilderInAuto() {
    this.cols_1 = null;
    this.rows_1 = null;
    this.autoBuilder_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(GridBuilderInAuto).set_cols_o6y4dr_k$ = function (_set____db54di) {
    this.cols_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_cols_wok858_k$ = function () {
    return this.cols_1;
  };
  protoOf(GridBuilderInAuto).set_rows_9g5iev_k$ = function (_set____db54di) {
    this.rows_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_rows_wott7m_k$ = function () {
    return this.rows_1;
  };
  protoOf(GridBuilderInAuto).set_autoBuilder_jqzsk7_k$ = function (_set____db54di) {
    this.autoBuilder_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_autoBuilder_5aiikd_k$ = function () {
    return this.autoBuilder_1;
  };
  protoOf(GridBuilderInAuto).col_ok4zvf_k$ = function (value) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.col.<anonymous>' call
    tmp0_apply.size_lj9gax_k$(value);
    tmp$ret$0 = tmp0_apply;
    tmp.cols_1 = tmp$ret$0.tracks_1;
  };
  protoOf(GridBuilderInAuto).col_4dqgcv_k$ = function (value) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.col.<anonymous>' call
    tmp0_apply.size_f173z5_k$(value);
    tmp$ret$0 = tmp0_apply;
    tmp.cols_1 = tmp$ret$0.tracks_1;
  };
  protoOf(GridBuilderInAuto).row_k6ojpb_k$ = function (value) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.row.<anonymous>' call
    tmp0_apply.size_lj9gax_k$(value);
    tmp$ret$0 = tmp0_apply;
    tmp.rows_1 = tmp$ret$0.tracks_1;
  };
  protoOf(GridBuilderInAuto).row_dhw6h_k$ = function (value) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.row.<anonymous>' call
    tmp0_apply.size_f173z5_k$(value);
    tmp$ret$0 = tmp0_apply;
    tmp.rows_1 = tmp$ret$0.tracks_1;
  };
  protoOf(GridBuilderInAuto).cols_7660aa_k$ = function (block) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp.cols_1 = tmp$ret$0.tracks_1;
  };
  protoOf(GridBuilderInAuto).rows_hrwja0_k$ = function (block) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp.rows_1 = tmp$ret$0.tracks_1;
  };
  protoOf(GridBuilderInAuto).buildInto_4p4aiu_k$ = function (scope) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    var tmp0__get_Grid__7tebaj = Companion_getInstance();
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
    display(scope, tmp$ret$3);
    var tmp0_safe_receiver = this.cols_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
      tmp$ret$4 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.rows_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
      tmp$ret$5 = Unit_getInstance();
    }
    var tmp2_safe_receiver = this.autoBuilder_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.cols_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
        tmp$ret$6 = Unit_getInstance();
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.rows_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp$ret$7 = Unit_getInstance();
        tmp = Unit_getInstance();
      }
      tmp$ret$8 = tmp;
      tmp$ret$9 = tmp$ret$8;
    }
  };
  function toTrackListString$_anonymous_$appendWithLeadingSpace_6lsti4($this_buildString, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength($this_buildString) > 0;
    if (tmp$ret$0) {
      $this_buildString.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    }
    $this_buildString.append_t8pm91_k$(value);
  }
  function toTrackListString$_anonymous_$appendNamesIfAny_3wuanx(names, $this_buildString) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !names.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      toTrackListString$_anonymous_$appendWithLeadingSpace_6lsti4($this_buildString, joinToString(names, ' ', '[', ']'));
      names.clear_j9y8zo_k$();
    }
  }
  function toTrackListString$_anonymous_$appendSize_l8qlsn(names, $this_buildString, value) {
    toTrackListString$_anonymous_$appendNamesIfAny_3wuanx(names, $this_buildString);
    toTrackListString$_anonymous_$appendWithLeadingSpace_6lsti4($this_buildString, value);
  }
  function validate$foldOutNamed(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(_this__u8e3s4.length);
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.foldOutNamed.<anonymous>' call
      var tmp0_subject = item;
      var tmp;
      if (tmp0_subject instanceof NamedGridTrackSize) {
        tmp = item.size_1;
      } else {
        if (tmp0_subject instanceof Repeat) {
          tmp = item;
        } else {
          if (tmp0_subject instanceof TrackBreadth) {
            tmp = item;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp$ret$0 = tmp;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function validate$foldOutRepeat(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.foldOutRepeat.<anonymous>' call
      var tmp0_subject = element;
      var tmp;
      if (tmp0_subject instanceof Repeat) {
        tmp = validate$foldOutNamed(element.entries_1);
      } else {
        tmp = listOf(element);
      }
      tmp$ret$0 = tmp;
      var list = tmp$ret$0;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$1 = tmp0_flatMapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function _get_value__a43j40_5($this) {
    return $this.value_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).of_yqlxgq_k$ = function (text) {
    return new ListStyleType(wrapQuotesIfNecessary(text));
  };
  protoOf(Companion_4).get_ArabicIndic_7dczms_k$ = function () {
    return new ListStyleType('arabic-indic');
  };
  protoOf(Companion_4).get_Armenian_glp6oq_k$ = function () {
    return new ListStyleType('armenian');
  };
  protoOf(Companion_4).get_Bengali_p42yft_k$ = function () {
    return new ListStyleType('bengali');
  };
  protoOf(Companion_4).get_Cambodian_yjaltx_k$ = function () {
    return new ListStyleType('cambodian');
  };
  protoOf(Companion_4).get_Circle_38hx53_k$ = function () {
    return new ListStyleType('circle');
  };
  protoOf(Companion_4).get_CjkDecimal_eqj52u_k$ = function () {
    return new ListStyleType('cjk-decimal');
  };
  protoOf(Companion_4).get_CjkEarthlyBranch_kcpnsy_k$ = function () {
    return new ListStyleType('cjk-earthly-branch');
  };
  protoOf(Companion_4).get_CjkHeavenlyStem_v60yes_k$ = function () {
    return new ListStyleType('cjk-heavenly-stem');
  };
  protoOf(Companion_4).get_CjkIdeographic_325ofc_k$ = function () {
    return new ListStyleType('cjk-ideographic');
  };
  protoOf(Companion_4).get_Decimal_gq8r08_k$ = function () {
    return new ListStyleType('decimal');
  };
  protoOf(Companion_4).get_DecimalLeadingZero_5q6aue_k$ = function () {
    return new ListStyleType('decimal-leading-zero');
  };
  protoOf(Companion_4).get_Devanagari_fiqhev_k$ = function () {
    return new ListStyleType('devanagari');
  };
  protoOf(Companion_4).get_Disc_wo0b9a_k$ = function () {
    return new ListStyleType('disc');
  };
  protoOf(Companion_4).get_DisclosureClosed_juf1pa_k$ = function () {
    return new ListStyleType('disclosure-closed');
  };
  protoOf(Companion_4).get_DisclosureOpen_l759fk_k$ = function () {
    return new ListStyleType('disclosure-open');
  };
  protoOf(Companion_4).get_Georgian_4lk93_k$ = function () {
    return new ListStyleType('georgian');
  };
  protoOf(Companion_4).get_Gujarati_j012pe_k$ = function () {
    return new ListStyleType('gujarati');
  };
  protoOf(Companion_4).get_Gurumukhi_5jh3xm_k$ = function () {
    return new ListStyleType('gurumukhi');
  };
  protoOf(Companion_4).get_Hebrew_xqwd4_k$ = function () {
    return new ListStyleType('hebrew');
  };
  protoOf(Companion_4).get_Hiragana_hja76u_k$ = function () {
    return new ListStyleType('hiragana');
  };
  protoOf(Companion_4).get_HiraganaIroha_z3xrq1_k$ = function () {
    return new ListStyleType('hiragana-iroha');
  };
  protoOf(Companion_4).get_JapaneseFormal_srlfzd_k$ = function () {
    return new ListStyleType('japanese-formal');
  };
  protoOf(Companion_4).get_JapaneseInformal_8qufwu_k$ = function () {
    return new ListStyleType('japanese-informal');
  };
  protoOf(Companion_4).get_Kannada_d9ddmn_k$ = function () {
    return new ListStyleType('kannada');
  };
  protoOf(Companion_4).get_Katakana_cguuob_k$ = function () {
    return new ListStyleType('katakana');
  };
  protoOf(Companion_4).get_KatakanaIroha_xgvh3q_k$ = function () {
    return new ListStyleType('katakana-iroha');
  };
  protoOf(Companion_4).get_Khmer_iciq6s_k$ = function () {
    return new ListStyleType('khmer');
  };
  protoOf(Companion_4).get_KoreanHangulFormal_rvp4md_k$ = function () {
    return new ListStyleType('korean-hangul-formal');
  };
  protoOf(Companion_4).get_KoreanHanjaFormal_xdca1e_k$ = function () {
    return new ListStyleType('korean-hanja-formal');
  };
  protoOf(Companion_4).get_KoreanHanjaInformal_vycz4j_k$ = function () {
    return new ListStyleType('korean-hanja-informal');
  };
  protoOf(Companion_4).get_Lao_18jpbj_k$ = function () {
    return new ListStyleType('lao');
  };
  protoOf(Companion_4).get_LowerAlpha_wmhyme_k$ = function () {
    return new ListStyleType('lower-alpha');
  };
  protoOf(Companion_4).get_LowerArmenian_u6eqrt_k$ = function () {
    return new ListStyleType('lower-armenian');
  };
  protoOf(Companion_4).get_LowerGreek_wpwbvs_k$ = function () {
    return new ListStyleType('lower-greek');
  };
  protoOf(Companion_4).get_LowerLatin_wscrak_k$ = function () {
    return new ListStyleType('lower-latin');
  };
  protoOf(Companion_4).get_LowerRoman_wvwbad_k$ = function () {
    return new ListStyleType('lower-roman');
  };
  protoOf(Companion_4).get_Malayalam_4qmsf2_k$ = function () {
    return new ListStyleType('malayalam');
  };
  protoOf(Companion_4).get_Mongolian_e4gexh_k$ = function () {
    return new ListStyleType('mongolian');
  };
  protoOf(Companion_4).get_Myanmar_h909b8_k$ = function () {
    return new ListStyleType('myanmar');
  };
  protoOf(Companion_4).get_Oriya_iew7xh_k$ = function () {
    return new ListStyleType('oriya');
  };
  protoOf(Companion_4).get_Persian_hkpriv_k$ = function () {
    return new ListStyleType('persian');
  };
  protoOf(Companion_4).get_SimpChineseFormal_vtcj22_k$ = function () {
    return new ListStyleType('simp-chinese-formal');
  };
  protoOf(Companion_4).get_SimpChineseInformal_q999un_k$ = function () {
    return new ListStyleType('simp-chinese-informal');
  };
  protoOf(Companion_4).get_Square_4go9ja_k$ = function () {
    return new ListStyleType('square');
  };
  protoOf(Companion_4).get_Tamil_ihcepm_k$ = function () {
    return new ListStyleType('tamil');
  };
  protoOf(Companion_4).get_Telugu_4qz0i9_k$ = function () {
    return new ListStyleType('telugu');
  };
  protoOf(Companion_4).get_Thai_woahvp_k$ = function () {
    return new ListStyleType('thai');
  };
  protoOf(Companion_4).get_TradChineseFormal_7jy5gu_k$ = function () {
    return new ListStyleType('trad-chinese-formal');
  };
  protoOf(Companion_4).get_TradChineseInformal_j8y7ih_k$ = function () {
    return new ListStyleType('trad-chinese-informal');
  };
  protoOf(Companion_4).get_UpperAlpha_f6mwsb_k$ = function () {
    return new ListStyleType('upper-alpha');
  };
  protoOf(Companion_4).get_UpperArmenian_gf87di_k$ = function () {
    return new ListStyleType('upper-armenian');
  };
  protoOf(Companion_4).get_UpperGreek_f38jix_k$ = function () {
    return new ListStyleType('upper-greek');
  };
  protoOf(Companion_4).get_UpperLatin_f0s445_k$ = function () {
    return new ListStyleType('upper-latin');
  };
  protoOf(Companion_4).get_UpperRoman_ex8k4c_k$ = function () {
    return new ListStyleType('upper-roman');
  };
  protoOf(Companion_4).get_None_wo6tgh_k$ = function () {
    return new ListStyleType('none');
  };
  protoOf(Companion_4).get_Inherit_a1a9e6_k$ = function () {
    return new ListStyleType('inherit');
  };
  protoOf(Companion_4).get_Initial_a0h2v9_k$ = function () {
    return new ListStyleType('initial');
  };
  protoOf(Companion_4).get_Revert_3t1tzh_k$ = function () {
    return new ListStyleType('revert');
  };
  protoOf(Companion_4).get_Unset_ii4mhs_k$ = function () {
    return new ListStyleType('unset');
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_$stableprop_30() {
    return 0;
  }
  function ListStyleType(value) {
    Companion_getInstance_7();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ListStyleType).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_6($this) {
    return $this.value_1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_Inside_bggkb_k$ = function () {
    return new ListStylePosition('inside');
  };
  protoOf(Companion_5).get_Outside_ai50v0_k$ = function () {
    return new ListStylePosition('outside');
  };
  protoOf(Companion_5).get_Inherit_a1a9e6_k$ = function () {
    return new ListStylePosition('inherit');
  };
  protoOf(Companion_5).get_Initial_a0h2v9_k$ = function () {
    return new ListStylePosition('initial');
  };
  protoOf(Companion_5).get_Revert_3t1tzh_k$ = function () {
    return new ListStylePosition('revert');
  };
  protoOf(Companion_5).get_Unset_ii4mhs_k$ = function () {
    return new ListStylePosition('unset');
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_31() {
    return 0;
  }
  function ListStylePosition(value) {
    Companion_getInstance_8();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ListStylePosition).toString = function () {
    return this.value_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    var tmp0_safe_receiver = type;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_lwhspk_k$('list-style-type', tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = position;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_lwhspk_k$('list-style-position', tmp1_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    var tmp2_safe_receiver = image;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_lwhspk_k$('list-style-image', tmp2_safe_receiver);
      tmp$ret$2 = Unit_getInstance();
    }
  }
  function _get_value__a43j40_7($this) {
    return $this.value_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_Contain_qhyalx_k$ = function () {
    return new ObjectFit('contain');
  };
  protoOf(Companion_6).get_Cover_i8910u_k$ = function () {
    return new ObjectFit('cover');
  };
  protoOf(Companion_6).get_Fill_wo1l2k_k$ = function () {
    return new ObjectFit('fill');
  };
  protoOf(Companion_6).get_None_wo6tgh_k$ = function () {
    return new ObjectFit('none');
  };
  protoOf(Companion_6).get_ScaleDown_ala7ur_k$ = function () {
    return new ObjectFit('scale-down');
  };
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = function () {
    return new ObjectFit('inherit');
  };
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = function () {
    return new ObjectFit('initial');
  };
  protoOf(Companion_6).get_Revert_3t1tzh_k$ = function () {
    return new ObjectFit('revert');
  };
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = function () {
    return new ObjectFit('unset');
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function get_$stableprop_32() {
    return 0;
  }
  function ObjectFit(value) {
    Companion_getInstance_9();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.value_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.property_lwhspk_k$('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.property_lwhspk_k$('outline', tmp$ret$0);
  }
  function get_$stableprop_33() {
    return 8;
  }
  function CSSOutline() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(CSSOutline).set_width_63m8iw_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSOutline).set_style_eysa9r_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSOutline).set_color_ynz953_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.width_1, other.width_1) ? equals(this.style_1, other.style_1) : false) ? equals(this.color_1, other.color_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.color_1, this.style_1, this.width_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.width_1 = $width;
      $this$outline.style_1 = $style;
      $this$outline.color_1 = $color;
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_8($this) {
    return $this.value_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_Visible_yikvpz_k$ = function () {
    return new Overflow('visible');
  };
  protoOf(Companion_7).get_Hidden_viqel_k$ = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_7).get_Clip_wnzq9l_k$ = function () {
    return new Overflow('clip');
  };
  protoOf(Companion_7).get_Scroll_48xiie_k$ = function () {
    return new Overflow('scroll');
  };
  protoOf(Companion_7).get_Auto_wnyn88_k$ = function () {
    return new Overflow('auto');
  };
  protoOf(Companion_7).get_Inherit_a1a9e6_k$ = function () {
    return new Overflow('inherit');
  };
  protoOf(Companion_7).get_Initial_a0h2v9_k$ = function () {
    return new Overflow('initial');
  };
  protoOf(Companion_7).get_Revert_3t1tzh_k$ = function () {
    return new Overflow('revert');
  };
  protoOf(Companion_7).get_Unset_ii4mhs_k$ = function () {
    return new Overflow('unset');
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function get_$stableprop_34() {
    return 0;
  }
  function Overflow(value) {
    Companion_getInstance_10();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Overflow).toString = function () {
    return this.value_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.property_lwhspk_k$('overflow-y', overflowY);
  }
  function _get_defaultFallback__wdjuwe($this) {
    return $this.defaultFallback_1;
  }
  function get_$stableprop_35() {
    return 0;
  }
  function StyleVariable(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    this.defaultFallback_1 = defaultFallback;
    var tmp = this;
    var tmp0_safe_receiver = prefix;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp$ret$0 = '' + tmp0_safe_receiver + '-' + name;
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariable).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StyleVariable).value_nbkpaf_k$ = function (fallback) {
    var tmp$ret$8;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp0_elvis_lhs = fallback;
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? this.defaultFallback_1 : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.value.<anonymous>' call
      tmp$ret$0 = ', ' + tmp1_safe_receiver;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp1_CSSVariableValue = 'var(--' + this.name_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp$ret$4;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_CSSVariableValue;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_CSSVariableValue = tmp$ret$4;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp0_CSSVariableValue;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    return tmp$ret$8;
  };
  protoOf(StyleVariable).value$default_75jjyg_k$ = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.value_nbkpaf_k$(fallback) : $super.value_nbkpaf_k$.call(this, fallback);
  };
  function _get_defaultFallback__wdjuwe_0($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function get_$stableprop_36() {
    return 0;
  }
  function StyleVariableProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariableProvider).getValue_1h979_k$ = function (thisRef, property) {
    var name = removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable');
    return new StyleVariable(name, this.defaultFallback_1, this.prefix_1);
  };
  function StyleVariable_0(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.style.setProperty('--' + variable.name_1, toString(value));
  }
  function _get_value__a43j40_9($this) {
    return $this.value_1;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).get_None_wo6tgh_k$ = function () {
    return new UserSelect('none');
  };
  protoOf(Companion_8).get_Auto_wnyn88_k$ = function () {
    return new UserSelect('auto');
  };
  protoOf(Companion_8).get_Text_woag7q_k$ = function () {
    return new UserSelect('text');
  };
  protoOf(Companion_8).get_Contain_qhyalx_k$ = function () {
    return new UserSelect('contain');
  };
  protoOf(Companion_8).get_All_18jx7s_k$ = function () {
    return new UserSelect('all');
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    return new UserSelect('inherit');
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    return new UserSelect('initial');
  };
  protoOf(Companion_8).get_Revert_3t1tzh_k$ = function () {
    return new UserSelect('revert');
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    return new UserSelect('unset');
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function get_$stableprop_37() {
    return 0;
  }
  function UserSelect(value) {
    Companion_getInstance_11();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_10($this) {
    return $this.value_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_Left_wo5bw0_k$ = function () {
    return new TextAlign('left');
  };
  protoOf(Companion_9).get_Right_igdsyb_k$ = function () {
    return new TextAlign('right');
  };
  protoOf(Companion_9).get_Center_3arb0i_k$ = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_9).get_Justify_84qi6f_k$ = function () {
    return new TextAlign('justify');
  };
  protoOf(Companion_9).get_JustifyAll_vzjb16_k$ = function () {
    return new TextAlign('justify-all');
  };
  protoOf(Companion_9).get_Start_ih4i6x_k$ = function () {
    return new TextAlign('start');
  };
  protoOf(Companion_9).get_End_18ju7i_k$ = function () {
    return new TextAlign('end');
  };
  protoOf(Companion_9).get_MatchParent_4236be_k$ = function () {
    return new TextAlign('match-parent');
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_$stableprop_38() {
    return 0;
  }
  function TextAlign(value) {
    Companion_getInstance_12();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_11($this) {
    return $this.value_1;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Underline_oo7egz_k$ = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_10).get_Overline_lz0ci7_k$ = function () {
    return new TextDecorationLine('overline');
  };
  protoOf(Companion_10).get_LineThrough_pr9ajs_k$ = function () {
    return new TextDecorationLine('line-through');
  };
  protoOf(Companion_10).get_None_wo6tgh_k$ = function () {
    return new TextDecorationLine('none');
  };
  protoOf(Companion_10).get_Inherit_a1a9e6_k$ = function () {
    return new TextDecorationLine('inherit');
  };
  protoOf(Companion_10).get_Initial_a0h2v9_k$ = function () {
    return new TextDecorationLine('initial');
  };
  protoOf(Companion_10).get_Revert_3t1tzh_k$ = function () {
    return new TextDecorationLine('revert');
  };
  protoOf(Companion_10).get_Unset_ii4mhs_k$ = function () {
    return new TextDecorationLine('unset');
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_$stableprop_39() {
    return 0;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_13();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.value_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.property_lwhspk_k$('user-select', userSelect);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.property_lwhspk_k$('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.property_ze5ozi_k$('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.property_lwhspk_k$('translate', tx);
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).group_8mv6tz_k$ = function (properties, duration, timingFunction, delay) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  protoOf(Companion_11).group$default_tjw00v_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_8mv6tz_k$(properties, duration, timingFunction, delay) : $super.group_8mv6tz_k$.call(this, properties, duration, timingFunction, delay);
  };
  protoOf(Companion_11).group_xeysqd_k$ = function (properties, duration, timingFunction, delay) {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      tmp$ret$0 = new CSSTransition(item, duration, timingFunction, delay);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  protoOf(Companion_11).group$default_gmjvw9_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_xeysqd_k$(properties, duration, timingFunction, delay) : $super.group_xeysqd_k$.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_15().of_yqlxgq_k$(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function get_$stableprop_40() {
    return 0;
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_14();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.property_1 = property;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
    this.$stable_1 = 0;
  }
  protoOf(CSSTransition).get_property_msvula_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).toString = function () {
    var tmp$ret$6;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.buildListInternal' call
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    tmp0_apply.add_1j60pz_k$(this.property_1.toString());
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp$ret$0 = tmp0_apply.add_1j60pz_k$(toString(tmp0_safe_receiver));
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      tmp$ret$2 = tmp0_apply.add_1j60pz_k$(toString(tmp1_safe_receiver));
      tmp$ret$3 = tmp$ret$2;
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        tmp0_apply.add_1j60pz_k$('0s');
      }
      tmp0_apply.add_1j60pz_k$(toString(this.delay_1));
    }
    tmp$ret$4 = tmp0_apply;
    tmp$ret$5 = tmp$ret$4.build_1k0s4u_k$();
    tmp$ret$6 = tmp$ret$5;
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).component1_7eebsc_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).copy_irqi13_k$ = function (property, duration, timingFunction, delay) {
    return new CSSTransition(property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).copy$default_o0mzgy_k$ = function (property, duration, timingFunction, delay, $super) {
    property = property === VOID ? this.property_1 : property;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    return $super === VOID ? this.copy_irqi13_k$(property, duration, timingFunction, delay) : $super.copy_irqi13_k$.call(this, property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.property_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    return true;
  };
  function _get_value__a43j40_12($this) {
    return $this.value_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).of_yqlxgq_k$ = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(customValue) > 0;
    if (tmp$ret$0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var indexedObject = customValue;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$1;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          tmp$ret$1 = isWhitespace(element);
          if (tmp$ret$1) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$3;
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      tmp$ret$3 = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      var message = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new TransitionProperty(customValue);
  };
  protoOf(Companion_12).get_None_wo6tgh_k$ = function () {
    return new TransitionProperty('none');
  };
  protoOf(Companion_12).get_All_18jx7s_k$ = function () {
    return new TransitionProperty('all');
  };
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = function () {
    return new TransitionProperty('inherit');
  };
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = function () {
    return new TransitionProperty('initial');
  };
  protoOf(Companion_12).get_Revert_3t1tzh_k$ = function () {
    return new TransitionProperty('revert');
  };
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = function () {
    return new TransitionProperty('unset');
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function get_$stableprop_41() {
    return 0;
  }
  function TransitionProperty(value) {
    Companion_getInstance_15();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.value_1;
  };
  function transition(_this__u8e3s4, transitions) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = transitions.length === 0;
    tmp$ret$1 = !tmp$ret$0;
    if (tmp$ret$1) {
      _this__u8e3s4.property_ze5ozi_k$('transition', joinToString_0(transitions));
    }
  }
  function _get_value__a43j40_13($this) {
    return $this.value_1;
  }
  function Keyword(value) {
    CSSImage.call(this, value);
  }
  function Url(url) {
    CSSImage.call(this, url.toString());
  }
  function Gradient(gradient) {
    CSSImage.call(this, gradient.toString());
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).of_5r4von_k$ = function (url) {
    return new Url(url);
  };
  protoOf(Companion_13).of_24wexh_k$ = function (gradient) {
    return new Gradient(gradient);
  };
  protoOf(Companion_13).get_None_wo6tgh_k$ = function () {
    return new Keyword('none');
  };
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword('inherit');
  };
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = function () {
    return new Keyword('initial');
  };
  protoOf(Companion_13).get_Revert_3t1tzh_k$ = function () {
    return new Keyword('revert');
  };
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = function () {
    return new Keyword('unset');
  };
  var Companion_instance_13;
  function Companion_getInstance_16() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function get_$stableprop_42() {
    return 0;
  }
  function CSSImage(value) {
    Companion_getInstance_16();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CSSImage).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_43() {
    return 0;
  }
  function get_$stableprop_44() {
    return 0;
  }
  function get_$stableprop_45() {
    return 0;
  }
  function Simple(value) {
    Color.call(this, '' + value);
    this.$stable_2 = 0;
  }
  function Stop(color, stop) {
    Color.call(this, '' + color + ' ' + stop);
    this.$stable_2 = 0;
  }
  function StopRange(color, from, to) {
    Color.call(this, '' + color + ' ' + from + ' ' + to);
    this.$stable_2 = 0;
  }
  function get_$stableprop_46() {
    return 0;
  }
  function get_$stableprop_47() {
    return 0;
  }
  function _get_entryStr__gktpos($this) {
    return $this.entryStr_1;
  }
  function Color(value) {
    Entry.call(this, value);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Color).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Hint(value) {
    Entry.call(this, '' + value);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Hint).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Entry(entryStr) {
    this.entryStr_1 = entryStr;
  }
  protoOf(Entry).toString = function () {
    return this.entryStr_1;
  };
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function get_$stableprop_48() {
    return 8;
  }
  function ColorStopsBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.entries_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(ColorStopsBuilder).verifiedEntries_yuic0o_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp0_count = this.entries_1;
      var tmp;
      if (isInterface(tmp0_count, Collection)) {
        tmp = tmp0_count.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = tmp0_count.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
        tmp$ret$1 = element instanceof Color;
        if (tmp$ret$1) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    var tmp1_check = tmp$ret$0 >= 2;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      tmp$ret$2 = 'A gradient should consistent of at least two color entries (an initial color and an end color)';
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var tmp2_forEachIndexed = this.entries_1;
    var index = 0;
    var tmp0_iterator_0 = tmp2_forEachIndexed.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp3__anonymous__ufb84q = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.entries_1, tmp3__anonymous__ufb84q - 1 | 0);
        if (tmp_1 instanceof Color) {
          var tmp_2 = getOrNull(this.entries_1, tmp3__anonymous__ufb84q + 1 | 0);
          tmp_0 = tmp_2 instanceof Color;
        } else {
          tmp_0 = false;
        }
        var tmp0_check = tmp_0;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$3;
          // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'A gradient color midpoint must only be added between two colors';
          var message_0 = tmp$ret$3;
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    var tmp$ret$4;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp4_toTypedArray = this.entries_1;
    tmp$ret$4 = copyToArray(tmp4_toTypedArray);
    return tmp$ret$4;
  };
  protoOf(ColorStopsBuilder).add_v2zte8_k$ = function (color) {
    return this.entries_1.add_1j60pz_k$(new Simple(color));
  };
  protoOf(ColorStopsBuilder).add_x2bhad_k$ = function (color, stop) {
    return this.entries_1.add_1j60pz_k$(new Stop(color, stop));
  };
  protoOf(ColorStopsBuilder).add_o340yi_k$ = function (color, from, to) {
    return this.entries_1.add_1j60pz_k$(new StopRange(color, from, to));
  };
  protoOf(ColorStopsBuilder).setMidpoint_twxelb_k$ = function (hint) {
    return this.entries_1.add_1j60pz_k$(new Hint(hint));
  };
  function Gradient_0() {
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function get_$stableprop_49() {
    return 0;
  }
  function CSSUrl(url) {
    this.url_1 = url;
    this.$stable_1 = 0;
  }
  protoOf(CSSUrl).toString = function () {
    return 'url("' + this.url_1 + '")';
  };
  function get_$stableprop_50() {
    return 0;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3n44we_k$ = function () {
    var tmp$ret$0;
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  function get_$stableprop_51() {
    return 0;
  }
  function Simple_0(handle) {
    RefCallback.call(this);
    this.handle_1 = handle;
    this.$stable_1 = 0;
  }
  protoOf(Simple_0).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).invoke_1jjxys_k$ = function (scope, element) {
    this.handle_1(element);
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp$ret$0;
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.effect_1 = effect;
    this.$stable_1 = 0;
  }
  protoOf(Disposable).get_effect_ct67x6_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).invoke_1jjxys_k$ = function (scope, element) {
    return this.effect_1(scope, element);
  };
  function _get_keyedCallbacks__mth523($this) {
    return $this.keyedCallbacks_1;
  }
  function get_$stableprop_52() {
    return 8;
  }
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.keys_1 = keys;
    this.refCallback_1 = refCallback;
  }
  protoOf(KeysToEffect).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).get_refCallback_52b629_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).component1_7eebsc_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).component2_7eebsb_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).copy_7udkeq_k$ = function (keys, refCallback) {
    return new KeysToEffect(keys, refCallback);
  };
  protoOf(KeysToEffect).copy$default_xzh8d2_k$ = function (keys, refCallback, $super) {
    keys = keys === VOID ? this.keys_1 : keys;
    refCallback = refCallback === VOID ? this.refCallback_1 : refCallback;
    return $super === VOID ? this.copy_7udkeq_k$(keys, refCallback) : $super.copy_7udkeq_k$.call(this, keys, refCallback);
  };
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.keys_1 + ', refCallback=' + this.refCallback_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.keys_1);
    result = imul(result, 31) + hashCode(this.refCallback_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    if (!equals(this.refCallback_1, tmp0_other_with_cast.refCallback_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.keyedCallbacks_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  protoOf(Builder).ref_djwlwl_k$ = function (keys, handle) {
    this.keyedCallbacks_1.add_1j60pz_k$(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).disposableRef_wrpb68_k$ = function (keys, effect) {
    this.keyedCallbacks_1.add_1j60pz_k$(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).add_wiwqkq_k$ = function (other) {
    if (!(other == null)) {
      this.keyedCallbacks_1.addAll_oxxjjk_k$(other.keyedCallbacks_1);
    }
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ElementRefScope(this.keyedCallbacks_1);
  };
  function get_$stableprop_53() {
    return 8;
  }
  function ElementRefScope(keyedCallbacks) {
    this.keyedCallbacks_1 = keyedCallbacks;
    this.$stable_1 = 8;
  }
  protoOf(ElementRefScope).get_keyedCallbacks_7cgu1_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).component1_7eebsc_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).copy_9g1vtr_k$ = function (keyedCallbacks) {
    return new ElementRefScope(keyedCallbacks);
  };
  protoOf(ElementRefScope).copy$default_za44lh_k$ = function (keyedCallbacks, $super) {
    keyedCallbacks = keyedCallbacks === VOID ? this.keyedCallbacks_1 : keyedCallbacks;
    return $super === VOID ? this.copy_9g1vtr_k$(keyedCallbacks) : $super.copy_9g1vtr_k$.call(this, keyedCallbacks);
  };
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.keyedCallbacks_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.keyedCallbacks_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.keyedCallbacks_1, tmp0_other_with_cast.keyedCallbacks_1))
      return false;
    return true;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1682539725);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:91)');
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
    if (false ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      tmp$ret$0 = registerRefScope$composable$lambda;
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
    registerRefScope$composable_0(_this__u8e3s4, scope, tmp$ret$4, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function registerRefScope$composable_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(886891411);
    sourceInformation($composer_0, 'C(registerRefScope$composable)');
    if (isTraceInProgress()) {
      traceEventStart(886891411, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:104)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = scope.keyedCallbacks_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = element.keys_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
      var tmp = tmp$ret$0.slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda_0(element, transform, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function registerRefScope$composable$lambda(it) {
    return it;
  }
  function registerRefScope$composable$lambda_0($element, $transform, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $element.refCallback_1.invoke_1jjxys_k$($this$DisposableEffect, $transform($this_registerRefScope$composable.get_scopeElement_mn83kc_k$($this$DisposableEffect)));
    };
  }
  function fetch(_this__u8e3s4, method, resource, headers, body, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    var responseBytesDeferred = CompletableDeferred();
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = headers == null ? true : headers.isEmpty_y1axqb_k$();
    if (!tmp$ret$0) {
      tmp_0 = true;
    } else {
      tmp_0 = !(body == null);
    }
    if (tmp_0) {
      var tmp$ret$5;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = json([]);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.http.fetch.<anonymous>' call
      if (!(body == null)) {
        tmp0_apply['Content-Length'] = body.length;
        tmp0_apply['Content-Type'] = 'application/octet-stream';
      }
      var tmp0_safe_receiver = headers;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.iterator' call
        tmp$ret$1 = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        var tmp0_iterator = tmp$ret$1;
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
          var tmp$ret$2;
          // Inline function 'kotlin.collections.component1' call
          tmp$ret$2 = tmp1_loop_parameter.get_key_18j28a_k$();
          var key = tmp$ret$2;
          var tmp$ret$3;
          // Inline function 'kotlin.collections.component2' call
          tmp$ret$3 = tmp1_loop_parameter.get_value_j01efc_k$();
          var value = tmp$ret$3;
          tmp0_apply[key] = value;
        }
        tmp$ret$4 = Unit_getInstance();
      }
      tmp$ret$5 = tmp0_apply;
      tmp = tmp$ret$5;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    var tmp$ret$6;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var tmp1_RequestInit = method.get_name_woqyms_k$();
    var tmp0_elvis_lhs = headersJson;
    var tmp2_RequestInit = tmp0_elvis_lhs == null ? undefined : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = body;
    var tmp3_RequestInit = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
    var tmp4_RequestInit = undefined;
    var tmp5_RequestInit = undefined;
    var tmp6_RequestInit = undefined;
    var tmp7_RequestInit = undefined;
    var tmp8_RequestInit = undefined;
    var tmp9_RequestInit = undefined;
    var tmp10_RequestInit = undefined;
    var tmp11_RequestInit = undefined;
    var tmp12_RequestInit = undefined;
    var o = {};
    o['method'] = tmp1_RequestInit;
    o['headers'] = tmp2_RequestInit;
    o['body'] = tmp3_RequestInit;
    o['referrer'] = tmp4_RequestInit;
    o['referrerPolicy'] = tmp5_RequestInit;
    o['mode'] = tmp6_RequestInit;
    o['credentials'] = tmp7_RequestInit;
    o['cache'] = tmp8_RequestInit;
    o['redirect'] = tmp9_RequestInit;
    o['integrity'] = tmp10_RequestInit;
    o['keepalive'] = tmp11_RequestInit;
    o['window'] = tmp12_RequestInit;
    tmp$ret$6 = o;
    var requestInit = tmp$ret$6;
    if (!(abortController == null)) {
      var requestInitDynamic = requestInit;
      requestInitDynamic['signal'] = abortController.get_signal_jhh4tt_k$();
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    var tmp0 = responseBytesDeferred.await_xhs9og_k$($completion);
    return tmp0;
  }
  var HttpMethod_DELETE_instance;
  var HttpMethod_GET_instance;
  var HttpMethod_HEAD_instance;
  var HttpMethod_OPTIONS_instance;
  var HttpMethod_PATCH_instance;
  var HttpMethod_POST_instance;
  var HttpMethod_PUT_instance;
  function values_2() {
    return [HttpMethod_DELETE_getInstance(), HttpMethod_GET_getInstance(), HttpMethod_HEAD_getInstance(), HttpMethod_OPTIONS_getInstance(), HttpMethod_PATCH_getInstance(), HttpMethod_POST_getInstance(), HttpMethod_PUT_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'DELETE':
        return HttpMethod_DELETE_getInstance();
      case 'GET':
        return HttpMethod_GET_getInstance();
      case 'HEAD':
        return HttpMethod_HEAD_getInstance();
      case 'OPTIONS':
        return HttpMethod_OPTIONS_getInstance();
      case 'PATCH':
        return HttpMethod_PATCH_getInstance();
      case 'POST':
        return HttpMethod_POST_getInstance();
      case 'PUT':
        return HttpMethod_PUT_getInstance();
      default:
        HttpMethod_initEntries();
        THROW_ISE();
        break;
    }
  }
  var HttpMethod_entriesInitialized;
  function HttpMethod_initEntries() {
    if (HttpMethod_entriesInitialized)
      return Unit_getInstance();
    HttpMethod_entriesInitialized = true;
    HttpMethod_DELETE_instance = new HttpMethod('DELETE', 0);
    HttpMethod_GET_instance = new HttpMethod('GET', 1);
    HttpMethod_HEAD_instance = new HttpMethod('HEAD', 2);
    HttpMethod_OPTIONS_instance = new HttpMethod('OPTIONS', 3);
    HttpMethod_PATCH_instance = new HttpMethod('PATCH', 4);
    HttpMethod_POST_instance = new HttpMethod('POST', 5);
    HttpMethod_PUT_instance = new HttpMethod('PUT', 6);
  }
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function tryFetch(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    logOnError = logOnError === VOID ? false : logOnError;
    abortController = abortController === VOID ? null : abortController;
    var tmp = new $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getBodyBytesAsync(_this__u8e3s4, result) {
    var tmp = CoroutineScope(asCoroutineDispatcher(window));
    launch(tmp, VOID, VOID, getBodyBytesAsync$slambda_0(result, _this__u8e3s4, null));
  }
  function get_$stableprop_54() {
    return 0;
  }
  function ResponseException(response, bodyBytes) {
    var tmp$ret$15;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$14;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
    var tmp0_safe_receiver = bodyBytes;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim((!(tmp1_safe_receiver == null) ? isCharSequence(tmp1_safe_receiver) : false) ? tmp1_safe_receiver : THROW_CCE()));
      tmp = tmp$ret$0;
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      var tmp$ret$2;
      // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.text.isNotBlank' call
      tmp$ret$1 = !isBlank(tmp2_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      if (tmp$ret$2) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp$ret$3 = tmp_1;
      tmp_0 = tmp$ret$3;
    }
    var bodyString = tmp_0;
    if (!(bodyString == null)) {
      var tmp$ret$4;
      // Inline function 'kotlin.text.appendLine' call
      tmp$ret$4 = tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      var lines = split(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        var tmp$ret$6;
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = iterator.next_20eer_k$();
        tmp$ret$6 = tmp0__anonymous__q1qw7t.length;
        var maxValue = tmp$ret$6;
        while (iterator.hasNext_bitz1p_k$()) {
          var tmp$ret$7;
          // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = iterator.next_20eer_k$();
          tmp$ret$7 = tmp1__anonymous__uwfjfc.length;
          var v = tmp$ret$7;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp$ret$5 = maxValue;
      }
      var tmp3_elvis_lhs = tmp$ret$5;
      var longestLineLength = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var indent = '  ';
      var boundary = indent + repeat('-', longestLineLength);
      var tmp$ret$9;
      // Inline function 'kotlin.text.appendLine' call
      var tmp$ret$8;
      // Inline function 'kotlin.text.appendLine' call
      var tmp2_appendLine = tmp0_apply.append_ssq29y_k$(boundary);
      tmp$ret$8 = tmp2_appendLine.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      tmp$ret$9 = tmp$ret$8;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        var tmp$ret$11;
        // Inline function 'kotlin.text.appendLine' call
        var tmp1_appendLine = indent + element;
        var tmp$ret$10;
        // Inline function 'kotlin.text.appendLine' call
        var tmp0_appendLine = tmp0_apply.append_ssq29y_k$(tmp1_appendLine);
        tmp$ret$10 = tmp0_appendLine.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        tmp$ret$11 = tmp$ret$10;
      }
      var tmp$ret$13;
      // Inline function 'kotlin.text.appendLine' call
      var tmp$ret$12;
      // Inline function 'kotlin.text.appendLine' call
      var tmp3_appendLine = tmp0_apply.append_ssq29y_k$(boundary);
      tmp$ret$12 = tmp3_appendLine.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      tmp$ret$13 = tmp$ret$12;
    }
    tmp$ret$14 = tmp0_apply;
    tmp$ret$15 = tmp$ret$14.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.response_1 = response;
    this.bodyBytes_1 = bodyBytes;
    this.$stable_1 = 0;
  }
  protoOf(ResponseException).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(ResponseException).get_bodyBytes_ssopc0_k$ = function () {
    return this.bodyBytes_1;
  };
  function getBodyBytes(_this__u8e3s4, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.complete_8y7ynm_k$(bodyBytes);
      return Unit_getInstance();
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.completeExceptionally_7s0ccc_k$(new ResponseException($res, bodyBytes));
      return Unit_getInstance();
    };
  }
  function fetch$lambda($responseBytesDeferred) {
    return function (res) {
      var tmp;
      if (res.ok) {
        getBodyBytesAsync(res, fetch$lambda$lambda($responseBytesDeferred));
        tmp = Unit_getInstance();
      } else {
        getBodyBytesAsync(res, fetch$lambda$lambda_0($responseBytesDeferred, res));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function fetch$lambda_0($responseBytesDeferred) {
    return function (t) {
      return $responseBytesDeferred.completeExceptionally_7s0ccc_k$(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.$result_1 = $result;
    this.$this_getBodyBytesAsync_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(getBodyBytesAsync$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytesAsync$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = getBodyBytes(this.$this_getBodyBytesAsync_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$result_1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(getBodyBytesAsync$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.$result_1, this.$this_getBodyBytesAsync_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(getBodyBytesAsync$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getBodyBytes$lambda($safe) {
    return function (responseBuffer) {
      var int8Array = new Int8Array(responseBuffer);
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp = 0;
      var tmp_0 = int8Array.length;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$2;
        // Inline function 'com.varabyte.kobweb.compose.http.getBodyBytes.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'org.khronos.webgl.get' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = int8Array;
        tmp$ret$1 = tmp$ret$0[tmp_2];
        tmp$ret$2 = tmp$ret$1;
        tmp_1[tmp_2] = tmp$ret$2;
        tmp = tmp + 1 | 0;
      }
      var tmp1_resume = tmp_1;
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_1();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp1_resume);
      $safe.resumeWith_s3a3yh_k$(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function getBodyBytes$lambda_0($safe) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = new Int8Array(0);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_1();
      tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_resume);
      $safe.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function HttpMethod_DELETE_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_DELETE_instance;
  }
  function HttpMethod_GET_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_GET_instance;
  }
  function HttpMethod_HEAD_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_HEAD_instance;
  }
  function HttpMethod_OPTIONS_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_OPTIONS_instance;
  }
  function HttpMethod_PATCH_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PATCH_instance;
  }
  function HttpMethod_POST_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_POST_instance;
  }
  function HttpMethod_PUT_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PUT_instance;
  }
  function $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.method_1 = method;
    this.resource_1 = resource;
    this.headers_1 = headers;
    this.body_1 = body;
    this.logOnError_1 = logOnError;
    this.abortController_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = fetch(this._this__u8e3s4__1, this.method_1, this.resource_1, this.headers_1, this.body_1, this.abortController_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              if (this.logOnError_1) {
                console.log('Error fetching resource "' + this.resource_1 + '"\n\n' + t);
              }
              tmp_1.TRY_RESULT0__1 = null;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getBodyBytesCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0__anonymous__q1qw7t = this;
            var safe = SafeContinuation_init_$Create$(intercepted(tmp0__anonymous__q1qw7t));
            var tmp_0 = this._this__u8e3s4__1.arrayBuffer();
            var tmp_1 = tmp_0.then(getBodyBytes$lambda(safe));
            tmp_1.catch(getBodyBytes$lambda_0(safe));
            ;
            suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = http$factory();
    tmp$ret$0 = http$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  var http$delegate;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function get_$stableprop_55() {
    return 8;
  }
  function HttpFetcher(window_0) {
    this.window_1 = window_0;
    this.logOnError_1 = false;
    this.$stable_1 = 8;
  }
  protoOf(HttpFetcher).set_logOnError_rg5mft_k$ = function (_set____db54di) {
    this.logOnError_1 = _set____db54di;
  };
  protoOf(HttpFetcher).get_logOnError_4wpkhe_k$ = function () {
    return this.logOnError_1;
  };
  protoOf(HttpFetcher).delete_77j3ik_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = fetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).delete$default_ej9bxn_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.delete_77j3ik_k$(resource, headers, abortController, $completion) : $super.delete_77j3ik_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete_oce7os_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = tryFetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).tryDelete$default_8x1c9d_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryDelete_oce7os_k$(resource, headers, abortController, $completion) : $super.tryDelete_oce7os_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).get_nc2n7l_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = fetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).get$default_jrzehs_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.get_nc2n7l_k$(resource, headers, abortController, $completion) : $super.get_nc2n7l_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet_rtbz5r_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = tryFetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).tryGet$default_d582li_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryGet_rtbz5r_k$(resource, headers, abortController, $completion) : $super.tryGet_rtbz5r_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).head_jhlirb_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = fetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).head$default_jddxzq_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.head_jhlirb_k$(resource, headers, abortController, $completion) : $super.head_jhlirb_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead_ojg9wf_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = tryFetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).tryHead$default_77ct2y_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryHead_ojg9wf_k$(resource, headers, abortController, $completion) : $super.tryHead_ojg9wf_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).options_fcfhdl_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = fetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).options$default_ild8h4_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.options_fcfhdl_k$(resource, headers, abortController, $completion) : $super.options_fcfhdl_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions_f67xfb_k$ = function (resource, headers, abortController, $completion) {
    var tmp0 = tryFetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).tryOptions$default_t3jeum_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryOptions_f67xfb_k$(resource, headers, abortController, $completion) : $super.tryOptions_f67xfb_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).patch_a99beb_k$ = function (resource, headers, body, abortController, $completion) {
    var tmp0 = fetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).patch$default_gqr31j_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.patch_a99beb_k$(resource, headers, body, abortController, $completion) : $super.patch_a99beb_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch_9ygkcv_k$ = function (resource, headers, body, abortController, $completion) {
    var tmp0 = tryFetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).tryPatch$default_92opb7_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPatch_9ygkcv_k$(resource, headers, body, abortController, $completion) : $super.tryPatch_9ygkcv_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).post_hpos63_k$ = function (resource, headers, body, abortController, $completion) {
    var tmp0 = fetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).post$default_3cmhwx_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.post_hpos63_k$(resource, headers, body, abortController, $completion) : $super.post_hpos63_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost_q2xj1_k$ = function (resource, headers, body, abortController, $completion) {
    var tmp0 = tryFetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).tryPost$default_o37ux7_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPost_q2xj1_k$(resource, headers, body, abortController, $completion) : $super.tryPost_q2xj1_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).put_e5ym44_k$ = function (resource, headers, body, abortController, $completion) {
    var tmp0 = fetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).put$default_xssrs0_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.put_e5ym44_k$(resource, headers, body, abortController, $completion) : $super.put_e5ym44_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut_cb2syy_k$ = function (resource, headers, body, abortController, $completion) {
    var tmp0 = tryFetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
    return tmp0;
  };
  protoOf(HttpFetcher).tryPut$default_j6oh50_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPut_cb2syy_k$(resource, headers, body, abortController, $completion) : $super.tryPut_cb2syy_k$.call(this, resource, headers, body, abortController, $completion);
  };
  function _get_controller__bh9bov($this) {
    return $this.controller_1;
  }
  function get_$stableprop_56() {
    return 8;
  }
  function AbortController_0() {
    this.controller_1 = new AbortController();
    this.signal_1 = this.controller_1.signal;
    this.$stable_1 = 8;
  }
  protoOf(AbortController_0).get_signal_jhh4tt_k$ = function () {
    return this.signal_1;
  };
  protoOf(AbortController_0).abort_l9xn1b_k$ = function () {
    this.controller_1.abort();
  };
  function http$delegate$lambda() {
    _init_properties_HttpFetcher_kt__6mmkul();
    return new HttpFetcher(window);
  }
  function http$factory() {
    return getPropertyCallableRef('http', 1, KProperty1, function (receiver) {
      return get_http(receiver);
    }, null);
  }
  var properties_initialized_HttpFetcher_kt_uxns7j;
  function _init_properties_HttpFetcher_kt__6mmkul() {
    if (properties_initialized_HttpFetcher_kt_uxns7j) {
    } else {
      properties_initialized_HttpFetcher_kt_uxns7j = true;
      http$delegate = lazy(http$delegate$lambda);
    }
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(_this__u8e3s4);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var result = StringBuilder_init_$Create$();
    var lastIsUpper = false;
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.util.titleCamelCaseToKebabCase.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1__anonymous__uwfjfc = tmp1;
      var isUpper = isUpperCase(item);
      if (isUpper) {
        var tmp;
        var tmp$ret$2;
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp$ret$2 = charSequenceLength(result) > 0;
        if (tmp$ret$2) {
          tmp = !lastIsUpper ? true : tmp1__anonymous__uwfjfc < get_lastIndex_0(_this__u8e3s4) ? isLowerCase(charSequenceGet(_this__u8e3s4, tmp1__anonymous__uwfjfc + 1 | 0)) : false;
        } else {
          tmp = false;
        }
        if (tmp) {
          result.append_ssq29y_k$('-');
        }
      }
      var tmp$ret$5;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString_0(item);
      tmp$ret$3 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$3.toLowerCase();
      tmp$ret$4 = tmp1_unsafeCast;
      tmp$ret$5 = tmp$ret$4;
      result.append_ssq29y_k$(tmp$ret$5);
      lastIsUpper = isUpper;
    }
    return result.toString();
  }
  function wrapQuotesIfNecessary(_this__u8e3s4) {
    var tmp;
    if ((_this__u8e3s4.length >= 2 ? equals(new Char(first(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34))) : false) ? equals(new Char(last(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34))) : false) {
      tmp = _this__u8e3s4;
    } else {
      tmp = '"' + replace(_this__u8e3s4, '"', '\\"') + '"';
    }
    return tmp;
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).classes_mog12g_k$ = classes;
  protoOf(ComparableAttrsScope).id_xxyy5i_k$ = id;
  protoOf(ComparableAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(ComparableAttrsScope).title_898wkp_k$ = title;
  protoOf(ComparableAttrsScope).dir_9tgcjq_k$ = dir;
  protoOf(ComparableAttrsScope).draggable_ghcstc_k$ = draggable;
  protoOf(ComparableAttrsScope).contentEditable_oklk6b_k$ = contentEditable;
  protoOf(ComparableAttrsScope).lang_xkki7h_k$ = lang;
  protoOf(ComparableAttrsScope).tabIndex_coguxw_k$ = tabIndex;
  protoOf(ComparableAttrsScope).spellCheck_ra9ojq_k$ = spellCheck;
  protoOf(ComparableAttrsScope).inputMode_q3xdho_k$ = inputMode;
  protoOf(ComparableAttrsScope).inputMode_ni4l5s_k$ = inputMode_0;
  protoOf(ComparableAttrsScope).onContextMenu_rqaeiw_k$ = onContextMenu;
  protoOf(ComparableAttrsScope).onClick_3adsri_k$ = onClick;
  protoOf(ComparableAttrsScope).onDoubleClick_o3ltf3_k$ = onDoubleClick;
  protoOf(ComparableAttrsScope).onMouseDown_em11hd_k$ = onMouseDown;
  protoOf(ComparableAttrsScope).onMouseUp_qybdyy_k$ = onMouseUp;
  protoOf(ComparableAttrsScope).onMouseEnter_g3bz11_k$ = onMouseEnter;
  protoOf(ComparableAttrsScope).onMouseLeave_4qyrg6_k$ = onMouseLeave;
  protoOf(ComparableAttrsScope).onMouseMove_609snk_k$ = onMouseMove;
  protoOf(ComparableAttrsScope).onMouseOut_alj067_k$ = onMouseOut;
  protoOf(ComparableAttrsScope).onMouseOver_66zdzh_k$ = onMouseOver;
  protoOf(ComparableAttrsScope).onWheel_cg2j2t_k$ = onWheel;
  protoOf(ComparableAttrsScope).onDrag_vg0lyh_k$ = onDrag;
  protoOf(ComparableAttrsScope).onDrop_3mkg4y_k$ = onDrop;
  protoOf(ComparableAttrsScope).onDragStart_w5ys4t_k$ = onDragStart;
  protoOf(ComparableAttrsScope).onDragEnd_y7ewx8_k$ = onDragEnd;
  protoOf(ComparableAttrsScope).onDragOver_ti99sb_k$ = onDragOver;
  protoOf(ComparableAttrsScope).onDragEnter_uyubsn_k$ = onDragEnter;
  protoOf(ComparableAttrsScope).onDragLeave_nnon60_k$ = onDragLeave;
  protoOf(ComparableAttrsScope).onCopy_takkx5_k$ = onCopy;
  protoOf(ComparableAttrsScope).onCut_ol4js_k$ = onCut;
  protoOf(ComparableAttrsScope).onPaste_rubsh5_k$ = onPaste;
  protoOf(ComparableAttrsScope).onKeyDown_xycn2o_k$ = onKeyDown;
  protoOf(ComparableAttrsScope).onKeyUp_u3a7vt_k$ = onKeyUp;
  protoOf(ComparableAttrsScope).onFocus_f0s6pg_k$ = onFocus;
  protoOf(ComparableAttrsScope).onBlur_jks72x_k$ = onBlur;
  protoOf(ComparableAttrsScope).onFocusIn_o8fbjl_k$ = onFocusIn;
  protoOf(ComparableAttrsScope).onFocusOut_pmzsfc_k$ = onFocusOut;
  protoOf(ComparableAttrsScope).onTouchCancel_ufddza_k$ = onTouchCancel;
  protoOf(ComparableAttrsScope).onTouchMove_f4qr3x_k$ = onTouchMove;
  protoOf(ComparableAttrsScope).onTouchEnd_u7mt1j_k$ = onTouchEnd;
  protoOf(ComparableAttrsScope).onTouchStart_sporrm_k$ = onTouchStart;
  protoOf(ComparableAttrsScope).onAnimationEnd_35pssj_k$ = onAnimationEnd;
  protoOf(ComparableAttrsScope).onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  protoOf(ComparableAttrsScope).onAnimationStart_jojejg_k$ = onAnimationStart;
  protoOf(ComparableAttrsScope).onScroll_3uphub_k$ = onScroll;
  protoOf(ComparableAttrsScope).addEventListener_rnhydf_k$ = addEventListener;
  protoOf(ComparableAttrsScope).addEventListener_y3hr2r_k$ = addEventListener_0;
  protoOf(DummyAttrsScope).classes_mog12g_k$ = classes;
  protoOf(DummyAttrsScope).id_xxyy5i_k$ = id;
  protoOf(DummyAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(DummyAttrsScope).title_898wkp_k$ = title;
  protoOf(DummyAttrsScope).dir_9tgcjq_k$ = dir;
  protoOf(DummyAttrsScope).draggable_ghcstc_k$ = draggable;
  protoOf(DummyAttrsScope).contentEditable_oklk6b_k$ = contentEditable;
  protoOf(DummyAttrsScope).lang_xkki7h_k$ = lang;
  protoOf(DummyAttrsScope).tabIndex_coguxw_k$ = tabIndex;
  protoOf(DummyAttrsScope).spellCheck_ra9ojq_k$ = spellCheck;
  protoOf(DummyAttrsScope).inputMode_q3xdho_k$ = inputMode;
  protoOf(DummyAttrsScope).inputMode_ni4l5s_k$ = inputMode_0;
  protoOf(DummyAttrsScope).onContextMenu_rqaeiw_k$ = onContextMenu;
  protoOf(DummyAttrsScope).onClick_3adsri_k$ = onClick;
  protoOf(DummyAttrsScope).onDoubleClick_o3ltf3_k$ = onDoubleClick;
  protoOf(DummyAttrsScope).onMouseDown_em11hd_k$ = onMouseDown;
  protoOf(DummyAttrsScope).onMouseUp_qybdyy_k$ = onMouseUp;
  protoOf(DummyAttrsScope).onMouseEnter_g3bz11_k$ = onMouseEnter;
  protoOf(DummyAttrsScope).onMouseLeave_4qyrg6_k$ = onMouseLeave;
  protoOf(DummyAttrsScope).onMouseMove_609snk_k$ = onMouseMove;
  protoOf(DummyAttrsScope).onMouseOut_alj067_k$ = onMouseOut;
  protoOf(DummyAttrsScope).onMouseOver_66zdzh_k$ = onMouseOver;
  protoOf(DummyAttrsScope).onWheel_cg2j2t_k$ = onWheel;
  protoOf(DummyAttrsScope).onDrag_vg0lyh_k$ = onDrag;
  protoOf(DummyAttrsScope).onDrop_3mkg4y_k$ = onDrop;
  protoOf(DummyAttrsScope).onDragStart_w5ys4t_k$ = onDragStart;
  protoOf(DummyAttrsScope).onDragEnd_y7ewx8_k$ = onDragEnd;
  protoOf(DummyAttrsScope).onDragOver_ti99sb_k$ = onDragOver;
  protoOf(DummyAttrsScope).onDragEnter_uyubsn_k$ = onDragEnter;
  protoOf(DummyAttrsScope).onDragLeave_nnon60_k$ = onDragLeave;
  protoOf(DummyAttrsScope).onCopy_takkx5_k$ = onCopy;
  protoOf(DummyAttrsScope).onCut_ol4js_k$ = onCut;
  protoOf(DummyAttrsScope).onPaste_rubsh5_k$ = onPaste;
  protoOf(DummyAttrsScope).onKeyDown_xycn2o_k$ = onKeyDown;
  protoOf(DummyAttrsScope).onKeyUp_u3a7vt_k$ = onKeyUp;
  protoOf(DummyAttrsScope).onFocus_f0s6pg_k$ = onFocus;
  protoOf(DummyAttrsScope).onBlur_jks72x_k$ = onBlur;
  protoOf(DummyAttrsScope).onFocusIn_o8fbjl_k$ = onFocusIn;
  protoOf(DummyAttrsScope).onFocusOut_pmzsfc_k$ = onFocusOut;
  protoOf(DummyAttrsScope).onTouchCancel_ufddza_k$ = onTouchCancel;
  protoOf(DummyAttrsScope).onTouchMove_f4qr3x_k$ = onTouchMove;
  protoOf(DummyAttrsScope).onTouchEnd_u7mt1j_k$ = onTouchEnd;
  protoOf(DummyAttrsScope).onTouchStart_sporrm_k$ = onTouchStart;
  protoOf(DummyAttrsScope).onAnimationEnd_35pssj_k$ = onAnimationEnd;
  protoOf(DummyAttrsScope).onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  protoOf(DummyAttrsScope).onAnimationStart_jojejg_k$ = onAnimationStart;
  protoOf(DummyAttrsScope).onScroll_3uphub_k$ = onScroll;
  protoOf(DummyAttrsScope).addEventListener_rnhydf_k$ = addEventListener;
  protoOf(DummyAttrsScope).addEventListener_y3hr2r_k$ = addEventListener_0;
  protoOf(ComparableStyleScope).property_ze5ozi_k$ = property;
  protoOf(ComparableStyleScope).property_nit37e_k$ = property_0;
  protoOf(ComparableStyleScope).variable_d7dn6f_k$ = variable;
  protoOf(ComparableStyleScope).variable_pbiwyn_k$ = variable_0;
  protoOf(ComparableStyleScope).invoke_ie9e5n_k$ = invoke;
  protoOf(ComparableStyleScope).invoke_49si7m_k$ = invoke_0;
  protoOf(ComparableStyleScope).invoke_tbupf6_k$ = invoke_1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ComparableStyleScope;
  _.$_$.b = StyleVariable_0;
  _.$_$.c = borderBottom;
  _.$_$.d = borderStyle;
  _.$_$.e = borderTop;
  _.$_$.f = boxShadow;
  _.$_$.g = boxSizing_0;
  _.$_$.h = cursor;
  _.$_$.i = gridTemplateColumns_0;
  _.$_$.j = grid;
  _.$_$.k = isNotEmpty;
  _.$_$.l = justifyItems;
  _.$_$.m = justifySelf;
  _.$_$.n = listStyle;
  _.$_$.o = objectFit;
  _.$_$.p = outline;
  _.$_$.q = overflowY;
  _.$_$.r = setVariable;
  _.$_$.s = textAlign;
  _.$_$.t = textDecorationLine;
  _.$_$.u = transition;
  _.$_$.v = translateX;
  _.$_$.w = userSelect;
  _.$_$.x = registerRefScope$composable;
  _.$_$.y = get_http;
  _.$_$.z = titleCamelCaseToKebabCase;
  _.$_$.a1 = ComparableAttrsScope_init_$Create$;
  _.$_$.b1 = CSSTransition_init_$Create$;
  _.$_$.c1 = Companion_getInstance_4;
  _.$_$.d1 = Companion_getInstance_14;
  _.$_$.e1 = Companion_getInstance_5;
  _.$_$.f1 = Companion_getInstance_2;
  _.$_$.g1 = Companion_getInstance_3;
  _.$_$.h1 = Companion_getInstance_7;
  _.$_$.i1 = Companion_getInstance_9;
  _.$_$.j1 = Companion_getInstance_10;
  _.$_$.k1 = Companion_getInstance_12;
  _.$_$.l1 = Companion_getInstance_13;
  _.$_$.m1 = Companion_getInstance_11;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-compose-html-ext.js.map
