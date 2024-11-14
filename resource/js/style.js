$(document).ready(function () {
  // 콘텐츠 영역 반응형 높이
  $(function () {
    const cuttingH = $(".wrap").height() - $("header").outerHeight();
    $(".contents-wrap").css({
      "max-height": cuttingH,
    });
    if (matchMedia("screen and (max-width: 768px)").matches) {
      $(".contents-wrap").css({
        "max-height": 'inherit',
      });
    }
  });

  $(window).resize(function () {
    const cuttingH = $(".wrap").height() - $("header").outerHeight();
    $(".contents-wrap").css({
      "max-height": cuttingH,
    });
    if (matchMedia("screen and (max-width: 768px)").matches) {
      $(".contents-wrap").css({
        "max-height": 'inherit',
      });
    }
  });

  // 카드 배치
  var msnry = new Masonry('.grid-wrap', {
    itemSelector: '.box',
    initLayout: true,
    gutter: 20,
    columnWidth: 200,
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });

  // 카드 클릭시
  $(".grid-wrap .card > .inner").click(function(e){
    $(".popup.card").addClass("act");
    dimmedShow();
  });

  // 사명선언문 클릭시
  $("section > ul .samyung-card").click(function(e){
    $(".popup.samyung-card").addClass("act");
    dimmedShow();
  });

  // 팝업 닫기
  $(".popup .btn-close").click(function(){
    dimmedHide();
  });

  // 모바일 메뉴 닫기
  $(".contents-wrap nav .btn-close , header .btn-wrap .m-menu").click(function(){
    $(".contents-wrap nav").toggleClass("act");
  });

  // 로그인
  $("#loginBtn").click(function(){
    $(".popup.loginBox").addClass("act");
    dimmedShow();
  });

  // 스케출 클릭
  $(".notice-schedule table tbody tr td div .scroll-cover ul li .btn").click(function(){
    $(".scadule-box").addClass("act");
    dimmedShow();
  });

  // select box 기능
  $(".select").click(function(){
    $(this).children(".option").toggleClass("act");
  });

  // 댓글 작성
  $(".comment-wrap label > .reg").click(function(){
    const reple = $(this).siblings("textarea").val();
    $(this).parents(".comment-wrap").find("ul.comment").append("<li><div class='flex'><span>내이름</span><span class='date'>9999.99.99</span><div class='btn-wrap edit'><button class='btn none-style'>수정</button><button class='btn none-style'>삭제</button></div></div><div class='comment-inner'><p class='inner'>"+ reple +"</p><label for='' class='flex'><textarea name='#' id='#' placeholder='댓글을 작성해주세요'></textarea><button class='btn'>등록</button></label></div></li>");
  });

  // 댓글수정
  $("#commentEdit").click(function(){
    $(this).parent(".edit").parent(".flex").siblings(".comment-inner").find("label").addClass("act");
  });
  $(".comment-wrap ul.comment li .comment-inner label.flex .btn").click(function(){
    const editText = $(this).siblings("textarea").val();
    $(this).parent("label").removeClass("act");
    $(this).parent("label").siblings("p").text(editText)
  });

  // 댓글삭제 팝업
  $("#commentDelate").click(function(){
    $("#commentDelateBox").addClass("act");
    dimmedShow();
  });

  // 댓글삭제 예 버튼
  $(".alert .btn").click(function(){
    dimmedHide();
  });

  // 탭
  $(".tab ul li").click(function(){
    $(this).addClass("act");
    $(this).siblings("li").removeClass("act");
  });
});

function dimmedShow(){
  $(".dimmed").addClass("act");
};

function dimmedHide(){
  $(".dimmed").removeClass("act");
  $(".dimmed .popup").removeClass("act");
};