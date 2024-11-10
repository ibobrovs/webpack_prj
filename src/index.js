import './style.css';

document.getElementById('greeting').innerText = 'Loading...';

fetch('http://localhost:3001/messages')
  .then(response => response.json())
  .then(data => {
    document.getElementById('greeting').innerHTML = data
      .map(message => `<p>${message.text}</p>`)
      .join('');
  });
