import { useEffect, useState } from "react";


export function ChildApp() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const parentOrigin = "*"; // Update this to your actual parent app URL

    useEffect(() => {

        function handleMessage(event) {
            if (event.origin !== "null" && event.origin !== "https://parent-app.com") return; // Allow messages from a local file
            if (typeof event.data === "string") {
                setMessages(prev => [...prev, event.data]);
            }
        }

        // function handleMessage(event) {
        //     if (event.origin !== parentOrigin) return; // Security check
        //     if (typeof event.data === "string") {
        //         setMessages(prev => [...prev, event.data]);
        //     }
        // }

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    function sendMessageToParent() {
        window.parent.postMessage(input, parentOrigin);
    }

    return (
        <div>
            <h2>Child</h2>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter message" />
            <button onClick={sendMessageToParent}>Send to Parent</button>
            
            <h3>Messages from Parent</h3>
            <table border="1">
                <tr><th>Message</th></tr>
                {messages.map((msg, index) => <tr key={index}><td>{msg}</td></tr>)}
            </table>
        </div>
    );
}