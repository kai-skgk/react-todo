import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickRemove } = props;
  const completeDate = props.completeDate;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickRemove(index)}>戻す</button>
                <div className="complete-date">　完了日時：{completeDate}</div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
