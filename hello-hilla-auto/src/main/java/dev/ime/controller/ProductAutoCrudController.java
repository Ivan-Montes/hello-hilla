package dev.ime.controller;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

import dev.ime.model.Product;
import dev.ime.repository.ProductRepository;

@BrowserCallable
@AnonymousAllowed
public class ProductAutoCrudController extends CrudRepositoryService<Product, Long, ProductRepository> {

}
