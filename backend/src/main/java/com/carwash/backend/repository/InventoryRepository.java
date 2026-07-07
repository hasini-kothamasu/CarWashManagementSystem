package com.carwash.backend.repository;

import com.carwash.backend.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InventoryRepository extends JpaRepository<Inventory,Long>{

    List<Inventory> findTop5ByOrderByIdDesc();

}