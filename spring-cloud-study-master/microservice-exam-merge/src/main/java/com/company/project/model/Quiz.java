package com.company.project.model;

import javax.persistence.*;

public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer qid;
    @Column
    private Integer paperid;
    @Column
    private String quiz;
    @Column
    private String rightans;
    @Column
    private Integer point;

    

    /**
     * @return id
     */
    public Integer getId() {
        return qid;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.qid = id;
    }

    /**
     * @return quiz
     */
    public String getQuiz() {
        return quiz;
    }

    /**
     * @param quiz
     */
    public void setQuiz(String quiz) {
        this.quiz = quiz;
    }

    /**
     * @return rightans
     */
    public String getRightans() {
        return rightans;
    }

    /**
     * @param rightans
     */
    public void setRightans(String rightans) {
        this.rightans = rightans;
    }

    /**
     * @return point
     */
    public Integer getPoint() {
        return point;
    }

    /**
     * @param point
     */
    public void setPoint(Integer point) {
        this.point = point;
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
}