//提交按钮是否生效
function check_form(){
    if(!len_title($("#FORM_USER").val()))
    {
        $("#FORM_USER").focus();
    }
    else if(!check_pwd_1($("#FORM_PASSWORD1").val()))
    {
        $("#FORM_PASSWORD1").focus();
    }
    else if(!check_pwd_2($("#FORM_PASSWORD2").val()))
    {
        $("#FORM_PASSWORD2").focus();
    }
    else if(!check_code($("#FORM_REG_CODE").val()))
    {
        $("#FORM_REG_CODE").focus();
    }
    else if($("#agree").attr("checked") === false)
    {
        $("#agree").focus();
        alert('请阅读并同意<<武神通行证用户协议>>和<<武神通行证隐私权政策>>');
    }
    else{document.form_reg.submit()};
}
//用户名长度检测
function len_title(value){
    var reChinese=/[\u0391-\uFFE5]+/;var b_chinese=reChinese.test(value);var reSpace=/\s+/;var b_space=reSpace.test(value);
    var re = /^([a-zA-Z0-9])+$/;
    if(value.length<1){
        alert(send_user_msg[2]);
        return false;
    }
    if(value.length<6 ||value.length>32){
        alert(send_user_msg[3]);
        return false;
    }else if(b_chinese){
        alert(send_user_msg[4]);
        return false;
    }else if(b_space){
        alert(send_user_msg[5]);
        return false;
    }else if (!re.test(value)){
        alert(send_user_msg[8]);
        return false;
    }else if(value == $("#FORM_PASSWORD1").val()){
        alert(send_user_msg[7]);
        return false;
    }
    return true;
}
//密码检测
function check_pwd_1(value){
    if(value){if(!len_pwd(value)){return false;}}
    else{alert(send_pwd_msg[1]);return false;}
    return true;
}
//重复密码检测
function check_pwd_2(value){
    if(value){if(value != $("#FORM_PASSWORD1").val()){alert(send_pwd_msg[2]);return false;}}else{alert(send_pwd_msg[4]);return false;}
    return true;
}
//密码规则检测
function len_pwd(value){
    var reChinese=/[\u0391-\uFFE5]+/;var b_chinese=reChinese.test(value);var reSpace=/\s+/;var b_space=reSpace.test(value);
    //-------长度测试
    if(value.length<6 || value.length>32){
        alert(send_pwd_msg[5]);
        return false;
    //-------合法性检测:不能与用户名相同
    }else if(value==$("#FORM_USER").val()){
        alert(send_pwd_msg[6]);
        return false;
    //-------合法性检测:不能包含汉字
    }else if(b_chinese){
        alert(send_pwd_msg[7]);
        return false;
    //-------合法性检测:不能包含空格
    }else if(b_space){
        alert(send_pwd_msg[8]);
        return false;
    }
    return true;
}
//超级密码检测
function check_pwds_1(value){
    if(value){if(!len_pwds(value)){return false;}}else{alert(send_pwds_msg[1]);return false;}return true;}
//超级重复密码检测
function check_pwds_2(value){
    if(value){if(value != $("#FORM_PASSWORD_S1").val()){alert(send_pwds_msg[2]);return false;}}else{alert(send_pwds_msg[4]);return false;}return true;}

//验证码检测
function check_code(code){
    if(!code){alert("请输入验证码");return false;}
    return true;
}

//定义检测函数,返回0/1/2分别代表差/一般/强
function getResult(s){  var ls =-1; if (s.match(/[a-z]/ig)){ls++;}if (s.match(/[0-9]/ig)){  ls++;}if (s.match(/(.[^a-z0-9])/ig)){ls++;}return ls;}
    var flag=[0,0,0],pwd_dt=0,pwds_dt=0;flag[7]=1;
    var send_user_msg=new Array(
        "武神通行证由6-32位字母和数字组成,只能以字母开头。",
        "检测正确",
        "请输入通行证",
        "武神通行证由6-32位字母和数字组成,只能以字母开头。",
        "通行证不能包含中文",
        "通行证不能包含空格",
        "检测通过.当前通行证可用",
        "通行证不能与密码相同",
        "通行证内含有禁用字符",
        "通行证己存在",
        "服务器忙"
    );
    var send_pwd_msg=new Array(
        "登陆密码由6-32位字母、数字及符号组成，区分大小写。",
        "请输入登陆密码",
        "两次密码检测不一致",
        "检测通过",
        "请再次输入登陆密码",
        "登陆密码由6-32位字母、数字及符号组成，区分大小写。",
        "登陆密码不能与用户名相同",
        "登陆密码不能包含中文",
        "登陆密码不能包含空格",
        "检测通过"
    );
    var send_pwds_msg=new Array(
        "超级密码是修改您登陆密码和身份认证的重要途径，请妥善保管。超级密码由8-32位字母、数字及符号组成，区分大小写。",
        "请输入超级密码",
        "两次超级密码检测不一致",
        "检测通过",
        "请输入确认超级密码",
        "超级密码由8-32位字母、数字及符号组成，区分大小写。",
        "超级密码不能与密码相同",
        "超级密码不能与用户名相同",
        "超级密码不能包含中文",
        "超级密码不能包含空格",
        "检测通过",
        ""
    );
    var send_mail_msg=new Array(
        "安全邮箱是您取回密码的重要途径，请正确填写。",
        "检测通过",
        "邮箱格式错误"
    );

$("#FORM_REG_CODE").focus(function(){if($("#ud").html()==''){$("#ud").html('<img src="http://event.wushen.com/reg/ucode.php?random='+ Math.random() +'" id="imgcode" class="pass_l_img"/>');}});

function loadImgCode(img,url) {
    document.getElementById("ud").innerHTML='<img id="imgcode" src="http://event.wushen.com/reg/ucode.php?random='+ Math.random() +'" class="pass_l_img"/>';
}
function reset_form()
{
    window.document.form_reg.reset();
}
var reChinese=/[\u0391-\uFFE5]+/;
var msg = $.query.get('msg');
if(reChinese.test(msg))
{
    alert(msg);
}