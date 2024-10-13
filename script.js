const startBtn = document.getElementById('start-btn');
const responseText = document.getElementById('response');

// Initialize the SpeechRecognition API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.onresult = (event) => {
    const voiceInput = event.results[0][0].transcript;
    console.log('You said: ', voiceInput);
    responseText.innerText = `You said: ${voiceInput}`;
    const botResponse = simpleChatbot(voiceInput);
    responseText.innerText += `\nChatbot response: ${botResponse}`;
    speak(botResponse);
};

recognition.onerror = (event) => {
    console.error('Error occurred in recognition: ' + event.error);
};

startBtn.addEventListener('click', () => {
    recognition.start();
});

function simpleChatbot(input) {
    // Basic chatbot logic
    if (input.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else {
        return "I'm not sure how to respond to that.";
    }
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}
