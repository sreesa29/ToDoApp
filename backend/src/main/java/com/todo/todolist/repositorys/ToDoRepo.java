package com.todo.todolist.repositorys;

import com.todo.todolist.models.ToDo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;
import java.util.Optional;

public interface ToDoRepo extends MongoRepository<ToDo, BigInteger> {

    Optional<ToDo> findById(String id);

    void deleteById(String id);
}
