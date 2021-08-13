package com.paw.galdsberg.Repositories;

import com.paw.galdsberg.Entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    public List<Order> findByEmail(String email);
}
