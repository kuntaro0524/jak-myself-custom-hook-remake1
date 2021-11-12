import "./styles.css";

import { UserCard } from "./components/UserCard";
import { UserProfile } from "./types/userProfile";
import { User } from "./types/api/user";
import { useState } from "react";
import axios from "axios";

const user: UserProfile = {
  id: 10,
  name: "Kunio Hirata",
  email: "kuntaro@gmail",
  address: "Kouto 2-10-36"
};

export default function App() {
  // 取得したデータを state　として保持する
  // userProfiles は axios からとってきたデータの中からいくつかを抜き出して利用するイメージ
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // クリックイベントとして定義
  const onClickFetchUser = () => {
    // 取得するデータの型をあらかじめ設定する
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      // 取得したデータの中から必要なデータを抽出して state の変数に設定
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}> data acquisition </button>
      {console.log(userProfiles)}
      <UserCard user={user} />
    </div>
  );
}
