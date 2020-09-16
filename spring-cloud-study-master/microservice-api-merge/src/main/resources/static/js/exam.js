var windowshowheight=$(window).height();
var windowshowwidth=$(window).width();
var reviewtable;
var goaltable;
var quizinputobj=null;
var answertbobj=null;
var accessobj=null;
var trueresultjson={'0':'0'};
var showresultjson={'0':'0'};
var importpaperid;
var importtid=0;

$(window).on('load',function () {

    $('#create-time-get').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });

    $('#fileinput-question').fileinput({
        showPreview: false,
        showUpload: false,
        elErrorContainer: '#question-file-errors',
        allowedFileExtensions: ["xlsx"],
    });
    $('#fileinput-answer').fileinput({
        showPreview: false,
        showUpload: false,
        elErrorContainer: '#answer-file-errors',
        allowedFileExtensions: ["xlsx"],
    });
    $('#fileinput-access').fileinput({
        showPreview: false,
        showUpload: false,
        elErrorContainer: '#access-file-errors',
        allowedFileExtensions: ["xlsx"],
    });
    //qingkong
    reviewtable=$('#exam-content-review-table').DataTable();
    goaltable=$('#goal-check-table').DataTable();
    $('section').css("min-height",windowshowheight+"px");
    $('#exam-modal').css("max-height",0.96*windowshowheight+"px");
    $('.exam-readview').css("max-height",0.6*windowshowheight+"px");
});
$(window).on('resize',function () {
    var windowshowheight=$(window).height();
    $('section').css("min-height",windowshowheight+"px");
    $('#exam-modal').css("max-height",0.96*windowshowheight+"px");
    $('.exam-readview').css("max-height",0.6*windowshowheight+"px");
});

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o){
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

$('#logout').click(function () {
    window.location="index.html";
});

//create exam jump
$('#create-link').click(function () {
    $('#create-modal').modal({
        backdrop: 'static',
        keyboard: false,
        show:true
    });
});

$('#fileinput-question').change( function () {
    quizinputobj=this;
});
$('#fileinput-answer').change(function(){
   answertbobj=this;
});
$('#fileinput-access').change(function(){
    accessobj=this;
});
//bnt:question and answer import
$('#fileinput-import').click(function () {
    //import question
    importquiz(quizinputobj);
    //import answer
    importanswertb(answertbobj);

    importtestaccess(accessobj);

    //create modal hide
    $('#create-modal').modal('hide');
});

//exam form jump
$('#exam-enter-link').click(function () {
    $('#exam-paper-choose').modal({
        backdrop: 'static',
        keyboard: false,
        show:true
    });
});
$('#exam-paper-choose').on('show.bs.modal',function () {
    getAlltests();
    getTestselect();
    refreshTestInfo();
});
// $('#exam-paper-choose').on('hide.bs.modal',function () {
//     getTestset(localStorage.getItem("selecttestid"));
//     getPaper();
// });
$('#goal-check-link').click(function () {
    goaltable.clear();
    getGradesByPerson(localStorage.getItem("userid"));
    showGrades();
    $('#goal-modal').modal('show');
});

$('#exam-paper-confirm').click(function () {
    var myselect=document.getElementById("testselect");
    var index=myselect.selectedIndex ; // selectedIndex代表的是你所选中项的index
    var selectvalue=myselect.options[index].value;
    localStorage.setItem("selecttestid",selectvalue);
    var testlist=JSON.parse(localStorage.getItem('testlist'));
    var testinfo=testlist[parseInt(selectvalue)-1];
    var deadlinetemp=new Date(testinfo.deadlinedate);
    var testaccess=checktestaccess(testinfo.tid,localStorage.getItem("username"));
    if(testaccess==false){
        alert("access denied.");
    }
    else if(new Date().getTime()>deadlinetemp){
        alert("you have missed the deadline!");
    }
    else {
        $('#exam-paper-choose').modal('toggle');
        getTestset(localStorage.getItem("selecttestid"));
        getPaper();
        $('#exam-modal').modal({
            backdrop: 'static',
            keyboard: false,
            show:true
        });
    }

});



$('#exam-close').click(function () {
    $('#exam-modal').modal('hide');
    $('#exam-exit-modal').modal({
        backdrop: 'static',
        keyboard: false,
        show:true
    });
});

$('#exam-former').click(function () {
    backQuiz();
    $('#exam-former').blur();
});

$('#exam-review').click(function () {
    savecheckbox();
    getReview();
    $('#exam-content-review').toggle();
    $('#exam-content-choice').toggle();
    $('#exam-content-question').toggle();
    $('#exam-former').toggle();
    $('#exam-review').toggle();
    $('#exam-next').toggle();
    $('#exam-review-back').toggle();
    $('#exam-review-submit').toggle();

    $('#exam-review').blur();
});

$('#exam-next').click(function () {
    nextQuiz();
    $('#exam-next').blur();
});

$('#exam-review-back').click(function () {
    $('#exam-content-review').toggle();
    $('#exam-content-choice').toggle();
    $('#exam-content-question').toggle();
    $('#exam-former').toggle();
    $('#exam-review').toggle();
    $('#exam-next').toggle();
    $('#exam-review-back').toggle();
    $('#exam-review-submit').toggle();

    $('#exam-review-back').blur();
});


$('#exam-review-submit').click(function () {
    //selfsubmit=true;
    judgegrade();
    alert("Submit successfully!Please check your goals in check form!!");
    //remaintime=0;
    $('#exam-modal').modal('hide');
    //judgegrade();
    $('#exam-content-review').hide();
    $('#exam-content-choice').show();
    $('#exam-content-question').show();
    $('#exam-former').show();
    $('#exam-review').show();
    $('#exam-next').show();
    $('#exam-review-back').hide();
    $('#exam-review-submit').hide();
    $('#exam-review-submit').blur();
});




$('#exam-confirm').click(function () {
    trueresultjson={'0':'0'};
    showresultjson={'0':'0'};
    $('#exam-content-review').hide();
    $('#exam-content-choice').show();
    $('#exam-content-question').show();
    $('#exam-former').show();
    $('#exam-review').show();
    $('#exam-next').show();
    $('#exam-review-back').hide();
    $('#exam-review-submit').hide();
    $('#exam-exit-modal').modal('hide');
    $('#exam-modal').modal('hide');
});

$('#exam-cancel').click(function () {
    $('#exam-modal').modal({
        backdrop: false,
        keyboard: false,
        show:true
    });
    $('#exam-exit-modal').modal('hide');
});

//detail exam logic
var showstatus=0;
var remaintime=0;
var counting=false;
//var selfsubmit=false;

function refreshlabel() {
    document.getElementById("curindex").innerHTML=localStorage.getItem('curindex');
    document.getElementById("maxindex").innerHTML=localStorage.getItem('papersize');
    document.getElementById("quizcontent").innerHTML=localStorage.getItem('curquizcontent');
    document.getElementById("amain").innerHTML=localStorage.getItem('curamain');
    document.getElementById("bmain").innerHTML=localStorage.getItem('curbmain');
    document.getElementById("cmain").innerHTML=localStorage.getItem('curcmain');
    document.getElementById("dmain").innerHTML=localStorage.getItem('curdmain');
}





function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
        jsonLength++;
    }
    return jsonLength;
}

