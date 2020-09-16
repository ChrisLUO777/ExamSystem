package com.company.project.service.impl;

import com.company.project.dao.UserMapper;
import com.company.project.model.User;
import com.company.project.service.UserService;
import com.company.project.core.AbstractService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by CodeGenerator on 2017/11/02.
 */
@Service
@Transactional
public class UserServiceImpl extends AbstractService<User> implements UserService {
    @Resource
    private UserMapper userMapper;
    
    public User login(String username,String password) {
        //通过用户名获取用户
        User dbUser = userMapper.getOneUser(username);
        //若获取失败
        if (dbUser == null) {
            return null;
        }
        //获取成功后，将获取用户的密码和传入密码对比
        else if (!dbUser.getPassword().equals(password)){
            return null;
        }
        else {
            //若密码也相同则登陆成功
            //让传入用户的属性和数据库保持一致           
            return dbUser;
        }
    }

	@Override
	public void saveUser(String username, String password,String nickname, int role) {
		int usercount=userMapper.getCountUser(username);
		if(usercount==0){
			int tempuid=userMapper.getMaxUid()+1;
			userMapper.insertOneUser(tempuid, username, password, nickname, role);
		}
	}

	@Override
	public boolean checkRegistAccess(String username) {
		int usercount=userMapper.getCountUser(username);
		if(usercount==0){
			return true;
		}
		else{
			return false;
		}
	}
}
