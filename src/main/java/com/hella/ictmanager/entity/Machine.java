package com.hella.ictmanager.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "machine")
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String equipmentName;

    private int internalFactory;

    private String serialNumber;

    private String equipmentType;

    @ManyToMany(mappedBy = "machines")
    private Set<Fixture> fixtures = new HashSet<>();
}
