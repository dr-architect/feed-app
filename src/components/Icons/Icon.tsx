import React, {FC, useState} from 'react';

interface IconProps {
  id: number;
  component: React.FC;
    activeIcon: number;
  handleIcon: (id: number) => void;
}

export const Icon: FC<IconProps> = (
    { id,
        activeIcon,
        component: RenderComponent,
        handleIcon }) => {

  return (
      <i tabIndex={id}
         data-testid={`icon-${id}`}
         className={activeIcon === id ? 'icon icon_active' : 'icon'}
         onClick={() => handleIcon(id)}>
        <RenderComponent />
      </i>
  );
};
