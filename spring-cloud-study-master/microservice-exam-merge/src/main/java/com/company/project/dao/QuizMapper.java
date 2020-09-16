package com.company.project.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import com.company.project.core.Mapper;
import com.company.project.model.Quiz;

@Repository
public interface QuizMapper extends Mapper<Quiz> {
	// 根据username获得一个User类
    @Select("select * from quiz where qid=#{param1} and paperid=#{param2} limit 1")
    Quiz getOneQuiz(int qid,int paperid);

    @Select("select content from answertb where qid=#{param1} and paperid=#{param2}")
    ArrayList<String> getanswer(int qid,int paperid);
    
    @Select("select * from quiz where paperid=#{paperid}")
    ArrayList<Quiz> getPaper(int paperid);
    
    @Select("select content from answertb where qid=#{param1} and paperid=#{param2}")
    ArrayList<String> getChoices(int qid,int paperid);
    
    @Insert("Insert into quiz VALUES (#{param1}, #{param2}, #{param3}, #{param4}, #{param5})")
    void insertQuiz(int qid,String quiz,String rightans,int point,int paperid);
    
    @Update("Update quiz SET quiz=#{param2}, rightans=#{param3}, point=#{param4} WHERE qid=#{param1} and paperid=#{param5}")
    void updateQuiz(int qid,String quiz,String rightans,int point,int paperid);
    
    @Select("select count(*) from quiz where qid=#{param1} and paperid=#{param2}")
    int countQuiz(int qid,int paperid);
    
    @Insert("Insert into answertb VALUES (#{param1}, #{param2}, #{param3}, #{param4})")
    void insertAnswertb(int ansid,int qid,String content,int paperid);
    
    @Update("Update answertb SET content=#{param3}WHERE ansid=#{param1} and qid=#{param2} and paperid=#{param4}")
    void updateAnswertb(int ansid,int qid,String content,int paperid);
    
    @Select("select count(*) from answertb where ansid=#{param1} and qid=#{param2} and paperid=#{param3}")
    int countAnswertb(int ansid,int qid,int paperid);
}