package dev.ime.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import dev.ime.repository.InfoRepository;

@Service
public class InfoService {

	private final InfoRepository infoRepository;

	public InfoService(InfoRepository infoRepository) {
		super();
		this.infoRepository = infoRepository;
	}

	public List<String> getOperatingSystemSimple() {

		return infoRepository.getOperatingSystemSimple();
	}

	public List<String> getCpuSimple() {

		return infoRepository.getCpuSimple();
	}

	public Map<String, String> getMemorySimple() {

		return infoRepository.getMemorySimple();
	}

	public Map<String, String> getGeneralUsage() {

		return infoRepository.getGeneralUsage();
	}
}
