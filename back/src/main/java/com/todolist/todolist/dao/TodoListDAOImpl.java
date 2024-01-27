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
}
