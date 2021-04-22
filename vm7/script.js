//Script for running the experiment. Modified from a builder example from lab.js
//See also readme.txt with notes for integrating HTML, js, qualtrics etc.

//template code can be downloaded from  https://labjs.felixhenninger.com

//NOTES ON CHANGING!

//TO CHANGE THE INSTRUCTION TEXT edit this
	//var instructions = "In dit experiment krijg je steeds twee schermen te zien met daarop ofwel een woord ofwel een afbeelding. Het is jouw taak om te beslissen of de afbeelding of het woord op het scherm overeenkomt met de betekenis van datgene op het vorige scherm. Op het toetsenbord druk je op 1 (JA) als het overeenkomt en 0 (NEE) als het niet overeenkomt. Druk op de spatiebalk wanneer je klaar bent om te beginnen."
	// To make it prettier, define it within html
	var instructions = "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'>"+
	"<p>In dit experiment krijg je steeds twee schermen te zien met daarop ofwel een woord ofwel een afbeelding.</p>"+
	"<p>Het is jouw taak om te beslissen of de afbeelding of het woord op het scherm overeenkomt met de betekenis van datgene op het vorige scherm.</p>"+
	"<p>Op het toetsenbord druk je op 1 (JA) als het overeenkomt en 0 (NEE) als het niet overeenkomt.</p>"+
	"<p> Druk op de spatiebalk wanneer je klaar bent om te beginnen.(je moet eerst misschien even met de muis klikken op dit scherm!)</p>"+
	"</div></main>"
	//define the get ready text, not currently used because set further down
	var getReadyText = "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'><p>Maak je klaar voor de volgende!</p></div></main>"
	
//CHANGE THE ISI DURATIONS HERE
	var getReadyDuration = 1000

//TO CHANGE THE SEQUENCE OF EVENTS IN A TRIAL...
	//head down to line 110 where the inner loop template starts

//TO CHANGE THE SOURCE IMAGES ETC
	//var URL_stem = "https://vislanglab.github.io/vm7/img/"; //location of the stimuli, URL or...
	var URL_stem = "img/"; //location of the stimuli, relative path to this file

	//Deal with counterbalancing etc and re-configure so that we can use in lab.js template
	//using same datasource arrays as in previous experiments with jspsych

	// (AllDataSources is originally loaded in the html header)
	// choose one of the sets at random
	var DataSource = AllDataSources[Math.floor(Math.random()*AllDataSources.length)];

	var n_trials = 71;//DataSource.length; //length of array gives number of sequences

	// LAB.JS loop will handle randomisation, but need to transform the DataSource into an object for the trial list
	// i.e., loop through the data source, adding each item to named properties

		//this is the list of parameters that we are going to end up with for every "trial" sequence
		trialProps=["list","Experiment","ScenarioNum","ScenarioType","Condition","ConditionType","Match","WordType","Conventionality","ConventionalityScore","MatchScore","English","Dutch","MeaningType","panel1","panel2"];

		trials=[];
		for (index = 0; index < n_trials; index++) {

			//for each trial, loop through and add them to a new object with named fields
			thisTrial={};
			for (p = 0; p < trialProps.length; p++) {
				thisTrial[trialProps[p]]=DataSource[index][p];
			}
			trials.push(thisTrial);
		}

//TO CHANGE THE GET READY SCREEN TO GIVE AN UPDATE ON PROGRESS
// a handler function will run every time the screen is prepared to update this
	var trialIndex = 0
	var getReadyText = "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'>"+
	"<p>Get ready for the next one!</p>"+
	"<p>This is trial " + trialIndex + " of "+n_trials+"</p>"+
	"</div></main>"
	
	
		
// Define study
//this uses JSON syntax, so need to be careful with double quotes etc?

//this defines the overall study at one big object
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {}, //all trials will inherit this
  "plugins": [
    {
      "type": "lab.plugins.Metadata"
    },
    {
      "type": "lab.plugins.PostMessage" //not sure what this is...
    }
  ],
  "metadata": { //strings describing the study
    "title": "VM3",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "responses": {},
  "content": [ //this defines the content of the study...
    {
      "type": "lab.html.Screen", //this first screen is the instructions, see text above
      "parameters": {},
	  "responses": {
		  "keypress(Space)": "continue"
	  },
      "messageHandlers": {},
      "title": "Intro",
      "content": instructions,
    },
    {
      "type": "lab.flow.Loop", //next, we have a loop which is going to loop through all our trials/strips
      "parameters": {},
      //every time the loop runs, it will use a set of parameters from this list
      "templateParameters": trials,
      "responses": {},
      "messageHandlers": {},
      "shuffle": true, //this means the trials will be in a shuffled order
      "title": "Trial",
      //the loop works by repeating a template, defined here
      "template": {
        "type": "lab.flow.Sequence",
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Trial Sequence",
        // this is the content of the template, all of these are going to repeat x times
        "content": [
          {
            "type": "lab.html.Screen", //the get ready screen
            "parameters": {"getReadyText": getReadyText},
            "responses": {},
            "messageHandlers": {"before:prepare": function anonymous(){ //this is a function which will
					trialIndex = trialIndex+1;
					getReadyText = "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'>"+
				"<p>Get ready for the next one!</p>"+
				"<p>This is trial " + trialIndex + " of "+n_trials+"</p>"+
				"</div></main>"
					this.parameters.getReadyText = getReadyText
					//console.log("hello")
			}
},
            "title": "GetReady",
            "content": "${parameters.getReadyText}",
            "timeout": getReadyDuration,
            "datacommit": false
          },
          {
            "type": "lab.html.Screen", //a screen presenting our stimulus
            "responses": {
              "keypress(1)": "1",
		"keypress(0)": "0",
            },
            "title": "panel1", //tells us which panel we are using
            "content": "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'><img src='" + URL_stem + "${parameters.panel1}" +"'></div></main>" 
          },
          {
            "type": "lab.html.Screen", //a screen presenting our stimulus
            "responses": {
               "keypress(1)": "1",
		"keypress(0)": "0",
            },
            "title": "panel2", //tells us which panel we are using
            "content": "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'><img src='" + URL_stem + "${parameters.panel2}" +"'></div></main>" 
          },     
          
        ]
      } 
    },
    {
      "type": "lab.html.Screen", //this is the last screen in the study, which will timeout quickly if we are running in qualtrics
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Bye",
      "content": "Ending the experiment! This should time out automatically...",
      "timeout": "100",
      "datacommit": false
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()
