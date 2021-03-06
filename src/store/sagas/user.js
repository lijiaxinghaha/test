import { put, call, takeEvery } from "redux-saga/effects";
import { login1, login2 } from "../../services/user";

if (put) {
}
const sagas = {
  *visitorRegister({ payload, callback }) {
    const result = yield call(login1, payload);
    if (callback) callback(result);
  },
  *userRegister({ payload, callback }) {
    const result = yield call(login2, payload);
    if (callback) callback(result);
  }
};

const userSage = Object.keys(sagas).map(item => {
  return function* s() {
    yield takeEvery(item, function*(args) {
      try {
        yield sagas[item](args);
      } catch (e) {
        console.log(e);
      }
    });
  };
});

export default userSage;
