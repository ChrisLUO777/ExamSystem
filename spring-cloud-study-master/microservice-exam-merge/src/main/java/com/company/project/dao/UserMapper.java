package com.company.project.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.company.project.core.Mapper;
import com.company.project.model.User;


@Repository
public interface UserMapper extends Mapper<User> {
	// 根据username获得一个User类
    @Select("select * from user where username=#{username} limit 1")
    User getOneUser(String username);

    //插入一个User
    @Insert("insert into user (uid,username,password,nickName,role) values(#{param1},#{param2},#{param3},#{param4},#{param5})")
    void insertOneUser(int uid,String username,String password,String nickname,int role);

    @Select("select count(*) from user where username=#{param1}")
	int getCountUser(String username);
    
	@Select("select max(uid) from user")
	int getMaxUid();
}