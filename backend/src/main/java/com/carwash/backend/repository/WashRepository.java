package com.carwash.backend.repository;
import java.time.LocalDate;
import com.carwash.backend.entity.Wash;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.carwash.backend.dto.CustomerResponse;
import java.util.List;
public interface WashRepository extends JpaRepository<Wash, Long> {
    List<Wash> findTop5ByOrderByIdDesc();
    @Query("SELECT COALESCE(SUM(w.totalAmount),0) FROM Wash w")
    Double getTotalIncome();
    @Query("""
SELECT COALESCE(SUM(w.totalAmount),0)
FROM Wash w
WHERE w.date = :date
""")
    Double getTodayIncome(LocalDate date);
    @Query("""
SELECT COUNT(w)
FROM Wash w
WHERE w.date = :date
""")

    Long getTodayVehicles(LocalDate date);
    @Query("SELECT COUNT(w) FROM Wash w")
    Long getTotalVehicles();
    @Query("""
SELECT COALESCE(SUM(w.totalAmount),0)
FROM Wash w
WHERE w.date BETWEEN :startDate AND :endDate
""")
    Double getIncomeBetween(LocalDate startDate, LocalDate endDate);

    @Query("""
SELECT COUNT(w)
FROM Wash w
WHERE w.date BETWEEN :startDate AND :endDate
""")
    Long getVehiclesBetween(LocalDate startDate, LocalDate endDate);
    @Query("""
SELECT new com.carwash.backend.dto.CustomerResponse(
    w.customerName,
    w.phone,
    COUNT(DISTINCT w.vehicleNumber),
    COUNT(w)
)
FROM Wash w
GROUP BY
    w.customerName,
    w.phone
ORDER BY COUNT(w) DESC
""")
    List<CustomerResponse> getCustomers();
    List<Wash> findByPhoneOrderByDateDescTimeDesc(String phone);

    Long countDistinctVehicleNumberByPhone(String phone);

    Long countByPhone(String phone);

    @Query("""
SELECT COALESCE(SUM(w.totalAmount),0)
FROM Wash w
WHERE w.phone=:phone
""")
    Double getTotalSpent(String phone);
}