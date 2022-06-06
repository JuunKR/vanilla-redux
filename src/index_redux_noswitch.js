import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;
/* reducer는 데이터를 수정하는 함수*/
const reducer = () => {};

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return (count = 1);
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  console.log("there was a change on the store");
  console.log(countStore.getState());
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

console.log(countStore);
/*{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}*/

console.log(countStore.getState());
/*hello*/

/* reducer에 action을 전달*/
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
minus.addEventListener("click", () => handleMinus());
