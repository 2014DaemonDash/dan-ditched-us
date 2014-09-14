var arr = [];
var x = 0;

function myYRangeFunction(range) {
    // TODO implement your calculation using range.min and range.max
    var min = 0;
    var max = 20;
    return {min: min, max: max};
}

var chart = new SmoothieChart({millisPerPixel:55,
                               grid:{strokeStyle:'rgba(150,150,150,0.74)',millisPerLine:5000,verticalSections:0},
                               labels:{fontSize:10},
                               timestampFormatter:SmoothieChart.timeFormatter,
                               maxValue:20,
                               minValue:-5,
                               yRangeFunction:myYRangeFunction}),
    canvas = document.getElementById('canvas'),
    series = new TimeSeries();

// Add a random value to each line every second
setInterval(function() {

      series.append(new Date().getTime(), arr[x]);
      console.log(arr[x]);
      x++;
    
}, 1000);

chart.addTimeSeries(series, {lineWidth:2,strokeStyle:'#00fcdf',fillStyle:'rgba(12,252,223,0.30)'});
chart.streamTo(canvas, 623);
