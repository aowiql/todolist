package com.todolist.todolist.dao;

import com.todolist.todolist.entity.TodoLists;

import java.util.List;

public interface TodoListDAO {

    List<TodoLists> findAll();

}
