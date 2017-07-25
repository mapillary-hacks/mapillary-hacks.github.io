var geojsonURL = "";

function uncheck1() {
  document.getElementById("closeTo").checked = false;
  console.log('unchecked closeTo');
  document.getElementById("lookAt").checked = false;
  console.log('unchecked lookAt');
};

function uncheck2() {
  document.getElementById("bbox").checked = false;
  console.log('unchecked bbox');
};

function geojson() {
  try {
      map.removeLayer("grid");
      map.removeSource("grid");
  } catch (err) {
      // Do nothing the layers just does not exists
  }
  map.addSource('grid', {
  "type": "geojson",
  "data": grid
  });
  map.addLayer({
       'id': 'grid',
       'type': 'line',
       'source': 'grid',
       'layout': {
           'visibility': 'visible'
       },
       'paint': {
            'line-color': 'red',
            'line-opacity': 0.85,
            'line-width': 2
        }
  });
}

function clearMap() {
  map.removeLayer('grid');
  map.removeSource('grid');
  console.log('Clearing map...');
}

function download() {
    var text = JSON.stringify(grid);
    var name = 'square.geojson';
    var type = 'text/plain';
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
