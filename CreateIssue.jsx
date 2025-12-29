
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function CreateIssue({ user, refresh }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const submit = async () => {
    const snap = await getDocs(collection(db, "issues"));
    const similar = snap.docs.find(d => d.data().title.toLowerCase() === title.toLowerCase());
    if (similar && !confirm("Similar issue exists. Continue?")) return;

    await addDoc(collection(db, "issues"), {
      title,
      priority,
      status: "Open",
      assignedTo: user.email,
      createdBy: user.email,
      createdAt: new Date()
    });
    refresh();
  };

  return (
    <div>
      <input placeholder="Issue title" onChange={e => setTitle(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <button onClick={submit}>Create</button>
    </div>
  );
}
