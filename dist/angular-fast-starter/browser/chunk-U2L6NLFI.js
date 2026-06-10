import {
  apiErrorMessage
} from "./chunk-GHXMJHTX.js";
import {
  AppButtonComponent
} from "./chunk-2BI5IW7M.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  ConfirmationService,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule
} from "./chunk-YGQPX75J.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-TI7NITK6.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  EMPTY,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  Subject,
  ViewEncapsulation,
  assertInInjectionContext,
  booleanAttribute,
  catchError,
  computed,
  delay,
  effect,
  inject,
  input,
  isObservable,
  isSignal,
  map,
  noop,
  of,
  output,
  pipe,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GI7FX4Z4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/core/confirm/app-confirm.service.ts
var _AppConfirmService = class _AppConfirmService {
  constructor() {
    this.confirmation = inject(ConfirmationService);
  }
  confirm(options) {
    this.confirmation.confirm({
      header: options.header,
      message: options.message,
      acceptLabel: options.acceptLabel ?? "Confirm",
      rejectLabel: options.rejectLabel ?? "Cancel",
      acceptButtonStyleClass: "p-button-danger",
      accept: options.accept
    });
  }
};
_AppConfirmService.\u0275fac = function AppConfirmService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppConfirmService)();
};
_AppConfirmService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppConfirmService, factory: _AppConfirmService.\u0275fac, providedIn: "root" });
var AppConfirmService = _AppConfirmService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppConfirmService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/ui/error-state/error-state.component.ts
function AppErrorStateComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "app-button", 6);
    \u0275\u0275listener("clicked", function AppErrorStateComponent_Conditional_8_Template_app_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry.emit());
    });
    \u0275\u0275elementEnd()();
  }
}
var _AppErrorStateComponent = class _AppErrorStateComponent {
  constructor() {
    this.title = input("Unable to load data", ...ngDevMode ? [{ debugName: "title" }] : []);
    this.message = input("Please try again.", ...ngDevMode ? [{ debugName: "message" }] : []);
    this.retryable = input(true, ...ngDevMode ? [{ debugName: "retryable" }] : []);
    this.retry = output();
  }
};
_AppErrorStateComponent.\u0275fac = function AppErrorStateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppErrorStateComponent)();
};
_AppErrorStateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppErrorStateComponent, selectors: [["app-error-state"]], inputs: { title: [1, "title"], message: [1, "message"], retryable: [1, "retryable"] }, outputs: { retry: "retry" }, decls: 9, vars: 3, consts: [[1, "grid", "min-h-40", "place-items-center", "px-4", "py-8", "text-center"], [1, "mx-auto", "mb-3", "grid", "size-10", "place-items-center", "bg-red-50", "text-red-600", 2, "border-radius", "var(--fast-radius-pill)"], [1, "pi", "pi-exclamation-triangle"], [1, "font-medium", "text-color"], [1, "mt-1", "text-sm", "text-muted-color"], [1, "mt-4"], ["label", "Retry", "icon", "pi pi-refresh", "intent", "secondary", 3, "clicked"]], template: function AppErrorStateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1);
    \u0275\u0275element(3, "i", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AppErrorStateComponent_Conditional_8_Template, 2, 0, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.title());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.message());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.retryable() ? 8 : -1);
  }
}, dependencies: [AppButtonComponent], encapsulation: 2, changeDetection: 0 });
var AppErrorStateComponent = _AppErrorStateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppErrorStateComponent, [{
    type: Component,
    args: [{
      selector: "app-error-state",
      standalone: true,
      imports: [AppButtonComponent],
      template: `
    <div class="grid min-h-40 place-items-center px-4 py-8 text-center">
      <div>
        <div class="mx-auto mb-3 grid size-10 place-items-center bg-red-50 text-red-600" style="border-radius: var(--fast-radius-pill);">
          <i class="pi pi-exclamation-triangle"></i>
        </div>
        <p class="font-medium text-color">{{ title() }}</p>
        <p class="mt-1 text-sm text-muted-color">{{ message() }}</p>
        @if (retryable()) {
          <div class="mt-4">
            <app-button label="Retry" icon="pi pi-refresh" intent="secondary" (clicked)="retry.emit()" />
          </div>
        }
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false }] }], retryable: [{ type: Input, args: [{ isSignal: true, alias: "retryable", required: false }] }], retry: [{ type: Output, args: ["retry"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppErrorStateComponent, { className: "AppErrorStateComponent", filePath: "src/app/shared/ui/error-state/error-state.component.ts", lineNumber: 26 });
})();

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
var DEEP_SIGNAL = /* @__PURE__ */ Symbol("DEEP_SIGNAL");
function toDeepSignal(signal2) {
  return new Proxy(signal2, {
    has(target, prop) {
      return !!this.get(target, prop, void 0);
    },
    get(target, prop) {
      const value = untracked(target);
      if (!isRecord(value) || !(prop in value)) {
        if (isSignal(target[prop]) && target[prop][DEEP_SIGNAL]) {
          delete target[prop];
        }
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
        target[prop][DEEP_SIGNAL] = true;
      }
      return toDeepSignal(target[prop]);
    }
  });
}
var nonRecords = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function isRecord(value) {
  if (value === null || typeof value !== "object" || isIterable(value)) {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype) {
    return true;
  }
  while (proto && proto !== Object.prototype) {
    if (nonRecords.includes(proto.constructor)) {
      return false;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.prototype;
}
function isIterable(value) {
  return typeof value?.[Symbol.iterator] === "function";
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = /* @__PURE__ */ Symbol("STATE_SOURCE");
function patchState(stateSource, ...updaters) {
  const currentState = untracked(() => getState(stateSource));
  const newState = updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState);
  const signals = stateSource[STATE_SOURCE];
  const stateKeys = Reflect.ownKeys(stateSource[STATE_SOURCE]);
  for (const key of Reflect.ownKeys(newState)) {
    if (stateKeys.includes(key)) {
      const signalKey = key;
      if (currentState[signalKey] !== newState[signalKey]) {
        signals[signalKey].set(newState[signalKey]);
      }
    } else if (typeof ngDevMode !== "undefined" && ngDevMode) {
      console.warn(`@ngrx/signals: patchState was called with an unknown state slice '${String(key)}'.`, "Ensure that all state properties are explicitly defined in the initial state.", "Updates to properties not present in the initial state will be ignored.");
    }
  }
  notifyWatchers(stateSource);
}
function getState(stateSource) {
  const signals = stateSource[STATE_SOURCE];
  return Reflect.ownKeys(stateSource[STATE_SOURCE]).reduce((state, key) => {
    const value = signals[key]();
    return __spreadProps(__spreadValues({}, state), {
      [key]: value
    });
  }, {});
}
function getWatchers(stateSource) {
  return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
  const watchers = getWatchers(stateSource);
  for (const watcher of watchers) {
    const state = untracked(() => getState(stateSource));
    watcher(state);
  }
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        stateSignals,
        props,
        methods,
        hooks
      } = innerStore;
      const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), props), methods);
      this[STATE_SOURCE] = innerStore[STATE_SOURCE];
      for (const key of Reflect.ownKeys(storeMembers)) {
        this[key] = storeMembers[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static \u0275fac = function SignalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignalStore)();
    };
    /** @nocollapse */
    static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: SignalStore,
      factory: SignalStore.\u0275fac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SOURCE]: {},
    stateSignals: {},
    props: {},
    methods: {},
    hooks: {}
  };
}
function signalStoreFeature(...args) {
  const features = typeof args[0] === "function" ? args : args.slice(1);
  return (inputStore) => features.reduce((store, feature) => feature(store), inputStore);
}
function assertUniqueStoreMembers(store, newMemberKeys) {
  const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods);
  const overriddenKeys = Reflect.ownKeys(storeMembers).filter((memberKey) => newMemberKeys.includes(memberKey));
  if (overriddenKeys.length > 0) {
    console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.map((key) => String(key)).join(", "));
  }
}
function withProps(propsFactory) {
  return (store) => {
    const props = propsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(props));
    }
    return __spreadProps(__spreadValues({}, store), {
      props: __spreadValues(__spreadValues({}, store.props), props)
    });
  };
}
function withComputed(computedFactory) {
  return withProps((store) => {
    const computedResult = computedFactory(store);
    const computedResultKeys = Reflect.ownKeys(computedResult);
    return computedResultKeys.reduce((prev, key) => {
      const signalOrComputation = computedResult[key];
      return __spreadProps(__spreadValues({}, prev), {
        [key]: isSignal(signalOrComputation) ? signalOrComputation : computed(signalOrComputation)
      });
    }, {});
  });
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(methods));
    }
    return __spreadProps(__spreadValues({}, store), {
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Reflect.ownKeys(state);
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, stateKeys);
    }
    const stateSource = store[STATE_SOURCE];
    const stateSignals = {};
    for (const key of stateKeys) {
      stateSource[key] = signal(state[key]);
      stateSignals[key] = toDeepSignal(stateSource[key]);
    }
    return __spreadProps(__spreadValues({}, store), {
      stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
    });
  };
}

// node_modules/@ngrx/signals/fesm2022/ngrx-signals-entities.mjs
var DidMutate;
(function(DidMutate2) {
  DidMutate2[DidMutate2["None"] = 0] = "None";
  DidMutate2[DidMutate2["Entities"] = 1] = "Entities";
  DidMutate2[DidMutate2["Both"] = 2] = "Both";
})(DidMutate || (DidMutate = {}));
var defaultSelectId = (entity) => entity.id;
function getEntityIdSelector(config) {
  return config?.selectId ?? defaultSelectId;
}
function getEntityStateKeys(config) {
  const collection = config?.collection;
  const entityMapKey = collection === void 0 ? "entityMap" : `${collection}EntityMap`;
  const idsKey = collection === void 0 ? "ids" : `${collection}Ids`;
  const entitiesKey = collection === void 0 ? "entities" : `${collection}Entities`;
  return { entityMapKey, idsKey, entitiesKey };
}
function cloneEntityState(state, stateKeys) {
  return {
    entityMap: __spreadValues({}, state[stateKeys.entityMapKey]),
    ids: [...state[stateKeys.idsKey]]
  };
}
function getEntityUpdaterResult(state, stateKeys, didMutate) {
  switch (didMutate) {
    case DidMutate.Both: {
      return {
        [stateKeys.entityMapKey]: state.entityMap,
        [stateKeys.idsKey]: state.ids
      };
    }
    case DidMutate.Entities: {
      return { [stateKeys.entityMapKey]: state.entityMap };
    }
    default: {
      return {};
    }
  }
}
function addEntityMutably(state, entity, selectId, prepend = false) {
  const id = selectId(entity);
  if (state.entityMap[id]) {
    return DidMutate.None;
  }
  state.entityMap[id] = entity;
  if (prepend) {
    state.ids.unshift(id);
  } else {
    state.ids.push(id);
  }
  return DidMutate.Both;
}
function setEntityMutably(state, entity, selectId, replace = true) {
  const id = selectId(entity);
  if (state.entityMap[id]) {
    state.entityMap[id] = replace ? entity : __spreadValues(__spreadValues({}, state.entityMap[id]), entity);
    return DidMutate.Entities;
  }
  state.entityMap[id] = entity;
  state.ids.push(id);
  return DidMutate.Both;
}
function setEntitiesMutably(state, entities, selectId, replace = true) {
  let didMutate = DidMutate.None;
  for (const entity of entities) {
    const result = setEntityMutably(state, entity, selectId, replace);
    if (didMutate === DidMutate.Both) {
      continue;
    }
    didMutate = result;
  }
  return didMutate;
}
function removeEntitiesMutably(state, idsOrPredicate) {
  const ids = Array.isArray(idsOrPredicate) ? idsOrPredicate : state.ids.filter((id) => idsOrPredicate(state.entityMap[id]));
  let didMutate = DidMutate.None;
  for (const id of ids) {
    if (state.entityMap[id]) {
      delete state.entityMap[id];
      didMutate = DidMutate.Both;
    }
  }
  if (didMutate === DidMutate.Both) {
    state.ids = state.ids.filter((id) => id in state.entityMap);
  }
  return didMutate;
}
function updateEntitiesMutably(state, idsOrPredicate, changes, selectId) {
  const ids = Array.isArray(idsOrPredicate) ? idsOrPredicate : state.ids.filter((id) => idsOrPredicate(state.entityMap[id]));
  let newIds = void 0;
  let didMutate = DidMutate.None;
  for (const id of ids) {
    const entity = state.entityMap[id];
    if (entity) {
      const changesRecord = typeof changes === "function" ? changes(entity) : changes;
      state.entityMap[id] = __spreadValues(__spreadValues({}, entity), changesRecord);
      didMutate = DidMutate.Entities;
      const newId = selectId(state.entityMap[id]);
      if (newId !== id) {
        state.entityMap[newId] = state.entityMap[id];
        delete state.entityMap[id];
        newIds = newIds || {};
        newIds[id] = newId;
      }
    }
  }
  if (newIds) {
    state.ids = state.ids.map((id) => newIds[id] ?? id);
    didMutate = DidMutate.Both;
  }
  if (typeof ngDevMode !== "undefined" && ngDevMode && state.ids.length !== Object.keys(state.entityMap).length) {
    console.warn("@ngrx/signals/entities: Entities with IDs:", ids, "are not updated correctly.", "Make sure to apply valid changes when using `updateEntity`,", "`updateEntities`, and `updateAllEntities` updaters.");
  }
  return didMutate;
}
function addEntity(entity, config) {
  const selectId = getEntityIdSelector(config);
  const stateKeys = getEntityStateKeys(config);
  return (state) => {
    const clonedState = cloneEntityState(state, stateKeys);
    const didMutate = addEntityMutably(clonedState, entity, selectId);
    return getEntityUpdaterResult(clonedState, stateKeys, didMutate);
  };
}
function removeEntity(id, config) {
  const stateKeys = getEntityStateKeys(config);
  return (state) => {
    const clonedState = cloneEntityState(state, stateKeys);
    const didMutate = removeEntitiesMutably(clonedState, [id]);
    return getEntityUpdaterResult(clonedState, stateKeys, didMutate);
  };
}
function setAllEntities(entities, config) {
  const selectId = getEntityIdSelector(config);
  const stateKeys = getEntityStateKeys(config);
  return () => {
    const state = { entityMap: {}, ids: [] };
    setEntitiesMutably(state, entities, selectId);
    return {
      [stateKeys.entityMapKey]: state.entityMap,
      [stateKeys.idsKey]: state.ids
    };
  };
}
function updateEntity(update, config) {
  const selectId = getEntityIdSelector(config);
  const stateKeys = getEntityStateKeys(config);
  return (state) => {
    const clonedState = cloneEntityState(state, stateKeys);
    const didMutate = updateEntitiesMutably(clonedState, [update.id], update.changes, selectId);
    return getEntityUpdaterResult(clonedState, stateKeys, didMutate);
  };
}
function withEntities(config) {
  const { entityMapKey, idsKey, entitiesKey } = getEntityStateKeys(config);
  return signalStoreFeature(withState({
    [entityMapKey]: {},
    [idsKey]: []
  }), withComputed((store) => ({
    [entitiesKey]: computed(() => {
      const entityMap = store[entityMapKey]();
      const ids = store[idsKey]();
      return ids.map((id) => entityMap[id]);
    })
  })));
}

// node_modules/@ngrx/signals/fesm2022/ngrx-signals-rxjs-interop.mjs
function rxMethod(generator, config) {
  if (typeof ngDevMode !== "undefined" && ngDevMode && !config?.injector) {
    assertInInjectionContext(rxMethod);
  }
  const sourceInjector = config?.injector ?? inject(Injector);
  const source$ = new Subject();
  const sourceSub = generator(source$).subscribe();
  sourceInjector.get(DestroyRef).onDestroy(() => sourceSub.unsubscribe());
  const rxMethodFn = (input2, config2) => {
    if (isStatic(input2)) {
      source$.next(input2);
      return { destroy: noop };
    }
    const callerInjector = getCallerInjector();
    if (typeof ngDevMode !== "undefined" && ngDevMode && config2?.injector === void 0 && callerInjector === void 0) {
      console.warn("@ngrx/signals/rxjs-interop: The reactive method was called outside", "the injection context with a signal or observable. This may lead to", "a memory leak. Make sure to call it within the injection context", "(e.g. in a constructor or field initializer) or pass an injector", "explicitly via the config parameter.\n\nFor more information, see:", "https://ngrx.io/guide/signals/rxjs-integration#reactive-methods-and-injector-hierarchies");
    }
    const instanceInjector = config2?.injector ?? callerInjector ?? sourceInjector;
    if (isSignal(input2)) {
      const watcher = effect(() => {
        const value = input2();
        untracked(() => source$.next(value));
      }, { injector: instanceInjector });
      sourceSub.add({ unsubscribe: () => watcher.destroy() });
      return watcher;
    }
    const instanceSub = input2.subscribe((value) => source$.next(value));
    sourceSub.add(instanceSub);
    if (instanceInjector !== sourceInjector) {
      instanceInjector.get(DestroyRef).onDestroy(() => instanceSub.unsubscribe());
    }
    return { destroy: () => instanceSub.unsubscribe() };
  };
  rxMethodFn.destroy = sourceSub.unsubscribe.bind(sourceSub);
  return rxMethodFn;
}
function isStatic(value) {
  return !isSignal(value) && !isObservable(value);
}
function getCallerInjector() {
  try {
    return inject(Injector);
  } catch {
    return void 0;
  }
}

// src/app/shared/store/with-dialog-state.ts
function withDialogState() {
  return signalStoreFeature(withState({
    dialogOpen: false
  }), withMethods((store) => ({
    openDialog() {
      patchState(store, { dialogOpen: true });
    },
    closeDialog() {
      patchState(store, { dialogOpen: false });
    }
  })));
}

// src/app/shared/store/with-filters.ts
function withFilters(initialFilters2) {
  return signalStoreFeature(withState({
    filters: initialFilters2
  }), withMethods((store) => ({
    setFilters(filters) {
      patchState(store, {
        filters: __spreadValues(__spreadValues({}, store.filters()), filters)
      });
    },
    resetFilters() {
      patchState(store, { filters: initialFilters2 });
    }
  })));
}

// src/app/shared/store/with-pagination.ts
function withPagination() {
  return signalStoreFeature(withState({
    page: 1,
    pageSize: 10,
    total: 0
  }), withComputed((store) => ({
    pageStart: computed(() => (store.page() - 1) * store.pageSize()),
    pageEnd: computed(() => store.page() * store.pageSize()),
    pageCount: computed(() => Math.max(1, Math.ceil(store.total() / store.pageSize())))
  })), withMethods((store) => ({
    setPage(page) {
      patchState(store, { page });
    },
    setPageSize(pageSize) {
      patchState(store, { pageSize, page: 1 });
    },
    setTotal(total) {
      patchState(store, { total });
    },
    resetPagination() {
      patchState(store, { page: 1, pageSize: 10, total: 0 });
    }
  })));
}

// src/app/shared/store/with-request-state.ts
function withRequestState() {
  return signalStoreFeature(withState({
    status: "idle",
    error: null
  }), withComputed((store) => ({
    loading: computed(() => store.status() === "loading"),
    loaded: computed(() => store.status() === "success"),
    failed: computed(() => store.status() === "error")
  })), withMethods((store) => ({
    setLoading() {
      patchState(store, { status: "loading", error: null });
    },
    setSuccess() {
      patchState(store, { status: "success", error: null });
    },
    setError(error) {
      patchState(store, { status: "error", error });
    },
    resetRequest() {
      patchState(store, { status: "idle", error: null });
    }
  })));
}

// src/app/shared/store/with-selection.ts
function withSelection() {
  return signalStoreFeature(withState({
    selectedId: null
  }), withMethods((store) => ({
    select(id) {
      patchState(store, { selectedId: id });
    },
    clearSelection() {
      patchState(store, { selectedId: null });
    }
  })));
}

// src/app/shared/store/with-sort.ts
function withSort(initialSort = { sortField: "", sortOrder: 1 }) {
  return signalStoreFeature(withState(initialSort), withMethods((store) => ({
    setSort(field, order) {
      patchState(store, {
        sortField: field,
        sortOrder: order
      });
    },
    resetSort() {
      patchState(store, initialSort);
    }
  })));
}

// src/app/features/customers/models/customer.mapper.ts
function mapCustomer(dto) {
  return {
    id: dto.id,
    fullName: dto.full_name,
    email: dto.email,
    status: dto.status,
    company: dto.company,
    createdAt: new Date(dto.created_at)
  };
}
function mapCustomerToDto(customer) {
  return {
    id: customer.id,
    full_name: customer.fullName,
    email: customer.email,
    status: customer.status,
    company: customer.company,
    created_at: customer.createdAt.toISOString()
  };
}
function mapFormToCreateCustomerDto(value) {
  return {
    full_name: value.fullName,
    email: value.email,
    company: value.company
  };
}

// src/app/features/customers/data-access/customers.api.ts
var seedCustomers = [
  {
    id: "cus_001",
    full_name: "Amina Patel",
    email: "amina@example.com",
    status: "active",
    company: "Northstar Labs",
    created_at: "2026-01-14T09:00:00.000Z"
  },
  {
    id: "cus_002",
    full_name: "Daniel Okello",
    email: "daniel@example.com",
    status: "pending",
    company: "Savanna Works",
    created_at: "2026-02-03T09:00:00.000Z"
  },
  {
    id: "cus_003",
    full_name: "Maya Chen",
    email: "maya@example.com",
    status: "active",
    company: "Blue Harbor",
    created_at: "2026-03-22T09:00:00.000Z"
  },
  {
    id: "cus_004",
    full_name: "James Mwangi",
    email: "james@example.com",
    status: "inactive",
    company: "Metro Supply",
    created_at: "2026-04-09T09:00:00.000Z"
  }
];
var customers = [...seedCustomers];
var _CustomersApi = class _CustomersApi {
  list(filters, sort) {
    return of(customers).pipe(delay(250), map((items) => items.filter((item) => this.matchesFilters(item, filters))), map((items) => items.map(mapCustomer)), map((items) => this.sortItems(items, sort)));
  }
  get(id) {
    return of(customers.find((customer) => customer.id === id) ?? null).pipe(delay(180), map((item) => item ? mapCustomer(item) : null));
  }
  create(dto) {
    const customer = __spreadProps(__spreadValues({
      id: this.createId()
    }, dto), {
      status: "active",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    customers = [customer, ...customers];
    return of(mapCustomer(customer)).pipe(delay(250));
  }
  update(customer) {
    const dto = mapCustomerToDto(customer);
    customers = customers.map((item) => item.id === customer.id ? dto : item);
    return of(mapCustomer(dto)).pipe(delay(250));
  }
  delete(id) {
    customers = customers.filter((customer) => customer.id !== id);
    return of(void 0).pipe(delay(250));
  }
  matchesFilters(customer, filters) {
    const search = filters.search.trim().toLowerCase();
    const matchesSearch = !search || customer.full_name.toLowerCase().includes(search) || customer.email.toLowerCase().includes(search) || customer.company.toLowerCase().includes(search);
    const matchesStatus = filters.status === "all" || customer.status === filters.status;
    return matchesSearch && matchesStatus;
  }
  sortItems(items, sort) {
    if (!sort?.sortField) {
      return items;
    }
    return [...items].sort((left, right) => {
      const leftValue = this.sortValue(left, sort.sortField);
      const rightValue = this.sortValue(right, sort.sortField);
      if (leftValue < rightValue)
        return -1 * sort.sortOrder;
      if (leftValue > rightValue)
        return 1 * sort.sortOrder;
      return 0;
    });
  }
  sortValue(customer, field) {
    const value = customer[field];
    if (value instanceof Date) {
      return value.getTime();
    }
    return String(value ?? "").toLowerCase();
  }
  createId() {
    if ("randomUUID" in crypto) {
      return `cus_${crypto.randomUUID().slice(0, 8)}`;
    }
    return `cus_${Date.now()}`;
  }
};
_CustomersApi.\u0275fac = function CustomersApi_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomersApi)();
};
_CustomersApi.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomersApi, factory: _CustomersApi.\u0275fac, providedIn: "root" });
var CustomersApi = _CustomersApi;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomersApi, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/customers/data-access/customers.store.ts
var initialFilters = {
  search: "",
  status: "all"
};
var CustomersStore = signalStore(withEntities(), withRequestState(), withPagination(), withSort({ sortField: "createdAt", sortOrder: -1 }), withSelection(), withDialogState(), withFilters(initialFilters), withComputed((store) => ({
  selectedCustomer: computed(() => {
    const selectedId = store.selectedId();
    return store.entities().find((customer) => customer.id === selectedId) ?? null;
  }),
  activeCustomers: computed(() => store.entities().filter((customer) => customer.status === "active"))
})), withMethods((store, api = inject(CustomersApi)) => ({
  load: rxMethod(pipe(tap(() => store.setLoading()), switchMap(() => api.list(store.filters(), { sortField: store.sortField(), sortOrder: store.sortOrder() }).pipe(tap((customers2) => {
    patchState(store, setAllEntities(customers2));
    store.setTotal(customers2.length);
    store.setSuccess();
  }), catchError((error) => {
    store.setError(apiErrorMessage(error, "Failed to load customers"));
    return EMPTY;
  }))))),
  loadOne: rxMethod(pipe(tap(() => store.setLoading()), switchMap((id) => api.get(id).pipe(tap((customer) => {
    if (customer) {
      patchState(store, addEntity(customer));
      store.select(customer.id);
      store.setSuccess();
      return;
    }
    store.setError("Customer was not found");
  }), catchError((error) => {
    store.setError(apiErrorMessage(error, "Failed to load customer"));
    return EMPTY;
  }))))),
  create: rxMethod(pipe(tap(() => store.setLoading()), switchMap((dto) => api.create(dto).pipe(tap((customer) => {
    patchState(store, addEntity(customer));
    store.setTotal(store.total() + 1);
    store.closeDialog();
    store.setSuccess();
  }), catchError((error) => {
    store.setError(apiErrorMessage(error, "Failed to create customer"));
    return EMPTY;
  }))))),
  update: rxMethod(pipe(tap(() => store.setLoading()), switchMap((customer) => api.update(customer).pipe(tap((updated) => {
    patchState(store, updateEntity({ id: updated.id, changes: updated }));
    store.setSuccess();
  }), catchError((error) => {
    store.setError(apiErrorMessage(error, "Failed to update customer"));
    return EMPTY;
  }))))),
  delete: rxMethod(pipe(tap(() => store.setLoading()), switchMap((id) => api.delete(id).pipe(tap(() => {
    patchState(store, removeEntity(id));
    store.setTotal(Math.max(0, store.total() - 1));
    store.setSuccess();
  }), catchError((error) => {
    store.setError(apiErrorMessage(error, "Failed to delete customer"));
    return EMPTY;
  })))))
})));

// node_modules/@primeuix/styles/dist/tag/index.mjs
var style = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c0 = ["icon"];
var _c1 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("ngClass", ctx_r0.icon)("pBind", ctx_r0.ptm("icon"));
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 4, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-tag p-component", {
    "p-tag-info": instance.severity === "info",
    "p-tag-success": instance.severity === "success",
    "p-tag-warn": instance.severity === "warn",
    "p-tag-danger": instance.severity === "danger",
    "p-tag-secondary": instance.severity === "secondary",
    "p-tag-contrast": instance.severity === "contrast",
    "p-tag-rounded": instance.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var TAG_INSTANCE = new InjectionToken("TAG_INSTANCE");
var Tag = class _Tag extends BaseComponent {
  $pcTag = inject(TAG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _componentStyle = inject(TagStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle, {
      provide: TAG_INSTANCE,
      useExisting: _Tag
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tag
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 6,
    consts: [[4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"], [3, "class", "ngClass", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 4, "span", 1);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("label"));
        \u0275\u0275property("pBind", ctx.ptm("label"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span [class]="cx('icon')" [ngClass]="icon" [pBind]="ptm('icon')" *ngIf="icon"></span>
        </ng-container>
        <span [class]="cx('icon')" [pBind]="ptm('icon')" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span [class]="cx('label')" [pBind]="ptm('label')">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle, {
        provide: TAG_INSTANCE,
        useExisting: Tag
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tag
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule,
    imports: [Tag, SharedModule],
    exports: [Tag, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/ui/status-badge/status-badge.component.ts
var _AppStatusBadgeComponent = class _AppStatusBadgeComponent {
  constructor() {
    this.value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
    this.label = computed(() => this.value().replaceAll("-", " "), ...ngDevMode ? [{ debugName: "label" }] : []);
    this.tone = computed(() => {
      const value = this.value();
      if (["active", "paid", "approved", "success"].includes(value))
        return "success";
      if (["pending", "draft", "review"].includes(value))
        return "warn";
      if (["blocked", "inactive", "failed", "danger"].includes(value))
        return "danger";
      return "secondary";
    }, ...ngDevMode ? [{ debugName: "tone" }] : []);
  }
};
_AppStatusBadgeComponent.\u0275fac = function AppStatusBadgeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppStatusBadgeComponent)();
};
_AppStatusBadgeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppStatusBadgeComponent, selectors: [["app-status-badge"]], inputs: { value: [1, "value"] }, decls: 1, vars: 2, consts: [[3, "value", "severity"]], template: function AppStatusBadgeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.label())("severity", ctx.tone());
  }
}, dependencies: [TagModule, Tag], encapsulation: 2, changeDetection: 0 });
var AppStatusBadgeComponent = _AppStatusBadgeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppStatusBadgeComponent, [{
    type: Component,
    args: [{
      selector: "app-status-badge",
      standalone: true,
      imports: [TagModule],
      template: `<p-tag [value]="label()" [severity]="tone()" />`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppStatusBadgeComponent, { className: "AppStatusBadgeComponent", filePath: "src/app/shared/ui/status-badge/status-badge.component.ts", lineNumber: 13 });
})();

export {
  AppConfirmService,
  AppErrorStateComponent,
  AppStatusBadgeComponent,
  mapFormToCreateCustomerDto,
  CustomersStore
};
//# sourceMappingURL=chunk-U2L6NLFI.js.map
