package com.EDTool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EDTool.bean.User;
import com.EDTool.repo.UserRepository;
import com.EDTool.security.EncryptionUtil;

@Service
public class UserService {
    @Autowired
	private UserRepository repo;
	
    public String createUser(User u) {
    	User check=repo.findByEmail(u.getEmail());
    	if(check!=null)
    		return "User already exists. Login with the same email";
    	repo.save(u);
    	return "User Account created. Login with the same email";
    }
    
    public User checkUser(User u) {
    	User check=repo.findByEmail(u.getEmail());
    	if(check!=null && check.getPassword().equals(u.getPassword()))
    		return check;
    	return null;
    }
    
    public String encrypt(String message) {
    	try {
            return EncryptionUtil.encrypt(message);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error encrypting data";
        }
    }
    
    public String decrypt(String secret) {
    	try {
            return EncryptionUtil.decrypt(secret);
        } catch (Exception e) {
            e.printStackTrace();
            return "Error decrypting data";
        }
    }
}
