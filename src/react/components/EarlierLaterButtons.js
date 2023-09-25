import parse from 'html-react-parser';

export default function EarlierLaterButtons(props) {

    return(
        <div className="el-buttons-container">
           <button className="el-buttons-button el-buttons-later el-buttons-disabled">Show Later</button>
           <button className="el-buttons-button el-buttons-earlier el-buttons-disabled">Show Earlier</button> 
        </div>
    )
}