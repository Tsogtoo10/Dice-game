//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй,1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

window.document.getElementById("score-0").textContent = 0;
window.document.getElementById("score-1").textContent = 0;
window.document.getElementById("current-0").textContent = 0;
window.document.getElementById("current-1").textContent = 0;
window.document.querySelector(".dice").style.display = "none";
function eeljSolih() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}
window.document
  .querySelector(".btn-roll")
  //Шоог шидэх эвэнт листенер
  .addEventListener("click", function () {
    //Math сангийн floor,random функцыг ашиглаж шоог санамсаргүйгээр буулгана
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector(".dice");
    //Шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display = "block";
    //Буусан санасаргүй тоонд харгалзах зургийг вэб дээр гаргаж ирнэ
    diceDom.src = "dice-" + dice + ".png";
    //Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийнээлжийн оноог нэмэгдүүлнэ.
    if (dice !== 1) {
      //Буусан тоог идэвхтэй тоглогчид нэмнэ.
      roundScore += dice;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт солино.
      //Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго
      //Үгүй бол идэвхитэй тоглогчийг 0 болго
      eeljSolih();
    }
  });
//Hold товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  //Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө
  scores[activePlayer] += roundScore;
  //Уг тоглогч хожсон эсэхийг шалгах
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  //Ээлжийн оноог нь 0 болгоно
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent = "Winner";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
  } else {
    eeljSolih();
  }
});
