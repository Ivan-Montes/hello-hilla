package dev.ime.controller;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.ListRepositoryService;

import dev.ime.model.Product;
import dev.ime.repository.ProductRepository;

@BrowserCallable
@AnonymousAllowed
public class ProductAutoGridController extends ListRepositoryService<Product, Long, ProductRepository> {

}
