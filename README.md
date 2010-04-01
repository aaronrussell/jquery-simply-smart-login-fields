# jQuery Smart Ass Login Values plugin

jQuery plugin that provides default values to login forms' username and password fields. Works by hiding the real password field and creating a _fake password_ text field so the default value can be shown as text. When the `focus` event is called on the fake password field, it is hidden and replaced by the real password field. Simples!

* version - 0.1
* homepage - [http://github.com/aaronrussell/jquery-smart-ass-login-values/](http://github.com/aaronrussell/jquery-smart-ass-login-values/)
* author - [Aaron Russell](http://www.aaronrussell.co.uk)

## Usage

Simple usage:

    $('#login_form').smartAssLoginValues();

Advanced usage:

    $('#login_form').smartAssLoginValues({
        usernameSelector: 'input[name="username"]',
        passwordSelector: 'input[name="password"]',
        usernameValue:    'Username...',
        passwordValue:    'Password...'
    });

## Options

* `usernameSelector` - A jQuery selector to match the username field. Defaults to `input[name="username"]`.
* `passwordSelector` - A jQuery selector to match the password field. Defaults to `input[name="password"]`.
* `usernameValue` - The default value for the username field. Defaults to `Username...`.
* `passwordValue` - The default value for the username field. Defaults to `Password...`.

## License

Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

Copyright (c) 2010 [Aaron Russell](http://www.aaronrussell.co.uk).