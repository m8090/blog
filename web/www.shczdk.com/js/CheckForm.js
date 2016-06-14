function CheckHomeForm()
{
	if(document.HomeForm.Name.value=="")
	{
	alert("请填写您的姓名！");
	document.HomeForm.Name.focus();
	return false;
	}
	if(document.HomeForm.Mobile.value=="")
	{
	alert("请填写您的手机号码！");
	document.HomeForm.Mobile.focus();
	return false;
	}
	if(document.HomeForm.Loan.value=="")
	{
	alert("请填写您的贷款金额！");
	document.HomeForm.Loan.focus();
	return false;
	}
	if(document.HomeForm.VerifyCode.value=="")
	{
	alert("请填写验证码！");
	document.HomeForm.VerifyCode.focus();
	return false;
	}
}
function CheckSubForm()
{
	if(document.SubForm.Name.value=="")
	{
	alert("请填写您的姓名！");
	document.SubForm.Name.focus();
	return false;
	}
	if(document.SubForm.Loan.value=="")
	{
	alert("请填写您的贷款金额！");
	document.SubForm.Loan.focus();
	return false;
	}
	if(document.SubForm.Mobile.value=="")
	{
	alert("请填写您的手机号码！");
	document.SubForm.Mobile.focus();
	return false;
	}
	if(document.SubForm.VerifyCode.value=="")
	{
	alert("请填写验证码！");
	document.SubForm.VerifyCode.focus();
	return false;
	}
}