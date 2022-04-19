<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "e46c669c0381a1f11c412063bb0932c4", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            center: [116.397428, 39.90923],
            layers: [
              new AMap.TileLayer.Satellite(),
              new AMap.TileLayer.RoadNet(),
            ],
            zoom: 13,
          });
          //实时路况图层
          var trafficLayer = new AMap.TileLayer.Traffic({
            zIndex: 10,
          });
          this.map.add(trafficLayer); //添加图层到地图

          var infoWindow = new AMap.InfoWindow({
            //创建信息窗体
            isCustom: false, //使用自定义窗体
            content: "<div>信息窗体</div>", //信息窗体的内容可以是任意html片段
            offset: new AMap.Pixel(16, -45),
          });
          var onMarkerClick = function (e) {
              console.log("click")
            infoWindow.open(this.map, e.target.getPosition()); //打开信息窗体
            //e.target就是被点击的Marker
          };

          var marker = new AMap.Marker({
            position: [116.39, 39.9], //位置
          });
          this.map.add(marker); //添加到地图
          marker.on('click',onMarkerClick);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
};
</script>

<style  scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>