package com.carwash.backend.dto;

import com.carwash.backend.entity.Wash;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class CustomerDetailsResponse {

    private String customerName;
    private String phone;

    private Long visits;
    private Long vehicles;

    private Double totalSpent;

    private List<Wash> history;

}