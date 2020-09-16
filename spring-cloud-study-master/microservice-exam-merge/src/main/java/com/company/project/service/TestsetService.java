package com.company.project.service;

import java.util.ArrayList;
import java.util.Date;

import com.company.project.model.Testset;
import com.company.project.core.Service;


/**
 * Created by CodeGenerator on 2017/12/09.
 */
public interface TestsetService extends Service<Testset> {
public Testset getOneTest(int tid);
public ArrayList<Testset> getAllTest();
public int saveTestset(String testtitle,int paperid,String testdescrip,Date deadlinedate);
public boolean checkTestAccess(int tid,String username);
public void saveTestaccess(int tid,String username);
}
