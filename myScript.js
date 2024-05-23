//функция на JavaScript - объявление!
var carta;
function myFirstFunction()
{
	//f = 8;
	//d =9;
	
	//alert("Просто сообщение! Для Жорочки! " + (f*d))
	d = 6;
	for(i=0; i<5;i++,d++)
	{
		carta = document.getElementById("carta"+d)
		if(carta==null)
	    {
		  alert("ОШИБГА!!!")
		  continue
	    }
		carta.addEventListener("click",startTest,false);
	}
	
	carta = document.getElementById("zzz")
	carta.addEventListener("click",startTest,false);
	
	//alert(carta)
	
	
	//carta.style.background = "lightblue";
	//carta.style.borderColor = "white";
	//carta.innerHTML = carta.innerHTML + "<i><b> Hиша</b></i>"
	
}

function startTest()
{
	//alert(this)
	if(this.style.background=="lightblue")
	{
		this.style.background = "red"
	}
    else
	{
		this.style.background = "lightblue"	
	}

   
}
//Комментарий

//myFirstFunction()//Вызов функции!
//==========================================================
//Для base.html скрипты
//==========================================================
function iniCaption()
{
	zag = document.getElementById("zg");
	
	if(zag == null)
	{
		alert("error!");
		return;
	}
	
	zag.addEventListener("mouseover",mouseOverMy,false);
	zag.addEventListener("mouseout",mouseOutMy,false);
	
	
	
	/*butty = document.autoGarage.butt;
	if(butty!=null)
	{
		butty.addEventListener("click",clickButtForm,false);
		//document.autoGarage.marka.addEventListener("change",changeInMarka,false);
    }*/
	
	document.autoGarage.onsubmit = clickButtForm;
	
}

function mouseOverMy()
{
	
	if(this.style.background=="grey")
		return;
	this.style.background = "grey";
}

function mouseOutMy()
{
	
	this.style.background = "white";
}

//---------------------------------
//Если возврат истины, то форма отправляется!
//Иначе, ечли ложь! То данные не отправляются!!!
//---------------------------------
function clickButtForm()
{
	//Для отладки 
	/*alert("Нажали кнопачгу! \n" + document.autoGarage.marka.value + " длина поля " + document.autoGarage.marka.value.length
	+ "\n" + document.autoGarage.model.value 
	+ "\n" + document.autoGarage.year.value
	+ "\n" + document.autoGarage.warning.checked);*/
	
	result = true;
	//=================================================
	if(document.autoGarage.marka.value.length == 0)
	{
			document.autoGarage.marka.style.background = "#F08080";
			document.autoGarage.marka.placeholder = "Заполните поле!"
			result = false;
    }
	else
	{
		    document.autoGarage.marka.style.background = "#ffffff";
			document.autoGarage.marka.placeholder = ""
	}
	//==================================================
	
	if(!result)
	{
		alert("Ошибка ввода!");
	}
	
	return result;
}




function changeInMarka()
{
	//document.forms[0].elements[0].innerText
	alert("   changeInMarka  " + this.value);
	
}


