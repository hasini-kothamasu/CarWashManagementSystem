package com.carwash.backend.dto;

import lombok.Data;

@Data
public class DashboardResponse {

    private Double todayIncome;
    private Double todayExpense;

    private Double weeklyExpense;

    private Double monthlyExpense;
    private Integer todayVehicles;

    private Double todayProfit;
    private Double weeklyIncome;

    private Integer weeklyVehicles;

    private Double weeklyProfit;

    private Double monthlyIncome;

    private Integer monthlyVehicles;

    private Double monthlyProfit;
}