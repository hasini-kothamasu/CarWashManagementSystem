package com.carwash.backend.controller;

import com.carwash.backend.entity.Wash;
import com.carwash.backend.service.WashService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.carwash.backend.dto.DashboardResponse;
import java.util.List;

@RestController
@RequestMapping("/api/washes")
@CrossOrigin(origins = "http://localhost:5173")
public class WashController {

    @Autowired
    private WashService washService;

    // Save Wash
    @PostMapping
    public Wash saveWash(@RequestBody Wash wash) {
        return washService.saveWash(wash);
    }

    // Get All Washes
    @GetMapping
    public List<Wash> getAllWashes() {
        return washService.getAllWashes();
    }

    // Get Wash By ID
    @GetMapping("/{id}")
    public Wash getWashById(@PathVariable Long id) {
        return washService.getWashById(id);
    }

    // Delete Wash
    @DeleteMapping("/{id}")
    public String deleteWash(@PathVariable Long id) {
        washService.deleteWash(id);
        return "Wash deleted successfully";
    }
    @GetMapping("/bill/{id}")
    public Wash getBill(@PathVariable Long id) {
        return washService.getBill(id);
    }
    @GetMapping("/dashboard")
    public DashboardResponse dashboard(){

        return washService.getDashboardData();

    }

    @GetMapping("/recent")
    public List<Wash> getRecentWashes() {
        return washService.getRecentWashes();
    }
}