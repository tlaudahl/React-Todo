import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';

export class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            item: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        })
        document.getElementById('todoInput').value = '';
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                id='search'
                label='Search'
                type='search'
                value={this.props.searchTerm}
                margin='normal'
                name='search'
                fullWidth
                variant='filled'
                onChange={this.props.handleSearch}
                />
                <TextField
                type='text'
                value={this.item}
                name='item'
                label='Todo Item'
                margin='normal'
                fullWidth
                variant='filled'
                onChange={this.handleChange}
                id='todoInput'
                />
                <div className='btnContainer'>
                    <Button variant='contained' color='primary' type='submit'>Add item</Button>
                    <Button variant='contained' color='secondary' onClick={this.props.clearDone}>Clear done items</Button>
                </div>
            </form>
        )
    }
}

export default TodoForm
