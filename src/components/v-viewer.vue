<template>
  <div class="v-viewer">
    <!-- component -->
    <viewer :images="images">
      <img
        v-for="(src, index) in images"
        :key="index"
        :src="src.thumbnail"
        :data-src="src.source"
      />
    </viewer>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import Vue from "vue";
Vue.use(VueViewer);

const axios = require("axios").default;

export default {
  data() {
    return {
      options: {
        url: "data-src",
      },
      images: [
        {
          thumbnail: "https://picsum.photos/200/200",
          source: "https://picsum.photos/300/200",
        },
        {
          thumbnail: "https://picsum.photos/250/200",
          source:
            "https://providencezhang.ddns.net:8031/shares/root/pics/2021.11.7/Export/DSC_7470.jpg",
        },
      ],
    };
  },
  mounted() {
    this.getPhotos();
  },
  methods: {
    getPhotos() {
      axios.get("api/photo/random/").then((response) => {
        console.log(response.data);
        let photos = response.data.data;
        photos.forEach((photo) => {
          console.log(photo.link);
          if (photo.link.substr(0, 2) == "./") {
            this.images.push({
              thumbnail:
                "https://providencezhang.ddns.net:8031/shares/" + photo.link,
              source:
                "https://providencezhang.ddns.net:8031/shares/" + photo.link,
            });
          }
        });
      });
    },
  },
};
</script>