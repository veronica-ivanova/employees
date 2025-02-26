import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});//установили локальное состояние
        this.props.onUpdateSearch(term) //пробрасываем его наверх
    }
    render() {
        return (
            <input type="text" 
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdateSearch}//пробрасываем его наверх
            />
        )
    }
}

export default SearchPanel;