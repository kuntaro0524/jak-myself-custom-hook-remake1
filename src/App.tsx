import "./styles.css";

import { UserCard } from "./components/UserCard";
import { UserProfile } from "./types/userProfile";

const user: UserProfile = {
  id: 10,
  name: "Kunio Hirata",
  email: "kuntaro@gmail",
  address: "Kouto 2-10-36"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
