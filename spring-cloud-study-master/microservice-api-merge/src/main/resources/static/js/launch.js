// var global = {
//     mobileClient: false,
//     savePermit: true,
//     usd: 0,
//     eur: 0
// };

/**
 * Oauth2
 */

function requestOauthToken(username, password) {


    var success = false;

    $.ajax({
        url: "http://114.115.137.183:8050/microservice-exam-merge/user/login",
        type: 'post',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        async: false,
        data: {
            username: username,
            password: password,
        },
        success: function (data) {
           if(data){
                //localStorage.setItem('token', data.access_token);
                localStorage.setItem('userid', data.id);
                localStorage.setItem('username', data.username);
                localStorage.setItem('password', data.password);
                localStorage.setItem('nickname', data.nickname);
                localStorage.setItem('role', data.role);

                success = true;
            }
//
        },
        error: function () {

        }
    });

    return success;
}


$(window).load(function(){

	// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// 	FastClick.attach(document.body);
     //    global.mobileClient = true;
	// }
    //
    // $.getJSON("http://api.fixer.io/latest?base=RUB", function( data ) {
     //    global.eur = 1 / data.rates.EUR;
     //    global.usd = 1 / data.rates.USD;
    // });
    //
	// var account = getCurrentAccount();
    //
	// if (account) {
	// 	showGreetingPage(account);
	// } else {
		showLoginForm();
	// }
});

function showGreetingPage(account) {
    // initAccount(account);
	var userAvatar = $("<img />").attr("src","images/userpic.jpg");
	$(userAvatar).load(function() {
		setTimeout(initGreetingPage, 500);
	});
}

function showLoginForm() {
	$("#loginpage").show();
	$("#frontloginform").focus();
	setTimeout(initialShaking, 700);
}