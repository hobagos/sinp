function helper(fnctn)
{
	if(fnctn<1)
			{
				for(i=1;;i++)
				{
					if(fnctn*Math.pow(10,i)>=1)
						{
							return Math.round(fnctn*Math.pow(10,i+1))/Math.pow(10,i+1);
						}
				}
			}
		if(fnctn<10 && fnctn>=1)
			{
				return Math.round(fnctn*10)/10;
			}
		if(fnctn>=10)
			{
				return Math.round(fnctn);
			}
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent||tmp.innerText;
}

function getSubstance(line)
{
	return line.substring(line.indexOf("<"),line.indexOf("-"));
}

// ##############################################
// 1

function calculate1(wkn_1)
{
	return Math.log(wkn_1)/114.3;
}

$('#p1btn').click(function() {
 	$("#p1").text(helper(calculate1(parseFloat( $("#wkn_1").val() ))) + " см");
});


// #############################################
// 2
function calculate2(sbst_2, enrg_2, wkn_2)
{
	var sbst_arr_2 = new Array(3);
	sbst_arr_2[0] = "воды";
	sbst_arr_2[1] = "алюминия";
	sbst_arr_2[2] = "свинца";

	var enrg_arr_2 = new Array(7);
	enrg_arr_2[0] = 0.1;
	enrg_arr_2[1] = 0.2;
	enrg_arr_2[2] = 0.5;
	enrg_arr_2[3] = 1;
	enrg_arr_2[4] = 2;
	enrg_arr_2[5] = 5;
	enrg_arr_2[6] = 10;

	var mu_arr_2 = new Array(3);
	mu_arr_2[0] = new Array(7);
	mu_arr_2[0][0]=0.171;
	mu_arr_2[0][1]=0.137;
	mu_arr_2[0][2]=0.097;
	mu_arr_2[0][3]=0.0706;
	mu_arr_2[0][4]=0.0493;
	mu_arr_2[0][5]=0.0302;
	mu_arr_2[0][6]=0.0221;
	mu_arr_2[1] = new  Array(7);
	mu_arr_2[1][0]=0.444;
	mu_arr_2[1][1]=0.323;
	mu_arr_2[1][2]=0.228;
	mu_arr_2[1][3]=0.166;
	mu_arr_2[1][4]=0.117;
	mu_arr_2[1][5]=0.075;
	mu_arr_2[1][6]=0.062;
	mu_arr_2[2] = new  Array(7);
	mu_arr_2[2][0]=60;
	mu_arr_2[2][1]=11.8;
	mu_arr_2[2][2]=1.72;
	mu_arr_2[2][3]=0.79;
	mu_arr_2[2][4]=0.51;
	mu_arr_2[2][5]=0.49;
	mu_arr_2[2][6]=0.60;


	for(i=0;i<=2;i++)
	{

		;
		if(sbst_2==sbst_arr_2[i])
			{
				sbst_2 = i;
				break;
			}
	}

	for(i=0;i<=6;i++)
	{
		if(enrg_2==enrg_arr_2[i])
			{
				enrg_2 = i;
				break;
			}
	}

	return Math.log(wkn_2)/mu_arr_2[sbst_2][enrg_2];
}

$('#p2btn').click(function() {
 	$("#p2").text(helper(calculate2($("#sbst_2").val(), parseFloat($("#enrg_2").val()), parseFloat($("#wkn_2").val()))) + " см");
});


// ######################################################################
// 3


function getZ(line)
{
	return line.substring(0,line.indexOf("<"));
}

function getA(line)
{
	return line.substring(line.indexOf(">")+1,line.indexOf("/")-1);
}

