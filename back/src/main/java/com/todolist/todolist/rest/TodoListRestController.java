package com.todolist.todolist.rest;

import com.todolist.todolist.dao.TodoListDAO;
import com.todolist.todolist.entity.TodoLists;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoListRestController {

    private TodoListDAO todoListDAO;

    public TodoListRestController(TodoListDAO theTodoDAO) {
        todoListDAO = theTodoDAO;
    }

    @GetMapping("/lists")
    public List<TodoLists> findAll() {
        return todoListDAO.findAll();
    }
}
