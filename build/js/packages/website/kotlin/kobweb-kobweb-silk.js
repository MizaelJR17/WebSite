(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-kobweb-silk-widgets.js', './kobweb-kobweb-core.js', './kobweb-kobweb-compose.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-kobweb-silk-widgets.js'), require('./kobweb-kobweb-core.js'), require('./kobweb-kobweb-compose.js'), require('./html-html-core.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kobweb-kobweb-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kobweb-kobweb-silk-widgets' was not found. Please, check whether 'kobweb-kobweb-silk-widgets' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kobweb-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kobweb-kobweb-core' was not found. Please, check whether 'kobweb-kobweb-core' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['kobweb-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'kobweb-kobweb-compose' was not found. Please, check whether 'kobweb-kobweb-compose' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-kobweb-silk'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-kobweb-silk'.");
    }
    root['kobweb-kobweb-silk'] = factory(typeof this['kobweb-kobweb-silk'] === 'undefined' ? {} : this['kobweb-kobweb-silk'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-kobweb-silk-widgets'], this['kobweb-kobweb-core'], this['kobweb-kobweb-compose'], this['html-html-core']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Unit_getInstance = kotlin_kotlin.$_$.x1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var isObject = kotlin_kotlin.$_$.t6;
  var initSilk = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.e;
  var setSilkVariables$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.f;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var KobwebApp$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.k8;
  var SilkStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.g;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var protoOf = kotlin_kotlin.$_$.c7;
  var Annotation = kotlin_kotlin.$_$.z8;
  var classMeta = kotlin_kotlin.$_$.e6;
  var VOID = kotlin_kotlin.$_$.fa;
  var setMetadataFor = kotlin_kotlin.$_$.d7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(InitSilk, 'InitSilk', classMeta, VOID, [Annotation]);
  //endregion
  function SilkApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(766681329);
    sourceInformation($composer_0, 'C(SilkApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(766681329, $dirty, -1, 'com.varabyte.kobweb.silk.SilkApp$composable (SilkApp.kt:13)');
      }
      $composer_0.startMovableGroup_rpq74u_k$(-628102650, Unit_getInstance());
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
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>' call
        tmp$ret$0 = SilkApp$composable$lambda;
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
      initSilk(tmp$ret$4);
      $composer_0.endMovableGroup_kciorf_k$();
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_2 = tmp5_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp4_cache = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp3_let = tmp4_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp3_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>' call
        var tmp_2 = document.getElementById('root');
        tmp$ret$5 = tmp_2 instanceof HTMLElement ? tmp_2 : THROW_CCE();
        var value_0 = tmp$ret$5;
        tmp4_cache.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp3_let;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var root = tmp$ret$9;
      setSilkVariables$composable(root, $composer_0, 0);
      var tmp$ret$16;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1100068428, true, SilkApp$composable$lambda_0(content, $dirty));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$10;
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableLambda$invoke$ref(dispatchReceiver);
        var value_1 = tmp$ret$10;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = tmp0_let_0;
      }
      tmp$ret$11 = tmp_5;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$14 = tmp0_1;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      KobwebApp$composable(tmp$ret$16, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(SilkApp$composable$lambda_1(content, $changed));
    }
  }
  function SilkApp$composable$lambda(ctx) {
    get_initSilkHook()(ctx);
    return Unit_getInstance();
  }
  function SilkApp$composable$lambda_0($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1100068428, $changed, -1, 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous> (SilkApp.kt:21)');
        }
        // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
        var tmp0_Style$composable = KobwebComposeStyleSheet_getInstance();
        var tmp1_Style$composable = $composer_0;
        var $composer_1 = tmp1_Style$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-168645675);
        sourceInformation($composer_1, 'CC(Style$composable)');
        Style$composable(null, tmp0_Style$composable.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
        $composer_1.endReplaceableGroup_er37p7_k$();
        // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
        var tmp2_Style$composable = SilkStyleSheet_getInstance();
        var tmp3_Style$composable = $composer_0;
        var $composer_2 = tmp3_Style$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(-168645675);
        sourceInformation($composer_2, 'CC(Style$composable)');
        Style$composable(null, tmp2_Style$composable.get_cssRules_jdoznh_k$(), $composer_2, 0, 1);
        $composer_2.endReplaceableGroup_er37p7_k$();
        $content($composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function SilkApp$composable$lambda_1($content, $$changed) {
    return function ($composer, $force) {
      SilkApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function set_initSilkHook(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    initSilkHook = _set____db54di;
  }
  function get_initSilkHook() {
    _init_properties_InitSilk_kt__vukue3();
    return initSilkHook;
  }
  var initSilkHook;
  function InitSilk() {
  }
  protoOf(InitSilk).equals = function (other) {
    if (!(other instanceof InitSilk))
      return false;
    var tmp0_other_with_cast = other instanceof InitSilk ? other : THROW_CCE();
    return true;
  };
  protoOf(InitSilk).hashCode = function () {
    return 0;
  };
  protoOf(InitSilk).toString = function () {
    return '@com.varabyte.kobweb.silk.init.InitSilk()';
  };
  function initSilkHook$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_getInstance();
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (properties_initialized_InitSilk_kt_8x89gn) {
    } else {
      properties_initialized_InitSilk_kt_8x89gn = true;
      initSilkHook = initSilkHook$lambda;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = set_initSilkHook;
  _.$_$.b = SilkApp$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-kobweb-silk.js.map
