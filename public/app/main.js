window.name = 'NG_DEFER_BOOTSTRAP!';

define([
  'require',
  'jquery',
  'angular',
  'domReady',
  
  'app',
  'modules-includes'
], function(require, $, ng, domReady) {
  'use strict';

  domReady(function(document) {
    ng.bootstrap(document, ['app']);
    ng.resumeBootstrap();
  })
})