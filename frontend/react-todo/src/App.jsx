import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import moment from 'moment'
import DbResult from "./components/DbConnection";
import { CssBaseline } from "@mui/material";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [completeDate, setCompleteDate] = useState(null);

  // inputのvalueに変更があった時に呼ばれる onChangeで変更があった時にevent.target.valueに値が入る
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンクリック時に呼ばれる
  const onClickAdd = () => {
    if (todoText === "") return;
    // 今までの未完了タスク配列に、todoTextタスクを追加する
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // [1つ目の引数]番目から数えて[2つ目の引数]個配列要素を消す
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    //delete
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // [1つ目の引数]番目から数えて[2つ目の引数]個配列要素を消す
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    //update(更新)4
    completeTodoDate();
  };

  const onClickRemove = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    // 日付
  };

  const completeTodoDate = () => {
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    setCompleteDate(now)
    // dbに完了に知事を書き込む
    //　引数にidを設定して、update
  }

  return (
    <>
    <CssBaseline />
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTodoは5個までだよ～。消化しろ～
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos 
        todos={completeTodos} 
        onClickRemove={onClickRemove}
        completeDate={completeDate}
      />

      <DbResult />
    </>
  );
};

export default App