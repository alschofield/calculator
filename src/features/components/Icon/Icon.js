import React from 'react';
import { VscPaintcan } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Icons = {
  paint: <VscPaintcan/>
}

export default function Icon(props) {
  return (
    <div data-testid='icon-container'>
      <IconContext.Provider value={{ className: 'icon-container', style: { ...props.theme, width: '85%', height: '100%', cursor: 'pointer' } }}>
        {Icons[props.icon]}
      </IconContext.Provider>
    </div>
  );
}

Icon.defaultProps = {
  'icon': 'paint'
}