function calculate3(particle_3, sbst_3, enrg_3, width_3)
{
	var n;

	var particles_arr_3 = new Array(3);
	particles_arr_3[0]="Протоны";
	particles_arr_3[1]="Дейтроны";
	particles_arr_3[2]="Тритоны";

	var sbst_arr_3 = new Array(9);
	sbst_arr_3[0]="13<sup>27</sup>Al-алюминиевую";
	sbst_arr_3[1]="14<sup>28</sup>Si-кремниевую";
	sbst_arr_3[2]="22<sup>48</sup>Ti-титановую";
	sbst_arr_3[3]="26<sup>56</sup>Fe-железную";
	sbst_arr_3[4]="29<sup>63</sup>Cu-медную";
	sbst_arr_3[5]="47<sup>107</sup>Ag-серебряную";
	sbst_arr_3[6]="74<sup>184</sup>W-вольфрамовую";
	sbst_arr_3[7]="79<sup>197</sup>Au-золотую";
	sbst_arr_3[8]="82<sup>208</sup>Pb-свинцовую";

	for(i=0; i<sbst_arr_3.length; i++)
	{
		if(sbst_arr_3[i].indexOf(sbst_3) != -1)
		{
			sbst_3 = sbst_arr_3[i];
			n = i;
			break;
		}
	}

	var dnst_arr_3 = new Array(9);
	dnst_arr_3[0]=2.7;
	dnst_arr_3[1]=2.33;
	dnst_arr_3[2]=4.6;
	dnst_arr_3[3]=7.88;
	dnst_arr_3[4]=8.93;
	dnst_arr_3[5]=10.5;
	dnst_arr_3[6]=19.35;
	dnst_arr_3[7]=19.31;
	dnst_arr_3[8]=11.35;

	//var particle_3 = particles_arr_3[freeselect(3)];
	//var width_3 = (3+freeselect(8))/10;
	//var enrg_3 = 130+10*freeselect(8);
	//freeselect(9);
	//var sbst_3 = sbst_arr_3[n];
	var dnst_3 = dnst_arr_3[n];



	if(particle_3 == particles_arr_3[0])
		{
			var mass_3 = 938;
		}
	if(particle_3 == particles_arr_3[1])
		{
			var mass_3 = 1876;
		}
	if(particle_3 == particles_arr_3[2])
		{
			var mass_3 = 2817;
		}
	var spLoss,finalEnergy;
	var Z = getZ(sbst_3);
	var A = getA(sbst_3);
	var b2=1-Math.pow(mass_3/(mass_3+enrg_3),2);
	spLoss=0.31*Z*dnst_3*(11.2+Math.log(b2/(Z*(1-b2)))-b2)/(A*b2);
	finalEnergy = enrg_3-spLoss*width_3;
	return finalEnergy;
}

$('#p3btn').click(function() {
	var p_3 = $("#particle_3").val();
	var sbst_3 = $("#sbst_3").val();
	var enrg_3 = parseFloat($("#enrg_3").val());
	var width_3 = parseFloat($("#width_3").val()); 
 	$("#p3").text(helper(calculate3( p_3, sbst_3, enrg_3, width_3 ))+ " МэВ");
});

// ########################################################
// 4
function calculate4(particle_4, race_4, enrg_4)
{
	var particles_arr_4 = new Array(3);
	particles_arr_4[0] = "протонов";
	particles_arr_4[1] = "дейтронов";
	particles_arr_4[2] = "тритонов";

	if(particle_4 == particles_arr_4[0])
		{
			var mass_4 = 938;
		}
	if(particle_4 == particles_arr_4[1])
		{
			var mass_4 = 1876;
		}
	if(particle_4 == particles_arr_4[2])
		{
			var mass_4 = 2817;
		}
	
	var spLoss,ions;
	var Z=7;
	var A=14;
	var d=1.29e-3;
	var b2=1-Math.pow(mass_4/(mass_4+enrg_4),2);
	spLoss=0.31*Z*d*(11.2+Math.log(b2/(Z*(1-b2)))-b2)/(A*b2);
	ions=spLoss*race_4*1e6/35
	return ions;
}

$('#p4btn').click(function() {
	var p_4 = $("#particle_4").val();
	var enrg_4 = parseFloat($("#enrg_4").val());
	var race_4 = parseFloat($("#race_4").val()); 
 	$("#p4").text(helper(calculate4( p_4, race_4, enrg_4 ))+ " пар");
});

// ########################################################
// 5

