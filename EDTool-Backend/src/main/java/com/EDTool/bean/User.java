package com.EDTool.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "EDUsers")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
    private String name;
	private String email;
	private String password;
	
	public User() {
		
	}
	public User(String email, String password, String name) {
		super();
		this.email = email;
		this.password = password;
		this.name= name;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
