const fs = require('fs');
const path = require('path');

// Percorso del file di input (comuni.txt)
const inputFilePath = path.join(__dirname, 'comuni.txt');

// Percorso del file di output (comuni.json)
const outputFilePath = path.join(__dirname, 'comuni.json');

// Funzione per leggere il file e creare l'oggetto
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Errore durante la lettura del file:', err);
    return;
  }

  // Funzione che trasforma i dati in un oggetto
  const comuniObj = parseDataToObject(data);

  // Salva l'oggetto in un file JSON
  fs.writeFile(outputFilePath, JSON.stringify(comuniObj, null, 2), (err) => {
    if (err) {
      console.error('Errore durante il salvataggio del file JSON:', err);
      return;
    }
    console.log('File JSON salvato con successo:', outputFilePath);
  });
});

// Funzione per parsare i dati e creare l'oggetto
function parseDataToObject(data) {
  const lines = data.split('\n'); // Divide il contenuto del file in righe
  const comuniObj = {};

  lines.forEach(line => {
    // Divide la riga per spazi vuoti o tab, conservando solo il codice e il nome del comune
    const parts = line.trim().split(/\s+/);
    
    // Ignora le righe vuote o malformate
    if (parts.length >= 2) {
      const codice = parts[0]; // Il codice è la prima parte
      const nomeComune = parts.slice(1, -1).join(' '); // Il nome del comune è tutto tranne l'ultima parte
      
      // Aggiungi il comune come chiave e il codice come valore
      comuniObj[nomeComune] = codice;
    }
  });
  
  return comuniObj;
}