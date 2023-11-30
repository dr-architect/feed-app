// TexArea.tsx
import React, { useContext, useRef, useState } from 'react';
import { IconsList } from '../Icons/IconsList';
import './input-field.scss';
import useOutsideClick from '../../hooks/useOutsideClick';
import { FeedsContext } from '../../contexts/feed-context';
import { FaBeer, FaComment, FaUser, FaPhone, FaCoffee } from 'react-icons/fa';
import moment from 'moment';
import { filterAndSortByDateDifference } from '../../utils/filterAndSortByDateDifference';
import { FeedTypes } from '../../constants/feedTypes';
import { v4 as uuidv4 } from 'uuid';
import { FeedItem } from '../../contexts/feed-context-provider';

export interface IconInterface {
    id: number;
    type: string;
    text: string;
    activeIcon?: number;
    component: React.FC;
}

export const icons: IconInterface[] = [
    { id: 1, type: FeedTypes.message, text: 'added a note to', component: FaComment },
    { id: 2, type: FeedTypes.phone, text: 'had a call with', component: FaPhone },
    { id: 3, type: FeedTypes.beer, text: 'had a beer with', component: FaBeer },
    { id: 4, type: FeedTypes.coffee, text: 'had a coffee with', component: FaCoffee },
    { id: 5, type: FeedTypes.meeting, text: 'had a meeting with', component: FaUser },
];

export const InputField: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);
    const texAreaRef = useRef<HTMLTextAreaElement>(null); // Fix the type here
    const { feeds, updateState } = useContext(FeedsContext);
    const [isActive, setActive] = useState(false);
    const [icon, setIcon] = useState(icons[0]);

    useOutsideClick(ref, (e: MouseEvent) => {
        if (e.target) {
            setActive(false);
        }
    });

    const handleIcon = (id: number): void => {
        const iconItem = icons.find((i: IconInterface) => i.id === id);
        if (iconItem) {
            setIcon(iconItem);
        }
    };

    const addNewFeed = () => {
        const newFed: FeedItem = {
            id: uuidv4(),
            date: moment().format(),
            msg: texAreaRef?.current?.value || '',
            component: icon.component,
            status: icon.text,
        };

        if (feeds?.length) {
            updateState({
                feeds: filterAndSortByDateDifference([...feeds, newFed]),
            });
        }
    };

    return (
        <div className="col textarea-box " ref={ref}>
      <textarea
          rows={isActive ? 5 : 1}
          placeholder="Add a note about Milton"
          ref={texAreaRef}
          onFocus={() => setActive(true)}
      />
            {isActive && (
                <div className="container">
                    <IconsList icons={icons} activeIcon={icon.id} handleIcon={handleIcon} />
                    <button onClick={() => addNewFeed()}>Submit</button>
                </div>
            )}
        </div>
    );
};
