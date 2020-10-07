
var bar_path = "images/main_results/"
active_clicked_id = "Algorithm-sorted"


function Change_sorting_bar_graphs(clicked_id){
	
	if (clicked_id == "Algorithm-sorted") {
		
		document.getElementById(active_clicked_id).setAttribute('class', '')
		document.getElementById(clicked_id).setAttribute('class', 'clicked')
		active_clicked_id = clicked_id
		
		document.getElementById("a.dSDR").setAttribute('href', bar_path+'Results_dSDRc.png')
		document.getElementById("src.dSDR").setAttribute('src', bar_path+'Results_dSDRc.png')
		
		document.getElementById("a.PEAQ").setAttribute('href', bar_path+'Results_PEAQ.png')
		document.getElementById("src.PEAQ").setAttribute('src', bar_path+'Results_PEAQ.png')
		
		document.getElementById("a.PEMOQ").setAttribute('href', bar_path+'Results_PEMOQ.png')
		document.getElementById("src.PEMOQ").setAttribute('src', bar_path+'Results_PEMOQ.png')
		
		document.getElementById("a.Rnonlin").setAttribute('href', bar_path+'Results_Rnonlin_calc.png')
		document.getElementById("src.Rnonlin").setAttribute('src', bar_path+'Results_Rnonlin_calc.png')	
	}
	
	if (clicked_id == "Value-sorted") {
	
		document.getElementById(active_clicked_id).setAttribute('class', '')
		document.getElementById(clicked_id).setAttribute('class', 'clicked')
		active_clicked_id = clicked_id
		
	    document.getElementById("a.dSDR").setAttribute('href', bar_path+'Results_dSDRc_sorted.png')
		document.getElementById("src.dSDR").setAttribute('src', bar_path+'Results_dSDRc_sorted.png')
		
		document.getElementById("a.PEAQ").setAttribute('href', bar_path+'Results_PEAQ_sorted.png')
		document.getElementById("src.PEAQ").setAttribute('src', bar_path+'Results_PEAQ_sorted.png')
		
		document.getElementById("a.PEMOQ").setAttribute('href', bar_path+'Results_PEMOQ_sorted.png')
		document.getElementById("src.PEMOQ").setAttribute('src', bar_path+'Results_PEMOQ_sorted.png')
		
		document.getElementById("a.Rnonlin").setAttribute('href', bar_path+'Results_Rnonlin_calc_sorted.png')
		document.getElementById("src.Rnonlin").setAttribute('src', bar_path+'Results_Rnonlin_calc_sorted.png')	
	}
}
