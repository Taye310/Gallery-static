<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";

export default {
  name: "Home",
  components: {},
  mounted() {
    this.loadArcgis();
  },
  methods: {
    loadArcgis() {
      console.log("load map");
      const map = new Map({
        basemap: "arcgis-topographic",
        apiKey:
          "AAPK25c6631b06674327afd18d465f9b06a9Ar7HDuITkhg8SoD-SmLiYND0FCT92WdNSN9j-FO6MDO6xXAS4wsRI9RQm3HpKK6K",
      });
      const view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
          position: {
            x: -118.808, //Longitude
            y: 33.961, //Latitude
            z: 2000, //Meters
          },
          tilt: 75,
        },
      });
    },
  },
};
</script>

<style scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 500px;
  width: 500px;
}
</style>