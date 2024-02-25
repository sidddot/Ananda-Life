const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const voiceButton = document.getElementById("voiceButton");

const questions = [
  "Do you often feel anxious, restless, or on edge?",
  "Do you find it challenging to enjoy activities or hobbies that used to bring you pleasure?",
  "Do you often feel a sense of hopelessness or worthlessness?",
  "Do you have difficulty concentrating or making decisions?",
  "Do you struggle with constant fatigue or lack of energy?",
  "Do you feel a sense of isolation or disconnection from others?",
  "Do you frequently experience feelings of sadness or tearfulness?",
  "Do you experience frequent changes in your appetite or weight?",
  "Do you have trouble falling asleep, staying asleep, or experiencing restful sleep?",
  "Do you have recurrent thoughts of death or suicidal ideation?"
  ];

let currentQuestion = 0;
let noCount = 0;

function generateChatBubble(text, isUser) {
    const chatBubble = document.createElement("div");
    chatBubble.classList.add("chat-bubble");
    chatBubble.classList.add(isUser ? "user" : "bot");
    chatBubble.innerText = text;
    chatLog.appendChild(chatBubble);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function askQuestion() {
    generateChatBubble(questions[currentQuestion], false);
    currentQuestion++;
}

function processUserInput() {
    const answer = userInput.value;
    generateChatBubble(answer, true);

    if (answer.toLowerCase() === "yes") {
        noCount++;
    }

    if (currentQuestion < questions.length) {
        askQuestion();
    } else {
        if (noCount > 5) {
            alert("We would recommend you to consult a therapist. Seeking support for mental wellbeing is not something to hesitate about. Avail consultancy facility with us anytime now!");
            generateChatBubble("We further suggest you take appointments with any of our Therapy providers.");
        } else {
            generateChatBubble("Thank you for sharing. It appears that you are mentally fine but may be undertaking a lot of stress! So remember to cherish each moment, find joy in the little things, and nurture your mental well-being. You too can lead a fulfilling and joyous life. Stay positive and embrace the beauty that surrounds you. Wishing you continued happiness and contentment on your journey!", false);
        }
        userInput.disabled = true;
        sendButton.disabled = true;
        voiceButton.disabled = true;
    }

    userInput.value = "";
}

function startVoiceRecognition() {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.trim().toLowerCase();
        generateChatBubble(transcript, true);
        processUserInput();
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function() {
        console.log('Speech recognition ended.');
    };

    recognition.start();
}

askQuestion();
sendButton.addEventListener("click", processUserInput);
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        processUserInput();
    }
});

voiceButton.addEventListener('click', startVoiceRecognition);
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 
//  blogs

