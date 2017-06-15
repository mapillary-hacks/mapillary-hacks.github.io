var count = 0;

function mlyAdd() {
    console.log(count);
    switch (count) {
      case 0:
        mapillaryBtn.style.backgroundColor = "#00bcff";
        var mapillarySource = {
            type: 'vector',
            tiles: ['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'],
            minzoom: 0,
            maxzoom: 14,
        };
        map.addSource('mapillary', mapillarySource);
        map.addLayer({
            'id': 'mapillary-all',
            'type': 'circle',
            'source': 'mapillary',
            'source-layer': 'mapillary-sequence-overview',
            'paint': {
                'circle-opacity': 0.75,
                'circle-color':   'rgb(53, 175, 109)',
                'circle-radius':   2
            }
        }, 'mapillary-o');
        map.addLayer({
           'id': 'mapillary-all2',
           'type': 'line',
           'source': 'mapillary',
           'source-layer': 'mapillary-sequences',
           'layout': {
               'line-cap': 'round',
               'line-join': 'round'
           },
           'paint': {
               'line-opacity': 0.75,
               'line-color':   'rgb(53, 175, 109)',
               'line-width':   2
           }
        }, 'mapillary');
        count = 1;
        break;
      case 1:
        mapillaryBtn.style.background = "#5D6671";
        map.removeSource('mapillary');
        map.removeLayer('mapillary-all');
        map.removeLayer('mapillary-all2');
        count = 0;
        break;
    };
};

function statsDisplay(){
  $("#map").empty;
  $("#statsdisplay").css('background', "#00bcff");
  $("#mapdisplay").css('background', "#5D6671");
  $("#map").load("stats.html");
  $("#slider").disable;

}
function mapDisplay(){
  $("#map").empty;
  $("#mapdisplay").css('background', "#00bcff");
  $("#statsdisplay").css('background', "#5D6671");
  $("#map").load("map.html");
  $("#slider").enable;
  if (count == 1) {
    var mapillarySource = {
        type: 'vector',
        tiles: ['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'],
        minzoom: 0,
        maxzoom: 14,
    };
    map.addSource('mapillary', mapillarySource);
    map.addLayer({
        'id': 'mapillary-all',
        'type': 'circle',
        'source': 'mapillary',
        'source-layer': 'mapillary-sequence-overview',
        'paint': {
            'circle-opacity': 0.75,
            'circle-color':   'rgb(53, 175, 109)',
            'circle-radius':   2
        }
    }, 'mapillary-o');
    map.addLayer({
       'id': 'mapillary-all2',
       'type': 'line',
       'source': 'mapillary',
       'source-layer': 'mapillary-sequences',
       'layout': {
           'line-cap': 'round',
           'line-join': 'round'
       },
       'paint': {
           'line-opacity': 0.75,
           'line-color':   'rgb(53, 175, 109)',
           'line-width':   2
       }
    }, 'mapillary');
  }
}
