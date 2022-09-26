import React from 'react';

export default class SidebarHeading extends React.Component {
  render() {
    const { createNewListCallback, canCreateNewList } = this.props;
    let addNewListClass = 'toolbar-button';
    if (!canCreateNewList) addNewListClass += ' disabled';
    return (
      <div id='sidebar-heading'>
        <input
          type='button'
          id='add-list-button'
          className={addNewListClass}
          onClick={() => {
            if (canCreateNewList) createNewListCallback();
          }}
          value='+'
        />
        Your Playlists
      </div>
    );
  }
}
