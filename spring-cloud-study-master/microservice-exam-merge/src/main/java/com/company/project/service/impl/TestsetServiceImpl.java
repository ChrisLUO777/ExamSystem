package com.company.project.service.impl;


import java.util.ArrayList;
import java.util.Date;

import com.company.project.dao.TestsetMapper;
import com.company.project.model.Testset;
import com.company.project.service.TestsetService;
import com.company.project.core.AbstractService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by CodeGenerator on 2017/12/09.
 */
@Service
@Transactional
public class TestsetServiceImpl extends AbstractService<Testset> implements TestsetService {
    @Resource
    private TestsetMapper testsetMapper;

	@Override
	public Testset getOneTest(int tid) {
		Testset dbTestset=testsetMapper.getOneTest(tid);
		return dbTestset;
	}

	@Override
	public ArrayList<Testset> getAllTest() {
		ArrayList<Testset> dbTestset=testsetMapper.getAllTest();
		return dbTestset;
	}

	@Override
	public int saveTestset(String testtitle, int paperid,
			 String testdescrip,Date deadlinedate) {
		int temptid=testsetMapper.getMaxTid()+1;
			testsetMapper.insertTestset(temptid, testtitle, paperid,testdescrip,deadlinedate);
		
		return temptid;
		
	}

	@Override
	public boolean checkTestAccess(int tid, String username) {
		int countaccess=testsetMapper.getCountTestAccess(tid, username);
		if(countaccess==1){
			return true;
		}
		else{
		return false;}
	}

	@Override
	public void saveTestaccess(int tid,String username) {		
		int countaccess=testsetMapper.getCountTestAccess(tid, username);
		if(countaccess==0){
		testsetMapper.insertTestAccess(tid, username);
		}		
	}

}