function calculate5(isotope_5,mass_5)
{

	var isotopes = new Array(36);
	isotopes[0]="<sup>7</sup>Be";
	isotopes[1]="<sup>8</sup>Be";
	isotopes[2]="<sup>12</sup>B";
	isotopes[3]="<sup>11</sup>C";
	isotopes[4]="<sup>14</sup>C";
	isotopes[5]="<sup>13</sup>N";
	isotopes[6]="<sup>22</sup>Ne";
	isotopes[7]="<sup>28</sup>Al";
	isotopes[8]="<sup>27</sup>Si";
	isotopes[9]="<sup>32</sup>P";
	isotopes[10]="<sup>36</sup>Cl";
	isotopes[11]="<sup>40</sup>K";
	isotopes[12]="<sup>50</sup>V";
	isotopes[13]="<sup>60</sup>Co";
	isotopes[14]="<sup>87</sup>Rb";
	isotopes[15]="<sup>90</sup>Sr";
	isotopes[16]="<sup>90</sup>Y";
	isotopes[17]="<sup>104</sup>Rh";
	isotopes[18]="<sup>108</sup>Ag";
	isotopes[19]="<sup>115</sup>In";
	isotopes[20]="<sup>128</sup>I";
	isotopes[21]="<sup>137</sup>Cs";
	isotopes[22]="<sup>138</sup>La";
	isotopes[23]="<sup>148</sup>Sm";
	isotopes[24]="<sup>176</sup>Lu";
	isotopes[25]="<sup>198</sup>Au";
	isotopes[26]="<sup>203</sup>Hg";
	isotopes[27]="<sup>204</sup>Tl";
	isotopes[28]="<sup>210</sup>Pb";
	isotopes[29]="<sup>210</sup>Po";
	isotopes[30]="<sup>226</sup>Ra";
	isotopes[31]="<sup>232</sup>Th";
	isotopes[32]="<sup>233</sup>U";
	isotopes[33]="<sup>238</sup>U";
	isotopes[34]="<sup>238</sup>Pu";
	isotopes[35]="<sup>239</sup>Pu";

	var halflife = new Array(36);
	halflife[0]=53.6*24*3600;
	halflife[1]=2*Math.pow(10,-16);
	halflife[2]=22*Math.pow(10,-3);
	halflife[3]=20*60;
	halflife[4]=5685*365*24*3600;
	halflife[5]=600;
	halflife[6]=26*365*24*3600;
	halflife[7]=2.3*60;
	halflife[8]=4.3;
	halflife[9]=14.5*24*3600;
	halflife[10]=3*365*24*3600*Math.pow(10,8);
	halflife[11]=1.27*365*24*3600*Math.pow(10,4);
	halflife[12]=5*365*24*3600*Math.pow(10,14);
	halflife[13]=5.25*365*24*3600;
	halflife[14]=4.7*365*24*3600*Math.pow(10,10);
	halflife[15]=28.1*365*24*3600;
	halflife[16]=64*3600;
	halflife[17]=4.4*60;
	halflife[18]=2.4*60;
	halflife[19]=6*365*24*3600*Math.pow(10,14);
	halflife[20]=2.5*24*3600;
	halflife[21]=30*365*24*3600;
	halflife[22]=1.1*365*24*3600*Math.pow(10,11);
	halflife[23]=1.2*365*24*3600*Math.pow(10,11);
	halflife[24]=2.1*365*24*3600*Math.pow(10,10);
	halflife[25]=2.7*24*3600;
	halflife[26]=46.9*24*3600;
	halflife[27]=3.78*365*24*3600;
	halflife[28]=21.4*365*24*3600;
	halflife[29]=138.4*24*3600;
	halflife[30]=1600*365*24*3600;
	halflife[31]=1.4*365*24*3600*Math.pow(10,10);
	halflife[32]=16.3*365*24*3600*Math.pow(10,4);
	halflife[33]=4.56*365*24*3600*Math.pow(10,9);
	halflife[34]=5*365*24*3600*Math.pow(10,10);
	halflife[35]=2.44*365*24*3600*Math.pow(10,4);

	var halflife_5 = null; 

	for( i=0; i<isotopes.length; i++)
	{
		if(strip(isotopes[i])==isotope_5)
		{
			halflife_5 = halflife[i];
			isotope_5 = isotopes[i];
		}
	}

	return mass_5*1e-6/(2.4*Math.pow(10,-24)*halflife_5*getA(isotope_5));
}

$('#p5btn').click(function() {
	var isotope_5 = $("#isotope_5").val();
	var mass_5 = parseFloat($("#mass_5").val());
 	$("#p5").text(helper(calculate5( isotope_5, mass_5 ))+ " Бк");
});



// ########################################################
// 6


