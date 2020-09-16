package com.company.project.service.impl;

import java.util.ArrayList;

import com.company.project.dao.AnswertbMapper;
import com.company.project.model.Answertb;
import com.company.project.service.AnswertbService;
import com.company.project.core.AbstractService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by CodeGenerator on 2017/11/15.
 */
@Service
@Transactional
public class AnswertbServiceImpl extends AbstractService<Answertb> implements AnswertbService {
    @Resource
    private AnswertbMapper answertbMapper;

	

}