function getPaper() {
    var success = false;
    var currentindex=1;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/quiz/getpaper",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            paperid : localStorage.getItem("paperid")
        },
        success: function (data) {
            //store the size of the paper
            localStorage.setItem('papersize', getJsonLength(data));
            //alert(localStorage.getItem('papersize'));

            //store the quizs in the paper (String type)
            localStorage.setItem('paperquiz', JSON.stringify(data));
            //alert(localStorage.getItem('paperquiz'));
            localStorage.setItem('curindex', currentindex);
            getonequiz();
            randomcheckbox();
            refreshlabel();
            addAlphabet();
            remaintime=localStorage.getItem("remaintime");
            if(counting==false) {
                runCount();
                counting=true;
            }
            success = true;
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });

    return success;
}

function nextQuiz() {
    if(localStorage.getItem('curindex')==localStorage.getItem('papersize')){
        savecheckbox();
        alert("Already the last quiz.");
    }
    else{
        savecheckbox();
        var currentindex=parseInt(localStorage.getItem('curindex'));
        currentindex+=1;
        localStorage.setItem('curindex', currentindex);
        showcheckbox();
        getonequiz();
        refreshlabel();
        addAlphabet();
    }
}

function backQuiz() {
    if(localStorage.getItem('curindex')==1){
        savecheckbox();
        alert("Already the first quiz.");
    }
    else{
        savecheckbox();
        var currentindex=parseInt(localStorage.getItem('curindex'));
        currentindex-=1;
        localStorage.setItem('curindex', currentindex);
        showcheckbox();
        getonequiz();
        refreshlabel();
        addAlphabet();
    }
}

