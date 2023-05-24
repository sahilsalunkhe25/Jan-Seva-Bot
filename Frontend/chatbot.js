const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const apiUrl = "http://localhost:5005/webhooks/rest/webhook";
var coll = document.getElementsByClassName("collapsible");

send.addEventListener("click", () => renderUserMessage());

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
          content.style.maxHeight = null;
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
      }

  });

} 
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const speechBtn = document.querySelector("#speechBtn");
let recognition = null;
speechBtn.addEventListener("click", () => {
  if (!recognition) {
    startRecognition();
  } else {
    stopRecognition();
  }
});
const startRecognition = () => {
  recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0].transcript;
    txtInput.value = text;
    renderUserMessage();
  };

  recognition.start();
  // speechBtn.innerHTML = "Stop";
};

const stopRecognition = () => {
  recognition.stop();
  recognition = null;
  // speechBtn.innerHTML = "Speak";
};

// const renderMessageEle = (message, sender) => {
//   const messageEle = document.createElement("div");
//   messageEle.classList.add("user-message", `chat-message-${sender}`);
//   messageEle.innerHTML = `<div class="chatbot-message">${message}</div>`;
//   chatBody.appendChild(messageEle);
// };



const renderUserMessage = async () => {
  let userInput = txtInput.value;

  // If speech recognition is active, use the recognized text as input
  if (recognition) {
    recognition.stop();
    recognition = null;
    // speechBtn.innerHTML = "Speak";
    userInput = txtInput.value.trim();
  }

  if (userInput) {
    renderMessageEle(userInput, "user");
    txtInput.value = "";

    const data = { message: userInput };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(apiUrl, options);
      const messages = await response.json();
      messages.forEach(message => {
        renderMessageEle(message.text, "chatbot");
      });
      setScrollPosition();
    } catch (error) {
      console.log(error);
    }
  }
};



const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type === "chatbot") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate'
  )};