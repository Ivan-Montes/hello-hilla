package dev.ime.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import dev.ime.service.InfoService;

@AnonymousAllowed
@BrowserCallable
public class Controller {

	private static final Logger logger = LoggerFactory.getLogger(Controller.class);
	private final InfoService infoService;

	public Controller(InfoService infoService) {
		super();
		this.infoService = infoService;
	}

	public List<String> getOperatingSystemSimple() {

		logger.info("Requesting Operating system...");

		return infoService.getOperatingSystemSimple();
	}

	public List<String> getCpuSimple() {

		logger.info("Requesting CPU...");

		return infoService.getCpuSimple();
	}

	public Map<String, String> getMemorySimple() {

		logger.info("Requesting Memory...");

		return infoService.getMemorySimple();
	}

	public Map<String, String> getGeneralUsage() {

		logger.info("Requesting GeneralUsage...");
		
		return infoService.getGeneralUsage();
	}
}