//get the current quiz
function getonequiz(){
    var currentindex=parseInt(localStorage.getItem('curindex'));
    var paper=JSON.parse(localStorage.getItem('paperquiz'));
    var curquiz=paper[currentindex-1];
    localStorage.setItem('curquizcontent',currentindex+". "+curquiz.content);
    localStorage.setItem('curamain',curquiz.choice[0]);
    localStorage.setItem('curbmain',curquiz.choice[1]);
    localStorage.setItem('curcmain',curquiz.choice[2]);
    localStorage.setItem('curdmain',curquiz.choice[3]);
}

function savecheckbox() {
    var x=document.getElementsByName("ke[]");
    var showresult="";
    var trueresult = "";
    var n=false;
    for(var i=0;i<x.length;i++)
    {
        if(x[i].checked)
        {
            n=true;
            trueresult=trueresult+(x[i].value)+'&';
            showresult=showresult+(i+1)+'&';
        }
    }
    if(n) {
        //localStorage.setItem(localStorage.getItem('curindex'), trueresult.substring(0,trueresult.length-1));
        trueresultjson[localStorage.getItem('curindex')]=trueresult.substring(0,trueresult.length-1);
        //localStorage.setItem("trueresultjson",JSON.stringify(trueresultjson));
        showresult=showresult.replace(/[1]/ig,"A");
        showresult=showresult.replace(/[2]/ig,"B");
        showresult=showresult.replace(/[3]/ig,"C");
        showresult=showresult.replace(/[4]/ig,"D");
        //localStorage.setItem("showcheck"+localStorage.getItem('curindex'), showresult.substring(0,showresult.length-1));
        showresultjson[localStorage.getItem('curindex')]=showresult.substring(0,showresult.length-1);
        //localStorage.setItem("showresultjson",JSON.stringify(showresultjson));
    }
}

function showcheckbox(){
    var x=document.getElementsByName("ke[]");
    for(var i=0;i<x.length;i++)
    {
        x[i].checked=false;
    }
    if(trueresultjson[localStorage.getItem('curindex')]) {
        var result = trueresultjson[localStorage.getItem('curindex')];
        var quizans = result.split("&");
        //alert(quizans);//return "1,2,null"
        for(var i=0;i<x.length;i++)
        {
            for (var j = 0; j < quizans.length; j++) {
                //x[(parseInt(quizans[j])) - 1].checked = true;
                if(x[i].value==parseInt(quizans[j])){
                    x[i].checked=true;
                }
            }
        }
    }

}

function randomcheckbox() {
    //alert('random');
    var ul = document.getElementById("checkul");
    var lis = ul.getElementsByTagName("li");
    var des=3*Math.random();
    for (var i = 0; i < lis.length; i++) {
        des=parseInt(3*Math.random());
        var li = lis[i];
        lis[des].after(li);
    }
}

function addAlphabet(){
    var ul = document.getElementById("checkul");
    var lis = ul.getElementsByTagName("li");
    var tspan=lis[0].getElementsByClassName("main");
    //note: tspan is an 1 unit long list!

    tspan[0].innerHTML="A. "+tspan[0].innerHTML;
    tspan=lis[1].getElementsByClassName("main");
    tspan[0].innerHTML="B. "+tspan[0].innerHTML;
    tspan=lis[2].getElementsByClassName("main");
    tspan[0].innerHTML="C. "+tspan[0].innerHTML;
    tspan=lis[3].getElementsByClassName("main");
    tspan[0].innerHTML="D. "+tspan[0].innerHTML;
}

function getReview() {
    cleanReview();
    showReview();
}

function cleanReview() {
    reviewtable.clear().draw();
}

function showReview() {
    var papersize=localStorage.getItem("papersize");
    var paper=JSON.parse(localStorage.getItem('paperquiz'));

    for(var i=0;i<papersize;i++){
        var curquiz=paper[i];
        if(showresultjson[i+1]){
        reviewtable.row.add([(i+1)+". "+curquiz.content,showresultjson[i+1]]).draw(false);
        }
        else{
            reviewtable.row.add([(i+1)+". "+curquiz.content,""]).draw(false);
        }
    }
}


function toCheck() {
    $("#reviewForm").hide();
    $("#checkForm").show();
    document.getElementById("reviewbt").innerHTML="Review";
}
function toReview(){
    savecheckbox();
    $("#checkForm").hide();
    $("#reviewForm").show();
    document.getElementById("reviewbt").innerHTML="Back to Quiz";
}
function transReviewCheck() {
    if(showstatus==0){
        toReview();
        getReview();
        showstatus=1;
    }
    else {
        toCheck();
        showstatus=0;
    }
}

