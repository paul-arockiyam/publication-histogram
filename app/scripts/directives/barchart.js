'use strict';

/**
 * @ngdoc directive
 * @name publicationsApp.directive:barChart
 * @description
 * # barChart
 */
angular.module('publicationsApp')
  .directive('barChart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
	  scope: {
	    chartOptions: '='
	  },      
      link: function postLink(scope, element, attrs) {
		Highcharts.chart(element[0], {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: scope.chartOptions.title
		    },
		    credits: {
		        enabled: false
		    },
			legend: {
        		enabled: false
    		},		    
		    xAxis: {
		    	//categories : scope.chartOptions.categories,
		        title: {
		            text: 'Year'
		        },
		        crosshair: true	        
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Number Of Publications'
		        }
		    },
		    tooltip: {
		        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		        footerFormat: '</table>',
		        shared: true,
		        useHTML: true
		    },
		    plotOptions: {
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0
		        }
		    },
		    series:[{
		    	data:scope.chartOptions.chartData
		    }]
		});        
      }
    };
  });