package com.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Users;
import com.repo.UserRepo;

@RestController
@CrossOrigin(maxAge = 3600)
public class UserController {

	@Autowired 
	UserRepo repo;
	
	@PostMapping(path="/users",consumes= {"application/json"})
	public boolean addUsers(@RequestBody Users user) 
	{
		repo.save(user);
		return true;
		
	}
	
	@GetMapping(path="/count-users")
	@CrossOrigin(origins = "http://localhost:4200")
	public long getUserCount() {
		return repo.count();
	}
	
	

	@RequestMapping("/users/{email}")
	public Optional<Users> getlogin(@PathVariable("email") String email)
	{
		return repo.findById(email);

	}
	
	
}
