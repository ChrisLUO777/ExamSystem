package com.company.project.web;
import com.company.project.core.Result;
import com.company.project.core.ResultGenerator;
import com.company.project.model.Quiz;
import com.company.project.model.ShowQuiz;
import com.company.project.service.QuizService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

import java.util.ArrayList;
import java.util.List;

/**
* Created by CodeGenerator on 2017/11/14.
*/
@RestController
@RequestMapping("/quiz")
public class QuizController {
    @Resource
    private QuizService quizService;

    @PostMapping("/add")
    public Result add(Quiz quiz) {
        quizService.save(quiz);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestParam Integer id) {
        quizService.deleteById(id);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/update")
    public Result update(Quiz quiz) {
        quizService.update(quiz);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        Quiz quiz = quizService.findById(id);
        return ResultGenerator.genSuccessResult(quiz);
    }

    @PostMapping("/list")
    public Result list(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "0") Integer size) {
        PageHelper.startPage(page, size);
        List<Quiz> list = quizService.findAll();
        PageInfo pageInfo = new PageInfo(list);
        return ResultGenerator.genSuccessResult(pageInfo);
    }
    
    @PostMapping("/getonequiz")
    public ShowQuiz getonequiz(@RequestParam(defaultValue = "1") Integer qid, @RequestParam(defaultValue = "1") Integer paperid) {
    	ShowQuiz quiz=quizService.getOneQuiz(paperid, qid);  	
		return quiz;       
    }
    @PostMapping("/judgeonequiz")
    public int judgeonequiz(@RequestParam(defaultValue = "1") Integer qid, @RequestParam(defaultValue = "1") Integer paperid,String choice) {
    	int quiz=quizService.judgeOneQuiz(paperid,qid,choice);  	
		return quiz;       
    }
    @PostMapping("/getpaper")
    public ArrayList<ShowQuiz> getPaper(@RequestParam(defaultValue = "1") Integer paperid) {
    	ArrayList<ShowQuiz> quiz=quizService.getPaper(paperid);    	
		return quiz;       
    }
    @PostMapping("/savequiz")
    public void savequiz(int qid,String quiz,String rightans,int point,int paperid) {
    	quizService.saveQuiz(qid, quiz, rightans, point, paperid);    	      
    }
    @PostMapping("/saveanswertb")
    public void saveanswertb(int ansid,int qid,String content,int paperid){
    	quizService.saveAnswertb(ansid, qid, content, paperid);
    }
}
