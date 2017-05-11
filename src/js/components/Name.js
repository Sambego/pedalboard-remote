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
        <div className="name">
            <label className="label">
                User name
                <input classname="input" onChange={setName}/>
            </label>
            <button className="button" onClick={useName}>Use name</button>
        </div>
    );
};

Name.propTypes = {
    // value: string.required,
};

export default Name;
