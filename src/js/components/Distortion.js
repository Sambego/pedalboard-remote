import {h, render, Component} from 'preact';
import Effect from './';

export default class Distortion extends Component {
    updateParam(event) {
        const param = event.target.name;
        const value = event.target.value;

        this.props.onUpdateParam(param, value);
    }

    render() {
        return (
            <div>
                <label className="form__label">
                    intensity
                    <input
                        type="range"
                        name="intensity"
                        min="1"
                        max="100"
                        step="2"
                        className="input--range"
                        value="80"
                        onChange={::this.updateParam}
                    />
                </label>

                <label className="form__label">
                    Gain
                    <input
                        type="range"
                        name="gain"
                        min="1"
                        max="150"
                        step="5"
                        className="input--range"
                        value="50"
                        onChange={::this.updateParam}
                    />
                </label>
            </div>
        );
    }
};
