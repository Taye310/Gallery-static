<template>
  <div class="gallery">
    <p>相册</p>
    <VViewer />
  </div>
</template>

<script>
import VViewer from "../components/v-viewer.vue";

export default {
  name: "Gallery",
  components: {
    VViewer,
  },
};
</script>