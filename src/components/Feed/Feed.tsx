import React, {memo} from "react";
import { Card } from "../Card/Card";
import './feed.scss'

import { ActionItem } from "../Action/ActionItem";
import moment from "moment";
import {FeedItem} from "../../contexts/feed-context-provider";

export const Feed: React.FC<FeedItem> = memo((
    {
        id,
        msg,
        date,
        status,
        component: RenderIconComponent
    }) => {
    const _date = moment(date);
    const currDate = moment();
    const daysDifference = Math.abs(_date.diff(currDate, 'days'));

    return (
        <div className="feed">
            <div className="feed__timestamp-block">
                <div className="timestamp">{daysDifference}d</div>
                <div className="icon"><RenderIconComponent /></div>
            </div>
            <Card msg={msg} status={status}/>
            <ActionItem id={id} />
        </div>
    );
})

