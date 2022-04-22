// var FirstNumber=document.getElementById('First-number').value;
// var SecondNumber=document.getElementById('Second-number').value;

//var Click=document.getElementById("Click");
// var result=document.getElementById("para");

// Click.onclick=function(){
//     Sumnumber()
// };

// function Sumnumber(){
//     var FirstNumber= parseFloat(document.getElementById('Firstnumber').value);
//     var SecondNumber=parseFloat(document.getElementById('Secondnumber').value);
//     var sumnumbers= FirstNumber + SecondNumber;
//     var result=document.getElementById("Para");
//     result.innerHTML=sumnumbers;
// };

var Click = document.getElementById('Click');
var SecondPressure = document.getElementById("SecondPressure");//SecondPressure
var SecondTemperature = document.getElementById('SecondTemperature');//SecondTemperature
var ThirdPressure = document.getElementById("ThirdPressure"); //ThirdPressure
var  FourthPressure = document.getElementById("FourthPressure"); //FourthPressure
var HeatInput = document.getElementById("HeatInput");//HeatInput
var HeatRejected = document.getElementById("HeatRejected");//HeatRejected
var NetWork  = document.getElementById("NetWork");// NetWork 
var Efficiency = document.getElementById("Efficiency");//Efficiency 
var MEP = document.getElementById("MEP");//MEP

Click.onclick = function(){
    Otto_Problem()
};

function Otto_Problem(){
    //Variable.
    var Compression_Ratio = parseFloat (document.getElementById('Compression-Ratio').value);
    var First_Pressure = parseFloat(document.getElementById('FirstPressure').value)*1000;
    var First_Temperature = parseFloat (document.getElementById('FirstTemperature').value)+273;
    var Third_Temperature = parseFloat(document.getElementById('ThirdTemperature').value)+273;

    

    //Second Pressure.
    var second_pressure = First_Pressure * ((Compression_Ratio)**1.4); 

    SecondPressure.innerHTML= 'P2' + ' = '+second_pressure.toFixed(2)+' Kpa';

    //Second Temperature
    var second_temperature = First_Temperature * (Compression_Ratio**0.4);
    
    SecondTemperature.innerHTML='T2' +' = '+second_temperature.toFixed(2)+' K';

    //ThirdPressure
    var third_pressure=second_pressure * (Third_Temperature / second_temperature );
      
    ThirdPressure.innerHTML = 'P3' +' = '+third_pressure.toFixed(2)+' Kpa';

    //Fourth Temperature
    var  fourth_temperature = Third_Temperature /(Compression_Ratio**0.4);
      
    FourthPressure.innerHTML = 'T4' +' = '+ fourth_temperature.toFixed(2)+' K';

    //Heat Input
    var heat_input = 0.718*(Third_Temperature - second_temperature);
    
    HeatInput.innerHTML = 'Q_in'+ ' = '+ heat_input.toFixed(2)+' KJ/KG';

    //Heat Rejected
    var heat_rejected = 0.718*( fourth_temperature  - First_Temperature);
    
    HeatRejected.innerHTML = 'Q_out' +' = '+ heat_rejected.toFixed(2)+' KJ/Kg';

    //The Net Work
    var network = heat_input - heat_rejected;
    
    NetWork.innerHTML= 'W_net '+' = '+network.toFixed(2)+" KJ/Kg";

    //Efficiency
    var efficiency = (network / heat_input);
    
    Efficiency.innerHTML= 'η' +'= '+ (efficiency*100).toFixed(2)+' %';

    //Mean Effective Pressure
    var mep = (network)/ ((0.287*First_Temperature/First_Pressure)*(1-(1/Compression_Ratio)));
    
    MEP.innerHTML = 'MEP' +' = '+ mep.toFixed(2)+' Kpa';

};

//Second-Problem.

