import React, {useState} from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* mapでループ処理 indexには要素番号が入る→どの削除/完了が押されたか判定できる*/}
          {todos.map((todo, index) => {
            {
              /** 差分のみDOMに反映しているため、何個目の要素なのかを比較するためにkeyを設定*/
            }
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => {
                  onClickComplete(index)}}>完了</button>
                {/**関数に引数を渡したい場合はアロー関数で関数を生成しなければいけない */}
                <button onClick={() =>{
                  onClickDelete(index)}}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
