// (function () {
//     const stageElem = document.querySelector('.stage');
//     const houseElem = document.querySelector('.house');
//     const barElem = document.querySelector('.progress-bar');
//     const selectCharacterElem = document.querySelector('.select-character');
//     const mousePos = { x: 0, y: 0 };
//     let maxScrollValue;

//     function resizeHandler() {
//         maxScrollValue = document.body.offsetHeight - window.innerHeight;
//     }

//     window.addEventListener('scroll', function () {
//         const scrollPer = pageYOffset / maxScrollValue;
//         const zMove = scrollPer * 980 - 490;
//         houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

//         // progress bar
//         barElem.style.width = scrollPer * 100 + '%';
//     });

//     window.addEventListener('mousemove', function (e) {
//         mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
//         mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
//         stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
//     });

//     window.addEventListener('resize', resizeHandler);

//     stageElem.addEventListener('click', function (e) {
//         new Character({
//             xPos: e.clientX / window.innerWidth * 100,
//             speed: Math.random() * 0.5 + 0.2
//         });
//     });

//     selectCharacterElem.addEventListener('click', function (e) {
//         const value = e.target.getAttribute('data-char');
//         document.body.setAttribute('data-char', value);
//     });

//     resizeHandler();

// })();

(function () {
  const houseElem = document.querySelector(".house");
  const progressBar = document.querySelector(".progress-bar");
  let maxScrollValue;
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight; // 전체 스크롤 범위가 된다
  }
  resizeHandler();

  function prograssNotice(scrollPer) {
    progressBar.style.width = `${scrollPer}%`;
  }

  window.addEventListener("resize", resizeHandler);

  window.addEventListener("scroll", (e) => {
    // let scrollDeepth = window.scrollY; 라고 내가 처음에 했는데 아님
    const scrollPer = pageYOffset / maxScrollValue; // 스크롤을 얼마나 했는지 비율 구하기
    const zMove = scrollPer * 980 - 490;
    houseElem.style.transform = `translateZ(${zMove}vw)`;
    prograssNotice(scrollPer * 100);
  });
  const stage = document.querySelector(".stage");

  window.addEventListener("mousemove", (e) => {
    const positionX = -1 + (e.clientX / window.innerWidth) * 2;
    const positionY = 1 - (e.clientY / window.innerHeight) * 2;
    stage.style.transform = `rotateX(${positionY * 5}deg) rotateY(${
      positionX * 5
    }deg)`;
  });
})();
