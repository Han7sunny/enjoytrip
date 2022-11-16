<template>
  <div>
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <nav class="site-nav">
      <div class="container">
        <div class="menu-bg-wrap btn-2">
          <div class="site-navigation">
            <a href="/" class="logo m-0 float-start">S&J</a>

            <ul
              class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li class="active"><a href="/">Home</a></li>
              <!-- <c:if test="${userInfo eq null}"> -->
              <li><router-link :to="{ name: 'login' }">로그인</router-link></li>
              <li>
                <router-link :to="{ name: 'join' }">회원가입</router-link>
              </li>
              <!-- </c:if> -->
              <li>
                <router-link to="${root}/community">커뮤니티</router-link>
              </li>
              <li><router-link to="${root}/notice">공지사항</router-link></li>
              <!-- <c:if test="${userInfo ne null}"> -->
              <li>
                <router-link :to="{ name: 'myPage' }">마이페이지</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'logout' }">로그아웃</router-link>
              </li>
              <!-- </c:if> -->
            </ul>

            <a
              href="#"
              class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    logout() {
      axios
        .get("/user/logout")
        .then((data) => {
          alert(data);
          location.href = "/";
        })
        .catch((err) => {
          location.href = "@/views/alert_page/error.jsp"; // 추후 변경
        });
    },
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";

/* @import "@/assets/images/icon/logo_color_symbol_1.png"; */

@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css";
@import "https://fonts.googleapis.com";
@import "https://fonts.gstatic.com";
@import "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap";

@import "@/assets/fonts/icomoon/style.css";
@import "@/assets/fonts/flaticon/font/flaticon.css";
@import "@/assets/css/tiny-slider.css";
@import "@/assets/css/aos.css";
@import "@/assets/css/style.css";
</style>
