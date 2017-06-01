# Skiing with Mapillary

This demo was created using Amy Lee Walton's [ski themed based map](https://www.mapbox.com/blog/ski-mapbox-studio/).

Important parts:

* Adding basemap from the included `cij1zoclj002y8rkkdjl69psd.json`
* Adding Mapillary sprites to the JSON, in the line that reads `"sprite":`, so it points to `"assets/sprites"`
* Adding Mapillary vector tiles, see here: https://www.mapillary.com/developer/tiles-documentation/#coverage
* Adding Mapillary-JS, see here: https://mapillary.github.io/mapillary-js/
* Ensure that a change in node for the Mapillary-JS viewer is triggered from map clicks
* Ensure that a map click loads the Mapillary direction icon from sprites and changes the camera with `mly.moveToKey`
* Get camera angle bearing with `node.bearing` and then associate it with a direction icon using `Math.floor` to round to the nearest available value for the directional icons

Post issues here with any help requests!

Chris
