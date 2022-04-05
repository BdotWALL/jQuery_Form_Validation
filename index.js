$(document).ready(function(){ 
    $('#submit').on('click', function() { 
        
        const name = $('#name') 
        const email = $('#email')
        const number = $('#phone')
        const mssg = $('#message')

        const required = [name,email,number]

        for (let i=0; i<required.length; i++){ 
            if (required[i].val() === ''){ 

                $(mssg).html("<p>Please Fill Out Required Fields</p>").addClass('warning')
                required[i].prev().addClass('warning') 
            } else {
                required[i].prev().removeClass() 
            }
        }
        if (!$("label").hasClass('warning')) { 
            $("#form").remove(); 
            $("h2").text("Thanks for your feedback!") 
        }
    })
})