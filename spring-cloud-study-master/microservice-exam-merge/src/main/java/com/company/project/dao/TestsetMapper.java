package com.company.project.dao;


import java.util.ArrayList;
import java.util.Date;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.company.project.core.Mapper;
import com.company.project.model.Testset;

public interface TestsetMapper extends Mapper<Testset> {
	@Select("select * from testset where tid=#{tid}")
    Testset getOneTest(int tid);
	
	@Select("select * from testset")
    ArrayList<Testset> getAllTest();
	
	@Insert("Insert into testset VALUES (#{param1}, #{param2}, #{param3},#{param4},#{param5})")
    void insertTestset(int tid,String testtitle,int paperid,String testdescrip,Date deadlinedate);
	
	@Update("Update testset SET testtitle=#{param2},paperid=#{param3},testdescrip=#{param4},deadlinedate=#{param5} WHERE tid=#{param1}")
	void updateTestset(int tid,String testtitle,int paperid,String testdescrip,Date deadlinedate);
	
	@Select("select count(*) from testset")
	int getCountTestset();
	@Select("select max(tid) from testset")
	int getMaxTid();
	
	@Select("select count(*) from testaccess where tid=#{param1} and username=#{param2}")
	int getCountTestAccess(int tid,String username);
	
	@Insert("Insert into testaccess VALUES (#{param1}, #{param2})")
	void insertTestAccess(int tid,String username);
	
}