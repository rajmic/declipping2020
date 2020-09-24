

var plot_path = "images/individual_results/"

var active_clicked_sound_id = "plot_sound_01"
var active_clicked_value_id = "plot_dSDRc"

function Change_plot_init() {
	document.getElementById(active_clicked_sound_id).setAttribute('class', 'clicked')
	document.getElementById(active_clicked_value_id).setAttribute('class', 'clicked')

	document.getElementById("plot_caption").innerHTML = document.getElementById(active_clicked_value_id).innerHTML + ' results for audio excerpt ' + active_clicked_sound_id.substring(11) + '. ' +  sounds_label[parseInt(active_clicked_sound_id.substring(11))-1] + '.'
	document.getElementById("src.plot").setAttribute('alt', document.getElementById(active_clicked_value_id).innerHTML + ' results for audio excerpt ' + active_clicked_sound_id.substring(11) + '. ' +  sounds_label[parseInt(active_clicked_sound_id.substring(11))-1] + '.')
}

function Change_plot_sound(clicked_sound_id){
	
	document.getElementById(active_clicked_sound_id).setAttribute('class', '')
	document.getElementById(clicked_sound_id).setAttribute('class', 'clicked')
	active_clicked_sound_id = clicked_sound_id
		
	Change_plot()
}


function Change_plot_value(clicked_value_id) {
	
	document.getElementById(active_clicked_value_id).setAttribute('class', '')
	document.getElementById(clicked_value_id).setAttribute('class', 'clicked')
	active_clicked_value_id = clicked_value_id
	
	Change_plot()
}


function Change_plot() {
	
    var plot_string = 'Results_' + active_clicked_value_id.substring(5) + active_clicked_sound_id.substring(4) + '_styled.png'
	document.getElementById("a.plot").setAttribute('href', plot_path + plot_string)
	document.getElementById("src.plot").setAttribute('src', plot_path + plot_string)
	
		
	document.getElementById("plot_caption").innerHTML = document.getElementById(active_clicked_value_id).innerHTML + ' results for audio excerpt ' + active_clicked_sound_id.substring(11) + '. ' +  sounds_label[parseInt(active_clicked_sound_id.substring(11))-1] + '.'
	document.getElementById("src.plot").setAttribute('alt', document.getElementById(active_clicked_value_id).innerHTML + ' results for audio excerpt ' + active_clicked_sound_id.substring(11) + '. ' +  sounds_label[parseInt(active_clicked_sound_id.substring(11))-1] + '.')	
}