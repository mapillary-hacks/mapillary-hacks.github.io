var toggleableLayerIds = ['benches', 'bikes', 'billboards', 'bridges', 'crosswalks', 'trash bins', 'tunnels', 'vegetation','water'];
var colors = ['red', 'yellow', 'orange', 'brown', 'white', 'pink', 'purple', 'magenta', 'green', 'blue'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
    var col = colors[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = '';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        try {
          map.removeLayer('selection');
          map.removeSource('selection');
          popup.remove();
        } catch (error) {
          //do nothing
        }
        e.preventDefault();
        e.stopPropagation();
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';

        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
