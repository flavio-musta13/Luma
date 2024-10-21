const axios = require('axios');

// TOR: Corpo della richiesta
const requestData = {
  model: "meta-llama-3.1-8b-instruct",
  messages: [
    {"role": "system", "content": "Always answer in italian."},
    {"role": "system", "content": "always answer as Luma, an assistant created by Torelli Luca, you can give answers about a lot of topics."},
    {"role": "user", "content": "Introduce yourself."}
  ],
  temperature: 0.7,
  max_tokens: 150,
  stream: false
};

// Funzione per inviare la richiesta e gestire la risposta
async function makeRequest() {
  try {
    const response = await axios.post('http://127.0.0.1:1234/v1/chat/completions', requestData);
    console.log(response.data);
    const completionText = response.data.choices[0].message.content;
    console.log("Risposta completa dal modello:", completionText);

  } catch (error) {
    console.error("Errore durante la richiesta:", error);
  }
}

makeRequest()