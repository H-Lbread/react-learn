

import React, { useState } from 'react';

/**
 * 创建交互性
 * 点击时显示“X”
 * 需要在内部声明一个handleClick函数
 */
function Square() {
  // 3 希望 Square 组件能够“记住”它被单击过，并用“X”填充它。为了“记住”一些东西，组件使用 state。
  // value : 存储值
  // setValue : 可用于更改值的函数
  const [value,setValue] = useState(null)

  function handleClick() {  // 1
    // 点击时更改为 X 
    setValue('X')
    
  }
  
  return <button className='square' onClick={handleClick}>{value}</button> // 2
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}
