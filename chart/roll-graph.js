function rand() {
    return Math.random();
  }
  
  var time = new Date();
  
  var data = [{
    x: [time],
    y: [rand],
    mode: 'lines',
    line: {color: '#80CAF6'}
  }]
  
const rollgraph = document.querySelector('#roll')

  Plotly.newPlot(rollgraph, data);
  
  var cnt = 0;
  
  var interval = setInterval(function() {
  
    var time = new Date();
  
    var update = {
    x:  [[time]],
    y: [[rand()]]
    }
  
    var olderTime = time.setMinutes(time.getMinutes() - 1);
    var futureTime = time.setMinutes(time.getMinutes() + 1);
  
    var minuteView = {
          xaxis: {
            type: 'date',
            range: [olderTime,futureTime]
          }
        };
  
    Plotly.relayout(rollgraph, minuteView);
    Plotly.extendTraces(rollgraph, update, [0])
  
    //if(++cnt === 100) clearInterval(interval);
  }, 1000);