(function($){
  
  $.fn.smartAssLoginValues = function(options){
    
    options = $.extend({
      usernameSelecter: 'input[name="username"]',
      passwordSelecter: 'input[name="password"]',
      usernameValue:    'Username...',
      passwordValue:    'Password...',
    }, options);
    
    var username = this.find(options.usernameSelecter);
    var password = this.find(options.passwordSelecter);
    username.val(options.usernameValue);
    password.hide().after('<input type="text" id="fakepassword" value="'+options.passwordValue+'" />');
    var fakepassword = $('#fakepassword');
    username.focus(function(){ if ($(this).val() == options.usernameValue){$(this).val('');} });
    username.blur(function(){ if ($(this).val() == ''){$(this).val(options.usernameValue);} });
    fakepassword.focus(function(){
      $(this).hide();
      password.show().focus();
    });
    password.blur(function(){
      if ($(this).val() == ''){
        $(this).hide();
        fakepassword.show();
      }
    });
  };
  
})(jQuery);