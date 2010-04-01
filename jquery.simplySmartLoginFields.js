/*
* jQuery Simply Smart Login Fields plugin
* Provides default values to login forms' username and password fields
* 
* @version  0.1
* @homepage http://github.com/aaronrussell/jquery-simply-smart-login-fields/
* @author   Aaron Russell (http://www.aaronrussell.co.uk)
*
* Copyright (c) 2010 Aaron Russell (aaron@gc4.co.uk)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/

(function($){
  
  $.fn.simplySmartLoginFields = function(options){
    
    options = $.extend({
      usernameSelector: 'input[name="username"]',
      passwordSelector: 'input[name="password"]',
      usernameValue:    'Username...',
      passwordValue:    'Password...'
    }, options);
    
    var username = this.find(options.usernameSelector);
    var password = this.find(options.passwordSelector);
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