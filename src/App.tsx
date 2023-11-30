import React, { useContext, FC } from 'react';
import './style.scss';
import { FeedsList } from './components/Feed/FeedsList';
import { IconContext } from 'react-icons';
import { FeedsContext } from './contexts/feed-context';

const App: FC = () => {
    const { feeds , updateState } = useContext(FeedsContext);
    const feedsData = feeds || [];
    return (
        <IconContext.Provider value={{ color: '#999999', size: '0.75em', className: 'fa-icon' }}>
            <div className="main">
                <FeedsList items={feedsData} />
            </div>
        </IconContext.Provider>
    );
};

export default App;
