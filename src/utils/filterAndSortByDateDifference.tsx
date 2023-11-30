import  moment from 'moment';
import {FeedItem} from "../contexts/feed-context-provider";

export const filterAndSortByDateDifference = (data: FeedItem[]): FeedItem[] => {
    const currentDate = moment();

    const sortedData = data
        .map((item) => ({
            ...item,
            momentDate: moment(item.date),
            differenceInDays: moment(item.date).diff(currentDate ),
        }))
        .sort((a, b) => b.differenceInDays - a.differenceInDays);

    return sortedData;
};
