package com.company.project.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.company.project.core.Mapper;
import com.company.project.model.Grade;


public interface GradeMapper extends Mapper<Grade> {
	@Insert("Insert into grade VALUES (#{param1}, #{param2}, #{param3})")
    void insertGrade(int tid,int uid,int grade);
	
	@Update("Update grade SET grade=#{param3} WHERE tid=#{param1} and uid=#{param2}")
	void updateGrade(int tid,int uid,int grade);	
	
	@Select("select * from grade where tid=#{param1} and uid=#{param2}")
	Grade getOneGrade(int tid,int uid);
	
	@Select("select * from grade where uid=#{uid}")
	ArrayList<Grade> getGradesByPerson(int uid);
	
	@Select("select * from grade where tid=#{tid}")
	ArrayList<Grade> getGradesByTest(int tid);
	
	@Select("select count(*) from grade where tid=#{param1} and uid=#{param2}")
	int getCountGrade(int tid,int uid);
}