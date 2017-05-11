import {h, render, Component} from 'preact';
import Effect from './';

export default class Reverb extends Component {
    updateParam(event) {
        const param = event.target.name;
        const value = event.target.value;

        this.props.onUpdateParam(param, value);
    }

    render() {
        return (
            <div>
                <label className="form__label">
                    Level
                    <input
                        type="range"
                        name="delay"
                        min="0"
                        max="1"
                        step="0.1"
                        value="s"
                        onChange={::this.updateParam}
                    />
                </label>

                <label className="form__label">
                    Depth
                    <input
                        type="range"
                        name="depth"
                        min="0"
                        max="1"
                        step="0.1"
                        value="s"
                        onChange={::this.updateParam}
                    />
                </label>
            </div>
        );
    }
};
