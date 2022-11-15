import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#000099',
        light: '#ffffffff'
      }
    },
      (err, url) => {
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="App">

      <h1>Criador de QRCode</h1>

      <input
        type="text"
        placeholder="Ex. https://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)} />

      <button onClick={GenerateQRCode}>Gerar</button>
      {qrcode && <>
        <img src={qrcode} />

        <a href={qrcode} download="qrcode.png">Dowload</a>
      </>}

    </div>
  )
}

export default App;
