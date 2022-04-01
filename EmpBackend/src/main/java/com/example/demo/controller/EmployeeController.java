package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employees;
import com.example.demo.repo.EmployeeRepo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000")
public class EmployeeController {
		@Autowired
	private EmployeeRepo repo;
	
	@GetMapping("/employees")
	public List<Employees> getAllemployee(){
		return repo.findAll();
	}
	
	@PostMapping("/employees")
	public Employees createEmployee(@RequestBody Employees employee) {
return repo.save(employee);
}
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employees> getEmployeeById(@PathVariable int id) {
		Employees employee= repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee data doesn't exists "+id));
return ResponseEntity.ok(employee);
		
	}
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employees> updateEmployee(@PathVariable int id,@RequestBody Employees employeeDetails){
		Employees employee= repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee  doesn't not exists "+id));
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		return ResponseEntity.ok(employee);
	}
	
@DeleteMapping("/employees/{id}")
public ResponseEntity <Map<String,Boolean>>deleteEmployee(@PathVariable int id){
Employees employee= repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not doesn't exists "+id));
repo.delete(employee);
Map<String,Boolean> reponse= new HashMap();
reponse.put("deleted", Boolean.TRUE);
return ResponseEntity.ok(reponse);

}	
}