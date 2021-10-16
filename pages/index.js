import { useState, useEffect } from "react";

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [connected, setConnected] = useState(false);

  // get user wallet address and store it in state
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.send("eth_requestAccounts");
      setWallet(accounts.result[0]);
      setConnected(true);
    } else {
      throw new Error("Must have Metamask isntalled to use this website");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}> Connect Wallet</button>
      <p>{wallet || "wallet"}</p>
      <p>{connected ? "wallet connected" : "connection status"}</p>
    </div>
  );
}
