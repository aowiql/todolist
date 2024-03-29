package com.todolist.todolist.dao;

import com.todolist.todolist.entity.TodoLists;

import java.util.List;

public interface TodoListDAO {

    List<TodoLists> findAll();

    TodoLists findById(int theId);

    TodoLists save(TodoLists theTodo);

    void deleteById(int theId);
}
