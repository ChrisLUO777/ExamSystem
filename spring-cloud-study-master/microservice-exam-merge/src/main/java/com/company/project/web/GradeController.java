package com.company.project.web;
import com.company.project.core.Result;
import com.company.project.core.ResultGenerator;
import com.company.project.model.Grade;
import com.company.project.service.GradeService;
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
* Created by CodeGenerator on 2017/12/09.
*/
@RestController
@RequestMapping("/grade")
public class GradeController {
    @Resource
    private GradeService gradeService;

    @PostMapping("/add")
    public Result add(Grade grade) {
        gradeService.save(grade);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestParam Integer id) {
        gradeService.deleteById(id);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/update")
    public Result update(Grade grade) {
        gradeService.update(grade);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        Grade grade = gradeService.findById(id);
        return ResultGenerator.genSuccessResult(grade);
    }

    @PostMapping("/list")
    public Result list(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "0") Integer size) {
        PageHelper.startPage(page, size);
        List<Grade> list = gradeService.findAll();
        PageInfo pageInfo = new PageInfo(list);
        return ResultGenerator.genSuccessResult(pageInfo);
    }
    @PostMapping("/getonegrade")
    public Grade getOneGrade(@RequestParam Integer tid,@RequestParam Integer uid) {
        Grade grade = gradeService.getOneGrade(tid, uid);
        return grade;
    }
    @PostMapping("/getgradesbyperson")
    public ArrayList<Grade> getGradesByPerson(@RequestParam Integer uid) {
    	ArrayList<Grade> grade = gradeService.getGradesByPerson( uid);
        return grade;
    }
    @PostMapping("/getgradesbytest")
    public ArrayList<Grade> getGradesTest(@RequestParam Integer tid) {
    	ArrayList<Grade> grade = gradeService.getGradesByTest( tid);
        return grade;
    }
    @PostMapping("/savegrade")
    public void saveGrade(@RequestParam Integer tid,@RequestParam Integer uid,@RequestParam Integer grade) {
    	gradeService.saveGrade(tid, uid, grade);       
    }
    
    
}
