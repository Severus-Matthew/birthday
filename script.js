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
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 1",
    x: "5%", y: "7%", w: "26%", h: "150px", r: "-4deg", type: "plain"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 2",
    x: "31%", y: "4%", w: "18%", h: "168px", r: "-3deg", bg: "#ffdcd5", tape: "rgba(255, 181, 165, .55)"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 3",
    x: "7%", y: "38%", w: "24%", h: "150px", r: "-2deg", bg: "#dceeff", tape: "rgba(193, 222, 255, .75)"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 4",
    x: "34%", y: "31%", w: "20%", h: "155px", r: "3deg", type: "plain"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 5",
    x: "5%", y: "72%", w: "24%", h: "138px", r: "-3deg", bg: "#fff0c7", tape: "rgba(255, 215, 130, .55)"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 6",
    x: "32%", y: "66%", w: "24%", h: "130px", r: "-2deg", bg: "#ffd9df", tape: "rgba(255, 165, 190, .55)"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 7",
    x: "58%", y: "8%", w: "26%", h: "150px", r: "3deg", type: "plain"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 8",
    x: "82%", y: "3%", w: "17%", h: "185px", r: "7deg", bg: "#eee2ff", tape: "rgba(210, 192, 255, .60)"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 9",
    x: "59%", y: "39%", w: "20%", h: "130px", r: "-1.5deg", bg: "#fff1b8", tape: "rgba(255, 220, 120, .60)"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 10",
    x: "81%", y: "37%", w: "18%", h: "145px", r: "2deg", type: "plain"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 11",
    x: "55%", y: "66%", w: "19%", h: "135px", r: "-2deg", bg: "#fffaf3", tape: "rgba(167, 218, 255, .65)"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 12",
    x: "73%", y: "63%", w: "16%", h: "145px", r: "3deg", type: "heart-note"
  },
  {
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    from: "Person 13",
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
