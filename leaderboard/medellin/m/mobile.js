var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

lowfilter = ["in", "Id",...low]
medfilter = ["in", "Id",...med]
highfilter = ["in", "Id",...high]

function mlyInit() {
  console.log("adding Mapillary source");
  var mapillarySource = {
      type: 'vector',
      tiles: ['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'],
      minzoom: 0,
      maxzoom: 14,
  };
  map.addSource('mapillary', mapillarySource);
  map.addSource('mapillarySlider', mapillarySource);
  map.addSource('maptime', {
      'type': 'geojson',
      'data': '../square.geojson'
  });
}

function mlyAdd() {
    console.log(count);
    switch (count) {
      case 0:
        mapillaryBtn.style.backgroundColor = "#00bcff";
        try {
          var mapillarySource = {
              type: 'vector',
              tiles: ['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'],
              minzoom: 0,
              maxzoom: 14,
          };
          map.addSource('mapillarySource', mapillarySource);
        } catch (err) {
          // Do nothing the layer already exists
        }
        try {
          map.addLayer({
              'id': 'mapillary-all',
              'type': 'circle',
              'source': 'mapillarySource',
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
             'source': 'mapillarySource',
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
        } catch (err) {
          //Do nothing
        }
      case 1:
        mapillaryBtn.style.background = "#5D6671";
        try {
          map.removeLayer('mapillary','mapillary-o');
          map.removeSource('mapillarySource');
          mlyInit();
        } catch (err) {
          // Do nothing the layers just does not exists
        }
        try {
          map.removeLayer('mapillary-all');
          map.removeLayer('mapillary-all2');
        } catch (err) {
          // Do nothing
        }
        count = 0;
        break;
    }
}

function statsDisplay(){
  $("#map").empty;
  $("#bottom").toggle();
  $("#statsdisplay").css('background', "#00bcff");
  $("#mapdisplay").css('background', "#5D6671");
  $("#map").load("stats.html");
  $("#slider").toggle();
  $("#slider-value").toggle();
  if (count == 1) {
    mlyAdd();
    count3 = 3;
    console.log('count3 equals ' + count3);
  }
  if (count4 == 4) {
    maptimeAdd();
    count5 = 5;
    console.log('count5 equals ' + count5);
  }
}
function mapDisplay(){
  $("#map").empty;
  $("#bottom").toggle();
  $("#mapdisplay").css('background', "#00bcff");
  $("#statsdisplay").css('background', "#5D6671");
  $("#map").load("map.html");
  $("#slider").toggle();
  $("#slider-value").toggle();
  if (count3 == 3 ) {
    setTimeout(function() {
      mlyAdd();
      count3 = 0;
      console.log('count3 equals ' + count3);
    }, 500);
  }
  if (count5 == 5) {
    setTimeout(function() {
      maptimeAdd();
      count5 = 0;
      console.log('count5 equals ' + count5);
    }, 500);
  }
}

function mapLoadInitial(){
  $("#map").empty;
  $("#bottom").toggle();
  $("#bottom2").toggle();
  $("#mapdisplay").css('background', "#00bcff");
  $("#statsdisplay").css('background', "#5D6671");
  $("#map").load("map.html");
  if (count3 == 3 ) {
    setTimeout(function() {
      mlyAdd();
      count3 = 0;
      console.log('count3 equals ' + count3);
    }, 1000);
  }

}

function maptimeAdd() {
    console.log(count4);
    switch (count4) {
      case 0:
        challengeBtn.style.backgroundColor = '#00bcff';
        map.addSource('maptime', {
            'type': 'geojson',
            'data': '../square.geojson'
        });
        count2 = 1;
        count4 = 4;
        map.addLayer({
            'id': 'maptimelayer-low',
            'type': 'fill',
            'source': 'maptime',
            'filter': ['all',
                    lowfilter],
            'paint': {
                'fill-color': 'red',
                'fill-outline-color' : "white",
//                {
//                  'property': 'fill',
//                  'type': 'identity'
//                },
                'fill-opacity': .65
            }
        });
        map.addLayer({
            'id': 'maptimelayer-med',
            'type': 'fill',
            'source': 'maptime',
            'filter': ['all',
                    medfilter],
            'paint': {
                'fill-color': 'gold',
                'fill-outline-color' : "white",
                'fill-opacity': .65
            }
        });
        map.addLayer({
            'id': 'maptimelayer-high',
            'type': 'fill',
            'source': 'maptime',
            'filter': ['all',
                    highfilter],
            'paint': {
                'fill-color': 'green',
                'fill-outline-color' : "white",
//                {
//                  'property': 'fill',
//                  'type': 'identity'
//                },
                'fill-opacity': .65
            }
        });
        map.addLayer({
          "id": "maptime-label",
          "type": "symbol",
          "source": "maptime",
          "layout": {
            "text-field": "{Id}",
            "text-font": [
              "DIN Offc Pro Medium",
              "Arial Unicode MS Bold"
            ],
            "text-size": 12
          },
          'paint': {
                  'text-color': 'white'
          }
        });
        break;
      case 4:
        challengeBtn.style.backgroundColor = "#5D6671";
//        maptime.style.color = "#000";
        count2 = 0;
        count4 = 0;
        console.log(count4);
        map.removeLayer('maptimelayer-low');
        map.removeLayer('maptimelayer-med');
        map.removeLayer('maptimelayer-high');
        map.removeLayer('maptime-label');
        map.removeSource('maptime');
        break;
    };
};
