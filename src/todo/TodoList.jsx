import React from 'react';
import {connect} from 'react-redux';

import IconButton from '../components/IconButton';
import './todo.css';

import { bindActionCreators } from 'redux';

import { markAsDone, markAsPending, remove } from './todoActions';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(item =>
            <tr key={item._id} className={item.done ? 'marked-as-done': ''}>
                <td>{item.description}</td>

                <td >
                    <IconButton colorStyle='success' icon='check' hide={item.done}
                        onClick={() => props.markAsDone(item)}></IconButton>
                    <IconButton colorStyle='warning' icon='undo' hide={!item.done}
                        onClick={() => props.markAsPending(item)}></IconButton>
                    <IconButton colorStyle='danger' icon='trash-o'  
                        onClick={() => props.remove(item)}></IconButton>
                </td>
            </tr>
        )
    }

    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th className="table-actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({list: state.todo.list});
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);