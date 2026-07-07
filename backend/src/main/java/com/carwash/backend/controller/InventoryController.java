package com.carwash.backend.controller;

import com.carwash.backend.entity.Inventory;
import com.carwash.backend.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin(origins="http://localhost:5173")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @PostMapping
    public Inventory saveInventory(@RequestBody Inventory inventory){
        return inventoryService.saveInventory(inventory);
    }

    @GetMapping
    public List<Inventory> getAllInventory(){
        return inventoryService.getAllInventory();
    }

    @GetMapping("/recent")
    public List<Inventory> getRecentInventory(){
        return inventoryService.getRecentInventory();
    }

    @DeleteMapping("/{id}")
    public String deleteInventory(@PathVariable Long id){
        inventoryService.deleteInventory(id);
        return "Inventory Deleted";
    }

}