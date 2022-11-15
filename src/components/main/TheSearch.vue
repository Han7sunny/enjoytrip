<template>
  <div class="hero">
    <!-- 배경 이미지   :  전환되는 효과 -->
    <div class="hero-slide">
      <div class="img overlay img1"></div>
      <div class="img overlay img2"></div>
      <div class="img overlay img3"></div>
    </div>

    <!-- 메인 타이틀 -->
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center">
          <h1 class="heading" data-aos="fade-up">
            써니앤쥬와 함께 여행을 준비하세요
          </h1>

          <!-- 마칸 Search Start -->
          <div
            class="container-fluid mb-5 wow fadeIn"
            data-aos="fade-up"
            data-wow-delay="0.1s"
            style="padding: 35px"
          >
            <div class="container">
              <div class="row g-2">
                <div class="col-md-10">
                  <div class="row g-2">
                    <div class="stateList col-md-4">
                      <!-- 지역 -->
                    </div>
                    <div class="cityList col-md-4">
                      <!-- 시군구 -->
                    </div>
                    <div class="contentTypeList col-md-4">
                      <!-- 컨텐츠 -->
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <button
                    class="search btn border-0 w-100 py-3 btn-4"
                    id="search-btn"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- 마칸 Search Start -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSearch",
  // created(){
  //     // init 전부 이 안에서...?
  // }
};
</script>

<style>
.img1 {
  background-image: url("@/assets/images/seoul.jpg");
}
.img2 {
  background-image: url("@/assets/images/jeju.png");
}
.img3 {
  background-image: url("@/assets/images/busan.png");
}
</style>
