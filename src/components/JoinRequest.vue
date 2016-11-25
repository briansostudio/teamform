<template>
    <div class="wrapper">
    <div class="ui teal button" @click="showForm">Join Request</div>
    <div class="ui modal">
        <div class="ui piled segment">
            <h1 class="ui horizontal divider header">Join Request</h1>
            <div class="content">
                <div class="ui form">
                    <div class="field">
                        <label><h3>Message:</h3></label>
                        <div class="msgInput">
                            <textarea v-model="message" @focus="hideWarning" placeholder="Please Leave Your Message here"></textarea>
                        </div>
                    </div>
                </div>
                <div class="ui divider"></div>
                <div class="actions buttons">
                    <div class="ui cancel button" @click="hideForm">
                    Cancel
                    </div>
                    <div class="ui teal right labeled icon button" @click="sendForm">
                    Send
                    <i class="send icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
     data() {
        return {
            message: ''
        }
     },
     methods:{
         showForm : () => {
            $('.ui.modal')
            .modal('show')
            ;
         },

        /* es6 arrow function is the kind of anonymous function which "this" cannot be access*/
         sendForm : function() {
             if(this.message==''){
                // $('.msgInput').popup({
                //     on: 'manual',
                //     position: 'top center',
                //     title: 'Request Form cannot be empty',
                //     content: 'Please let us know more about you'
	        	// });
                // $('.msgInput').popup('toggle');
               swal({
                    title: 'Empty Message',
                    text: "Nothing to say?",
                    type: 'question',
                    showCloseButton: true,
                    confirmButtonText: ' YES ',
                    confirmButtonClass: 'ui teal button',
                    buttonsStyling: false
               }).then(function(){
                    swal({
                        title: 'Successfully Sent',
                        type: 'success',
                        confirmButtonText: ' OK ',
                        confirmButtonClass: 'ui teal button',
                        buttonsStyling: false
                    })
               });
             }else{
                    swal({
                        title: 'Successfully Sent',
                        type: 'success',
                        confirmButtonText: ' OK ',
                        confirmButtonClass: 'ui teal button',
                        buttonsStyling: false
                    });
             }
             this.hideForm();
         },
         hideForm : function() {
             this.hideWarning();
            $('.ui.modal')
            .modal('hide')
            ;
         },
         hideWarning : function() {
            $('.msgInput').popup('hide');
        }
     }
}
</script>

<style>
    .buttons{
       text-align: right;
    }
</style>
