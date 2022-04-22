var Number_Of_Revolution_Per_second=document.getElementById("Number_Of_Revolution_Per_Second");
var Number_Of_Revolution_between_spark_Timing_And_TDc=document.getElementById('Number_Of_Revolution_between_spark_Timing_And_TDC');
var Crank_Shaft_Angle_During_This_period = document.getElementById('Crank_Shaft_Angle_During_This_Period');
var Inlet_Valve_opening = document.getElementById('Inlet_Valve_Opening');
var Inlet_Valve_Opening_Time_In_seconds = document.getElementById('Inlet_Valve_Opening_Time_In_Seconds');

var ClickEngineperformance = document.getElementById('ClickEnginePerformance');

ClickEngineperformance.onclick = function(){

    Engine_Performance()
};

function Engine_Performance(){

    var Rotation_speed = parseFloat(document.getElementById('Rotation-Speed').value);
    var occurs_By_second =parseFloat(document.getElementById('occurs_By_Second').value);
    var Inlet_Valve_open = parseFloat(document.getElementById('Inlet_Valve_Open').value);
    var Inlet_Value_close = parseFloat(document.getElementById('Inlet_Value_Close').value);

    //Number_Of_Revolution_Per_second
    var Number_Of_Revolution_per_second = (Rotation_speed/60);
    Number_Of_Revolution_Per_second.innerHTML = 'No.revolution/Sec = '+ parseFloat(Number_Of_Revolution_per_second.toFixed(2))+' rev';

    //Number_Of_Revolution_between_spark_Timing_And_TDC
    var Number_Of_Revolution_between_spark_Timing_and_TDc =(Number_Of_Revolution_per_second * occurs_By_second);
    Number_Of_Revolution_between_spark_Timing_And_TDc.innerHTML =  'NO.Of Revolution between spark Timing And TDC = ' + parseFloat(Number_Of_Revolution_between_spark_Timing_and_TDc.toFixed(5))+' rev';

    //Crank_Shaft_Angle_During_This_period 
    var Crank_Shaft_Angle_During_this_period =  (Number_Of_Revolution_between_spark_Timing_and_TDc.toFixed(5)) * 360 ;
    Crank_Shaft_Angle_During_This_period.innerHTML = 'Crank Shaft Angle During this period = '+Crank_Shaft_Angle_During_this_period.toFixed(2)+'i.e spark must occurs ' + Crank_Shaft_Angle_During_this_period.toFixed(2) + ' degree bTDC';

    //Inlet_Valve_opening
    var Inlet_valve_opening = Inlet_Valve_open + Inlet_Value_close + 180;
    Inlet_Valve_opening.innerHTML = Inlet_valve_opening.toFixed(2)+" degrees ";

    //Inlet_Valve_Opening_Time_In_seconds
    var Inlet_Valve_Opening_Time_in_seconds =  Inlet_valve_opening  / (360 * Number_Of_Revolution_per_second);
    Inlet_Valve_Opening_Time_In_seconds.innerHTML ='Inlet Valve Opening Time in seconds = ' +Inlet_Valve_Opening_Time_in_seconds.toFixed(5);
};

//The Socond Problem

var Indicatedpower = document.getElementById('Indicated_Power');
var Stroke_And_area = document.getElementById("Stroke_And_Area");
var diameter = document.getElementById('Diameter');
var Mean_Piston_speed = document.getElementById('Mean_Piston_Speed');

var ClickEngineperformance2=document.getElementById("ClickEnginePerformance2");

ClickEngineperformance2.onclick=function(){
    Engine_Performance_2()
};

function    Engine_Performance_2(){
    //Variavle
    var Number_Of_cyliner = parseFloat(document.getElementById("Number_Of_Cyliner").value);
    var MEP= parseFloat(document.getElementById("Mean Effective Pressure").value);
    var Brake_power =  parseFloat (document.getElementById("Brake_Power").value);
    var Rotation_speed =  parseFloat (document.getElementById('Rotation_Speed').value);
    var Mechanical_efficiency = parseFloat (document.getElementById("Mechanical_Efficiency").value)/100;
    var Bore_To_Stroke_ratio = parseFloat (document.getElementById("Bore_To_Stroke_Ratio").value);

    //Indicated power
    var Indicated_power =(Brake_power / Mechanical_efficiency );
    Indicatedpower.innerHTML = 'i.p = '+parseFloat (Indicated_power.toFixed(2))+' Kw';

    //Stroke_And_area
    var stroke_and_area = (2*60* Indicated_power.toFixed(2)) / (MEP * 1000 * Rotation_speed *Number_Of_cyliner)
    Stroke_And_area.innerHTML = "LA= "+ parseFloat (stroke_and_area.toFixed(5))+' m3'

    //Diameter
    var Diametercyliner = Math.cbrt ((stroke_and_area.toFixed(5)*4*0.66) / Math.PI) ;
    diameter.innerHTML =  ' Diameter = '+ Diametercyliner.toFixed(4)+' m';
    
    //Mean Piston Speed
    var Mean_piston_speed = (2*Diametercyliner.toFixed(4)*Rotation_speed)/(60 * Bore_To_Stroke_ratio );
    Mean_Piston_speed.innerHTML =  'Mean Piston Speed ' +Mean_piston_speed.toFixed(2)+' m/sec';
};

//Third Problem

var Indicated_power3 = document.getElementById("Indicated_Power3");
var Friction_power = document.getElementById("Friction_Power");
var Brake_Thermal_efficiency = document.getElementById("Brake_Thermal_Efficiency");
var Indicated_Thermal_efficiency = document.getElementById("Indicated_Thermal_Efficiency");
var Fuel_Consumption_Per_hour = document.getElementById("Fuel_Consumption_per_Hour");
var Air_Consumption_Per_hour =  document.getElementById("Air_Consumption_Per_Hour");

