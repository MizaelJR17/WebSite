(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-kobweb-core.js', './kobweb-kobweb-silk.js', './androidx-runtime.js', './html-internal-html-core-runtime.js', './kobweb-kobweb-silk-widgets.js', './html-html-core.js', './kobweb-kobweb-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-kobweb-core.js'), require('./kobweb-kobweb-silk.js'), require('./androidx-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-kobweb-silk-widgets.js'), require('./html-html-core.js'), require('./kobweb-kobweb-compose.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'website'.");
    }
    if (typeof this['kobweb-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'kobweb-kobweb-core' was not found. Please, check whether 'kobweb-kobweb-core' is loaded prior to 'website'.");
    }
    if (typeof this['kobweb-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'kobweb-kobweb-silk' was not found. Please, check whether 'kobweb-kobweb-silk' is loaded prior to 'website'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'website'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'website'.");
    }
    if (typeof this['kobweb-kobweb-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'kobweb-kobweb-silk-widgets' was not found. Please, check whether 'kobweb-kobweb-silk-widgets' is loaded prior to 'website'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'website'.");
    }
    if (typeof this['kobweb-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'website'. Its dependency 'kobweb-kobweb-compose' was not found. Please, check whether 'kobweb-kobweb-compose' is loaded prior to 'website'.");
    }
    root.website = factory(typeof website === 'undefined' ? {} : website, this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-kobweb-core'], this['kobweb-kobweb-silk'], this['androidx-runtime'], this['html-internal-html-core-runtime'], this['kobweb-kobweb-silk-widgets'], this['html-html-core'], this['kobweb-kobweb-compose']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_kobweb_silk_widgets, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.s9;
  var Unit_getInstance = kotlin_kotlin.$_$.x1;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_initSilkHook = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var removePrefix = kotlin_kotlin.$_$.h8;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var isObject = kotlin_kotlin.$_$.t6;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.d;
  var protoOf = kotlin_kotlin.$_$.c7;
  var objectMeta = kotlin_kotlin.$_$.b7;
  var VOID = kotlin_kotlin.$_$.fa;
  var setMetadataFor = kotlin_kotlin.$_$.d7;
  var removeClass = kotlin_kotlin.$_$.ea;
  var hasClass = kotlin_kotlin.$_$.da;
  var toString = kotlin_kotlin.$_$.aa;
  var toInt = kotlin_kotlin.$_$.t8;
  var charSequenceLength = kotlin_kotlin.$_$.d6;
  var toBoolean = kotlin_kotlin.$_$.r8;
  var isBlank = kotlin_kotlin.$_$.b8;
  var removeSuffix = kotlin_kotlin.$_$.i8;
  var get_AppGlobalsLocal = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var to = kotlin_kotlin.$_$.ba;
  var mapOf = kotlin_kotlin.$_$.f4;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.b;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.b;
  var toModifier$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.c;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.g8;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Surface$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var println = kotlin_kotlin.$_$.x5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    var tmp$ret$1;
    // Inline function 'org.w3c.dom.get' call
    var tmp0_get = status.children;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_get;
    tmp$ret$1 = tmp$ret$0[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    var tmp$ret$3;
    // Inline function 'org.w3c.dom.get' call
    var tmp1_get = status.children;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_get;
    tmp$ret$3 = tmp$ret$2[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    var tmp$ret$5;
    // Inline function 'org.w3c.dom.get' call
    var tmp2_get = status.children;
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = tmp2_get;
    tmp$ret$5 = tmp$ret$4[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    var tmp$ret$6;
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    tmp$ret$6 = o;
    var eventSource = new EventSource('/api/kobweb-status', tmp$ret$6);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_rg5mft_k$(true);
    Companion_getInstance().set_svddio_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_v74gir_k$(main$lambda_0);
    set_initSilkHook(main$lambda_1);
    router.navigateTo$default_mld8fs_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable$composable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:86)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1049063675, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:113)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1157688605, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it, $dirty));
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
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      renderWithDeferred$composable(tmp$ret$6, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1157688605, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:113)');
        }
        $it($composer_0, 14 & $$dirty);
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
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1049063675, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.text.isNotEmpty' call
        var tmp0_isNotEmpty = $status.className;
        tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
        if (tmp$ret$0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotBlank' call
      tmp$ret$0 = !isBlank(text);
      if (tmp$ret$0) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_e5hf00_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    updateTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1432601359, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (main.kt:112)');
        }
        $router.renderActivePage$composable_ebhbpl_k$(ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1953125703, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:112)');
        }
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1432601359, true, main$lambda$lambda$lambda($router));
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
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
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
        MyApp$composable(tmp$ret$6, $composer_0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:109)');
        }
        var tmp_0 = [get_AppGlobalsLocal().provides_3e53yf_k$(mapOf(to('title', 'WebSite')))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1953125703, true, main$lambda$lambda($router));
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
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function updateTheme(ctx) {
  }
  function MyApp(content) {
    illegalDecoyCallException('MyApp');
  }
  function MyApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-26154532);
    sourceInformation($composer_0, 'C(MyApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-26154532, $dirty, -1, 'com.tech.website.MyApp$composable (MyApp.kt:21)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.tech.website.MyApp$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2057272175, true, MyApp$composable$lambda(content, $dirty));
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
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.tech.website.MyApp$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      SilkApp$composable(tmp$ret$6, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MyApp$composable$lambda_0(content, $changed));
    }
  }
  function MyApp$composable$lambda$lambda($content, $$dirty) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(246566856, $changed, -1, 'com.tech.website.MyApp$composable.<anonymous>.<anonymous> (MyApp.kt:23)');
        }
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function MyApp$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2057272175, $changed, -1, 'com.tech.website.MyApp$composable.<anonymous> (MyApp.kt:22)');
        }
        var tmp_0 = minHeight(toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100));
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.tech.website.MyApp$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 246566856, true, MyApp$composable$lambda$lambda($content, $$dirty));
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
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.tech.website.MyApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Surface$composable(tmp_0, null, null, null, tmp$ret$6, $composer_0, 24576, 14);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MyApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage() {
    illegalDecoyCallException('HomePage');
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(2083635926);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2083635926, $changed, -1, 'com.tech.website.pages.HomePage$composable (Index.kt:7)');
      }
      println('Hello World!');
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  main();
  return _;
}));

//# sourceMappingURL=website.js.map