function calculate6(sbst_6, enrg_6)
{
	var sbst_arr_6 = new Array(3);
	sbst_arr_6[0] = "воды";
	sbst_arr_6[1] = "алюминия";
	sbst_arr_6[2] = "свинца";

	var enrg_arr_6 = new Array(7);
	enrg_arr_6[0] = 0.1;
	enrg_arr_6[1] = 0.2;
	enrg_arr_6[2] = 0.5;
	enrg_arr_6[3] = 1;
	enrg_arr_6[4] = 2;
	enrg_arr_6[5] = 5;
	enrg_arr_6[6] = 10;

	mu_arr_6 = new Array(3);
	mu_arr_6[0] = new Array(7);
	mu_arr_6[0][0]=0.171;
	mu_arr_6[0][1]=0.137;
	mu_arr_6[0][2]=0.097;
	mu_arr_6[0][3]=0.0706;
	mu_arr_6[0][4]=0.0493;
	mu_arr_6[0][5]=0.0302;
	mu_arr_6[0][6]=0.0221;
	mu_arr_6[1] = new  Array(7);
	mu_arr_6[1][0]=0.444;
	mu_arr_6[1][1]=0.323;
	mu_arr_6[1][2]=0.228;
	mu_arr_6[1][3]=0.166;
	mu_arr_6[1][4]=0.117;
	mu_arr_6[1][5]=0.075;
	mu_arr_6[1][6]=0.062;
	mu_arr_6[2] = new  Array(7);
	mu_arr_6[2][0]=60;
	mu_arr_6[2][1]=11.8;
	mu_arr_6[2][2]=1.72;
	mu_arr_6[2][3]=0.79;
	mu_arr_6[2][4]=0.51;
	mu_arr_6[2][5]=0.49;
	mu_arr_6[2][6]=0.60;

	for(i=0;i<=2;i++)
	{
		if(sbst_6==sbst_arr_6[i])
		{
			sbst_6=i;
		}
	}

	for(i=0;i<=6;i++)
	{
		if(enrg_6==enrg_arr_6[i])
		{
			enrg_6=i;
		}
	}

	return Math.log(6e2)/mu_arr_6[sbst_6][enrg_6]
}
$('#p6btn').click(function() {
 	$("#p6").text(helper(calculate6( $("#sbst_6").val(), parseFloat($("#enrg_6").val()) )) + " см");
});

// ########################################################
// 7

function calculate7(dnstc_7, dose_7)
{
	return dnstc_7*Math.sqrt(120*60*dose_7);
}

$('#p7btn').click(function() {
 	$("#p7").text(helper(calculate7( parseFloat($("#dnstc_7").val()), parseFloat($("#dose_7").val()) )) + " см");
});

// ########################################################
// 8

function calculate8(enrg_8)
{
	return 5*75/(enrg_8*0.4*1.6e-13);
}

$('#p8btn').click(function() {
 	$("#p8").text(helper(calculate8( parseFloat($("#enrg_8").val()) )) + " фотонов");
});


// #########################################################
// 9


function calculate9(enrg_9,enrgLoss_9)
{
	return 7.4e6*enrg_9*1.6e-13*enrgLoss_9/70
}
$('#p9btn').click(function() {
	var enrg_9 = parseFloat($("#enrg_9").val());
	var enrgLoss_9 = parseFloat($("#enrgLoss_9").val()); 
 	$("#p9").text(helper(calculate9( enrg_9, enrgLoss_9 )).toExponential()+ " рад/c");
});

// #########################################################
// 10
function getEnergy(line)
{
	return line.substring(line.indexOf("-")+1,line.length);
}

function getSourceName(line)
{
	return line.substring(line.indexOf("<"),line.indexOf("-"));
}


function calculate10(source_10)
{
	var source_arr_10 = new Array(7);
	source_arr_10[0]="13<sup>28</sup>Al-4.64";
	source_arr_10[1]="15<sup>32</sup>P-1.70";
	source_arr_10[2]="23<sup>52</sup>V-3.97";
	source_arr_10[3]="47<sup>108</sup>Ag-1.65";
	source_arr_10[4]="53<sup>128</sup>I-2.13";
	source_arr_10[5]="79<sup>198</sup>Au-1.38";
	source_arr_10[6]="81<sup>204</sup>Tl-0.76";

	for(i=0; i<source_arr_10.length;i++)
	{
		if(strip(getSourceName(source_arr_10[i])) == source_10)
			source_10 = source_arr_10[i];
	}

	var effectiveRace;
	if(getEnergy(source_10)<0.8)
	{
	effectiveRace=0.4*Math.pow(getEnergy(source_10),1.4)*0.48*2/2.3;
	return effectiveRace;
	}
	if(getEnergy(source_10)>=0.8)
	{
	effectiveRace=(0.54*getEnergy(source_10)-0.133)*0.48*2/2.3;
	return effectiveRace;
	}
}
$('#p10btn').click(function() {
	var source_10 = $("#source_10").val();
 	$("#p10").text(helper(calculate10( source_10)) + " см");
});

// #########################################################
// 11

function getSubstance(line)
{
	return line.substring(line.indexOf("<"),line.indexOf("-"));
}

function getDensity(line)
{
	return line.substring(line.indexOf("-")+1,line.length);
}

