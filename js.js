right_answer_n = 0;

k = Number(n_question.value);
console.log(k);
n.innerHTML = k + 1;
n_right.innerHTML = right_answer_n;
point = 1;

answers(n_question.value);


get_answer.addEventListener("click", f_get_answer);
view_answer.addEventListener("click", f_view_answer);
next_question.addEventListener("click", f_next_question);
next_question.addEventListener("click", f_next_image);

let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/1 питання.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/2 питання.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'images/3 питання.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/4 питання.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/5 питання.png';

// imgArray[5] = new Image();
// imgArray[5].src = 'images/8.1.jpg';


function f_next_image() {
  let img = document.getElementById("mainImage");
  for (let i = 0; i < 5; i++) {
    if (imgArray[i].src == img.src) {
      if (i === imgArray.length) {
        document.getElementById("mainImage").src = imgArray[0].src;
        break;
      }
      document.getElementById("mainImage").src = imgArray[i + 1].src;
      break;
    }
  }
}

function f_get_answer() {

  if (y1.checked) { n_a = 1; }
  if (y2.checked) { n_a = 2; }
  if (y3.checked) { n_a = 3; }
  if (y4.checked) { n_a = 4; }

  if (n_a == n_right_answer) {
    right_div.classList.remove("hidden");
    wrong_div.classList.add("hidden");
    right_answer_n = right_answer_n + point;
    point = 0;
  } else {
    right_div.classList.add("hidden");
    wrong_div.classList.remove("hidden");
    point = 0;
  }

}
function f_view_answer() {
  answer.classList.toggle("hidden");
  view_answer.classList.toggle("opend");
}
function f_next_question() {
  if (k < Number(n_question.value) - 1) {
    console.log(k, Number(n_question.value));
    right_div.classList.add("hidden");
    answer.classList.add("hidden");
    point = 1;
    k += 1;
    n_right.innerHTML = right_answer_n;
    n.innerHTML = k + 1;
    answers(k);
  } else {
    n_right.innerHTML = right_answer_n;
    questions.classList.add("hidden");

  }
}

function answers(k) {
  query = 'https://innovations.kh.ua/quiz/list/?author_id=70&n=' + k;
  console.log(query);
  fetch(query).then(response => response.json())
    .then(function (quiz) {
      question.innerHTML = quiz.question_arr[0];
      title.innerHTML = quiz.title_arr[0];
      a1.innerHTML = quiz.a1_arr[0];
      a2.innerHTML = quiz.a2_arr[0];
      a3.innerHTML = quiz.a3_arr[0];
      a4.innerHTML = quiz.a4_arr[0];
      answer.innerHTML = quiz.answer_arr[0];

      n_right_answer = quiz.n_right_answer_arr[0];
      n_question.value = quiz.total_n;
      console.log(quiz);

    });
}