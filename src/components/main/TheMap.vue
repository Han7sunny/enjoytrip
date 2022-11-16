<template>
  <div>
    <div style="height: 100px" id="map-div"></div>
    <div class="container">
      <div class="map_wrap">
        <div
          id="map"
          style="
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
          "
        ></div>
        <div id="menu_wrap" class="bg_white">
          <!-- <hr /> -->
          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>
      </div>
      <div
        class="container alert alert-warning text-center"
        role="alert"
        id="null-alert"
      >
        죄송합니다. 아직 준비되지 않은 여행정보입니다.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMap",
};
</script>

<style></style>
