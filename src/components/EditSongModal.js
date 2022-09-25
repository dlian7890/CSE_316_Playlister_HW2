import React, { Component } from 'react';

export default class EditSongModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      artist: '',
      youTubeId: '',
    };
  }

  setTitle = (event) => {
    this.setState({
      title: event.target.value,
      artist: this.state.artist,
      youTubeId: this.state.youTubeId,
    });
  };
  setArtist = (event) => {
    this.setState({
      title: this.state.title,
      artist: event.target.value,
      youTubeId: this.state.youTubeId,
    });
  };
  setYouTubeId = (event) => {
    this.setState({
      title: this.state.title,
      artist: this.state.artist,
      youTubeId: event.target.value,
    });
  };

  render() {
    const { hideEditSongModalCallback, editSongCallback, } = this.props;

    return (
      <div class='modal' id='edit-song-modal' data-animation='slideInOutLeft'>
        <div class='modal-root' id='verify-edit-song-root'>
          <div class='modal-north'>Edit Song</div>
          <div class='modal-center'>
            <div class='modal-center-content'>
              <div class='edit-song-modal-row'>
                <span class='modal-label'>Title:</span>
                <input
                  type='text'
                  id='edit-song-title-form'
                  class='modal-form'
                  placeholder=''
                  onChange={this.setTitle}
                />
              </div>
              <div class='edit-song-modal-row'>
                <span class='modal-label'>Artist:</span>
                <input
                  type='text'
                  id='edit-song-artist-form'
                  class='modal-form'
                  placeholder=''
                  onChange={this.setArtist}
                />
              </div>
              <div class='edit-song-modal-row'>
                <span class='modal-label'>YouTubeId:</span>
                <input
                  type='text'
                  id='edit-song-youTubeId-form'
                  class='modal-form'
                  placeholder=''
                  onChange={this.setYouTubeId}
                />
              </div>
            </div>
          </div>
          <div class='modal-south'>
            <input
              type='button'
              id='edit-song-confirm-button'
              class='modal-button'
              value='Confirm'
              onClick={() => {
                editSongCallback(
                  this.state.title,
                  this.state.artist,
                  this.state.youTubeId
                );
                hideEditSongModalCallback();
              }}
            />
            <input
              type='button'
              id='edit-song-cancel-button'
              class='modal-button'
              value='Cancel'
              onClick={hideEditSongModalCallback}
            />
          </div>
        </div>
      </div>
    );
  }
}
