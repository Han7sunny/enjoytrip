<template>
  <div>
    <the-search></the-search>
    <the-map></the-map>
    <theme-list></theme-list>
    <mate-list></mate-list>
    <review-list></review-list>
    <!-- hanok -->
  </div>
</template>

<script>
import TheSearch from "@/components/main/TheSearch.vue";
import TheMap from "@/components/main/TheMap.vue";
import ThemeList from "@/components/main/ThemeList.vue";
import MateList from "@/components/main/MateList.vue";
import ReviewList from "@/components/main/ReviewList.vue";

export default {
  name: "AppMain",
  components: {
    TheSearch,
    TheMap,
    ThemeList,
    MateList,
    ReviewList,
  },
};
</script>

<style></style>
