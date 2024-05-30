package com.EDTool.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EDTool.bean.User;
import com.EDTool.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
	private UserService userService;
	
    @PostMapping("register")
    public String createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
    
    @PostMapping("login")
    public User login(@RequestBody User user) {
    	return userService.checkUser(user);
    }
    
    @PostMapping("encrypt")
    public String encrypt(@RequestBody Map<String,String> m) {
    	String message=m.get("message");
    	return userService.encrypt(message);
    }
    
    @PostMapping("decrypt")
    public String decrypt(@RequestBody Map<String,String> m) {
    	String secret=m.get("secret");
    	return userService.decrypt(secret);
    }
}
