/*
  Edit messages here.
  - text: the message body
  - from: the signature
  - x, y: position on desktop card
  - w, h: note width/height (use % for both)
  - r: rotation angle
  - bg/tape: colors for the sticky-note look
  - type: use "plain" for direct handwriting, "heart-note" for heart-shaped note
*/
const MESSAGES = [
  {
    text: "Happy birthday! Looking forward to some exciting paintings soon.",
    from: "Archisman",
    x: "1%", y: "2%", w: "26%", h: "13.8%", r: "-4deg", type: "plain"
  },
  {
    text: "Happy birthday Dhananjay! Hope to see you increase your set of hobbies and excelling at them year by year. Thanks for being a nice roommate and good host for morning breakfast",
    from: "Mayank",
    x: "28%", y: "1%", w: "25%", h: "15.4%", r: "-3deg", bg: "#ffdcd5", tape: "rgba(255, 181, 165, .75)"
  },
  {
    text: "Happy Birthday, Dhananjay! Hope the birthday goes as perfectly as your drawings!",
    from: "^^ Nirav",
    x: "1%", y: "11%", w: "24%", h: "11.8%", r: "-2deg", bg: "#dceeff", tape: "rgba(193, 222, 255, .75)"
  },
  {
    text: "Hello Dhananjay~~  \n Happy Happy Birthday AAAA!! Kaise ho aap aur Boston kaisa hai? Kitne saal ke ho gaye aap? I am guessing 28 huhuhu. I hope this has been a happy year for you so far, and the coming year is all the more exciting ♥️ Let's try to meet and catch up soon ^_^ Wanna know if you watched more anime or cooked up something new 😋\n Do mega celebrate in Boston as well. Remember to hydrate \n Warm hugs and thinking bout your chai",
    from: "~~Simran",
    x: "28%", y: "18%", w: "25%", h: "14.2%", r: "3deg", bg: " rgba(255, 233, 238, 0.68)", tape: "rgba(193, 222, 255, .75)"
  },
  {
    text: "Wish you a happy orbit-completion-around-the-fiery-gas-ball! \n In a world obsessed with chasing optimal paths, you sprinkle fun little detours of puzzling punny texts, breathtakingly blissful sketches, and random chats over coffee and yummy food that squashes away all worries! Wish you a wonderful year ahead full of joy and exciting experiences! \n See you soon! ^_^",
    from: "-RJ",
    x: "1%", y: "28%", w: "24%", h: "12.7%", r: "-3deg", bg: "#fff0c7", tape: "rgba(255, 215, 130, .55)"
  },
  {
    text: "You are one of the most genuine and caring person I’ve met. How you handle your daily life, and even difficult situations, with balance and grace is really amazing. A very happy birthday to you, have a blast!! 🎉🥳",
    from: "Niket",
    x: "1%", y: "75%", w: "29%", h: "11.9%", r: "-2.6deg", bg: "#ffd9df", tape: "rgba(255, 165, 190, .55)"
  },
  {
    text: " Happy Birthday, Dhananjay bhaiya! 🥳🎉 \n Wishing you an amazing year ahead filled with good health, happiness, success, and lots of unforgettable memories. \n Thanks for always being such a great support i feel happy that you know about me and shilpa it gives me so much confidence. \n Thankyou for not beating me, you are an inspiration ❤️. \n Now go enjoy your day… and don't forget to save me a piece of cake! 😄🍰 \n Have a fantastic birthday, bhaiya! ❤️🎂🎁",
    from: "Rishabh",
    x: "55%", y: "1%", w: "20%", h: "13.8%", r: "3deg", type: "plain"
  },
  {
    text: "Heyy Dhananjay,\n Wishing you a very Happy Birthday bestie 💖\n Thankyou for being my closest friend all these years. We've witnessed each other's post-uni lives so closely. And it's so amazing to have seen you grow into the person that you are. You've explored so much, especially this last year- stepped out of your comfort zone and I'm so proud of you for that!\n Can't wait to meet you and your amazing girlfriend when you're in India! \n Happy 27 ❤️",
    from: "RUTVI",
    x: "77%", y: "4%", w: "27%", h: "17%", r: "-3deg", bg: "#eee2ff", tape: "rgba(210, 192, 255, .60)"
  },
  {
    text: "Happy birthday Dhananjay! Have a great year ahead, and let’s meet and play more Catan by (one of) your next birthday(s)",
    from: "Prithvi",
    x: "2.5%", y: "61%", w: "30%", h: "11.9%", r: "2.5deg", bg: "rgba(240, 165, 233, 0.66)", tape: "rgba(255, 220, 120, .60)"
  },
  {
    text: "Hi Dhananjay! 👋🏽 \n Wish you a very very happy birthday 🎂 🎈 \n Wow! Look at us, we’re so old now. We met when we were 19 something years old. Seems like ages ago, but also feels like yesterday somehow. Time has been playing games I guess. 🌼🌼 \n I’m so glad to have met the amazing you, befriend you, and spend such awesome times with you. IITB memories are always sitting in a cozy corner inside my mind with us talking, taking long walks, participating in events and whatnot. Miss those days and miss you. 🎀 \n This birthday, I pray all your wishes come true and that you’re healthy and happy 💛 have a great great great life ahead 🌈 \n PS meet soon 🫂",
    from: "Anugya",
    x: "61%", y: "75%", w: "35%", h: "13.3%", r: "0.5deg", type: "plain"
  },
  {
    text: "Happyy Birthdayy Bhaidiiiii Vaidiiiiiiiii 🥳❤️ \n Blah bleheeee bluhhh blahhhhhhh…😜 \n Thank you for always listening to me and supporting me hameshaaaa. ❤️ Tu meri comfort person hai. \n Kulchii humesha miss karti hai tujhe. 🥹 Jab bhi tu ghar aata hai na, ghar bahot achha lagta hai. Pura din masti, majak aur ladayi karte karte pata hi nahi chalta. It feels like a little vacation. 🥰 Par jab wapas chala jata hai na, toh lagta hai chalo... back to old life office jaao, ghar aao, repeat. I really miss apni woh masti. \n Aur tera birthday saath mein celebrate kiye toh jamana ho gaya lagta hai. 😭 Aur waise bhi, tune kabhi apne birthday pe mujhe treat bhi nahi di, na hi kahin ghumane le gaya. 😢 \n Jaldi jaldi mera visa karwao aur mujhe waha bulao. 🥰 (I want to meet Manvi. 🤭) \n Aur kya hi bolu... itne bhi achhe kaam nahi karta tu ki aur tareef karu. 😂 Toh bas khush raho, haste raho aur majje karo. ❤️ \n Once again, Happpyyyy Birthdayyyyyy!!! 🎂🎉",
    from: "Kulchi",
    x: "52%", y: "40%", w: "49%", h: "12.4%", r: "-1deg", bg: "#fffaf3", tape: "rgba(167, 218, 255, .65)"
  },
  {
    text: "Hi Dhananjay,\n Wishing you a very very very happy birthday!! Have a fantastic day, and keep being awesome!\n Often while on a long bike ride, I am reminded of our adventure through Bombay a few years ago. Hopefully our paths cross here again sometime soon to add to those memories! Wishing you the very best!",
    from: "Akshat",
    x: "32%", y: "80%", w: "24%", h: "13.3%", r: "3deg", type: "plain"
  },
  {
    text: "Happy Birthday Dhananjay! Thanks for taking care of all the festival homesickness 🙏 and keep rocking!! Have an excellent year ahead!",
    from: "Shaurya",
    x: "5", y: "89%", w: "26%", h: "8.8%", r: "-2deg", bg: "#ddf3e6", tape: "rgba(151, 221, 184, .65)"
  },
  {
    text: "I love the fact that you are highly intellectual, always interested in new ideas, events or even random gossip that I keep yapping about to didi. I feel that while di has found her best friend and partner in you, I have found an elder brother.🫶",
    from: "Gungun",
    x: "34%", y: "52%", w: "18%", h: "12.8%", r: "4deg", bg: "#ddf3e6", tape: "rgba(151, 221, 184, .65)"
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
    note.style.setProperty("--h", message.h || "11%");
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