function calculate11(enrg_11, sbst_11)
{

	var sbst_arr_11 = new Array(9);
	sbst_arr_11[0]="13<sup>27</sup>Al-2.7";
	sbst_arr_11[1]="14<sup>28</sup>Si-2.33";
	sbst_arr_11[2]="22<sup>48</sup>Ti-4.6";
	sbst_arr_11[3]="26<sup>56</sup>Fe-7.88";
	sbst_arr_11[4]="29<sup>63</sup>Cu-8.93";
	sbst_arr_11[5]="47<sup>107</sup>Ag-10.5";
	sbst_arr_11[6]="74<sup>184</sup>W-19.35";
	sbst_arr_11[7]="79<sup>197</sup>Au-19.31";
	sbst_arr_11[8]="82<sup>208</sup>Pb-11.35";
	for(i=0;i<sbst_arr_11.length; i++)
	{
		if(sbst_arr_11[i].indexOf(sbst_11) != -1 )
		{
			sbst_11 = sbst_arr_11[i];
			break;
		}
	}
	return  (0.54*enrg_11-0.133)*0.48/(getZ(sbst_11)*getDensity(sbst_11)/getA(sbst_11));
}

$('#p11btn').click(function() {
	var enrg_11 = parseFloat($("#enrg_11").val());
	var sbst_11 = $("#sbst_11").val(); 
 	$("#p11").text(helper(calculate11( enrg_11, sbst_11 )) + " см");
});

// #########################################################
// 12
function calculate12(enrg_12, sbst_12)
{
	var sbst_arr_12 = new Array(6);
	sbst_arr_12[0]="6<sup>12</sup>C-углероде";
	sbst_arr_12[1]="13<sup>27</sup>Al-алюминии";
	sbst_arr_12[2]="14<sup>28</sup>Si-кремнии";
	sbst_arr_12[3]="22<sup>48</sup>Ti-титане";
	sbst_arr_12[4]="26<sup>56</sup>Fe-железе";
	sbst_arr_12[5]="29<sup>63</sup>Cu-меди";

	var dnst_arr_12 = new Array(6);
	dnst_arr_12[0]=2.3;
	dnst_arr_12[1]=2.7;
	dnst_arr_12[2]=2.33;
	dnst_arr_12[3]=4.6;
	dnst_arr_12[4]=7.88;
	dnst_arr_12[5]=8.93;

	var dnst_12 = null;

	for(i =0; i < sbst_arr_12.length; i++)
	{
		if(strip(getSubstance(sbst_arr_12[i]))==sbst_12)
		{
			dnst_12 = dnst_arr_12[i];
			sbst_12 = sbst_arr_12[i];
		}
	}
	var ionLoss,radLoss;
	var Z=getZ(sbst_12);
	var A=getA(sbst_12);
	var d=dnst_12;
	var E=enrg_12;
	var b2=1-Math.pow(0.5/(0.5+enrg_12),2);
	ionLoss=0.15*Z*d*(7.25+Math.log(b2*E*1e6/(Z*Z*(1-b2)))-(2*Math.sqrt(1-b2)-1+b2)*Math.LN2+1-b2+Math.pow((1-Math.sqrt(1-b2)),2)/8)/(A*b2);
	radLoss=Z*E*ionLoss/800;
	return radLoss;
}

$("#p12btn").click(function() {
	var enrg_12 = parseFloat($("#enrg_12").val());
	var sbst_12 = $("#sbst_12").val(); 
 	$("#p12").text(helper(calculate12( enrg_12, sbst_12 )) + " МэВ/см");
});

// #########################################################
// 13
function calculate13(enrg_13, width_13, sbst_13)
{
	var sbst_arr_13 = new Array(6);
	sbst_arr_13[0]="6<sup>12</sup>C-углерода";
	sbst_arr_13[1]="13<sup>27</sup>Al-алюминия";
	sbst_arr_13[2]="14<sup>28</sup>Si-кремния";
	sbst_arr_13[3]="22<sup>48</sup>Ti-титана";
	sbst_arr_13[4]="26<sup>56</sup>Fe-железа";
	sbst_arr_13[5]="29<sup>63</sup>Cu-меди";

	var dnst_arr_13 = new Array(6);
	dnst_arr_13[0]=2.3;
	dnst_arr_13[1]=2.7;
	dnst_arr_13[2]=2.33;
	dnst_arr_13[3]=4.6;
	dnst_arr_13[4]=7.88;
	dnst_arr_13[5]=8.93;

	var dnst_13=null;

	for(i =0; i < sbst_arr_13.length; i++)
	{
		if(strip(getSubstance(sbst_arr_13[i]))==sbst_13)
		{
			dnst_13 = dnst_arr_13[i];
			sbst_13 = sbst_arr_13[i];
		}
	}

	var ionLoss,radLoss,finalEnergy;
	var Z=getZ(sbst_13);
	var A=getA(sbst_13);
	var d=dnst_13;
	var E=enrg_13;
	var b2=1-Math.pow(0.5/(0.5+enrg_13),2);
	ionLoss=0.15*Z*d*(7.25+Math.log(b2*E*1e6/(Z*Z*(1-b2)))-(2*Math.sqrt(1-b2)-1+b2)*Math.LN2+1-b2+Math.pow((1-Math.sqrt(1-b2)),2)/8)/(A*b2);
	radLoss=Z*E*ionLoss/800;
	finalEnergy = enrg_13-(radLoss+ionLoss)*width_13;
	return finalEnergy;
}
$("#p13btn").click(function() {
	var enrg_13 = parseFloat($("#enrg_13").val());
	var width_13 = parseFloat($("#width_13").val());
	var sbst_13 = $("#sbst_13").val(); 
 	$("#p13").text(helper(calculate13( enrg_13, width_13, sbst_13 )) + " МэВ");
});

