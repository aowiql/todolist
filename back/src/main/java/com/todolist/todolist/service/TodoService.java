package com.todolist.todolist.service;

import com.todolist.todolist.entity.TodoLists;

import java.util.List;

public interface TodoService {

    List<TodoLists> findAll();

    TodoLists findById(int theId);

    TodoLists save(TodoLists theTodo);

    void deleteById(int theId);
}
