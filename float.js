var timer = null;
var floatHeight  = 83 + 15; //added margin
var floatWidth   = 158 + 3; //added margin

var obj = null;
var IE=0, NS=0;

	// Initializing function, must be called on onLoad event in BODY tag

function init()
{
    	 // get the object as per the browser
    obj = document.layers ? document.layers["float"] :		 
    document.getElementById ?  document.getElementById("float").style :
    document.all["float"].style;
								
         // Detect the browser
    IE  = (-1 != navigator.appVersion.indexOf("MSIE")) ? 1 : 0;
    NS  = ("Netscape" == navigator.appName) ? 1 : 0;

    positionFloat(3); 	 // position initially
    
         // repositioning the layer	
    if(IE)
    { 
         document.body.onscroll = function(){ positionFloat(3); }
         document.body.onresize = function(){ positionFloat(3); }   //when window is resized
    }
    else if(NS)
    { timer = setInterval("positionFloat(3)",15);}
}
 
	// Function which actually positions the layer 	

function positionFloat(iPos)
{
   if(IE)          // IE specific code
   {
     switch(iPos)
     {
   	case 1 :  			// Top Left
      		obj.left = document.body.scrollLeft+'px';;
      		obj.top =  document.body.scrollTop+'px';;
      		break;
   	case 2 :  			// Top Right
      		obj.left = (document.body.scrollLeft + document.body.clientWidth  - floatWidth)+'px';
      		obj.top =  document.body.scrollTop+'px';
      		break;
   	case 3 :  			// Bottom Left
      		obj.left = (document.body.scrollLeft + 5)+'px';
      		obj.top =  (document.body.scrollTop + document.body.clientHeight  - floatHeight)+'px';
      		break;
   	case 4 :  			//Bottom Right
      		obj.left = (document.body.scrollLeft + document.body.clientWidth  - floatWidth)+'px';
      		obj.top =  (document.body.scrollTop + document.body.clientHeight  - floatHeight)+'px';
      		break;
   	case 5 :  	   		// CENTER
      		obj.left = (document.body.scrollLeft + Math.floor((document.body.clientWidth/2) - (floatWidth/2)))+'px';
      		obj.top =  (document.body.scrollTop + Math.floor((document.body.clientHeight/2) - (floatHeight/2)))+'px';
      		break;
     }
   }
   else if(NS)     // Netscape specific code
   {
     switch(iPos)
     {
   	case 1 :  			// Top Left
      		obj.left = self.pageXOffset+'px';
    		obj.top =  self.pageYOffset+'px';
      		break;
   	case 2 :  			// Top Right
      		obj.left =  (self.pageXOffset + self.innerWidth - floatWidth - 15)+'px';
    		obj.top =  self.pageYOffset +'px';
      		break;
   	case 3 :  			// Bottom Left
      		obj.left =  (self.pageXOffset + 5)+'px';
    		obj.top =  (self.pageYOffset  + self.innerHeight - floatHeight)+'px';
      		break;
   	case 4 :  			//Bottom Right
      		obj.left =  (self.pageXOffset + self.innerWidth - floatWidth - 15)+'px';
    		obj.top =  (self.pageYOffset  + self.innerHeight - floatHeight)+'px';
      		break;
   	case 5 :  	   		// CENTER
      		obj.left =  (self.pageXOffset + Math.floor((self.innerWidth/2) - (floatWidth/2) - 15))+'px';
      		obj.top =  (self.pageYOffset  + Math.floor((self.innerHeight/2) - (floatHeight)))+'px';
      		break;
     }
   }
}
