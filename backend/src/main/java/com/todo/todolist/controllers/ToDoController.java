package com.todo.todolist.controllers;

import com.todo.todolist.models.ToDo;
import com.todo.todolist.repositorys.ToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

// Annotation
@RestController
@CrossOrigin(origins = "*")

public class ToDoController {

    @Autowired
    private ToDoRepo repo;

    @PostMapping("/addTodo")
    public String saveBook(@RequestBody ToDo book) {
        repo.save(book);
        return "Added Successfully";
    }

    @PutMapping ("/underlined/{id}")
    public @ResponseBody
    String updateStatus(@PathVariable String id, @RequestBody ToDo status){
        Optional<ToDo> update = repo.findById(id);
        update.ifPresent(s->{
            s.setStatus(status.getStatus());
            repo.save(s);
        });

        return "Updated";

    }


    @GetMapping("/findAllToDo")
    public List<ToDo> getToDo() {
        return repo.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteToDo(@PathVariable String id) {
        repo.deleteById(id);
        return "Deleted Successfully";
    }

}
