<template>
  <div class="section">
    <div class="container">
      <div class="row mt-5 mb-5 align-items-center">
        <div class="col-lg-6">
          <h2 class="font-weight-bold text-primary heading">여행 테마 소개</h2>
        </div>
        <div class="col-lg-6 text-lg-end">
          <p>
            <a href="${root}/themeList" class="learn-more">더 많은 여행 테마</a>
          </p>
        </div>
        <div class="row mt-5">
          <div class="col-12">
            <div class="property-slider-wrap">
              <div class="property-slider">
                <div class="property-item"></div>
                <div class="property-item"></div>
                <div class="property-item"></div>
                <div class="property-item"></div>
              </div>

              <div
                id="property-nav"
                class="controls"
                tabindex="0"
                aria-label="Carousel Navigation"
              >
                <span
                  class="prev"
                  data-controls="prev"
                  aria-controls="property"
                  tabindex="-1"
                  >Prev</span
                >
                <span
                  class="next"
                  data-controls="next"
                  aria-controls="property"
                  tabindex="-1"
                  >Next</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeList",
};
</script>

<style></style>
