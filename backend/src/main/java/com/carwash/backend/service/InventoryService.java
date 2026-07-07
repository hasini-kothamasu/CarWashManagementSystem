package com.carwash.backend.service;

import com.carwash.backend.entity.Inventory;
import com.carwash.backend.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public Inventory saveInventory(Inventory inventory){
        return inventoryRepository.save(inventory);
    }

    public List<Inventory> getAllInventory(){
        return inventoryRepository.findAll();
    }

    public List<Inventory> getRecentInventory(){
        return inventoryRepository.findTop5ByOrderByIdDesc();
    }

    public void deleteInventory(Long id){
        inventoryRepository.deleteById(id);
    }

}