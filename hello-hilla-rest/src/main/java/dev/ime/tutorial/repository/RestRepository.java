package dev.ime.tutorial.repository;

import java.util.Comparator;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

@Repository
public class RestRepository {

	private static final Logger logger = LoggerFactory.getLogger(RestRepository.class);

	private static final Map<String, List<String>> CATEGORIES = Map.of("electronics",
			List.of("Product 1", "Product 2", "Product 3"), "clothing", List.of("Product 4", "Product 5", "Product 6"),
			"appliances", List.of("Product 7", "Product 8", "Product 9"));

	public List<String> allProducts(String sort) {
		
		logger.info("Find allProducts...");

		return CATEGORIES.values().stream().flatMap(List::stream)
				.sorted("asc".equalsIgnoreCase(sort) ? Comparator.naturalOrder() : Comparator.reverseOrder()).toList();
	}

	public List<String> productsInCategory(String category, String sort) {
		
		logger.info("Find productsInCategory");

		var products = CATEGORIES.get(category);
		return products == null ? List.of()
				: products.stream()
						.sorted("asc".equalsIgnoreCase(sort) ? Comparator.naturalOrder() : Comparator.reverseOrder())
						.toList();
	}

}