var ClickDisel= document.getElementById('ClickDisel');
var SecondTemperature_Disel = document.getElementById("SecondTemperature_Disel");//second_temperature_Disel
var ThirdTemperature_Disel = document.getElementById("ThirdTemperature_Disel");//ThirdTemperature_Disel
var MaximumVolume_Disel = document.getElementById('MaximumVolume_Disel');//MaximumVolume_Disel
var ThirdVolume_Disel = document.getElementById("ThirdVolume_Disel"); //ThirdVolume_Disel
var FourthTemperature_Disel = document.getElementById("FourthTemperature_Disel"); //FourthTemperature_Disel
var HeatOutput_Disel = document.getElementById("HeatOutput_Disel");//HeatOutput_Disel
var NetWork_Disel = document.getElementById("NetWork_Disel");//NetWork_Disel
var Efficiency_Disel  = document.getElementById("Efficiency_Disel");//Efficiency_Disel
var MEP_Disel = document.getElementById("MEP_Disel");//MEP_Disel


ClickDisel.onclick = function(){
    Disel_Problem()
};

function Disel_Problem() {

    //Variable.
    var Compression_Ratio_Disel = parseFloat (document.getElementById('Compression-Ratio_Disel').value);
    var First_Pressure_Disel = parseFloat(document.getElementById('FirstPressure_Disel').value)*1000;
    var First_Temperature_Disel = parseFloat (document.getElementById('FirstTemperature_Disel').value)+273;
    var Heat_Added_Disel = parseFloat(document.getElementById('Heat_Added_Disel').value);

    //Second Temperature

    var second_temperature_Disel =  First_Temperature_Disel*(Compression_Ratio_Disel**0.4);

    SecondTemperature_Disel.innerHTML = 'T2'+' = '+second_temperature_Disel.toFixed(2) +' K';

    //Third Temperature
    
    var third_temperature_Disel = (Heat_Added_Disel + (1.005*second_temperature_Disel))/1.005;
    ThirdTemperature_Disel.innerHTML = 'T3' +' = '+third_temperature_Disel.toFixed(2)+' K';

    //MaximumVolume1

    var maximumvolume_Disel= (0.287 * First_Temperature_Disel) / First_Pressure_Disel;
    MaximumVolume_Disel.innerHTML = 'V1' +' = '+ maximumvolume_Disel.toFixed(3) +' m3/kg';

    //ThirdVolume1

    var thirdvolume_Disel = (third_temperature_Disel / second_temperature_Disel ) *(maximumvolume_Disel / Compression_Ratio_Disel);
    ThirdVolume_Disel.innerHTML = 'V3' +' = '+ thirdvolume_Disel.toFixed(3)+' m3/kg';

    //FourthTemperature

    var fourthtemperature_Disel = third_temperature_Disel*((thirdvolume_Disel / maximumvolume_Disel)**0.4 ) ;

    FourthTemperature_Disel.innerHTML ='T4' +' = '+ fourthtemperature_Disel.toFixed(2)+' K';

    //Heat Rejected Q_out

    var heatoutput_Disel = 0.718*(fourthtemperature_Disel - First_Temperature_Disel);

    heatoutput_Disel.innerHTML = 'Q_out' +' = '+ heatoutput_Disel.toFixed(2)+' KJ/Kg';

    //NetWork

    var network_Disel = (Heat_Added_Disel - heatoutput_Disel) ; 

    NetWork_Disel .innerHTML = 'W_net'+' = '+  network_Disel.toFixed(2)+' KJ/Kg';

    //Efficiency 
    var efficiency_Disel = (network_Disel / Heat_Added_Disel)*100; 

    Efficiency_Disel.innerHTML = 'η'+' = '+  efficiency_Disel.toFixed(2)+' %';

    //MEP

    var mep_Disel = network_Disel / ( maximumvolume_Disel *( 1- (1/Compression_Ratio_Disel)));
    
    MEP_Disel.innerHTML = 'MEP'+ ' = '+mep_Disel.toFixed(2)+' Kpa';

};



