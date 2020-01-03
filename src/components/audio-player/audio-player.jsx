import React from 'react';

class AudioPlayer extends React.PureComponent {
    constructor(props) {
        super(props);

        this._audio = new Audio(this.props.src);
        const { isPlaying, src } = props;
        
        this.state = {
            progress: 0,
            isLoading: true,
            isPlaying: false,
        };

        this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
    }


    render() {
        console.log(` AudioPlayer state`)
        console.log(this.state)
        // const { isloading } = this.state.isloading;
        const { isPlaying } = this.state.isPlaying;

        return (
            <React.Fragment>
                <button
                    className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
                    type="button"
                    disabled={this.state.isloading}
                    onClick={this._onplayButtonClick}
                />
                <div className="track__status">
                    <audio />
                </div>
            </React.Fragment>
        );
    };
    componentDidMount() {

        this._audio = new Audio(this.props.src);

        this._audio.onCanPlayThrough = () => this.setState({
            isLoading: false,
        });


        this._audio.onPlay = () => this.setState({
            isPlaying: true,
        });

        this._audio.onPause = () => this.setState({
            isPlaying: false,
        });

        this._audio.onTimeUpdate = () => this.setState({
            progress: this._audio.currentTime
        });
    }
    componentWillMount() {
        this._audio.onCanPlayThrough = null;
        this._audio.onPlay  = null;
        this._audio.onPause = null;
        this._audio.onTimeUpdate = null;
        this._audio.src = ``;
        this._audio = null;
    }

    componentDidUpdate() {
        if (this.state.isPlaying) {
            this.audio.onPlay();
        } else {
            this.audio.onPause();
        }
    };

    _onPlayButtonClick() {
        this.props.onPlayButtonClick();
        this.setState({ isPlaying: !this.state.isPlaying });
    }
}

export default AudioPlayer;


