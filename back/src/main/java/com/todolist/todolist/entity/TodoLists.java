package com.todolist.todolist.entity;

import jakarta.persistence.*;

@Entity
@Table(name="todolists")
public class TodoLists {
    // fields

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="todo_task")
    private String todoTask;

    @Column(name="todo_done")
    private boolean todoDone;

    // constructor
    public TodoLists() {

    }

    public TodoLists(String todoTask, boolean todoDone) {
        this.todoTask = todoTask;
        this.todoDone = todoDone;
    }

    // getter/setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTodoTask() {
        return todoTask;
    }

    public void setTodoTask(String todoTask) {
        this.todoTask = todoTask;
    }

    public boolean isTodoDone() {
        return todoDone;
    }

    public void setTodoDone(boolean todoDone) {
        this.todoDone = todoDone;
    }

    // toString

    @Override
    public String toString() {
        return "TodoLists{" +
                "id=" + id +
                ", todoTask='" + todoTask + '\'' +
                ", todoDone=" + todoDone +
                '}';
    }
}
