$(document).ready(function () {
    
    $("#loader").hide();
    $(document).ajaxStart(function() { $("#loader").show(); })
    .ajaxStop(function() { $("#loader").hide(); });
    $('#btnsearch').on('click', search);
   

    function search() {
        // console.log($('#keyword').val());
        let Keyword = $('#keyword').val().trim();

        $.ajax(`http://localhost:4000/?keyword=${Keyword}`, { "type": "GET" })
         .done(myAjaxSuccessFunction)
         .fail(ajaxFailure)
         .always(function() {
            $("#loader").hide();
        });


        function myAjaxSuccessFunction(data) {
        
            $('.result-box').empty();
            let wordtype='';
            for (let i = 0; i < data.length; i++) {
                wordtype=data[i].wordtype;
                if(wordtype.trim()!==''){
                    wordtype="("+wordtype+")";
                }
                $('.result-box').append(`<p>
                <span class="number">${i + 1}</span>
                <span class="wordtype">${wordtype}</span>
                    ${data[i].definition}
                </p>
                `)

            }
            
        }
        function ajaxFailure(xhr, status, exception) {
            $('.result-box').html('<strong>Record not found</strong>');
        }
    }

});
