import {h, render, Component} from 'preact';
import Effect from './';

export default class Delay extends Component {
    updateParam(event) {
        const param = event.target.name;
        const value = event.target.value;

        this.props.onUpdateParam(param, value);
    }

    render() {
        return (
            <div>
                <label className="form__label">
                    Wetness
                    <input
                        type="range"
                        name="wetness"
                        min="0"
                        max="1"
                        step="0.1"
                        className="input--range"
                        value="1"
                        onChange={::this.updateParam}
                    />
                </label>

                <label className="form__label">
                    Speed
                    <input
                        type="range"
                        name="speed"
                        min="0"
                        max="5"
                        step="0.1"
                        className="input--range"
                        value="0.5"
                        onChange={::this.updateParam}
                    />
                </label>

                <label className="form__label">
                    Duration
                    <input
                        type="range"
                        name="duration"
                        min="0"
                        max="0.9"
                        step="0.05"
                        className="input--range"
                        value="0.4"
                        onChange={::this.updateParam}
                    />
                </label>
            </div>
        );
    }
};
