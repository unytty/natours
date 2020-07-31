/* eslint-disable*/
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidW55dHR5IiwiYSI6ImNrY2o4aDV3MzFnZGoydHAwdWJ5c3Uwam4ifQ.Qcrmah1KMQjIyEzPP62a7w';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/unytty/ckcj8zwe40zqx1jo5oyel6hxp',
    scrollZoom: false,
    //   center: [-118, 34],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //create marker
    const el = document.createElement('div');
    el.className = 'marker'; // style.css

    //Add maker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current locations
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