// ########################################################
// 14
function calculate14(enrg_14, sbst_14)
{
	var sbst_arr_14 = new Array(9);
	sbst_arr_14[0]="13<sup>27</sup>Al-алюминиевую";
	sbst_arr_14[1]="14<sup>28</sup>Si-кремниевую";
	sbst_arr_14[2]="22<sup>48</sup>Ti-титановую";
	sbst_arr_14[3]="26<sup>56</sup>Fe-железную";
	sbst_arr_14[4]="29<sup>63</sup>Cu-медную";
	sbst_arr_14[5]="47<sup>107</sup>Ag-серебряную";
	sbst_arr_14[6]="74<sup>184</sup>W-вольфрамовую";
	sbst_arr_14[7]="79<sup>197</sup>Au-золотую";
	sbst_arr_14[8]="82<sup>208</sup>Pb-свинцовую";

	var dnst_arr_14 = new Array(9);
	dnst_arr_14[0]=2.7;
	dnst_arr_14[1]=2.33;
	dnst_arr_14[2]=4.6;
	dnst_arr_14[3]=7.88;
	dnst_arr_14[4]=8.93;
	dnst_arr_14[5]=10.5;
	dnst_arr_14[6]=19.35;
	dnst_arr_14[7]=19.31;
	dnst_arr_14[8]=11.35;

	var dnst_14 = null;

	for(i =0; i < sbst_arr_14.length; i++)
	{
		if(strip(getSubstance(sbst_arr_14[i]))==sbst_14)
		{
			dnst_14 = dnst_arr_14[i];
			sbst_14 = sbst_arr_14[i];
		}
	}

	var ionLoss;
	var Z=getZ(sbst_14);
	var A=getA(sbst_14);
	var d=dnst_14;
	var E=enrg_14;
	var b2=1-Math.pow(0.5/(0.5+E),2);
	ionLoss=0.15*Z*d*(7.25+Math.log(b2*E*1e6/(Z*Z*(1-b2)))-(2*Math.sqrt(1-b2)-1+b2)*Math.LN2+1-b2+Math.pow((1-Math.sqrt(1-b2)),2)/8)/(A*b2);
	return ionLoss;
}

$("#p14btn").click(function() {
	var enrg_14 = parseFloat($("#enrg_14").val());
	var sbst_14 = $("#sbst_14").val(); 
 	$("#p14").text(helper(calculate14( enrg_14, sbst_14 )) + " МэВ/см");
});

// #########################################################
// 15

function calculate15(sbst_15, race_15)
{

	var sbst_arr_15 = new Array(9);
	sbst_arr_15[0]="13<sup>27</sup>Al-алюминия";
	sbst_arr_15[1]="14<sup>28</sup>Si-кремния";
	sbst_arr_15[2]="22<sup>48</sup>Ti-титана";
	sbst_arr_15[3]="26<sup>56</sup>Fe-железа";
	sbst_arr_15[4]="29<sup>63</sup>Cu-меди";
	sbst_arr_15[5]="47<sup>107</sup>Ag-серебра";
	sbst_arr_15[6]="74<sup>184</sup>W-вольфрама";
	sbst_arr_15[7]="79<sup>197</sup>Au-золота";
	sbst_arr_15[8]="82<sup>208</sup>Pb-свинца";

	var dnst_arr_15 = new Array(9);
	dnst_arr_15[0]=2.7;
	dnst_arr_15[1]=2.33;
	dnst_arr_15[2]=4.6;
	dnst_arr_15[3]=7.88;
	dnst_arr_15[4]=8.93;
	dnst_arr_15[5]=10.5;
	dnst_arr_15[6]=19.35;
	dnst_arr_15[7]=19.31;
	dnst_arr_15[8]=11.35;


	for(i=0; i<sbst_arr_15.length; i++)
	{
		if(sbst_arr_15[i].indexOf(sbst_15) != -1 )
		{
			var dnst_15 = dnst_arr_15[i];
			sbst_15 = sbst_arr_15[i];
			break;
		}
	}

	return race_15*100*0.44*1.29e-3/(getZ(sbst_15)*dnst_15/getA(sbst_15));
}

