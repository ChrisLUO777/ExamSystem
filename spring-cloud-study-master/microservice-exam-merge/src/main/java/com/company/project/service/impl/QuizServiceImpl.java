package com.company.project.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.company.project.dao.AnswertbMapper;
import com.company.project.dao.QuizMapper;
import com.company.project.model.Quiz;
import com.company.project.model.ShowQuiz;
import com.company.project.service.QuizService;
import com.company.project.core.AbstractService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by CodeGenerator on 2017/11/14.
 */
@Service
@Transactional
public class QuizServiceImpl extends AbstractService<Quiz> implements QuizService {
    @Resource
    private QuizMapper quizMapper;
    
	@Override
	public ShowQuiz getOneQuiz(int paperid,int qid) {
		// TODO Auto-generated method stub
		Quiz dbQuiz=quizMapper.getOneQuiz(qid, paperid);	
		ShowQuiz quiztext=new ShowQuiz();
		quiztext.setContent(dbQuiz.getQuiz());
		ArrayList<String> dbAnswertb=quizMapper.getanswer(qid, paperid);		
		quiztext.setChoice(dbAnswertb);
		return quiztext;	
	}
	@Override
	public int judgeOneQuiz(int paperid, int qid, String choice) {
		// multi-choices should be split by '&'
		Quiz dbQuiz=quizMapper.getOneQuiz(qid, paperid);	
		String[] quizans=dbQuiz.getRightans().split("&");
		//listA is the right answers list.
		List<String> listA = Arrays.asList(quizans);
		//convert listA to ArrayList listB.
        List<String> listB = new ArrayList<String>(listA);
        
        //now listA stores your choices.
        String[] choiceans=choice.split("&");
        listA = Arrays.asList(choiceans);
        //convert listA to arraylist listC.
        List<String> listC = new ArrayList<String>(listA);
        //judge phase
        for(int i=0;i<listC.size();i++){
        	if(!listB.contains(listC.get(i))){
        		return 0;
        	}
        }
        if(listC.size()==listB.size()){
        	return 2;
        }
        else {
		return 1;
        }
	}
	
	@Override
	public ArrayList<ShowQuiz> getPaper(int paperid) {
		ArrayList<Quiz> dbQuiz=quizMapper.getPaper(paperid);
		ArrayList<ShowQuiz> dbShowQuiz=new ArrayList<ShowQuiz>();
		ShowQuiz input=null;
		if(dbQuiz.size()!=0){
			for(int i=0;i<dbQuiz.size();i++){
				input=new ShowQuiz();
				input.setContent(dbQuiz.get(i).getQuiz());
				input.setChoice(quizMapper.getChoices(dbQuiz.get(i).getId(), paperid));
				dbShowQuiz.add(input);
			}
		}
		
		return dbShowQuiz;
	}
	@Override
	public void saveQuiz(int qid, String quiz, String rightans, int point,
			int paperid) {
		int quizcount=quizMapper.countQuiz(qid, paperid);
		if(quizcount==0){
			quizMapper.insertQuiz(qid, quiz, rightans, point, paperid);
		}
		else{
			quizMapper.updateQuiz(qid, quiz, rightans, point, paperid);
		}
		
	}
	@Override
	public void saveAnswertb(int ansid, int qid, String content, int paperid) {
		int answertbcount=quizMapper.countAnswertb(ansid, qid, paperid);
		if(answertbcount==0){
			quizMapper.insertAnswertb(ansid, qid, content, paperid);
		}
		else{
			quizMapper.updateAnswertb(ansid, qid, content, paperid);
		}
		
	}

}
