var Cyliner_Bore_And_Stroke_lenght=document.getElementById("Cyliner_Bore_And_Stroke_Lenght");
var Average_Piston_speed = document.getElementById('Average_Piston_Speed');
var Clearance_Volume_Of_One_cyliner = document.getElementById('Clearance_Volume_Of_One_Cyliner');
var Piston_Speed_At_The_End_Of_Combustion = document.getElementById('Piston_Speed_At_The_End_Of_combustion');
var Piston_position=document.getElementById('Piston_Pistion');
var Distance_The_Piston_Has_Travel_From_TDC_At_The_End_Of_combustion = document.getElementById("Distance_The_Piston_Has_Travel_From_TDC_At_The_End_Of_combustion");
var Volume_In_The_combustion_Chamber_At_The_End_Of_combustion=document.getElementById('Volume_In_The_combustion_Chamber_At_The_End_Of_combustion');

var Clickdesign=document.getElementById('ClickDesign');

Clickdesign.onclick=function(){
    Design_of_ICE();
};

function Design_of_ICE(){

    var cyliner= parseFloat(document.getElementById("Number_of_Cyliner").value);
    var Cube_centimeter = parseFloat(document.getElementById('Cube_Centimeter').value)/1000;
    var Rotation_Speed = parseFloat(document.getElementById("Rotation_Speed").value);
    var Compression_ratio = parseFloat(document.getElementById('Compression_Ratio').value);
    var Lenght_of_connecting_rod=parseFloat(document.getElementById('Lenght_of_connecting_Rod').value);
    var Crank_Angle=parseFloat(document.getElementById('Crank_Angle').value);

    //Cyliner_Bore_And_Stroke_Lenght
    var L= parseFloat (0.001);
    var Vd = (Cube_centimeter*L)/cyliner ;
    var Bore=Math.cbrt((4*Vd)/Math.PI); 
    Cyliner_Bore_And_Stroke_lenght.innerHTML ="Bore = Stroke =" +  parseFloat (Bore.toFixed(5)) +' m';

    //Average_Piston_Speed
    var average_piston_speed=2*Bore*(Rotation_Speed /60);
    Average_Piston_speed.innerHTML = 'Average Piston Speed = '+ parseFloat (average_piston_speed.toFixed(2))+' m/sec';

    // Clearance_Volume_Of_One_Cyliner
    var  clearance_volume_of_one_cyliner =Vd/(Compression_ratio-1);
    Clearance_Volume_Of_One_cyliner.innerHTML = 'Vc = '+ parseFloat (clearance_volume_of_one_cyliner.toFixed(6))+' m';

    //Piston_Speed_At_The_End_Of_combustion 
    var crank_offest = Bore/2 ;
    var R =((Lenght_of_connecting_rod/100) / crank_offest);
    var piston_speed_at_the_end_of_combustion = ((Math.PI/2)*Math.sin(Crank_Angle*Math.PI/180)) *(1+((Math.cos(Crank_Angle*Math.PI/180)) / (Math.sqrt((R**2) - (Math.sin(Crank_Angle*Math.PI/180)**2)))));
    Piston_Speed_At_The_End_Of_Combustion.innerHTML = 'Instantaneous piston speed = '+ parseFloat((average_piston_speed * piston_speed_at_the_end_of_combustion).toFixed(3)) +"m/sec";


    //piston position
    var piston_position = crank_offest*Math.cos(Crank_Angle*Math.PI/180)+ Math.sqrt(((Lenght_of_connecting_rod/100)**2) - (crank_offest**2)*(Math.sin(Crank_Angle*Math.PI/180)**2));
    Piston_position.innerHTML=' piston_position = '+ parseFloat( piston_position.toFixed(3)) +' m';

    //Distance_The_Piston_Has_Travel_From_TDC_At_The_End_Of_combustion
    var x=(Lenght_of_connecting_rod/100)+crank_offest - piston_position ;
    Distance_The_Piston_Has_Travel_From_TDC_At_The_End_Of_combustion.innerHTML = 'Distance Piston From TDC = ' + parseFloat (x.toFixed(5))+' m';

    //Volume_In_The_combustion_Chamber_At_The_End_Of_combustion
    var volume_In_The_combustion_Chamber_At_The_End_Of_combustion = parseFloat (clearance_volume_of_one_cyliner.toFixed(6)) + parseFloat(Math.PI * (Bore.toFixed(5)**2) / 4) *(x.toFixed(5));
    Volume_In_The_combustion_Chamber_At_The_End_Of_combustion.innerHTML = 'V = '+volume_In_The_combustion_Chamber_At_The_End_Of_combustion .toFixed(7)+' m ';



};

