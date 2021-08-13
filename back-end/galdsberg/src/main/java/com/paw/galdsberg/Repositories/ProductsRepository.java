package com.paw.galdsberg.Repositories;

import com.paw.galdsberg.Entities.Beer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Beer,Integer> {
}
