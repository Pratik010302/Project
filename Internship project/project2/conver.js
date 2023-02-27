const calculate=()=>
{
    const temp=document.getElementById('temparature').value;
    const TempSelect= document.getElementById('temp_change');
    const valuetemp= temp_change.options[TempSelect.selectedIndex].value;

    const ctf=(cel)=>{
        let f =Math.round((cel*9/5)+32);
        return f;
    }

    const ftc=(feh)=>{
        let c =Math.round((feh-32)*5/9);
        return c;
    }
    let result;
    if(valuetemp=='cel')
    {
        result= ctf(temp);
        document.getElementById('Final_result').innerHTML = `= ${result} F`;

    }
    else{
        result = ftc(temp)
        document.getElementById('Final_result').innerHTML = `= ${result} C`;
    }
}