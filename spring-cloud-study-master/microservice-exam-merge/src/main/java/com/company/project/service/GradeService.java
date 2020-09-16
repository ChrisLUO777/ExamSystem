package com.company.project.service;
import java.util.ArrayList;

import com.company.project.model.Grade;
import com.company.project.core.Service;


/**
 * Created by CodeGenerator on 2017/12/09.
 */
public interface GradeService extends Service<Grade> {
public void insertGrade(int tid,int uid,int grade);
public void updateGrade(int tid,int uid,int grade);	
public void saveGrade(int tid,int uid,int grade);
public Grade getOneGrade(int tid,int uid);
public ArrayList<Grade> getGradesByPerson(int uid);
public ArrayList<Grade> getGradesByTest(int tid);
}
