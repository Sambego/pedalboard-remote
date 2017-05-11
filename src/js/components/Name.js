import {h, render} from 'preact';
// import {string} from 'proptypes';

const Name = ({onSetName}) => {
    name = '';

    const setName = event => {
        name = event.target.value;
    };

    const useName = () => {
        onSetName({name});
    };

    return (
        <div className="container">
            <label className="label">
                User name
                <input type="text" classname="input" onChange={setName}/>
            </label>
            <button className="button button--full" onClick={useName}>Use name</button>
        </div>
    );
};

Name.propTypes = {
    // value: string.required,
};

export default Name;
