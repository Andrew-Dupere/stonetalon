import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import { OrderOfSplitName } from "i18n-iso-countries";

export const Gallery = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://18.118.218.230:8080/metrics");
        const data = response.data;

        const cityData = data
          .filter((item) => item.city)
          .map((item) => ({
            city: item.city,
            ip: item.ip,
            time: item.time,
          }));

        const geocoder = new window.geolite2.init({
          // Provide your GeoLite2 license key here
          licenseKey: "YOUR_LICENSE_KEY",
          // Specify the path to the GeoLite2 database file
          databasePath: "path/to/GeoLite2-City.mmdb",
        });

        const cityCoordinates = await Promise.all(
          cityData.map(async ({ city, ip, time }) => {
            const location = await geocoder.lookupByName(city);
            if (location) {
              const formattedTime = time.split(" ")[0];
              return [
                city,
                location.location.latitude,
                location.location.longitude,
                ip,
                formattedTime,
              ];
            }
            return null;
          })
        );

        const filteredCoordinates = cityCoordinates.filter(
          (coordinate) => coordinate !== null
        );

        setMapData({
          city: filteredCoordinates.map((coordinate) => coordinate[0]),
          lat: filteredCoordinates.map((coordinate) => coordinate[1]),
          lon: filteredCoordinates.map((coordinate) => coordinate[2]),
          customData: filteredCoordinates.map((coordinate) => [
            coordinate[3],
            coordinate[4],
          ]),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const renderMap = () => {
    if (!mapData) {
      return <div>Loading...</div>;
    }

    const data = [
      {
        type: "scattermapbox",
        lat: mapData.lat,
        lon: mapData.lon,
        mode: "markers",
        marker: { color: "forestgreen", size: 10 },
        text: mapData.city,
        hoverinfo: "text+lon+lat",
        hovertemplate:
          "<b>%{text}</b><br>IP: %{customdata[0]}<br>Time: %{customdata[1]}<extra></extra>",
        customdata: mapData.customData,
      },
    ];

    const layout = {
      mapbox: { style: "open-street-map", center: { lat: 0, lon: 0 }, zoom: 1 },
      margin: { r: 0, t: 0, l: 0, b: 0 },
    };

    return <Plot data={data} layout={layout} />;
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div onClick={toggleMap}>
                <h3>Interactive Map</h3>
                <p>Click to view the interactive map.</p>
              </div>
              {showMap && (
                <div className="map-overlay" onClick={toggleMap}>
                  <div className="map-container">{renderMap()}</div>
                </div>
              )}
            </div>
            {/* {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."} */}
          </div>
        </div>
      </div>
    </div>
  );
};