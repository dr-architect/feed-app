import React, { useContext } from "react";
import { ActionDropDown } from "./ActionDropDown";
import { FeedsContext } from "../../contexts/feed-context";

interface ActionItemProps {
  id: string;
}

export const ActionItem: React.FC<ActionItemProps> = ({ id }) => {
  const { feeds, updateState } = useContext(FeedsContext);

  const handleDeleteItem = () => {
    const currFeeds = feeds?.filter((item) => item.id !== id);
    updateState({ feeds: currFeeds });
  };

  return <ActionDropDown  handleDeleteItem={handleDeleteItem} />;
};
