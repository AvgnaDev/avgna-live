import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "logIn",
  storage: sessionStorage,
});
export const loginAuth = atom({
  key: "logIn",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const notificationStatus = atom({
  key: "notificationStaus",
  default: true,
});
