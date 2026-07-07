package com.carwash.backend.service;

import com.carwash.backend.dto.CustomerDetailsResponse;
import com.carwash.backend.dto.CustomerResponse;
import com.carwash.backend.repository.WashRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.carwash.backend.entity.Wash;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private WashRepository washRepository;

    public List<CustomerResponse> getCustomers() {
        return washRepository.getCustomers();
    }
    public CustomerDetailsResponse getCustomer(String phone){

        List<Wash> history =
                washRepository.findByPhoneOrderByDateDescTimeDesc(phone);

        if(history.isEmpty()){
            return null;
        }

        Wash first = history.get(0);

        return new CustomerDetailsResponse(

                first.getCustomerName(),

                phone,

                washRepository.countByPhone(phone),

                washRepository.countDistinctVehicleNumberByPhone(phone),

                washRepository.getTotalSpent(phone),

                history

        );

    }
}