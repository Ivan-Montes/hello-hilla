package dev.ime.tutorial.controller;

import java.util.List;

import org.jspecify.annotations.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import dev.ime.tutorial.service.RestService;

@AnonymousAllowed
@BrowserCallable
public class RestController {

	private static final Logger logger = LoggerFactory.getLogger(RestController.class);
	private final RestService restService;

	public RestController(RestService restService) {
		super();
		this.restService = restService;
	}

	public @NonNull List<@NonNull String> allProducts(String sort) {
		
		logger.info("Request allProducts...");
		return restService.allProducts(sort);
	}

	public @NonNull List<@NonNull String> productsInCategory(String category, String sort) {
		
		logger.info("Request allProducts...");
		return restService.productsInCategory(category, sort);
	}

}
