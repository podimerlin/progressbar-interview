import React from 'react';
import Bar from './Bar';

const BarList = (props) => {
  const bars = props.bars.map((bar, k) => {
    return (
      <Bar id={k} key={k++} width={bar} limit={props.limit}/>
    );
  })

  return (
    <div>
      {bars}
    </div>
  )
}

export default BarList;