/**
  Copyright (c) 2015, 2025, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
  ['knockout',
    'ojL10n!./resources/nls/dropdown-chart-strings',
    'ojs/ojcontext',
    'ojs/ojarraydataprovider',
    'ojs/ojknockout',
    'ojs/ojchart',
    'ojs/ojselectsingle',
  ], function (ko, componentStrings, Context, ArrayDataProvider) {

    function ExampleComponentModel(context) {
      var self = this;

      //At the start of your viewModel constructor
      var busyContext = Context.getContext(context.element).getBusyContext();
      var options = { "description": "Web Component Startup - Waiting for data" };
      self.busyResolve = busyContext.addBusyState(options);

      self.composite = context.element;

      self.selectVal = ko.observable(context.properties.chartType ?? '');

      var browsers = [
        { value: 'pie', label: 'Pie' },
        { value: 'bar', label: 'Bar' },
      ];

      self.browsersDP = new ArrayDataProvider(browsers, { keyAttributes: 'value' });
      self.stackValue = ko.observable('off');
      self.orientationValue = ko.observable('vertical');

      self.selectVal.subscribe(() => {
        const chartTypeChangedEvent = new CustomEvent('chartTypeChanged', {
          bubbles: true,
          detail: {
            value: 'pie',
            previousValue: 'bar',
            updatedFrom: 'dropdown chart viewmodel'
          }
        });

        self.composite.dispatchEvent(chartTypeChangedEvent);

      })

      self.dataProvider = new ArrayDataProvider([
        {
          "id": 1,
          "series": "GTX 4000",
          "group": "TI",
          "value": 40
        },

        {
          "id": 2,
          "series": "GTX 3000",
          "group": "Strix",
          "value": 10
        },

        {
          "id": 3,
          "series": "GTX 2000",
          "group": "Super",
          "value": 99
        },
        {
          "id": 4,
          "series": "GTX 5000",
          "group": "IDK",
          "value": 199
        },
      ], { keyAttributes: 'id' })

      self.properties = context.properties;
      self.res = componentStrings['dropdown-chart'];
      // Example for parsing context properties
      if (context.properties.name) {

      }

      //Once all startup and async activities have finished, relocate if there are any async activities
      self.busyResolve();
    };

    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnected = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
  });
