import React, {FC} from "react";
import {Feed} from "./Feed";
import {FaList} from "react-icons/fa";
import {InputField} from "../InputField/InputField";
import {FeedItem} from "../../contexts/feed-context-provider";

interface ItemsListProps {
    items: FeedItem[];
}

export const FeedsList: FC<ItemsListProps> = ({items}) => {
    return (
        <div>
            <div className="feed feed_single">
                <div className="feed__timestamp-block">
                    <div className="icon">
                        <FaList/>
                    </div>
                </div>
                <InputField/>
            </div>
            {items.map(item => (
                <Feed
                    key={item.id}
                    msg={item.msg}
                    id={item.id}
                    date={item.date}
                    status={item.status}
                    component={item.component}
                />
            ))}
        </div>
    );
};
