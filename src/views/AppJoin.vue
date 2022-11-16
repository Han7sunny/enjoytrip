<template>
  <div>
    <div class="hero page-inner overlay bg">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-9 text-center mt-5">
            <h1 class="heading" data-aos="fade-up">회원가입</h1>

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
                  join
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
            class="col-lg-8 col-md-10 col-sm-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form id="form-join" method="POST" action="">
              <div class="mb-3">
                <label for="name" class="form-label">이름 : </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  placeholder="이름"
                  @keyup="checkName"
                />
              </div>
              <div id="namecheck-result"></div>

              <div class="mb-3">
                <label for="userId" class="form-label">아이디 : </label>
                <input
                  type="text"
                  class="form-control"
                  id="userId"
                  v-model="userId"
                  placeholder="아이디"
                  @keyup="checkId"
                />
              </div>
              <div id="idcheck-result"></div>
              <div class="mb-3">
                <label for="password" class="form-label">비밀번호 : </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  placeholder="비밀번호"
                />
              </div>
              <div class="mb-3">
                <label for="pwdcheck" class="form-label">비밀번호확인 : </label>
                <input
                  type="password"
                  class="form-control"
                  id="pwdcheck"
                  v-model="pwdcheck"
                  placeholder="비밀번호확인..."
                />
              </div>
              <div class="mb-3">
                <label for="emailId" class="form-label">이메일 : </label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="emailId"
                    v-model="emailId"
                    placeholder="이메일 아이디"
                  />
                  <span class="input-group-text">@</span>
                  <select
                    class="form-select"
                    id="emailDomain"
                    v-model="emailDomain"
                    aria-label="이메일 도메인 선택"
                  >
                    <option :value="{ name: 'none' }">선택</option>
                    <option :value="{ name: 'ssafy.com' }">ssafy.com</option>
                    <option :value="{ name: 'gmail.com' }">gmail.com</option>
                    <option :value="{ name: 'naver.com' }">naver.com</option>
                    <option :value="{ name: 'kakao.com' }">kakao.com</option>
                    <option :value="{ name: 'hanmail.net' }">
                      hanmail.net
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-auto text-center">
                <button
                  type="button"
                  id="btn-join"
                  class="btn btn-outline-success mb-3"
                  @click="checkJoinData"
                >
                  회원가입
                </button>
                <button type="reset" class="btn btn-outline-primary mb-3">
                  초기화
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/HttpCommon";
let isUseId = false;
let isUseName = false; // 맞냐고...^^';;;
export default {
  name: "AppJoin",
  data() {
    return {
      name: null,
      userId: null,
      password: null,
      pwdcheck: null,
      emailId: null,
      emailDomain: null,
    };
  },
  methods: {
    checkName() {
      let checkNameData = { userName: this.name };
      http
        // .post("/user/nameCheck", this.name)
        .post("/user/nameCheck", checkNameData)
        .then((data) => {
          if (data != this.name) {
            resultDiv.setAttribute("class", "mb-3 text-primary");
            resultDiv.textContent = userName + "는 사용할 수 있습니다.";
            isUseName = true;
          } else {
            resultDiv.setAttribute("class", "mb-3 text-danger");
            resultDiv.textContent = userName + "는 사용할 수 없습니다.";
            isUseName = false;
          }
        })
        .catch((err) => {
          location.href = "WEB-INF/views/alert_page/error.jsp";
        });
    },
    checkId() {
      if (this.userId.length < 5 || this.userId.length > 16) {
        resultDiv.setAttribute("class", "mb-3 text-dark");
        resultDiv.textContent = "아이디는 6자 이상 16자 이하 입니다.";
        isUseId = false;
      } else {
        let checkIdData = { userId: this.userId };
        http
          //   .post("/user/idCheck", this.userId)
          .post("/user/idCheck", checkIdData)
          .then((data) => {
            console.log(data);
            if (data != this.userId) {
              resultDiv.setAttribute("class", "mb-3 text-primary");
              resultDiv.textContent = userId + "는 사용할 수 있습니다.";
              isUseId = true;
            } else {
              resultDiv.setAttribute("class", "mb-3 text-danger");
              resultDiv.textContent = userId + "는 사용할 수 없습니다.";
              isUseId = false;
            }
          })
          .catch((err) => {
            location.href = "WEB-INF/views/alert_page/error.jsp";
          });
      }
    },
    checkJoinData() {
      let err = true;
      let msg = "";
      !this.name &&
        ((msg = "이름을 입력하세요."), (err = false), this.$refs.name.focus());
      err &&
        !this.userId &&
        ((msg = "아이디를 입력하세요."),
        (err = false),
        this.$refs.userId.focus());
      err &&
        !this.password &&
        ((msg = "비밀번호를 입력하세요."),
        (err = false),
        this.$refs.password.focus());
      err &&
        !this.pwdcheck &&
        ((msg = "확인 비밀번호를 입력하세요."),
        (err = false),
        this.$refs.pwdcheck.focus());
      err &&
        !this.emailId &&
        ((msg = "이메일 아이디를 입력하세요."),
        (err = false),
        this.$refs.emailId.focus());
      err &&
        !this.emailDomain &&
        ((msg = "이메일 도메인을 선택하세요."),
        (err = false),
        this.$refs.emailDomain.focus());
      err &&
        !isUseName &&
        ((msg = "중복된 이름이 존재합니다. 다른 이름을 입력하세요."),
        (err = false),
        this.$refs.name.focus());
      err &&
        !isUseId &&
        ((msg = "중복된 아이디가 존재합니다. 다른 아이디를 입력하세요."),
        (err = false),
        this.$refs.userId.focus());

      if (!err) alert(msg);
      else this.join();
    },
    join() {
      let joinData = {
        name: this.name,
        userId: this.userId,
        password: this.password,
        emailId: this.emailId,
        emailDomain: this.emailDomain,
      };
      http
        .post("/user/join", joinData)
        .then((data) => {
          alert(data);
          this.$router.push({ name: "login" });
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
