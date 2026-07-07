package com.carwash.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CustomerResponse {

    private String customerName;

    private String phone;

    private Long vehicles;

    private Long visits;

}