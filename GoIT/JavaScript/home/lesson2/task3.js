
var password = 'passw0rd';
var login = 'admin';
var askLog = prompt('Enter login');
if (askLog==null){
    alert('Canseled');
}else{
    if (askLog==login){
        var pass= prompt('Enter password');
        if(pass == null){alert('Canseled')
        }else{
            if(pass==password){
                alert('Welcome home!');
            }else{
                alert('Wrong password');
            }
        }
    }else{
        alert('Wrong login');
    }

}