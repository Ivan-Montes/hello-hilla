package dev.ime.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import dev.ime.model.Product;
import dev.ime.repository.ProductRepository;

@Service
public class ProductService {

	private final ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}

	public List<Product> getAll() {

		return productRepository.findAll();
	}

	public List<Product> getAll(Pageable pageable) {

		return productRepository.findAll(pageable).getContent();
	}

}
