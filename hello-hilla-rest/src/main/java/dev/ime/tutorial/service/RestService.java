package dev.ime.tutorial.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.ime.tutorial.repository.RestRepository;

@Service
public class RestService {

	private final RestRepository restRepository;
	
    public RestService(RestRepository restRepository) {
		super();
		this.restRepository = restRepository;
	}

	public List<String> allProducts(String sort) {
       return restRepository.allProducts(sort);
    }

    public List<String> productsInCategory(String category, String sort) {
      return restRepository.productsInCategory(category, sort);
    }
    
}
