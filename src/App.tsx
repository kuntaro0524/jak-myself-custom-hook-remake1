import "./styles.css";

import { UserCard } from "./components/UserCard";

export default function App() {
  // クリックイベントとして定義
  const onClickFetchUser = () => {
  return (
    <div className="App">
      <button onClick={onClickFetchUser}> data acquisition </button>
      <br />
      {error ? (
        <p style={{ color: "red" }}> Error 出てるねん </p>
      ) : loading ? (
        <p> Loading </p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
