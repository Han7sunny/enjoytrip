<template>
  <div>
    <div class="hero page-inner overlay bg">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-9 text-center mt-5">
            <h1 class="heading" data-aos="fade-up">마이페이지</h1>

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
                  mypage
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="root container mb-5">
        <div class="boardList text-center">
          <h4 class="mt-5">회원 정보</h4>
        </div>
        <div class="row mt-5">
          <div
            class="col-lg-4 mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="community-info">
              <div class="user-id mt-4">
                <h4 class="mb-2">닉네임</h4>
              </div>

              <div class="user-name mt-5">
                <h4 class="mb-2">아이디</h4>
              </div>

              <div class="email mt-5">
                <h4 class="mb-2">이메일</h4>
              </div>
            </div>
          </div>

          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <form method="POST" id="form-mypage">
              <div class="row">
                <div class="col-12 mb-4">
                  <input
                    type="text"
                    class="form-control"
                    name="userpage_name"
                    placeholder="${userInfo.name}"
                    value="${userInfo.name}"
                    readonly
                  />
                </div>

                <div class="col-12 mb-4">
                  <input
                    type="text"
                    class="form-control"
                    v-model="userpage_id"
                    id="userpage_id"
                    placeholder="${userInfo.userId}"
                    value="${userInfo.userId}"
                    readonly
                  />
                </div>

                <div class="input-group mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="userpage_emailId"
                    v-model="userpage_emailId"
                    value="${userInfo.emailId}"
                  />
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    id="userpage_emailDomain"
                    v-model="userpage_emailDomain"
                    value="${userInfo.emailDomain}"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="boardList text-center">
            <h4 class="mt-5 mb-2 pt-5 mt-5">최근 작성 글 목록</h4>
          </div>
          <div class="container">
            <div class="container">
              <div class="board container mt-5 mb-5 pb-5">
                <table class="table table-hover text-center" data-aos="fade-up">
                  <thead>
                    <tr>
                      <th scope="col">번호</th>
                      <th scope="col" colspan="2">제목</th>
                      <th scope="col">작성자</th>
                      <th scope="col">카테고리</th>
                      <th scope="col">조회수</th>
                      <th scope="col">작성날짜</th>
                    </tr>
                  </thead>
                  <tbody id="boardBody">
                    <div v-if="!boardList.length">작성된 글이 없습니다.</div>
                    <tr class="row" v-for="(board,index) in boardList" :key="board.boardId">
                      <th class="col-1">
                          <td>{{index + 1}}</td>
                          <td>{{board.title}}</td>
                          <td>{{board.userId}}</td>
                          <td>{{board.boardType}}</td>
                          <td>{{board.hits}}</td>
                          <td>{{board.registeredTime}}</td>
                      </th>
                    </tr>


                    <!-- <board-list-item
                      v-else
                      v-for="board in boardList"
                      :key="board.boardId"
                      :board="board"
                    ></board-list-item> -->
                    
                    <!-- <c:if test="${boardList ne null}">
                                <c:forEach var="board" items="${boardList}" begin="0"
                                    end="${boardSize}" step="1" varStatus="status">

                                    <tr
                                        onClick="location.href='${root}/main_community?act=view&board_id=${board.board_id}'">
                                        <th scope="row">${status.count}</th>
                                        <td colspan="2">${board.board_title}</td>
                                        <td>${board.user_id}</td>
                                        <td>${board.board_type_id}</td>
                                        <td>${board.readcount}</td>
                                        <td>${board.regist_time}</td>

                                    </tr>
                                </c:forEach>
                            </c:if> -->
                  </tbody>
                </table>
                <!-- <c:if test="${boardList eq null or boardSize eq 0}">
                        <div class="mt-5 text-center">작성된 글이 없습니다.</div>
                    </c:if> -->
              </div>
            </div>
          </div>

          <div class="replyList text-center">
            <h4 class="mt-5 mb-2 pt-5 mt-5">최근 작성 댓글 목록</h4>
          </div>
          <div class="container">
            <div class="container">
              <div class="reply container mt-5 mb-5 pb-5">
                <table class="table table-hover text-center" data-aos="fade-up">
                  <thead>
                    <tr class="row">
                      <th class="col-1">번호</th>
                      <th class="col-5">제목</th>
                      <th class="col-3">작성자</th>
                      <th class="col-2">작성날짜</th>
                    </tr>
                  </thead>
                  <tbody id="replyBody">

                    <div v-if="!replyList.length">작성된 댓글이 없습니다.</div>
                    <tr class="row" v-for="(reply,index) in replyList" :key="reply.boardId">
                      <th class="col-1">
                          <td>{{index + 1}}</td>
                          <td>{{reply.title}}</td>
                          <td>{{reply.userId}}</td>
                          <td>{{reply.registeredTime}}</td>
                      </th>
                    </tr>



                    <!-- <board-list-item
                      v-for="reply in replyList"
                      :key="reply.boardId"
                      :board="reply"
                    ></board-list-item> -->

                    <!-- <c:if test="${replyList ne null}">
                                <c:forEach var="replys" items="${replyList}" begin="0"
                                    end="${replySize}" step="1" varStatus="status">
                                    <tr class="row"
                                        onClick="location.href='${root}/main_community?act=view&board_id=${replys.board_id}'">
                                        <th class="col-1">${status.count}</th>
                                        <td class="col-5">${replys.reply_content}</td>
                                        <td class="col-3">${replys.user_id}</td>
                                        <td class="col-2">${replys.regist_time}</td>

                                    </tr>
                                </c:forEach>
                            </c:if> -->
                  </tbody>
                </table>

                <!-- <c:if test="${replyList eq null or replySize eq 0}">
                        <div class="mt-5 text-center">작성된 댓글이 없습니다.</div>
                    </c:if> -->
              </div>
            </div>
          </div>

          <div class="noticeList text-center">
            <h4 class="mb-2 pt-5 mt-5">최근 작성 공지사항 글 목록</h4>
          </div>
          <div class="container">
            <div class="container">
              <div class="notice container mt-5 mb-5 pb-5">
                <table class="table table-hover text-center" data-aos="fade-up">
                  <thead>
                    <tr>
                      <th scope="col">번호</th>
                      <th scope="col" colspan="2">제목</th>
                      <th scope="col">작성자</th>
                      <th scope="col">카테고리</th>
                      <th scope="col">조회수</th>
                      <th scope="col">작성날짜</th>
                    </tr>
                  </thead>
                  <tbody id="noticeBody">

                    <div v-if="!noticeList.length">작성된 글이 없습니다.</div>
                    <tr class="row" v-for="(notice,index) in noticeList" :key="notice.boardId">
                      <th class="col-1">
                          <td>{{index + 1}}</td>
                          <td>{{notice.title}}</td>
                          <td>{{notice.userId}}</td>
                          <td>{{notice.boardType}}</td>
                          <td>{{notice.hits}}</td>
                          <td>{{notice.registeredTime}}</td>
                      </th>
                    </tr>



                    <!-- <c:if test="${noticeList ne null}">
                                    <c:forEach var="notice" items="${noticeList}" begin="0"
                                        end="${noticeSize}" step="1" varStatus="status">
                                        <tr
                                            onClick="location.href='${root}/main_community?act=view&board_id=${notice.board_id}'">
                                            <th scope="row">${status.count}</th>
                                            <td colspan="2">${notice.board_title}</td>
                                            <td>${notice.user_id}</td>
                                            <td>${notice.board_type_id}</td>
                                            <td>${notice.readcount}</td>
                                            <td>${notice.regist_time}</td>
                                        </tr>
                                    </c:forEach>
                                </c:if> -->
                  </tbody>
                </table>
                <!-- <c:if test="${noticeList eq null or noticeSize eq 0}">
                            <div class="mt-5 text-center">작성된 글이 없습니다.</div>
                        </c:if> -->

                <div class="row mt-5 md-3" data-aos="fadeup">
                  <div
                    class="col-lg-6 col-sm-12 text-lg-start text-center"
                    data-aos="fade-up"
                  >
                    <button
                      type="button"
                      class="btn btn-warning"
                      id="delete-btn"
                    >
                    <router-link :to="{
                      
                    }">
                      탈퇴하기
                    </router-link>
                    </button>
                  </div>
                  <div
                    class="col-lg-6 col-sm-12 text-lg-end text-center"
                    data-aos="fade-up"
                  >
                    <button
                      type="button"
                      class="btn btn-4"
                      id="modify-btn"
                      @click="modifyUserInfo"
                    >
                      회원정보 수정하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/HttpCommon";
