var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

L.geoJSON(content.JSON).addTo(map);
