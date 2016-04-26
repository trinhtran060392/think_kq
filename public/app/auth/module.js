define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-messages'
], function (ng, couchPotato) {
  'use strict';

  var module = ng.module('app.auth', ['ui.router', 'ngMessages']);

  module.config(['$stateProvider', '$couchPotatoProvider', function ($stateProvider, $couchPotatoProvider) {
    $stateProvider.state('app.login', {
      url: '/login',
      views: {
        'content@app': {
          templateUrl: 'app/auth/views/login.tpl.html',
          controller:'LoginCtrl',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'auth/controllers/login-ctrl'
            ])
          }
        }
      },
      data: {
        title: 'Login'
      }
    }).state('app.register', {
      url: '/register',
      views: {
        'content@app': {
          templateUrl: 'app/auth/views/register.tpl.html',
          controller:'RegisterCtrl',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'auth/controllers/register-ctrl',
              'auth/directives/compare-pass'
            ])
          }
        }
      },
      data: {
        title: 'Register'
      }
    }).state('app.recover', {
      url: '/recover',
      views: {
        'content@app': {
          templateUrl: 'app/auth/views/recover-pass.tpl.html',
          controller:'RecoverCtrl',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies([
              'auth/controllers/recover-pass-ctrl'
              
            ])
          }
        }
      },
      data: {
        title: 'Register'
      }
    });
  }]);

  couchPotato.configureApp(module);

  module.run(function($couchPotato) {
    module.lazy = $couchPotato;
  });

  return module;
})