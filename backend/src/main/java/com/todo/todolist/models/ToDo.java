package com.todo.todolist.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

//Annotations
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "ToDo")


public class ToDo {

    @Getter
    @Setter
    // Attributes
    @Id
    private String id;
    private String todoName;
    private String todoDesc;
    private String status;


}
