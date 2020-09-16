package com.company.project.service;
import com.company.project.model.User;
import com.company.project.core.Service;


/**
 * Created by CodeGenerator on 2017/11/02.
 */
public interface UserService extends Service<User> {
	
	public User login(String username,String password);
	
	public void saveUser(String username,String password,String nickname,int role);
	
	public boolean checkRegistAccess(String username);
}
