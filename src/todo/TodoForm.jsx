import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../components/Grid';
import IconButton from '../components/IconButton';

import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {

        const { add, search, description } = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            this.props.clear();
        }
    }

    render() {
        const { add, search, description, clear } = this.props;

        return (
            <React.Fragment>
                <div role="form" className="todo-forms">
                    <Grid cols="12 9 10">
                        <input id="description" type="text"
                            className="form-control"
                            placeholder="Add a task"
                            value={description}
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                        />
                    </Grid>
                    <Grid cols="12 3 2">
                        <IconButton colorStyle='primary' icon='plus' onClick={() => add(description)} />
                        <IconButton colorStyle='info' icon='search' onClick={search} />
                        <IconButton colorStyle='default' icon='close' onClick={clear} />
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);