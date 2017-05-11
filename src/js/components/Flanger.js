import {h, render, Component} from 'preact';
import Effect from './';

export default class Flanger extends Component {
    updateParam(event) {
        const param = event.target.name;
        const value = event.target.value;

        this.props.onUpdateParam(param, value);
    }

    render() {
        return (
            <div>
            <label className="form__label">
                    Delay
                    <input
                        type="range"
                        name="delay"
                        min="0.001"
                        max="0.02"
                        step="0.001"
                        value="0.005"
                        onChange={::this.updateParam}
                    />
                </label>

                <label className="form__label">
                    Depth
                    <input
                        type="range"
                        name="depth"
                        min="0"
                        max="0.02"
                        step="0.001"
                        value="0.002"
                        onChange={::this.updateParam}
                    />
                </label>

                <label className="form__label">
                    Feedback
                    <input
                        type="range"
                        name="feedback"
                        min="0"
                        max="0.9"
                        step="0.1"
                        value="0.5"
                        onChange={::this.updateParam}
                    />
                </label>

                <label className="form__label">
                    Speed
                    <input
                        type="range"
                        name="speed"
                        min="0.05"
                        max="1"
                        step="0.05"
                        value="0.25"
                        onChange={::this.updateParam}
                    />
                </label>
            </div>
        );
    }
};
