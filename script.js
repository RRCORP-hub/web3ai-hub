// Fake AI Chatbot (for demo, works without API key)
function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  // Show user message
  const userMsg = document.createElement("p");
  userMsg.textContent = "🧑: " + input.value;
  chatBox.appendChild(userMsg);

  // Fake AI reply
  const aiMsg = document.createElement("p");
  aiMsg.textContent = "🤖: " + "Thanks for your message! (AI reply demo)";
  chatBox.appendChild(aiMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}
