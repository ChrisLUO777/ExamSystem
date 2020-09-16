package com.itmuch.cloud.study.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class HtmlController {
	
    @GetMapping("")  
    public String indexhtml() {  
        return "index.html";  
}
    @GetMapping("read")  
    public String readhtml() {  
        return "阅读练习.html";  
}
}