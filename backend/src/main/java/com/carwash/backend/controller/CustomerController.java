package com.carwash.backend.controller;

import com.carwash.backend.dto.CustomerDetailsResponse;
import com.carwash.backend.dto.CustomerResponse;
import com.carwash.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<CustomerResponse> getCustomers() {
        return customerService.getCustomers();
    }
    @GetMapping("/{phone}")
    public CustomerDetailsResponse getCustomer(@PathVariable String phone){

        return customerService.getCustomer(phone);

    }
}