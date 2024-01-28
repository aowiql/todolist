package com.todolist.todolist.rest;

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

    // 게시글 수정
    @PutMapping("/lists")
    public TodoLists updateTodo(@RequestBody TodoLists theTodo) {
        theTodo.setTodoDone(!theTodo.isTodoDone());

        TodoLists dbTodo = todoService.save(theTodo);

        return dbTodo;
    }

    // 게시글 삭제
    @DeleteMapping("/lists/{todoId}")
    public String deleteTodo(@PathVariable int todoId) {
        TodoLists todoLists = todoService.findById(todoId);

        if(todoLists == null) {
            throw new RuntimeException("Todo lists not found - " + todoId);
        }

        todoService.deleteById(todoId);

        return "Delete todo id - " + todoId;
    }
}
