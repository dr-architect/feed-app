import React, {FC, useState} from "react";
import {Icon} from "./Icon";
import {IconInterface} from "../InputField/InputField";
import './icons.scss'

interface IconsListProps {
    icons: IconInterface[];
    activeIcon: number;
    handleIcon: (id: number) => void;
}

export const IconsList: FC<IconsListProps> = ({ icons,activeIcon, handleIcon }) => {

    return (
        <div className="icons" data-testid="icons-list">
            {icons.map(({ id, component }) => (
                <Icon key={id}
                      id={id}
                      activeIcon={activeIcon}
                      component={component}
                      handleIcon={handleIcon}
                />
            ))}
        </div>
    );
};

