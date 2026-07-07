package com.carwash.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalTime;
@Entity
@Table(name = "washes")
@Data
public class Wash {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;

    private String phone;

    private String vehicleNumber;

    private String brand;

    private String model;

    private String category;

    private Integer quantity;

    private Boolean interior;

    private String payment;

    @Column(length = 500)
    private String notes;

    private Double vehicleAmount;

    private Double interiorAmount;

    private Double totalAmount;

    private LocalDate date;
    private LocalTime time;
}