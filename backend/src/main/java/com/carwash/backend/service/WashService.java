package com.carwash.backend.service;
import java.time.LocalDate;
import com.carwash.backend.entity.Wash;
import com.carwash.backend.repository.WashRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.carwash.backend.dto.DashboardResponse;
import java.util.List;
import java.time.DayOfWeek;
import com.carwash.backend.repository.ExpenseRepository;
@Service
public class WashService {
    @Autowired
    private ExpenseRepository expenseRepository;
    @Autowired
    private WashRepository washRepository;

    // Save Wash
    public Wash saveWash(Wash wash) {
        return washRepository.save(wash);
    }

    // Get All Washes
    public List<Wash> getAllWashes() {
        return washRepository.findAll();
    }

    // Get Wash By ID
    public Wash getWashById(Long id) {
        return washRepository.findById(id).orElse(null);
    }
    public Wash getBill(Long id) {
        return washRepository.findById(id).orElse(null);
    }
    // Delete Wash
    public void deleteWash(Long id) {
        washRepository.deleteById(id);
    }
    public List<Wash> getRecentWashes() {
        return washRepository.findTop5ByOrderByIdDesc();
    }
    public DashboardResponse getDashboardData() {

        DashboardResponse dashboard = new DashboardResponse();

        LocalDate today = LocalDate.now();

        LocalDate weekStart = today.with(DayOfWeek.MONDAY);

        LocalDate monthStart = today.withDayOfMonth(1);

        Double income = washRepository.getTodayIncome(today);

        Long vehicles = washRepository.getTodayVehicles(today);
        Double weekIncome =
                washRepository.getIncomeBetween(weekStart, today);

        Long weekVehicles =
                washRepository.getVehiclesBetween(weekStart, today);

        dashboard.setWeeklyIncome(weekIncome);

        dashboard.setWeeklyVehicles(weekVehicles.intValue());

        Double weekExpense =
                expenseRepository.getExpenseBetween(weekStart, today);

        dashboard.setWeeklyExpense(weekExpense);

        dashboard.setWeeklyProfit(weekIncome - weekExpense);
        Double monthIncome =
                washRepository.getIncomeBetween(monthStart, today);

        Long monthVehicles =
                washRepository.getVehiclesBetween(monthStart, today);

        dashboard.setMonthlyIncome(monthIncome);

        dashboard.setMonthlyVehicles(monthVehicles.intValue());

        Double monthExpense =
                expenseRepository.getExpenseBetween(monthStart, today);

        dashboard.setMonthlyExpense(monthExpense);

        dashboard.setMonthlyProfit(monthIncome - monthExpense);

        dashboard.setTodayIncome(income);

        dashboard.setTodayVehicles(vehicles.intValue());

        Double todayExpense =
                expenseRepository.getTodayExpense(today);

        dashboard.setTodayExpense(todayExpense);

        dashboard.setTodayProfit(income - todayExpense);

        return dashboard;
    }
}