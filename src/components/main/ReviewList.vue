<template>
  <div class="section sec-testimonials">
    <div class="container">
      <div class="row mt-5 mb-5 align-items-center">
        <div class="col-md-6">
          <h2 class="font-weight-bold heading text-primary mt-5 mb-4 mb-md-0">
            여행 후기
          </h2>
        </div>
        <div class="col-md-6 text-md-end">
          <div id="testimonial-nav">
            <span class="prev" data-controls="prev">Prev</span>
            <span class="next" data-controls="next">Next</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4"></div>
      </div>

      <div class="testimonial-slider-wrap">
        <div class="reviewDiv testimonial-slider">
          <!-- 여행 후기 글 -->

          <div class="item" onmouseover="this.style.cursor='pointer'">
            <div class="testimonial">
              <img
                src="${root}/assets/images/default-profile.png"
                alt="Image"
                class="img-fluid rounded-circle w-25 mb-4"
              />
            </div>
          </div>

          <div class="item" onmouseover="this.style.cursor='pointer'">
            <div class="testimonial">
              <img
                src="${root}/assets/images/default-profile.png"
                alt="Image"
                class="img-fluid rounded-circle w-25 mb-4"
              />
            </div>
          </div>

          <div class="item" onmouseover="this.style.cursor='pointer'">
            <div class="testimonial">
              <img
                src="${root}/assets/images/default-profile.png"
                alt="Image"
                class="img-fluid rounded-circle w-25 mb-4"
              />
            </div>
          </div>

          <div class="item" onmouseover="this.style.cursor='pointer'">
            <div class="testimonial">
              <img
                src="${root}/assets/images/default-profile.png"
                alt="Image"
                class="img-fluid rounded-circle w-25 mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewList",
};
</script>

<style></style>
