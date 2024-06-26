import Feature from "https://cdn.skypack.dev/ol/Feature";
import Map from "https://cdn.skypack.dev/ol/Map";
import OSM from "https://cdn.skypack.dev/ol/source/OSM";
import Point from "https://cdn.skypack.dev/ol/geom/Point";
import TileLayer from "https://cdn.skypack.dev/ol/layer/Tile";
import VectorLayer from "https://cdn.skypack.dev/ol/layer/Vector";
import VectorSource from "https://cdn.skypack.dev/ol/source/Vector";
import View from "https://cdn.skypack.dev/ol/View";
import { fromLonLat } from "https://cdn.skypack.dev/ol/proj";

// Create a map instance
const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: fromLonLat([80, 20]),
        zoom: 5
    })
});

// Create a marker feature
const marker = new Feature({
    geometry: new Point(fromLonLat([80, 20]))

});

// Create a vector source and add the marker to it
const vectorSource = new VectorSource({
    features: [marker]
});

// Create a vector layer using the vector source
const vectorLayer = new VectorLayer({
    source: vectorSource
});

// Add the vector layer to the map
map.addLayer(vectorLayer);
