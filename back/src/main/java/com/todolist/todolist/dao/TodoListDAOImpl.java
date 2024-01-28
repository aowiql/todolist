package com.todolist.todolist.dao;

import com.todolist.todolist.entity.TodoLists;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TodoListDAOImpl implements TodoListDAO {

    private EntityManager entityManager;

    @Autowired
    public TodoListDAOImpl(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    @Override
    public List<TodoLists> findAll() {

        // create Query
        TypedQuery<TodoLists> theQuery =
                entityManager.createQuery("from TodoLists", TodoLists.class);

        // execute query and get result list
        List<TodoLists> todoLists = theQuery.getResultList();

        return todoLists;
    }

    @Override
    public TodoLists findById(int theId) {

        TodoLists theTodo = entityManager.find(TodoLists.class, theId);

        return theTodo;
    }

    @Override
    public TodoLists save(TodoLists theTodo) {
        if(theTodo.getId() == 0) {
            entityManager.persist(theTodo);
        } else {
            TodoLists existingTodo = entityManager.find(TodoLists.class, theTodo.getId());

//            existingTodo.setTodoTask(theTodo.getTodoTask());

            existingTodo.setTodoDone(!existingTodo.isTodoDone());
        }

        return theTodo;
    }

    @Override
    public void deleteById(int theId) {

        TodoLists deleteTodo = entityManager.find(TodoLists.class, theId);

        entityManager.remove(deleteTodo);
    }
}
