package com.company.project.model;

import javax.persistence.*;

public class Answertb {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ansid;

	@Column
    private Integer qid;

	@Column
    private Integer paperid;
	@Column
    private String content;

    /**
     * @return ansid
     */
    public Integer getAnsid() {
        return ansid;
    }

    /**
     * @param ansid
     */
    public void setAnsid(Integer ansid) {
        this.ansid = ansid;
    }

    /**
     * @return qid
     */
    public Integer getQid() {
        return qid;
    }

    /**
     * @param qid
     */
    public void setQid(Integer qid) {
        this.qid = qid;
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

    /**
     * @return content
     */
    public String getContent() {
        return content;
    }

    /**
     * @param content
     */
    public void setContent(String content) {
        this.content = content;
    }
}