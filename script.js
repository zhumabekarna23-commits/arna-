async function sendMessage() {
  const input = document.getElementById("input");
  const apiKey = document.getElementById("apiKey").value;
  const chat = document.getElementById("chat");

  if (!input.value || !apiKey) {
    alert("Сұрақ пен API key енгіз!");
    return;
  }

  // user message
  let userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = input.value;
  chat.appendChild(userMsg);

  // API сұраныс
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        { role: "user", content: input.value }
      ]
    })
  });

  const data = await response.json();

  let aiMsg = document.createElement("div");
  aiMsg.className = "message ai";
  aiMsg.innerText = data.choices[0].message.content;
  chat.appendChild(aiMsg);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
