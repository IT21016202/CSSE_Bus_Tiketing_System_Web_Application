// import React, { useEffect } from "react";

// const OvercrowdView = () => {
//   useEffect(() => {
//     // Function to initialize and display the map
//     const initMap = () => {
//       // Define the map options
//       const mapOptions = {
//         center: { lat: 7.8731, lng: 80.7718 }, // Example: Colombo, Sri Lanka
//         zoom: 12,
//       };

//       // Create the map
//       const map = new window.google.maps.Map(
//         document.getElementById("map"),
//         mapOptions
//       );

//       // Define a custom marker icon (you can use your own)
//       const customMarker = {
//         url: "marker.png", // Replace with your marker image
//         size: new window.google.maps.Size(50, 50),
//         origin: new window.google.maps.Point(0, 0),
//         anchor: new window.google.maps.Point(25, 50),
//       };

//       // Create a marker and set its position and icon
//       const marker = new window.google.maps.Marker({
//         position: { lat: 7.8731, lng: 80.7718 }, // Example: Colombo, Sri Lanka
//         map: map,
//         icon: customMarker,
//       });

//       // InfoWindow for additional information
//       const infoWindow = new window.google.maps.InfoWindow({
//         content: "Potential Crowding Area in Sri Lanka",
//       });

//       // Add a click event to display the info window when the marker is clicked
//       marker.addListener("click", () => {
//         infoWindow.open(map, marker);
//       });
//     };

//     // Load the Google Maps script and initialize the map
//     const loadGoogleMapScript = () => {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBbJrc0ngniFtq7tpfVH8xK5r6UsGs7-JE&callback=initMap`;
//       script.async = true;
//       script.defer = true;
//       script.onload = initMap;
//       document.head.appendChild(script);
//     };

//     loadGoogleMapScript();
//   }, []);

//   return (
//     <div style={{ height: "400px", width: "95%", marginTop: "30px" }}>
//       <div id="map" style={{ height: "100%" }}></div>
//     </div>
//   );
// };

// export default OvercrowdView;

import React, { useEffect } from "react";

const OvercrowdView = () => {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: { lat: 7.8731, lng: 80.7718 }, // Example: Colombo, Sri Lanka
        zoom: 12,
      };

      const map = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      // Enable traffic layer
      const trafficLayer = new window.google.maps.TrafficLayer();
      trafficLayer.setMap(map);

      // Define polygon coordinates for crowded areas
      const crowdedAreaCoordinates = [
        // Example polygon coordinates
        { lat: 7.876, lng: 80.771 },
        { lat: 7.875, lng: 80.772 },
        { lat: 7.874, lng: 80.772 },
      ];

      // Create a polygon for the crowded area
      const crowdedArea = new window.google.maps.Polygon({
        paths: crowdedAreaCoordinates,
        strokeColor: "#FF0000", // Red outline
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000", // Red fill color
        fillOpacity: 0.35,
      });

      // Set the polygon on the map
      crowdedArea.setMap(map);
    };

    const loadGoogleMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBbJrc0ngniFtq7tpfVH8xK5r6UsGs7-JE&callback=initMap&libraries=traffic`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMapScript();
  }, []);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <div id="map" style={{ height: "100%" }}></div>
    </div>
  );
};

export default OvercrowdView;
