/**
  Copyright (c) 2015, 2025, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./dropdown-chart-view.html', './dropdown-chart-viewModel', 'text!./component.json', 'css!./dropdown-chart-styles.css'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('dropdown-chart', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);