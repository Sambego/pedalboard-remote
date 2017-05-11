import {h, render, Component} from 'preact';
import io from 'socket.io-client';
import {Name, SelectEffect} from './';

export default class App extends Component {
    constructor(...args) {
        super(...args);

        /**
         * The app's state, it feels like overkill to include redux for something this
         * small. Also, the plane doesn't have internat, so no npm install :)
         */
        this.state = {};

        /**
         * Setup the socket.
         */
        this.socket = io('pedalboard-socket.sambego.be');
    }

    componentDidUpdate() {
        console.log('App did update:', this.state);
    }

    addEffect(effect) {
        this.setState({effect});

        this.socket.emit('add effect', {
            name: this.state.name,
            effect,
        });
    }

    removeEffect() {
        this.setState({effect: null});

        this.socket.emit('remove effect', {name: this.state.name});
    }

    updateParam(param, value) {
        this.socket.emit('update param', {
            param,
            value,
            name: this.state.name,
        });
    }

    render() {
        return (
            <div className="wrapper">
                {this.state.name
                    ? <SelectEffect onAddEffect={::this.addEffect} onRemoveEffect={::this.removeEffect} onUpdateParam={::this.updateParam}/>
                    : <Name onSetName={::this.setState} />
                }
            </div>
        );
    }
}
