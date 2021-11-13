// 全ユーザ一覧を取得するカスタムフック

import { UserProfile } from "./types/userProfile";
import { User } from "../types/api/user";
import axios from "axios";
import { useState } from "react";

export const useAllUsers = () => {
  // 取得したデータを state　として保持する
  // userProfiles は axios からとってきたデータの中からいくつかを抜き出して利用するイメージ
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // データをロードしているときにはloadingと表示するためのステート管理
  const [loading, setLoading] = useState(false);
  // errorの判定をするためのステート管理
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
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
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // すべての定義が終わったのでそれらを取得できるように return する
  return { getUsers, userProfiles, loading, error };
};
