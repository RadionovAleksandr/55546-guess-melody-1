import * as React from 'react';

export const snapshotURL = `void://for-snapshot`;

interface Props {
  isLoading: boolean,
  isPlaying: boolean,
  onPlayButtonClick: () => void,
  renderAudio: () => React.ReactElement,
}

export default class AudioComponent extends React.PureComponent<Props, null> {
  render() {
    const {isLoading, isPlaying, renderAudio, onPlayButtonClick} = this.props;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onPlayButtonClick} />
        <div className="track__status">{renderAudio()}</div>
      </>
    );
  }
}
