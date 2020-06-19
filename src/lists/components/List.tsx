import React, { FC, useState, memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FieldEditor } from 'shared';
import ListOfCard from 'cards';
import { useSelector } from 'react-redux';
import { AppState } from 'utils';

export interface ListProps {
  index: number;
  id: string;
  onEdit: (listId: string, newTitle: string) => any;
  onDelete: (listId: string) => any;
}

const List: FC<ListProps> = ({ index, id, onEdit, onDelete }) => {
  const handleDelete = () => onDelete(id);
  const handleSubmit = (newTitle: string) => onEdit(id, newTitle);

  const title = useSelector<AppState, string>(({ lists }) => lists[id].title);

  // Caret insert in edit mode won't work if disableInteractiveElementBlocking
  // will be enabled
  const [shouldDrag, setShouldDrag] = useState(true);
  const toggleShouldDrag = () => setShouldDrag(!shouldDrag);

  return (
    <Draggable
      draggableId={id}
      index={index}
      disableInteractiveElementBlocking={shouldDrag}
    >
      {provided => (
        <div
          className="list"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <header>
            <FieldEditor
              fieldName="Title"
              value={title}
              onDelete={handleDelete}
              onSubmit={handleSubmit}
              onEditToggle={toggleShouldDrag}
            />
          </header>
          <ListOfCard listId={id} />
        </div>
      )}
    </Draggable>
  );
};

export default memo(List);
