import { format } from 'react-string-format';
import { useState } from 'react';

function Tab(props) {
    const [selectedClass] = useState(props.selected ? "tab-selected" : "tab");

    const handleClick = () => {
        props.callBack(props.id);
    }

    return(
        <button id = {format("tab_{0}", props.id)} className={format('tab {0}', selectedClass)} onClick={handleClick}>
            <h3 className="tab-text">{props.text}</h3>
        </button>
    )
}

export default Tab;