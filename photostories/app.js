var client_id = "UTZhSnNFdGpxSEFFREUwb01GYzlXZzpkNTRmOTk5NzQ2N2E3ZDAy";
var currentImage = images[0];
if (typeof xcoords !== 'undefined') {
  var currentX = xcoords[0];
}
if (typeof ycoords !== 'undefined') {
  var currentY = ycoords[0];
}
if (typeof xcoords == 'undefined') {
  var currentX = '.5';
}
if (typeof ycoords == 'undefined') {
  var currentY = '.5';
}

if (qs["embed"] == 'true') {
  $(".hide").hide();
}

function caFind(num) {
    var angles = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345]
    var curr = angles[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < angles.length; val++) {
        var newdiff = Math.abs (num - angles[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = angles[val];
        }
    }
    return curr;
}

var myImage=0

function nextImage() {
    $("#image"+myImage).toggleClass("currImg");
    if (myImage < images.length-1) {
    myImage=myImage+1;
    console.log(myImage);
    } else {
      myImage=images.length-1;
      console.log(myImage);
    };
    if (myImage % 3 == 0 && myImage != images.length-1) {
      $("#div"+(myImage-5)).hide('slow');
      $("#div"+(myImage-4)).hide('slow');
      $("#div"+(myImage-3)).hide('slow');
      $("#div"+(myImage-2)).hide('slow');
      $("#div"+(myImage-1)).hide('slow');
    }
  $("#image"+myImage).toggleClass("currImg");
  currentImage = images[myImage];
  if (typeof xcoords !== 'undefined') {
    currentX = xcoords[myImage];
  }
  if (typeof ycoords !== 'undefined') {
    currentY = ycoords[myImage];
  }
    var url = "https://a.mapillary.com/v3/images/" + images[myImage] + "?client_id=" + client_id;
    var lng;
    var lat;
    $.ajax({
      dataType: "json",
      url: url,
      async: false,
      success: function (data) {
        lng = data.geometry.coordinates[0];
        lat = data.geometry.coordinates[1];
        ca = data.properties.ca;

        map.removeLayer("point");
        map.removeSource("point");
        var currCa = caFind(ca);

        var geojson = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [lng, lat]
                },
                "properties": {
                          "angle": currCa
                }
            }]
        };

         map.addSource('point', {
        "type": "geojson",
        "data": geojson
        });

        map.addLayer({
          "id": "point",
          "type": "symbol",
          "source": "point",
          "layout": {
              "icon-image": "cur-ca-{angle}"
          }
        });


      }
    })
    map.flyTo({
        center: [lng, lat],
        zoom: 15,
    });
    mly.moveToKey(currentImage).then(
    function(node) {
        mly.setCenter([currentX, currentY]);
        console.log(currentX);
    },
    function(error) { console.error(error); });
    $("#place").empty().append("<h3 class='slideTitle'>" + titles[myImage] + "</h3>")
    $("#content").empty().append("<h4 class='slideContent'>" + content[myImage] + "</h4>")
  };

function prevImage() {
  $("#image"+myImage).toggleClass("currImg");
    if (myImage > 0) {
    myImage=myImage-1;
    console.log(myImage);
  } else {
    myImage=0;
    console.log(myImage);
  }
  $("#image"+myImage).toggleClass("currImg");
  currentImage = images[myImage];
  if (typeof xcoords !== 'undefined') {
    currentX = xcoords[myImage];
  }
  if (typeof ycoords !== 'undefined') {
    currentY = ycoords[myImage];
  }
    var url = "https://a.mapillary.com/v3/images/" + images[myImage] + "?client_id=" + client_id;
    $.ajax({
      dataType: "json",
      url: url,
      success: function (data) {
        console.log(data.geometry.coordinates);
        lng = data.geometry.coordinates[0];
        lat = data.geometry.coordinates[1];
        ca = data.properties.ca;
        console.log(ca);
        map.flyTo({
            center: [lng, lat],
            zoom: 15,
            pitch: 20
        });
        map.removeLayer("point");
        map.removeSource("point");
        var currCa = caFind(ca);

        var geojson = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [lng, lat]
                },
                "properties": {
                          "angle": currCa
                }
            }]
        };

         map.addSource('point', {
        "type": "geojson",
        "data": geojson
        });

        map.addLayer({
          "id": "point",
          "type": "symbol",
          "source": "point",
          "layout": {
              "icon-image": "cur-ca-{angle}"
          }
        });
      }
    })
    mly.moveToKey(currentImage).then(
    function(node) {
        mly.setCenter([currentX, currentY]);
        console.log(currentX);
    }),
    $("#place").empty().append("<h3 class='slideTitle'>" + titles[myImage] + "</h3>")
    $("#content").empty().append("<p class='slideContent'>" + content[myImage] + "</p>")
};