function runCount(){
    if(remaintime>0){
        document.getElementById('showtime').innerHTML = (parseInt(remaintime/3600))+":"+(parseInt((remaintime%3600)/60))+":"+(remaintime%60);
        remaintime--;
        setTimeout(function(){runCount();},1000);
    }else{
        // if(selfsubmit){
        //     alert("Submit successfully!Please check your goals in check form!!");
        //
        // }
        // else{
        //     alert("Time is over!Your answers have been submitted!!");
        // }

        $('#exam-modal').modal('hide');
        //judgegrade();
        trueresultjson={'0':0};
        showresultjson={'0':0};
        $('#exam-content-review').hide();
        $('#exam-content-choice').show();
        $('#exam-content-question').show();
        $('#exam-former').show();
        $('#exam-review').show();
        $('#exam-next').show();
        $('#exam-review-back').hide();
        $('#exam-review-submit').hide();
        counting=false;
    }
}

$('#testselect').change( function () {
    refreshTestInfo();
});


//note: self defined function!
function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
        jsonLength++;
    }
    return jsonLength;
}

function getAlltests() {
    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/testset/getalltests",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
        },
        success: function (data) {
            localStorage.setItem('testnum', getJsonLength(data));
            localStorage.setItem('testlist', JSON.stringify(data));
            success = true;
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}

function getTestselect() {
    cleanTestselect();
    showTestselect();
}
function cleanTestselect() {
    $("#testselect option").remove();
}
function showTestselect() {
    var testnum=localStorage.getItem("testnum");
    var testlist=JSON.parse(localStorage.getItem('testlist'));
    for(var i=0;i<testnum;i++){
        var testinfo=testlist[i];
        var option_1=document.createElement("option");
        option_1.setAttribute("class","read-view-fulfil no-fulfil");
        option_1.setAttribute("value",i+1);

        addSpan(option_1,testinfo.testtitle,"read-conent-tit");
        document.getElementById("testselect").appendChild(option_1);
    }
}

function addSpan(tgoption,text,setclass){
    var span_1=document.createElement("span");
    span_1.innerHTML=text;
    span_1.setAttribute("class",setclass);
    tgoption.appendChild(span_1);
}

function refreshTestInfo() {
    var myselect=document.getElementById("testselect");
    var index=myselect.selectedIndex ; // selectedIndex代表的是你所选中项的index
    var selectvalue=myselect.options[index].value;
    localStorage.setItem("selecttestid",selectvalue);
    var testlist=JSON.parse(localStorage.getItem('testlist'));
    var testinfo=testlist[parseInt(selectvalue)-1];
    document.getElementById("selecttitle").innerHTML=testinfo.testtitle;
    document.getElementById("selectdescrip").innerHTML=testinfo.testdescrip;
    document.getElementById("selectdeadline").innerHTML=new Date(testinfo.deadlinedate).Format("yyyy-MM-dd hh:mm:ss");
}

function getTestset(tid) {

    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/testset/getonetest",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            tid : tid
        },
        success: function (data) {
            //alert(data);
            localStorage.setItem('paperid', data.paperid);
            localStorage.setItem('remaintime', parseInt((data.deadlinedate-new Date().getTime())/1000));
            success = true;
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}

