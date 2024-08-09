<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;
use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->setDefaultNamespace('App\Controllers');
// $routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);
$routes->resource('users');

// $routes->group('', ['filter' => 'cors'], static function (RouteCollection $routes): void {
//     $routes->options('user', '\Dummy');
//     $routes->options('user/(:any)', '\Dummy');
//     $routes->resource('users');
// });

// $routes->group('api', ['filter' => 'cors'], static function (RouteCollection $routes): void {
//     $routes->resource('users');

//     $routes->options('users', static function () {
//         // Implement processing for normal non-preflight OPTIONS requests,
//         // if necessary.
//         $response = response();
//         $response->setStatusCode(204);
//         $response->setHeader('Allow:', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');

//         return $response;
//     });
//     $routes->options('users/(:any)', static function () {});
// });