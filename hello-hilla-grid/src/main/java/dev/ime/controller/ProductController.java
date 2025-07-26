package dev.ime.controller;

import java.util.List;

import org.jspecify.annotations.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import dev.ime.model.Product;
import dev.ime.service.ProductService;

@AnonymousAllowed
@BrowserCallable
public class ProductController {

	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	private final ProductService productService;
	
	public ProductController(ProductService productService) {
		super();
		this.productService = productService;
	}	

	public @NonNull List <@NonNull Product> getAll() {

		logger.info("Requested getAll Product");
		return productService.getAll();
	}

	public @NonNull List<@NonNull Product> getAllPage(Pageable pageable) {

		logger.info("Requested getAllPage Product");
		return productService.getAll(pageable);
	}

}
