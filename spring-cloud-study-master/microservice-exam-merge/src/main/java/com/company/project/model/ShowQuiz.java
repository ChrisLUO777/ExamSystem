package com.company.project.model;

import java.util.ArrayList;

public class ShowQuiz {
	private String content;
	private ArrayList<String> choice;
	
	public ShowQuiz(){
		this.content="";
		this.choice=null;
	}
	
	public String getContent(){
		return this.content;
	}
	
	public void setContent(String content){
		this.content=content;
	}
	
	public ArrayList<String> getChoice(){
		return this.choice;
	}
	
	public void setChoice(ArrayList<String> choice){
		this.choice=choice;
	}
}
