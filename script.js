/*
  Edit messages here.
  - text: the message body
  - from: the signature
  - x, y: position on desktop card
  - w, h: note width/height
  - r: rotation angle
  - bg/tape: colors for the sticky-note look
  - type: use "plain" for direct handwriting, "heart-note" for heart-shaped note
*/
const MESSAGES = [
  {
    text: "Happy Birthday! You make every room lighter just by being there. Hope today feels as special as you are.",
    from: "Aarohi",
    x: "5%", y: "7%", w: "26%", h: "150px", r: "-4deg", type: "plain"
  },
  {
    text: "Wishing you so much happiness, success, good food and all the love in the world. You deserve it all.",
    from: "Mom",
    x: "31%", y: "4%", w: "18%", h: "168px", r: "-3deg", bg: "#ffdcd5", tape: "rgba(255, 181, 165, .55)"
  },
  {
    text: "Happy Birthday beta! Keep chasing your dreams and never stop believing in yourself. We are so proud of you.",
    from: "Dad",
    x: "7%", y: "38%", w: "24%", h: "150px", r: "-2deg", bg: "#dceeff", tape: "rgba(193, 222, 255, .75)"
  },
  {
    text: "Hope your day is full of laughter, good food and all your favorite things. Enjoy to the fullest!",
    from: "Priya",
    x: "34%", y: "31%", w: "20%", h: "155px", r: "3deg", type: "plain"
  },
  {
    text: "You are not just loved, you are celebrated. Here’s to more adventures, silly jokes and unforgettable memories.",
    from: "Rohan",
    x: "5%", y: "72%", w: "24%", h: "138px", r: "-3deg", bg: "#fff0c7", tape: "rgba(255, 215, 130, .55)"
  },
  {
    text: "To the birthday star: keep shining, keep laughing, and keep being your wonderfully weird self.",
    from: "Neha",
    x: "32%", y: "66%", w: "24%", h: "130px", r: "-2deg", bg: "#ffd9df", tape: "rgba(255, 165, 190, .55)"
  },
  {
    text: "May this year bring you endless joy, success and beautiful memories. Keep smiling always!",
    from: "Ankit",
    x: "58%", y: "8%", w: "26%", h: "150px", r: "3deg", type: "plain"
  },
  {
    text: "Cheers to you! Another year older, wiser, funnier, and somehow even more amazing. Have the best day ever!",
    from: "Kabir",
    x: "82%", y: "3%", w: "17%", h: "185px", r: "7deg", bg: "#eee2ff", tape: "rgba(210, 192, 255, .60)"
  },
  {
    text: "Happy Birthday! Stay happy, stay kind, and keep being awesome.",
    from: "Sneha",
    x: "59%", y: "39%", w: "20%", h: "130px", r: "-1.5deg", bg: "#fff1b8", tape: "rgba(255, 220, 120, .60)"
  },
  {
    text: "May all your wishes come true today and always. You totally deserve it!",
    from: "Auntie",
    x: "81%", y: "37%", w: "18%", h: "145px", r: "2deg", type: "plain"
  },
  {
    text: "Happy Birthday bro! Thanks for being the best human and the best company. Let’s celebrate soon!",
    from: "Manav",
    x: "55%", y: "66%", w: "19%", h: "135px", r: "-2deg", bg: "#fffaf3", tape: "rgba(167, 218, 255, .65)"
  },
  {
    text: "So grateful for you today and always. You mean the world!",
    from: "All of us",
    x: "73%", y: "63%", w: "16%", h: "145px", r: "3deg", type: "heart-note"
  },
  {
    text: "Here’s to more late-night talks, funny stories, and many more memories together. Happy Birthday!",
    from: "Tisha",
    x: "84%", y: "70%", w: "16%", h: "140px", r: "4deg", bg: "#ddf3e6", tape: "rgba(151, 221, 184, .65)"
  }
];

const bookCard = document.getElementById("bookCard");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const messageLayer = document.getElementById("messageLayer");

function renderMessages() {
  messageLayer.innerHTML = "";

  MESSAGES.forEach((message) => {
    const note = document.createElement("article");
    note.className = `note ${message.type || ""}`.trim();
    note.style.setProperty("--x", message.x);
    note.style.setProperty("--y", message.y);
    note.style.setProperty("--w", message.w);
    note.style.setProperty("--h", message.h || "120px");
    note.style.setProperty("--r", message.r || "0deg");
    note.style.setProperty("--note-bg", message.bg || "#fff6cc");
    note.style.setProperty("--tape", message.tape || "rgba(255, 190, 160, .55)");
    note.style.setProperty("--tape-rot", message.tapeRot || "-2deg");

    const text = document.createElement("div");
    text.textContent = message.text;

    const from = document.createElement("span");
    from.className = "from";
    from.textContent = `— ${message.from}`;

    note.appendChild(text);
    note.appendChild(from);
    messageLayer.appendChild(note);
  });
}

renderMessages();

nextBtn.addEventListener("click", () => {
  bookCard.classList.add("open");
});

backBtn.addEventListener("click", () => {
  bookCard.classList.remove("open");
});
