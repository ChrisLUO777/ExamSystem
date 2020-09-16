package com.company.project.model;

import java.util.Date;

import javax.persistence.*;

public class Testset {
    @Id
    private Integer tid;
    @Column
    private Integer paperid;    
    @Column
    private String testdescrip;
    @Column
    private String testtitle;
    @Column
    private Date deadlinedate;

    /**
     * @return tid
     */
    public Integer getTid() {
        return tid;
    }

    /**
     * @param tid
     */
    public void setTid(Integer tid) {
        this.tid = tid;
    }

    /**
     * @return paperid
     */
    public Integer getPaperid() {
        return paperid;
    }

    /**
     * @param paperid
     */
    public void setPaperid(Integer paperid) {
        this.paperid = paperid;
    }

   
    
    public String getTestdescrip(){
    	return this.testdescrip;
    }
    public void setTestdescrip(String input){
    	this.testdescrip=input;
    }
    public String getTesttitle(){
    	return this.testtitle;
    }
    public void setTesttitle(String input){
    	this.testtitle=input;
    }
    public void setDeadlinedate(Date input){
    	this.deadlinedate=input;
    }
    public Date getDeadlinedate(){
    	return this.deadlinedate;
    }
   
}