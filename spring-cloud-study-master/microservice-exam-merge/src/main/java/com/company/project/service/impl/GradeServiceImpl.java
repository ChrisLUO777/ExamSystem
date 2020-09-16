package com.company.project.service.impl;

import java.util.ArrayList;

import com.company.project.dao.GradeMapper;
import com.company.project.model.Grade;
import com.company.project.service.GradeService;
import com.company.project.core.AbstractService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by CodeGenerator on 2017/12/09.
 */
@Service
@Transactional
public class GradeServiceImpl extends AbstractService<Grade> implements GradeService {
    @Resource
    private GradeMapper gradeMapper;

	@Override
	public void insertGrade(int tid, int uid, int grade) {
		gradeMapper.insertGrade(tid, uid, grade);
	}

	@Override
	public void updateGrade(int tid, int uid, int grade) {
		gradeMapper.updateGrade(tid, uid, grade);
	}

	@Override
	public Grade getOneGrade(int tid, int uid) {
		Grade dbGrade=gradeMapper.getOneGrade(tid, uid);
		return dbGrade;
	}

	@Override
	public ArrayList<Grade> getGradesByPerson(int uid) {
		ArrayList<Grade> dbGrade=gradeMapper.getGradesByPerson(uid);
		return dbGrade;
	}

	@Override
	public ArrayList<Grade> getGradesByTest(int tid) {
		ArrayList<Grade> dbGrade=gradeMapper.getGradesByTest(tid);
		return dbGrade;
	}

	@Override
	public void saveGrade(int tid, int uid,int grade) {
		int gradecount=gradeMapper.getCountGrade(tid, uid);
		if(gradecount==0){
			gradeMapper.insertGrade(tid, uid, grade);
		}
		else{
			gradeMapper.updateGrade(tid, uid, grade);
		}
		
	}

}
