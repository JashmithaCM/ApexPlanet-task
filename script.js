document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "Which data structure uses LIFO?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack"
    },
    {
      question: "What is the full form of CPU?",
      options: ["Central Processing Unit", "Control Program Unit", "Core Processing Unit", "Central Power Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which language runs in the browser?",
      options: ["Python", "Java", "C++", "JavaScript"],
      answer: "JavaScript"
    }
  ];

  let current = 0;
  let score = 0;

  function showQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "option-btn";
      btn.onclick = () => {
        if (option === q.answer) score++;
        showNext();
      };
      optionsDiv.appendChild(btn);
    });
  }

  function showNext() {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      document.getElementById("question").textContent = `Quiz Complete! Your score: ${score}/${questions.length}`;
      document.getElementById("options").innerHTML = "";
    }
  }

  showQuestion();
});
