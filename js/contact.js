console.log("it works")

$(document).ready(function () {
    $('.submit').click(function (event) {       
        console.log('Clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.messages').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is invalid</div>')
            
        }

        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is invalid</div>')
            
        }

        if(messages.length >= 10) {
            statusElm.append('<div>Message is valid</div>')                       
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is invalid</div>')
            
        }
    })    
})