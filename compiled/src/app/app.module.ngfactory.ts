/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';
import * as import7 from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import * as import8 from '@ng-bootstrap/ng-bootstrap/buttons/radio.module';
import * as import9 from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';
import * as import10 from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import * as import11 from '@angular/forms/src/directives';
import * as import12 from '@angular/forms/src/form_providers';
import * as import13 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import * as import14 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import * as import15 from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import * as import16 from '@ng-bootstrap/ng-bootstrap/pagination/pagination.module';
import * as import17 from '@ng-bootstrap/ng-bootstrap/popover/popover.module';
import * as import18 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import * as import19 from '@ng-bootstrap/ng-bootstrap/rating/rating.module';
import * as import20 from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import * as import21 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module';
import * as import22 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import * as import23 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import * as import24 from '@ng-bootstrap/ng-bootstrap/index';
import * as import25 from '../../../src/app/gallery/gallery.module';
import * as import26 from '../../../src/app/common/header/header.module';
import * as import27 from '@angular/http/src/http_module';
import * as import28 from '@angular/core/src/application_init';
import * as import29 from '@angular/core/src/testability/testability';
import * as import30 from '@angular/core/src/application_ref';
import * as import31 from '../../../src/app/app.service';
import * as import32 from '@angular/common/src/localization';
import * as import33 from '@angular/core/src/linker/compiler';
import * as import34 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import35 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import36 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import37 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import38 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import39 from '@angular/core/src/animation/animation_queue';
import * as import40 from '@angular/core/src/linker/view_utils';
import * as import41 from '@angular/platform-browser/src/browser/title';
import * as import42 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import43 from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import * as import44 from '@ng-bootstrap/ng-bootstrap/modal/modal';
import * as import45 from '@angular/http/src/backends/browser_xhr';
import * as import46 from '@angular/http/src/base_response_options';
import * as import47 from '@angular/http/src/backends/xhr_backend';
import * as import48 from '@angular/http/src/base_request_options';
import * as import49 from '../../../src/app/services/content-service.service';
import * as import50 from '@ng-bootstrap/ng-bootstrap/alert/alert-config';
import * as import51 from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config';
import * as import52 from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config';
import * as import53 from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config';
import * as import54 from '@ng-bootstrap/ng-bootstrap/accordion/accordion-config';
import * as import55 from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';
import * as import56 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import * as import57 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n';
import * as import58 from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import * as import59 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service';
import * as import60 from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';
import * as import61 from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config';
import * as import62 from '@ng-bootstrap/ng-bootstrap/pagination/pagination-config';
import * as import63 from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import * as import64 from '@ng-bootstrap/ng-bootstrap/rating/rating-config';
import * as import65 from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
import * as import66 from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config';
import * as import67 from '@angular/common/src/location/location';
import * as import68 from '@angular/router/src/url_tree';
import * as import69 from '@angular/router/src/router_outlet_map';
import * as import70 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import71 from '@angular/router/src/router_preloader';
import * as import72 from '../../../src/app/app.resolver';
import * as import73 from '@angular/core/src/di/injector';
import * as import74 from '../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory';
import * as import75 from '../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory';
import * as import76 from '../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory';
import * as import77 from '../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory';
import * as import78 from '../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory';
import * as import79 from '../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory';
import * as import80 from '../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory';
import * as import81 from './gallery/gallery.component.ngfactory';
import * as import82 from './gallery/view-categories/view-categories.component.ngfactory';
import * as import83 from './gallery/view-content/view-content.component.ngfactory';
import * as import84 from './home/home.component.ngfactory';
import * as import85 from './app.component.ngfactory';
import * as import86 from '@angular/core/src/i18n/tokens';
import * as import87 from '@angular/core/src/application_tokens';
import * as import88 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import89 from '@angular/platform-browser/src/dom/events/key_events';
import * as import90 from '@angular/core/src/zone/ng_zone';
import * as import91 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import92 from '../../../src/app/gallery/gallery.component';
import * as import93 from '../../../src/app/gallery/view-categories/view-categories.component';
import * as import94 from '../../../src/app/gallery/view-content/view-content.component';
import * as import95 from '../../../src/app/home/home.component';
import * as import96 from '@angular/common/src/location/platform_location';
import * as import97 from '@angular/common/src/location/location_strategy';
import * as import98 from '@angular/router/src/url_handling_strategy';
import * as import99 from '@angular/router/src/route_reuse_strategy';
import * as import100 from '@angular/router/src/router';
import * as import101 from '@angular/core/src/console';
import * as import102 from '@angular/core/src/error_handler';
import * as import103 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import104 from '@angular/platform-browser/src/dom/animation_driver';
import * as import105 from '@angular/core/src/render/api';
import * as import106 from '@angular/core/src/security';
import * as import107 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import108 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import109 from '@angular/router/src/router_config_loader';
import * as import110 from '@angular/http/src/interfaces';
import * as import111 from '@angular/http/src/http';
import * as import112 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import113 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _ROUTER_FORROOT_GUARD_3:any;
  _RouterModule_4:import5.RouterModule;
  _NgbAccordionModule_5:import6.NgbAccordionModule;
  _NgbAlertModule_6:import7.NgbAlertModule;
  _NgbButtonsModule_7:import8.NgbButtonsModule;
  _NgbCarouselModule_8:import9.NgbCarouselModule;
  _NgbCollapseModule_9:import10.NgbCollapseModule;
  _InternalFormsSharedModule_10:import11.InternalFormsSharedModule;
  _FormsModule_11:import12.FormsModule;
  _NgbDatepickerModule_12:import13.NgbDatepickerModule;
  _NgbDropdownModule_13:import14.NgbDropdownModule;
  _NgbModalModule_14:import15.NgbModalModule;
  _NgbPaginationModule_15:import16.NgbPaginationModule;
  _NgbPopoverModule_16:import17.NgbPopoverModule;
  _NgbProgressbarModule_17:import18.NgbProgressbarModule;
  _NgbRatingModule_18:import19.NgbRatingModule;
  _NgbTabsetModule_19:import20.NgbTabsetModule;
  _NgbTimepickerModule_20:import21.NgbTimepickerModule;
  _NgbTooltipModule_21:import22.NgbTooltipModule;
  _NgbTypeaheadModule_22:import23.NgbTypeaheadModule;
  _NgbModule_23:import24.NgbModule;
  _GalleryModule_24:import25.GalleryModule;
  _NgbRootModule_25:import24.NgbRootModule;
  _HeaderModule_26:import26.HeaderModule;
  _HttpModule_27:import27.HttpModule;
  _ErrorHandler_28:any;
  _ApplicationInitStatus_29:import28.ApplicationInitStatus;
  _Testability_30:import29.Testability;
  _ApplicationRef__31:import30.ApplicationRef_;
  _ApplicationRef_32:any;
  _AppState_33:import31.AppState;
  _AppModule_34:import1.AppModule;
  __LOCALE_ID_35:any;
  __NgLocalization_36:import32.NgLocaleLocalization;
  __Compiler_37:import33.Compiler;
  __APP_ID_38:any;
  __DOCUMENT_39:any;
  __HAMMER_GESTURE_CONFIG_40:import34.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_41:any[];
  __EventManager_42:import35.EventManager;
  _DomSharedStylesHost_43:import36.DomSharedStylesHost;
  __AnimationDriver_44:any;
  __DomRootRenderer_45:import37.DomRootRenderer_;
  __NgProbeToken_46:any[];
  __RootRenderer_47:any;
  __DomSanitizer_48:import38.DomSanitizerImpl;
  __Sanitizer_49:any;
  __AnimationQueue_50:import39.AnimationQueue;
  __ViewUtils_51:import40.ViewUtils;
  __IterableDiffers_52:any;
  __KeyValueDiffers_53:any;
  __SharedStylesHost_54:any;
  __Title_55:import41.Title;
  __RadioControlRegistry_56:import42.RadioControlRegistry;
  __NgbModalStack_57:import43.NgbModalStack;
  __NgbModal_58:import44.NgbModal;
  __ROUTES_59:any[];
  __BrowserXhr_60:import45.BrowserXhr;
  __ResponseOptions_61:import46.BaseResponseOptions;
  __XSRFStrategy_62:any;
  __XHRBackend_63:import47.XHRBackend;
  __RequestOptions_64:import48.BaseRequestOptions;
  __Http_65:any;
  __ContentService_66:import49.ContentService;
  __NgbAlertConfig_67:import50.NgbAlertConfig;
  __NgbProgressbarConfig_68:import51.NgbProgressbarConfig;
  __NgbTooltipConfig_69:import52.NgbTooltipConfig;
  __NgbTypeaheadConfig_70:import53.NgbTypeaheadConfig;
  __NgbAccordionConfig_71:import54.NgbAccordionConfig;
  __NgbCarouselConfig_72:import55.NgbCarouselConfig;
  __NgbCalendar_73:import56.NgbCalendarGregorian;
  __NgbDatepickerI18n_74:import57.NgbDatepickerI18nDefault;
  __NgbDateParserFormatter_75:import58.NgbDateISOParserFormatter;
  __NgbDatepickerService_76:import59.NgbDatepickerService;
  __NgbDatepickerConfig_77:import60.NgbDatepickerConfig;
  __NgbDropdownConfig_78:import61.NgbDropdownConfig;
  __NgbPaginationConfig_79:import62.NgbPaginationConfig;
  __NgbPopoverConfig_80:import63.NgbPopoverConfig;
  __NgbRatingConfig_81:import64.NgbRatingConfig;
  __NgbTabsetConfig_82:import65.NgbTabsetConfig;
  __NgbTimepickerConfig_83:import66.NgbTimepickerConfig;
  __ROUTER_CONFIGURATION_84:any;
  __LocationStrategy_85:any;
  __Location_86:import67.Location;
  __UrlSerializer_87:import68.DefaultUrlSerializer;
  __RouterOutletMap_88:import69.RouterOutletMap;
  __NgModuleFactoryLoader_89:import70.SystemJsNgModuleLoader;
  __Router_90:any;
  __ActivatedRoute_91:any;
  _PreloadAllModules_92:import71.PreloadAllModules;
  _PreloadingStrategy_93:any;
  _RouterPreloader_94:import71.RouterPreloader;
  __NoPreloading_95:import71.NoPreloading;
  __ROUTER_INITIALIZER_96:any;
  __APP_BOOTSTRAP_LISTENER_97:any[];
  __DataResolver_98:import72.DataResolver;
  constructor(parent:import73.Injector) {
    super(parent,[
      import74.NgbAlertNgFactory,
      import75.NgbDatepickerNgFactory,
      import76.NgbModalBackdropNgFactory,
      import77.NgbModalWindowNgFactory,
      import78.NgbPopoverWindowNgFactory,
      import79.NgbTooltipWindowNgFactory,
      import80.NgbTypeaheadWindowNgFactory,
      import81.GalleryComponentNgFactory,
      import82.ViewCategoriesComponentNgFactory,
      import83.ViewContentComponentNgFactory,
      import84.HomeComponentNgFactory,
      import85.AppComponentNgFactory
    ]
    ,[import85.AppComponentNgFactory]);
  }
  get _LOCALE_ID_35():any {
    if ((this.__LOCALE_ID_35 == null)) { (this.__LOCALE_ID_35 = import3._localeFactory(this.parent.get(import86.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_35;
  }
  get _NgLocalization_36():import32.NgLocaleLocalization {
    if ((this.__NgLocalization_36 == null)) { (this.__NgLocalization_36 = new import32.NgLocaleLocalization(this._LOCALE_ID_35)); }
    return this.__NgLocalization_36;
  }
  get _Compiler_37():import33.Compiler {
    if ((this.__Compiler_37 == null)) { (this.__Compiler_37 = new import33.Compiler()); }
    return this.__Compiler_37;
  }
  get _APP_ID_38():any {
    if ((this.__APP_ID_38 == null)) { (this.__APP_ID_38 = import87._appIdRandomProviderFactory()); }
    return this.__APP_ID_38;
  }
  get _DOCUMENT_39():any {
    if ((this.__DOCUMENT_39 == null)) { (this.__DOCUMENT_39 = import4._document()); }
    return this.__DOCUMENT_39;
  }
  get _HAMMER_GESTURE_CONFIG_40():import34.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_40 == null)) { (this.__HAMMER_GESTURE_CONFIG_40 = new import34.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_40;
  }
  get _EVENT_MANAGER_PLUGINS_41():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_41 == null)) { (this.__EVENT_MANAGER_PLUGINS_41 = [
      new import88.DomEventsPlugin(),
      new import89.KeyEventsPlugin(),
      new import34.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_40)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_41;
  }
  get _EventManager_42():import35.EventManager {
    if ((this.__EventManager_42 == null)) { (this.__EventManager_42 = new import35.EventManager(this._EVENT_MANAGER_PLUGINS_41,this.parent.get(import90.NgZone))); }
    return this.__EventManager_42;
  }
  get _AnimationDriver_44():any {
    if ((this.__AnimationDriver_44 == null)) { (this.__AnimationDriver_44 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_44;
  }
  get _DomRootRenderer_45():import37.DomRootRenderer_ {
    if ((this.__DomRootRenderer_45 == null)) { (this.__DomRootRenderer_45 = new import37.DomRootRenderer_(this._DOCUMENT_39,this._EventManager_42,this._DomSharedStylesHost_43,this._AnimationDriver_44,this._APP_ID_38)); }
    return this.__DomRootRenderer_45;
  }
  get _NgProbeToken_46():any[] {
    if ((this.__NgProbeToken_46 == null)) { (this.__NgProbeToken_46 = [import5.routerNgProbeToken()]); }
    return this.__NgProbeToken_46;
  }
  get _RootRenderer_47():any {
    if ((this.__RootRenderer_47 == null)) { (this.__RootRenderer_47 = import91._createConditionalRootRenderer(this._DomRootRenderer_45,this.parent.get(import91.NgProbeToken,(null as any)),this._NgProbeToken_46)); }
    return this.__RootRenderer_47;
  }
  get _DomSanitizer_48():import38.DomSanitizerImpl {
    if ((this.__DomSanitizer_48 == null)) { (this.__DomSanitizer_48 = new import38.DomSanitizerImpl()); }
    return this.__DomSanitizer_48;
  }
  get _Sanitizer_49():any {
    if ((this.__Sanitizer_49 == null)) { (this.__Sanitizer_49 = this._DomSanitizer_48); }
    return this.__Sanitizer_49;
  }
  get _AnimationQueue_50():import39.AnimationQueue {
    if ((this.__AnimationQueue_50 == null)) { (this.__AnimationQueue_50 = new import39.AnimationQueue(this.parent.get(import90.NgZone))); }
    return this.__AnimationQueue_50;
  }
  get _ViewUtils_51():import40.ViewUtils {
    if ((this.__ViewUtils_51 == null)) { (this.__ViewUtils_51 = new import40.ViewUtils(this._RootRenderer_47,this._Sanitizer_49,this._AnimationQueue_50)); }
    return this.__ViewUtils_51;
  }
  get _IterableDiffers_52():any {
    if ((this.__IterableDiffers_52 == null)) { (this.__IterableDiffers_52 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_52;
  }
  get _KeyValueDiffers_53():any {
    if ((this.__KeyValueDiffers_53 == null)) { (this.__KeyValueDiffers_53 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_53;
  }
  get _SharedStylesHost_54():any {
    if ((this.__SharedStylesHost_54 == null)) { (this.__SharedStylesHost_54 = this._DomSharedStylesHost_43); }
    return this.__SharedStylesHost_54;
  }
  get _Title_55():import41.Title {
    if ((this.__Title_55 == null)) { (this.__Title_55 = new import41.Title()); }
    return this.__Title_55;
  }
  get _RadioControlRegistry_56():import42.RadioControlRegistry {
    if ((this.__RadioControlRegistry_56 == null)) { (this.__RadioControlRegistry_56 = new import42.RadioControlRegistry()); }
    return this.__RadioControlRegistry_56;
  }
  get _NgbModalStack_57():import43.NgbModalStack {
    if ((this.__NgbModalStack_57 == null)) { (this.__NgbModalStack_57 = new import43.NgbModalStack()); }
    return this.__NgbModalStack_57;
  }
  get _NgbModal_58():import44.NgbModal {
    if ((this.__NgbModal_58 == null)) { (this.__NgbModal_58 = new import44.NgbModal(this,this,this._NgbModalStack_57)); }
    return this.__NgbModal_58;
  }
  get _ROUTES_59():any[] {
    if ((this.__ROUTES_59 == null)) { (this.__ROUTES_59 = [
        [{
          path: 'gallery',
          component: import92.GalleryComponent,
          children: [
            {
              path: '',
              component: import93.ViewCategoriesComponent
            }
            ,
            {
              path: 'view-content/:category',
              component: import94.ViewContentComponent
            }

          ]

        }
      ],
      [
        {
          path: '',
          component: import95.HomeComponent
        }
        ,
        {
          path: 'home',
          component: import95.HomeComponent,
          pathMatch: 'full'
        }

      ]

    ]
    ); }
    return this.__ROUTES_59;
  }
  get _BrowserXhr_60():import45.BrowserXhr {
    if ((this.__BrowserXhr_60 == null)) { (this.__BrowserXhr_60 = new import45.BrowserXhr()); }
    return this.__BrowserXhr_60;
  }
  get _ResponseOptions_61():import46.BaseResponseOptions {
    if ((this.__ResponseOptions_61 == null)) { (this.__ResponseOptions_61 = new import46.BaseResponseOptions()); }
    return this.__ResponseOptions_61;
  }
  get _XSRFStrategy_62():any {
    if ((this.__XSRFStrategy_62 == null)) { (this.__XSRFStrategy_62 = import27._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_62;
  }
  get _XHRBackend_63():import47.XHRBackend {
    if ((this.__XHRBackend_63 == null)) { (this.__XHRBackend_63 = new import47.XHRBackend(this._BrowserXhr_60,this._ResponseOptions_61,this._XSRFStrategy_62)); }
    return this.__XHRBackend_63;
  }
  get _RequestOptions_64():import48.BaseRequestOptions {
    if ((this.__RequestOptions_64 == null)) { (this.__RequestOptions_64 = new import48.BaseRequestOptions()); }
    return this.__RequestOptions_64;
  }
  get _Http_65():any {
    if ((this.__Http_65 == null)) { (this.__Http_65 = import27.httpFactory(this._XHRBackend_63,this._RequestOptions_64)); }
    return this.__Http_65;
  }
  get _ContentService_66():import49.ContentService {
    if ((this.__ContentService_66 == null)) { (this.__ContentService_66 = new import49.ContentService(this._Http_65)); }
    return this.__ContentService_66;
  }
  get _NgbAlertConfig_67():import50.NgbAlertConfig {
    if ((this.__NgbAlertConfig_67 == null)) { (this.__NgbAlertConfig_67 = new import50.NgbAlertConfig()); }
    return this.__NgbAlertConfig_67;
  }
  get _NgbProgressbarConfig_68():import51.NgbProgressbarConfig {
    if ((this.__NgbProgressbarConfig_68 == null)) { (this.__NgbProgressbarConfig_68 = new import51.NgbProgressbarConfig()); }
    return this.__NgbProgressbarConfig_68;
  }
  get _NgbTooltipConfig_69():import52.NgbTooltipConfig {
    if ((this.__NgbTooltipConfig_69 == null)) { (this.__NgbTooltipConfig_69 = new import52.NgbTooltipConfig()); }
    return this.__NgbTooltipConfig_69;
  }
  get _NgbTypeaheadConfig_70():import53.NgbTypeaheadConfig {
    if ((this.__NgbTypeaheadConfig_70 == null)) { (this.__NgbTypeaheadConfig_70 = new import53.NgbTypeaheadConfig()); }
    return this.__NgbTypeaheadConfig_70;
  }
  get _NgbAccordionConfig_71():import54.NgbAccordionConfig {
    if ((this.__NgbAccordionConfig_71 == null)) { (this.__NgbAccordionConfig_71 = new import54.NgbAccordionConfig()); }
    return this.__NgbAccordionConfig_71;
  }
  get _NgbCarouselConfig_72():import55.NgbCarouselConfig {
    if ((this.__NgbCarouselConfig_72 == null)) { (this.__NgbCarouselConfig_72 = new import55.NgbCarouselConfig()); }
    return this.__NgbCarouselConfig_72;
  }
  get _NgbCalendar_73():import56.NgbCalendarGregorian {
    if ((this.__NgbCalendar_73 == null)) { (this.__NgbCalendar_73 = new import56.NgbCalendarGregorian()); }
    return this.__NgbCalendar_73;
  }
  get _NgbDatepickerI18n_74():import57.NgbDatepickerI18nDefault {
    if ((this.__NgbDatepickerI18n_74 == null)) { (this.__NgbDatepickerI18n_74 = new import57.NgbDatepickerI18nDefault()); }
    return this.__NgbDatepickerI18n_74;
  }
  get _NgbDateParserFormatter_75():import58.NgbDateISOParserFormatter {
    if ((this.__NgbDateParserFormatter_75 == null)) { (this.__NgbDateParserFormatter_75 = new import58.NgbDateISOParserFormatter()); }
    return this.__NgbDateParserFormatter_75;
  }
  get _NgbDatepickerService_76():import59.NgbDatepickerService {
    if ((this.__NgbDatepickerService_76 == null)) { (this.__NgbDatepickerService_76 = new import59.NgbDatepickerService(this._NgbCalendar_73)); }
    return this.__NgbDatepickerService_76;
  }
  get _NgbDatepickerConfig_77():import60.NgbDatepickerConfig {
    if ((this.__NgbDatepickerConfig_77 == null)) { (this.__NgbDatepickerConfig_77 = new import60.NgbDatepickerConfig()); }
    return this.__NgbDatepickerConfig_77;
  }
  get _NgbDropdownConfig_78():import61.NgbDropdownConfig {
    if ((this.__NgbDropdownConfig_78 == null)) { (this.__NgbDropdownConfig_78 = new import61.NgbDropdownConfig()); }
    return this.__NgbDropdownConfig_78;
  }
  get _NgbPaginationConfig_79():import62.NgbPaginationConfig {
    if ((this.__NgbPaginationConfig_79 == null)) { (this.__NgbPaginationConfig_79 = new import62.NgbPaginationConfig()); }
    return this.__NgbPaginationConfig_79;
  }
  get _NgbPopoverConfig_80():import63.NgbPopoverConfig {
    if ((this.__NgbPopoverConfig_80 == null)) { (this.__NgbPopoverConfig_80 = new import63.NgbPopoverConfig()); }
    return this.__NgbPopoverConfig_80;
  }
  get _NgbRatingConfig_81():import64.NgbRatingConfig {
    if ((this.__NgbRatingConfig_81 == null)) { (this.__NgbRatingConfig_81 = new import64.NgbRatingConfig()); }
    return this.__NgbRatingConfig_81;
  }
  get _NgbTabsetConfig_82():import65.NgbTabsetConfig {
    if ((this.__NgbTabsetConfig_82 == null)) { (this.__NgbTabsetConfig_82 = new import65.NgbTabsetConfig()); }
    return this.__NgbTabsetConfig_82;
  }
  get _NgbTimepickerConfig_83():import66.NgbTimepickerConfig {
    if ((this.__NgbTimepickerConfig_83 == null)) { (this.__NgbTimepickerConfig_83 = new import66.NgbTimepickerConfig()); }
    return this.__NgbTimepickerConfig_83;
  }
  get _ROUTER_CONFIGURATION_84():any {
    if ((this.__ROUTER_CONFIGURATION_84 == null)) { (this.__ROUTER_CONFIGURATION_84 = {
      useHash: true,
      preloadingStrategy: import71.PreloadAllModules
    }
    ); }
    return this.__ROUTER_CONFIGURATION_84;
  }
  get _LocationStrategy_85():any {
    if ((this.__LocationStrategy_85 == null)) { (this.__LocationStrategy_85 = import5.provideLocationStrategy(this.parent.get(import96.PlatformLocation),this.parent.get(import97.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_84)); }
    return this.__LocationStrategy_85;
  }
  get _Location_86():import67.Location {
    if ((this.__Location_86 == null)) { (this.__Location_86 = new import67.Location(this._LocationStrategy_85)); }
    return this.__Location_86;
  }
  get _UrlSerializer_87():import68.DefaultUrlSerializer {
    if ((this.__UrlSerializer_87 == null)) { (this.__UrlSerializer_87 = new import68.DefaultUrlSerializer()); }
    return this.__UrlSerializer_87;
  }
  get _RouterOutletMap_88():import69.RouterOutletMap {
    if ((this.__RouterOutletMap_88 == null)) { (this.__RouterOutletMap_88 = new import69.RouterOutletMap()); }
    return this.__RouterOutletMap_88;
  }
  get _NgModuleFactoryLoader_89():import70.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_89 == null)) { (this.__NgModuleFactoryLoader_89 = new import70.SystemJsNgModuleLoader(this._Compiler_37,this.parent.get(import70.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_89;
  }
  get _Router_90():any {
    if ((this.__Router_90 == null)) { (this.__Router_90 = import5.setupRouter(this._ApplicationRef_32,this._UrlSerializer_87,this._RouterOutletMap_88,this._Location_86,this,this._NgModuleFactoryLoader_89,this._Compiler_37,this._ROUTES_59,this._ROUTER_CONFIGURATION_84,this.parent.get(import98.UrlHandlingStrategy,(null as any)),this.parent.get(import99.RouteReuseStrategy,(null as any)))); }
    return this.__Router_90;
  }
  get _ActivatedRoute_91():any {
    if ((this.__ActivatedRoute_91 == null)) { (this.__ActivatedRoute_91 = import5.rootRoute(this._Router_90)); }
    return this.__ActivatedRoute_91;
  }
  get _NoPreloading_95():import71.NoPreloading {
    if ((this.__NoPreloading_95 == null)) { (this.__NoPreloading_95 = new import71.NoPreloading()); }
    return this.__NoPreloading_95;
  }
  get _ROUTER_INITIALIZER_96():any {
    if ((this.__ROUTER_INITIALIZER_96 == null)) { (this.__ROUTER_INITIALIZER_96 = import5.initialRouterNavigation(this._Router_90,this._ApplicationRef_32,this._RouterPreloader_94,this._ROUTER_CONFIGURATION_84)); }
    return this.__ROUTER_INITIALIZER_96;
  }
  get _APP_BOOTSTRAP_LISTENER_97():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_97 == null)) { (this.__APP_BOOTSTRAP_LISTENER_97 = [this._ROUTER_INITIALIZER_96]); }
    return this.__APP_BOOTSTRAP_LISTENER_97;
  }
  get _DataResolver_98():import72.DataResolver {
    if ((this.__DataResolver_98 == null)) { (this.__DataResolver_98 = new import72.DataResolver()); }
    return this.__DataResolver_98;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import100.Router,(null as any)));
    this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
    this._NgbAccordionModule_5 = new import6.NgbAccordionModule();
    this._NgbAlertModule_6 = new import7.NgbAlertModule();
    this._NgbButtonsModule_7 = new import8.NgbButtonsModule();
    this._NgbCarouselModule_8 = new import9.NgbCarouselModule();
    this._NgbCollapseModule_9 = new import10.NgbCollapseModule();
    this._InternalFormsSharedModule_10 = new import11.InternalFormsSharedModule();
    this._FormsModule_11 = new import12.FormsModule();
    this._NgbDatepickerModule_12 = new import13.NgbDatepickerModule();
    this._NgbDropdownModule_13 = new import14.NgbDropdownModule();
    this._NgbModalModule_14 = new import15.NgbModalModule();
    this._NgbPaginationModule_15 = new import16.NgbPaginationModule();
    this._NgbPopoverModule_16 = new import17.NgbPopoverModule();
    this._NgbProgressbarModule_17 = new import18.NgbProgressbarModule();
    this._NgbRatingModule_18 = new import19.NgbRatingModule();
    this._NgbTabsetModule_19 = new import20.NgbTabsetModule();
    this._NgbTimepickerModule_20 = new import21.NgbTimepickerModule();
    this._NgbTooltipModule_21 = new import22.NgbTooltipModule();
    this._NgbTypeaheadModule_22 = new import23.NgbTypeaheadModule();
    this._NgbModule_23 = new import24.NgbModule();
    this._GalleryModule_24 = new import25.GalleryModule();
    this._NgbRootModule_25 = new import24.NgbRootModule();
    this._HeaderModule_26 = new import26.HeaderModule();
    this._HttpModule_27 = new import27.HttpModule();
    this._ErrorHandler_28 = import4.errorHandler();
    this._ApplicationInitStatus_29 = new import28.ApplicationInitStatus(this.parent.get(import28.APP_INITIALIZER,(null as any)));
    this._Testability_30 = new import29.Testability(this.parent.get(import90.NgZone));
    this._ApplicationRef__31 = new import30.ApplicationRef_(this.parent.get(import90.NgZone),this.parent.get(import101.Console),this,this._ErrorHandler_28,this,this._ApplicationInitStatus_29,this.parent.get(import29.TestabilityRegistry,(null as any)),this._Testability_30);
    this._ApplicationRef_32 = this._ApplicationRef__31;
    this._AppState_33 = new import31.AppState();
    this._AppModule_34 = new import1.AppModule(this._ApplicationRef_32,this._AppState_33);
    this._DomSharedStylesHost_43 = new import36.DomSharedStylesHost(this._DOCUMENT_39);
    this._PreloadAllModules_92 = new import71.PreloadAllModules();
    this._PreloadingStrategy_93 = this._PreloadAllModules_92;
    this._RouterPreloader_94 = new import71.RouterPreloader(this._Router_90,this._NgModuleFactoryLoader_89,this._Compiler_37,this,this._PreloadingStrategy_93);
    return this._AppModule_34;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import6.NgbAccordionModule)) { return this._NgbAccordionModule_5; }
    if ((token === import7.NgbAlertModule)) { return this._NgbAlertModule_6; }
    if ((token === import8.NgbButtonsModule)) { return this._NgbButtonsModule_7; }
    if ((token === import9.NgbCarouselModule)) { return this._NgbCarouselModule_8; }
    if ((token === import10.NgbCollapseModule)) { return this._NgbCollapseModule_9; }
    if ((token === import11.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_10; }
    if ((token === import12.FormsModule)) { return this._FormsModule_11; }
    if ((token === import13.NgbDatepickerModule)) { return this._NgbDatepickerModule_12; }
    if ((token === import14.NgbDropdownModule)) { return this._NgbDropdownModule_13; }
    if ((token === import15.NgbModalModule)) { return this._NgbModalModule_14; }
    if ((token === import16.NgbPaginationModule)) { return this._NgbPaginationModule_15; }
    if ((token === import17.NgbPopoverModule)) { return this._NgbPopoverModule_16; }
    if ((token === import18.NgbProgressbarModule)) { return this._NgbProgressbarModule_17; }
    if ((token === import19.NgbRatingModule)) { return this._NgbRatingModule_18; }
    if ((token === import20.NgbTabsetModule)) { return this._NgbTabsetModule_19; }
    if ((token === import21.NgbTimepickerModule)) { return this._NgbTimepickerModule_20; }
    if ((token === import22.NgbTooltipModule)) { return this._NgbTooltipModule_21; }
    if ((token === import23.NgbTypeaheadModule)) { return this._NgbTypeaheadModule_22; }
    if ((token === import24.NgbModule)) { return this._NgbModule_23; }
    if ((token === import25.GalleryModule)) { return this._GalleryModule_24; }
    if ((token === import24.NgbRootModule)) { return this._NgbRootModule_25; }
    if ((token === import26.HeaderModule)) { return this._HeaderModule_26; }
    if ((token === import27.HttpModule)) { return this._HttpModule_27; }
    if ((token === import102.ErrorHandler)) { return this._ErrorHandler_28; }
    if ((token === import28.ApplicationInitStatus)) { return this._ApplicationInitStatus_29; }
    if ((token === import29.Testability)) { return this._Testability_30; }
    if ((token === import30.ApplicationRef_)) { return this._ApplicationRef__31; }
    if ((token === import30.ApplicationRef)) { return this._ApplicationRef_32; }
    if ((token === import31.AppState)) { return this._AppState_33; }
    if ((token === import1.AppModule)) { return this._AppModule_34; }
    if ((token === import86.LOCALE_ID)) { return this._LOCALE_ID_35; }
    if ((token === import32.NgLocalization)) { return this._NgLocalization_36; }
    if ((token === import33.Compiler)) { return this._Compiler_37; }
    if ((token === import87.APP_ID)) { return this._APP_ID_38; }
    if ((token === import103.DOCUMENT)) { return this._DOCUMENT_39; }
    if ((token === import34.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_40; }
    if ((token === import35.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_41; }
    if ((token === import35.EventManager)) { return this._EventManager_42; }
    if ((token === import36.DomSharedStylesHost)) { return this._DomSharedStylesHost_43; }
    if ((token === import104.AnimationDriver)) { return this._AnimationDriver_44; }
    if ((token === import37.DomRootRenderer)) { return this._DomRootRenderer_45; }
    if ((token === import30.NgProbeToken)) { return this._NgProbeToken_46; }
    if ((token === import105.RootRenderer)) { return this._RootRenderer_47; }
    if ((token === import38.DomSanitizer)) { return this._DomSanitizer_48; }
    if ((token === import106.Sanitizer)) { return this._Sanitizer_49; }
    if ((token === import39.AnimationQueue)) { return this._AnimationQueue_50; }
    if ((token === import40.ViewUtils)) { return this._ViewUtils_51; }
    if ((token === import107.IterableDiffers)) { return this._IterableDiffers_52; }
    if ((token === import108.KeyValueDiffers)) { return this._KeyValueDiffers_53; }
    if ((token === import36.SharedStylesHost)) { return this._SharedStylesHost_54; }
    if ((token === import41.Title)) { return this._Title_55; }
    if ((token === import42.RadioControlRegistry)) { return this._RadioControlRegistry_56; }
    if ((token === import43.NgbModalStack)) { return this._NgbModalStack_57; }
    if ((token === import44.NgbModal)) { return this._NgbModal_58; }
    if ((token === import109.ROUTES)) { return this._ROUTES_59; }
    if ((token === import45.BrowserXhr)) { return this._BrowserXhr_60; }
    if ((token === import46.ResponseOptions)) { return this._ResponseOptions_61; }
    if ((token === import110.XSRFStrategy)) { return this._XSRFStrategy_62; }
    if ((token === import47.XHRBackend)) { return this._XHRBackend_63; }
    if ((token === import48.RequestOptions)) { return this._RequestOptions_64; }
    if ((token === import111.Http)) { return this._Http_65; }
    if ((token === import49.ContentService)) { return this._ContentService_66; }
    if ((token === import50.NgbAlertConfig)) { return this._NgbAlertConfig_67; }
    if ((token === import51.NgbProgressbarConfig)) { return this._NgbProgressbarConfig_68; }
    if ((token === import52.NgbTooltipConfig)) { return this._NgbTooltipConfig_69; }
    if ((token === import53.NgbTypeaheadConfig)) { return this._NgbTypeaheadConfig_70; }
    if ((token === import54.NgbAccordionConfig)) { return this._NgbAccordionConfig_71; }
    if ((token === import55.NgbCarouselConfig)) { return this._NgbCarouselConfig_72; }
    if ((token === import56.NgbCalendar)) { return this._NgbCalendar_73; }
    if ((token === import57.NgbDatepickerI18n)) { return this._NgbDatepickerI18n_74; }
    if ((token === import58.NgbDateParserFormatter)) { return this._NgbDateParserFormatter_75; }
    if ((token === import59.NgbDatepickerService)) { return this._NgbDatepickerService_76; }
    if ((token === import60.NgbDatepickerConfig)) { return this._NgbDatepickerConfig_77; }
    if ((token === import61.NgbDropdownConfig)) { return this._NgbDropdownConfig_78; }
    if ((token === import62.NgbPaginationConfig)) { return this._NgbPaginationConfig_79; }
    if ((token === import63.NgbPopoverConfig)) { return this._NgbPopoverConfig_80; }
    if ((token === import64.NgbRatingConfig)) { return this._NgbRatingConfig_81; }
    if ((token === import65.NgbTabsetConfig)) { return this._NgbTabsetConfig_82; }
    if ((token === import66.NgbTimepickerConfig)) { return this._NgbTimepickerConfig_83; }
    if ((token === import5.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_84; }
    if ((token === import97.LocationStrategy)) { return this._LocationStrategy_85; }
    if ((token === import67.Location)) { return this._Location_86; }
    if ((token === import68.UrlSerializer)) { return this._UrlSerializer_87; }
    if ((token === import69.RouterOutletMap)) { return this._RouterOutletMap_88; }
    if ((token === import112.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_89; }
    if ((token === import100.Router)) { return this._Router_90; }
    if ((token === import113.ActivatedRoute)) { return this._ActivatedRoute_91; }
    if ((token === import71.PreloadAllModules)) { return this._PreloadAllModules_92; }
    if ((token === import71.PreloadingStrategy)) { return this._PreloadingStrategy_93; }
    if ((token === import71.RouterPreloader)) { return this._RouterPreloader_94; }
    if ((token === import71.NoPreloading)) { return this._NoPreloading_95; }
    if ((token === import5.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_96; }
    if ((token === import87.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_97; }
    if ((token === import72.DataResolver)) { return this._DataResolver_98; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__31.ngOnDestroy();
    this._DomSharedStylesHost_43.ngOnDestroy();
    this._RouterPreloader_94.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);