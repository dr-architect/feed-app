import React, {FC} from 'react';
import './card.scss';
import {Users} from '../../constants/users';

interface CardProps {
    msg: string;
    status: string;
}
export const Card: FC<CardProps> = ({msg,status}) => {
    return (
        <div className="card">
            <span><i>{Users.current}</i>  {status} <i>{Users.contact}</i></span>
            <span>{msg}</span>
        </div>
    );
};
