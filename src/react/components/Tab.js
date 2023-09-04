import { format } from 'react-string-format';
import { useState } from 'react';

function Tab(props) {
    const [selectedClass, setSelectedClass] = useState(props.selected ? "tab-selected" : "tab");

    return(
        <div className={format('tab {0}', selectedClass)}>
            <h3 className="tab-text">{props.text}</h3>
        </div>
    )
}

export default Tab;