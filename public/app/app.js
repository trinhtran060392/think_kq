'use strict';

define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-material'
], function (ng, couchPotato) {
  var app = ng.module('app', [
    'scs.couch-potato',
    'ngMaterial',
    'ngMessages',
    'ui.router',
    'app.layout',
    'app.dashboard'
  ]);

  couchPotato.configureApp(app);

  app.run(['$couchPotato', '$rootScope', '$state', '$stateParams',
    function($couchPotato, $rootScope, $state, $stateParams) {
      app.lazy = $couchPotato;
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }]);

  return app;
})