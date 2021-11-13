import "./styles.css";

import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  // カスタムフックを実際に使ってみるという宣言
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  // クリックイベントとして定義
  const onClickFetchUser = () => {
    getUsers();
  };
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
