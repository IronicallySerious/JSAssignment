    
    function get_Page(link_url) 
        {
        XMLHttp = new XMLHttpRequest();
        
        
        XMLHttp.open("GET", link_url, true);
        XMLHttp.send();
        
        XMLHttp.onreadystatechange = function() 
        {
                if (this.readyState == 4 && this.status == 200) 
                {
                    document.getElementById("Introduction").innerHTML = this.responseText;
                    history.pushState(window.history.state, null, link_url);
                }
        }
        };

    window.onload = function(e)
    {
        console.log(e);

        
        e.preventDefault();
        console.log("asdfgh");
        document.getElementById('IntroductionLink').onclick = function(e) 
        {
            console.log(e);
            get_Page("introduction.html");
        };
        var xhttp2 = new XMLHttpRequest();
        document.getElementById('AcademicsLink').onclick = function(e) 
        {
            console.log(e);
            get_Page("academics.html");
        };

        var xhttp3 = new XMLHttpRequest();
        document.getElementById('HobbiesLink').onclick = function(e) 
        {
            console.log(e);
            get_Page("hobbies.html");
        };

        var xhttp4 = new XMLHttpRequest();
        document.getElementById('SkillsetLink').onclick = function(e) 
        {
            console.log(e);
            get_Page("skillset.html");
        };

        var xhttp5 = new XMLHttpRequest();
        document.getElementById('ContactLink').onclick = function(e) 
        {
            console.log(e);
            get_Page("contact.html");
        };    
}
var link;
    window.onpushstate = function(e){
        link = history.URL;
    }

    window.onpopstate = function(e,link) {    
            var xhttp5 = new XMLHttpRequest();
            console.log(e);
            xhttp5.open("GET", document.URL, true);
            xhttp5.send();
        
            

            xhttp5.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(document.URL);
                if(document.URL=="http://localhost:8000/")
                {
                    console.log(e);
                get_Page("introduction.html");
                }
                
                else
                    document.getElementById("Introduction").innerHTML = this.responseText;
            }
            };
}