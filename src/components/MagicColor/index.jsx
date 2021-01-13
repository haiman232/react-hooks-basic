import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import "./MagicColor.scss";

MagicColor.propTypes = {

};

function MagicColor(props) {
  const color = useMagicColor();
  return (
    <div
      className="magic-box"
      style={{backgroundColor:color}}
    >
    </div>
  );
}

export default MagicColor;