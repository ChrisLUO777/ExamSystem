package com.company.project.web;
import com.company.project.core.Result;
import com.company.project.core.ResultGenerator;
import com.company.project.model.Testset;
import com.company.project.service.TestsetService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
* Created by CodeGenerator on 2017/12/09.
*/
@RestController
@RequestMapping("/testset")
public class TestsetController {
    @Resource
    private TestsetService testsetService;

    @PostMapping("/add")
    public Result add(Testset testset) {
        testsetService.save(testset);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestParam Integer id) {
        testsetService.deleteById(id);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/update")
    public Result update(Testset testset) {
        testsetService.update(testset);
        return ResultGenerator.genSuccessResult();
    }

    @PostMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        Testset testset = testsetService.findById(id);
        return ResultGenerator.genSuccessResult(testset);
    }

    @PostMapping("/list")
    public Result list(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "0") Integer size) {
        PageHelper.startPage(page, size);
        List<Testset> list = testsetService.findAll();
        PageInfo pageInfo = new PageInfo(list);
        return ResultGenerator.genSuccessResult(pageInfo);
    }
    @PostMapping("/getonetest")
    public Testset getonelist(@RequestParam(defaultValue = "1") Integer tid) {
        Testset onetestset=testsetService.getOneTest(tid);
        return onetestset;
    }
    @PostMapping("/getalltests")
    public ArrayList<Testset> getonelist() {
        ArrayList<Testset> alltestset=testsetService.getAllTest();
        return alltestset;
    }
    @PostMapping("/savetestset")
    public int saveTestset(String testtitle,int paperid,String testdescrip,String deadlinedate){
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date date=null;
		try {
			date = sdf.parse(deadlinedate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return testsetService.saveTestset(testtitle, paperid, testdescrip,date);
    }
    @PostMapping("/checktestaccess")
    public boolean checkTestAccess(int tid,String username) {
        return testsetService.checkTestAccess(tid, username);       
    }
    @PostMapping("/savetestaccess")
    public void saveTestAccess(int tid,String username) {
        testsetService.saveTestaccess(tid,username);       
    }
}
