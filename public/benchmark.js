var Benchmark = require('benchmark');
var random = require('math-random')

var suite = new Benchmark.Suite;

// add tests
suite.add('bubble', function() {
    var array = prepare();
    bubble(array);
})
suite.add('quicksort', function() {
    var array = prepare();
    quicksort(array);
})
// add listeners
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

function prepare() {
    result = [];
    for (var i = 1; i < 10000; i++) {
        result.push(random());
    }
    return result;
}

//n^2
function bubble(arr) { 
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ // this was missing
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }

// n log(n);
function quicksort(data) {
    if (data.length == 0) return [];
  
    var left = [], right = [], pivot = data[0];
  
    for (var i = 1; i < data.length; i++) {
        if(data[i] < pivot)
            left.push(data[i])
        else
            right.push(data[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
}