import BoardListItem from "@/components/board/BoardListItem.vue";
export default {
  name: "AppUser", // myPage
  data() {  
    return {
      userId:null, // session
      emailId: null,
      emailDomain: null,
      boardList: [],
      replyList: [],
      noticeList: [],
    };      
  },
  components: {},
  methods: {          
    modifyUserInfo() {
      // 회원 정보 수정
      let modifyUserData = {
        userId: this.userId, // this.userId - > session
        emailId: this.emailId,
        emailDomain: this.emailDomain,
      };
      http
        .post("/user/modify", modifyUserData)
        .then((data) => {
          document.querySelector(".root").style.display = "none";

          let body = document.querySelector(".section");

          let div1 = document.createElement("div");
          div1.setAttribute("class", "text-center");

          let h4 = document.createElement("h4");
          h4.setAttribute("class", "mt-5 mb-5");
          h4.appendChild(document.createTextNode(data));

          div1.appendChild(h4);

          let div2 = document.createElement("div");
          div2.setAttribute("class", "text-center mt-5 mb-5");

          let button = document.createElement("button");
          button.setAttribute("class", "btn btn-light");
          button.setAttribute("onClick", "location.href='/user/myPage'"); // 추후 변경
          button.appendChild(document.createTextNode("돌아가기"));
        
          div2.appendChild(button);
          body.appendChild(div1);
          body.appendChild(div2);
        })
        .catch((err) => {
          location.href = "WEB-INF/views/alert_page/error.jsp";
        });
    },
    deleteUserInfo() { // @click = "deleteUserInfo"
      // 회원 탈퇴
      // state ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    },
  },
  created() {
    // 로그인된 정보 뿌려주기
    let userInfo = {}; // 관리자일 경우 공지사항 글도 가져와야 함..userId만? 아니면 다른 항목도

    http
      .post("/user/myPage", userInfo)
      .then((data) => {
        this.boardList = data.boardList;
        this.replyList = data.replyList;
        this.noticeList = data.noticeList;
      })
      .catch((err) => {
        location.href = "WEB-INF/views/alert_page/error.jsp";
      });
  },
};
</script>

<style></style>
