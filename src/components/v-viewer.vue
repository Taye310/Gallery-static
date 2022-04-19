<template>
  <div class="v-viewer">
    <!-- directive -->
    <div class="images" v-viewer>
      <img v-for="(src, index) in images" :key="index" :src="src.thumbnail" />
    </div>
    <!-- component -->
    <viewer :images="images">
      <img v-for="(src, index) in images" :key="index" :src="src.thumbnail" :data-src="src.source" />
    </viewer>
    <!-- api -->
    <button type="button" @click="show">Click to show</button>
    <div v-viewer="options" class="tests">
      <template v-for="(src, index) in images">
        <img 
          :src="src.thumbnail" class="test" :key="index"
          :data-src="src.source"
        >
      </template>
    </div>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import Vue from "vue";
Vue.use(VueViewer);
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
            "https://providencezhang.ddns.net:8031/shares/root/pics/2021.11.7%e6%99%af%e5%b1%b1/Export/DSC_7470.jpg",
        },
      ],
    };
  },
  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
      });
    },
  },
};
</script>