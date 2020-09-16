package com.company.project.model;

import java.util.Date;
import javax.persistence.*;

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer uid;
    @Column
    private String username;
    @Column
    private String password;

    @Column
    private String nickname;
    @Column
    private Integer role;

    /**
     * @return id
     */
    public Integer getId() {
        return uid;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.uid = id;
    }

    /**
     * @return username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return nick_name
     */
    public String getNickname() {
        return nickname;
    }

    /**
     * @param nickName
     */
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    /**
     * @return sex
     */
    public Integer getRole() {
        return role;
    }

    /**
     * @param sex
     */
    public void setRole(Integer role) {
        this.role = role;
    }

    
}