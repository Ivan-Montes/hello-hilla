package dev.ime.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.ime.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
