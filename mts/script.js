//Script for running the experiment. Modified from a builder example from lab.js
//See also readme.txt with notes for integrating HTML, js, qualtrics etc.

//template code can be downloaded from  https://labjs.felixhenninger.com

//NOTES ON CHANGING!

//TO CHANGE THE INSTRUCTION TEXT edit this
	//var instructions = "In this experiment you will be reading some short excerpts from the first few issues of the American comic THE SAVAGE DRAGON by Erik Larsen. It is a comic about a superpowered police officer (Dragon) who fights crime with and against other superpowered characters in Chicago (though in one excerpt here he travels to New York). We simply would like you to read the comic, and then answer some questions afterwards. Please read it carefully enough to be able to answer some questions about the story. Each panel will appear one panel at a time in the layout, and you can press the SPACEBAR on the keyboard to advance to the next panel. We recommend enlarging your window to MAXIMUM size so you can view the whole page at a time."
	// To make it prettier, define it within html
	var instructions = "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'>"+
	"<p>In this experiment you will be reading some short excerpts from the first few issues of the American comic THE SAVAGE DRAGON by Erik Larsen.</p>"+
	"<p> It is a comic about a superpowered police officer (Dragon) who fights crime with and against other superpowered characters in Chicago (though in one excerpt here he travels to New York).</p>"+
	"<p>We simply would like you to read the comic, and then answer some questions afterwards.</p>"+
	"<p>Please read it carefully enough to be able to answer some questions about the story.</p>"+
	"<p>Each panel will appear one panel at a time in the layout, and you can press the SPACEBAR on the keyboard to advance to the next panel.</p>"+
	"<p>We recommend enlarging your window to MAXIMUM size so you can view the whole page at a time.</p>"+
	"<p>Please press SPACE when you're ready (you may need to click here with the mouse first!)</p>"+
	"</div></main>"
	//define the get ready text, not currently used because set further down
	var getReadyText = "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'><p>Get ready for the next strip!</p></div></main>"
	
//CHANGE THE ISI DURATIONS HERE
	var getReadyDuration = 10

//TO CHANGE THE SEQUENCE OF EVENTS IN A TRIAL...
	//head down to line 110 where the inner loop template starts

//TO CHANGE THE SOURCE IMAGES ETC
	//var URL_stem = "https://vislanglab.github.io/mts/img/"; //location of the stimuli, URL or...
	var URL_stem = "img/"; //location of the stimuli, relative path to this file

	//Deal with counterbalancing etc and re-configure so that we can use in lab.js template
	//using same datasource arrays as in previous experiments with jspsych

	// (AllDataSources is originally loaded in the html header)
	// choose one of the sets at random
	var DataSource = AllDataSources[Math.floor(Math.random()*AllDataSources.length)];

	var n_trials = 107;//DataSource.length; //length of array gives number of sequences

	// LAB.JS loop will handle randomisation, but need to transform the DataSource into an object for the trial list
	// i.e., loop through the data source, adding each item to named properties

		//this is the list of parameters that we are going to end up with for every "trial" sequence
		trialProps=["list","Condition","ECS_Block","Direction","Framing","Character","Spatial","Time","NS-bigram","BigramType","PanelNS","Critical","Page#","Panel#","PagePanel","Stimulus"];

		trials=[];
		for (index = 0; index < n_trials; index++) {

			//for each trial, loop through and add them to a new object with named fields
			thisTrial={};
			for (p = 0; p < trialProps.length; p++) {
				thisTrial[trialProps[p]]=DataSource[index][p];
			}
			trials.push(thisTrial);
		}	
		
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
    "title": "MTS",
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
            "responses": {
              			"keypress(Space)": "1",

            },
            "title": "Stimulus", //tells us the strip we are analyzing
            "content": "<main class='content-vertical-center content-horizontal-center'><div style='text-align:center;'><img src='" + URL_stem + "${parameters.Stimulus}" +"'></div></main>" 
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
