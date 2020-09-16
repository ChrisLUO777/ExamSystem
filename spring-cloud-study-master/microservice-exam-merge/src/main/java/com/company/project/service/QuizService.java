package com.company.project.service;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.company.project.model.Quiz;
import com.company.project.model.ShowQuiz;
import com.company.project.core.Service;


/**
 * Created by CodeGenerator on 2017/11/14.
 */
public interface QuizService extends Service<Quiz> {
public ShowQuiz getOneQuiz(int paperid,int qid);
public int judgeOneQuiz(int paperid,int qid,String choice);
public ArrayList<ShowQuiz> getPaper(int paperid);
public void saveQuiz(int qid,String quiz,String rightans,int point,int paperid);
public void saveAnswertb(int ansid,int qid,String content,int paperid);
}
