
import { signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import CreateIssue from "./CreateIssue";

export default function Dashboard({ user }) {
  const [issues, setIssues] = useState([]);

  const load = async () => {
    const q = query(collection(db, "issues"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    setIssues(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h3>{user.email}</h3>
      <button onClick={() => signOut(auth)}>Logout</button>
      <CreateIssue user={user} refresh={load} />
      {issues.map(i => <div key={i.id}>{i.title} - {i.priority}</div>)}
    </div>
  );
}
