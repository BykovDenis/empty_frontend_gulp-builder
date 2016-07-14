(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var trainingApp = angular.module('trainingApp', []);

trainingApp.controller('MainController', ['$scope', function ($scope) {
  $scope.colors = ['green', 'red', 'white', 'blue', 'yellow', 'black'];
  $scope.application = 'today';
}]);

},{}],2:[function(require,module,exports){
//import React from 'react';
"use strict";

},{}]},{},[2,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxzY3JpcHQuanMiLCJhc3NldHNcXGpzeFxcYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksY0FBYyxRQUFRLE1BQVIsQ0FBZSxhQUFmLEVBQThCLEVBQTlCLENBQWxCOztBQUVBLFlBQVksVUFBWixDQUF1QixnQkFBdkIsRUFBeUMsQ0FBQyxRQUFELEVBQVcsVUFBUyxNQUFULEVBQWdCO0FBQ2xFLFNBQU8sTUFBUCxHQUFjLENBQUMsT0FBRCxFQUFTLEtBQVQsRUFBZSxPQUFmLEVBQXVCLE1BQXZCLEVBQThCLFFBQTlCLEVBQXVDLE9BQXZDLENBQWQ7QUFDQSxTQUFPLFdBQVAsR0FBcUIsT0FBckI7QUFDRCxDQUh3QyxDQUF6Qzs7O0FDSkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHRyYWluaW5nQXBwID0gYW5ndWxhci5tb2R1bGUoJ3RyYWluaW5nQXBwJywgW10pO1xyXG5cclxudHJhaW5pbmdBcHAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSl7XHJcbiAgJHNjb3BlLmNvbG9ycz1bJ2dyZWVuJywncmVkJywnd2hpdGUnLCdibHVlJywneWVsbG93JywnYmxhY2snXTtcclxuICAkc2NvcGUuYXBwbGljYXRpb24gPSAndG9kYXknO1xyXG59XSk7XHJcbiIsIi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuIl19
