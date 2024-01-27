package com.todolist.todolist.rest;

import com.todolist.todolist.dao.TodoListDAO;
import com.todolist.todolist.entity.TodoLists;
import com.todolist.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoListRestController {

    private TodoService todoService;

    @Autowired
    public TodoListRestController(TodoService theTodoService) {
        todoService = theTodoService;
    }

    // 전체 조회

    @GetMapping("/lists")
    public List<TodoLists> findAll() {
        return todoService.findAll();
    }

    // 게시글 작성
    @PostMapping("/lists")
    public TodoLists addTodo(@RequestBody TodoLists theTodo) {
        theTodo.setId(0);

        TodoLists dbTodo = todoService.save(theTodo);

        return dbTodo;
    }

}
