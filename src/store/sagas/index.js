import { all } from "redux-saga/effects";
import userSagas from "./user";
console.log(userSagas);
const run = sagas => sagas.map(saga => saga());

export default function* rootSaga() {
  yield all([...run([...userSagas])]);
}
