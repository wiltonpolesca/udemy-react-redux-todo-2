import React, { Component } from 'react';
import axios from 'axios';

//components
import PageHeader from '../components/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default prop =>
    <div>
        <PageHeader name="TODO" />
        <TodoForm />
        <TodoList />
    </div>
