package com.todolist.todolist.service;

import com.todolist.todolist.dao.TodoListDAO;
import com.todolist.todolist.entity.TodoLists;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private TodoListDAO todoListDAO;

    public TodoServiceImpl(TodoListDAO theTodoListDAO) {
        todoListDAO = theTodoListDAO;
    }

    @Override
    public List<TodoLists> findAll() {
        return todoListDAO.findAll();
    }

    @Override
    public TodoLists findById(int theId) {
        return todoListDAO.findById(theId);
    }

    @Override
    @Transactional
    public TodoLists save(TodoLists theTodo) {
        return todoListDAO.save(theTodo);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        todoListDAO.deleteById(theId);

    }
}
