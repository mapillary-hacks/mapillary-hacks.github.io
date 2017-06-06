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

function generate() {
  var clientid = $('#clientid').val();
  var searchType = $('#searchType').val();
  var bbox = "";
  var closeto = "";
  var lookat = "";
  var start_time = "";
  var end_time = "";
  var usernames = "";
  var userkeys = "";
  if (document.getElementById('bbox').checked) {
    var bboxlng1 = $('#bboxlng1').val();
    var bboxlat1 = $('#bboxlat1').val();
    var bboxlng2 = $('#bboxlng2').val();
    var bboxlat2 = $('#bboxlat2').val();
    bbox = ('&bbox=' + bboxlng1 + ',' + bboxlat1 + ',' + bboxlng2 + ',' + bboxlat2);
  };
  if (document.getElementById('closeTo').checked) {
    var closetolng = $('#closetolng').val();
    var closetolat = $('#closetolat').val();
    closeto = ('&closeto=' + closetolng + ',' + closetolat);
  };
  if (document.getElementById('lookAt').checked) {
    var lookatlng = $('#lookatlng').val();
    var lookatlat = $('#lookatlat').val();
    lookat = ('&lookat=' + lookatlng + ',' + lookatlat);
  };
  if (document.getElementById('start_time').checked) {
    var start_date = $('#start_date').val();
    start_time = ('&start_time=' + start_date);
  };
  if (document.getElementById('end_time').checked) {
    var end_date = $('#end_date').val();
    end_time = ('&end_time=' + end_date);
  };
  if (document.getElementById('usernames').checked) {
    var usernames_value = $('#usernames_value').val();
    usernames = ('&usernames=' + usernames_value);
  };
  if (document.getElementById('userkeys').checked) {
    var userkeys_value = $('#userkeys_value').val();
    userkeys = ('&userkeys=' + userkeys_value);
  };
  $('#apiCall').val("");
  $('#apiCall').val('https://a.mapillary.com/v3/' + searchType + '?client_id=' + clientid + bbox + closeto + lookat + start_time + end_time + usernames + userkeys);
  geojsonURL = $('#apiCall').val();
};

function geojson() {
  $(function() {
     $.getScript('turf.min.js');
  });
  try {
      map.removeLayer("points");
      map.removeSource("points");
  } catch (err) {
      // Do nothing the layers just does not exists
  }
  $.ajax({
    dataType: "json",
    url: geojsonURL,
    success: function (data) {
      var lng = JSON.stringify(data.features[0]["geometry"]["coordinates"][0]);
      var lat = JSON.stringify(data.features[0]["geometry"]["coordinates"][1]);
      console.log(lng + ',' + lat);
      var searchType = $('#searchType').val();
      if (searchType == "images") {
        map.addSource('points', {
        "type": "geojson",
        "data": data
        });
        map.addLayer({
             'id': 'points',
             'type': 'circle',
             'source': 'points',
             'layout': {
                 'visibility': 'visible'
             },
             'paint': {
                 'circle-opacity': 0.45,
                 'circle-radius': 5,
                 'circle-color':   'rgb(53, 175, 109)',
             }
         });
        console.log("Searching for " + searchType);
        var bounds = new mapboxgl.LngLatBounds();
        data.features.forEach(function(feature) {
            bounds.extend(feature.geometry.coordinates);
        });
        map.fitBounds(bounds, {padding: 20});
      } else if (searchType == "sequences") {
        map.addSource('points', {
        "type": "geojson",
        "data": data
        });
        map.addLayer({
             'id': 'points',
             'type': 'line',
             'source': 'points',
             'layout': {
                 'visibility': 'visible',
                 "line-join": "round",
                 "line-cap": "round"
             },
             'paint': {
                 'line-opacity': 0.75,
                 'line-width': 3,
                 'line-color':   'rgb(53, 175, 109)',
             }
         });
        console.log("Searching for " + searchType);
        var coordinates = data.features[0].geometry.coordinates;
        var bbox = turf.bbox(data);
        var bounds = coordinates.reduce(function(bounds, coord) {
            return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
        map.fitBounds(bbox, {padding: 20});
      };
    }
  });
}