function judgeonequiz(qid,paperid,choice) {
    var success = 0;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/quiz/judgeonequiz",
        type: 'POST',
        headers: {
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            qid : qid,
            paperid: paperid,
            choice: choice
        },
        success: function (data) {
            success = parseInt(data);
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}
function judgegrade() {
    var grade=0;
    for(var i=0;i<localStorage.getItem("papersize");i++){
        if(trueresultjson[i+1]){
            var choice=trueresultjson[i+1];
            var point=judgeonequiz(i+1,localStorage.getItem("paperid"),choice);
            grade=grade+parseInt(point);
        }
    }
    //alert(grade);
    //change uid here!!!
    savegrade(localStorage.getItem("selecttestid"),localStorage.getItem("userid"),grade);
    trueresultjson={'0':'0'};
    showresultjson={'0':'0'};
}
function savegrade(tid,uid,grade) {
    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/grade/savegrade",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            tid : tid,
            uid: uid,
            grade: grade
        },
        success: function (data) {
            success = true;
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}
function getonetest(tid) {
    var success = null;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/testset/getonetest",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            tid: tid
        },
        success: function (data) {
            success = data;
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}

function getGradesByPerson(uid) {
    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/grade/getgradesbyperson",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            uid: uid
        },
        success: function (data) {
            localStorage.setItem('gradeslist', JSON.stringify(data));
            localStorage.setItem('gradessize', getJsonLength(data));
            success = true;
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}

function showGrades() {
    var gradessize=localStorage.getItem("gradessize");
    var grades=JSON.parse(localStorage.getItem('gradeslist'));

    for(var i=0;i<gradessize;i++){
        var curgrade=grades[i];
        var curtest=getonetest(curgrade.tid);
        goaltable.row.add([curtest.testtitle,curgrade.grade]).draw(false);

    }
}

/*FileReader共有4种读取方法：
    1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
    2.readAsBinaryString(file)：将文件读取为二进制字符串
3.readAsDataURL(file)：将文件读取为Data URL
4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
*/
var wb;//读取完成的数据
var rABS = false; //是否将文件读取为二进制字符串

function importquiz(obj) { //导入
    var tempqid=1;
    var tempquiz="";
    var temprightans="";
    var temppoint=1;
    var temppaperid=0;


    if(obj==null){
        return;
    }
    if(!obj.files) {
        alert("empty quiz");
        return;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        if(rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        resultjson=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        importpaperid=parseInt(resultjson[1].paperid);

        //alert(resultjson);
        for(var i=0;i<getJsonLength(resultjson);i++){
            //alert(JSON.stringify(resultjson[i]));
            tempqid=parseInt(resultjson[i].qid);
            tempquiz=resultjson[i].quiz.toString();
            temprightans=resultjson[i].rightans.toString();
            temppoint=parseInt(resultjson[i].point);
            temppaperid=parseInt(resultjson[i].paperid);
            savequiz(tempqid,tempquiz,temprightans,temppoint,temppaperid);
        }
        //alert(parseInt(resultjson[0].paperid));
               //alert(importpaperid);
        var tempdeadline= $('#create-time-get-input').val();

        var temptitle=$('#create-exam-title').val();
        var tempdescrip=$('#create-exam-description').val();

        importtid=savetestset(temptitle,importpaperid,tempdescrip,tempdeadline);
    };
    if(rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }

}

function importtestaccess(obj) {
    var tempusername="";

    if(obj==null){
        return;
    }
    if(!obj.files) {
        alert("empty test access list.");
        return;
    }

    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        if(rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        resultjson=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        //alert(resultjson);
        for(var i=0;i<getJsonLength(resultjson);i++){
            //alert(JSON.stringify(resultjson[i]));
            tempusername=resultjson[i].username.toString();
            savetestaccess(importtid,tempusername);
            alert(importtid);
        }

    };
    if(rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}
function importanswertb(obj) { //导入
    var tempansid=1;
    var tempqid=1;
    var tempcontent="";
    var temppaperid=1;

    if(obj==null){
        return;
    }
    if(!obj.files) {
        alert("empty answer");
        return;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        if(rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        resultjson=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        //alert(resultjson);
        for(var i=0;i<getJsonLength(resultjson);i++){
            //alert(JSON.stringify(resultjson[i]));
            tempansid=parseInt(resultjson[i].ansid);
            tempqid=parseInt(resultjson[i].qid);
            tempcontent=resultjson[i].content.toString();
            temppaperid=parseInt(resultjson[i].paperid);

            saveanswertb(tempansid,tempqid,tempcontent,temppaperid);
        }
        //alert(parseInt(resultjson[0].paperid));
    };
    if(rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}

function fixdata(data) { //文件流转BinaryString
    var o = "",
        l = 0,
        w = 10240;
    for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}
function savetestaccess(tid,username) {
    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/testset/savetestaccess",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            "tid" : tid,
            "username": username
        },
        success: function (data) {
            success = true;
            //alert(paperid);
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}

function savequiz(qid,quiz,rightans,point,paperid) {
    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/quiz/savequiz",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            "qid" : qid,
            "quiz" : quiz,
            "rightans" : rightans,
            "point" : point,
            "paperid": paperid
        },
        success: function (data) {
            success = true;
            //alert(paperid);
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}
function saveanswertb(ansid,qid,content,paperid) {

    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/quiz/saveanswertb",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            "ansid" : ansid,
            "qid" : qid,
            "content" : content,
            "paperid": paperid
        },
        success: function (data) {
            success = true;
            //alert(ansid);
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}
function checktestaccess(tid,username){
    var success = false;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/testset/checktestaccess",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            "tid" : tid,
            "username": username
        },
        success: function (data) {
            success = data;
            //alert(paperid);
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}
function savetestset(testtitle,paperid,testdescrip,deadlinedate) {

    var success = 0;
    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/testset/savetestset",
        type: 'POST',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        async: false,
        data: {
            "testtitle" : testtitle,
            "paperid": paperid,
            "testdescrip":testdescrip,
            "deadlinedate":deadlinedate
        },
        success: function (data) {
            success = data;
            //alert(paperid);
        },
        error: function () {
            //removeOauthTokenFromStorage();
            alert('Something went wrong.');
        }
    });
    return success;
}