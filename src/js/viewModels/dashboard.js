/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['../accUtils', 'knockout', 'jet-composites/dropdown-chart/loader', 'jet-composites/demo-card/loader'],
 function(accUtils, ko) {
    function DashboardViewModel() {
    
      var self = this;

      self.currentChart = ko.observable();

      self.chartTypeChangeHandler = function(event){
        self.currentChart(event.detail.value);

        console.log('Type was: ' + event.detail.previousValue);
        console.log('Type is now: ' + event.detail.value);
        console.log('Type updated from: ' + event.detail.updatedFrom);
        console.log('===================');

      }
      
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

    
      this.disconnected = () => {
        // Implement if needed
      };

    
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    
    return DashboardViewModel;
  }
);
