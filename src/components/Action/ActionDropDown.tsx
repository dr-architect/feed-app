import React from "react";
import './dropDown.scss'

interface DropDownProps {
    handleDeleteItem: () => void;
}

export const ActionDropDown: React.FC<DropDownProps> = ({handleDeleteItem}) => {
    return (
        <div className="action" data-testid="action-drop-down" tabIndex={0}>
            <i className="arrow arrow_down"/>
            <div className="dropDown">
        <span className="dropDown__item" onClick={handleDeleteItem}>
          Delete
        </span>
            </div>
        </div>
    );
};
