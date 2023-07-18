import React, { useState } from "react";

/**
 * 创建交互性
 * 点击时显示“X”
 * 需要在内部声明一个handleClick函数
 */
function Square({ value, onSquareClick }) {
  // 3 希望 Square 组件能够“记住”它被单击过，并用“X”填充它。为了“记住”一些东西，组件使用 state。
  // value : 存储值
  // setValue : 可用于更改值的函数
  // const [value,setValue] = useState(null)

  // function handleClick() {  // 1
  //   // 点击时更改为 X
  //   setValue('X')
  // }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  ); // 2
}
/**
 * 4 将游戏的 state 存储在 Board 父组件中，而不是每个 Square 中。Board 组件可以通过传递一个 props 来告诉每个 Square 显示什么
 * 5 将状态提升到父组件中
 */
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); // 9 交替落子 ==> 每次落子时 xIsNext 将被翻转以确定下一次游戏 state 将被保存。你将更新 Board 的 handleClick 函数以翻转 xIsNext 的值

  const [squares, setSquares] = useState(Array(9).fill(null)); // 6 创建了一个包含九个元素的数组,并将它们中的每一个都设置为 null
  // 数组中的每个元素对应于一个 square 的值。稍后填写棋盘时，squares 数组将如下所示： ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
  // 7 Board 组件需要将 value props 向下传递给它渲染的每个 Square
  // 8 编辑 Square 组件，以从 Board 组件接收 value props。这将需要删除 Square 组件自己的 value state 和按钮的 onClick props

  function handleClick(i) {
    // 11 判断是否存在x或o  若存在return
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice(); //创建副本 （不直接改变底层数据）
    // 10
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

/**
 * 1、单击左上角的方块运行 button 从 Square 接收到的 onClick props 的函数。Square 组件从 Board 通过 onSquareClick props 接收到该函数。Board 组件直接在 JSX 中定义了该函数。它使用参数 0 调用 handleClick。
 * 2、handleClick 使用参数（0）将 squares 数组的第一个元素从 null 更新为 X。
 * 3、Board 组件的 squares state 已更新，因此 Board 及其所有子组件都将重新渲染。这会导致索引为 0 的 Square 组件的 value props 从 null 更改为 X。
 */
