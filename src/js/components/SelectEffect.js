import {h, render, Component} from 'preact';
import {Distortion, Delay, Flanger, Reverb, Tremolo} from './';

export default class SelectEffect extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            effects: [
                'distortion',
                'delay',
                'flanger',
                'reverb',
                'tremolo',
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
            case 'tremolo':
                return (<Tremolo onUpdateParam={this.props.onUpdateParam}/>);
                break;
            default:
                return null;
        }
    }

    renderList() {
        return (
            <ul className="list">
                {this.state.effects.map(effect => <li><button className="button button--full" onClick={() => ::this.toggleEffect(effect)}>{effect}</button></li>)}
            </ul>
        );
    }

    renderPedal() {
        return (
            <div className="pedal">
                {this.renderEffect()}

                <button className="button button--full" onClick={::this.toggleEffect}>Remove effect</button>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.state.effect ? this.renderPedal() : this.renderList()}
            </div>
        );
    }
};
