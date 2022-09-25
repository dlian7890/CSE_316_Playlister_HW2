import React, { Component } from 'react';

export default class RemoveSongModal extends Component {
  render() {
    const { removeSongCallback, hideRemoveSongModalCallback, selectedSongTitle} =
      this.props;

    return (
      <div class='modal' id='remove-song-modal' data-animation='slideInOutLeft'>
        <div class='modal-root' id='verify-remove-song-root'>
          <div class='modal-north'>remove song?</div>
          <div class='modal-center'>
            <div class='modal-center-content'>
              Are you sure you wish to permanently remove the song, {selectedSongTitle}
              ?
            </div>
          </div>
          <div class='modal-south'>
            <input
              type='button'
              id='remove-song-confirm-button'
              class='modal-button'
              onClick={() => {
                removeSongCallback();
                hideRemoveSongModalCallback();
              }}
              value='Confirm'
            />
            <input
              type='button'
              id='remove-song-cancel-button'
              class='modal-button'
              onClick={hideRemoveSongModalCallback}
              value='Cancel'
            />
          </div>
        </div>
      </div>
    );
  }
}
