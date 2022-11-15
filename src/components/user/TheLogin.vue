<template>
  <div>
    <div class="hero page-inner overlay bg">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-9 text-center mt-5">
            <h1 class="heading" data-aos="fade-up">로그인</h1>

            <nav
              aria-label="breadcrumb"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ol class="breadcrumb text-center justify-content-center">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li
                  class="breadcrumb-item active text-white-50"
                  aria-current="page"
                >
                  login
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- /.untree_co-section -->

    <div class="section">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div
            class="col-lg-8 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <!-- 로그인 기능 -->

            <div class="alert mb-5" style="color: red"></div>

            <form id="form-login" method="POST">
              <div class="row">
                <div class="col-12 mb-4">
                  <input
                    id="userid"
                    v-model="userId"
                    type="text"
                    class="form-control"
                    placeholder="아이디"
                  />
                </div>

                <div class="col-12 mb-4">
                  <input
                    id="userpwd"
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="비밀번호"
                  />
                </div>
              </div>
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="login"
              >
                로그인
              </button>
            </form>
            <div class="col-auto text-center mt-5">
              <button
                type="button"
                class="btn btn-sm btn-light mb-3"
                onClick="location.href='@/user/findId'"
              >
                아이디 찾기
              </button>
              <button
                type="button"
                class="btn btn-sm btn-light mb-3"
                onClick="location.href='@/user/findPwd'"
              >
                비밀번호 찾기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/HttpCommon";
export default {
  name: "TheLogin",
  data() {
    return {
      userId: null,
      password: null,
    };
  },
  methods: {
    checkValue() {
      let err = true;
      let msg = "";
      !this.userId &&
        ((msg = "아이디를 입력하세요."),
        (err = false),
        this.$refs.userId.focus());
      err &&
        !this.password &&
        ((msg = "비밀번호를 입력하세요."),
        (err = false),
        this.$refs.password.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registArticle 호출
      else this.registArticle();
    },
    login() {
      let loginData = {
        userId: this.userId,
        password: this.password,
      };
      http
        .post("/user/login", loginData)
        .then((data) => {
          console.log(typeof data);
          if (typeof data != Boolean) {
            //window.sessionStorage.setItem("userInfo", data);
            location.href = "/";
          } else {
            document.querySelector(".alert").textContent =
              "아이디 또는 비밀번호 확인 후 다시 로그인해주세요.";
          }
        })
        .catch((err) => {
          location.href = "WEB-INF/views/alert_page/error.jsp";
        });
    },
  },
};
</script>

<style>
.bg {
  background-image: url("@/assets/images/bg-img.jpg");
}
</style>
