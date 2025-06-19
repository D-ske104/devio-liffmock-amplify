import { useEffect, useState } from "react";
import "./App.css";

import { liffInit } from "#src/lib/liff-init";
import { liff } from "@line/liff";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("")

  useEffect(() => {
    liffInit()
      .then(() => {
        setMessage("LIFF init succeeded.");
        liff.getProfile()
          .then(profile => {
            setUsername(profile.displayName);
          })
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  }, []);
  return (
    <div className="App">
      <h1>create-liff-app</h1>
      {message && <p>{message}</p>}
      {username && <p>{username}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
    </div>
  );
}

export default App;
