var submit = document.querySelector('.submit')
        var button = document.querySelector('.button');
        var wrepper = document.querySelector('.wrepper');
        var result = document.querySelector('.result');
        var bgC = document.querySelector('body');
        button.addEventListener('click', function(){
            wrepper.style.display = 'block';
            button.style.display = 'none';
            result.style.display = 'none';
            bgC.style.backgroundColor = '#555';

        });

        var html = '';
        submit.addEventListener('click', function(){
            var email  = form.email.value;
            var name = form.name.value;
            var sex = form.sex.value;
            var date = form.date.value;
            var auto = form.auto.value;
            var select = form.select.value;
            var seasons = form.seasons.value;
            var about = form.about.value;
            var fail = false;  // из за скрытия форм получается ошибка при проверке через атребуты тега input
	if(name==""||name==" ")    //даннай способ позволяет сделать не атребутную проверку проверку 
            fail='Вы не ввели имя';
		else if( email.split('@').length-1== 0) //проверка на @
			fail='Вы  ввели не верный адрес';
		else if(sex == "")
			fail='Укажите пол';
		if(fail){
			alert(fail);
		}else{
            wrepper.style.display = 'none';
             button.style.display = 'block';
             result.style.display = 'block';
            bgC.style.backgroundColor = '#fff';
             html = ` <h3>Анкета</h3>
                    <p>Имя:${name}</p>
                    <p>Email:${email}</p>
                    <p>Пол:${sex}</p>
                    <p>Д.Р:${date}</p>
                    <p>Авто:${auto}</p>
                    <p>Авто:${select}</p>
                    <p>Любимое время года:${seasons}</p>
                    <p>О себе:${about}</p>`
                 result.innerHTML=html;
         } });
        var form = document.querySelector('.form');
        form.addEventListener('submit', function(e) { 
        e.preventDefault(); 
        });
        // var checkbox = checkBox.checked;

    //     for(var i=0; i<radioGender.length; i++) {
    //     if (radioGender[i].checked) {
    //         var radio = radioGender[i].value;
    //     }
    // }