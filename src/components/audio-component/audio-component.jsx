import React from 'react';
import propTypes from 'prop-types';

export const snapshotURL = `void://for-snapshot`;

export default class AudioComponent extends React.PureComponent {
  render() {
    const {isLoading, isPlaying, renderAudio, onPlayButtonClick} = this.props;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onPlayButtonClick}
        />
        <div className="track__status">
          {renderAudio()}
        </div>
      </>
    );
  }
}

AudioComponent.propTypes = {
  isLoading: propTypes.bool.isRequired,
  isPlaying: propTypes.bool.isRequired,
  onPlayButtonClick: propTypes.func.isRequired,
  renderAudio: propTypes.func.isRequired,
  src: propTypes.string.isRequired,
};


// class AudioComponent extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     if (props.src === snapshotURL) {
//       this._audioRef = {
//         current: {
//           play() {},
//           pause() {}
//         }
//       };
//     } else {
//       this._audioRef = React.createRef();
//     }

//     this.state = {
//       progress: 0,
//       isLoading: true,
//       isPlaying: props.isPlaying,
//     };

//     this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
//   }

//   render() {
//     const {isLoading, isPlaying} = this.state;

//     return (
//       <React.Fragment>
//         <button
//           className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
//           type="button"
//           disabled={isLoading}
//           onClick={this._onPlayButtonClick}
//         />
//         <div className="track__status">
//           <audio
//             ref={this._audioRef}
//           />
//         </div>
//       </React.Fragment>
//     );
//   }

//   componentDidMount() {
//     const {src} = this.props;

//     if (src === snapshotURL) {
//       return;
//     }

//     const audio = this._audioRef.current;

//     audio.src = src;

//     audio.oncanplaythrough = () => this.setState({
//       isLoading: false,
//     });

//     audio.onplay = () => {
//       this.setState({
//         isPlaying: true,
//       });
//     };

//     audio.onpause = () => this.setState({
//       isPlaying: false,
//     });

//     audio.ontimeupdate = () => this.setState({
//       progress: audio.currentTime
//     });
//   }

//   componentDidUpdate() {
//     const audio = this._audioRef.current;

//     audio[this.props.isPlaying ? `play` : `pause`]();
//   }

//   componentWillUnmount() {
//     const audio = this._audioRef.current;

//     audio.oncanplaythrough = null;
//     audio.onplay = null;
//     audio.onpause = null;
//     audio.ontimeupdate = null;
//     audio.src = ``;
//   }

//   _onPlayButtonClick() {
//     this.props.onPlayButtonClick();
//     this.setState({isPlaying: !this.state.isPlaying});
//   }
// }

// AudioComponent.propTypes = {
//   isPlaying: propTypes.bool.isRequired,
//   onPlayButtonClick: propTypes.func.isRequired,
//   src: propTypes.string.isRequired,
// };

// export default AudioComponent;
