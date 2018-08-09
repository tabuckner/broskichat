import React from 'react';
import Point from './Point/Point';

const Marketing = (props) => {
  return (
    <div className="container" style={{ padding: '15px 0' }} >
      <div className="columns">
        {props.content.map((p, i) => {
          return (
            <div key={`column-${i}`} className="column">
              <Point key={`${i}-${p.title}`} point={p} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Marketing;