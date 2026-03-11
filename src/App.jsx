import { useState } from "react";

function App() {

  const [status, setStatus] = useState(Notification.permission);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    setStatus(permission);
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>PWA Deal Alerts</h1>

      <p>Notification Permission: {status}</p>

      {status !== "granted" && (
        <button onClick={requestPermission}>
          Enable Notifications
        </button>
      )}

    </div>
  );
}

export default App;