$('#p15btn').click(function() {
	var sbst_15 = $("#sbst_15").val();
	var race_15 = parseFloat($("#race_15").val());
 	$("#p15").text(helper(calculate15( sbst_15, race_15 ))+ " cм");
});


// #########################################################
// 16


function calculate16(sbst_16, enrg_16, deg_16)
{

	var sbst_arr_16 = new Array(9);
	sbst_arr_16[0]="13<sup>27</sup>Al";
	sbst_arr_16[1]="14<sup>28</sup>Si";
	sbst_arr_16[2]="22<sup>48</sup>Ti";
	sbst_arr_16[3]="26<sup>56</sup>Fe";
	sbst_arr_16[4]="29<sup>63</sup>Cu";
	sbst_arr_16[5]="47<sup>107</sup>Ag";
	sbst_arr_16[6]="74<sup>184</sup>W";
	sbst_arr_16[7]="79<sup>197</sup>Au";
	sbst_arr_16[8]="82<sup>208</sup>Pb";

	for(i=0;i<sbst_arr_16.length; i++)
	{
		if(sbst_arr_16[i].indexOf(sbst_16.substr(sbst_16.length-2,sbst_16.length))!=-1)
		{
			sbst_16 = sbst_arr_16[i];
			break;
		}
		else
		if(sbst_16=="184W")
		{
			sbst_16 = sbst_arr_16[6];
			break;
		}
	}

	var enrg_nuc_rest;
	var enrg_nuc_aftr;
	var mass_n = 939;
	enrg_nuc_rest=getA(sbst_16)*931-getZ(sbst_16)*0.5;
	enrg_nuc_aftr=4*enrg_nuc_rest*mass_n*enrg_16*Math.pow(Math.cos(deg_16*Math.PI/180),2)/Math.pow((enrg_nuc_rest+mass_n),2);
	return enrg_nuc_aftr;
}

$('#p16btn').click(function() {
	var sbst_16 = $("#sbst_16").val();
	var enrg_16 = parseFloat($("#enrg_16").val());
	var deg_16 = parseFloat($("#deg_16").val()); 
 	$("#p16").text(helper(calculate16( sbst_16, enrg_16, deg_16 ))+ " МэВ");
});

// ##################################################33
// 17

function calculate17(enrg_17, sbst_17, dstn_17)
{
	var sbst_arr_17 = new Array(7);
	sbst_arr_17[0]="полиэтилене/5.5-13.9";
	sbst_arr_17[1]="плексигласе/6.3-15.2";
	sbst_arr_17[2]="карбиде бора/12-17.2";
	sbst_arr_17[3]="графите/11.4-24";
	sbst_arr_17[4]="алюминии/14.1-15.9";
	sbst_arr_17[5]="железе/7.6-8.3";
	sbst_arr_17[6]="свинце/15-15.5";

	for(i=0; i<sbst_arr_17.length; i++)
	{
		if(sbst_arr_17[i].indexOf(sbst_17) != -1 )
		{
			sbst_17 = sbst_arr_17[i];
			break;
		}
	}

	var lambda;
	if(enrg_17==4)
	{
		lambda = sbst_17.substring(sbst_17.indexOf("/")+1,sbst_17.indexOf("-"));
	}
	if(enrg_17==14.9)
	{
		lambda = sbst_17.substring(sbst_17.indexOf("-")+1,sbst_17.length);
	}
	return 1e7*Math.exp(-dstn_17/lambda)/(4*Math.PI*Math.pow(dstn_17,2));
}

$('#p17btn').click(function() {
	var enrg_17 = parseFloat($("#enrg_17").val());
	var sbst_17 = $("#sbst_17").val();
	var dstn_17 = parseFloat($("#dstn_17").val()); 
 	$("#p17").text(helper(calculate17( enrg_17, sbst_17, dstn_17 ))+ " част/(сек·см2)");
});



// ###############################################333
// 18

