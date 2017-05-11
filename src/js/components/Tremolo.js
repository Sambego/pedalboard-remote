import {h, render, Component} from 'preact';
import Effect from './';

export default class Tremolo extends Component {
    updateParam(event) {
        const param = event.target.name;
        const value = event.target.value;

        this.props.onUpdateParam(param, value);
    }

    render() {
        return (
            <div>
                <label className="form__label">
                Speed
                    <input
                        type="range"
                        name="speed"
                        min="1"
                        max="10"
                        step="0.5"
                        value="1.5"
                        onChange={::this.updateParam}
                    />
                </label>
            </div>
        );
    }
};