function loadImage(image) {
  $(".img").click(function() {
    $("#image"+myImage).toggleClass("currImg");
      myImage=image
      console.log(image);
    $("#image"+myImage).toggleClass("currImg");
     currentImage = 0;
     currentImage = images[image];
     currentImage = images[myImage];
     if (typeof xcoords !== 'undefined') {
       currentX = xcoords[myImage];
     }
     if (typeof ycoords !== 'undefined') {
       currentY = ycoords[myImage];
     }
     var url = "https://a.mapillary.com/v3/images/" + images[image] + "?client_id=" + client_id;
     $.ajax({
       dataType: "json",
       url: url,
       success: function (data) {
         console.log(data.geometry.coordinates);
         lng = data.geometry.coordinates[0];
         lat = data.geometry.coordinates[1];
         ca = data.properties.ca;
         console.log(ca);
         map.flyTo({
             center: [lng, lat],
             zoom: 15,
             pitch: 20
         });
         map.removeLayer("point");
         map.removeSource("point");
         var currCa = caFind(ca);

         var geojson = {
             "type": "FeatureCollection",
             "features": [{
                 "type": "Feature",
                 "geometry": {
                     "type": "Point",
                     "coordinates": [lng, lat]
                 },
                 "properties": {
                           "angle": currCa
                 }
             }]
         };

          map.addSource('point', {
         "type": "geojson",
         "data": geojson
         });

         map.addLayer({
           "id": "point",
           "type": "symbol",
           "source": "point",
           "layout": {
               "icon-image": "cur-ca-{angle}"
           }
         });

       }
     });

//     $("#mly").empty().append("<script>var mly = new Mapillary.Viewer('mly','UTZhSnNFdGpxSEFFREUwb01GYzlXZzpkNTRmOTk5NzQ2N2E3ZDAy',currentImage,{component: {attribution: false,cover: false,direction: {distinguishSequence: true,maxWidth: 460,minWidth: 180},imagePlane: {imageTiling: true},stats: true},renderMode: Mapillary.RenderMode.Fill});</script>");
     mly.moveToKey(currentImage).then(
     function(node) {
         mly.setCenter([currentX, currentY]);
         console.log(currentX);
     }),
     $("#place").empty().append("<h3 class='slideTitle'>" + titles[image] + "</h3>")
     $("#content").empty().append("<h4 class='slideContent'>" + content[image] + "</h4>")
     image = 77777777777777;
  });
};

$(document).ready(

  function load() {

    $("#title").empty().append("<h1 style='padding: 10;'>" + project_title + "</h1>")
    $("#subtitle").empty().append("<h3 style='padding: 10;'>" + project_subtitle + "</h3>")
    $("#place").empty().append("<h3 class='slideTitle'>" + titles[0] + "</h3>")
    $("#content").empty().append("<h4 class='slideContent'>" + content[0] + "</p>")
    for (i = 0; i < images.length; i++) {
      $("#gallery").append(
        "<div class='img' id='div" +i+"'><img src='https://d1cuyjsrcm0gby.cloudfront.net/"+images[i]+"/thumb-320.jpg' id=image" + i +" href='#' onclick='loadImage(" + i + ")' title='" + titles[i] + "'></div>"
      );
    }
    var url = "https://a.mapillary.com/v3/images/" + images[0] + "?client_id=" + client_id;
    $.ajax({
      dataType: "json",
      url: url,
      async: false,
      success: function (data) {
//        coords.push(data.geometry.coordinates);
        console.log(data.geometry.coordinates);
        lng = data.geometry.coordinates[0];
        lat = data.geometry.coordinates[1];
        ca = data.properties.ca;
        console.log(ca);
        map.flyTo({
            center: [lng, lat],
            zoom: 15,
            pitch: 20
        });
      var currCa = caFind(ca);
      console.log(currCa);
      var geojson = {
          "type": "FeatureCollection",
          "features": [{
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [lng, lat]
              },
              "properties": {
                        "angle": currCa
              }
          }]
      };

      map.addSource('point', {
      "type": "geojson",
      "data": geojson
      });

      map.addLayer({
        "id": "point",
        "type": "symbol",
        "source": "point",
        "layout": {
            "icon-image": "cur-ca-{angle}"
        }
      });

      }
    });

    $("#image0").toggleClass("currImg");
  }
);