function calculate18(enrg_18, dstn_18, sbst_18)
{

	var sbst_arr_18 = new Array(3);
	sbst_arr_18[0] = "воде";
	sbst_arr_18[1] = "алюминии";
	sbst_arr_18[2] = "свинце";

	var enrg_arr_18 = new Array(4);
	enrg_arr_18[0] = 1;
	enrg_arr_18[1] = 2;
	enrg_arr_18[2] = 5;
	enrg_arr_18[3] = 10;

	var mu_arr_18 = new Array(3);
	mu_arr_18[0] = new Array(4);
	mu_arr_18[0][0]=0.0706;
	mu_arr_18[0][1]=0.0493;
	mu_arr_18[0][2]=0.0302;
	mu_arr_18[0][3]=0.0221;
	mu_arr_18[1] = new  Array(4);
	mu_arr_18[1][0]=0.166;
	mu_arr_18[1][1]=0.117;
	mu_arr_18[1][2]=0.075;
	mu_arr_18[1][3]=0.062;
	mu_arr_18[2] = new  Array(4);
	mu_arr_18[2][0]=0.79;
	mu_arr_18[2][1]=0.51;
	mu_arr_18[2][2]=0.49;
	mu_arr_18[2][3]=0.60;


	for(i=0;i<=2;i++)
	{
		if(sbst_18==sbst_arr_18[i])
			{
				sbst_18=i;
				break;
			}
	}

	for(i=0;i<=3;i++)
	{
		if(enrg_18==enrg_arr_18[i])
			{
				enrg_18=i;
				break;
			}
	}

	return 1e4*Math.exp(-dstn_18*mu_arr_18[sbst_18][enrg_18])/(4*Math.PI*Math.pow(dstn_18,2));
}

$('#p18btn').click(function() {
	var enrg_18 = parseFloat($("#enrg_18").val());
	var sbst_18 = $("#sbst_18").val();
	var dstn_18 = parseFloat($("#dstn_18").val()); 
 	$("#p18").text(helper(calculate18( enrg_18, dstn_18, sbst_18 )).toExponential()+ " фотон/(сек·см2)");
});


// #############################################
// 19
function calculate19(particle_19, enrg_19, sbst_19)
{

	var particles_arr_19 = new Array(3);
	particles_arr_19[0]="протонов";
	particles_arr_19[1]="дейтронов";
	particles_arr_19[2]="тритонов";

	var sbst_arr_19 = new Array(9);
	sbst_arr_19[0]="13<sup>27</sup>Al-алюминиевую";
	sbst_arr_19[1]="14<sup>28</sup>Si-кремниевую";
	sbst_arr_19[2]="22<sup>48</sup>Ti-титановую";
	sbst_arr_19[3]="26<sup>56</sup>Fe-железную";
	sbst_arr_19[4]="29<sup>63</sup>Cu-медную";
	sbst_arr_19[5]="47<sup>107</sup>Ag-серебряную";
	sbst_arr_19[6]="74<sup>184</sup>W-вольфрамовую";
	sbst_arr_19[7]="79<sup>197</sup>Au-золотую";
	sbst_arr_19[8]="82<sup>208</sup>Pb-свинцовую";

	var dnst_arr_19 = new Array(9);
	dnst_arr_19[0]=2.7;
	dnst_arr_19[1]=2.33;
	dnst_arr_19[2]=4.6;
	dnst_arr_19[3]=7.88;
	dnst_arr_19[4]=8.93;
	dnst_arr_19[5]=10.5;
	dnst_arr_19[6]=19.35;
	dnst_arr_19[7]=19.31;
	dnst_arr_19[8]=11.35;

	var dnst_19 = null;

	for(i=0; i < sbst_arr_19.length; i++)
	{
		if(strip(getSubstance(sbst_arr_19[i])) == sbst_19)
		{
			dnst_19 = dnst_arr_19[i];
			sbst_19 = sbst_arr_19[i];
		}
	}


	if(particle_19 == particles_arr_19[0])
		{
			var mass_19 = 938;
		}
	if(particle_19 == particles_arr_19[1])
		{
			var mass_19 = 1876;
		}
	if(particle_19 == particles_arr_19[2])
		{
			var mass_19 = 2817;
		}
	var spLoss;
	var Z = getZ(sbst_19);
	var A = getA(sbst_19);
	var b2=1-Math.pow(mass_19/(mass_19+enrg_19),2);
	spLoss=0.31*Z*dnst_19*(11.2+Math.log(b2/(Z*(1-b2)))-b2)/(A*b2);
	return spLoss;
}

$('#p19btn').click(function() {
	var enrg_19 = parseFloat($("#enrg_19").val());
	var sbst_19 = $("#sbst_19").val();
	var particle_19 = $("#particle_19").val();
 	$("#p19").text(helper(calculate19( particle_19, enrg_19, sbst_19 ))+ " МэВ/см");
});