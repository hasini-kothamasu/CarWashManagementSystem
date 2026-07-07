package com.carwash.backend.repository;
import java.time.LocalDate;
import org.springframework.data.jpa.repository.Query;
import com.carwash.backend.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findTop5ByOrderByIdDesc();
    @Query("""
SELECT COALESCE(SUM(e.amount),0)
FROM Expense e
WHERE e.date = :date
""")
    Double getTodayExpense(LocalDate date);

    @Query("""
SELECT COALESCE(SUM(e.amount),0)
FROM Expense e
WHERE e.date BETWEEN :startDate AND :endDate
""")
    Double getExpenseBetween(LocalDate startDate, LocalDate endDate);

}