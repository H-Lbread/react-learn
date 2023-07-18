

import React, { useState } from 'react';

/**
 * 创建交互性
 * 点击时显示“X”
 * 需要在内部声明一个handleClick函数
 */
function Square({value}) {
  // 3 希望 Square 组件能够“记住”它被单击过，并用“X”填充它。为了“记住”一些东西，组件使用 state。
  // value : 存储值
  // setValue : 可用于更改值的函数
  // const [value,setValue] = useState(null)

  // function handleClick() {  // 1
  //   // 点击时更改为 X 
  //   setValue('X')
  // }
  
  return <button className='square'>{value}</button> // 2
}
/**
 * 4 将游戏的 state 存储在 Board 父组件中，而不是每个 Square 中。Board 组件可以通过传递一个 props 来告诉每个 Square 显示什么
 * 5 将状态提升到父组件中
 */
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)) // 6 创建了一个包含九个元素的数组,并将它们中的每一个都设置为 null
  // 数组中的每个元素对应于一个 square 的值。稍后填写棋盘时，squares 数组将如下所示： ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
  // 7 Board 组件需要将 value props 向下传递给它渲染的每个 Square
  // 8 编辑 Square 组件，以从 Board 组件接收 value props。这将需要删除 Square 组件自己的 value state 和按钮的 onClick props
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </div>
  )
}
