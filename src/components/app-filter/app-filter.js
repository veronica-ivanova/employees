import { Component } from 'react';

import './app-filter.css';

// class AppFilter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: ''
//         }
//     }

//     onFilterSelect =(e) => {
//         const filter = e.currentTarget.getAttribute('data-filter')
//         this.setState({filter});
//         this.props.onFilterSelect(filter)
//     }
//     render() {
//         return (
//             <div className="btn-group">
//                 <button 
//                     className="btn btn-light"
//                     type="button"
//                     data-filter=''
//                     onClick={this.onFilterSelect}>
//                         Все сотрудники
//                 </button>
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter="rise"
//                     onClick={this.onFilterSelect}>
//                         На повышение
//                 </button>
//                 <button 
//                     className="btn btn-outline-light"
//                     type="button"
//                     data-filter="salary"
//                     onClick={this.onFilterSelect}>
//                         З/П больше 1000$
//                 </button>
//             </div>
//         )

//     }

// }

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},        
    ]

    const buttons = buttonsData.map(({name, label}) => {
        // Мы передали в <AppFilter filter={filter}> из App и теперь в props.filter лежит: all/rise/salary
        const active = props.filter === name; // if props.filter === name в active возвращ true
        const clazz = active ? 'btn-light' : 'btn-outline-light' 
        return (
            <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
            {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}
export default AppFilter