var ClickEngineperformance_3 = document.getElementById("ClickEnginePerformance_3");

//Function

ClickEngineperformance_3.onclick = function(){
    Engine_Performance_3()
};

function  Engine_Performance_3(){

    var Brake_power3=parseFloat(document.getElementById("Brake_Power3").value);
    var Mechanical_efficiency3 = parseFloat(document.getElementById("Mechanical_Efficiency3").value)/100;
    var Fuel_consumption_Of_The_Engine = parseFloat(document.getElementById("Fuel_consumption_of_the_engine").value);
    var Air_fuel = parseFloat (document.getElementById("Air_Fuel").value);
    var Heating_value_of_the_Fuel = parseFloat(document.getElementById('Heating_value_of_the_fuel').value);
    
    //Indicated_power

    var indicated_power3 = (Brake_power3/Mechanical_efficiency3);
    Indicated_power3.innerHTML = 'i.p = '+indicated_power3.toFixed(2)+" Kw";

    //Friction Power

    var friction_power = indicated_power3.toFixed(2) - Brake_power3 ;
    Friction_power.innerHTML = 'f.p = '+friction_power.toFixed(2)+" Kw";

    //Brake Thermal Efficiency

    var Brake_Thermal_Efficiency = (Brake_power3 * 3600)  / (Fuel_consumption_Of_The_Engine *Brake_power3* Heating_value_of_the_Fuel)
    Brake_Thermal_efficiency.innerHTML = ' Efficiency_BT = '+ Brake_Thermal_Efficiency.toFixed(3)*100 +" %";

    //Indicated Thermal efficiency
    var Indicated_Thermal_Efficiency =  Brake_Thermal_Efficiency.toFixed(3)*100 / Mechanical_efficiency3 ;
    Indicated_Thermal_efficiency.innerHTML = ' Efficiency_IT = '+Indicated_Thermal_Efficiency.toFixed(2)+" %";
    
    //Fuel_Consumption_Per_hour
    var Fuel_Consumption_per_Hour = Brake_power3 * Fuel_consumption_Of_The_Engine ;
    Fuel_Consumption_Per_hour.innerHTML = "Fuel_Consumption_per_Hour = " +Fuel_Consumption_per_Hour.toFixed(2)+' Kg'

    //Air_Consumption_Per_hour 
    var Air_Consumption_per_Hour =   Fuel_Consumption_per_Hour.toFixed(2) * Air_fuel
    Air_Consumption_Per_hour.innerHTML = 'Air Consumption Per Hour= '+Air_Consumption_per_Hour.toFixed(2)+' Kg';

};

//Fourth Problem
var Brake_power4 = document.getElementById('Brake_Power4');
var The_Brake_Thermal_efficiency = document.getElementById('The_Brake_Thermal_Efficiency');
var The_Brakes_Mean_Effective_Pressure = document.getElementById("The_Brakes_Mean_Effective_Pressure");
var The_Volumetric_Efficiency = document.getElementById("The_Volumetric_Efficiency");
var VS4=document.getElementById("Vs4");

var ClickEngineperformance_4 = document.getElementById("ClickEnginePerformance_4");

ClickEngineperformance_4.onclick= function(){

    Engine_Performance_4()
};

function Engine_Performance_4() {

    var Air_flow = parseFloat (document.getElementById("Air_Flow").value);
    var bore4 = parseFloat(document.getElementById('Bore4').value)/100;
    var stroke4 = parseFloat (document.getElementById("Stroke4").value)/100;
    var Rotation_speed4 = parseFloat (document.getElementById("Rotation_Speed4").value);
    var torque = parseFloat(document.getElementById("Torque").value);
    var Fuel_consumption = parseFloat(document.getElementById("Fuel_Consumption").value);
    var Q_add = parseFloat(document.getElementById("Q_added").value);
    var Number_of_cyliner4=parseFloat(document.getElementById("Number_Of_Cyliner4").value);

    //The Brake Power.
    var brake_power4= (2*Math.PI*Rotation_speed4*torque)/(1000*60);
    Brake_power4 .innerHTML = 'b.p = '+brake_power4.toFixed(2)+' Kw';

    //The Brake Thermal Efficiency
    var The_Brake_thermal_efficiency = (brake_power4.toFixed(2) *3600 / (Fuel_consumption * Q_add)) *100
    The_Brake_Thermal_efficiency.innerHTML = ' Efficiency_BT = '+(The_Brake_thermal_efficiency.toFixed(2)) +' %';

    //The Brakes Mean Effective Pressure
    var The_Brakes_Mean_effective_pressure = (2*(brake_power4.toFixed(2))*4*60) / ((stroke4*(Math.PI*(bore4**2))) * Rotation_speed4 *Number_of_cyliner4);
    The_Brakes_Mean_Effective_Pressure .innerHTML ='Pi ='+ The_Brakes_Mean_effective_pressure.toFixed(2)+' Kpa';

    //The_Volumetric_Efficiency

    var Vs=((stroke4 * (Math.PI*(bore4**2)/4))*(Rotation_speed4 *Number_of_cyliner4 ))/2;
    VS4.innerHTML = "Vs ="+Vs.toFixed(2)+' m3/min';
    var The_Volumetric_efficiency = (Air_flow / Vs)*100 ; 
    The_Volumetric_Efficiency.innerHTML ="The_Volumetric_efficiency ="+The_Volumetric_efficiency.toFixed(2) +' %';


};

