import {h, render, Component} from 'preact';
import {Distortion, Delay, Flanger, Reverb} from './';

export default class SelectEffect extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            effects: [
                'distortion',
                'delay',
                'flanger',
                'reverb',
            ],
            effect: null,
        };
    }

    toggleEffect(effect) {
        if (this.state.effect) {
            this.setState({effect: null});

            return this.props.onRemoveEffect();
        }

        this.setState({effect});

        return this.props.onAddEffect(effect);
    };

    renderEffect() {
        switch (this.state.effect) {
            case 'distortion':
                return (<Distortion onUpdateParam={this.props.onUpdateParam}/>);
                break;
            case 'delay':
                return (<Delay onUpdateParam={this.props.onUpdateParam}/>);
                break;
            case 'flanger':
                return (<Flanger onUpdateParam={this.props.onUpdateParam}/>);
                break;
            case 'reverb':
                return (<Reverb onUpdateParam={this.props.onUpdateParam}/>);
                break;
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.effects.map(effect => <li><button onClick={() => ::this.toggleEffect(effect)} disabled={this.state.effect}>{effect}</button></li>)}
                </ul>
                <p>{this.state.effect}</p>
                <button onClick={::this.toggleEffect} disabled={!this.state.effect}>Remove effect</button>

                {this.renderEffect()}
            </div>
        );
    }
};
