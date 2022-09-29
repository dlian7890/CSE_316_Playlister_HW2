import React from 'react';

export default class EditToolbar extends React.Component {
  render() {
    const {
      canAddSong,
      canUndo,
      canRedo,
      canClose,
      addSongCallback,
      undoCallback,
      redoCallback,
      closeCallback,
    } = this.props;
    return (
      <div id='edit-toolbar'>
        <input
          type='button'
          id='add-song-button'
          value='+'
          className='toolbar-button'
          disabled={!canAddSong}
          onClick={addSongCallback}
        />
        <input
          type='button'
          id='undo-button'
          value='⟲'
          className='toolbar-button'
          disabled={!canUndo}
          onClick={undoCallback}
        />
        <input
          type='button'
          id='redo-button'
          value='⟳'
          className='toolbar-button'
          disabled={!canRedo}
          onClick={redoCallback}
        />
        <input
          type='button'
          id='close-button'
          value='&#x2715;'
          className='toolbar-button'
          disabled={!canClose}
          onClick={closeCallback}
        />
      </div>
    );
  }
}
